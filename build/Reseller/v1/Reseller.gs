
/**
 * Google Apps Script client library for the Google Workspace Reseller API
 * Documentation URL: https://developers.google.com/google-apps/reseller/
 * @class
 */
class Reseller {
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
    this._rootUrl = 'https://reseller.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.customers = {};
    this.customers.get = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}', 'GET', params);
    this.customers.insert = (params) => this._makeRequest('apps/reseller/v1/customers', 'POST', params);
    this.customers.update = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}', 'PUT', params);
    this.customers.patch = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}', 'PATCH', params);

    this.resellernotify = {};
    this.resellernotify.getwatchdetails = (params) => this._makeRequest('apps/reseller/v1/resellernotify/getwatchdetails', 'GET', params);
    this.resellernotify.register = (params) => this._makeRequest('apps/reseller/v1/resellernotify/register', 'POST', params);
    this.resellernotify.unregister = (params) => this._makeRequest('apps/reseller/v1/resellernotify/unregister', 'POST', params);

    this.subscriptions = {};
    this.subscriptions.activate = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/activate', 'POST', params);
    this.subscriptions.changePlan = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changePlan', 'POST', params);
    this.subscriptions.changeRenewalSettings = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeRenewalSettings', 'POST', params);
    this.subscriptions.changeSeats = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/changeSeats', 'POST', params);
    this.subscriptions.delete = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}', 'DELETE', params);
    this.subscriptions.get = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}', 'GET', params);
    this.subscriptions.insert = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions', 'POST', params);
    this.subscriptions.list = (params) => this._makeRequest('apps/reseller/v1/subscriptions', 'GET', params);
    this.subscriptions.startPaidService = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/startPaidService', 'POST', params);
    this.subscriptions.suspend = (params) => this._makeRequest('apps/reseller/v1/customers/{customerId}/subscriptions/{subscriptionId}/suspend', 'POST', params);
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
