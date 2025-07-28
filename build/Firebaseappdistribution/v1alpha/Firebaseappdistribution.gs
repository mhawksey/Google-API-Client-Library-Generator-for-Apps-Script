
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

    this.apps = {};
    this.apps.getJwt = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}/jwt', 'GET', params);
    this.apps.get = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}', 'GET', params);

    this.apps.releases = {};
    this.apps.releases.enable_access = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}/releases/{releaseId}/enable_access', 'POST', params);

    this.apps.releases.notes = {};
    this.apps.releases.notes.create = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}/releases/{releaseId}/notes', 'POST', params);

    this.apps.release_by_hash = {};
    this.apps.release_by_hash.get = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}/release_by_hash/{uploadHash}', 'GET', params);

    this.apps.upload_status = {};
    this.apps.upload_status.get = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}/upload_status/{uploadToken}', 'GET', params);

    this.apps.testers = {};
    this.apps.testers.getTesterUdids = (params) => this._makeRequest('v1alpha/apps/{mobilesdkAppId}/testers:getTesterUdids', 'GET', params);

    this.projects = {};
    this.projects.getTestQuota = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.testers = {};
    this.projects.testers.getUdids = (params) => this._makeRequest('v1alpha/{+project}/testers:udids', 'GET', params);

    this.projects.apps = {};
    this.projects.apps.getTestConfig = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.apps.updateTestConfig = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.projects.apps.releases = {};

    this.projects.apps.releases.tests = {};
    this.projects.apps.releases.tests.create = (params) => this._makeRequest('v1alpha/{+parent}/tests', 'POST', params);
    this.projects.apps.releases.tests.list = (params) => this._makeRequest('v1alpha/{+parent}/tests', 'GET', params);
    this.projects.apps.releases.tests.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.apps.releases.tests.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'GET', params);

    this.projects.apps.testCases = {};
    this.projects.apps.testCases.create = (params) => this._makeRequest('v1alpha/{+parent}/testCases', 'POST', params);
    this.projects.apps.testCases.list = (params) => this._makeRequest('v1alpha/{+parent}/testCases', 'GET', params);
    this.projects.apps.testCases.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.apps.testCases.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.apps.testCases.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.apps.testCases.batchDelete = (params) => this._makeRequest('v1alpha/{+parent}/testCases:batchDelete', 'POST', params);
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
