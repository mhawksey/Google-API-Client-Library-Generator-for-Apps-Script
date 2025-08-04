
/**
 * Google Apps Script client library for the Secret Manager API
 * Documentation URL: https://cloud.google.com/secret-manager/
 * @class
 */
class Secretmanager {
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
    this._rootUrl = 'https://secretmanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1beta2/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    this.projects.locations.secrets = {};
    this.projects.locations.secrets.list = (params) => this._makeRequest('v1beta2/{+parent}/secrets', 'GET', params);
    this.projects.locations.secrets.create = (params) => this._makeRequest('v1beta2/{+parent}/secrets', 'POST', params);
    this.projects.locations.secrets.addVersion = (params) => this._makeRequest('v1beta2/{+parent}:addVersion', 'POST', params);
    this.projects.locations.secrets.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.locations.secrets.patch = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.projects.locations.secrets.delete = (params) => this._makeRequest('v1beta2/{+name}', 'DELETE', params);
    this.projects.locations.secrets.setIamPolicy = (params) => this._makeRequest('v1beta2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.secrets.getIamPolicy = (params) => this._makeRequest('v1beta2/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.secrets.testIamPermissions = (params) => this._makeRequest('v1beta2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.secrets.versions = {};
    this.projects.locations.secrets.versions.list = (params) => this._makeRequest('v1beta2/{+parent}/versions', 'GET', params);
    this.projects.locations.secrets.versions.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.locations.secrets.versions.access = (params) => this._makeRequest('v1beta2/{+name}:access', 'GET', params);
    this.projects.locations.secrets.versions.disable = (params) => this._makeRequest('v1beta2/{+name}:disable', 'POST', params);
    this.projects.locations.secrets.versions.enable = (params) => this._makeRequest('v1beta2/{+name}:enable', 'POST', params);
    this.projects.locations.secrets.versions.destroy = (params) => this._makeRequest('v1beta2/{+name}:destroy', 'POST', params);

    this.projects.secrets = {};
    this.projects.secrets.list = (params) => this._makeRequest('v1beta2/{+parent}/secrets', 'GET', params);
    this.projects.secrets.create = (params) => this._makeRequest('v1beta2/{+parent}/secrets', 'POST', params);
    this.projects.secrets.addVersion = (params) => this._makeRequest('v1beta2/{+parent}:addVersion', 'POST', params);
    this.projects.secrets.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.secrets.patch = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.projects.secrets.delete = (params) => this._makeRequest('v1beta2/{+name}', 'DELETE', params);
    this.projects.secrets.setIamPolicy = (params) => this._makeRequest('v1beta2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.secrets.getIamPolicy = (params) => this._makeRequest('v1beta2/{+resource}:getIamPolicy', 'GET', params);
    this.projects.secrets.testIamPermissions = (params) => this._makeRequest('v1beta2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.secrets.versions = {};
    this.projects.secrets.versions.list = (params) => this._makeRequest('v1beta2/{+parent}/versions', 'GET', params);
    this.projects.secrets.versions.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.secrets.versions.access = (params) => this._makeRequest('v1beta2/{+name}:access', 'GET', params);
    this.projects.secrets.versions.disable = (params) => this._makeRequest('v1beta2/{+name}:disable', 'POST', params);
    this.projects.secrets.versions.enable = (params) => this._makeRequest('v1beta2/{+name}:enable', 'POST', params);
    this.projects.secrets.versions.destroy = (params) => this._makeRequest('v1beta2/{+name}:destroy', 'POST', params);
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
