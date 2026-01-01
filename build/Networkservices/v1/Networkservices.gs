
/**
 * Google Apps Script client library for the Network Services API
 * Documentation URL: https://cloud.google.com/networking
 * @class
 */
class Networkservices {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://networkservices.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.tlsRoutes = {};
    this.projects.locations.tlsRoutes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.tlsRoutes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tlsRoutes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tlsRoutes', 'GET', apiParams, clientConfig);
    this.projects.locations.tlsRoutes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tlsRoutes', 'POST', apiParams, clientConfig);
    this.projects.locations.tlsRoutes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.wasmPlugins = {};
    this.projects.locations.wasmPlugins.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.wasmPlugins.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/wasmPlugins', 'POST', apiParams, clientConfig);
    this.projects.locations.wasmPlugins.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/wasmPlugins', 'GET', apiParams, clientConfig);
    this.projects.locations.wasmPlugins.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.wasmPlugins.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.wasmPlugins.versions = {};
    this.projects.locations.wasmPlugins.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'POST', apiParams, clientConfig);
    this.projects.locations.wasmPlugins.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.wasmPlugins.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/versions', 'GET', apiParams, clientConfig);
    this.projects.locations.wasmPlugins.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.serviceLbPolicies = {};
    this.projects.locations.serviceLbPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/serviceLbPolicies', 'POST', apiParams, clientConfig);
    this.projects.locations.serviceLbPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.serviceLbPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.serviceLbPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.serviceLbPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/serviceLbPolicies', 'GET', apiParams, clientConfig);

    this.projects.locations.edgeCacheOrigins = {};
    this.projects.locations.edgeCacheOrigins.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.edgeCacheOrigins.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.edgeCacheOrigins.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    this.projects.locations.meshes = {};
    this.projects.locations.meshes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.meshes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/meshes', 'POST', apiParams, clientConfig);
    this.projects.locations.meshes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/meshes', 'GET', apiParams, clientConfig);
    this.projects.locations.meshes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.meshes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.meshes.routeViews = {};
    this.projects.locations.meshes.routeViews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.meshes.routeViews.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/routeViews', 'GET', apiParams, clientConfig);

    this.projects.locations.grpcRoutes = {};
    this.projects.locations.grpcRoutes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.grpcRoutes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/grpcRoutes', 'GET', apiParams, clientConfig);
    this.projects.locations.grpcRoutes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/grpcRoutes', 'POST', apiParams, clientConfig);
    this.projects.locations.grpcRoutes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.grpcRoutes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.lbTrafficExtensions = {};
    this.projects.locations.lbTrafficExtensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/lbTrafficExtensions', 'GET', apiParams, clientConfig);
    this.projects.locations.lbTrafficExtensions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.lbTrafficExtensions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/lbTrafficExtensions', 'POST', apiParams, clientConfig);
    this.projects.locations.lbTrafficExtensions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.lbTrafficExtensions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.httpRoutes = {};
    this.projects.locations.httpRoutes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.httpRoutes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.httpRoutes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/httpRoutes', 'GET', apiParams, clientConfig);
    this.projects.locations.httpRoutes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/httpRoutes', 'POST', apiParams, clientConfig);
    this.projects.locations.httpRoutes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.lbEdgeExtensions = {};
    this.projects.locations.lbEdgeExtensions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/lbEdgeExtensions', 'POST', apiParams, clientConfig);
    this.projects.locations.lbEdgeExtensions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.lbEdgeExtensions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.lbEdgeExtensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/lbEdgeExtensions', 'GET', apiParams, clientConfig);
    this.projects.locations.lbEdgeExtensions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.authzExtensions = {};
    this.projects.locations.authzExtensions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.authzExtensions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.authzExtensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authzExtensions', 'GET', apiParams, clientConfig);
    this.projects.locations.authzExtensions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.authzExtensions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authzExtensions', 'POST', apiParams, clientConfig);

    this.projects.locations.endpointPolicies = {};
    this.projects.locations.endpointPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.endpointPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/endpointPolicies', 'GET', apiParams, clientConfig);
    this.projects.locations.endpointPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/endpointPolicies', 'POST', apiParams, clientConfig);
    this.projects.locations.endpointPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.endpointPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.serviceBindings = {};
    this.projects.locations.serviceBindings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.serviceBindings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/serviceBindings', 'POST', apiParams, clientConfig);
    this.projects.locations.serviceBindings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.serviceBindings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/serviceBindings', 'GET', apiParams, clientConfig);
    this.projects.locations.serviceBindings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.tcpRoutes = {};
    this.projects.locations.tcpRoutes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.tcpRoutes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tcpRoutes', 'GET', apiParams, clientConfig);
    this.projects.locations.tcpRoutes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tcpRoutes', 'POST', apiParams, clientConfig);
    this.projects.locations.tcpRoutes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tcpRoutes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.gateways = {};
    this.projects.locations.gateways.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.gateways.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/gateways', 'GET', apiParams, clientConfig);
    this.projects.locations.gateways.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.gateways.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/gateways', 'POST', apiParams, clientConfig);
    this.projects.locations.gateways.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.gateways.routeViews = {};
    this.projects.locations.gateways.routeViews.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/routeViews', 'GET', apiParams, clientConfig);
    this.projects.locations.gateways.routeViews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.edgeCacheServices = {};
    this.projects.locations.edgeCacheServices.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.edgeCacheServices.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.edgeCacheServices.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);

    this.projects.locations.lbRouteExtensions = {};
    this.projects.locations.lbRouteExtensions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.lbRouteExtensions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.lbRouteExtensions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/lbRouteExtensions', 'POST', apiParams, clientConfig);
    this.projects.locations.lbRouteExtensions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/lbRouteExtensions', 'GET', apiParams, clientConfig);
    this.projects.locations.lbRouteExtensions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.edgeCacheKeysets = {};
    this.projects.locations.edgeCacheKeysets.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.edgeCacheKeysets.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.edgeCacheKeysets.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
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
