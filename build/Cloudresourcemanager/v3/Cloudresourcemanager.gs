
/**
 * Google Apps Script client library for the Cloud Resource Manager API
 * Documentation URL: https://cloud.google.com/resource-manager
 * @class
 */
class Cloudresourcemanager {
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
    this._rootUrl = 'https://cloudresourcemanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.liens = {};
    this.liens.list = (params) => this._makeRequest('v3/liens', 'GET', params);
    this.liens.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.liens.create = (params) => this._makeRequest('v3/liens', 'POST', params);
    this.liens.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.operations = {};
    this.operations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.folders = {};
    this.folders.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.folders.list = (params) => this._makeRequest('v3/folders', 'GET', params);
    this.folders.search = (params) => this._makeRequest('v3/folders:search', 'GET', params);
    this.folders.create = (params) => this._makeRequest('v3/folders', 'POST', params);
    this.folders.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.folders.move = (params) => this._makeRequest('v3/{+name}:move', 'POST', params);
    this.folders.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.folders.undelete = (params) => this._makeRequest('v3/{+name}:undelete', 'POST', params);
    this.folders.getIamPolicy = (params) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', params);
    this.folders.setIamPolicy = (params) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', params);
    this.folders.testIamPermissions = (params) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', params);

    this.folders.capabilities = {};
    this.folders.capabilities.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.folders.capabilities.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    this.organizations = {};
    this.organizations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.organizations.search = (params) => this._makeRequest('v3/organizations:search', 'GET', params);
    this.organizations.getIamPolicy = (params) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', params);
    this.organizations.setIamPolicy = (params) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', params);
    this.organizations.testIamPermissions = (params) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', params);

    this.projects = {};
    this.projects.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.list = (params) => this._makeRequest('v3/projects', 'GET', params);
    this.projects.search = (params) => this._makeRequest('v3/projects:search', 'GET', params);
    this.projects.create = (params) => this._makeRequest('v3/projects', 'POST', params);
    this.projects.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.move = (params) => this._makeRequest('v3/{+name}:move', 'POST', params);
    this.projects.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.undelete = (params) => this._makeRequest('v3/{+name}:undelete', 'POST', params);
    this.projects.getIamPolicy = (params) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', params);
    this.projects.setIamPolicy = (params) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', params);
    this.projects.testIamPermissions = (params) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', params);

    this.locations = {};

    this.locations.tagBindingCollections = {};
    this.locations.tagBindingCollections.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.locations.tagBindingCollections.update = (params) => this._makeRequest('v3/{+name}', 'PUT', params);

    this.locations.effectiveTagBindingCollections = {};
    this.locations.effectiveTagBindingCollections.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.tagBindings = {};
    this.tagBindings.list = (params) => this._makeRequest('v3/tagBindings', 'GET', params);
    this.tagBindings.create = (params) => this._makeRequest('v3/tagBindings', 'POST', params);
    this.tagBindings.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.effectiveTags = {};
    this.effectiveTags.list = (params) => this._makeRequest('v3/effectiveTags', 'GET', params);

    this.tagKeys = {};
    this.tagKeys.list = (params) => this._makeRequest('v3/tagKeys', 'GET', params);
    this.tagKeys.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.tagKeys.getNamespaced = (params) => this._makeRequest('v3/tagKeys/namespaced', 'GET', params);
    this.tagKeys.create = (params) => this._makeRequest('v3/tagKeys', 'POST', params);
    this.tagKeys.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.tagKeys.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.tagKeys.getIamPolicy = (params) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', params);
    this.tagKeys.setIamPolicy = (params) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', params);
    this.tagKeys.testIamPermissions = (params) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', params);

    this.tagValues = {};
    this.tagValues.list = (params) => this._makeRequest('v3/tagValues', 'GET', params);
    this.tagValues.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.tagValues.getNamespaced = (params) => this._makeRequest('v3/tagValues/namespaced', 'GET', params);
    this.tagValues.create = (params) => this._makeRequest('v3/tagValues', 'POST', params);
    this.tagValues.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.tagValues.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.tagValues.getIamPolicy = (params) => this._makeRequest('v3/{+resource}:getIamPolicy', 'POST', params);
    this.tagValues.setIamPolicy = (params) => this._makeRequest('v3/{+resource}:setIamPolicy', 'POST', params);
    this.tagValues.testIamPermissions = (params) => this._makeRequest('v3/{+resource}:testIamPermissions', 'POST', params);

    this.tagValues.tagHolds = {};
    this.tagValues.tagHolds.create = (params) => this._makeRequest('v3/{+parent}/tagHolds', 'POST', params);
    this.tagValues.tagHolds.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.tagValues.tagHolds.list = (params) => this._makeRequest('v3/{+parent}/tagHolds', 'GET', params);
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
