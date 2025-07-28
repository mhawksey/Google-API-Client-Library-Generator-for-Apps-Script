
/**
 * Google Apps Script client library for the Cloud Identity-Aware Proxy API
 * Documentation URL: https://cloud.google.com/iap
 * @class
 */
class Iap {
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
    this._rootUrl = 'https://iap.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.v1 = {};
    this.v1.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.v1.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.v1.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.v1.getIapSettings = (params) => this._makeRequest('v1/{+name}:iapSettings', 'GET', params);
    this.v1.updateIapSettings = (params) => this._makeRequest('v1/{+name}:iapSettings', 'PATCH', params);
    this.v1.validateAttributeExpression = (params) => this._makeRequest('v1/{+name}:validateAttributeExpression', 'POST', params);

    this.projects = {};

    this.projects.iap_tunnel = {};

    this.projects.iap_tunnel.locations = {};

    this.projects.iap_tunnel.locations.destGroups = {};
    this.projects.iap_tunnel.locations.destGroups.list = (params) => this._makeRequest('v1/{+parent}/destGroups', 'GET', params);
    this.projects.iap_tunnel.locations.destGroups.create = (params) => this._makeRequest('v1/{+parent}/destGroups', 'POST', params);
    this.projects.iap_tunnel.locations.destGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.iap_tunnel.locations.destGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.iap_tunnel.locations.destGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.brands = {};
    this.projects.brands.list = (params) => this._makeRequest('v1/{+parent}/brands', 'GET', params);
    this.projects.brands.create = (params) => this._makeRequest('v1/{+parent}/brands', 'POST', params);
    this.projects.brands.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.brands.identityAwareProxyClients = {};
    this.projects.brands.identityAwareProxyClients.create = (params) => this._makeRequest('v1/{+parent}/identityAwareProxyClients', 'POST', params);
    this.projects.brands.identityAwareProxyClients.list = (params) => this._makeRequest('v1/{+parent}/identityAwareProxyClients', 'GET', params);
    this.projects.brands.identityAwareProxyClients.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.brands.identityAwareProxyClients.resetSecret = (params) => this._makeRequest('v1/{+name}:resetSecret', 'POST', params);
    this.projects.brands.identityAwareProxyClients.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
