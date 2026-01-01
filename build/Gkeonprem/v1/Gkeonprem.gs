
/**
 * Google Apps Script client library for the GKE On-Prem API
 * Documentation URL: https://cloud.google.com/anthos/clusters/docs/on-prem/
 * @class
 */
class Gkeonprem {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://gkeonprem.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.bareMetalClusters = {};
    this.projects.locations.bareMetalClusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bareMetalClusters', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.enroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bareMetalClusters:enroll', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.queryVersionConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bareMetalClusters:queryVersionConfig', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bareMetalClusters', 'GET', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.unenroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.bareMetalClusters.operations = {};
    this.projects.locations.bareMetalClusters.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.bareMetalClusters.bareMetalNodePools = {};
    this.projects.locations.bareMetalClusters.bareMetalNodePools.enroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bareMetalNodePools:enroll', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.unenroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bareMetalNodePools', 'GET', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bareMetalNodePools', 'POST', apiParams, clientConfig);

    this.projects.locations.bareMetalClusters.bareMetalNodePools.operations = {};
    this.projects.locations.bareMetalClusters.bareMetalNodePools.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.bareMetalClusters.bareMetalNodePools.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);

    this.projects.locations.vmwareClusters = {};
    this.projects.locations.vmwareClusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/vmwareClusters', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.enroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/vmwareClusters:enroll', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/vmwareClusters', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.queryVersionConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/vmwareClusters:queryVersionConfig', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.unenroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', apiParams, clientConfig);

    this.projects.locations.vmwareClusters.operations = {};
    this.projects.locations.vmwareClusters.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.vmwareClusters.vmwareNodePools = {};
    this.projects.locations.vmwareClusters.vmwareNodePools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/vmwareNodePools', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.vmwareNodePools.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.vmwareNodePools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.vmwareNodePools.unenroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.vmwareNodePools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.vmwareNodePools.enroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/vmwareNodePools:enroll', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.vmwareNodePools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.vmwareNodePools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/vmwareNodePools', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.vmwareNodePools.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.vmwareNodePools.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.vmwareClusters.vmwareNodePools.operations = {};
    this.projects.locations.vmwareClusters.vmwareNodePools.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareClusters.vmwareNodePools.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.bareMetalAdminClusters = {};
    this.projects.locations.bareMetalAdminClusters.unenroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', apiParams, clientConfig);
    this.projects.locations.bareMetalAdminClusters.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.bareMetalAdminClusters.enroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bareMetalAdminClusters:enroll', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalAdminClusters.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalAdminClusters.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalAdminClusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bareMetalAdminClusters', 'GET', apiParams, clientConfig);
    this.projects.locations.bareMetalAdminClusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.bareMetalAdminClusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bareMetalAdminClusters', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalAdminClusters.queryVersionConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bareMetalAdminClusters:queryVersionConfig', 'POST', apiParams, clientConfig);
    this.projects.locations.bareMetalAdminClusters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.bareMetalAdminClusters.operations = {};
    this.projects.locations.bareMetalAdminClusters.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.bareMetalAdminClusters.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);

    this.projects.locations.vmwareAdminClusters = {};
    this.projects.locations.vmwareAdminClusters.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareAdminClusters.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareAdminClusters.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareAdminClusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/vmwareAdminClusters', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareAdminClusters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.vmwareAdminClusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/vmwareAdminClusters', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareAdminClusters.enroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/vmwareAdminClusters:enroll', 'POST', apiParams, clientConfig);
    this.projects.locations.vmwareAdminClusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareAdminClusters.unenroll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:unenroll', 'DELETE', apiParams, clientConfig);

    this.projects.locations.vmwareAdminClusters.operations = {};
    this.projects.locations.vmwareAdminClusters.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.vmwareAdminClusters.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
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
