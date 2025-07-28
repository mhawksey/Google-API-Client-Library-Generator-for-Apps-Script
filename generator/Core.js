// =========================================================================
// CORE HELPER FUNCTIONS
// =========================================================================

/**
 * Generates the library and manifest content from a specific discovery URL.
 */
function generateLibraryContent_(discoveryUrl, options = {includeJsDoc: false}) {
  const response = UrlFetchApp.fetch(discoveryUrl, { muteHttpExceptions: true });
  if (response.getResponseCode() !== 200) {
    Logger.log(`   - Failed to fetch discovery doc from URL: ${discoveryUrl}. Status: ${response.getResponseCode()}`);
    return null;
  }
  
  const discoveryDoc = JSON.parse(response.getContentText());
  // ** Pass the source URL down to the generator for documentation **
  const libraryCode = generateCodeFromDiscovery_(discoveryDoc, discoveryUrl, options.includeJsDoc);
  
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
 * @param {string} sourceUrl The URL from which the discovery doc was fetched.
 * @param {boolean} includeJsDoc Whether to generate JSDoc comments.
 * @return {string} The generated Apps Script code.
 */
function generateCodeFromDiscovery_(discoveryDoc, sourceUrl, includeJsDoc) {
  const className = generateClassName_(discoveryDoc);

  // This recursive helper now builds the string for assigning properties to 'this'.
  function buildApiObjectString_(resources, parentPath = 'this') {
    let parts = [];
    if (!resources) return '';

    for (const resourceName in resources) {
      const resource = resources[resourceName];
      const currentPath = `${parentPath}.${resourceName}`;
      
      let methodParts = [];
      
      // Initialize the namespace object
      parts.push(`\n    ${currentPath} = {};`);

      if (resource.methods) {
        for (const methodName in resource.methods) {
          const method = resource.methods[methodName];
          let methodString = '';
          if (includeJsDoc) {
            methodString += `\n    ${buildMethodJsDoc_(method).replace(/\n/g, '\n    ')}\n`;
          }
          // Use arrow function to correctly bind 'this' to the class instance.
          methodString += `    ${currentPath}.${methodName} = (params) => this._makeRequest('${method.path}', '${method.httpMethod}', params);`;
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

  // ** New class structure, following all recommendations **
  const fullClassCode = `${mainComment}
class ${className} {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = '${discoveryDoc.rootUrl}';
    this._servicePath = '${discoveryDoc.servicePath || ''}';

    // --- Public Interface Initialization ---
${apiInitializationCode}
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(\`\${encodeURIComponent(key)}=\${encodeURIComponent(remainingParams[key])}\`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
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

function buildMethodJsDoc_(method) {
  const jsdoc = ['/**'];
  if (method.description) {
    const sanitizedDesc = sanitizeForJsDoc_(method.description);
    jsdoc.push(` * ${sanitizedDesc.trim().replace(/\n/g, '\n * ')}`);
  }
  if (method.parameters) {
    Object.keys(method.parameters).sort().forEach(paramName => {
      const param = method.parameters[paramName];
      const type = param.type || 'string';
      let description = param.description || '';
      if (param.required) description = `(Required) ${description}`;
      
      const sanitizedDesc = sanitizeForJsDoc_(description);
      jsdoc.push(` * @param {${type}} params.${paramName} - ${sanitizedDesc.trim()}`);
    });
  }
  if (method.request) {
    jsdoc.push(` * @param {object} params.resource - The request body.`);
  }
  jsdoc.push(' * @return {object} The API response object.');
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
          
          // =================================================================
          // *** THE DEFINITIVE FIX ***
          // Programmatically re-introduces newlines before list items.
          // =================================================================
          if (method.description) {
            // Replaces " * " with "\n\n* " to create formatted lists.
            const formattedDescription = method.description.replace(/ \* /g, '\n\n* ');
            
            apiDocs += `\n${formattedDescription}\n\n`;
          }
          
          if (method.parameters) {
            apiDocs += `| Parameter | Type | Required | Description |\n`;
            apiDocs += `|---|---|---|---|\n`;
            for (const paramName in method.parameters) {
              const p = method.parameters[paramName];
              apiDocs += `| \`params.${paramName}\` | \`${p.type || 'string'}\` | ${p.required ? 'Yes' : 'No'} | ${p.description || ''} |\n`;
            }
          }
           if (method.request) {
               apiDocs += `| \`params.resource\` | \`object\` | Yes | The request body. |\n`;
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