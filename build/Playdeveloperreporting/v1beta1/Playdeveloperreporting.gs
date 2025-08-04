
/**
 * Google Apps Script client library for the Google Play Developer Reporting API
 * Documentation URL: https://developers.google.com/play/developer/reporting
 * @class
 */
class Playdeveloperreporting {
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
    this._rootUrl = 'https://playdeveloperreporting.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.anomalies = {};
    this.anomalies.list = (params) => this._makeRequest('v1beta1/{+parent}/anomalies', 'GET', params);

    this.vitals = {};

    this.vitals.crashrate = {};
    this.vitals.crashrate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.vitals.crashrate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.anrrate = {};
    this.vitals.anrrate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.vitals.anrrate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.lmkrate = {};
    this.vitals.lmkrate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.vitals.lmkrate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.excessivewakeuprate = {};
    this.vitals.excessivewakeuprate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.vitals.excessivewakeuprate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.stuckbackgroundwakelockrate = {};
    this.vitals.stuckbackgroundwakelockrate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.vitals.stuckbackgroundwakelockrate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.slowstartrate = {};
    this.vitals.slowstartrate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.vitals.slowstartrate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.slowrenderingrate = {};
    this.vitals.slowrenderingrate.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.vitals.slowrenderingrate.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.vitals.errors = {};

    this.vitals.errors.reports = {};
    this.vitals.errors.reports.search = (params) => this._makeRequest('v1beta1/{+parent}/errorReports:search', 'GET', params);

    this.vitals.errors.issues = {};
    this.vitals.errors.issues.search = (params) => this._makeRequest('v1beta1/{+parent}/errorIssues:search', 'GET', params);

    this.vitals.errors.counts = {};
    this.vitals.errors.counts.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.vitals.errors.counts.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'POST', params);

    this.apps = {};
    this.apps.fetchReleaseFilterOptions = (params) => this._makeRequest('v1beta1/{+name}:fetchReleaseFilterOptions', 'GET', params);
    this.apps.search = (params) => this._makeRequest('v1beta1/apps:search', 'GET', params);
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
