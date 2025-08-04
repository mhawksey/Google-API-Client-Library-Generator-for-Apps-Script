
/**
 * Google Apps Script client library for the Chrome Policy API
 * Documentation URL: http://developers.google.com/chrome/policy
 * @class
 */
class Chromepolicy {
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
    this._rootUrl = 'https://chromepolicy.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.media = {};
    this.media.upload = (params) => this._makeRequest('v1/{+customer}/policies/files:uploadPolicyFile', 'POST', params);

    this.customers = {};

    this.customers.policies = {};
    this.customers.policies.resolve = (params) => this._makeRequest('v1/{+customer}/policies:resolve', 'POST', params);

    this.customers.policies.orgunits = {};
    this.customers.policies.orgunits.batchModify = (params) => this._makeRequest('v1/{+customer}/policies/orgunits:batchModify', 'POST', params);
    this.customers.policies.orgunits.batchInherit = (params) => this._makeRequest('v1/{+customer}/policies/orgunits:batchInherit', 'POST', params);

    this.customers.policies.groups = {};
    this.customers.policies.groups.batchModify = (params) => this._makeRequest('v1/{+customer}/policies/groups:batchModify', 'POST', params);
    this.customers.policies.groups.batchDelete = (params) => this._makeRequest('v1/{+customer}/policies/groups:batchDelete', 'POST', params);
    this.customers.policies.groups.listGroupPriorityOrdering = (params) => this._makeRequest('v1/{+customer}/policies/groups:listGroupPriorityOrdering', 'POST', params);
    this.customers.policies.groups.updateGroupPriorityOrdering = (params) => this._makeRequest('v1/{+customer}/policies/groups:updateGroupPriorityOrdering', 'POST', params);

    this.customers.policies.networks = {};
    this.customers.policies.networks.defineCertificate = (params) => this._makeRequest('v1/{+customer}/policies/networks:defineCertificate', 'POST', params);
    this.customers.policies.networks.removeCertificate = (params) => this._makeRequest('v1/{+customer}/policies/networks:removeCertificate', 'POST', params);
    this.customers.policies.networks.removeNetwork = (params) => this._makeRequest('v1/{+customer}/policies/networks:removeNetwork', 'POST', params);
    this.customers.policies.networks.defineNetwork = (params) => this._makeRequest('v1/{+customer}/policies/networks:defineNetwork', 'POST', params);

    this.customers.policySchemas = {};
    this.customers.policySchemas.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.customers.policySchemas.list = (params) => this._makeRequest('v1/{+parent}/policySchemas', 'GET', params);
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
