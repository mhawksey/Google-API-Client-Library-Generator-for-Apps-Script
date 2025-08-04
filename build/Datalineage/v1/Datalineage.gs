
/**
 * Google Apps Script client library for the Data Lineage API
 * Documentation URL: https://cloud.google.com/data-catalog
 * @class
 */
class Datalineage {
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
    this._rootUrl = 'https://datalineage.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.processOpenLineageRunEvent = (params) => this._makeRequest('v1/{+parent}:processOpenLineageRunEvent', 'POST', params);
    this.projects.locations.searchLinks = (params) => this._makeRequest('v1/{+parent}:searchLinks', 'POST', params);
    this.projects.locations.batchSearchLinkProcesses = (params) => this._makeRequest('v1/{+parent}:batchSearchLinkProcesses', 'POST', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.processes = {};
    this.projects.locations.processes.create = (params) => this._makeRequest('v1/{+parent}/processes', 'POST', params);
    this.projects.locations.processes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.processes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.processes.list = (params) => this._makeRequest('v1/{+parent}/processes', 'GET', params);
    this.projects.locations.processes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.processes.runs = {};
    this.projects.locations.processes.runs.create = (params) => this._makeRequest('v1/{+parent}/runs', 'POST', params);
    this.projects.locations.processes.runs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.processes.runs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.processes.runs.list = (params) => this._makeRequest('v1/{+parent}/runs', 'GET', params);
    this.projects.locations.processes.runs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.processes.runs.lineageEvents = {};
    this.projects.locations.processes.runs.lineageEvents.create = (params) => this._makeRequest('v1/{+parent}/lineageEvents', 'POST', params);
    this.projects.locations.processes.runs.lineageEvents.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.processes.runs.lineageEvents.list = (params) => this._makeRequest('v1/{+parent}/lineageEvents', 'GET', params);
    this.projects.locations.processes.runs.lineageEvents.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
