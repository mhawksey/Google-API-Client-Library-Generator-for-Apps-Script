
/**
 * Google Apps Script client library for the Access Context Manager API
 * Documentation URL: https://cloud.google.com/access-context-manager/docs/reference/rest/
 * @class
 */
class Accesscontextmanager {
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
    this._rootUrl = 'https://accesscontextmanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.accessPolicies = {};
    this.accessPolicies.list = (params) => this._makeRequest('v1/accessPolicies', 'GET', params);
    this.accessPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accessPolicies.create = (params) => this._makeRequest('v1/accessPolicies', 'POST', params);
    this.accessPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.accessPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.accessPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.accessPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.accessPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.accessPolicies.accessLevels = {};
    this.accessPolicies.accessLevels.list = (params) => this._makeRequest('v1/{+parent}/accessLevels', 'GET', params);
    this.accessPolicies.accessLevels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accessPolicies.accessLevels.create = (params) => this._makeRequest('v1/{+parent}/accessLevels', 'POST', params);
    this.accessPolicies.accessLevels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.accessPolicies.accessLevels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.accessPolicies.accessLevels.replaceAll = (params) => this._makeRequest('v1/{+parent}/accessLevels:replaceAll', 'POST', params);
    this.accessPolicies.accessLevels.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.accessPolicies.servicePerimeters = {};
    this.accessPolicies.servicePerimeters.list = (params) => this._makeRequest('v1/{+parent}/servicePerimeters', 'GET', params);
    this.accessPolicies.servicePerimeters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accessPolicies.servicePerimeters.create = (params) => this._makeRequest('v1/{+parent}/servicePerimeters', 'POST', params);
    this.accessPolicies.servicePerimeters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.accessPolicies.servicePerimeters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.accessPolicies.servicePerimeters.replaceAll = (params) => this._makeRequest('v1/{+parent}/servicePerimeters:replaceAll', 'POST', params);
    this.accessPolicies.servicePerimeters.commit = (params) => this._makeRequest('v1/{+parent}/servicePerimeters:commit', 'POST', params);
    this.accessPolicies.servicePerimeters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.accessPolicies.authorizedOrgsDescs = {};
    this.accessPolicies.authorizedOrgsDescs.list = (params) => this._makeRequest('v1/{+parent}/authorizedOrgsDescs', 'GET', params);
    this.accessPolicies.authorizedOrgsDescs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.accessPolicies.authorizedOrgsDescs.create = (params) => this._makeRequest('v1/{+parent}/authorizedOrgsDescs', 'POST', params);
    this.accessPolicies.authorizedOrgsDescs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.accessPolicies.authorizedOrgsDescs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.services = {};
    this.services.list = (params) => this._makeRequest('v1/services', 'GET', params);
    this.services.get = (params) => this._makeRequest('v1/services/{name}', 'GET', params);

    this.organizations = {};

    this.organizations.gcpUserAccessBindings = {};
    this.organizations.gcpUserAccessBindings.list = (params) => this._makeRequest('v1/{+parent}/gcpUserAccessBindings', 'GET', params);
    this.organizations.gcpUserAccessBindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.gcpUserAccessBindings.create = (params) => this._makeRequest('v1/{+parent}/gcpUserAccessBindings', 'POST', params);
    this.organizations.gcpUserAccessBindings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.gcpUserAccessBindings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
