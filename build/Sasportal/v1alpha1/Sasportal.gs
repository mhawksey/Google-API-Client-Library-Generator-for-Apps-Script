
/**
 * Google Apps Script client library for the SAS Portal API
 * Documentation URL: https://developers.google.com/spectrum-access-system/
 * @class
 */
class Sasportal {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://sasportal.googleapis.com/';
    this._servicePath = '';


    this.deployments = {};
    this.deployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.deployments.devices = {};
    this.deployments.devices.signDevice = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:signDevice', 'POST', apiParams, clientConfig);
    this.deployments.devices.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:move', 'POST', apiParams, clientConfig);
    this.deployments.devices.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.deployments.devices.updateSigned = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:updateSigned', 'PATCH', apiParams, clientConfig);
    this.deployments.devices.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.deployments.devices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.policies = {};
    this.policies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/policies:get', 'POST', apiParams, clientConfig);
    this.policies.set = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/policies:set', 'POST', apiParams, clientConfig);
    this.policies.test = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/policies:test', 'POST', apiParams, clientConfig);

    this.installer = {};
    this.installer.validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/installer:validate', 'POST', apiParams, clientConfig);
    this.installer.generateSecret = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/installer:generateSecret', 'POST', apiParams, clientConfig);

    this.customers = {};
    this.customers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.customers.migrateOrganization = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/customers:migrateOrganization', 'POST', apiParams, clientConfig);
    this.customers.listLegacyOrganizations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/customers:listLegacyOrganizations', 'GET', apiParams, clientConfig);
    this.customers.listGcpProjectDeployments = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/customers:listGcpProjectDeployments', 'GET', apiParams, clientConfig);
    this.customers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.customers.setupSasAnalytics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/customers:setupSasAnalytics', 'POST', apiParams, clientConfig);
    this.customers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/customers', 'GET', apiParams, clientConfig);
    this.customers.provisionDeployment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/customers:provisionDeployment', 'POST', apiParams, clientConfig);

    this.customers.devices = {};
    this.customers.devices.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:move', 'POST', apiParams, clientConfig);
    this.customers.devices.signDevice = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:signDevice', 'POST', apiParams, clientConfig);
    this.customers.devices.createSigned = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', apiParams, clientConfig);
    this.customers.devices.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.customers.devices.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.customers.devices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', apiParams, clientConfig);
    this.customers.devices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.customers.devices.updateSigned = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:updateSigned', 'PATCH', apiParams, clientConfig);
    this.customers.devices.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', apiParams, clientConfig);

    this.customers.deployments = {};
    this.customers.deployments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.customers.deployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.customers.deployments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/deployments', 'POST', apiParams, clientConfig);
    this.customers.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/deployments', 'GET', apiParams, clientConfig);
    this.customers.deployments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.customers.deployments.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:move', 'POST', apiParams, clientConfig);

    this.customers.deployments.devices = {};
    this.customers.deployments.devices.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', apiParams, clientConfig);
    this.customers.deployments.devices.createSigned = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', apiParams, clientConfig);
    this.customers.deployments.devices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', apiParams, clientConfig);

    this.customers.nodes = {};
    this.customers.nodes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.customers.nodes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/nodes', 'POST', apiParams, clientConfig);
    this.customers.nodes.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:move', 'POST', apiParams, clientConfig);
    this.customers.nodes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/nodes', 'GET', apiParams, clientConfig);
    this.customers.nodes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.customers.nodes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);

    this.customers.nodes.devices = {};
    this.customers.nodes.devices.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', apiParams, clientConfig);
    this.customers.nodes.devices.createSigned = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', apiParams, clientConfig);
    this.customers.nodes.devices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', apiParams, clientConfig);

    this.customers.nodes.nodes = {};
    this.customers.nodes.nodes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/nodes', 'POST', apiParams, clientConfig);
    this.customers.nodes.nodes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/nodes', 'GET', apiParams, clientConfig);

    this.customers.nodes.deployments = {};
    this.customers.nodes.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/deployments', 'GET', apiParams, clientConfig);
    this.customers.nodes.deployments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/deployments', 'POST', apiParams, clientConfig);

    this.nodes = {};
    this.nodes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.nodes.devices = {};
    this.nodes.devices.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', apiParams, clientConfig);
    this.nodes.devices.signDevice = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:signDevice', 'POST', apiParams, clientConfig);
    this.nodes.devices.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:move', 'POST', apiParams, clientConfig);
    this.nodes.devices.updateSigned = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:updateSigned', 'PATCH', apiParams, clientConfig);
    this.nodes.devices.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.nodes.devices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', apiParams, clientConfig);
    this.nodes.devices.createSigned = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', apiParams, clientConfig);
    this.nodes.devices.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.nodes.devices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.nodes.nodes = {};
    this.nodes.nodes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/nodes', 'POST', apiParams, clientConfig);
    this.nodes.nodes.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:move', 'POST', apiParams, clientConfig);
    this.nodes.nodes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.nodes.nodes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/nodes', 'GET', apiParams, clientConfig);
    this.nodes.nodes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.nodes.nodes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);

    this.nodes.nodes.nodes = {};
    this.nodes.nodes.nodes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/nodes', 'GET', apiParams, clientConfig);
    this.nodes.nodes.nodes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/nodes', 'POST', apiParams, clientConfig);

    this.nodes.nodes.deployments = {};
    this.nodes.nodes.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/deployments', 'GET', apiParams, clientConfig);
    this.nodes.nodes.deployments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/deployments', 'POST', apiParams, clientConfig);

    this.nodes.nodes.devices = {};
    this.nodes.nodes.devices.createSigned = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', apiParams, clientConfig);
    this.nodes.nodes.devices.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', apiParams, clientConfig);
    this.nodes.nodes.devices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', apiParams, clientConfig);

    this.nodes.deployments = {};
    this.nodes.deployments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.nodes.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/deployments', 'GET', apiParams, clientConfig);
    this.nodes.deployments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.nodes.deployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.nodes.deployments.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:move', 'POST', apiParams, clientConfig);

    this.nodes.deployments.devices = {};
    this.nodes.deployments.devices.createSigned = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices:createSigned', 'POST', apiParams, clientConfig);
    this.nodes.deployments.devices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices', 'GET', apiParams, clientConfig);
    this.nodes.deployments.devices.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/devices', 'POST', apiParams, clientConfig);
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
