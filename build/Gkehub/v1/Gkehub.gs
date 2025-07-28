
/**
 * Google Apps Script client library for the GKE Hub API
 * Documentation URL: https://cloud.google.com/anthos/multicluster-management/connect/registering-a-cluster
 * @class
 */
class Gkehub {
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
    this._rootUrl = 'https://gkehub.googleapis.com/';
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

    this.projects.locations.memberships = {};
    this.projects.locations.memberships.list = (params) => this._makeRequest('v1/{+parent}/memberships', 'GET', params);
    this.projects.locations.memberships.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.memberships.create = (params) => this._makeRequest('v1/{+parent}/memberships', 'POST', params);
    this.projects.locations.memberships.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.memberships.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.memberships.generateConnectManifest = (params) => this._makeRequest('v1/{+name}:generateConnectManifest', 'GET', params);
    this.projects.locations.memberships.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.memberships.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.memberships.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.memberships.bindings = {};
    this.projects.locations.memberships.bindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.memberships.bindings.create = (params) => this._makeRequest('v1/{+parent}/bindings', 'POST', params);
    this.projects.locations.memberships.bindings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.memberships.bindings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.memberships.bindings.list = (params) => this._makeRequest('v1/{+parent}/bindings', 'GET', params);

    this.projects.locations.memberships.rbacrolebindings = {};
    this.projects.locations.memberships.rbacrolebindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.memberships.rbacrolebindings.create = (params) => this._makeRequest('v1/{+parent}/rbacrolebindings', 'POST', params);
    this.projects.locations.memberships.rbacrolebindings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.memberships.rbacrolebindings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.memberships.rbacrolebindings.list = (params) => this._makeRequest('v1/{+parent}/rbacrolebindings', 'GET', params);
    this.projects.locations.memberships.rbacrolebindings.generateMembershipRBACRoleBindingYAML = (params) => this._makeRequest('v1/{+parent}/rbacrolebindings:generateMembershipRBACRoleBindingYAML', 'POST', params);

    this.projects.locations.scopes = {};
    this.projects.locations.scopes.listMemberships = (params) => this._makeRequest('v1/{+scopeName}:listMemberships', 'GET', params);
    this.projects.locations.scopes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.scopes.create = (params) => this._makeRequest('v1/{+parent}/scopes', 'POST', params);
    this.projects.locations.scopes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.scopes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.scopes.list = (params) => this._makeRequest('v1/{+parent}/scopes', 'GET', params);
    this.projects.locations.scopes.listPermitted = (params) => this._makeRequest('v1/{+parent}/scopes:listPermitted', 'GET', params);
    this.projects.locations.scopes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.scopes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.scopes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.scopes.namespaces = {};
    this.projects.locations.scopes.namespaces.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.scopes.namespaces.create = (params) => this._makeRequest('v1/{+parent}/namespaces', 'POST', params);
    this.projects.locations.scopes.namespaces.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.scopes.namespaces.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.scopes.namespaces.list = (params) => this._makeRequest('v1/{+parent}/namespaces', 'GET', params);

    this.projects.locations.scopes.rbacrolebindings = {};
    this.projects.locations.scopes.rbacrolebindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.scopes.rbacrolebindings.create = (params) => this._makeRequest('v1/{+parent}/rbacrolebindings', 'POST', params);
    this.projects.locations.scopes.rbacrolebindings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.scopes.rbacrolebindings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.scopes.rbacrolebindings.list = (params) => this._makeRequest('v1/{+parent}/rbacrolebindings', 'GET', params);

    this.projects.locations.features = {};
    this.projects.locations.features.list = (params) => this._makeRequest('v1/{+parent}/features', 'GET', params);
    this.projects.locations.features.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.features.create = (params) => this._makeRequest('v1/{+parent}/features', 'POST', params);
    this.projects.locations.features.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.features.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.features.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.features.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.features.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.fleets = {};
    this.projects.locations.fleets.create = (params) => this._makeRequest('v1/{+parent}/fleets', 'POST', params);
    this.projects.locations.fleets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.fleets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.fleets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.fleets.list = (params) => this._makeRequest('v1/{+parent}/fleets', 'GET', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.fleets = {};
    this.organizations.locations.fleets.list = (params) => this._makeRequest('v1/{+parent}/fleets', 'GET', params);
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
