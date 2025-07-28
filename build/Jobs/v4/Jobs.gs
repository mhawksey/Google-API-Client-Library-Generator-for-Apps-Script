
/**
 * Google Apps Script client library for the Cloud Talent Solution API
 * Documentation URL: https://cloud.google.com/talent-solution/job-search/docs/
 * @class
 */
class Jobs {
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
    this._rootUrl = 'https://jobs.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.operations = {};
    this.projects.operations.get = (params) => this._makeRequest('v4/{+name}', 'GET', params);

    this.projects.tenants = {};
    this.projects.tenants.completeQuery = (params) => this._makeRequest('v4/{+tenant}:completeQuery', 'GET', params);
    this.projects.tenants.create = (params) => this._makeRequest('v4/{+parent}/tenants', 'POST', params);
    this.projects.tenants.get = (params) => this._makeRequest('v4/{+name}', 'GET', params);
    this.projects.tenants.patch = (params) => this._makeRequest('v4/{+name}', 'PATCH', params);
    this.projects.tenants.delete = (params) => this._makeRequest('v4/{+name}', 'DELETE', params);
    this.projects.tenants.list = (params) => this._makeRequest('v4/{+parent}/tenants', 'GET', params);

    this.projects.tenants.companies = {};
    this.projects.tenants.companies.create = (params) => this._makeRequest('v4/{+parent}/companies', 'POST', params);
    this.projects.tenants.companies.get = (params) => this._makeRequest('v4/{+name}', 'GET', params);
    this.projects.tenants.companies.patch = (params) => this._makeRequest('v4/{+name}', 'PATCH', params);
    this.projects.tenants.companies.delete = (params) => this._makeRequest('v4/{+name}', 'DELETE', params);
    this.projects.tenants.companies.list = (params) => this._makeRequest('v4/{+parent}/companies', 'GET', params);

    this.projects.tenants.clientEvents = {};
    this.projects.tenants.clientEvents.create = (params) => this._makeRequest('v4/{+parent}/clientEvents', 'POST', params);

    this.projects.tenants.jobs = {};
    this.projects.tenants.jobs.create = (params) => this._makeRequest('v4/{+parent}/jobs', 'POST', params);
    this.projects.tenants.jobs.batchCreate = (params) => this._makeRequest('v4/{+parent}/jobs:batchCreate', 'POST', params);
    this.projects.tenants.jobs.get = (params) => this._makeRequest('v4/{+name}', 'GET', params);
    this.projects.tenants.jobs.patch = (params) => this._makeRequest('v4/{+name}', 'PATCH', params);
    this.projects.tenants.jobs.batchUpdate = (params) => this._makeRequest('v4/{+parent}/jobs:batchUpdate', 'POST', params);
    this.projects.tenants.jobs.delete = (params) => this._makeRequest('v4/{+name}', 'DELETE', params);
    this.projects.tenants.jobs.batchDelete = (params) => this._makeRequest('v4/{+parent}/jobs:batchDelete', 'POST', params);
    this.projects.tenants.jobs.list = (params) => this._makeRequest('v4/{+parent}/jobs', 'GET', params);
    this.projects.tenants.jobs.search = (params) => this._makeRequest('v4/{+parent}/jobs:search', 'POST', params);
    this.projects.tenants.jobs.searchForAlert = (params) => this._makeRequest('v4/{+parent}/jobs:searchForAlert', 'POST', params);
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
