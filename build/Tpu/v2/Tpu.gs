
/**
 * Google Apps Script client library for the Cloud TPU API
 * Documentation URL: https://cloud.google.com/tpu/
 * @class
 */
class Tpu {
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
    this._rootUrl = 'https://tpu.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.generateServiceIdentity = (params) => this._makeRequest('v2/{+parent}:generateServiceIdentity', 'POST', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.projects.locations.nodes = {};
    this.projects.locations.nodes.list = (params) => this._makeRequest('v2/{+parent}/nodes', 'GET', params);
    this.projects.locations.nodes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.nodes.create = (params) => this._makeRequest('v2/{+parent}/nodes', 'POST', params);
    this.projects.locations.nodes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.nodes.stop = (params) => this._makeRequest('v2/{+name}:stop', 'POST', params);
    this.projects.locations.nodes.start = (params) => this._makeRequest('v2/{+name}:start', 'POST', params);
    this.projects.locations.nodes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.nodes.getGuestAttributes = (params) => this._makeRequest('v2/{+name}:getGuestAttributes', 'POST', params);

    this.projects.locations.queuedResources = {};
    this.projects.locations.queuedResources.list = (params) => this._makeRequest('v2/{+parent}/queuedResources', 'GET', params);
    this.projects.locations.queuedResources.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.queuedResources.create = (params) => this._makeRequest('v2/{+parent}/queuedResources', 'POST', params);
    this.projects.locations.queuedResources.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.queuedResources.reset = (params) => this._makeRequest('v2/{+name}:reset', 'POST', params);

    this.projects.locations.acceleratorTypes = {};
    this.projects.locations.acceleratorTypes.list = (params) => this._makeRequest('v2/{+parent}/acceleratorTypes', 'GET', params);
    this.projects.locations.acceleratorTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.runtimeVersions = {};
    this.projects.locations.runtimeVersions.list = (params) => this._makeRequest('v2/{+parent}/runtimeVersions', 'GET', params);
    this.projects.locations.runtimeVersions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
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
