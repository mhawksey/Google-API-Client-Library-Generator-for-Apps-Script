
/**
 * Google Apps Script client library for the Service Management API
 * Documentation URL: https://cloud.google.com/service-management/
 * @class
 */
class Servicemanagement {
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
    this._rootUrl = 'https://servicemanagement.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.list = (params) => this._makeRequest('v1/operations', 'GET', params);
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.services = {};
    this.services.list = (params) => this._makeRequest('v1/services', 'GET', params);
    this.services.get = (params) => this._makeRequest('v1/services/{serviceName}', 'GET', params);
    this.services.create = (params) => this._makeRequest('v1/services', 'POST', params);
    this.services.delete = (params) => this._makeRequest('v1/services/{serviceName}', 'DELETE', params);
    this.services.undelete = (params) => this._makeRequest('v1/services/{serviceName}:undelete', 'POST', params);
    this.services.getConfig = (params) => this._makeRequest('v1/services/{serviceName}/config', 'GET', params);
    this.services.generateConfigReport = (params) => this._makeRequest('v1/services:generateConfigReport', 'POST', params);
    this.services.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.services.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.services.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.services.configs = {};
    this.services.configs.list = (params) => this._makeRequest('v1/services/{serviceName}/configs', 'GET', params);
    this.services.configs.get = (params) => this._makeRequest('v1/services/{serviceName}/configs/{configId}', 'GET', params);
    this.services.configs.create = (params) => this._makeRequest('v1/services/{serviceName}/configs', 'POST', params);
    this.services.configs.submit = (params) => this._makeRequest('v1/services/{serviceName}/configs:submit', 'POST', params);

    this.services.rollouts = {};
    this.services.rollouts.list = (params) => this._makeRequest('v1/services/{serviceName}/rollouts', 'GET', params);
    this.services.rollouts.get = (params) => this._makeRequest('v1/services/{serviceName}/rollouts/{rolloutId}', 'GET', params);
    this.services.rollouts.create = (params) => this._makeRequest('v1/services/{serviceName}/rollouts', 'POST', params);

    this.services.consumers = {};
    this.services.consumers.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.services.consumers.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.services.consumers.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
