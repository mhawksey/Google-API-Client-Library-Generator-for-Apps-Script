
/**
 * Google Apps Script client library for the Cloud Controls Partner API
 * Documentation URL: https://cloud.google.com/sovereign-controls-by-partners/docs/sovereign-partners/reference/rest
 * @class
 */
class Cloudcontrolspartner {
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
    this._rootUrl = 'https://cloudcontrolspartner.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.organizations = {};

    this.organizations.locations = {};
    this.organizations.locations.getPartner = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.locations.customers = {};
    this.organizations.locations.customers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.customers.list = (params) => this._makeRequest('v1/{+parent}/customers', 'GET', params);
    this.organizations.locations.customers.create = (params) => this._makeRequest('v1/{+parent}/customers', 'POST', params);
    this.organizations.locations.customers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.locations.customers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.locations.customers.workloads = {};
    this.organizations.locations.customers.workloads.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.customers.workloads.list = (params) => this._makeRequest('v1/{+parent}/workloads', 'GET', params);
    this.organizations.locations.customers.workloads.getEkmConnections = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.customers.workloads.getPartnerPermissions = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.locations.customers.workloads.accessApprovalRequests = {};
    this.organizations.locations.customers.workloads.accessApprovalRequests.list = (params) => this._makeRequest('v1/{+parent}/accessApprovalRequests', 'GET', params);

    this.organizations.locations.customers.workloads.violations = {};
    this.organizations.locations.customers.workloads.violations.list = (params) => this._makeRequest('v1/{+parent}/violations', 'GET', params);
    this.organizations.locations.customers.workloads.violations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
