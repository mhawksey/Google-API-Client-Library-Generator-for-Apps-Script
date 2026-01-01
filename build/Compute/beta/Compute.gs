
/**
 * Google Apps Script client library for the Compute Engine API
 * Documentation URL: https://cloud.google.com/compute/
 * @class
 */
class Compute {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://compute.googleapis.com/';
    this._servicePath = 'compute/beta/';


    this.regionAutoscalers = {};
    this.regionAutoscalers.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/autoscalers/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionAutoscalers.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/autoscalers', 'POST', apiParams, clientConfig);
    this.regionAutoscalers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/autoscalers/{autoscaler}', 'GET', apiParams, clientConfig);
    this.regionAutoscalers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/autoscalers', 'GET', apiParams, clientConfig);
    this.regionAutoscalers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/autoscalers', 'PUT', apiParams, clientConfig);
    this.regionAutoscalers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/autoscalers/{autoscaler}', 'DELETE', apiParams, clientConfig);
    this.regionAutoscalers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/autoscalers', 'PATCH', apiParams, clientConfig);

    this.instanceTemplates = {};
    this.instanceTemplates.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/instanceTemplates', 'GET', apiParams, clientConfig);
    this.instanceTemplates.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/instanceTemplates/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.instanceTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/instanceTemplates/{instanceTemplate}', 'DELETE', apiParams, clientConfig);
    this.instanceTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/instanceTemplates/{instanceTemplate}', 'GET', apiParams, clientConfig);
    this.instanceTemplates.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/instanceTemplates/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.instanceTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/instanceTemplates', 'GET', apiParams, clientConfig);
    this.instanceTemplates.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/instanceTemplates/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.instanceTemplates.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/instanceTemplates', 'POST', apiParams, clientConfig);

    this.zoneVmExtensionPolicies = {};
    this.zoneVmExtensionPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/vmExtensionPolicies/{vmExtensionPolicy}', 'GET', apiParams, clientConfig);
    this.zoneVmExtensionPolicies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/vmExtensionPolicies/{vmExtensionPolicy}', 'PATCH', apiParams, clientConfig);
    this.zoneVmExtensionPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/vmExtensionPolicies/{vmExtensionPolicy}', 'DELETE', apiParams, clientConfig);
    this.zoneVmExtensionPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/vmExtensionPolicies', 'POST', apiParams, clientConfig);
    this.zoneVmExtensionPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/vmExtensionPolicies', 'GET', apiParams, clientConfig);

    this.globalOperations = {};
    this.globalOperations.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/operations', 'GET', apiParams, clientConfig);
    this.globalOperations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/operations/{operation}', 'GET', apiParams, clientConfig);
    this.globalOperations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/operations/{operation}/wait', 'POST', apiParams, clientConfig);
    this.globalOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/operations', 'GET', apiParams, clientConfig);
    this.globalOperations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/operations/{operation}', 'DELETE', apiParams, clientConfig);

    this.globalPublicDelegatedPrefixes = {};
    this.globalPublicDelegatedPrefixes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/publicDelegatedPrefixes', 'GET', apiParams, clientConfig);
    this.globalPublicDelegatedPrefixes.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/publicDelegatedPrefixes', 'POST', apiParams, clientConfig);
    this.globalPublicDelegatedPrefixes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/publicDelegatedPrefixes/{publicDelegatedPrefix}', 'PATCH', apiParams, clientConfig);
    this.globalPublicDelegatedPrefixes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/publicDelegatedPrefixes/{publicDelegatedPrefix}', 'GET', apiParams, clientConfig);
    this.globalPublicDelegatedPrefixes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/publicDelegatedPrefixes/{publicDelegatedPrefix}', 'DELETE', apiParams, clientConfig);

    this.machineTypes = {};
    this.machineTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/machineTypes/{machineType}', 'GET', apiParams, clientConfig);
    this.machineTypes.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/machineTypes', 'GET', apiParams, clientConfig);
    this.machineTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/machineTypes', 'GET', apiParams, clientConfig);

    this.regionSslCertificates = {};
    this.regionSslCertificates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/sslCertificates', 'GET', apiParams, clientConfig);
    this.regionSslCertificates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/sslCertificates/{sslCertificate}', 'DELETE', apiParams, clientConfig);
    this.regionSslCertificates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/sslCertificates/{sslCertificate}', 'GET', apiParams, clientConfig);
    this.regionSslCertificates.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/sslCertificates/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionSslCertificates.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/sslCertificates', 'POST', apiParams, clientConfig);

    this.addresses = {};
    this.addresses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/addresses/{address}', 'GET', apiParams, clientConfig);
    this.addresses.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/addresses/{address}/move', 'POST', apiParams, clientConfig);
    this.addresses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/addresses', 'GET', apiParams, clientConfig);
    this.addresses.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/addresses/{address}', 'DELETE', apiParams, clientConfig);
    this.addresses.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/addresses', 'POST', apiParams, clientConfig);
    this.addresses.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/addresses', 'GET', apiParams, clientConfig);
    this.addresses.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/addresses/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.addresses.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/addresses/{resource}/setLabels', 'POST', apiParams, clientConfig);

    this.networkFirewallPolicies = {};
    this.networkFirewallPolicies.addRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/addRule', 'POST', apiParams, clientConfig);
    this.networkFirewallPolicies.cloneRules = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/cloneRules', 'POST', apiParams, clientConfig);
    this.networkFirewallPolicies.removePacketMirroringRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/removePacketMirroringRule', 'POST', apiParams, clientConfig);
    this.networkFirewallPolicies.patchPacketMirroringRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/patchPacketMirroringRule', 'POST', apiParams, clientConfig);
    this.networkFirewallPolicies.addPacketMirroringRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/addPacketMirroringRule', 'POST', apiParams, clientConfig);
    this.networkFirewallPolicies.getAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/getAssociation', 'GET', apiParams, clientConfig);
    this.networkFirewallPolicies.getRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/getRule', 'GET', apiParams, clientConfig);
    this.networkFirewallPolicies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.networkFirewallPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies', 'POST', apiParams, clientConfig);
    this.networkFirewallPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}', 'DELETE', apiParams, clientConfig);
    this.networkFirewallPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.networkFirewallPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.networkFirewallPolicies.getPacketMirroringRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/getPacketMirroringRule', 'GET', apiParams, clientConfig);
    this.networkFirewallPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies', 'GET', apiParams, clientConfig);
    this.networkFirewallPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}', 'GET', apiParams, clientConfig);
    this.networkFirewallPolicies.removeRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/removeRule', 'POST', apiParams, clientConfig);
    this.networkFirewallPolicies.removeAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/removeAssociation', 'POST', apiParams, clientConfig);
    this.networkFirewallPolicies.addAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/addAssociation', 'POST', apiParams, clientConfig);
    this.networkFirewallPolicies.patchRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/patchRule', 'POST', apiParams, clientConfig);
    this.networkFirewallPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}', 'PATCH', apiParams, clientConfig);
    this.networkFirewallPolicies.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/firewallPolicies', 'GET', apiParams, clientConfig);

    this.targetSslProxies = {};
    this.targetSslProxies.setBackendService = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}/setBackendService', 'POST', apiParams, clientConfig);
    this.targetSslProxies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}', 'GET', apiParams, clientConfig);
    this.targetSslProxies.setSslCertificates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}/setSslCertificates', 'POST', apiParams, clientConfig);
    this.targetSslProxies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}', 'DELETE', apiParams, clientConfig);
    this.targetSslProxies.setCertificateMap = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}/setCertificateMap', 'POST', apiParams, clientConfig);
    this.targetSslProxies.setSslPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}/setSslPolicy', 'POST', apiParams, clientConfig);
    this.targetSslProxies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetSslProxies', 'GET', apiParams, clientConfig);
    this.targetSslProxies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetSslProxies', 'POST', apiParams, clientConfig);
    this.targetSslProxies.setProxyHeader = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}/setProxyHeader', 'POST', apiParams, clientConfig);
    this.targetSslProxies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetSslProxies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);

    this.crossSiteNetworks = {};
    this.crossSiteNetworks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}', 'DELETE', apiParams, clientConfig);
    this.crossSiteNetworks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/crossSiteNetworks', 'POST', apiParams, clientConfig);
    this.crossSiteNetworks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}', 'GET', apiParams, clientConfig);
    this.crossSiteNetworks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/crossSiteNetworks', 'GET', apiParams, clientConfig);
    this.crossSiteNetworks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}', 'PATCH', apiParams, clientConfig);

    this.networks = {};
    this.networks.cancelRequestRemovePeering = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks/{network}/cancelRequestRemovePeering', 'POST', apiParams, clientConfig);
    this.networks.removePeering = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks/{network}/removePeering', 'POST', apiParams, clientConfig);
    this.networks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks/{network}', 'GET', apiParams, clientConfig);
    this.networks.updatePeering = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks/{network}/updatePeering', 'PATCH', apiParams, clientConfig);
    this.networks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks', 'POST', apiParams, clientConfig);
    this.networks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks', 'GET', apiParams, clientConfig);
    this.networks.getEffectiveFirewalls = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks/{network}/getEffectiveFirewalls', 'GET', apiParams, clientConfig);
    this.networks.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.networks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks/{network}', 'DELETE', apiParams, clientConfig);
    this.networks.requestRemovePeering = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks/{network}/requestRemovePeering', 'POST', apiParams, clientConfig);
    this.networks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks/{network}', 'PATCH', apiParams, clientConfig);
    this.networks.switchToCustomMode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks/{network}/switchToCustomMode', 'POST', apiParams, clientConfig);
    this.networks.addPeering = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks/{network}/addPeering', 'POST', apiParams, clientConfig);
    this.networks.listPeeringRoutes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networks/{network}/listPeeringRoutes', 'GET', apiParams, clientConfig);

    this.globalForwardingRules = {};
    this.globalForwardingRules.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/forwardingRules/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.globalForwardingRules.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/forwardingRules', 'POST', apiParams, clientConfig);
    this.globalForwardingRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/forwardingRules/{forwardingRule}', 'PATCH', apiParams, clientConfig);
    this.globalForwardingRules.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/forwardingRules/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.globalForwardingRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/forwardingRules', 'GET', apiParams, clientConfig);
    this.globalForwardingRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/forwardingRules/{forwardingRule}', 'DELETE', apiParams, clientConfig);
    this.globalForwardingRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/forwardingRules/{forwardingRule}', 'GET', apiParams, clientConfig);
    this.globalForwardingRules.setTarget = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/forwardingRules/{forwardingRule}/setTarget', 'POST', apiParams, clientConfig);

    this.regionZones = {};
    this.regionZones.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/zones', 'GET', apiParams, clientConfig);

    this.instanceGroupManagers = {};
    this.instanceGroupManagers.resumeInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resumeInstances', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.recreateInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/recreateInstances', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers', 'GET', apiParams, clientConfig);
    this.instanceGroupManagers.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/instanceGroupManagers', 'GET', apiParams, clientConfig);
    this.instanceGroupManagers.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.listPerInstanceConfigs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listPerInstanceConfigs', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}', 'PATCH', apiParams, clientConfig);
    this.instanceGroupManagers.setInstanceTemplate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.deletePerInstanceConfigs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deletePerInstanceConfigs', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.patchPerInstanceConfigs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/patchPerInstanceConfigs', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.getAvailableAcceleratorTopologies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{resourceId}/getAvailableAcceleratorTopologies', 'GET', apiParams, clientConfig);
    this.instanceGroupManagers.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.abandonInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/abandonInstances', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.listErrors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listErrors', 'GET', apiParams, clientConfig);
    this.instanceGroupManagers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}', 'PUT', apiParams, clientConfig);
    this.instanceGroupManagers.setAutoHealingPolicies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setAutoHealingPolicies', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}', 'GET', apiParams, clientConfig);
    this.instanceGroupManagers.setTargetPools = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setTargetPools', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.updatePerInstanceConfigs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/updatePerInstanceConfigs', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.stopInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/stopInstances', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}', 'DELETE', apiParams, clientConfig);
    this.instanceGroupManagers.suspendInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/suspendInstances', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.resizeAdvanced = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeAdvanced', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.createInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/createInstances', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.listManagedInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.deleteInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deleteInstances', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.applyUpdatesToInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/applyUpdatesToInstances', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.startInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/startInstances', 'POST', apiParams, clientConfig);
    this.instanceGroupManagers.resize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resize', 'POST', apiParams, clientConfig);

    this.firewalls = {};
    this.firewalls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewalls/{firewall}', 'DELETE', apiParams, clientConfig);
    this.firewalls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewalls/{firewall}', 'GET', apiParams, clientConfig);
    this.firewalls.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewalls/{firewall}', 'PUT', apiParams, clientConfig);
    this.firewalls.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewalls/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.firewalls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewalls/{firewall}', 'PATCH', apiParams, clientConfig);
    this.firewalls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewalls', 'GET', apiParams, clientConfig);
    this.firewalls.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/firewalls', 'POST', apiParams, clientConfig);

    this.serviceAttachments = {};
    this.serviceAttachments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments/{serviceAttachment}', 'PATCH', apiParams, clientConfig);
    this.serviceAttachments.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.serviceAttachments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments', 'POST', apiParams, clientConfig);
    this.serviceAttachments.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/serviceAttachments', 'GET', apiParams, clientConfig);
    this.serviceAttachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments', 'GET', apiParams, clientConfig);
    this.serviceAttachments.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.serviceAttachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments/{serviceAttachment}', 'DELETE', apiParams, clientConfig);
    this.serviceAttachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments/{serviceAttachment}', 'GET', apiParams, clientConfig);
    this.serviceAttachments.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);

    this.imageFamilyViews = {};
    this.imageFamilyViews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/imageFamilyViews/{family}', 'GET', apiParams, clientConfig);

    this.targetPools = {};
    this.targetPools.addHealthCheck = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/addHealthCheck', 'POST', apiParams, clientConfig);
    this.targetPools.getHealth = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/getHealth', 'POST', apiParams, clientConfig);
    this.targetPools.setBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/setBackup', 'POST', apiParams, clientConfig);
    this.targetPools.addInstance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/addInstance', 'POST', apiParams, clientConfig);
    this.targetPools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetPools', 'GET', apiParams, clientConfig);
    this.targetPools.removeInstance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/removeInstance', 'POST', apiParams, clientConfig);
    this.targetPools.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.targetPools.setSecurityPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/setSecurityPolicy', 'POST', apiParams, clientConfig);
    this.targetPools.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetPools', 'POST', apiParams, clientConfig);
    this.targetPools.removeHealthCheck = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/removeHealthCheck', 'POST', apiParams, clientConfig);
    this.targetPools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}', 'DELETE', apiParams, clientConfig);
    this.targetPools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}', 'GET', apiParams, clientConfig);
    this.targetPools.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/targetPools', 'GET', apiParams, clientConfig);

    this.globalNetworkEndpointGroups = {};
    this.globalNetworkEndpointGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}', 'DELETE', apiParams, clientConfig);
    this.globalNetworkEndpointGroups.attachNetworkEndpoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints', 'POST', apiParams, clientConfig);
    this.globalNetworkEndpointGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}', 'GET', apiParams, clientConfig);
    this.globalNetworkEndpointGroups.listNetworkEndpoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints', 'POST', apiParams, clientConfig);
    this.globalNetworkEndpointGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networkEndpointGroups', 'POST', apiParams, clientConfig);
    this.globalNetworkEndpointGroups.detachNetworkEndpoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints', 'POST', apiParams, clientConfig);
    this.globalNetworkEndpointGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networkEndpointGroups', 'GET', apiParams, clientConfig);

    this.routes = {};
    this.routes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/routes/{route}', 'DELETE', apiParams, clientConfig);
    this.routes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/routes/{route}', 'GET', apiParams, clientConfig);
    this.routes.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/routes', 'POST', apiParams, clientConfig);
    this.routes.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/routes/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.routes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/routes', 'GET', apiParams, clientConfig);

    this.licenses = {};
    this.licenses.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/licenses/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.licenses.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/licenses/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.licenses.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/licenses', 'POST', apiParams, clientConfig);
    this.licenses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/licenses', 'GET', apiParams, clientConfig);
    this.licenses.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/licenses/{license}', 'PATCH', apiParams, clientConfig);
    this.licenses.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/licenses/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.licenses.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/licenses/{license}', 'DELETE', apiParams, clientConfig);
    this.licenses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/licenses/{license}', 'GET', apiParams, clientConfig);

    this.regionHealthChecks = {};
    this.regionHealthChecks.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthChecks/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionHealthChecks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthChecks', 'POST', apiParams, clientConfig);
    this.regionHealthChecks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthChecks/{healthCheck}', 'PATCH', apiParams, clientConfig);
    this.regionHealthChecks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthChecks/{healthCheck}', 'GET', apiParams, clientConfig);
    this.regionHealthChecks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthChecks/{healthCheck}', 'DELETE', apiParams, clientConfig);
    this.regionHealthChecks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthChecks/{healthCheck}', 'PUT', apiParams, clientConfig);
    this.regionHealthChecks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthChecks', 'GET', apiParams, clientConfig);

    this.regionInstanceGroupManagers = {};
    this.regionInstanceGroupManagers.resumeInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resumeInstances', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}', 'GET', apiParams, clientConfig);
    this.regionInstanceGroupManagers.resize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resize', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.updatePerInstanceConfigs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/updatePerInstanceConfigs', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.listManagedInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.setAutoHealingPolicies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setAutoHealingPolicies', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.listErrors = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listErrors', 'GET', apiParams, clientConfig);
    this.regionInstanceGroupManagers.deletePerInstanceConfigs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/deletePerInstanceConfigs', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.suspendInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/suspendInstances', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}', 'PATCH', apiParams, clientConfig);
    this.regionInstanceGroupManagers.stopInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/stopInstances', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.listPerInstanceConfigs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listPerInstanceConfigs', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.deleteInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/deleteInstances', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.patchPerInstanceConfigs = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/patchPerInstanceConfigs', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.setInstanceTemplate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}', 'PUT', apiParams, clientConfig);
    this.regionInstanceGroupManagers.abandonInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/abandonInstances', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers', 'GET', apiParams, clientConfig);
    this.regionInstanceGroupManagers.adoptInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/adoptInstances', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.applyUpdatesToInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/applyUpdatesToInstances', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.startInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/startInstances', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}', 'DELETE', apiParams, clientConfig);
    this.regionInstanceGroupManagers.createInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/createInstances', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.recreateInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/recreateInstances', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.resizeAdvanced = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resizeAdvanced', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagers.setTargetPools = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setTargetPools', 'POST', apiParams, clientConfig);

    this.publicAdvertisedPrefixes = {};
    this.publicAdvertisedPrefixes.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes', 'POST', apiParams, clientConfig);
    this.publicAdvertisedPrefixes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}', 'PATCH', apiParams, clientConfig);
    this.publicAdvertisedPrefixes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes', 'GET', apiParams, clientConfig);
    this.publicAdvertisedPrefixes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}', 'GET', apiParams, clientConfig);
    this.publicAdvertisedPrefixes.withdraw = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}/withdraw', 'POST', apiParams, clientConfig);
    this.publicAdvertisedPrefixes.announce = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}/announce', 'POST', apiParams, clientConfig);
    this.publicAdvertisedPrefixes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}', 'DELETE', apiParams, clientConfig);

    this.networkProfiles = {};
    this.networkProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networkProfiles/{networkProfile}', 'GET', apiParams, clientConfig);
    this.networkProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/networkProfiles', 'GET', apiParams, clientConfig);

    this.regionSecurityPolicies = {};
    this.regionSecurityPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies', 'POST', apiParams, clientConfig);
    this.regionSecurityPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}', 'DELETE', apiParams, clientConfig);
    this.regionSecurityPolicies.addRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/addRule', 'POST', apiParams, clientConfig);
    this.regionSecurityPolicies.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.regionSecurityPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies', 'GET', apiParams, clientConfig);
    this.regionSecurityPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}', 'GET', apiParams, clientConfig);
    this.regionSecurityPolicies.patchRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/patchRule', 'POST', apiParams, clientConfig);
    this.regionSecurityPolicies.getRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/getRule', 'GET', apiParams, clientConfig);
    this.regionSecurityPolicies.removeRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/removeRule', 'POST', apiParams, clientConfig);
    this.regionSecurityPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}', 'PATCH', apiParams, clientConfig);

    this.regionCommitments = {};
    this.regionCommitments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/commitments', 'GET', apiParams, clientConfig);
    this.regionCommitments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/commitments', 'POST', apiParams, clientConfig);
    this.regionCommitments.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/commitments', 'GET', apiParams, clientConfig);
    this.regionCommitments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/commitments/{commitment}', 'GET', apiParams, clientConfig);
    this.regionCommitments.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/commitments/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionCommitments.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/commitments/{commitment}', 'PATCH', apiParams, clientConfig);
    this.regionCommitments.updateReservations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/commitments/{commitment}/updateReservations', 'POST', apiParams, clientConfig);

    this.nodeTypes = {};
    this.nodeTypes.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/nodeTypes', 'GET', apiParams, clientConfig);
    this.nodeTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeTypes/{nodeType}', 'GET', apiParams, clientConfig);
    this.nodeTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeTypes', 'GET', apiParams, clientConfig);

    this.regionNetworkFirewallPolicies = {};
    this.regionNetworkFirewallPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies', 'GET', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.cloneRules = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/cloneRules', 'POST', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.addAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/addAssociation', 'POST', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.getEffectiveFirewalls = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/getEffectiveFirewalls', 'GET', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.removeRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/removeRule', 'POST', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}', 'DELETE', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}', 'GET', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.getAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/getAssociation', 'GET', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.removeAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/removeAssociation', 'POST', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.getRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/getRule', 'GET', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.addRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/addRule', 'POST', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies', 'POST', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}', 'PATCH', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.patchAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/patchAssociation', 'POST', apiParams, clientConfig);
    this.regionNetworkFirewallPolicies.patchRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/patchRule', 'POST', apiParams, clientConfig);

    this.networkAttachments = {};
    this.networkAttachments.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/networkAttachments', 'GET', apiParams, clientConfig);
    this.networkAttachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments', 'GET', apiParams, clientConfig);
    this.networkAttachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments/{networkAttachment}', 'GET', apiParams, clientConfig);
    this.networkAttachments.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.networkAttachments.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.networkAttachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments/{networkAttachment}', 'DELETE', apiParams, clientConfig);
    this.networkAttachments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments/{networkAttachment}', 'PATCH', apiParams, clientConfig);
    this.networkAttachments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments', 'POST', apiParams, clientConfig);
    this.networkAttachments.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);

    this.regionOperations = {};
    this.regionOperations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/operations/{operation}', 'GET', apiParams, clientConfig);
    this.regionOperations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/operations/{operation}', 'DELETE', apiParams, clientConfig);
    this.regionOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/operations', 'GET', apiParams, clientConfig);
    this.regionOperations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/operations/{operation}/wait', 'POST', apiParams, clientConfig);

    this.forwardingRules = {};
    this.forwardingRules.setTarget = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules/{forwardingRule}/setTarget', 'POST', apiParams, clientConfig);
    this.forwardingRules.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.forwardingRules.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.forwardingRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules', 'GET', apiParams, clientConfig);
    this.forwardingRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules/{forwardingRule}', 'DELETE', apiParams, clientConfig);
    this.forwardingRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules/{forwardingRule}', 'PATCH', apiParams, clientConfig);
    this.forwardingRules.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/forwardingRules', 'GET', apiParams, clientConfig);
    this.forwardingRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules/{forwardingRule}', 'GET', apiParams, clientConfig);
    this.forwardingRules.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules', 'POST', apiParams, clientConfig);

    this.globalAddresses = {};
    this.globalAddresses.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/addresses', 'GET', apiParams, clientConfig);
    this.globalAddresses.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/addresses', 'POST', apiParams, clientConfig);
    this.globalAddresses.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/addresses/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.globalAddresses.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/addresses/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.globalAddresses.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/addresses/{address}', 'GET', apiParams, clientConfig);
    this.globalAddresses.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/addresses/{address}/move', 'POST', apiParams, clientConfig);
    this.globalAddresses.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/addresses/{address}', 'DELETE', apiParams, clientConfig);

    this.advice = {};
    this.advice.calendarMode = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/advice/calendarMode', 'POST', apiParams, clientConfig);

    this.regionHealthSources = {};
    this.regionHealthSources.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthSources', 'POST', apiParams, clientConfig);
    this.regionHealthSources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthSources/{healthSource}', 'PATCH', apiParams, clientConfig);
    this.regionHealthSources.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/healthSources', 'GET', apiParams, clientConfig);
    this.regionHealthSources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthSources/{healthSource}', 'GET', apiParams, clientConfig);
    this.regionHealthSources.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthSources/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionHealthSources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthSources', 'GET', apiParams, clientConfig);
    this.regionHealthSources.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthSources/{healthSource}', 'DELETE', apiParams, clientConfig);

    this.reservationSubBlocks = {};
    this.reservationSubBlocks.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/{parentResource}/reservationSubBlocks/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.reservationSubBlocks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/{parentName}/reservationSubBlocks/{reservationSubBlock}', 'GET', apiParams, clientConfig);
    this.reservationSubBlocks.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/{parentResource}/reservationSubBlocks/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.reservationSubBlocks.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/{parentResource}/reservationSubBlocks/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.reservationSubBlocks.reportFaulty = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/{parentName}/reservationSubBlocks/{reservationSubBlock}/reportFaulty', 'POST', apiParams, clientConfig);
    this.reservationSubBlocks.performMaintenance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/{parentName}/reservationSubBlocks/{reservationSubBlock}/performMaintenance', 'POST', apiParams, clientConfig);
    this.reservationSubBlocks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/{parentName}/reservationSubBlocks', 'GET', apiParams, clientConfig);

    this.acceleratorTypes = {};
    this.acceleratorTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/acceleratorTypes/{acceleratorType}', 'GET', apiParams, clientConfig);
    this.acceleratorTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/acceleratorTypes', 'GET', apiParams, clientConfig);
    this.acceleratorTypes.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/acceleratorTypes', 'GET', apiParams, clientConfig);

    this.securityPolicies = {};
    this.securityPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}', 'DELETE', apiParams, clientConfig);
    this.securityPolicies.removeRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}/removeRule', 'POST', apiParams, clientConfig);
    this.securityPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/securityPolicies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.securityPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/securityPolicies', 'GET', apiParams, clientConfig);
    this.securityPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/securityPolicies', 'POST', apiParams, clientConfig);
    this.securityPolicies.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/securityPolicies/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.securityPolicies.listPreconfiguredExpressionSets = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/securityPolicies/listPreconfiguredExpressionSets', 'GET', apiParams, clientConfig);
    this.securityPolicies.addRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}/addRule', 'POST', apiParams, clientConfig);
    this.securityPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}', 'PATCH', apiParams, clientConfig);
    this.securityPolicies.patchRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}/patchRule', 'POST', apiParams, clientConfig);
    this.securityPolicies.getRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}/getRule', 'GET', apiParams, clientConfig);
    this.securityPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}', 'GET', apiParams, clientConfig);
    this.securityPolicies.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/securityPolicies', 'GET', apiParams, clientConfig);

    this.vpnTunnels = {};
    this.vpnTunnels.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnTunnels', 'GET', apiParams, clientConfig);
    this.vpnTunnels.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnTunnels/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.vpnTunnels.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}', 'GET', apiParams, clientConfig);
    this.vpnTunnels.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}', 'DELETE', apiParams, clientConfig);
    this.vpnTunnels.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnTunnels/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.vpnTunnels.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/vpnTunnels', 'GET', apiParams, clientConfig);
    this.vpnTunnels.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnTunnels', 'POST', apiParams, clientConfig);

    this.snapshots = {};
    this.snapshots.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/snapshots/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.snapshots.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/snapshots/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.snapshots.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/snapshots', 'POST', apiParams, clientConfig);
    this.snapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/snapshots/{snapshot}', 'GET', apiParams, clientConfig);
    this.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/snapshots', 'GET', apiParams, clientConfig);
    this.snapshots.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/snapshots/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.snapshots.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/snapshots/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.snapshots.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/snapshots', 'GET', apiParams, clientConfig);
    this.snapshots.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/snapshots/{snapshot}', 'DELETE', apiParams, clientConfig);

    this.storagePoolTypes = {};
    this.storagePoolTypes.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/storagePoolTypes', 'GET', apiParams, clientConfig);
    this.storagePoolTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/storagePoolTypes', 'GET', apiParams, clientConfig);
    this.storagePoolTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/storagePoolTypes/{storagePoolType}', 'GET', apiParams, clientConfig);

    this.instances = {};
    this.instances.start = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/start', 'POST', apiParams, clientConfig);
    this.instances.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/instances', 'GET', apiParams, clientConfig);
    this.instances.updateShieldedInstanceConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/updateShieldedInstanceConfig', 'PATCH', apiParams, clientConfig);
    this.instances.removeResourcePolicies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/removeResourcePolicies', 'POST', apiParams, clientConfig);
    this.instances.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}', 'PUT', apiParams, clientConfig);
    this.instances.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setLabels', 'POST', apiParams, clientConfig);
    this.instances.getEffectiveFirewalls = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/getEffectiveFirewalls', 'GET', apiParams, clientConfig);
    this.instances.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/stop', 'POST', apiParams, clientConfig);
    this.instances.patchPartnerMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/patchPartnerMetadata', 'POST', apiParams, clientConfig);
    this.instances.deleteAccessConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/deleteAccessConfig', 'POST', apiParams, clientConfig);
    this.instances.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.instances.getSerialPortOutput = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/serialPort', 'GET', apiParams, clientConfig);
    this.instances.getShieldedVmIdentity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/getShieldedVmIdentity', 'GET', apiParams, clientConfig);
    this.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}', 'GET', apiParams, clientConfig);
    this.instances.setScheduling = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setScheduling', 'POST', apiParams, clientConfig);
    this.instances.performMaintenance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/performMaintenance', 'POST', apiParams, clientConfig);
    this.instances.addResourcePolicies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/addResourcePolicies', 'POST', apiParams, clientConfig);
    this.instances.detachDisk = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/detachDisk', 'POST', apiParams, clientConfig);
    this.instances.suspend = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/suspend', 'POST', apiParams, clientConfig);
    this.instances.sendDiagnosticInterrupt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/sendDiagnosticInterrupt', 'POST', apiParams, clientConfig);
    this.instances.updateDisplayDevice = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/updateDisplayDevice', 'PATCH', apiParams, clientConfig);
    this.instances.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.instances.updateAccessConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/updateAccessConfig', 'POST', apiParams, clientConfig);
    this.instances.setDeletionProtection = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{resource}/setDeletionProtection', 'POST', apiParams, clientConfig);
    this.instances.setShieldedInstanceIntegrityPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setShieldedInstanceIntegrityPolicy', 'PATCH', apiParams, clientConfig);
    this.instances.startWithEncryptionKey = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/startWithEncryptionKey', 'POST', apiParams, clientConfig);
    this.instances.addNetworkInterface = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/addNetworkInterface', 'POST', apiParams, clientConfig);
    this.instances.getGuestAttributes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/getGuestAttributes', 'GET', apiParams, clientConfig);
    this.instances.addAccessConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/addAccessConfig', 'POST', apiParams, clientConfig);
    this.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}', 'DELETE', apiParams, clientConfig);
    this.instances.setMachineType = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setMachineType', 'POST', apiParams, clientConfig);
    this.instances.listReferrers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/referrers', 'GET', apiParams, clientConfig);
    this.instances.bulkInsert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/bulkInsert', 'POST', apiParams, clientConfig);
    this.instances.getPartnerMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/getPartnerMetadata', 'GET', apiParams, clientConfig);
    this.instances.reset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/reset', 'POST', apiParams, clientConfig);
    this.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances', 'GET', apiParams, clientConfig);
    this.instances.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.instances.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/resume', 'POST', apiParams, clientConfig);
    this.instances.setSecurityPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setSecurityPolicy', 'POST', apiParams, clientConfig);
    this.instances.setServiceAccount = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setServiceAccount', 'POST', apiParams, clientConfig);
    this.instances.setMachineResources = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setMachineResources', 'POST', apiParams, clientConfig);
    this.instances.setName = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setName', 'POST', apiParams, clientConfig);
    this.instances.updateShieldedVmConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/updateShieldedVmConfig', 'PATCH', apiParams, clientConfig);
    this.instances.setMinCpuPlatform = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setMinCpuPlatform', 'POST', apiParams, clientConfig);
    this.instances.deleteNetworkInterface = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/deleteNetworkInterface', 'POST', apiParams, clientConfig);
    this.instances.updateNetworkInterface = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/updateNetworkInterface', 'PATCH', apiParams, clientConfig);
    this.instances.setMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setMetadata', 'POST', apiParams, clientConfig);
    this.instances.attachDisk = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/attachDisk', 'POST', apiParams, clientConfig);
    this.instances.getScreenshot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/screenshot', 'GET', apiParams, clientConfig);
    this.instances.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances', 'POST', apiParams, clientConfig);
    this.instances.reportHostAsFaulty = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/reportHostAsFaulty', 'POST', apiParams, clientConfig);
    this.instances.setTags = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setTags', 'POST', apiParams, clientConfig);
    this.instances.setDiskAutoDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setDiskAutoDelete', 'POST', apiParams, clientConfig);
    this.instances.getShieldedInstanceIdentity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/getShieldedInstanceIdentity', 'GET', apiParams, clientConfig);
    this.instances.simulateMaintenanceEvent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/simulateMaintenanceEvent', 'POST', apiParams, clientConfig);
    this.instances.setShieldedVmIntegrityPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setShieldedVmIntegrityPolicy', 'PATCH', apiParams, clientConfig);

    this.firewallPolicies = {};
    this.firewallPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}', 'DELETE', apiParams, clientConfig);
    this.firewallPolicies.addPacketMirroringRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/addPacketMirroringRule', 'POST', apiParams, clientConfig);
    this.firewallPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.firewallPolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.firewallPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}', 'PATCH', apiParams, clientConfig);
    this.firewallPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies', 'POST', apiParams, clientConfig);
    this.firewallPolicies.addRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/addRule', 'POST', apiParams, clientConfig);
    this.firewallPolicies.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/move', 'POST', apiParams, clientConfig);
    this.firewallPolicies.removeAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/removeAssociation', 'POST', apiParams, clientConfig);
    this.firewallPolicies.addAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/addAssociation', 'POST', apiParams, clientConfig);
    this.firewallPolicies.removeRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/removeRule', 'POST', apiParams, clientConfig);
    this.firewallPolicies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.firewallPolicies.getPacketMirroringRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/getPacketMirroringRule', 'GET', apiParams, clientConfig);
    this.firewallPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}', 'GET', apiParams, clientConfig);
    this.firewallPolicies.getAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/getAssociation', 'GET', apiParams, clientConfig);
    this.firewallPolicies.removePacketMirroringRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/removePacketMirroringRule', 'POST', apiParams, clientConfig);
    this.firewallPolicies.getRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/getRule', 'GET', apiParams, clientConfig);
    this.firewallPolicies.patchRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/patchRule', 'POST', apiParams, clientConfig);
    this.firewallPolicies.cloneRules = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/cloneRules', 'POST', apiParams, clientConfig);
    this.firewallPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies', 'GET', apiParams, clientConfig);
    this.firewallPolicies.listAssociations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/listAssociations', 'GET', apiParams, clientConfig);
    this.firewallPolicies.patchPacketMirroringRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/patchPacketMirroringRule', 'POST', apiParams, clientConfig);

    this.globalOrganizationOperations = {};
    this.globalOrganizationOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/operations', 'GET', apiParams, clientConfig);
    this.globalOrganizationOperations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/operations/{operation}', 'DELETE', apiParams, clientConfig);
    this.globalOrganizationOperations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/operations/{operation}', 'GET', apiParams, clientConfig);

    this.regionDiskSettings = {};
    this.regionDiskSettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/diskSettings', 'GET', apiParams, clientConfig);
    this.regionDiskSettings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/diskSettings', 'PATCH', apiParams, clientConfig);

    this.regionUrlMaps = {};
    this.regionUrlMaps.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/urlMaps/{urlMap}', 'PATCH', apiParams, clientConfig);
    this.regionUrlMaps.invalidateCache = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/urlMaps/{urlMap}/invalidateCache', 'POST', apiParams, clientConfig);
    this.regionUrlMaps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/urlMaps/{urlMap}', 'DELETE', apiParams, clientConfig);
    this.regionUrlMaps.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/urlMaps/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionUrlMaps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/urlMaps', 'GET', apiParams, clientConfig);
    this.regionUrlMaps.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/urlMaps', 'POST', apiParams, clientConfig);
    this.regionUrlMaps.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/urlMaps/{urlMap}', 'PUT', apiParams, clientConfig);
    this.regionUrlMaps.validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/urlMaps/{urlMap}/validate', 'POST', apiParams, clientConfig);
    this.regionUrlMaps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/urlMaps/{urlMap}', 'GET', apiParams, clientConfig);

    this.regionNotificationEndpoints = {};
    this.regionNotificationEndpoints.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/notificationEndpoints/{notificationEndpoint}', 'DELETE', apiParams, clientConfig);
    this.regionNotificationEndpoints.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/notificationEndpoints/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionNotificationEndpoints.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/notificationEndpoints', 'GET', apiParams, clientConfig);
    this.regionNotificationEndpoints.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/notificationEndpoints/{notificationEndpoint}', 'GET', apiParams, clientConfig);
    this.regionNotificationEndpoints.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/notificationEndpoints', 'POST', apiParams, clientConfig);

    this.previewFeatures = {};
    this.previewFeatures.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/previewFeatures/{previewFeature}', 'PATCH', apiParams, clientConfig);
    this.previewFeatures.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/previewFeatures/{previewFeature}', 'GET', apiParams, clientConfig);
    this.previewFeatures.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/previewFeatures', 'GET', apiParams, clientConfig);

    this.backendBuckets = {};
    this.backendBuckets.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.backendBuckets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}', 'GET', apiParams, clientConfig);
    this.backendBuckets.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets', 'POST', apiParams, clientConfig);
    this.backendBuckets.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}', 'PUT', apiParams, clientConfig);
    this.backendBuckets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}', 'DELETE', apiParams, clientConfig);
    this.backendBuckets.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.backendBuckets.deleteSignedUrlKey = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}/deleteSignedUrlKey', 'POST', apiParams, clientConfig);
    this.backendBuckets.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/backendBuckets', 'GET', apiParams, clientConfig);
    this.backendBuckets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}', 'PATCH', apiParams, clientConfig);
    this.backendBuckets.listUsable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets/listUsable', 'GET', apiParams, clientConfig);
    this.backendBuckets.setEdgeSecurityPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}/setEdgeSecurityPolicy', 'POST', apiParams, clientConfig);
    this.backendBuckets.addSignedUrlKey = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}/addSignedUrlKey', 'POST', apiParams, clientConfig);
    this.backendBuckets.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.backendBuckets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendBuckets', 'GET', apiParams, clientConfig);

    this.futureReservations = {};
    this.futureReservations.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/futureReservations/{futureReservation}', 'PATCH', apiParams, clientConfig);
    this.futureReservations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/futureReservations/{futureReservation}', 'GET', apiParams, clientConfig);
    this.futureReservations.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/futureReservations', 'POST', apiParams, clientConfig);
    this.futureReservations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/futureReservations/{futureReservation}/cancel', 'POST', apiParams, clientConfig);
    this.futureReservations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/futureReservations/{futureReservation}', 'DELETE', apiParams, clientConfig);
    this.futureReservations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/futureReservations', 'GET', apiParams, clientConfig);
    this.futureReservations.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/futureReservations', 'GET', apiParams, clientConfig);

    this.urlMaps = {};
    this.urlMaps.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/urlMaps', 'POST', apiParams, clientConfig);
    this.urlMaps.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/urlMaps/{urlMap}', 'DELETE', apiParams, clientConfig);
    this.urlMaps.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/urlMaps/{urlMap}', 'PUT', apiParams, clientConfig);
    this.urlMaps.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/urlMaps', 'GET', apiParams, clientConfig);
    this.urlMaps.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/urlMaps/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.urlMaps.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/urlMaps', 'GET', apiParams, clientConfig);
    this.urlMaps.invalidateCache = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/urlMaps/{urlMap}/invalidateCache', 'POST', apiParams, clientConfig);
    this.urlMaps.validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/urlMaps/{urlMap}/validate', 'POST', apiParams, clientConfig);
    this.urlMaps.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/urlMaps/{urlMap}', 'GET', apiParams, clientConfig);
    this.urlMaps.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/urlMaps/{urlMap}', 'PATCH', apiParams, clientConfig);

    this.regionDiskTypes = {};
    this.regionDiskTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/diskTypes/{diskType}', 'GET', apiParams, clientConfig);
    this.regionDiskTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/diskTypes', 'GET', apiParams, clientConfig);

    this.regionInstanceGroups = {};
    this.regionInstanceGroups.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroups/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionInstanceGroups.setNamedPorts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroups/{instanceGroup}/setNamedPorts', 'POST', apiParams, clientConfig);
    this.regionInstanceGroups.listInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroups/{instanceGroup}/listInstances', 'POST', apiParams, clientConfig);
    this.regionInstanceGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroups/{instanceGroup}', 'GET', apiParams, clientConfig);
    this.regionInstanceGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroups', 'GET', apiParams, clientConfig);

    this.networkEdgeSecurityServices = {};
    this.networkEdgeSecurityServices.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/networkEdgeSecurityServices', 'GET', apiParams, clientConfig);
    this.networkEdgeSecurityServices.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkEdgeSecurityServices', 'POST', apiParams, clientConfig);
    this.networkEdgeSecurityServices.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkEdgeSecurityServices/{networkEdgeSecurityService}', 'DELETE', apiParams, clientConfig);
    this.networkEdgeSecurityServices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkEdgeSecurityServices/{networkEdgeSecurityService}', 'GET', apiParams, clientConfig);
    this.networkEdgeSecurityServices.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkEdgeSecurityServices/{networkEdgeSecurityService}', 'PATCH', apiParams, clientConfig);

    this.regionInstanceTemplates = {};
    this.regionInstanceTemplates.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceTemplates', 'POST', apiParams, clientConfig);
    this.regionInstanceTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceTemplates/{instanceTemplate}', 'DELETE', apiParams, clientConfig);
    this.regionInstanceTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceTemplates', 'GET', apiParams, clientConfig);
    this.regionInstanceTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceTemplates/{instanceTemplate}', 'GET', apiParams, clientConfig);

    this.regionBackendServices = {};
    this.regionBackendServices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{backendService}', 'GET', apiParams, clientConfig);
    this.regionBackendServices.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{backendService}', 'DELETE', apiParams, clientConfig);
    this.regionBackendServices.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendServices', 'POST', apiParams, clientConfig);
    this.regionBackendServices.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionBackendServices.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{backendService}', 'PATCH', apiParams, clientConfig);
    this.regionBackendServices.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.regionBackendServices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendServices', 'GET', apiParams, clientConfig);
    this.regionBackendServices.listUsable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendServices/listUsable', 'GET', apiParams, clientConfig);
    this.regionBackendServices.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{backendService}', 'PUT', apiParams, clientConfig);
    this.regionBackendServices.setSecurityPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{backendService}/setSecurityPolicy', 'POST', apiParams, clientConfig);
    this.regionBackendServices.getHealth = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{backendService}/getHealth', 'POST', apiParams, clientConfig);
    this.regionBackendServices.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);

    this.machineImages = {};
    this.machineImages.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/machineImages/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.machineImages.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/machineImages/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.machineImages.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/machineImages/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.machineImages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/machineImages/{machineImage}', 'DELETE', apiParams, clientConfig);
    this.machineImages.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/machineImages/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.machineImages.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/machineImages', 'POST', apiParams, clientConfig);
    this.machineImages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/machineImages', 'GET', apiParams, clientConfig);
    this.machineImages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/machineImages/{machineImage}', 'GET', apiParams, clientConfig);

    this.snapshotSettings = {};
    this.snapshotSettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/snapshotSettings', 'GET', apiParams, clientConfig);
    this.snapshotSettings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/snapshotSettings', 'PATCH', apiParams, clientConfig);

    this.wireGroups = {};
    this.wireGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups/{wireGroup}', 'DELETE', apiParams, clientConfig);
    this.wireGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups', 'POST', apiParams, clientConfig);
    this.wireGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups', 'GET', apiParams, clientConfig);
    this.wireGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups/{wireGroup}', 'GET', apiParams, clientConfig);
    this.wireGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/crossSiteNetworks/{crossSiteNetwork}/wireGroups/{wireGroup}', 'PATCH', apiParams, clientConfig);

    this.rolloutPlans = {};
    this.rolloutPlans.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/rolloutPlans/{rolloutPlan}', 'DELETE', apiParams, clientConfig);
    this.rolloutPlans.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/rolloutPlans', 'GET', apiParams, clientConfig);
    this.rolloutPlans.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/rolloutPlans/{rolloutPlan}', 'GET', apiParams, clientConfig);
    this.rolloutPlans.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/rolloutPlans', 'POST', apiParams, clientConfig);

    this.httpHealthChecks = {};
    this.httpHealthChecks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpHealthChecks/{httpHealthCheck}', 'DELETE', apiParams, clientConfig);
    this.httpHealthChecks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpHealthChecks', 'GET', apiParams, clientConfig);
    this.httpHealthChecks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpHealthChecks', 'POST', apiParams, clientConfig);
    this.httpHealthChecks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpHealthChecks/{httpHealthCheck}', 'PUT', apiParams, clientConfig);
    this.httpHealthChecks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpHealthChecks/{httpHealthCheck}', 'PATCH', apiParams, clientConfig);
    this.httpHealthChecks.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpHealthChecks/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.httpHealthChecks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpHealthChecks/{httpHealthCheck}', 'GET', apiParams, clientConfig);

    this.interconnectLocations = {};
    this.interconnectLocations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectLocations/{interconnectLocation}', 'GET', apiParams, clientConfig);
    this.interconnectLocations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectLocations', 'GET', apiParams, clientConfig);

    this.sslPolicies = {};
    this.sslPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/sslPolicies', 'POST', apiParams, clientConfig);
    this.sslPolicies.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/sslPolicies', 'GET', apiParams, clientConfig);
    this.sslPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/sslPolicies/{sslPolicy}', 'PATCH', apiParams, clientConfig);
    this.sslPolicies.listAvailableFeatures = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/sslPolicies/listAvailableFeatures', 'GET', apiParams, clientConfig);
    this.sslPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/sslPolicies/{sslPolicy}', 'GET', apiParams, clientConfig);
    this.sslPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/sslPolicies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.sslPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/sslPolicies/{sslPolicy}', 'DELETE', apiParams, clientConfig);
    this.sslPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/sslPolicies', 'GET', apiParams, clientConfig);

    this.regionNetworkEndpointGroups = {};
    this.regionNetworkEndpointGroups.listNetworkEndpoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints', 'POST', apiParams, clientConfig);
    this.regionNetworkEndpointGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups', 'POST', apiParams, clientConfig);
    this.regionNetworkEndpointGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}', 'DELETE', apiParams, clientConfig);
    this.regionNetworkEndpointGroups.detachNetworkEndpoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints', 'POST', apiParams, clientConfig);
    this.regionNetworkEndpointGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups', 'GET', apiParams, clientConfig);
    this.regionNetworkEndpointGroups.attachNetworkEndpoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints', 'POST', apiParams, clientConfig);
    this.regionNetworkEndpointGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}', 'GET', apiParams, clientConfig);

    this.licenseCodes = {};
    this.licenseCodes.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/licenseCodes/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.licenseCodes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/licenseCodes/{licenseCode}', 'GET', apiParams, clientConfig);

    this.diskSettings = {};
    this.diskSettings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/diskSettings', 'PATCH', apiParams, clientConfig);
    this.diskSettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/diskSettings', 'GET', apiParams, clientConfig);

    this.regionInstances = {};
    this.regionInstances.bulkInsert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instances/bulkInsert', 'POST', apiParams, clientConfig);

    this.reservations = {};
    this.reservations.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.reservations.resize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}/resize', 'POST', apiParams, clientConfig);
    this.reservations.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations', 'POST', apiParams, clientConfig);
    this.reservations.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}', 'PATCH', apiParams, clientConfig);
    this.reservations.performMaintenance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}/performMaintenance', 'POST', apiParams, clientConfig);
    this.reservations.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/reservations', 'GET', apiParams, clientConfig);
    this.reservations.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.reservations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations', 'GET', apiParams, clientConfig);
    this.reservations.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.reservations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}', 'DELETE', apiParams, clientConfig);
    this.reservations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}', 'GET', apiParams, clientConfig);

    this.nodeTemplates = {};
    this.nodeTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates/{nodeTemplate}', 'GET', apiParams, clientConfig);
    this.nodeTemplates.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.nodeTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates', 'GET', apiParams, clientConfig);
    this.nodeTemplates.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/nodeTemplates', 'GET', apiParams, clientConfig);
    this.nodeTemplates.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.nodeTemplates.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates', 'POST', apiParams, clientConfig);
    this.nodeTemplates.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.nodeTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates/{nodeTemplate}', 'DELETE', apiParams, clientConfig);

    this.targetInstances = {};
    this.targetInstances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/targetInstances/{targetInstance}', 'GET', apiParams, clientConfig);
    this.targetInstances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/targetInstances', 'GET', apiParams, clientConfig);
    this.targetInstances.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/targetInstances', 'GET', apiParams, clientConfig);
    this.targetInstances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/targetInstances/{targetInstance}', 'DELETE', apiParams, clientConfig);
    this.targetInstances.setSecurityPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/targetInstances/{targetInstance}/setSecurityPolicy', 'POST', apiParams, clientConfig);
    this.targetInstances.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/targetInstances', 'POST', apiParams, clientConfig);
    this.targetInstances.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/targetInstances/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);

    this.disks = {};
    this.disks.removeResourcePolicies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}/removeResourcePolicies', 'POST', apiParams, clientConfig);
    this.disks.stopGroupAsyncReplication = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/stopGroupAsyncReplication', 'POST', apiParams, clientConfig);
    this.disks.bulkSetLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/bulkSetLabels', 'POST', apiParams, clientConfig);
    this.disks.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.disks.addResourcePolicies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}/addResourcePolicies', 'POST', apiParams, clientConfig);
    this.disks.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/disks', 'GET', apiParams, clientConfig);
    this.disks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks', 'POST', apiParams, clientConfig);
    this.disks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}', 'PATCH', apiParams, clientConfig);
    this.disks.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.disks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}', 'GET', apiParams, clientConfig);
    this.disks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}', 'DELETE', apiParams, clientConfig);
    this.disks.resize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}/resize', 'POST', apiParams, clientConfig);
    this.disks.createSnapshot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}/createSnapshot', 'POST', apiParams, clientConfig);
    this.disks.startAsyncReplication = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}/startAsyncReplication', 'POST', apiParams, clientConfig);
    this.disks.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.disks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks', 'GET', apiParams, clientConfig);
    this.disks.bulkInsert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/bulkInsert', 'POST', apiParams, clientConfig);
    this.disks.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.disks.stopAsyncReplication = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}/stopAsyncReplication', 'POST', apiParams, clientConfig);

    this.autoscalers = {};
    this.autoscalers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers', 'PATCH', apiParams, clientConfig);
    this.autoscalers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers/{autoscaler}', 'DELETE', apiParams, clientConfig);
    this.autoscalers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers', 'GET', apiParams, clientConfig);
    this.autoscalers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers', 'PUT', apiParams, clientConfig);
    this.autoscalers.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/autoscalers', 'GET', apiParams, clientConfig);
    this.autoscalers.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.autoscalers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers/{autoscaler}', 'GET', apiParams, clientConfig);
    this.autoscalers.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers', 'POST', apiParams, clientConfig);

    this.targetHttpProxies = {};
    this.targetHttpProxies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpProxies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.targetHttpProxies.setUrlMap = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/targetHttpProxies/{targetHttpProxy}/setUrlMap', 'POST', apiParams, clientConfig);
    this.targetHttpProxies.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/targetHttpProxies', 'GET', apiParams, clientConfig);
    this.targetHttpProxies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpProxies/{targetHttpProxy}', 'PATCH', apiParams, clientConfig);
    this.targetHttpProxies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpProxies', 'POST', apiParams, clientConfig);
    this.targetHttpProxies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpProxies/{targetHttpProxy}', 'GET', apiParams, clientConfig);
    this.targetHttpProxies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpProxies', 'GET', apiParams, clientConfig);
    this.targetHttpProxies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpProxies/{targetHttpProxy}', 'DELETE', apiParams, clientConfig);

    this.interconnectAttachmentGroups = {};
    this.interconnectAttachmentGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}', 'DELETE', apiParams, clientConfig);
    this.interconnectAttachmentGroups.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.interconnectAttachmentGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}', 'GET', apiParams, clientConfig);
    this.interconnectAttachmentGroups.getOperationalStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}/getOperationalStatus', 'GET', apiParams, clientConfig);
    this.interconnectAttachmentGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups', 'GET', apiParams, clientConfig);
    this.interconnectAttachmentGroups.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.interconnectAttachmentGroups.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.interconnectAttachmentGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups', 'POST', apiParams, clientConfig);
    this.interconnectAttachmentGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}', 'PATCH', apiParams, clientConfig);

    this.zoneOperations = {};
    this.zoneOperations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/operations/{operation}', 'GET', apiParams, clientConfig);
    this.zoneOperations.wait = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/operations/{operation}/wait', 'POST', apiParams, clientConfig);
    this.zoneOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/operations', 'GET', apiParams, clientConfig);
    this.zoneOperations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/operations/{operation}', 'DELETE', apiParams, clientConfig);

    this.projects = {};
    this.projects.setCloudArmorTier = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/setCloudArmorTier', 'POST', apiParams, clientConfig);
    this.projects.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}', 'GET', apiParams, clientConfig);
    this.projects.moveDisk = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/moveDisk', 'POST', apiParams, clientConfig);
    this.projects.disableXpnHost = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/disableXpnHost', 'POST', apiParams, clientConfig);
    this.projects.setManagedProtectionTier = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/setManagedProtectionTier', 'POST', apiParams, clientConfig);
    this.projects.listXpnHosts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/listXpnHosts', 'POST', apiParams, clientConfig);
    this.projects.setDefaultNetworkTier = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/setDefaultNetworkTier', 'POST', apiParams, clientConfig);
    this.projects.enableXpnResource = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/enableXpnResource', 'POST', apiParams, clientConfig);
    this.projects.setUsageExportBucket = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/setUsageExportBucket', 'POST', apiParams, clientConfig);
    this.projects.getXpnHost = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/getXpnHost', 'GET', apiParams, clientConfig);
    this.projects.disableXpnResource = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/disableXpnResource', 'POST', apiParams, clientConfig);
    this.projects.getXpnResources = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/getXpnResources', 'GET', apiParams, clientConfig);
    this.projects.enableXpnHost = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/enableXpnHost', 'POST', apiParams, clientConfig);
    this.projects.moveInstance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/moveInstance', 'POST', apiParams, clientConfig);
    this.projects.setCommonInstanceMetadata = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/setCommonInstanceMetadata', 'POST', apiParams, clientConfig);

    this.globalVmExtensionPolicies = {};
    this.globalVmExtensionPolicies.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/vmExtensionPolicies', 'GET', apiParams, clientConfig);
    this.globalVmExtensionPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/vmExtensionPolicies/{globalVmExtensionPolicy}', 'GET', apiParams, clientConfig);
    this.globalVmExtensionPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/vmExtensionPolicies/{globalVmExtensionPolicy}/delete', 'POST', apiParams, clientConfig);
    this.globalVmExtensionPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/vmExtensionPolicies', 'POST', apiParams, clientConfig);
    this.globalVmExtensionPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/vmExtensionPolicies', 'GET', apiParams, clientConfig);
    this.globalVmExtensionPolicies.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/vmExtensionPolicies/{globalVmExtensionPolicy}', 'PATCH', apiParams, clientConfig);

    this.regionBackendBuckets = {};
    this.regionBackendBuckets.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendBuckets', 'POST', apiParams, clientConfig);
    this.regionBackendBuckets.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendBuckets/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.regionBackendBuckets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendBuckets/{backendBucket}', 'GET', apiParams, clientConfig);
    this.regionBackendBuckets.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendBuckets/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionBackendBuckets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendBuckets', 'GET', apiParams, clientConfig);
    this.regionBackendBuckets.listUsable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendBuckets/listUsable', 'GET', apiParams, clientConfig);
    this.regionBackendBuckets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendBuckets/{backendBucket}', 'PATCH', apiParams, clientConfig);
    this.regionBackendBuckets.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendBuckets/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.regionBackendBuckets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/backendBuckets/{backendBucket}', 'DELETE', apiParams, clientConfig);

    this.regionDisks = {};
    this.regionDisks.removeResourcePolicies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}/removeResourcePolicies', 'POST', apiParams, clientConfig);
    this.regionDisks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks', 'POST', apiParams, clientConfig);
    this.regionDisks.addResourcePolicies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}/addResourcePolicies', 'POST', apiParams, clientConfig);
    this.regionDisks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks', 'GET', apiParams, clientConfig);
    this.regionDisks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}', 'PATCH', apiParams, clientConfig);
    this.regionDisks.stopAsyncReplication = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}/stopAsyncReplication', 'POST', apiParams, clientConfig);
    this.regionDisks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}', 'DELETE', apiParams, clientConfig);
    this.regionDisks.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.regionDisks.createSnapshot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}/createSnapshot', 'POST', apiParams, clientConfig);
    this.regionDisks.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.regionDisks.startAsyncReplication = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}/startAsyncReplication', 'POST', apiParams, clientConfig);
    this.regionDisks.bulkInsert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/bulkInsert', 'POST', apiParams, clientConfig);
    this.regionDisks.stopGroupAsyncReplication = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/stopGroupAsyncReplication', 'POST', apiParams, clientConfig);
    this.regionDisks.resize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}/resize', 'POST', apiParams, clientConfig);
    this.regionDisks.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionDisks.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.regionDisks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}', 'GET', apiParams, clientConfig);

    this.storagePools = {};
    this.storagePools.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.storagePools.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/storagePools', 'GET', apiParams, clientConfig);
    this.storagePools.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/storagePools', 'POST', apiParams, clientConfig);
    this.storagePools.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{storagePool}', 'PATCH', apiParams, clientConfig);
    this.storagePools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{storagePool}', 'GET', apiParams, clientConfig);
    this.storagePools.listDisks = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{storagePool}/listDisks', 'GET', apiParams, clientConfig);
    this.storagePools.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.storagePools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{storagePool}', 'DELETE', apiParams, clientConfig);
    this.storagePools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/storagePools', 'GET', apiParams, clientConfig);
    this.storagePools.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);

    this.regionInstanceGroupManagerResizeRequests = {};
    this.regionInstanceGroupManagerResizeRequests.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}/cancel', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagerResizeRequests.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}', 'DELETE', apiParams, clientConfig);
    this.regionInstanceGroupManagerResizeRequests.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resizeRequests', 'POST', apiParams, clientConfig);
    this.regionInstanceGroupManagerResizeRequests.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resizeRequests', 'GET', apiParams, clientConfig);
    this.regionInstanceGroupManagerResizeRequests.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}', 'GET', apiParams, clientConfig);

    this.routers = {};
    this.routers.preview = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/preview', 'POST', apiParams, clientConfig);
    this.routers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}', 'PATCH', apiParams, clientConfig);
    this.routers.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/routers', 'GET', apiParams, clientConfig);
    this.routers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers', 'GET', apiParams, clientConfig);
    this.routers.listRoutePolicies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/listRoutePolicies', 'GET', apiParams, clientConfig);
    this.routers.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.routers.listBgpRoutes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/listBgpRoutes', 'GET', apiParams, clientConfig);
    this.routers.getNatMappingInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/getNatMappingInfo', 'GET', apiParams, clientConfig);
    this.routers.getNatIpInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/getNatIpInfo', 'GET', apiParams, clientConfig);
    this.routers.deleteRoutePolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/deleteRoutePolicy', 'POST', apiParams, clientConfig);
    this.routers.updateRoutePolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/updateRoutePolicy', 'POST', apiParams, clientConfig);
    this.routers.getRoutePolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/getRoutePolicy', 'GET', apiParams, clientConfig);
    this.routers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}', 'GET', apiParams, clientConfig);
    this.routers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}', 'DELETE', apiParams, clientConfig);
    this.routers.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers', 'POST', apiParams, clientConfig);
    this.routers.patchRoutePolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/patchRoutePolicy', 'POST', apiParams, clientConfig);
    this.routers.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}', 'PUT', apiParams, clientConfig);
    this.routers.getRouterStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/getRouterStatus', 'GET', apiParams, clientConfig);

    this.externalVpnGateways = {};
    this.externalVpnGateways.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/externalVpnGateways/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.externalVpnGateways.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/externalVpnGateways/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.externalVpnGateways.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/externalVpnGateways', 'POST', apiParams, clientConfig);
    this.externalVpnGateways.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/externalVpnGateways/{externalVpnGateway}', 'GET', apiParams, clientConfig);
    this.externalVpnGateways.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/externalVpnGateways', 'GET', apiParams, clientConfig);
    this.externalVpnGateways.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/externalVpnGateways/{externalVpnGateway}', 'DELETE', apiParams, clientConfig);

    this.targetHttpsProxies = {};
    this.targetHttpsProxies.setQuicOverride = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}/setQuicOverride', 'POST', apiParams, clientConfig);
    this.targetHttpsProxies.setSslPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}/setSslPolicy', 'POST', apiParams, clientConfig);
    this.targetHttpsProxies.setUrlMap = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setUrlMap', 'POST', apiParams, clientConfig);
    this.targetHttpsProxies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.targetHttpsProxies.setCertificateMap = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}/setCertificateMap', 'POST', apiParams, clientConfig);
    this.targetHttpsProxies.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/targetHttpsProxies', 'GET', apiParams, clientConfig);
    this.targetHttpsProxies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpsProxies', 'GET', apiParams, clientConfig);
    this.targetHttpsProxies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}', 'GET', apiParams, clientConfig);
    this.targetHttpsProxies.setSslCertificates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setSslCertificates', 'POST', apiParams, clientConfig);
    this.targetHttpsProxies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpsProxies', 'POST', apiParams, clientConfig);
    this.targetHttpsProxies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}', 'PATCH', apiParams, clientConfig);
    this.targetHttpsProxies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}', 'DELETE', apiParams, clientConfig);

    this.regionInstantSnapshots = {};
    this.regionInstantSnapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots/{instantSnapshot}', 'GET', apiParams, clientConfig);
    this.regionInstantSnapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots', 'GET', apiParams, clientConfig);
    this.regionInstantSnapshots.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots', 'POST', apiParams, clientConfig);
    this.regionInstantSnapshots.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots/{instantSnapshot}', 'DELETE', apiParams, clientConfig);
    this.regionInstantSnapshots.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.regionInstantSnapshots.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.regionInstantSnapshots.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionInstantSnapshots.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);

    this.instanceGroupManagerResizeRequests = {};
    this.instanceGroupManagerResizeRequests.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}/cancel', 'POST', apiParams, clientConfig);
    this.instanceGroupManagerResizeRequests.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests', 'GET', apiParams, clientConfig);
    this.instanceGroupManagerResizeRequests.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}', 'DELETE', apiParams, clientConfig);
    this.instanceGroupManagerResizeRequests.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests', 'POST', apiParams, clientConfig);
    this.instanceGroupManagerResizeRequests.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}', 'GET', apiParams, clientConfig);

    this.httpsHealthChecks = {};
    this.httpsHealthChecks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}', 'GET', apiParams, clientConfig);
    this.httpsHealthChecks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpsHealthChecks', 'POST', apiParams, clientConfig);
    this.httpsHealthChecks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}', 'PATCH', apiParams, clientConfig);
    this.httpsHealthChecks.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpsHealthChecks/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.httpsHealthChecks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}', 'PUT', apiParams, clientConfig);
    this.httpsHealthChecks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}', 'DELETE', apiParams, clientConfig);
    this.httpsHealthChecks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/httpsHealthChecks', 'GET', apiParams, clientConfig);

    this.images = {};
    this.images.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/images/{image}', 'GET', apiParams, clientConfig);
    this.images.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/images/{image}', 'PATCH', apiParams, clientConfig);
    this.images.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/images', 'POST', apiParams, clientConfig);
    this.images.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/images/{image}', 'DELETE', apiParams, clientConfig);
    this.images.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/images', 'GET', apiParams, clientConfig);
    this.images.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/images/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.images.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/images/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.images.deprecate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/images/{image}/deprecate', 'POST', apiParams, clientConfig);
    this.images.getFromFamily = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/images/family/{family}', 'GET', apiParams, clientConfig);
    this.images.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/images/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.images.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/images/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);

    this.interconnectAttachments = {};
    this.interconnectAttachments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}', 'DELETE', apiParams, clientConfig);
    this.interconnectAttachments.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/interconnectAttachments', 'GET', apiParams, clientConfig);
    this.interconnectAttachments.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments', 'POST', apiParams, clientConfig);
    this.interconnectAttachments.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.interconnectAttachments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}', 'GET', apiParams, clientConfig);
    this.interconnectAttachments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments', 'GET', apiParams, clientConfig);
    this.interconnectAttachments.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.interconnectAttachments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}', 'PATCH', apiParams, clientConfig);

    this.resourcePolicies = {};
    this.resourcePolicies.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.resourcePolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies/{resourcePolicy}', 'PATCH', apiParams, clientConfig);
    this.resourcePolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies', 'POST', apiParams, clientConfig);
    this.resourcePolicies.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/resourcePolicies', 'GET', apiParams, clientConfig);
    this.resourcePolicies.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.resourcePolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.resourcePolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies', 'GET', apiParams, clientConfig);
    this.resourcePolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies/{resourcePolicy}', 'DELETE', apiParams, clientConfig);
    this.resourcePolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies/{resourcePolicy}', 'GET', apiParams, clientConfig);

    this.rollouts = {};
    this.rollouts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/rollouts', 'GET', apiParams, clientConfig);
    this.rollouts.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/rollouts/{rollout}', 'PATCH', apiParams, clientConfig);
    this.rollouts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/rollouts/{rollout}', 'DELETE', apiParams, clientConfig);
    this.rollouts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/rollouts/{rollout}', 'GET', apiParams, clientConfig);

    this.publicDelegatedPrefixes = {};
    this.publicDelegatedPrefixes.announce = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}/announce', 'POST', apiParams, clientConfig);
    this.publicDelegatedPrefixes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}', 'GET', apiParams, clientConfig);
    this.publicDelegatedPrefixes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}', 'DELETE', apiParams, clientConfig);
    this.publicDelegatedPrefixes.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/publicDelegatedPrefixes', 'GET', apiParams, clientConfig);
    this.publicDelegatedPrefixes.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes', 'POST', apiParams, clientConfig);
    this.publicDelegatedPrefixes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}', 'PATCH', apiParams, clientConfig);
    this.publicDelegatedPrefixes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes', 'GET', apiParams, clientConfig);
    this.publicDelegatedPrefixes.withdraw = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}/withdraw', 'POST', apiParams, clientConfig);

    this.targetGrpcProxies = {};
    this.targetGrpcProxies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetGrpcProxies', 'POST', apiParams, clientConfig);
    this.targetGrpcProxies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetGrpcProxies', 'GET', apiParams, clientConfig);
    this.targetGrpcProxies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetGrpcProxies/{targetGrpcProxy}', 'GET', apiParams, clientConfig);
    this.targetGrpcProxies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetGrpcProxies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.targetGrpcProxies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetGrpcProxies/{targetGrpcProxy}', 'PATCH', apiParams, clientConfig);
    this.targetGrpcProxies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetGrpcProxies/{targetGrpcProxy}', 'DELETE', apiParams, clientConfig);

    this.regionHealthCheckServices = {};
    this.regionHealthCheckServices.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthCheckServices/{healthCheckService}', 'DELETE', apiParams, clientConfig);
    this.regionHealthCheckServices.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthCheckServices/{healthCheckService}', 'PATCH', apiParams, clientConfig);
    this.regionHealthCheckServices.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthCheckServices/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionHealthCheckServices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthCheckServices/{healthCheckService}', 'GET', apiParams, clientConfig);
    this.regionHealthCheckServices.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthCheckServices', 'POST', apiParams, clientConfig);
    this.regionHealthCheckServices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthCheckServices', 'GET', apiParams, clientConfig);

    this.nodeGroups = {};
    this.nodeGroups.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/nodeGroups', 'GET', apiParams, clientConfig);
    this.nodeGroups.simulateMaintenanceEvent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/simulateMaintenanceEvent', 'POST', apiParams, clientConfig);
    this.nodeGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}', 'GET', apiParams, clientConfig);
    this.nodeGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups', 'POST', apiParams, clientConfig);
    this.nodeGroups.addNodes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/addNodes', 'POST', apiParams, clientConfig);
    this.nodeGroups.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.nodeGroups.setNodeTemplate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/setNodeTemplate', 'POST', apiParams, clientConfig);
    this.nodeGroups.listNodes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/listNodes', 'POST', apiParams, clientConfig);
    this.nodeGroups.deleteNodes = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/deleteNodes', 'POST', apiParams, clientConfig);
    this.nodeGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}', 'PATCH', apiParams, clientConfig);
    this.nodeGroups.performMaintenance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/performMaintenance', 'POST', apiParams, clientConfig);
    this.nodeGroups.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.nodeGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}', 'DELETE', apiParams, clientConfig);
    this.nodeGroups.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.nodeGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups', 'GET', apiParams, clientConfig);

    this.interconnectRemoteLocations = {};
    this.interconnectRemoteLocations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectRemoteLocations/{interconnectRemoteLocation}', 'GET', apiParams, clientConfig);
    this.interconnectRemoteLocations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectRemoteLocations', 'GET', apiParams, clientConfig);

    this.networkEndpointGroups = {};
    this.networkEndpointGroups.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/networkEndpointGroups', 'GET', apiParams, clientConfig);
    this.networkEndpointGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups', 'GET', apiParams, clientConfig);
    this.networkEndpointGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}', 'GET', apiParams, clientConfig);
    this.networkEndpointGroups.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.networkEndpointGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups', 'POST', apiParams, clientConfig);
    this.networkEndpointGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}', 'DELETE', apiParams, clientConfig);
    this.networkEndpointGroups.detachNetworkEndpoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints', 'POST', apiParams, clientConfig);
    this.networkEndpointGroups.attachNetworkEndpoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints', 'POST', apiParams, clientConfig);
    this.networkEndpointGroups.listNetworkEndpoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints', 'POST', apiParams, clientConfig);

    this.vpnGateways = {};
    this.vpnGateways.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.vpnGateways.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways/{vpnGateway}', 'GET', apiParams, clientConfig);
    this.vpnGateways.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.vpnGateways.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways', 'GET', apiParams, clientConfig);
    this.vpnGateways.getStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways/{vpnGateway}/getStatus', 'GET', apiParams, clientConfig);
    this.vpnGateways.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways/{vpnGateway}', 'DELETE', apiParams, clientConfig);
    this.vpnGateways.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways', 'POST', apiParams, clientConfig);
    this.vpnGateways.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/vpnGateways', 'GET', apiParams, clientConfig);

    this.backendServices = {};
    this.backendServices.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/backendServices', 'GET', apiParams, clientConfig);
    this.backendServices.deleteSignedUrlKey = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{backendService}/deleteSignedUrlKey', 'POST', apiParams, clientConfig);
    this.backendServices.addSignedUrlKey = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{backendService}/addSignedUrlKey', 'POST', apiParams, clientConfig);
    this.backendServices.listUsable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/listUsable', 'GET', apiParams, clientConfig);
    this.backendServices.setEdgeSecurityPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{backendService}/setEdgeSecurityPolicy', 'POST', apiParams, clientConfig);
    this.backendServices.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.backendServices.getHealth = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{backendService}/getHealth', 'POST', apiParams, clientConfig);
    this.backendServices.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices', 'GET', apiParams, clientConfig);
    this.backendServices.setSecurityPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{backendService}/setSecurityPolicy', 'POST', apiParams, clientConfig);
    this.backendServices.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.backendServices.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{backendService}', 'PUT', apiParams, clientConfig);
    this.backendServices.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices', 'POST', apiParams, clientConfig);
    this.backendServices.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{backendService}', 'GET', apiParams, clientConfig);
    this.backendServices.getEffectiveSecurityPolicies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{backendService}/getEffectiveSecurityPolicies', 'GET', apiParams, clientConfig);
    this.backendServices.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{backendService}', 'DELETE', apiParams, clientConfig);
    this.backendServices.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.backendServices.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/backendServices/{backendService}', 'PATCH', apiParams, clientConfig);

    this.regionSslPolicies = {};
    this.regionSslPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies/{sslPolicy}', 'DELETE', apiParams, clientConfig);
    this.regionSslPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionSslPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies', 'GET', apiParams, clientConfig);
    this.regionSslPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies', 'POST', apiParams, clientConfig);
    this.regionSslPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies/{sslPolicy}', 'GET', apiParams, clientConfig);
    this.regionSslPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies/{sslPolicy}', 'PATCH', apiParams, clientConfig);
    this.regionSslPolicies.listAvailableFeatures = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies/listAvailableFeatures', 'GET', apiParams, clientConfig);

    this.regionTargetHttpProxies = {};
    this.regionTargetHttpProxies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpProxies/{targetHttpProxy}', 'DELETE', apiParams, clientConfig);
    this.regionTargetHttpProxies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpProxies', 'GET', apiParams, clientConfig);
    this.regionTargetHttpProxies.setUrlMap = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpProxies/{targetHttpProxy}/setUrlMap', 'POST', apiParams, clientConfig);
    this.regionTargetHttpProxies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpProxies/{targetHttpProxy}', 'GET', apiParams, clientConfig);
    this.regionTargetHttpProxies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpProxies', 'POST', apiParams, clientConfig);
    this.regionTargetHttpProxies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpProxies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);

    this.regionTargetHttpsProxies = {};
    this.regionTargetHttpsProxies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}', 'DELETE', apiParams, clientConfig);
    this.regionTargetHttpsProxies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionTargetHttpsProxies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}', 'GET', apiParams, clientConfig);
    this.regionTargetHttpsProxies.setUrlMap = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}/setUrlMap', 'POST', apiParams, clientConfig);
    this.regionTargetHttpsProxies.setSslCertificates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}/setSslCertificates', 'POST', apiParams, clientConfig);
    this.regionTargetHttpsProxies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}', 'PATCH', apiParams, clientConfig);
    this.regionTargetHttpsProxies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies', 'GET', apiParams, clientConfig);
    this.regionTargetHttpsProxies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies', 'POST', apiParams, clientConfig);

    this.instantSnapshots = {};
    this.instantSnapshots.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.instantSnapshots.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots', 'POST', apiParams, clientConfig);
    this.instantSnapshots.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.instantSnapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots/{instantSnapshot}', 'GET', apiParams, clientConfig);
    this.instantSnapshots.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.instantSnapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots', 'GET', apiParams, clientConfig);
    this.instantSnapshots.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.instantSnapshots.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/instantSnapshots', 'GET', apiParams, clientConfig);
    this.instantSnapshots.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots/{instantSnapshot}', 'DELETE', apiParams, clientConfig);

    this.regionHealthAggregationPolicies = {};
    this.regionHealthAggregationPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthAggregationPolicies/{healthAggregationPolicy}', 'DELETE', apiParams, clientConfig);
    this.regionHealthAggregationPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthAggregationPolicies', 'GET', apiParams, clientConfig);
    this.regionHealthAggregationPolicies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthAggregationPolicies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionHealthAggregationPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthAggregationPolicies', 'POST', apiParams, clientConfig);
    this.regionHealthAggregationPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthAggregationPolicies/{healthAggregationPolicy}', 'PATCH', apiParams, clientConfig);
    this.regionHealthAggregationPolicies.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/healthAggregationPolicies', 'GET', apiParams, clientConfig);
    this.regionHealthAggregationPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/healthAggregationPolicies/{healthAggregationPolicy}', 'GET', apiParams, clientConfig);

    this.regions = {};
    this.regions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}', 'GET', apiParams, clientConfig);
    this.regions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions', 'GET', apiParams, clientConfig);

    this.interconnectGroups = {};
    this.interconnectGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectGroups/{interconnectGroup}', 'DELETE', apiParams, clientConfig);
    this.interconnectGroups.getOperationalStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectGroups/{interconnectGroup}/getOperationalStatus', 'GET', apiParams, clientConfig);
    this.interconnectGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectGroups/{interconnectGroup}', 'PATCH', apiParams, clientConfig);
    this.interconnectGroups.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectGroups/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.interconnectGroups.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectGroups/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.interconnectGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectGroups', 'POST', apiParams, clientConfig);
    this.interconnectGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectGroups', 'GET', apiParams, clientConfig);
    this.interconnectGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectGroups/{interconnectGroup}', 'GET', apiParams, clientConfig);
    this.interconnectGroups.createMembers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectGroups/{interconnectGroup}/createMembers', 'POST', apiParams, clientConfig);
    this.interconnectGroups.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnectGroups/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);

    this.regionNetworkPolicies = {};
    this.regionNetworkPolicies.getTrafficClassificationRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkPolicies/{networkPolicy}/getTrafficClassificationRule', 'GET', apiParams, clientConfig);
    this.regionNetworkPolicies.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/networkPolicies', 'GET', apiParams, clientConfig);
    this.regionNetworkPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkPolicies', 'POST', apiParams, clientConfig);
    this.regionNetworkPolicies.addTrafficClassificationRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkPolicies/{networkPolicy}/addTrafficClassificationRule', 'POST', apiParams, clientConfig);
    this.regionNetworkPolicies.removeAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkPolicies/{networkPolicy}/removeAssociation', 'POST', apiParams, clientConfig);
    this.regionNetworkPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkPolicies/{networkPolicy}', 'PATCH', apiParams, clientConfig);
    this.regionNetworkPolicies.removeTrafficClassificationRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkPolicies/{networkPolicy}/removeTrafficClassificationRule', 'POST', apiParams, clientConfig);
    this.regionNetworkPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkPolicies', 'GET', apiParams, clientConfig);
    this.regionNetworkPolicies.getAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkPolicies/{networkPolicy}/getAssociation', 'GET', apiParams, clientConfig);
    this.regionNetworkPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkPolicies/{networkPolicy}', 'DELETE', apiParams, clientConfig);
    this.regionNetworkPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkPolicies/{networkPolicy}', 'GET', apiParams, clientConfig);
    this.regionNetworkPolicies.addAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkPolicies/{networkPolicy}/addAssociation', 'POST', apiParams, clientConfig);
    this.regionNetworkPolicies.patchTrafficClassificationRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/networkPolicies/{networkPolicy}/patchTrafficClassificationRule', 'POST', apiParams, clientConfig);

    this.instanceGroups = {};
    this.instanceGroups.setNamedPorts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/setNamedPorts', 'POST', apiParams, clientConfig);
    this.instanceGroups.removeInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/removeInstances', 'POST', apiParams, clientConfig);
    this.instanceGroups.listInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/listInstances', 'POST', apiParams, clientConfig);
    this.instanceGroups.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.instanceGroups.addInstances = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/addInstances', 'POST', apiParams, clientConfig);
    this.instanceGroups.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/instanceGroups', 'GET', apiParams, clientConfig);
    this.instanceGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups', 'GET', apiParams, clientConfig);
    this.instanceGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}', 'DELETE', apiParams, clientConfig);
    this.instanceGroups.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups', 'POST', apiParams, clientConfig);
    this.instanceGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}', 'GET', apiParams, clientConfig);

    this.regionSnapshotSettings = {};
    this.regionSnapshotSettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/snapshotSettings', 'GET', apiParams, clientConfig);
    this.regionSnapshotSettings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/snapshotSettings', 'PATCH', apiParams, clientConfig);

    this.diskTypes = {};
    this.diskTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/diskTypes', 'GET', apiParams, clientConfig);
    this.diskTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/diskTypes/{diskType}', 'GET', apiParams, clientConfig);
    this.diskTypes.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/diskTypes', 'GET', apiParams, clientConfig);

    this.healthChecks = {};
    this.healthChecks.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/healthChecks/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.healthChecks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/healthChecks', 'GET', apiParams, clientConfig);
    this.healthChecks.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/healthChecks', 'GET', apiParams, clientConfig);
    this.healthChecks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/healthChecks/{healthCheck}', 'GET', apiParams, clientConfig);
    this.healthChecks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/healthChecks', 'POST', apiParams, clientConfig);
    this.healthChecks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/healthChecks/{healthCheck}', 'DELETE', apiParams, clientConfig);
    this.healthChecks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/healthChecks/{healthCheck}', 'PATCH', apiParams, clientConfig);
    this.healthChecks.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/healthChecks/{healthCheck}', 'PUT', apiParams, clientConfig);

    this.regionMultiMigs = {};
    this.regionMultiMigs.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/multiMigs', 'POST', apiParams, clientConfig);
    this.regionMultiMigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/multiMigs/{multiMig}', 'DELETE', apiParams, clientConfig);
    this.regionMultiMigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/multiMigs/{multiMig}', 'GET', apiParams, clientConfig);
    this.regionMultiMigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/multiMigs', 'GET', apiParams, clientConfig);

    this.organizationSecurityPolicies = {};
    this.organizationSecurityPolicies.copyRules = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/{securityPolicy}/copyRules', 'POST', apiParams, clientConfig);
    this.organizationSecurityPolicies.removeAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/{securityPolicy}/removeAssociation', 'POST', apiParams, clientConfig);
    this.organizationSecurityPolicies.listPreconfiguredExpressionSets = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/listPreconfiguredExpressionSets', 'GET', apiParams, clientConfig);
    this.organizationSecurityPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/{securityPolicy}', 'GET', apiParams, clientConfig);
    this.organizationSecurityPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/{securityPolicy}', 'DELETE', apiParams, clientConfig);
    this.organizationSecurityPolicies.addRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/{securityPolicy}/addRule', 'POST', apiParams, clientConfig);
    this.organizationSecurityPolicies.patchRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/{securityPolicy}/patchRule', 'POST', apiParams, clientConfig);
    this.organizationSecurityPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies', 'GET', apiParams, clientConfig);
    this.organizationSecurityPolicies.getAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/{securityPolicy}/getAssociation', 'GET', apiParams, clientConfig);
    this.organizationSecurityPolicies.removeRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/{securityPolicy}/removeRule', 'POST', apiParams, clientConfig);
    this.organizationSecurityPolicies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies', 'POST', apiParams, clientConfig);
    this.organizationSecurityPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/{securityPolicy}', 'PATCH', apiParams, clientConfig);
    this.organizationSecurityPolicies.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/{securityPolicy}/move', 'POST', apiParams, clientConfig);
    this.organizationSecurityPolicies.addAssociation = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/{securityPolicy}/addAssociation', 'POST', apiParams, clientConfig);
    this.organizationSecurityPolicies.getRule = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/{securityPolicy}/getRule', 'GET', apiParams, clientConfig);
    this.organizationSecurityPolicies.listAssociations = async (apiParams = {}, clientConfig = {}) => this._makeRequest('locations/global/securityPolicies/listAssociations', 'GET', apiParams, clientConfig);

    this.interconnects = {};
    this.interconnects.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnects/{interconnect}', 'PATCH', apiParams, clientConfig);
    this.interconnects.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnects/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.interconnects.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnects/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.interconnects.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnects', 'POST', apiParams, clientConfig);
    this.interconnects.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnects/{interconnect}', 'DELETE', apiParams, clientConfig);
    this.interconnects.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnects/{interconnect}', 'GET', apiParams, clientConfig);
    this.interconnects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnects', 'GET', apiParams, clientConfig);
    this.interconnects.getDiagnostics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnects/{interconnect}/getDiagnostics', 'GET', apiParams, clientConfig);
    this.interconnects.getMacsecConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/interconnects/{interconnect}/getMacsecConfig', 'GET', apiParams, clientConfig);

    this.regionSnapshots = {};
    this.regionSnapshots.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/snapshots/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.regionSnapshots.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/snapshots/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.regionSnapshots.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/snapshots', 'POST', apiParams, clientConfig);
    this.regionSnapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/snapshots', 'GET', apiParams, clientConfig);
    this.regionSnapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/snapshots/{snapshot}', 'GET', apiParams, clientConfig);
    this.regionSnapshots.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/snapshots/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.regionSnapshots.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/snapshots/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionSnapshots.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/snapshots/{snapshot}', 'DELETE', apiParams, clientConfig);

    this.packetMirrorings = {};
    this.packetMirrorings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/packetMirrorings/{packetMirroring}', 'DELETE', apiParams, clientConfig);
    this.packetMirrorings.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/packetMirrorings/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.packetMirrorings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/packetMirrorings/{packetMirroring}', 'GET', apiParams, clientConfig);
    this.packetMirrorings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/packetMirrorings', 'GET', apiParams, clientConfig);
    this.packetMirrorings.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/packetMirrorings', 'GET', apiParams, clientConfig);
    this.packetMirrorings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/packetMirrorings/{packetMirroring}', 'PATCH', apiParams, clientConfig);
    this.packetMirrorings.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/packetMirrorings', 'POST', apiParams, clientConfig);

    this.targetVpnGateways = {};
    this.targetVpnGateways.setLabels = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetVpnGateways/{resource}/setLabels', 'POST', apiParams, clientConfig);
    this.targetVpnGateways.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}', 'DELETE', apiParams, clientConfig);
    this.targetVpnGateways.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetVpnGateways/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.targetVpnGateways.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}', 'GET', apiParams, clientConfig);
    this.targetVpnGateways.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetVpnGateways', 'GET', apiParams, clientConfig);
    this.targetVpnGateways.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/targetVpnGateways', 'GET', apiParams, clientConfig);
    this.targetVpnGateways.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetVpnGateways', 'POST', apiParams, clientConfig);

    this.regionCompositeHealthChecks = {};
    this.regionCompositeHealthChecks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/compositeHealthChecks', 'POST', apiParams, clientConfig);
    this.regionCompositeHealthChecks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/compositeHealthChecks/{compositeHealthCheck}', 'GET', apiParams, clientConfig);
    this.regionCompositeHealthChecks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/compositeHealthChecks', 'GET', apiParams, clientConfig);
    this.regionCompositeHealthChecks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/compositeHealthChecks/{compositeHealthCheck}', 'PATCH', apiParams, clientConfig);
    this.regionCompositeHealthChecks.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/compositeHealthChecks', 'GET', apiParams, clientConfig);
    this.regionCompositeHealthChecks.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/compositeHealthChecks/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionCompositeHealthChecks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/compositeHealthChecks/{compositeHealthCheck}', 'DELETE', apiParams, clientConfig);

    this.sslCertificates = {};
    this.sslCertificates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/sslCertificates/{sslCertificate}', 'DELETE', apiParams, clientConfig);
    this.sslCertificates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/sslCertificates/{sslCertificate}', 'GET', apiParams, clientConfig);
    this.sslCertificates.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/sslCertificates/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.sslCertificates.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/sslCertificates', 'GET', apiParams, clientConfig);
    this.sslCertificates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/sslCertificates', 'GET', apiParams, clientConfig);
    this.sslCertificates.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/sslCertificates', 'POST', apiParams, clientConfig);

    this.instanceSettings = {};
    this.instanceSettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceSettings', 'GET', apiParams, clientConfig);
    this.instanceSettings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/instanceSettings', 'PATCH', apiParams, clientConfig);

    this.subnetworks = {};
    this.subnetworks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{subnetwork}', 'DELETE', apiParams, clientConfig);
    this.subnetworks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{subnetwork}', 'GET', apiParams, clientConfig);
    this.subnetworks.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/subnetworks', 'POST', apiParams, clientConfig);
    this.subnetworks.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);
    this.subnetworks.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.subnetworks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{subnetwork}', 'PATCH', apiParams, clientConfig);
    this.subnetworks.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/subnetworks', 'GET', apiParams, clientConfig);
    this.subnetworks.expandIpCidrRange = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{subnetwork}/expandIpCidrRange', 'POST', apiParams, clientConfig);
    this.subnetworks.setPrivateIpGoogleAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{subnetwork}/setPrivateIpGoogleAccess', 'POST', apiParams, clientConfig);
    this.subnetworks.listUsable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/subnetworks/listUsable', 'GET', apiParams, clientConfig);
    this.subnetworks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/subnetworks', 'GET', apiParams, clientConfig);
    this.subnetworks.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);

    this.reservationBlocks = {};
    this.reservationBlocks.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{parentResource}/reservationBlocks/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.reservationBlocks.performMaintenance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}/reservationBlocks/{reservationBlock}/performMaintenance', 'POST', apiParams, clientConfig);
    this.reservationBlocks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}/reservationBlocks', 'GET', apiParams, clientConfig);
    this.reservationBlocks.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{parentResource}/reservationBlocks/{resource}/getIamPolicy', 'GET', apiParams, clientConfig);
    this.reservationBlocks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}/reservationBlocks/{reservationBlock}', 'GET', apiParams, clientConfig);
    this.reservationBlocks.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{parentResource}/reservationBlocks/{resource}/setIamPolicy', 'POST', apiParams, clientConfig);

    this.targetTcpProxies = {};
    this.targetTcpProxies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetTcpProxies/{targetTcpProxy}', 'GET', apiParams, clientConfig);
    this.targetTcpProxies.aggregatedList = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/aggregated/targetTcpProxies', 'GET', apiParams, clientConfig);
    this.targetTcpProxies.setProxyHeader = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetTcpProxies/{targetTcpProxy}/setProxyHeader', 'POST', apiParams, clientConfig);
    this.targetTcpProxies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetTcpProxies/{targetTcpProxy}', 'DELETE', apiParams, clientConfig);
    this.targetTcpProxies.setBackendService = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetTcpProxies/{targetTcpProxy}/setBackendService', 'POST', apiParams, clientConfig);
    this.targetTcpProxies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetTcpProxies', 'GET', apiParams, clientConfig);
    this.targetTcpProxies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetTcpProxies', 'POST', apiParams, clientConfig);
    this.targetTcpProxies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/global/targetTcpProxies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);

    this.regionTargetTcpProxies = {};
    this.regionTargetTcpProxies.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetTcpProxies', 'POST', apiParams, clientConfig);
    this.regionTargetTcpProxies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetTcpProxies/{targetTcpProxy}', 'GET', apiParams, clientConfig);
    this.regionTargetTcpProxies.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetTcpProxies/{resource}/testIamPermissions', 'POST', apiParams, clientConfig);
    this.regionTargetTcpProxies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetTcpProxies', 'GET', apiParams, clientConfig);
    this.regionTargetTcpProxies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/regions/{region}/targetTcpProxies/{targetTcpProxy}', 'DELETE', apiParams, clientConfig);

    this.zones = {};
    this.zones.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones', 'GET', apiParams, clientConfig);
    this.zones.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{project}/zones/{zone}', 'GET', apiParams, clientConfig);
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
