
/**
 * Google Apps Script client library for the Access Context Manager API
 * Documentation URL: https://cloud.google.com/access-context-manager/docs/reference/rest/
 * @class
 */
class Accesscontextmanager {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://accesscontextmanager.googleapis.com/';
    this._servicePath = '';


    this.operations = {};
    this.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.accessPolicies = {};
    this.accessPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accessPolicies', 'GET', apiParams, clientConfig);
    this.accessPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.accessPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/accessPolicies', 'POST', apiParams, clientConfig);
    this.accessPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accessPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.accessPolicies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.accessPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.accessPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.accessPolicies.accessLevels = {};
    this.accessPolicies.accessLevels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/accessLevels', 'GET', apiParams, clientConfig);
    this.accessPolicies.accessLevels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.accessPolicies.accessLevels.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/accessLevels', 'POST', apiParams, clientConfig);
    this.accessPolicies.accessLevels.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accessPolicies.accessLevels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.accessPolicies.accessLevels.replaceAll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/accessLevels:replaceAll', 'POST', apiParams, clientConfig);
    this.accessPolicies.accessLevels.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.accessPolicies.servicePerimeters = {};
    this.accessPolicies.servicePerimeters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/servicePerimeters', 'GET', apiParams, clientConfig);
    this.accessPolicies.servicePerimeters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.accessPolicies.servicePerimeters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/servicePerimeters', 'POST', apiParams, clientConfig);
    this.accessPolicies.servicePerimeters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accessPolicies.servicePerimeters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.accessPolicies.servicePerimeters.replaceAll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/servicePerimeters:replaceAll', 'POST', apiParams, clientConfig);
    this.accessPolicies.servicePerimeters.commit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/servicePerimeters:commit', 'POST', apiParams, clientConfig);
    this.accessPolicies.servicePerimeters.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.accessPolicies.authorizedOrgsDescs = {};
    this.accessPolicies.authorizedOrgsDescs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizedOrgsDescs', 'GET', apiParams, clientConfig);
    this.accessPolicies.authorizedOrgsDescs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.accessPolicies.authorizedOrgsDescs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizedOrgsDescs', 'POST', apiParams, clientConfig);
    this.accessPolicies.authorizedOrgsDescs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.accessPolicies.authorizedOrgsDescs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.services = {};
    this.services.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/services', 'GET', apiParams, clientConfig);
    this.services.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/services/{name}', 'GET', apiParams, clientConfig);

    this.organizations = {};

    this.organizations.gcpUserAccessBindings = {};
    this.organizations.gcpUserAccessBindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/gcpUserAccessBindings', 'GET', apiParams, clientConfig);
    this.organizations.gcpUserAccessBindings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.gcpUserAccessBindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/gcpUserAccessBindings', 'POST', apiParams, clientConfig);
    this.organizations.gcpUserAccessBindings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.gcpUserAccessBindings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
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
