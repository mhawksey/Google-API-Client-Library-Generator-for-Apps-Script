
/**
 * Google Apps Script client library for the Service Usage API
 * Documentation URL: https://cloud.google.com/service-usage/
 * @class
 */
class Serviceusage {
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
    this._rootUrl = 'https://serviceusage.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.operations.list = (params) => this._makeRequest('v1beta1/operations', 'GET', params);

    this.services = {};
    this.services.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.services.generateServiceIdentity = (params) => this._makeRequest('v1beta1/{+parent}:generateServiceIdentity', 'POST', params);
    this.services.disable = (params) => this._makeRequest('v1beta1/{+name}:disable', 'POST', params);
    this.services.enable = (params) => this._makeRequest('v1beta1/{+name}:enable', 'POST', params);
    this.services.list = (params) => this._makeRequest('v1beta1/{+parent}/services', 'GET', params);
    this.services.batchEnable = (params) => this._makeRequest('v1beta1/{+parent}/services:batchEnable', 'POST', params);

    this.services.consumerQuotaMetrics = {};
    this.services.consumerQuotaMetrics.list = (params) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics', 'GET', params);
    this.services.consumerQuotaMetrics.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.services.consumerQuotaMetrics.importConsumerOverrides = (params) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics:importConsumerOverrides', 'POST', params);
    this.services.consumerQuotaMetrics.importAdminOverrides = (params) => this._makeRequest('v1beta1/{+parent}/consumerQuotaMetrics:importAdminOverrides', 'POST', params);

    this.services.consumerQuotaMetrics.limits = {};
    this.services.consumerQuotaMetrics.limits.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.services.consumerQuotaMetrics.limits.consumerOverrides = {};
    this.services.consumerQuotaMetrics.limits.consumerOverrides.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.services.consumerQuotaMetrics.limits.consumerOverrides.create = (params) => this._makeRequest('v1beta1/{+parent}/consumerOverrides', 'POST', params);
    this.services.consumerQuotaMetrics.limits.consumerOverrides.list = (params) => this._makeRequest('v1beta1/{+parent}/consumerOverrides', 'GET', params);
    this.services.consumerQuotaMetrics.limits.consumerOverrides.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.services.consumerQuotaMetrics.limits.adminOverrides = {};
    this.services.consumerQuotaMetrics.limits.adminOverrides.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.services.consumerQuotaMetrics.limits.adminOverrides.create = (params) => this._makeRequest('v1beta1/{+parent}/adminOverrides', 'POST', params);
    this.services.consumerQuotaMetrics.limits.adminOverrides.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.services.consumerQuotaMetrics.limits.adminOverrides.list = (params) => this._makeRequest('v1beta1/{+parent}/adminOverrides', 'GET', params);
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
