
/**
 * Google Apps Script client library for the Certificate Authority API
 * Documentation URL: https://cloud.google.com/
 * @class
 */
class Privateca {
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
    this._rootUrl = 'https://privateca.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.caPools = {};
    this.projects.locations.caPools.create = (params) => this._makeRequest('v1/{+parent}/caPools', 'POST', params);
    this.projects.locations.caPools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.caPools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.caPools.list = (params) => this._makeRequest('v1/{+parent}/caPools', 'GET', params);
    this.projects.locations.caPools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.caPools.fetchCaCerts = (params) => this._makeRequest('v1/{+caPool}:fetchCaCerts', 'POST', params);
    this.projects.locations.caPools.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.caPools.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.caPools.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.caPools.certificates = {};
    this.projects.locations.caPools.certificates.create = (params) => this._makeRequest('v1/{+parent}/certificates', 'POST', params);
    this.projects.locations.caPools.certificates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.caPools.certificates.list = (params) => this._makeRequest('v1/{+parent}/certificates', 'GET', params);
    this.projects.locations.caPools.certificates.revoke = (params) => this._makeRequest('v1/{+name}:revoke', 'POST', params);
    this.projects.locations.caPools.certificates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.caPools.certificateAuthorities = {};
    this.projects.locations.caPools.certificateAuthorities.activate = (params) => this._makeRequest('v1/{+name}:activate', 'POST', params);
    this.projects.locations.caPools.certificateAuthorities.create = (params) => this._makeRequest('v1/{+parent}/certificateAuthorities', 'POST', params);
    this.projects.locations.caPools.certificateAuthorities.disable = (params) => this._makeRequest('v1/{+name}:disable', 'POST', params);
    this.projects.locations.caPools.certificateAuthorities.enable = (params) => this._makeRequest('v1/{+name}:enable', 'POST', params);
    this.projects.locations.caPools.certificateAuthorities.fetch = (params) => this._makeRequest('v1/{+name}:fetch', 'GET', params);
    this.projects.locations.caPools.certificateAuthorities.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.caPools.certificateAuthorities.list = (params) => this._makeRequest('v1/{+parent}/certificateAuthorities', 'GET', params);
    this.projects.locations.caPools.certificateAuthorities.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);
    this.projects.locations.caPools.certificateAuthorities.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.caPools.certificateAuthorities.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists = {};
    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists.list = (params) => this._makeRequest('v1/{+parent}/certificateRevocationLists', 'GET', params);
    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.caPools.certificateAuthorities.certificateRevocationLists.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.certificateTemplates = {};
    this.projects.locations.certificateTemplates.create = (params) => this._makeRequest('v1/{+parent}/certificateTemplates', 'POST', params);
    this.projects.locations.certificateTemplates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.certificateTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.certificateTemplates.list = (params) => this._makeRequest('v1/{+parent}/certificateTemplates', 'GET', params);
    this.projects.locations.certificateTemplates.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.certificateTemplates.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.certificateTemplates.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.certificateTemplates.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
