
/**
 * Google Apps Script client library for the Network Security API
 * Documentation URL: https://cloud.google.com/networking
 * @class
 */
class Networksecurity {
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
    this._rootUrl = 'https://networksecurity.googleapis.com/';
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

    this.projects.locations.addressGroups = {};
    this.projects.locations.addressGroups.list = (params) => this._makeRequest('v1/{+parent}/addressGroups', 'GET', params);
    this.projects.locations.addressGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.addressGroups.create = (params) => this._makeRequest('v1/{+parent}/addressGroups', 'POST', params);
    this.projects.locations.addressGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.addressGroups.addItems = (params) => this._makeRequest('v1/{+addressGroup}:addItems', 'POST', params);
    this.projects.locations.addressGroups.removeItems = (params) => this._makeRequest('v1/{+addressGroup}:removeItems', 'POST', params);
    this.projects.locations.addressGroups.cloneItems = (params) => this._makeRequest('v1/{+addressGroup}:cloneItems', 'POST', params);
    this.projects.locations.addressGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.addressGroups.listReferences = (params) => this._makeRequest('v1/{+addressGroup}:listReferences', 'GET', params);
    this.projects.locations.addressGroups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.addressGroups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.addressGroups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.firewallEndpointAssociations = {};
    this.projects.locations.firewallEndpointAssociations.list = (params) => this._makeRequest('v1/{+parent}/firewallEndpointAssociations', 'GET', params);
    this.projects.locations.firewallEndpointAssociations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.firewallEndpointAssociations.create = (params) => this._makeRequest('v1/{+parent}/firewallEndpointAssociations', 'POST', params);
    this.projects.locations.firewallEndpointAssociations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.firewallEndpointAssociations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.interceptEndpointGroups = {};
    this.projects.locations.interceptEndpointGroups.list = (params) => this._makeRequest('v1/{+parent}/interceptEndpointGroups', 'GET', params);
    this.projects.locations.interceptEndpointGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.interceptEndpointGroups.create = (params) => this._makeRequest('v1/{+parent}/interceptEndpointGroups', 'POST', params);
    this.projects.locations.interceptEndpointGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.interceptEndpointGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.interceptEndpointGroupAssociations = {};
    this.projects.locations.interceptEndpointGroupAssociations.list = (params) => this._makeRequest('v1/{+parent}/interceptEndpointGroupAssociations', 'GET', params);
    this.projects.locations.interceptEndpointGroupAssociations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.interceptEndpointGroupAssociations.create = (params) => this._makeRequest('v1/{+parent}/interceptEndpointGroupAssociations', 'POST', params);
    this.projects.locations.interceptEndpointGroupAssociations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.interceptEndpointGroupAssociations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.interceptDeploymentGroups = {};
    this.projects.locations.interceptDeploymentGroups.list = (params) => this._makeRequest('v1/{+parent}/interceptDeploymentGroups', 'GET', params);
    this.projects.locations.interceptDeploymentGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.interceptDeploymentGroups.create = (params) => this._makeRequest('v1/{+parent}/interceptDeploymentGroups', 'POST', params);
    this.projects.locations.interceptDeploymentGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.interceptDeploymentGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.interceptDeployments = {};
    this.projects.locations.interceptDeployments.list = (params) => this._makeRequest('v1/{+parent}/interceptDeployments', 'GET', params);
    this.projects.locations.interceptDeployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.interceptDeployments.create = (params) => this._makeRequest('v1/{+parent}/interceptDeployments', 'POST', params);
    this.projects.locations.interceptDeployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.interceptDeployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.mirroringEndpointGroups = {};
    this.projects.locations.mirroringEndpointGroups.list = (params) => this._makeRequest('v1/{+parent}/mirroringEndpointGroups', 'GET', params);
    this.projects.locations.mirroringEndpointGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.mirroringEndpointGroups.create = (params) => this._makeRequest('v1/{+parent}/mirroringEndpointGroups', 'POST', params);
    this.projects.locations.mirroringEndpointGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.mirroringEndpointGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.mirroringEndpointGroupAssociations = {};
    this.projects.locations.mirroringEndpointGroupAssociations.list = (params) => this._makeRequest('v1/{+parent}/mirroringEndpointGroupAssociations', 'GET', params);
    this.projects.locations.mirroringEndpointGroupAssociations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.mirroringEndpointGroupAssociations.create = (params) => this._makeRequest('v1/{+parent}/mirroringEndpointGroupAssociations', 'POST', params);
    this.projects.locations.mirroringEndpointGroupAssociations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.mirroringEndpointGroupAssociations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.mirroringDeploymentGroups = {};
    this.projects.locations.mirroringDeploymentGroups.list = (params) => this._makeRequest('v1/{+parent}/mirroringDeploymentGroups', 'GET', params);
    this.projects.locations.mirroringDeploymentGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.mirroringDeploymentGroups.create = (params) => this._makeRequest('v1/{+parent}/mirroringDeploymentGroups', 'POST', params);
    this.projects.locations.mirroringDeploymentGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.mirroringDeploymentGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.mirroringDeployments = {};
    this.projects.locations.mirroringDeployments.list = (params) => this._makeRequest('v1/{+parent}/mirroringDeployments', 'GET', params);
    this.projects.locations.mirroringDeployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.mirroringDeployments.create = (params) => this._makeRequest('v1/{+parent}/mirroringDeployments', 'POST', params);
    this.projects.locations.mirroringDeployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.mirroringDeployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authorizationPolicies = {};
    this.projects.locations.authorizationPolicies.list = (params) => this._makeRequest('v1/{+parent}/authorizationPolicies', 'GET', params);
    this.projects.locations.authorizationPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.authorizationPolicies.create = (params) => this._makeRequest('v1/{+parent}/authorizationPolicies', 'POST', params);
    this.projects.locations.authorizationPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.authorizationPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.authorizationPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.authorizationPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.authorizationPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.backendAuthenticationConfigs = {};
    this.projects.locations.backendAuthenticationConfigs.list = (params) => this._makeRequest('v1/{+parent}/backendAuthenticationConfigs', 'GET', params);
    this.projects.locations.backendAuthenticationConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.backendAuthenticationConfigs.create = (params) => this._makeRequest('v1/{+parent}/backendAuthenticationConfigs', 'POST', params);
    this.projects.locations.backendAuthenticationConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.backendAuthenticationConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.serverTlsPolicies = {};
    this.projects.locations.serverTlsPolicies.list = (params) => this._makeRequest('v1/{+parent}/serverTlsPolicies', 'GET', params);
    this.projects.locations.serverTlsPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.serverTlsPolicies.create = (params) => this._makeRequest('v1/{+parent}/serverTlsPolicies', 'POST', params);
    this.projects.locations.serverTlsPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.serverTlsPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.serverTlsPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.serverTlsPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.serverTlsPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.clientTlsPolicies = {};
    this.projects.locations.clientTlsPolicies.list = (params) => this._makeRequest('v1/{+parent}/clientTlsPolicies', 'GET', params);
    this.projects.locations.clientTlsPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.clientTlsPolicies.create = (params) => this._makeRequest('v1/{+parent}/clientTlsPolicies', 'POST', params);
    this.projects.locations.clientTlsPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.clientTlsPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.clientTlsPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.clientTlsPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.clientTlsPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.gatewaySecurityPolicies = {};
    this.projects.locations.gatewaySecurityPolicies.list = (params) => this._makeRequest('v1/{+parent}/gatewaySecurityPolicies', 'GET', params);
    this.projects.locations.gatewaySecurityPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.gatewaySecurityPolicies.create = (params) => this._makeRequest('v1/{+parent}/gatewaySecurityPolicies', 'POST', params);
    this.projects.locations.gatewaySecurityPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.gatewaySecurityPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.gatewaySecurityPolicies.rules = {};
    this.projects.locations.gatewaySecurityPolicies.rules.list = (params) => this._makeRequest('v1/{+parent}/rules', 'GET', params);
    this.projects.locations.gatewaySecurityPolicies.rules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.gatewaySecurityPolicies.rules.create = (params) => this._makeRequest('v1/{+parent}/rules', 'POST', params);
    this.projects.locations.gatewaySecurityPolicies.rules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.gatewaySecurityPolicies.rules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.urlLists = {};
    this.projects.locations.urlLists.list = (params) => this._makeRequest('v1/{+parent}/urlLists', 'GET', params);
    this.projects.locations.urlLists.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.urlLists.create = (params) => this._makeRequest('v1/{+parent}/urlLists', 'POST', params);
    this.projects.locations.urlLists.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.urlLists.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.tlsInspectionPolicies = {};
    this.projects.locations.tlsInspectionPolicies.list = (params) => this._makeRequest('v1/{+parent}/tlsInspectionPolicies', 'GET', params);
    this.projects.locations.tlsInspectionPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.tlsInspectionPolicies.create = (params) => this._makeRequest('v1/{+parent}/tlsInspectionPolicies', 'POST', params);
    this.projects.locations.tlsInspectionPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.tlsInspectionPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authzPolicies = {};
    this.projects.locations.authzPolicies.list = (params) => this._makeRequest('v1/{+parent}/authzPolicies', 'GET', params);
    this.projects.locations.authzPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.authzPolicies.create = (params) => this._makeRequest('v1/{+parent}/authzPolicies', 'POST', params);
    this.projects.locations.authzPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.authzPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.authzPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.authzPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.authzPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.operations = {};
    this.organizations.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.organizations.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.organizations.locations.addressGroups = {};
    this.organizations.locations.addressGroups.list = (params) => this._makeRequest('v1/{+parent}/addressGroups', 'GET', params);
    this.organizations.locations.addressGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.addressGroups.create = (params) => this._makeRequest('v1/{+parent}/addressGroups', 'POST', params);
    this.organizations.locations.addressGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.locations.addressGroups.addItems = (params) => this._makeRequest('v1/{+addressGroup}:addItems', 'POST', params);
    this.organizations.locations.addressGroups.removeItems = (params) => this._makeRequest('v1/{+addressGroup}:removeItems', 'POST', params);
    this.organizations.locations.addressGroups.cloneItems = (params) => this._makeRequest('v1/{+addressGroup}:cloneItems', 'POST', params);
    this.organizations.locations.addressGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.locations.addressGroups.listReferences = (params) => this._makeRequest('v1/{+addressGroup}:listReferences', 'GET', params);

    this.organizations.locations.firewallEndpoints = {};
    this.organizations.locations.firewallEndpoints.list = (params) => this._makeRequest('v1/{+parent}/firewallEndpoints', 'GET', params);
    this.organizations.locations.firewallEndpoints.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.firewallEndpoints.create = (params) => this._makeRequest('v1/{+parent}/firewallEndpoints', 'POST', params);
    this.organizations.locations.firewallEndpoints.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.locations.firewallEndpoints.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.locations.securityProfileGroups = {};
    this.organizations.locations.securityProfileGroups.list = (params) => this._makeRequest('v1/{+parent}/securityProfileGroups', 'GET', params);
    this.organizations.locations.securityProfileGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.securityProfileGroups.create = (params) => this._makeRequest('v1/{+parent}/securityProfileGroups', 'POST', params);
    this.organizations.locations.securityProfileGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.locations.securityProfileGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.locations.securityProfiles = {};
    this.organizations.locations.securityProfiles.list = (params) => this._makeRequest('v1/{+parent}/securityProfiles', 'GET', params);
    this.organizations.locations.securityProfiles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.securityProfiles.create = (params) => this._makeRequest('v1/{+parent}/securityProfiles', 'POST', params);
    this.organizations.locations.securityProfiles.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.locations.securityProfiles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
