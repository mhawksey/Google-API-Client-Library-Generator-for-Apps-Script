
/**
 * Google Apps Script client library for the Identity and Access Management (IAM) API
 * Documentation URL: https://cloud.google.com/iam/
 * @class
 */
class Iam {
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
    this._rootUrl = 'https://iam.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.oauthClients = {};
    this.projects.locations.oauthClients.list = (params) => this._makeRequest('v1/{+parent}/oauthClients', 'GET', params);
    this.projects.locations.oauthClients.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.oauthClients.create = (params) => this._makeRequest('v1/{+parent}/oauthClients', 'POST', params);
    this.projects.locations.oauthClients.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.oauthClients.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.oauthClients.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.projects.locations.oauthClients.credentials = {};
    this.projects.locations.oauthClients.credentials.list = (params) => this._makeRequest('v1/{+parent}/credentials', 'GET', params);
    this.projects.locations.oauthClients.credentials.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.oauthClients.credentials.create = (params) => this._makeRequest('v1/{+parent}/credentials', 'POST', params);
    this.projects.locations.oauthClients.credentials.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.oauthClients.credentials.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.workloadIdentityPools = {};
    this.projects.locations.workloadIdentityPools.list = (params) => this._makeRequest('v1/{+parent}/workloadIdentityPools', 'GET', params);
    this.projects.locations.workloadIdentityPools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.workloadIdentityPools.create = (params) => this._makeRequest('v1/{+parent}/workloadIdentityPools', 'POST', params);
    this.projects.locations.workloadIdentityPools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.workloadIdentityPools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.workloadIdentityPools.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);
    this.projects.locations.workloadIdentityPools.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.workloadIdentityPools.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.locations.workloadIdentityPools.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.workloadIdentityPools.operations = {};
    this.projects.locations.workloadIdentityPools.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.workloadIdentityPools.namespaces = {};
    this.projects.locations.workloadIdentityPools.namespaces.list = (params) => this._makeRequest('v1/{+parent}/namespaces', 'GET', params);
    this.projects.locations.workloadIdentityPools.namespaces.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.workloadIdentityPools.namespaces.create = (params) => this._makeRequest('v1/{+parent}/namespaces', 'POST', params);
    this.projects.locations.workloadIdentityPools.namespaces.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.workloadIdentityPools.namespaces.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.workloadIdentityPools.namespaces.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.projects.locations.workloadIdentityPools.namespaces.operations = {};
    this.projects.locations.workloadIdentityPools.namespaces.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities = {};
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.list = (params) => this._makeRequest('v1/{+parent}/managedIdentities', 'GET', params);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.create = (params) => this._makeRequest('v1/{+parent}/managedIdentities', 'POST', params);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.addAttestationRule = (params) => this._makeRequest('v1/{+resource}:addAttestationRule', 'POST', params);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.removeAttestationRule = (params) => this._makeRequest('v1/{+resource}:removeAttestationRule', 'POST', params);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.setAttestationRules = (params) => this._makeRequest('v1/{+resource}:setAttestationRules', 'POST', params);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.listAttestationRules = (params) => this._makeRequest('v1/{+resource}:listAttestationRules', 'GET', params);

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.operations = {};
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources = {};

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources.operations = {};
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.workloadIdentityPools.providers = {};
    this.projects.locations.workloadIdentityPools.providers.list = (params) => this._makeRequest('v1/{+parent}/providers', 'GET', params);
    this.projects.locations.workloadIdentityPools.providers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.workloadIdentityPools.providers.create = (params) => this._makeRequest('v1/{+parent}/providers', 'POST', params);
    this.projects.locations.workloadIdentityPools.providers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.workloadIdentityPools.providers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.workloadIdentityPools.providers.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.projects.locations.workloadIdentityPools.providers.operations = {};
    this.projects.locations.workloadIdentityPools.providers.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.workloadIdentityPools.providers.keys = {};
    this.projects.locations.workloadIdentityPools.providers.keys.list = (params) => this._makeRequest('v1/{+parent}/keys', 'GET', params);
    this.projects.locations.workloadIdentityPools.providers.keys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.workloadIdentityPools.providers.keys.create = (params) => this._makeRequest('v1/{+parent}/keys', 'POST', params);
    this.projects.locations.workloadIdentityPools.providers.keys.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.workloadIdentityPools.providers.keys.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.projects.locations.workloadIdentityPools.providers.keys.operations = {};
    this.projects.locations.workloadIdentityPools.providers.keys.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.serviceAccounts = {};
    this.projects.serviceAccounts.list = (params) => this._makeRequest('v1/{+name}/serviceAccounts', 'GET', params);
    this.projects.serviceAccounts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.serviceAccounts.create = (params) => this._makeRequest('v1/{+name}/serviceAccounts', 'POST', params);
    this.projects.serviceAccounts.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.serviceAccounts.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.serviceAccounts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.serviceAccounts.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);
    this.projects.serviceAccounts.enable = (params) => this._makeRequest('v1/{+name}:enable', 'POST', params);
    this.projects.serviceAccounts.disable = (params) => this._makeRequest('v1/{+name}:disable', 'POST', params);
    this.projects.serviceAccounts.signBlob = (params) => this._makeRequest('v1/{+name}:signBlob', 'POST', params);
    this.projects.serviceAccounts.signJwt = (params) => this._makeRequest('v1/{+name}:signJwt', 'POST', params);
    this.projects.serviceAccounts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.serviceAccounts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.serviceAccounts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.serviceAccounts.keys = {};
    this.projects.serviceAccounts.keys.list = (params) => this._makeRequest('v1/{+name}/keys', 'GET', params);
    this.projects.serviceAccounts.keys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.serviceAccounts.keys.create = (params) => this._makeRequest('v1/{+name}/keys', 'POST', params);
    this.projects.serviceAccounts.keys.upload = (params) => this._makeRequest('v1/{+name}/keys:upload', 'POST', params);
    this.projects.serviceAccounts.keys.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.serviceAccounts.keys.disable = (params) => this._makeRequest('v1/{+name}:disable', 'POST', params);
    this.projects.serviceAccounts.keys.enable = (params) => this._makeRequest('v1/{+name}:enable', 'POST', params);

    this.projects.roles = {};
    this.projects.roles.list = (params) => this._makeRequest('v1/{+parent}/roles', 'GET', params);
    this.projects.roles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.roles.create = (params) => this._makeRequest('v1/{+parent}/roles', 'POST', params);
    this.projects.roles.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.roles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.roles.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.locations = {};

    this.locations.workforcePools = {};
    this.locations.workforcePools.list = (params) => this._makeRequest('v1/{+location}/workforcePools', 'GET', params);
    this.locations.workforcePools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.locations.workforcePools.create = (params) => this._makeRequest('v1/{+location}/workforcePools', 'POST', params);
    this.locations.workforcePools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.locations.workforcePools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.locations.workforcePools.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);
    this.locations.workforcePools.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.locations.workforcePools.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.locations.workforcePools.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.locations.workforcePools.operations = {};
    this.locations.workforcePools.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.locations.workforcePools.providers = {};
    this.locations.workforcePools.providers.list = (params) => this._makeRequest('v1/{+parent}/providers', 'GET', params);
    this.locations.workforcePools.providers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.locations.workforcePools.providers.create = (params) => this._makeRequest('v1/{+parent}/providers', 'POST', params);
    this.locations.workforcePools.providers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.locations.workforcePools.providers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.locations.workforcePools.providers.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.locations.workforcePools.providers.operations = {};
    this.locations.workforcePools.providers.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.locations.workforcePools.providers.keys = {};
    this.locations.workforcePools.providers.keys.list = (params) => this._makeRequest('v1/{+parent}/keys', 'GET', params);
    this.locations.workforcePools.providers.keys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.locations.workforcePools.providers.keys.create = (params) => this._makeRequest('v1/{+parent}/keys', 'POST', params);
    this.locations.workforcePools.providers.keys.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.locations.workforcePools.providers.keys.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.locations.workforcePools.providers.keys.operations = {};
    this.locations.workforcePools.providers.keys.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.locations.workforcePools.providers.scimTenants = {};
    this.locations.workforcePools.providers.scimTenants.list = (params) => this._makeRequest('v1/{+parent}/scimTenants', 'GET', params);
    this.locations.workforcePools.providers.scimTenants.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.locations.workforcePools.providers.scimTenants.create = (params) => this._makeRequest('v1/{+parent}/scimTenants', 'POST', params);
    this.locations.workforcePools.providers.scimTenants.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.locations.workforcePools.providers.scimTenants.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.locations.workforcePools.providers.scimTenants.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.locations.workforcePools.providers.scimTenants.tokens = {};
    this.locations.workforcePools.providers.scimTenants.tokens.list = (params) => this._makeRequest('v1/{+parent}/tokens', 'GET', params);
    this.locations.workforcePools.providers.scimTenants.tokens.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.locations.workforcePools.providers.scimTenants.tokens.create = (params) => this._makeRequest('v1/{+parent}/tokens', 'POST', params);
    this.locations.workforcePools.providers.scimTenants.tokens.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.locations.workforcePools.providers.scimTenants.tokens.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.locations.workforcePools.providers.scimTenants.tokens.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.locations.workforcePools.subjects = {};
    this.locations.workforcePools.subjects.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.locations.workforcePools.subjects.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.locations.workforcePools.subjects.operations = {};
    this.locations.workforcePools.subjects.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.roles = {};
    this.roles.queryGrantableRoles = (params) => this._makeRequest('v1/roles:queryGrantableRoles', 'POST', params);
    this.roles.list = (params) => this._makeRequest('v1/roles', 'GET', params);
    this.roles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations = {};

    this.organizations.roles = {};
    this.organizations.roles.list = (params) => this._makeRequest('v1/{+parent}/roles', 'GET', params);
    this.organizations.roles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.roles.create = (params) => this._makeRequest('v1/{+parent}/roles', 'POST', params);
    this.organizations.roles.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.roles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.roles.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);

    this.permissions = {};
    this.permissions.queryTestablePermissions = (params) => this._makeRequest('v1/permissions:queryTestablePermissions', 'POST', params);

    this.iamPolicies = {};
    this.iamPolicies.queryAuditableServices = (params) => this._makeRequest('v1/iamPolicies:queryAuditableServices', 'POST', params);
    this.iamPolicies.lintPolicy = (params) => this._makeRequest('v1/iamPolicies:lintPolicy', 'POST', params);
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
