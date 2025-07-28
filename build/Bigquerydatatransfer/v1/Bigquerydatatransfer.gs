
/**
 * Google Apps Script client library for the BigQuery Data Transfer API
 * Documentation URL: https://cloud.google.com/bigquery-transfer/
 * @class
 */
class Bigquerydatatransfer {
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
    this._rootUrl = 'https://bigquerydatatransfer.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};
    this.projects.enrollDataSources = (params) => this._makeRequest('v1/{+name}:enrollDataSources', 'POST', params);

    this.projects.dataSources = {};
    this.projects.dataSources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.dataSources.list = (params) => this._makeRequest('v1/{+parent}/dataSources', 'GET', params);
    this.projects.dataSources.checkValidCreds = (params) => this._makeRequest('v1/{+name}:checkValidCreds', 'POST', params);

    this.projects.transferConfigs = {};
    this.projects.transferConfigs.create = (params) => this._makeRequest('v1/{+parent}/transferConfigs', 'POST', params);
    this.projects.transferConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.transferConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.transferConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.transferConfigs.list = (params) => this._makeRequest('v1/{+parent}/transferConfigs', 'GET', params);
    this.projects.transferConfigs.scheduleRuns = (params) => this._makeRequest('v1/{+parent}:scheduleRuns', 'POST', params);
    this.projects.transferConfigs.startManualRuns = (params) => this._makeRequest('v1/{+parent}:startManualRuns', 'POST', params);

    this.projects.transferConfigs.runs = {};
    this.projects.transferConfigs.runs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.transferConfigs.runs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.transferConfigs.runs.list = (params) => this._makeRequest('v1/{+parent}/runs', 'GET', params);

    this.projects.transferConfigs.runs.transferLogs = {};
    this.projects.transferConfigs.runs.transferLogs.list = (params) => this._makeRequest('v1/{+parent}/transferLogs', 'GET', params);

    this.projects.locations = {};
    this.projects.locations.enrollDataSources = (params) => this._makeRequest('v1/{+name}:enrollDataSources', 'POST', params);
    this.projects.locations.unenrollDataSources = (params) => this._makeRequest('v1/{+name}:unenrollDataSources', 'POST', params);
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.dataSources = {};
    this.projects.locations.dataSources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.dataSources.list = (params) => this._makeRequest('v1/{+parent}/dataSources', 'GET', params);
    this.projects.locations.dataSources.checkValidCreds = (params) => this._makeRequest('v1/{+name}:checkValidCreds', 'POST', params);

    this.projects.locations.transferConfigs = {};
    this.projects.locations.transferConfigs.create = (params) => this._makeRequest('v1/{+parent}/transferConfigs', 'POST', params);
    this.projects.locations.transferConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.transferConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.transferConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.transferConfigs.list = (params) => this._makeRequest('v1/{+parent}/transferConfigs', 'GET', params);
    this.projects.locations.transferConfigs.scheduleRuns = (params) => this._makeRequest('v1/{+parent}:scheduleRuns', 'POST', params);
    this.projects.locations.transferConfigs.startManualRuns = (params) => this._makeRequest('v1/{+parent}:startManualRuns', 'POST', params);

    this.projects.locations.transferConfigs.runs = {};
    this.projects.locations.transferConfigs.runs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.transferConfigs.runs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.transferConfigs.runs.list = (params) => this._makeRequest('v1/{+parent}/runs', 'GET', params);

    this.projects.locations.transferConfigs.runs.transferLogs = {};
    this.projects.locations.transferConfigs.runs.transferLogs.list = (params) => this._makeRequest('v1/{+parent}/transferLogs', 'GET', params);
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
