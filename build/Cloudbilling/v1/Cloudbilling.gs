
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
    this.billingAccounts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.billingAccounts.list = (params) => this._makeRequest('v1/billingAccounts', 'GET', params);
    this.billingAccounts.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.billingAccounts.create = (params) => this._makeRequest('v1/billingAccounts', 'POST', params);
    this.billingAccounts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.billingAccounts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.billingAccounts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.billingAccounts.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);

    this.billingAccounts.subAccounts = {};
    this.billingAccounts.subAccounts.list = (params) => this._makeRequest('v1/{+parent}/subAccounts', 'GET', params);
    this.billingAccounts.subAccounts.create = (params) => this._makeRequest('v1/{+parent}/subAccounts', 'POST', params);

    this.billingAccounts.projects = {};
    this.billingAccounts.projects.list = (params) => this._makeRequest('v1/{+name}/projects', 'GET', params);

    this.organizations = {};

    this.organizations.billingAccounts = {};
    this.organizations.billingAccounts.list = (params) => this._makeRequest('v1/{+parent}/billingAccounts', 'GET', params);
    this.organizations.billingAccounts.create = (params) => this._makeRequest('v1/{+parent}/billingAccounts', 'POST', params);
    this.organizations.billingAccounts.move = (params) => this._makeRequest('v1/{+destinationParent}/{+name}:move', 'GET', params);

    this.projects = {};
    this.projects.getBillingInfo = (params) => this._makeRequest('v1/{+name}/billingInfo', 'GET', params);
    this.projects.updateBillingInfo = (params) => this._makeRequest('v1/{+name}/billingInfo', 'PUT', params);

    this.services = {};
    this.services.list = (params) => this._makeRequest('v1/services', 'GET', params);

    this.services.skus = {};
    this.services.skus.list = (params) => this._makeRequest('v1/{+parent}/skus', 'GET', params);
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
