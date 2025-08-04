
/**
 * Google Apps Script client library for the API Gateway API
 * Documentation URL: https://cloud.google.com/api-gateway/docs
 * @class
 */
class Apigateway {
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
    this._rootUrl = 'https://apigateway.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1beta/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta/{+name}:cancel', 'POST', params);

    this.projects.locations.gateways = {};
    this.projects.locations.gateways.list = (params) => this._makeRequest('v1beta/{+parent}/gateways', 'GET', params);
    this.projects.locations.gateways.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.locations.gateways.create = (params) => this._makeRequest('v1beta/{+parent}/gateways', 'POST', params);
    this.projects.locations.gateways.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.projects.locations.gateways.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.projects.locations.gateways.setIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.gateways.getIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.gateways.testIamPermissions = (params) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis = {};
    this.projects.locations.apis.list = (params) => this._makeRequest('v1beta/{+parent}/apis', 'GET', params);
    this.projects.locations.apis.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.locations.apis.create = (params) => this._makeRequest('v1beta/{+parent}/apis', 'POST', params);
    this.projects.locations.apis.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.projects.locations.apis.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.projects.locations.apis.setIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.apis.getIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.apis.testIamPermissions = (params) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.configs = {};
    this.projects.locations.apis.configs.list = (params) => this._makeRequest('v1beta/{+parent}/configs', 'GET', params);
    this.projects.locations.apis.configs.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.locations.apis.configs.create = (params) => this._makeRequest('v1beta/{+parent}/configs', 'POST', params);
    this.projects.locations.apis.configs.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.projects.locations.apis.configs.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.projects.locations.apis.configs.setIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.apis.configs.getIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.apis.configs.testIamPermissions = (params) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', params);
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
