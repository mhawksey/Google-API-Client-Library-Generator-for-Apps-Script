
/**
 * Google Apps Script client library for the Fitness API
 * Documentation URL: https://developers.google.com/fit/rest/v1/get-started
 * @class
 */
class Fitness {
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
    this._rootUrl = 'https://fitness.googleapis.com/';
    this._servicePath = 'fitness/v1/users/';

    // --- Public Interface Initialization ---

    this.users = {};

    this.users.dataSources = {};
    this.users.dataSources.create = (params) => this._makeRequest('{userId}/dataSources', 'POST', params);
    this.users.dataSources.list = (params) => this._makeRequest('{userId}/dataSources', 'GET', params);
    this.users.dataSources.update = (params) => this._makeRequest('{userId}/dataSources/{dataSourceId}', 'PUT', params);
    this.users.dataSources.get = (params) => this._makeRequest('{userId}/dataSources/{dataSourceId}', 'GET', params);
    this.users.dataSources.delete = (params) => this._makeRequest('{userId}/dataSources/{dataSourceId}', 'DELETE', params);

    this.users.dataSources.datasets = {};
    this.users.dataSources.datasets.patch = (params) => this._makeRequest('{userId}/dataSources/{dataSourceId}/datasets/{datasetId}', 'PATCH', params);
    this.users.dataSources.datasets.get = (params) => this._makeRequest('{userId}/dataSources/{dataSourceId}/datasets/{datasetId}', 'GET', params);
    this.users.dataSources.datasets.delete = (params) => this._makeRequest('{userId}/dataSources/{dataSourceId}/datasets/{datasetId}', 'DELETE', params);

    this.users.dataSources.dataPointChanges = {};
    this.users.dataSources.dataPointChanges.list = (params) => this._makeRequest('{userId}/dataSources/{dataSourceId}/dataPointChanges', 'GET', params);

    this.users.dataset = {};
    this.users.dataset.aggregate = (params) => this._makeRequest('{userId}/dataset:aggregate', 'POST', params);

    this.users.sessions = {};
    this.users.sessions.update = (params) => this._makeRequest('{userId}/sessions/{sessionId}', 'PUT', params);
    this.users.sessions.list = (params) => this._makeRequest('{userId}/sessions', 'GET', params);
    this.users.sessions.delete = (params) => this._makeRequest('{userId}/sessions/{sessionId}', 'DELETE', params);
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
