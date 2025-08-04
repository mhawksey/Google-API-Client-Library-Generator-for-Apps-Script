
/**
 * Google Apps Script client library for the Google Forms API
 * Documentation URL: https://developers.google.com/workspace/forms/api
 * @class
 */
class Forms {
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
    this._rootUrl = 'https://forms.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.forms = {};
    this.forms.create = (params) => this._makeRequest('v1/forms', 'POST', params);
    this.forms.get = (params) => this._makeRequest('v1/forms/{formId}', 'GET', params);
    this.forms.batchUpdate = (params) => this._makeRequest('v1/forms/{formId}:batchUpdate', 'POST', params);
    this.forms.setPublishSettings = (params) => this._makeRequest('v1/forms/{formId}:setPublishSettings', 'POST', params);

    this.forms.responses = {};
    this.forms.responses.get = (params) => this._makeRequest('v1/forms/{formId}/responses/{responseId}', 'GET', params);
    this.forms.responses.list = (params) => this._makeRequest('v1/forms/{formId}/responses', 'GET', params);

    this.forms.watches = {};
    this.forms.watches.create = (params) => this._makeRequest('v1/forms/{formId}/watches', 'POST', params);
    this.forms.watches.list = (params) => this._makeRequest('v1/forms/{formId}/watches', 'GET', params);
    this.forms.watches.renew = (params) => this._makeRequest('v1/forms/{formId}/watches/{watchId}:renew', 'POST', params);
    this.forms.watches.delete = (params) => this._makeRequest('v1/forms/{formId}/watches/{watchId}', 'DELETE', params);
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
