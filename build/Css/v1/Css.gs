
/**
 * Google Apps Script client library for the CSS API
 * Documentation URL: https://developers.google.com/comparison-shopping-services/api/overview
 * @class
 */
class Css {
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
    this._rootUrl = 'https://css.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};
    this.accounts.listChildAccounts = (params) => this._makeRequest('v1/{+parent}:listChildAccounts', 'GET', params);
    this.accounts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accounts.updateLabels = (params) => this._makeRequest('v1/{+name}:updateLabels', 'POST', params);

    this.accounts.labels = {};
    this.accounts.labels.list = (params) => this._makeRequest('v1/{+parent}/labels', 'GET', params);
    this.accounts.labels.create = (params) => this._makeRequest('v1/{+parent}/labels', 'POST', params);
    this.accounts.labels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.accounts.labels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.accounts.cssProductInputs = {};
    this.accounts.cssProductInputs.insert = (params) => this._makeRequest('v1/{+parent}/cssProductInputs:insert', 'POST', params);
    this.accounts.cssProductInputs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.accounts.cssProductInputs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.accounts.cssProducts = {};
    this.accounts.cssProducts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accounts.cssProducts.list = (params) => this._makeRequest('v1/{+parent}/cssProducts', 'GET', params);

    this.accounts.quotas = {};
    this.accounts.quotas.list = (params) => this._makeRequest('v1/{+parent}/quotas', 'GET', params);
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
