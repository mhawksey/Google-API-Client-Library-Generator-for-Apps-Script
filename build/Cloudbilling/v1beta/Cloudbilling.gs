
/**
 * Google Apps Script client library for the Cloud Billing API
 * Documentation URL: https://cloud.google.com/billing/docs/apis
 * @class
 */
class Cloudbilling {
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
    this._rootUrl = 'https://cloudbilling.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.billingAccounts = {};

    this.billingAccounts.services = {};
    this.billingAccounts.services.list = (params) => this._makeRequest('v1beta/{+parent}/services', 'GET', params);
    this.billingAccounts.services.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.billingAccounts.skuGroups = {};
    this.billingAccounts.skuGroups.list = (params) => this._makeRequest('v1beta/{+parent}/skuGroups', 'GET', params);
    this.billingAccounts.skuGroups.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.billingAccounts.skuGroups.skus = {};
    this.billingAccounts.skuGroups.skus.list = (params) => this._makeRequest('v1beta/{+parent}/skus', 'GET', params);
    this.billingAccounts.skuGroups.skus.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.billingAccounts.skus = {};
    this.billingAccounts.skus.list = (params) => this._makeRequest('v1beta/{+parent}/skus', 'GET', params);
    this.billingAccounts.skus.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.billingAccounts.skus.price = {};
    this.billingAccounts.skus.price.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.billingAccounts.skus.prices = {};
    this.billingAccounts.skus.prices.list = (params) => this._makeRequest('v1beta/{+parent}/prices', 'GET', params);

    this.skus = {};

    this.skus.price = {};
    this.skus.price.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.skus.prices = {};
    this.skus.prices.list = (params) => this._makeRequest('v1beta/{+parent}/prices', 'GET', params);

    this.skuGroups = {};
    this.skuGroups.list = (params) => this._makeRequest('v1beta/skuGroups', 'GET', params);
    this.skuGroups.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.skuGroups.skus = {};
    this.skuGroups.skus.list = (params) => this._makeRequest('v1beta/{+parent}/skus', 'GET', params);
    this.skuGroups.skus.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
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
