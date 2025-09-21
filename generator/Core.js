// =========================================================================
// CORE HELPER FUNCTIONS
// =========================================================================

/**
 * Generates the library and manifest content from a specific discovery URL.
 */
function generateLibraryContent_(discoveryUrl, options = { includeJsDoc: false }) {
  const response = UrlFetchApp.fetch(discoveryUrl, { muteHttpExceptions: true });
  if (response.getResponseCode() !== 200) {
    Logger.log(`   - Failed to fetch discovery doc from URL: ${discoveryUrl}. Status: ${response.getResponseCode()}`);
    return null;
  }

  const discoveryDoc = JSON.parse(response.getContentText());
  // ** Pass the source URL down to the generator for documentation **
  const libraryCode = generateCodeFromDiscovery_(discoveryDoc, options.includeJsDoc);

  const allScopes = discoveryDoc.auth?.oauth2?.scopes ? Object.keys(discoveryDoc.auth.oauth2.scopes) : [];
  if (allScopes.length > 0 && !allScopes.includes('https://www.googleapis.com/auth/script.external_request')) {
    allScopes.push('https://www.googleapis.com/auth/script.external_request');
  }

  const manifest = JSON.stringify({
    "timeZone": "Etc/GMT",
    "exceptionLogging": "STACKDRIVER",
    "runtimeVersion": "V8",
    "oauthScopes": allScopes
  }, null, 2);

  return { libraryCode, manifest, discoveryDoc };
}

/**
 * NEW HELPER to generate a smart, descriptive class/file name.
 */
function generateClassName_(discoveryDoc) {
  const name = discoveryDoc.name;
  const version = discoveryDoc.version;
  if (name === 'admin' && version.includes('_')) {
    const serviceName = version.split('_')[0];
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    const capService = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
    return `${capName}${capService}`;
  }
  return name.charAt(0).toUpperCase() + name.slice(1);
}

let _apiListCache = null;

function getApiList_() {
  if (_apiListCache) {
    return _apiListCache;
  }

  const discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis';
  try {
    Logger.log('Fetching master API list from network (this will happen once per execution)...');
    const response = UrlFetchApp.fetch(discoveryUrl);
    const apiList = JSON.parse(response.getContentText()).items;
    _apiListCache = apiList;
    return apiList;

  } catch (e) {
    Logger.log(`❌ Failed to fetch the master API list from the network: ${e.toString()}`);
    return null;
  }
}

// =========================================================================
// CODE GENERATION HELPER FUNCTIONS (REFACTORED)
// =========================================================================

/**
 * Generates the Apps Script code from a Discovery Document, following modern
 * and robust class design principles.
 *
 * @param {object} discoveryDoc The parsed Discovery Document.
 * @param {boolean} includeJsDoc Whether to generate JSDoc comments.
 * @return {string} The generated Apps Script code.
 */
function generateCodeFromDiscovery_(discoveryDoc, includeJsDoc) {
  const className = generateClassName_(discoveryDoc);

  // This recursive helper builds the string for assigning properties to 'this'.
  function buildApiObjectString_(resources, parentPath = 'this') {
    let parts = [];
    if (!resources) return '';

    for (const resourceName in resources) {
      const resource = resources[resourceName];
      const currentPath = `${parentPath}.${resourceName}`;
      let methodParts = [];
      parts.push(`\n    ${currentPath} = {};`);

      if (resource.methods) {
        for (const methodName in resource.methods) {
          const method = resource.methods[methodName];
          let methodString = '';
          if (includeJsDoc) {
            methodString += `\n    ${buildMethodJsDoc_(method).replace(/\n/g, '\n    ')}\n`;
          }

          // --- Start of Updated Logic ---

          // Check if the method supports media uploads and has the necessary path info.
          if (method.supportsMediaUpload && method.mediaUpload?.protocols?.simple?.path) {
            const standardPath = method.path;
            const uploadPath = method.mediaUpload.protocols.simple.path;

            // Generate a dynamic method that selects the path at runtime.
            methodString += `    ${currentPath}.${methodName} = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '${uploadPath}' : '${standardPath}';
      return this._makeRequest(path, '${method.httpMethod}', apiParams, clientConfig);
    };`;

          } else {
            // If no media upload support, generate the original, simpler method.
            methodString += `    ${currentPath}.${methodName} = async (apiParams = {}, clientConfig = {}) => this._makeRequest('${method.path}', '${method.httpMethod}', apiParams, clientConfig);`;
          }
          // --- End of Updated Logic ---

          methodParts.push(methodString);
        }
      }
      parts.push(...methodParts);

      if (resource.resources) {
        parts.push(buildApiObjectString_(resource.resources, currentPath));
      }
    }
    return parts.join('\n');
  }

  const apiInitializationCode = buildApiObjectString_(discoveryDoc.resources);

  const mainComment = `
/**
 * Google Apps Script client library for the ${discoveryDoc.title}
 * Documentation URL: ${discoveryDoc.documentationLink}
 * @class
 */`;

  const fullClassCode = `${mainComment}
class ${className} {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = '${discoveryDoc.rootUrl}';
    this._servicePath = '${discoveryDoc.servicePath || ''}';

${apiInitializationCode}
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\\r\\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\\r\\n\\r\\n';
            requestData += JSON.stringify(metadata) + '\\r\\n';
            requestData += '--' + boundary + '\\r\\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\\r\\n\\r\\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\\r\\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(\`\${encodeURIComponent(key)}=\${encodeURIComponent(remainingParams[key])}\`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && clientConfig.responseType === 'blob') || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = \`Request failed with status \${responseCode}\`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += \`: \${errorObj.error.message}\`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += \`. Response: \${responseText}\`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
`;
  return fullClassCode;
}

function sanitizeForJsDoc_(text) {
  if (!text) return '';
  return text.replace(/\*\//g, '*\\/');
}

/**
 * @private
 * Builds the complete JSDoc comment string for a single API method.
 * This function reads the metadata from a method object, sanitizes
 * the descriptions, and formats the final comment block.
 *
 * @param {object} method - The method object from the parsed discovery document.
 * @return {string} The formatted, multi-line JSDoc comment as a single string.
 */
function buildMethodJsDoc_(method) {
  const jsdoc = ['/**'];
  if (method.description) {
    const sanitizedDesc = sanitizeForJsDoc_(method.description);
    jsdoc.push(` * ${sanitizedDesc.trim().replace(/\n/g, '\n * ')}`);
  }

  // --- Start of JSDoc Parameter Updates ---

  jsdoc.push(` * @param {object} apiParams - The parameters for the API request.`);

  if (method.parameters) {
    Object.keys(method.parameters).sort().forEach(paramName => {
      const param = method.parameters[paramName];
      const type = param.type || 'string';
      let description = param.description || '';
      if (param.required) description = `(Required) ${description}`;

      const sanitizedDesc = sanitizeForJsDoc_(description);
      // MODIFIED: Document parameters as properties of 'apiParams'.
      jsdoc.push(` * @param {${type}} apiParams.${paramName} - ${sanitizedDesc.trim()}`);
    });
  }
  if (method.request) {
    // MODIFIED: Document requestBody as a property of 'apiParams'.
    jsdoc.push(` * @param {object} apiParams.requestBody - The request body.`);
  }

  // NEW: Add documentation for the optional clientConfig parameter.
  jsdoc.push(` * @param {object} [clientConfig] - Optional client-side configuration.`);
  jsdoc.push(` * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.`);

  // --- End of JSDoc Parameter Updates ---

  // MODIFIED: Update the return description to account for the 'blob' response type.
  jsdoc.push(' * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.');
  jsdoc.push(' */');
  return jsdoc.join('\n');
}


// =========================================================================
// CODE AND MARKDOWN GENERATORS
// =========================================================================

/**
 * Builds the content for the README.md file, with full method paths in titles
 * and correctly formatted multi-line descriptions.
 */
function buildMarkdownDoc_(discoveryDoc, existingDoc, codeHasChanged) {
  const now = new Date().toUTCString();
  let created = now;
  let modified = now;

  if (existingDoc) {
    const createdMatch = existingDoc.content.match(/-\s\*\*Created:\*\*\s(.*)/);
    if (createdMatch) created = createdMatch[1];
  }

  if (codeHasChanged || !existingDoc) {
    modified = now;
  } else if (existingDoc) {
    const modifiedMatch = existingDoc.content.match(/-\s\*\*Last Modified:\*\*\s(.*)/);
    if (modifiedMatch) modified = modifiedMatch[1];
  }

  let mainTitle = `${discoveryDoc.title} - Apps Script Client Library`;
  if (discoveryDoc.name === 'admin' && discoveryDoc.version.includes('_')) {
    const serviceName = discoveryDoc.version.split('_')[0];
    const capService = serviceName.charAt(0).toUpperCase() + serviceName.slice(1);
    mainTitle = `${discoveryDoc.title} (${capService}) - Apps Script Client Library`;
  }

  let apiDocs = `\n\n---\n\n## API Reference\n`;
  function buildResourceDocs(resources, parentName = '') {
    for (const resourceName in resources) {
      const fullName = parentName ? `${parentName}.${resourceName}` : resourceName;
      apiDocs += `\n### \`${fullName}\`\n`;
      const resource = resources[resourceName];
      if (resource.methods) {
        for (const methodName in resource.methods) {
          const method = resource.methods[methodName];

          apiDocs += `\n#### \`${fullName}.${methodName}()\`\n`;

          if (method.description) {
            const formattedDescription = method.description.replace(/ \* /g, '\n\n* ');
            apiDocs += `\n${formattedDescription}\n\n`;
          }

          if (method.parameters || method.request) {
            apiDocs += `| Parameter | Type | Required | Description |\n`;
            apiDocs += `|---|---|---|---|\n`;
          }
          if (method.parameters) {
            for (const paramName in method.parameters) {
              const p = method.parameters[paramName];
              apiDocs += `| \`params.${paramName}\` | \`${p.type || 'string'}\` | ${p.required ? 'Yes' : 'No'} | ${p.description || ''} |\n`;
            }
          }
          // MODIFIED: Standardize on 'requestBody' parameter name in documentation.
          if (method.request) {
            apiDocs += `| \`params.requestBody\` | \`object\` | Yes | The request body. |\n`;
          }
        }
      }
      if (resource.resources) buildResourceDocs(resource.resources, fullName);
    }
  }

  if (discoveryDoc.resources) {
    buildResourceDocs(discoveryDoc.resources);
  } else {
    apiDocs += "\nThis API has no resources defined in its discovery document.\n";
  }

  const docContent = `
# ${mainTitle}

Auto-generated client library for using the **${discoveryDoc.title} (version: ${discoveryDoc.version})** in Google Apps Script.

## Metadata

- **Last Checked:** ${now}
- **Last Modified:** ${modified}
- **Created:** ${created}

${apiDocs}
`;
  return docContent.trim();
}