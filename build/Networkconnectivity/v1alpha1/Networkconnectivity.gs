
/**
 * Google Apps Script client library for the Network Connectivity API
 * Documentation URL: https://cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest
 * @class
 */
class Networkconnectivity {
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
    this._rootUrl = 'https://networkconnectivity.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1alpha1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1alpha1/{+name}:cancel', 'POST', params);

    this.projects.locations.global = {};

    this.projects.locations.global.hubs = {};
    this.projects.locations.global.hubs.list = (params) => this._makeRequest('v1alpha1/{+parent}/hubs', 'GET', params);
    this.projects.locations.global.hubs.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.locations.global.hubs.create = (params) => this._makeRequest('v1alpha1/{+parent}/hubs', 'POST', params);
    this.projects.locations.global.hubs.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.projects.locations.global.hubs.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.projects.locations.global.hubs.setIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.global.hubs.getIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.global.hubs.testIamPermissions = (params) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.spokes = {};
    this.projects.locations.spokes.list = (params) => this._makeRequest('v1alpha1/{+parent}/spokes', 'GET', params);
    this.projects.locations.spokes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.locations.spokes.create = (params) => this._makeRequest('v1alpha1/{+parent}/spokes', 'POST', params);
    this.projects.locations.spokes.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.projects.locations.spokes.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.projects.locations.spokes.setIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.spokes.getIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.spokes.testIamPermissions = (params) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.internalRanges = {};
    this.projects.locations.internalRanges.list = (params) => this._makeRequest('v1alpha1/{+parent}/internalRanges', 'GET', params);
    this.projects.locations.internalRanges.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.locations.internalRanges.create = (params) => this._makeRequest('v1alpha1/{+parent}/internalRanges', 'POST', params);
    this.projects.locations.internalRanges.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.projects.locations.internalRanges.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.projects.locations.internalRanges.setIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.internalRanges.getIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.internalRanges.testIamPermissions = (params) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', params);
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
