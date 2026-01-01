
/**
 * Google Apps Script client library for the Tag Manager API
 * Documentation URL: https://developers.google.com/tag-manager
 * @class
 */
class Tagmanager {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://tagmanager.googleapis.com/';
    this._servicePath = '';


    this.accounts = {};
    this.accounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}', 'GET', apiParams, clientConfig);
    this.accounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts', 'GET', apiParams, clientConfig);
    this.accounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}', 'PUT', apiParams, clientConfig);

    this.accounts.permissions = {};
    this.accounts.permissions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions/{permissionId}', 'PUT', apiParams, clientConfig);
    this.accounts.permissions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions', 'GET', apiParams, clientConfig);
    this.accounts.permissions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions', 'POST', apiParams, clientConfig);
    this.accounts.permissions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions/{permissionId}', 'GET', apiParams, clientConfig);
    this.accounts.permissions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions/{permissionId}', 'DELETE', apiParams, clientConfig);

    this.accounts.containers = {};
    this.accounts.containers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers', 'GET', apiParams, clientConfig);
    this.accounts.containers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers', 'POST', apiParams, clientConfig);
    this.accounts.containers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}', 'GET', apiParams, clientConfig);
    this.accounts.containers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}', 'PUT', apiParams, clientConfig);

    this.accounts.containers.folders = {};
    this.accounts.containers.folders.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.folders.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders', 'POST', apiParams, clientConfig);
    this.accounts.containers.folders.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.folders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}', 'GET', apiParams, clientConfig);
    this.accounts.containers.folders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders', 'GET', apiParams, clientConfig);

    this.accounts.containers.folders.entities = {};
    this.accounts.containers.folders.entities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}/entities', 'GET', apiParams, clientConfig);

    this.accounts.containers.tags = {};
    this.accounts.containers.tags.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.tags.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.tags.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}', 'GET', apiParams, clientConfig);
    this.accounts.containers.tags.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags', 'POST', apiParams, clientConfig);
    this.accounts.containers.tags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags', 'GET', apiParams, clientConfig);

    this.accounts.containers.move_folders = {};
    this.accounts.containers.move_folders.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/move_folders/{folderId}', 'PUT', apiParams, clientConfig);

    this.accounts.containers.versions = {};
    this.accounts.containers.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}', 'GET', apiParams, clientConfig);
    this.accounts.containers.versions.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.versions.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/restore', 'POST', apiParams, clientConfig);
    this.accounts.containers.versions.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/undelete', 'POST', apiParams, clientConfig);
    this.accounts.containers.versions.publish = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/publish', 'POST', apiParams, clientConfig);
    this.accounts.containers.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions', 'GET', apiParams, clientConfig);
    this.accounts.containers.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions', 'POST', apiParams, clientConfig);
    this.accounts.containers.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}', 'DELETE', apiParams, clientConfig);

    this.accounts.containers.reauthorize_environments = {};
    this.accounts.containers.reauthorize_environments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/reauthorize_environments/{environmentId}', 'PUT', apiParams, clientConfig);

    this.accounts.containers.triggers = {};
    this.accounts.containers.triggers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.triggers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers', 'POST', apiParams, clientConfig);
    this.accounts.containers.triggers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}', 'GET', apiParams, clientConfig);
    this.accounts.containers.triggers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.triggers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers', 'GET', apiParams, clientConfig);

    this.accounts.containers.environments = {};
    this.accounts.containers.environments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments', 'GET', apiParams, clientConfig);
    this.accounts.containers.environments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.environments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}', 'GET', apiParams, clientConfig);
    this.accounts.containers.environments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.environments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments', 'POST', apiParams, clientConfig);

    this.accounts.containers.variables = {};
    this.accounts.containers.variables.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}', 'PUT', apiParams, clientConfig);
    this.accounts.containers.variables.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables', 'GET', apiParams, clientConfig);
    this.accounts.containers.variables.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}', 'GET', apiParams, clientConfig);
    this.accounts.containers.variables.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}', 'DELETE', apiParams, clientConfig);
    this.accounts.containers.variables.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables', 'POST', apiParams, clientConfig);
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
