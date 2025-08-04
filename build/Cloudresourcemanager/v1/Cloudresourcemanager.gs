
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
    this.liens.list = (params) => this._makeRequest('v1/liens', 'GET', params);
    this.liens.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.liens.create = (params) => this._makeRequest('v1/liens', 'POST', params);
    this.liens.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects = {};
    this.projects.listAvailableOrgPolicyConstraints = (params) => this._makeRequest('v1/{+resource}:listAvailableOrgPolicyConstraints', 'POST', params);
    this.projects.listOrgPolicies = (params) => this._makeRequest('v1/{+resource}:listOrgPolicies', 'POST', params);
    this.projects.getOrgPolicy = (params) => this._makeRequest('v1/{+resource}:getOrgPolicy', 'POST', params);
    this.projects.getEffectiveOrgPolicy = (params) => this._makeRequest('v1/{+resource}:getEffectiveOrgPolicy', 'POST', params);
    this.projects.setOrgPolicy = (params) => this._makeRequest('v1/{+resource}:setOrgPolicy', 'POST', params);
    this.projects.clearOrgPolicy = (params) => this._makeRequest('v1/{+resource}:clearOrgPolicy', 'POST', params);
    this.projects.get = (params) => this._makeRequest('v1/projects/{projectId}', 'GET', params);
    this.projects.list = (params) => this._makeRequest('v1/projects', 'GET', params);
    this.projects.create = (params) => this._makeRequest('v1/projects', 'POST', params);
    this.projects.update = (params) => this._makeRequest('v1/projects/{projectId}', 'PUT', params);
    this.projects.delete = (params) => this._makeRequest('v1/projects/{projectId}', 'DELETE', params);
    this.projects.undelete = (params) => this._makeRequest('v1/projects/{projectId}:undelete', 'POST', params);
    this.projects.getAncestry = (params) => this._makeRequest('v1/projects/{projectId}:getAncestry', 'POST', params);
    this.projects.getIamPolicy = (params) => this._makeRequest('v1/projects/{resource}:getIamPolicy', 'POST', params);
    this.projects.setIamPolicy = (params) => this._makeRequest('v1/projects/{resource}:setIamPolicy', 'POST', params);
    this.projects.testIamPermissions = (params) => this._makeRequest('v1/projects/{resource}:testIamPermissions', 'POST', params);

    this.folders = {};
    this.folders.listAvailableOrgPolicyConstraints = (params) => this._makeRequest('v1/{+resource}:listAvailableOrgPolicyConstraints', 'POST', params);
    this.folders.listOrgPolicies = (params) => this._makeRequest('v1/{+resource}:listOrgPolicies', 'POST', params);
    this.folders.getOrgPolicy = (params) => this._makeRequest('v1/{+resource}:getOrgPolicy', 'POST', params);
    this.folders.getEffectiveOrgPolicy = (params) => this._makeRequest('v1/{+resource}:getEffectiveOrgPolicy', 'POST', params);
    this.folders.setOrgPolicy = (params) => this._makeRequest('v1/{+resource}:setOrgPolicy', 'POST', params);
    this.folders.clearOrgPolicy = (params) => this._makeRequest('v1/{+resource}:clearOrgPolicy', 'POST', params);

    this.organizations = {};
    this.organizations.listAvailableOrgPolicyConstraints = (params) => this._makeRequest('v1/{+resource}:listAvailableOrgPolicyConstraints', 'POST', params);
    this.organizations.listOrgPolicies = (params) => this._makeRequest('v1/{+resource}:listOrgPolicies', 'POST', params);
    this.organizations.getOrgPolicy = (params) => this._makeRequest('v1/{+resource}:getOrgPolicy', 'POST', params);
    this.organizations.getEffectiveOrgPolicy = (params) => this._makeRequest('v1/{+resource}:getEffectiveOrgPolicy', 'POST', params);
    this.organizations.setOrgPolicy = (params) => this._makeRequest('v1/{+resource}:setOrgPolicy', 'POST', params);
    this.organizations.clearOrgPolicy = (params) => this._makeRequest('v1/{+resource}:clearOrgPolicy', 'POST', params);
    this.organizations.search = (params) => this._makeRequest('v1/organizations:search', 'POST', params);
    this.organizations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.organizations.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.organizations.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.operations = {};
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
