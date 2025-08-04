
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://networkservices.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.lbTrafficExtensions = {};
    this.projects.locations.lbTrafficExtensions.list = (params) => this._makeRequest('v1beta1/{+parent}/lbTrafficExtensions', 'GET', params);
    this.projects.locations.lbTrafficExtensions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.lbTrafficExtensions.create = (params) => this._makeRequest('v1beta1/{+parent}/lbTrafficExtensions', 'POST', params);
    this.projects.locations.lbTrafficExtensions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.lbTrafficExtensions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.lbRouteExtensions = {};
    this.projects.locations.lbRouteExtensions.list = (params) => this._makeRequest('v1beta1/{+parent}/lbRouteExtensions', 'GET', params);
    this.projects.locations.lbRouteExtensions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.lbRouteExtensions.create = (params) => this._makeRequest('v1beta1/{+parent}/lbRouteExtensions', 'POST', params);
    this.projects.locations.lbRouteExtensions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.lbRouteExtensions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.lbEdgeExtensions = {};
    this.projects.locations.lbEdgeExtensions.list = (params) => this._makeRequest('v1beta1/{+parent}/lbEdgeExtensions', 'GET', params);
    this.projects.locations.lbEdgeExtensions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.lbEdgeExtensions.create = (params) => this._makeRequest('v1beta1/{+parent}/lbEdgeExtensions', 'POST', params);
    this.projects.locations.lbEdgeExtensions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.lbEdgeExtensions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.authzExtensions = {};
    this.projects.locations.authzExtensions.list = (params) => this._makeRequest('v1beta1/{+parent}/authzExtensions', 'GET', params);
    this.projects.locations.authzExtensions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.authzExtensions.create = (params) => this._makeRequest('v1beta1/{+parent}/authzExtensions', 'POST', params);
    this.projects.locations.authzExtensions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.authzExtensions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.endpointPolicies = {};
    this.projects.locations.endpointPolicies.list = (params) => this._makeRequest('v1beta1/{+parent}/endpointPolicies', 'GET', params);
    this.projects.locations.endpointPolicies.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.endpointPolicies.create = (params) => this._makeRequest('v1beta1/{+parent}/endpointPolicies', 'POST', params);
    this.projects.locations.endpointPolicies.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.endpointPolicies.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.wasmPlugins = {};
    this.projects.locations.wasmPlugins.list = (params) => this._makeRequest('v1beta1/{+parent}/wasmPlugins', 'GET', params);
    this.projects.locations.wasmPlugins.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.wasmPlugins.create = (params) => this._makeRequest('v1beta1/{+parent}/wasmPlugins', 'POST', params);
    this.projects.locations.wasmPlugins.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.wasmPlugins.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.wasmPlugins.versions = {};
    this.projects.locations.wasmPlugins.versions.list = (params) => this._makeRequest('v1beta1/{+parent}/versions', 'GET', params);
    this.projects.locations.wasmPlugins.versions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.wasmPlugins.versions.create = (params) => this._makeRequest('v1beta1/{+parent}/versions', 'POST', params);
    this.projects.locations.wasmPlugins.versions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.gateways = {};
    this.projects.locations.gateways.list = (params) => this._makeRequest('v1beta1/{+parent}/gateways', 'GET', params);
    this.projects.locations.gateways.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.gateways.create = (params) => this._makeRequest('v1beta1/{+parent}/gateways', 'POST', params);
    this.projects.locations.gateways.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.gateways.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.gateways.routeViews = {};
    this.projects.locations.gateways.routeViews.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.gateways.routeViews.list = (params) => this._makeRequest('v1beta1/{+parent}/routeViews', 'GET', params);

    this.projects.locations.grpcRoutes = {};
    this.projects.locations.grpcRoutes.list = (params) => this._makeRequest('v1beta1/{+parent}/grpcRoutes', 'GET', params);
    this.projects.locations.grpcRoutes.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.grpcRoutes.create = (params) => this._makeRequest('v1beta1/{+parent}/grpcRoutes', 'POST', params);
    this.projects.locations.grpcRoutes.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.grpcRoutes.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.httpRoutes = {};
    this.projects.locations.httpRoutes.list = (params) => this._makeRequest('v1beta1/{+parent}/httpRoutes', 'GET', params);
    this.projects.locations.httpRoutes.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.httpRoutes.create = (params) => this._makeRequest('v1beta1/{+parent}/httpRoutes', 'POST', params);
    this.projects.locations.httpRoutes.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.httpRoutes.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.tcpRoutes = {};
    this.projects.locations.tcpRoutes.list = (params) => this._makeRequest('v1beta1/{+parent}/tcpRoutes', 'GET', params);
    this.projects.locations.tcpRoutes.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.tcpRoutes.create = (params) => this._makeRequest('v1beta1/{+parent}/tcpRoutes', 'POST', params);
    this.projects.locations.tcpRoutes.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.tcpRoutes.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.tlsRoutes = {};
    this.projects.locations.tlsRoutes.list = (params) => this._makeRequest('v1beta1/{+parent}/tlsRoutes', 'GET', params);
    this.projects.locations.tlsRoutes.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.tlsRoutes.create = (params) => this._makeRequest('v1beta1/{+parent}/tlsRoutes', 'POST', params);
    this.projects.locations.tlsRoutes.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.tlsRoutes.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.serviceBindings = {};
    this.projects.locations.serviceBindings.list = (params) => this._makeRequest('v1beta1/{+parent}/serviceBindings', 'GET', params);
    this.projects.locations.serviceBindings.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.serviceBindings.create = (params) => this._makeRequest('v1beta1/{+parent}/serviceBindings', 'POST', params);
    this.projects.locations.serviceBindings.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.serviceBindings.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.meshes = {};
    this.projects.locations.meshes.list = (params) => this._makeRequest('v1beta1/{+parent}/meshes', 'GET', params);
    this.projects.locations.meshes.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.meshes.create = (params) => this._makeRequest('v1beta1/{+parent}/meshes', 'POST', params);
    this.projects.locations.meshes.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.meshes.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.meshes.routeViews = {};
    this.projects.locations.meshes.routeViews.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.meshes.routeViews.list = (params) => this._makeRequest('v1beta1/{+parent}/routeViews', 'GET', params);

    this.projects.locations.serviceLbPolicies = {};
    this.projects.locations.serviceLbPolicies.list = (params) => this._makeRequest('v1beta1/{+parent}/serviceLbPolicies', 'GET', params);
    this.projects.locations.serviceLbPolicies.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.serviceLbPolicies.create = (params) => this._makeRequest('v1beta1/{+parent}/serviceLbPolicies', 'POST', params);
    this.projects.locations.serviceLbPolicies.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.serviceLbPolicies.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
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
        url = url.replace(placeholder, remainingParams[paramName]);
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
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
