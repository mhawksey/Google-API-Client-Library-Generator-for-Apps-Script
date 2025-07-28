
/**
 * Google Apps Script client library for the Organization Policy API
 * Documentation URL: https://cloud.google.com/orgpolicy/docs/reference/rest/index.html
 * @class
 */
class Orgpolicy {
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
    this._rootUrl = 'https://orgpolicy.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.constraints = {};
    this.projects.constraints.list = (params) => this._makeRequest('v2/{+parent}/constraints', 'GET', params);

    this.projects.policies = {};
    this.projects.policies.list = (params) => this._makeRequest('v2/{+parent}/policies', 'GET', params);
    this.projects.policies.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.policies.getEffectivePolicy = (params) => this._makeRequest('v2/{+name}:getEffectivePolicy', 'GET', params);
    this.projects.policies.create = (params) => this._makeRequest('v2/{+parent}/policies', 'POST', params);
    this.projects.policies.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.policies.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.folders = {};

    this.folders.constraints = {};
    this.folders.constraints.list = (params) => this._makeRequest('v2/{+parent}/constraints', 'GET', params);

    this.folders.policies = {};
    this.folders.policies.list = (params) => this._makeRequest('v2/{+parent}/policies', 'GET', params);
    this.folders.policies.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.folders.policies.getEffectivePolicy = (params) => this._makeRequest('v2/{+name}:getEffectivePolicy', 'GET', params);
    this.folders.policies.create = (params) => this._makeRequest('v2/{+parent}/policies', 'POST', params);
    this.folders.policies.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.folders.policies.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations = {};

    this.organizations.constraints = {};
    this.organizations.constraints.list = (params) => this._makeRequest('v2/{+parent}/constraints', 'GET', params);

    this.organizations.policies = {};
    this.organizations.policies.list = (params) => this._makeRequest('v2/{+parent}/policies', 'GET', params);
    this.organizations.policies.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.policies.getEffectivePolicy = (params) => this._makeRequest('v2/{+name}:getEffectivePolicy', 'GET', params);
    this.organizations.policies.create = (params) => this._makeRequest('v2/{+parent}/policies', 'POST', params);
    this.organizations.policies.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.policies.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.organizations.customConstraints = {};
    this.organizations.customConstraints.create = (params) => this._makeRequest('v2/{+parent}/customConstraints', 'POST', params);
    this.organizations.customConstraints.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.organizations.customConstraints.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.organizations.customConstraints.list = (params) => this._makeRequest('v2/{+parent}/customConstraints', 'GET', params);
    this.organizations.customConstraints.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
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
