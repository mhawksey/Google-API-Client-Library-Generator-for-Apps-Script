
/**
 * Google Apps Script client library for the Cloud Functions API
 * Documentation URL: https://cloud.google.com/functions
 * @class
 */
class Cloudfunctions {
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
    this._rootUrl = 'https://cloudfunctions.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v2beta/{+name}/locations', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v2beta/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);

    this.projects.locations.functions = {};
    this.projects.locations.functions.setIamPolicy = (params) => this._makeRequest('v2beta/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.functions.getIamPolicy = (params) => this._makeRequest('v2beta/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.functions.testIamPermissions = (params) => this._makeRequest('v2beta/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.functions.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);
    this.projects.locations.functions.list = (params) => this._makeRequest('v2beta/{+parent}/functions', 'GET', params);
    this.projects.locations.functions.create = (params) => this._makeRequest('v2beta/{+parent}/functions', 'POST', params);
    this.projects.locations.functions.patch = (params) => this._makeRequest('v2beta/{+name}', 'PATCH', params);
    this.projects.locations.functions.setupFunctionUpgradeConfig = (params) => this._makeRequest('v2beta/{+name}:setupFunctionUpgradeConfig', 'POST', params);
    this.projects.locations.functions.abortFunctionUpgrade = (params) => this._makeRequest('v2beta/{+name}:abortFunctionUpgrade', 'POST', params);
    this.projects.locations.functions.redirectFunctionUpgradeTraffic = (params) => this._makeRequest('v2beta/{+name}:redirectFunctionUpgradeTraffic', 'POST', params);
    this.projects.locations.functions.rollbackFunctionUpgradeTraffic = (params) => this._makeRequest('v2beta/{+name}:rollbackFunctionUpgradeTraffic', 'POST', params);
    this.projects.locations.functions.commitFunctionUpgrade = (params) => this._makeRequest('v2beta/{+name}:commitFunctionUpgrade', 'POST', params);
    this.projects.locations.functions.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);
    this.projects.locations.functions.generateUploadUrl = (params) => this._makeRequest('v2beta/{+parent}/functions:generateUploadUrl', 'POST', params);
    this.projects.locations.functions.generateDownloadUrl = (params) => this._makeRequest('v2beta/{+name}:generateDownloadUrl', 'POST', params);
    this.projects.locations.functions.detachFunction = (params) => this._makeRequest('v2beta/{+name}:detachFunction', 'POST', params);

    this.projects.locations.runtimes = {};
    this.projects.locations.runtimes.list = (params) => this._makeRequest('v2beta/{+parent}/runtimes', 'GET', params);
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
