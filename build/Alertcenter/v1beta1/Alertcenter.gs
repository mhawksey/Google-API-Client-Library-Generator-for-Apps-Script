
/**
 * Google Apps Script client library for the Google Workspace Alert Center API
 * Documentation URL: https://developers.google.com/workspace/admin/alertcenter/
 * @class
 */
class Alertcenter {
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
    this._rootUrl = 'https://alertcenter.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.alerts = {};
    this.alerts.list = (params) => this._makeRequest('v1beta1/alerts', 'GET', params);
    this.alerts.get = (params) => this._makeRequest('v1beta1/alerts/{alertId}', 'GET', params);
    this.alerts.delete = (params) => this._makeRequest('v1beta1/alerts/{alertId}', 'DELETE', params);
    this.alerts.undelete = (params) => this._makeRequest('v1beta1/alerts/{alertId}:undelete', 'POST', params);
    this.alerts.getMetadata = (params) => this._makeRequest('v1beta1/alerts/{alertId}/metadata', 'GET', params);
    this.alerts.batchDelete = (params) => this._makeRequest('v1beta1/alerts:batchDelete', 'POST', params);
    this.alerts.batchUndelete = (params) => this._makeRequest('v1beta1/alerts:batchUndelete', 'POST', params);

    this.alerts.feedback = {};
    this.alerts.feedback.create = (params) => this._makeRequest('v1beta1/alerts/{alertId}/feedback', 'POST', params);
    this.alerts.feedback.list = (params) => this._makeRequest('v1beta1/alerts/{alertId}/feedback', 'GET', params);

    this.v1beta1 = {};
    this.v1beta1.getSettings = (params) => this._makeRequest('v1beta1/settings', 'GET', params);
    this.v1beta1.updateSettings = (params) => this._makeRequest('v1beta1/settings', 'PATCH', params);
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
