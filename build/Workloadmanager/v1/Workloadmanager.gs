
/**
 * Google Apps Script client library for the Workload Manager API
 * Documentation URL: https://cloud.google.com/workload-manager/docs
 * @class
 */
class Workloadmanager {
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
    this._rootUrl = 'https://workloadmanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.evaluations = {};
    this.projects.locations.evaluations.list = (params) => this._makeRequest('v1/{+parent}/evaluations', 'GET', params);
    this.projects.locations.evaluations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.evaluations.create = (params) => this._makeRequest('v1/{+parent}/evaluations', 'POST', params);
    this.projects.locations.evaluations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.evaluations.executions = {};
    this.projects.locations.evaluations.executions.list = (params) => this._makeRequest('v1/{+parent}/executions', 'GET', params);
    this.projects.locations.evaluations.executions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.evaluations.executions.run = (params) => this._makeRequest('v1/{+name}/executions:run', 'POST', params);
    this.projects.locations.evaluations.executions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.evaluations.executions.results = {};
    this.projects.locations.evaluations.executions.results.list = (params) => this._makeRequest('v1/{+parent}/results', 'GET', params);

    this.projects.locations.evaluations.executions.scannedResources = {};
    this.projects.locations.evaluations.executions.scannedResources.list = (params) => this._makeRequest('v1/{+parent}/scannedResources', 'GET', params);

    this.projects.locations.rules = {};
    this.projects.locations.rules.list = (params) => this._makeRequest('v1/{+parent}/rules', 'GET', params);

    this.projects.locations.insights = {};
    this.projects.locations.insights.writeInsight = (params) => this._makeRequest('v1/{+location}/insights:writeInsight', 'POST', params);
    this.projects.locations.insights.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.discoveredprofiles = {};
    this.projects.locations.discoveredprofiles.list = (params) => this._makeRequest('v1/{+parent}/discoveredprofiles', 'GET', params);
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
