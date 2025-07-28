
/**
 * Google Apps Script client library for the Cloud Runtime Configuration API
 * Documentation URL: https://cloud.google.com/deployment-manager/runtime-configurator/
 * @class
 */
class Runtimeconfig {
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
    this._rootUrl = 'https://runtimeconfig.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.configs = {};
    this.projects.configs.list = (params) => this._makeRequest('v1beta1/{+parent}/configs', 'GET', params);
    this.projects.configs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.configs.create = (params) => this._makeRequest('v1beta1/{+parent}/configs', 'POST', params);
    this.projects.configs.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);
    this.projects.configs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.configs.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.configs.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.configs.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.configs.operations = {};
    this.projects.configs.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.configs.operations.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.configs.variables = {};
    this.projects.configs.variables.list = (params) => this._makeRequest('v1beta1/{+parent}/variables', 'GET', params);
    this.projects.configs.variables.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.configs.variables.watch = (params) => this._makeRequest('v1beta1/{+name}:watch', 'POST', params);
    this.projects.configs.variables.create = (params) => this._makeRequest('v1beta1/{+parent}/variables', 'POST', params);
    this.projects.configs.variables.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);
    this.projects.configs.variables.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.configs.variables.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.configs.waiters = {};
    this.projects.configs.waiters.list = (params) => this._makeRequest('v1beta1/{+parent}/waiters', 'GET', params);
    this.projects.configs.waiters.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.configs.waiters.create = (params) => this._makeRequest('v1beta1/{+parent}/waiters', 'POST', params);
    this.projects.configs.waiters.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.configs.waiters.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
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
