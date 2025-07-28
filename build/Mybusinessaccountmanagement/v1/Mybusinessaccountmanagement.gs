
/**
 * Google Apps Script client library for the My Business Account Management API
 * Documentation URL: https://developers.google.com/my-business/
 * @class
 */
class Mybusinessaccountmanagement {
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
    this._rootUrl = 'https://mybusinessaccountmanagement.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.locations = {};
    this.locations.transfer = (params) => this._makeRequest('v1/{+name}:transfer', 'POST', params);

    this.locations.admins = {};
    this.locations.admins.list = (params) => this._makeRequest('v1/{+parent}/admins', 'GET', params);
    this.locations.admins.create = (params) => this._makeRequest('v1/{+parent}/admins', 'POST', params);
    this.locations.admins.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.locations.admins.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.accounts = {};
    this.accounts.list = (params) => this._makeRequest('v1/accounts', 'GET', params);
    this.accounts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accounts.create = (params) => this._makeRequest('v1/accounts', 'POST', params);
    this.accounts.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.accounts.invitations = {};
    this.accounts.invitations.accept = (params) => this._makeRequest('v1/{+name}:accept', 'POST', params);
    this.accounts.invitations.decline = (params) => this._makeRequest('v1/{+name}:decline', 'POST', params);
    this.accounts.invitations.list = (params) => this._makeRequest('v1/{+parent}/invitations', 'GET', params);

    this.accounts.admins = {};
    this.accounts.admins.list = (params) => this._makeRequest('v1/{+parent}/admins', 'GET', params);
    this.accounts.admins.create = (params) => this._makeRequest('v1/{+parent}/admins', 'POST', params);
    this.accounts.admins.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.accounts.admins.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
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
