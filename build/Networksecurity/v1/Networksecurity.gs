
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://networksecurity.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.firewallEndpointAssociations = {};
    this.projects.locations.firewallEndpointAssociations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.firewallEndpointAssociations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/firewallEndpointAssociations', 'POST', apiParams, clientConfig);
    this.projects.locations.firewallEndpointAssociations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.firewallEndpointAssociations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.firewallEndpointAssociations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/firewallEndpointAssociations', 'GET', apiParams, clientConfig);

    this.projects.locations.mirroringEndpointGroups = {};
    this.projects.locations.mirroringEndpointGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.mirroringEndpointGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.mirroringEndpointGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/mirroringEndpointGroups', 'GET', apiParams, clientConfig);
    this.projects.locations.mirroringEndpointGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/mirroringEndpointGroups', 'POST', apiParams, clientConfig);
    this.projects.locations.mirroringEndpointGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.mirroringDeployments = {};
    this.projects.locations.mirroringDeployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.mirroringDeployments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.mirroringDeployments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.mirroringDeployments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/mirroringDeployments', 'POST', apiParams, clientConfig);
    this.projects.locations.mirroringDeployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/mirroringDeployments', 'GET', apiParams, clientConfig);

    this.projects.locations.addressGroups = {};
    this.projects.locations.addressGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.addressGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/addressGroups', 'GET', apiParams, clientConfig);
    this.projects.locations.addressGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/addressGroups', 'POST', apiParams, clientConfig);
    this.projects.locations.addressGroups.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.addressGroups.cloneItems = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+addressGroup}:cloneItems', 'POST', apiParams, clientConfig);
    this.projects.locations.addressGroups.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.addressGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.addressGroups.addItems = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+addressGroup}:addItems', 'POST', apiParams, clientConfig);
    this.projects.locations.addressGroups.removeItems = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+addressGroup}:removeItems', 'POST', apiParams, clientConfig);
    this.projects.locations.addressGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.addressGroups.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.addressGroups.listReferences = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+addressGroup}:listReferences', 'GET', apiParams, clientConfig);

    this.projects.locations.backendAuthenticationConfigs = {};
    this.projects.locations.backendAuthenticationConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/backendAuthenticationConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.backendAuthenticationConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.backendAuthenticationConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.backendAuthenticationConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/backendAuthenticationConfigs', 'GET', apiParams, clientConfig);
    this.projects.locations.backendAuthenticationConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.interceptEndpointGroupAssociations = {};
    this.projects.locations.interceptEndpointGroupAssociations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/interceptEndpointGroupAssociations', 'POST', apiParams, clientConfig);
    this.projects.locations.interceptEndpointGroupAssociations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.interceptEndpointGroupAssociations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.interceptEndpointGroupAssociations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.interceptEndpointGroupAssociations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/interceptEndpointGroupAssociations', 'GET', apiParams, clientConfig);

    this.projects.locations.clientTlsPolicies = {};
    this.projects.locations.clientTlsPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clientTlsPolicies', 'POST', apiParams, clientConfig);
    this.projects.locations.clientTlsPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.clientTlsPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/clientTlsPolicies', 'GET', apiParams, clientConfig);
    this.projects.locations.clientTlsPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.clientTlsPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.clientTlsPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.clientTlsPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.clientTlsPolicies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    this.projects.locations.tlsInspectionPolicies = {};
    this.projects.locations.tlsInspectionPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.tlsInspectionPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.tlsInspectionPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tlsInspectionPolicies', 'POST', apiParams, clientConfig);
    this.projects.locations.tlsInspectionPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/tlsInspectionPolicies', 'GET', apiParams, clientConfig);
    this.projects.locations.tlsInspectionPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.gatewaySecurityPolicies = {};
    this.projects.locations.gatewaySecurityPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.gatewaySecurityPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/gatewaySecurityPolicies', 'GET', apiParams, clientConfig);
    this.projects.locations.gatewaySecurityPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.gatewaySecurityPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.gatewaySecurityPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/gatewaySecurityPolicies', 'POST', apiParams, clientConfig);

    this.projects.locations.gatewaySecurityPolicies.rules = {};
    this.projects.locations.gatewaySecurityPolicies.rules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.gatewaySecurityPolicies.rules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.gatewaySecurityPolicies.rules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/rules', 'POST', apiParams, clientConfig);
    this.projects.locations.gatewaySecurityPolicies.rules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.gatewaySecurityPolicies.rules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/rules', 'GET', apiParams, clientConfig);

    this.projects.locations.serverTlsPolicies = {};
    this.projects.locations.serverTlsPolicies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.serverTlsPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/serverTlsPolicies', 'POST', apiParams, clientConfig);
    this.projects.locations.serverTlsPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.serverTlsPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.serverTlsPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.serverTlsPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.serverTlsPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/serverTlsPolicies', 'GET', apiParams, clientConfig);
    this.projects.locations.serverTlsPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.interceptDeploymentGroups = {};
    this.projects.locations.interceptDeploymentGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.interceptDeploymentGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.interceptDeploymentGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/interceptDeploymentGroups', 'GET', apiParams, clientConfig);
    this.projects.locations.interceptDeploymentGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.interceptDeploymentGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/interceptDeploymentGroups', 'POST', apiParams, clientConfig);

    this.projects.locations.authorizationPolicies = {};
    this.projects.locations.authorizationPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.authorizationPolicies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizationPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizationPolicies', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizationPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizationPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.authorizationPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.authorizationPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.authorizationPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authorizationPolicies', 'GET', apiParams, clientConfig);

    this.projects.locations.mirroringDeploymentGroups = {};
    this.projects.locations.mirroringDeploymentGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.mirroringDeploymentGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/mirroringDeploymentGroups', 'GET', apiParams, clientConfig);
    this.projects.locations.mirroringDeploymentGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.mirroringDeploymentGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.mirroringDeploymentGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/mirroringDeploymentGroups', 'POST', apiParams, clientConfig);

    this.projects.locations.urlLists = {};
    this.projects.locations.urlLists.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.urlLists.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.urlLists.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.urlLists.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/urlLists', 'POST', apiParams, clientConfig);
    this.projects.locations.urlLists.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/urlLists', 'GET', apiParams, clientConfig);

    this.projects.locations.interceptDeployments = {};
    this.projects.locations.interceptDeployments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/interceptDeployments', 'POST', apiParams, clientConfig);
    this.projects.locations.interceptDeployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.interceptDeployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/interceptDeployments', 'GET', apiParams, clientConfig);
    this.projects.locations.interceptDeployments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.interceptDeployments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.mirroringEndpointGroupAssociations = {};
    this.projects.locations.mirroringEndpointGroupAssociations.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.mirroringEndpointGroupAssociations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/mirroringEndpointGroupAssociations', 'POST', apiParams, clientConfig);
    this.projects.locations.mirroringEndpointGroupAssociations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.mirroringEndpointGroupAssociations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/mirroringEndpointGroupAssociations', 'GET', apiParams, clientConfig);
    this.projects.locations.mirroringEndpointGroupAssociations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);

    this.projects.locations.authzPolicies = {};
    this.projects.locations.authzPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.authzPolicies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.locations.authzPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.authzPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.locations.authzPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.authzPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authzPolicies', 'POST', apiParams, clientConfig);
    this.projects.locations.authzPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', apiParams, clientConfig);
    this.projects.locations.authzPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/authzPolicies', 'GET', apiParams, clientConfig);

    this.projects.locations.interceptEndpointGroups = {};
    this.projects.locations.interceptEndpointGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.interceptEndpointGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.interceptEndpointGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/interceptEndpointGroups', 'GET', apiParams, clientConfig);
    this.projects.locations.interceptEndpointGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.interceptEndpointGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/interceptEndpointGroups', 'POST', apiParams, clientConfig);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.firewallEndpoints = {};
    this.organizations.locations.firewallEndpoints.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.firewallEndpoints.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.firewallEndpoints.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/firewallEndpoints', 'GET', apiParams, clientConfig);
    this.organizations.locations.firewallEndpoints.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/firewallEndpoints', 'POST', apiParams, clientConfig);
    this.organizations.locations.firewallEndpoints.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.organizations.locations.addressGroups = {};
    this.organizations.locations.addressGroups.removeItems = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+addressGroup}:removeItems', 'POST', apiParams, clientConfig);
    this.organizations.locations.addressGroups.listReferences = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+addressGroup}:listReferences', 'GET', apiParams, clientConfig);
    this.organizations.locations.addressGroups.cloneItems = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+addressGroup}:cloneItems', 'POST', apiParams, clientConfig);
    this.organizations.locations.addressGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.addressGroups.addItems = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+addressGroup}:addItems', 'POST', apiParams, clientConfig);
    this.organizations.locations.addressGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/addressGroups', 'GET', apiParams, clientConfig);
    this.organizations.locations.addressGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.addressGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.addressGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/addressGroups', 'POST', apiParams, clientConfig);

    this.organizations.locations.operations = {};
    this.organizations.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.organizations.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.organizations.locations.securityProfileGroups = {};
    this.organizations.locations.securityProfileGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.securityProfileGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityProfileGroups', 'POST', apiParams, clientConfig);
    this.organizations.locations.securityProfileGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityProfileGroups', 'GET', apiParams, clientConfig);
    this.organizations.locations.securityProfileGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.organizations.locations.securityProfileGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.organizations.locations.securityProfiles = {};
    this.organizations.locations.securityProfiles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityProfiles', 'POST', apiParams, clientConfig);
    this.organizations.locations.securityProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.organizations.locations.securityProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.organizations.locations.securityProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/securityProfiles', 'GET', apiParams, clientConfig);
    this.organizations.locations.securityProfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
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
