
/**
 * Google Apps Script client library for the Firebase App Distribution API
 * Documentation URL: https://firebase.google.com/products/app-distribution
 * @class
 */
class Firebaseappdistribution {
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
    this._rootUrl = 'https://firebaseappdistribution.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.apps = {};
    this.projects.apps.getAabInfo = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.apps.releases = {};
    this.projects.apps.releases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.apps.releases.list = (params) => this._makeRequest('v1/{+parent}/releases', 'GET', params);
    this.projects.apps.releases.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.apps.releases.distribute = (params) => this._makeRequest('v1/{+name}:distribute', 'POST', params);
    this.projects.apps.releases.batchDelete = (params) => this._makeRequest('v1/{+parent}/releases:batchDelete', 'POST', params);

    this.projects.apps.releases.operations = {};
    this.projects.apps.releases.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.apps.releases.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.apps.releases.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.apps.releases.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.apps.releases.operations.wait = (params) => this._makeRequest('v1/{+name}:wait', 'POST', params);

    this.projects.apps.releases.feedbackReports = {};
    this.projects.apps.releases.feedbackReports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.apps.releases.feedbackReports.list = (params) => this._makeRequest('v1/{+parent}/feedbackReports', 'GET', params);
    this.projects.apps.releases.feedbackReports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.testers = {};
    this.projects.testers.batchAdd = (params) => this._makeRequest('v1/{+project}/testers:batchAdd', 'POST', params);
    this.projects.testers.batchRemove = (params) => this._makeRequest('v1/{+project}/testers:batchRemove', 'POST', params);
    this.projects.testers.list = (params) => this._makeRequest('v1/{+parent}/testers', 'GET', params);
    this.projects.testers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.groups = {};
    this.projects.groups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.groups.list = (params) => this._makeRequest('v1/{+parent}/groups', 'GET', params);
    this.projects.groups.create = (params) => this._makeRequest('v1/{+parent}/groups', 'POST', params);
    this.projects.groups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.groups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.groups.batchJoin = (params) => this._makeRequest('v1/{+group}:batchJoin', 'POST', params);
    this.projects.groups.batchLeave = (params) => this._makeRequest('v1/{+group}:batchLeave', 'POST', params);

    this.media = {};
    this.media.upload = (params) => this._makeRequest('v1/{+app}/releases:upload', 'POST', params);
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
