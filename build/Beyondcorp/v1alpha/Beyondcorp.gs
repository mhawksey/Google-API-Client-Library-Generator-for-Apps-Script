
/**
 * Google Apps Script client library for the BeyondCorp API
 * Documentation URL: https://cloud.google.com/
 * @class
 */
class Beyondcorp {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://beyondcorp.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.appConnections = {};
    this.projects.locations.appConnections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/appConnections', 'GET', apiParams, clientConfig);
    this.projects.locations.appConnections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.appConnections.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/appConnections', 'POST', apiParams, clientConfig);
    this.projects.locations.appConnections.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.appConnections.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.appConnections.resolve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/appConnections:resolve', 'GET', apiParams, clientConfig);
    this.projects.locations.appConnections.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.appConnections.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.appConnections.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.appConnectors = {};
    this.projects.locations.appConnectors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/appConnectors', 'GET', apiParams, clientConfig);
    this.projects.locations.appConnectors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.appConnectors.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/appConnectors', 'POST', apiParams, clientConfig);
    this.projects.locations.appConnectors.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.appConnectors.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.appConnectors.resolveInstanceConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+appConnector}:resolveInstanceConfig', 'GET', apiParams, clientConfig);
    this.projects.locations.appConnectors.reportStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+appConnector}:reportStatus', 'POST', apiParams, clientConfig);
    this.projects.locations.appConnectors.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.appConnectors.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.appConnectors.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.appGateways = {};
    this.projects.locations.appGateways.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/appGateways', 'GET', apiParams, clientConfig);
    this.projects.locations.appGateways.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.appGateways.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/appGateways', 'POST', apiParams, clientConfig);
    this.projects.locations.appGateways.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.appGateways.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.appGateways.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.appGateways.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.connections = {};
    this.projects.locations.connections.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/connections', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/connections', 'POST', apiParams, clientConfig);
    this.projects.locations.connections.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.connections.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.connections.resolve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/connections:resolve', 'GET', apiParams, clientConfig);
    this.projects.locations.connections.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.connections.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    this.projects.locations.connectors = {};
    this.projects.locations.connectors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/connectors', 'GET', apiParams, clientConfig);
    this.projects.locations.connectors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.connectors.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/connectors', 'POST', apiParams, clientConfig);
    this.projects.locations.connectors.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.connectors.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.connectors.resolveInstanceConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+connector}:resolveInstanceConfig', 'GET', apiParams, clientConfig);
    this.projects.locations.connectors.reportStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+connector}:reportStatus', 'POST', apiParams, clientConfig);
    this.projects.locations.connectors.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.connectors.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    this.projects.locations.insights = {};
    this.projects.locations.insights.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.insights.configuredInsight = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+insight}:configuredInsight', 'GET', apiParams, clientConfig);
    this.projects.locations.insights.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/insights', 'GET', apiParams, clientConfig);

    this.projects.locations.securityGateways = {};
    this.projects.locations.securityGateways.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/securityGateways', 'GET', apiParams, clientConfig);
    this.projects.locations.securityGateways.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.securityGateways.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/securityGateways', 'POST', apiParams, clientConfig);
    this.projects.locations.securityGateways.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.securityGateways.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.securityGateways.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.securityGateways.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.securityGateways.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.securityGateways.applications = {};
    this.projects.locations.securityGateways.applications.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/applications', 'GET', apiParams, clientConfig);
    this.projects.locations.securityGateways.applications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.securityGateways.applications.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/applications', 'POST', apiParams, clientConfig);
    this.projects.locations.securityGateways.applications.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.securityGateways.applications.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.securityGateways.applications.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.securityGateways.applications.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.securityGateways.applications.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.applications = {};
    this.projects.locations.applications.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.applications.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.applications.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.applicationDomains = {};
    this.projects.locations.applicationDomains.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.applicationDomains.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.applicationDomains.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.operations = {};
    this.organizations.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.organizations.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.organizations.locations.insights = {};
    this.organizations.locations.insights.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.insights.configuredInsight = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+insight}:configuredInsight', 'GET', apiParams, clientConfig);
    this.organizations.locations.insights.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/insights', 'GET', apiParams, clientConfig);

    this.organizations.locations.global = {};

    this.organizations.locations.global.partnerTenants = {};
    this.organizations.locations.global.partnerTenants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.global.partnerTenants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/partnerTenants', 'GET', apiParams, clientConfig);
    this.organizations.locations.global.partnerTenants.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.locations.subscriptions = {};
    this.organizations.locations.subscriptions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/subscriptions', 'POST', apiParams, clientConfig);
    this.organizations.locations.subscriptions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.subscriptions.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:cancel', 'GET', apiParams, clientConfig);
    this.organizations.locations.subscriptions.restart = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:restart', 'GET', apiParams, clientConfig);
    this.organizations.locations.subscriptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/subscriptions', 'GET', apiParams, clientConfig);
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
