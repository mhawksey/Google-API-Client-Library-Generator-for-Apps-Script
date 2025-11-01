
/**
 * Google Apps Script client library for the Cloud Deployment Manager V2 API
 * Documentation URL: https://cloud.google.com/deployment-manager
 * @class
 */
class Deploymentmanager {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://deploymentmanager.googleapis.com/';
    this._servicePath = '';


    this.manifests = {};
    this.manifests.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/manifests/{manifest}', 'GET', apiParams, clientConfig);
    this.manifests.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/manifests', 'GET', apiParams, clientConfig);

    this.resources = {};
    this.resources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/resources/{resource}', 'GET', apiParams, clientConfig);
    this.resources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/resources', 'GET', apiParams, clientConfig);

    this.deployments = {};
    this.deployments.cancelPreview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/cancelPreview', 'POST', apiParams, clientConfig);
    this.deployments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}', 'PUT', apiParams, clientConfig);
    this.deployments.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.deployments.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.deployments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments', 'POST', apiParams, clientConfig);
    this.deployments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}', 'PATCH', apiParams, clientConfig);
    this.deployments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}', 'DELETE', apiParams, clientConfig);
    this.deployments.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}/stop', 'POST', apiParams, clientConfig);
    this.deployments.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.deployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments/{deployment}', 'GET', apiParams, clientConfig);
    this.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/deployments', 'GET', apiParams, clientConfig);

    this.types = {};
    this.types.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/types/{type}', 'GET', apiParams, clientConfig);
    this.types.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/types', 'GET', apiParams, clientConfig);

    this.typeProviders = {};
    this.typeProviders.getType = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}/types/{type}', 'GET', apiParams, clientConfig);
    this.typeProviders.listTypes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}/types', 'GET', apiParams, clientConfig);
    this.typeProviders.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}', 'DELETE', apiParams, clientConfig);
    this.typeProviders.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}', 'PUT', apiParams, clientConfig);
    this.typeProviders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}', 'GET', apiParams, clientConfig);
    this.typeProviders.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/typeProviders', 'POST', apiParams, clientConfig);
    this.typeProviders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/typeProviders', 'GET', apiParams, clientConfig);
    this.typeProviders.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/typeProviders/{typeProvider}', 'PATCH', apiParams, clientConfig);

    this.operations = {};
    this.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/operations', 'GET', apiParams, clientConfig);
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/operations/{operation}', 'GET', apiParams, clientConfig);

    this.compositeTypes = {};
    this.compositeTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/compositeTypes', 'GET', apiParams, clientConfig);
    this.compositeTypes.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/compositeTypes', 'POST', apiParams, clientConfig);
    this.compositeTypes.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}', 'PUT', apiParams, clientConfig);
    this.compositeTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}', 'PATCH', apiParams, clientConfig);
    this.compositeTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}', 'GET', apiParams, clientConfig);
    this.compositeTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('deploymentmanager/alpha/projects/{project}/global/compositeTypes/{compositeType}', 'DELETE', apiParams, clientConfig);
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
