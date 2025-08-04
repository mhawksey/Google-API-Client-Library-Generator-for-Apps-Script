
/**
 * Google Apps Script client library for the Google Cloud Support API
 * Documentation URL: https://cloud.google.com/support/docs/apis
 * @class
 */
class Cloudsupport {
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
    this._rootUrl = 'https://cloudsupport.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.media = {};
    this.media.upload = (params) => this._makeRequest('v2/{+parent}/attachments', 'POST', params);
    this.media.download = (params) => this._makeRequest('v2/{+name}:download', 'GET', params);

    this.cases = {};
    this.cases.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.cases.list = (params) => this._makeRequest('v2/{+parent}/cases', 'GET', params);
    this.cases.search = (params) => this._makeRequest('v2/{+parent}/cases:search', 'GET', params);
    this.cases.create = (params) => this._makeRequest('v2/{+parent}/cases', 'POST', params);
    this.cases.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.cases.escalate = (params) => this._makeRequest('v2/{+name}:escalate', 'POST', params);
    this.cases.close = (params) => this._makeRequest('v2/{+name}:close', 'POST', params);

    this.cases.attachments = {};
    this.cases.attachments.list = (params) => this._makeRequest('v2/{+parent}/attachments', 'GET', params);

    this.cases.comments = {};
    this.cases.comments.list = (params) => this._makeRequest('v2/{+parent}/comments', 'GET', params);
    this.cases.comments.create = (params) => this._makeRequest('v2/{+parent}/comments', 'POST', params);

    this.caseClassifications = {};
    this.caseClassifications.search = (params) => this._makeRequest('v2/caseClassifications:search', 'GET', params);
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
