
/**
 * Google Apps Script client library for the Storage Transfer API
 * Documentation URL: https://cloud.google.com/storage-transfer/docs
 * @class
 */
class Storagetransfer {
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
    this._rootUrl = 'https://storagetransfer.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.transferOperations = {};
    this.transferOperations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.transferOperations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.transferOperations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.transferOperations.pause = (params) => this._makeRequest('v1/{+name}:pause', 'POST', params);
    this.transferOperations.resume = (params) => this._makeRequest('v1/{+name}:resume', 'POST', params);

    this.googleServiceAccounts = {};
    this.googleServiceAccounts.get = (params) => this._makeRequest('v1/googleServiceAccounts/{projectId}', 'GET', params);

    this.transferJobs = {};
    this.transferJobs.create = (params) => this._makeRequest('v1/transferJobs', 'POST', params);
    this.transferJobs.patch = (params) => this._makeRequest('v1/{+jobName}', 'PATCH', params);
    this.transferJobs.get = (params) => this._makeRequest('v1/{+jobName}', 'GET', params);
    this.transferJobs.list = (params) => this._makeRequest('v1/transferJobs', 'GET', params);
    this.transferJobs.run = (params) => this._makeRequest('v1/{+jobName}:run', 'POST', params);
    this.transferJobs.delete = (params) => this._makeRequest('v1/{+jobName}', 'DELETE', params);

    this.projects = {};

    this.projects.agentPools = {};
    this.projects.agentPools.create = (params) => this._makeRequest('v1/projects/{+projectId}/agentPools', 'POST', params);
    this.projects.agentPools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.agentPools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.agentPools.list = (params) => this._makeRequest('v1/projects/{+projectId}/agentPools', 'GET', params);
    this.projects.agentPools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
