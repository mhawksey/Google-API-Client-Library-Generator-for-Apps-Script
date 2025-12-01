
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://iam.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.oauthClients = {};
    this.projects.locations.oauthClients.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/oauthClients', 'GET', apiParams, clientConfig);
    this.projects.locations.oauthClients.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.oauthClients.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/oauthClients', 'POST', apiParams, clientConfig);
    this.projects.locations.oauthClients.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.oauthClients.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.oauthClients.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.projects.locations.oauthClients.credentials = {};
    this.projects.locations.oauthClients.credentials.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/credentials', 'GET', apiParams, clientConfig);
    this.projects.locations.oauthClients.credentials.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.oauthClients.credentials.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/credentials', 'POST', apiParams, clientConfig);
    this.projects.locations.oauthClients.credentials.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.oauthClients.credentials.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools = {};
    this.projects.locations.workloadIdentityPools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workloadIdentityPools', 'GET', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workloadIdentityPools', 'POST', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.operations = {};
    this.projects.locations.workloadIdentityPools.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.namespaces = {};
    this.projects.locations.workloadIdentityPools.namespaces.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/namespaces', 'GET', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/namespaces', 'POST', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.namespaces.operations = {};
    this.projects.locations.workloadIdentityPools.namespaces.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities = {};
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/managedIdentities', 'GET', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/managedIdentities', 'POST', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.addAttestationRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:addAttestationRule', 'POST', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.removeAttestationRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:removeAttestationRule', 'POST', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.setAttestationRules = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setAttestationRules', 'POST', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.listAttestationRules = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:listAttestationRules', 'GET', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.operations = {};
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources = {};

    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources.operations = {};
    this.projects.locations.workloadIdentityPools.namespaces.managedIdentities.workloadSources.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.providers = {};
    this.projects.locations.workloadIdentityPools.providers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/providers', 'GET', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.providers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.providers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/providers', 'POST', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.providers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.providers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.providers.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.providers.operations = {};
    this.projects.locations.workloadIdentityPools.providers.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.providers.keys = {};
    this.projects.locations.workloadIdentityPools.providers.keys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys', 'GET', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.providers.keys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.providers.keys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys', 'POST', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.providers.keys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.workloadIdentityPools.providers.keys.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.projects.locations.workloadIdentityPools.providers.keys.operations = {};
    this.projects.locations.workloadIdentityPools.providers.keys.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.serviceAccounts = {};
    this.projects.serviceAccounts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/serviceAccounts', 'GET', apiParams, clientConfig);
    this.projects.serviceAccounts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.serviceAccounts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/serviceAccounts', 'POST', apiParams, clientConfig);
    this.projects.serviceAccounts.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.serviceAccounts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.serviceAccounts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.serviceAccounts.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.projects.serviceAccounts.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:enable', 'POST', apiParams, clientConfig);
    this.projects.serviceAccounts.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:disable', 'POST', apiParams, clientConfig);
    this.projects.serviceAccounts.signBlob = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:signBlob', 'POST', apiParams, clientConfig);
    this.projects.serviceAccounts.signJwt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:signJwt', 'POST', apiParams, clientConfig);
    this.projects.serviceAccounts.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.serviceAccounts.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.serviceAccounts.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.serviceAccounts.keys = {};
    this.projects.serviceAccounts.keys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/keys', 'GET', apiParams, clientConfig);
    this.projects.serviceAccounts.keys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.serviceAccounts.keys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/keys', 'POST', apiParams, clientConfig);
    this.projects.serviceAccounts.keys.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/keys:upload', 'POST', apiParams, clientConfig);
    this.projects.serviceAccounts.keys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.serviceAccounts.keys.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:disable', 'POST', apiParams, clientConfig);
    this.projects.serviceAccounts.keys.enable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:enable', 'POST', apiParams, clientConfig);

    this.projects.roles = {};
    this.projects.roles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/roles', 'GET', apiParams, clientConfig);
    this.projects.roles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.roles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/roles', 'POST', apiParams, clientConfig);
    this.projects.roles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.roles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.roles.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.locations = {};

    this.locations.workforcePools = {};
    this.locations.workforcePools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}/workforcePools', 'GET', apiParams, clientConfig);
    this.locations.workforcePools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.locations.workforcePools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}/workforcePools', 'POST', apiParams, clientConfig);
    this.locations.workforcePools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.locations.workforcePools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.locations.workforcePools.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.locations.workforcePools.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.locations.workforcePools.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.locations.workforcePools.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.locations.workforcePools.operations = {};
    this.locations.workforcePools.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.locations.workforcePools.providers = {};
    this.locations.workforcePools.providers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/providers', 'GET', apiParams, clientConfig);
    this.locations.workforcePools.providers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.locations.workforcePools.providers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/providers', 'POST', apiParams, clientConfig);
    this.locations.workforcePools.providers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.locations.workforcePools.providers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.locations.workforcePools.providers.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.locations.workforcePools.providers.operations = {};
    this.locations.workforcePools.providers.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.locations.workforcePools.providers.keys = {};
    this.locations.workforcePools.providers.keys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys', 'GET', apiParams, clientConfig);
    this.locations.workforcePools.providers.keys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.locations.workforcePools.providers.keys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/keys', 'POST', apiParams, clientConfig);
    this.locations.workforcePools.providers.keys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.locations.workforcePools.providers.keys.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.locations.workforcePools.providers.keys.operations = {};
    this.locations.workforcePools.providers.keys.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.locations.workforcePools.providers.scimTenants = {};
    this.locations.workforcePools.providers.scimTenants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/scimTenants', 'GET', apiParams, clientConfig);
    this.locations.workforcePools.providers.scimTenants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.locations.workforcePools.providers.scimTenants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/scimTenants', 'POST', apiParams, clientConfig);
    this.locations.workforcePools.providers.scimTenants.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.locations.workforcePools.providers.scimTenants.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.locations.workforcePools.providers.scimTenants.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.locations.workforcePools.providers.scimTenants.tokens = {};
    this.locations.workforcePools.providers.scimTenants.tokens.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tokens', 'GET', apiParams, clientConfig);
    this.locations.workforcePools.providers.scimTenants.tokens.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.locations.workforcePools.providers.scimTenants.tokens.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tokens', 'POST', apiParams, clientConfig);
    this.locations.workforcePools.providers.scimTenants.tokens.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.locations.workforcePools.providers.scimTenants.tokens.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.locations.workforcePools.providers.scimTenants.tokens.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.locations.workforcePools.subjects = {};
    this.locations.workforcePools.subjects.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.locations.workforcePools.subjects.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.locations.workforcePools.subjects.operations = {};
    this.locations.workforcePools.subjects.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.roles = {};
    this.roles.queryGrantableRoles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/roles:queryGrantableRoles', 'POST', apiParams, clientConfig);
    this.roles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/roles', 'GET', apiParams, clientConfig);
    this.roles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations = {};

    this.organizations.roles = {};
    this.organizations.roles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/roles', 'GET', apiParams, clientConfig);
    this.organizations.roles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.roles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/roles', 'POST', apiParams, clientConfig);
    this.organizations.roles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.roles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.roles.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.permissions = {};
    this.permissions.queryTestablePermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/permissions:queryTestablePermissions', 'POST', apiParams, clientConfig);

    this.iamPolicies = {};
    this.iamPolicies.queryAuditableServices = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/iamPolicies:queryAuditableServices', 'POST', apiParams, clientConfig);
    this.iamPolicies.lintPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/iamPolicies:lintPolicy', 'POST', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
