
/**
 * Google Apps Script client library for the Cloud Resource Manager API
 * Documentation URL: https://cloud.google.com/resource-manager
 * @class
 */
class Cloudresourcemanager {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://cloudresourcemanager.googleapis.com/';
    this._servicePath = '';


    this.liens = {};
    this.liens.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/liens', 'POST', apiParams, clientConfig);
    this.liens.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);
    this.liens.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.liens.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/liens', 'GET', apiParams, clientConfig);

    this.tagValues = {};
    this.tagValues.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);
    this.tagValues.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/tagValues', 'POST', apiParams, clientConfig);
    this.tagValues.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);
    this.tagValues.getNamespaced = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/tagValues/namespaced', 'GET', apiParams, clientConfig);
    this.tagValues.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.tagValues.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.tagValues.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.tagValues.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.tagValues.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/tagValues', 'GET', apiParams, clientConfig);

    this.tagValues.tagHolds = {};
    this.tagValues.tagHolds.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/tagHolds', 'GET', apiParams, clientConfig);
    this.tagValues.tagHolds.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);
    this.tagValues.tagHolds.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/tagHolds', 'POST', apiParams, clientConfig);

    this.tagBindings = {};
    this.tagBindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/tagBindings', 'POST', apiParams, clientConfig);
    this.tagBindings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);
    this.tagBindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/tagBindings', 'GET', apiParams, clientConfig);

    this.operations = {};
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    this.locations = {};

    this.locations.effectiveTagBindingCollections = {};
    this.locations.effectiveTagBindingCollections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    this.locations.tagBindingCollections = {};
    this.locations.tagBindingCollections.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);
    this.locations.tagBindingCollections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    this.effectiveTags = {};
    this.effectiveTags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/effectiveTags', 'GET', apiParams, clientConfig);

    this.folders = {};
    this.folders.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/folders:search', 'GET', apiParams, clientConfig);
    this.folders.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);
    this.folders.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/folders', 'POST', apiParams, clientConfig);
    this.folders.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:move', 'POST', apiParams, clientConfig);
    this.folders.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.folders.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.folders.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.folders.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);
    this.folders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/folders', 'GET', apiParams, clientConfig);
    this.folders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.folders.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.folders.capabilities = {};
    this.folders.capabilities.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.folders.capabilities.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    this.tagKeys = {};
    this.tagKeys.getNamespaced = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/tagKeys/namespaced', 'GET', apiParams, clientConfig);
    this.tagKeys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);
    this.tagKeys.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);
    this.tagKeys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/tagKeys', 'POST', apiParams, clientConfig);
    this.tagKeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/tagKeys', 'GET', apiParams, clientConfig);
    this.tagKeys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.tagKeys.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.tagKeys.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.tagKeys.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    this.projects = {};
    this.projects.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/projects', 'POST', apiParams, clientConfig);
    this.projects.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.projects.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.projects.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/projects:search', 'GET', apiParams, clientConfig);
    this.projects.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:move', 'POST', apiParams, clientConfig);
    this.projects.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/projects', 'GET', apiParams, clientConfig);
    this.projects.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations = {};
    this.organizations.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/organizations:search', 'GET', apiParams, clientConfig);
    this.organizations.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.organizations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.organizations.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
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

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

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
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
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
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
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
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
