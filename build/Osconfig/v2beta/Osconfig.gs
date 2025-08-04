
/**
 * Google Apps Script client library for the OS Config API
 * Documentation URL: https://cloud.google.com/compute/docs/osconfig/rest
 * @class
 */
class Osconfig {
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
    this._rootUrl = 'https://osconfig.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v2beta/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v2beta/{+name}:cancel', 'POST', params);

    this.projects.locations.global = {};

    this.projects.locations.global.policyOrchestrators = {};
    this.projects.locations.global.policyOrchestrators.create = (params) => this._makeRequest('v2beta/{+parent}/policyOrchestrators', 'POST', params);
    this.projects.locations.global.policyOrchestrators.list = (params) => this._makeRequest('v2beta/{+parent}/policyOrchestrators', 'GET', params);
    this.projects.locations.global.policyOrchestrators.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);
    this.projects.locations.global.policyOrchestrators.patch = (params) => this._makeRequest('v2beta/{+name}', 'PATCH', params);
    this.projects.locations.global.policyOrchestrators.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);

    this.folders = {};

    this.folders.locations = {};

    this.folders.locations.operations = {};
    this.folders.locations.operations.list = (params) => this._makeRequest('v2beta/{+name}/operations', 'GET', params);
    this.folders.locations.operations.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);
    this.folders.locations.operations.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);
    this.folders.locations.operations.cancel = (params) => this._makeRequest('v2beta/{+name}:cancel', 'POST', params);

    this.folders.locations.global = {};

    this.folders.locations.global.policyOrchestrators = {};
    this.folders.locations.global.policyOrchestrators.create = (params) => this._makeRequest('v2beta/{+parent}/policyOrchestrators', 'POST', params);
    this.folders.locations.global.policyOrchestrators.list = (params) => this._makeRequest('v2beta/{+parent}/policyOrchestrators', 'GET', params);
    this.folders.locations.global.policyOrchestrators.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);
    this.folders.locations.global.policyOrchestrators.patch = (params) => this._makeRequest('v2beta/{+name}', 'PATCH', params);
    this.folders.locations.global.policyOrchestrators.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.operations = {};
    this.organizations.locations.operations.list = (params) => this._makeRequest('v2beta/{+name}/operations', 'GET', params);
    this.organizations.locations.operations.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);
    this.organizations.locations.operations.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);
    this.organizations.locations.operations.cancel = (params) => this._makeRequest('v2beta/{+name}:cancel', 'POST', params);

    this.organizations.locations.global = {};

    this.organizations.locations.global.policyOrchestrators = {};
    this.organizations.locations.global.policyOrchestrators.create = (params) => this._makeRequest('v2beta/{+parent}/policyOrchestrators', 'POST', params);
    this.organizations.locations.global.policyOrchestrators.list = (params) => this._makeRequest('v2beta/{+parent}/policyOrchestrators', 'GET', params);
    this.organizations.locations.global.policyOrchestrators.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);
    this.organizations.locations.global.policyOrchestrators.patch = (params) => this._makeRequest('v2beta/{+name}', 'PATCH', params);
    this.organizations.locations.global.policyOrchestrators.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);
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
