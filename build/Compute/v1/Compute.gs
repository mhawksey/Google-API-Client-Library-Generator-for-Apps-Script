
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://compute.googleapis.com/';
    this._servicePath = 'compute/v1/';

    // --- Public Interface Initialization ---

    this.globalOperations = {};
    this.globalOperations.list = (params) => this._makeRequest('projects/{project}/global/operations', 'GET', params);
    this.globalOperations.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/operations', 'GET', params);
    this.globalOperations.get = (params) => this._makeRequest('projects/{project}/global/operations/{operation}', 'GET', params);
    this.globalOperations.wait = (params) => this._makeRequest('projects/{project}/global/operations/{operation}/wait', 'POST', params);
    this.globalOperations.delete = (params) => this._makeRequest('projects/{project}/global/operations/{operation}', 'DELETE', params);

    this.globalOrganizationOperations = {};
    this.globalOrganizationOperations.list = (params) => this._makeRequest('locations/global/operations', 'GET', params);
    this.globalOrganizationOperations.get = (params) => this._makeRequest('locations/global/operations/{operation}', 'GET', params);
    this.globalOrganizationOperations.delete = (params) => this._makeRequest('locations/global/operations/{operation}', 'DELETE', params);

    this.zoneOperations = {};
    this.zoneOperations.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/operations', 'GET', params);
    this.zoneOperations.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/operations/{operation}', 'GET', params);
    this.zoneOperations.wait = (params) => this._makeRequest('projects/{project}/zones/{zone}/operations/{operation}/wait', 'POST', params);
    this.zoneOperations.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/operations/{operation}', 'DELETE', params);

    this.regionOperations = {};
    this.regionOperations.list = (params) => this._makeRequest('projects/{project}/regions/{region}/operations', 'GET', params);
    this.regionOperations.get = (params) => this._makeRequest('projects/{project}/regions/{region}/operations/{operation}', 'GET', params);
    this.regionOperations.wait = (params) => this._makeRequest('projects/{project}/regions/{region}/operations/{operation}/wait', 'POST', params);
    this.regionOperations.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/operations/{operation}', 'DELETE', params);

    this.acceleratorTypes = {};
    this.acceleratorTypes.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/acceleratorTypes', 'GET', params);
    this.acceleratorTypes.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/acceleratorTypes', 'GET', params);
    this.acceleratorTypes.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/acceleratorTypes/{acceleratorType}', 'GET', params);

    this.globalAddresses = {};
    this.globalAddresses.list = (params) => this._makeRequest('projects/{project}/global/addresses', 'GET', params);
    this.globalAddresses.get = (params) => this._makeRequest('projects/{project}/global/addresses/{address}', 'GET', params);
    this.globalAddresses.insert = (params) => this._makeRequest('projects/{project}/global/addresses', 'POST', params);
    this.globalAddresses.delete = (params) => this._makeRequest('projects/{project}/global/addresses/{address}', 'DELETE', params);
    this.globalAddresses.move = (params) => this._makeRequest('projects/{project}/global/addresses/{address}/move', 'POST', params);
    this.globalAddresses.setLabels = (params) => this._makeRequest('projects/{project}/global/addresses/{resource}/setLabels', 'POST', params);

    this.addresses = {};
    this.addresses.list = (params) => this._makeRequest('projects/{project}/regions/{region}/addresses', 'GET', params);
    this.addresses.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/addresses', 'GET', params);
    this.addresses.get = (params) => this._makeRequest('projects/{project}/regions/{region}/addresses/{address}', 'GET', params);
    this.addresses.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/addresses', 'POST', params);
    this.addresses.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/addresses/{address}', 'DELETE', params);
    this.addresses.move = (params) => this._makeRequest('projects/{project}/regions/{region}/addresses/{address}/move', 'POST', params);
    this.addresses.setLabels = (params) => this._makeRequest('projects/{project}/regions/{region}/addresses/{resource}/setLabels', 'POST', params);

    this.images = {};
    this.images.list = (params) => this._makeRequest('projects/{project}/global/images', 'GET', params);
    this.images.get = (params) => this._makeRequest('projects/{project}/global/images/{image}', 'GET', params);
    this.images.getFromFamily = (params) => this._makeRequest('projects/{project}/global/images/family/{family}', 'GET', params);
    this.images.insert = (params) => this._makeRequest('projects/{project}/global/images', 'POST', params);
    this.images.setLabels = (params) => this._makeRequest('projects/{project}/global/images/{resource}/setLabels', 'POST', params);
    this.images.delete = (params) => this._makeRequest('projects/{project}/global/images/{image}', 'DELETE', params);
    this.images.deprecate = (params) => this._makeRequest('projects/{project}/global/images/{image}/deprecate', 'POST', params);
    this.images.getIamPolicy = (params) => this._makeRequest('projects/{project}/global/images/{resource}/getIamPolicy', 'GET', params);
    this.images.patch = (params) => this._makeRequest('projects/{project}/global/images/{image}', 'PATCH', params);
    this.images.setIamPolicy = (params) => this._makeRequest('projects/{project}/global/images/{resource}/setIamPolicy', 'POST', params);
    this.images.testIamPermissions = (params) => this._makeRequest('projects/{project}/global/images/{resource}/testIamPermissions', 'POST', params);

    this.imageFamilyViews = {};
    this.imageFamilyViews.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/imageFamilyViews/{family}', 'GET', params);

    this.snapshots = {};
    this.snapshots.list = (params) => this._makeRequest('projects/{project}/global/snapshots', 'GET', params);
    this.snapshots.get = (params) => this._makeRequest('projects/{project}/global/snapshots/{snapshot}', 'GET', params);
    this.snapshots.insert = (params) => this._makeRequest('projects/{project}/global/snapshots', 'POST', params);
    this.snapshots.setLabels = (params) => this._makeRequest('projects/{project}/global/snapshots/{resource}/setLabels', 'POST', params);
    this.snapshots.delete = (params) => this._makeRequest('projects/{project}/global/snapshots/{snapshot}', 'DELETE', params);
    this.snapshots.getIamPolicy = (params) => this._makeRequest('projects/{project}/global/snapshots/{resource}/getIamPolicy', 'GET', params);
    this.snapshots.setIamPolicy = (params) => this._makeRequest('projects/{project}/global/snapshots/{resource}/setIamPolicy', 'POST', params);
    this.snapshots.testIamPermissions = (params) => this._makeRequest('projects/{project}/global/snapshots/{resource}/testIamPermissions', 'POST', params);

    this.disks = {};
    this.disks.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks', 'GET', params);
    this.disks.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/disks', 'GET', params);
    this.disks.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}', 'GET', params);
    this.disks.insert = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks', 'POST', params);
    this.disks.setLabels = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{resource}/setLabels', 'POST', params);
    this.disks.bulkSetLabels = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/bulkSetLabels', 'POST', params);
    this.disks.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}', 'DELETE', params);
    this.disks.createSnapshot = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}/createSnapshot', 'POST', params);
    this.disks.resize = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}/resize', 'POST', params);
    this.disks.addResourcePolicies = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}/addResourcePolicies', 'POST', params);
    this.disks.removeResourcePolicies = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}/removeResourcePolicies', 'POST', params);
    this.disks.getIamPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{resource}/getIamPolicy', 'GET', params);
    this.disks.setIamPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{resource}/setIamPolicy', 'POST', params);
    this.disks.testIamPermissions = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{resource}/testIamPermissions', 'POST', params);
    this.disks.update = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}', 'PATCH', params);
    this.disks.startAsyncReplication = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}/startAsyncReplication', 'POST', params);
    this.disks.stopAsyncReplication = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/{disk}/stopAsyncReplication', 'POST', params);
    this.disks.stopGroupAsyncReplication = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/stopGroupAsyncReplication', 'POST', params);
    this.disks.bulkInsert = (params) => this._makeRequest('projects/{project}/zones/{zone}/disks/bulkInsert', 'POST', params);

    this.regionDisks = {};
    this.regionDisks.list = (params) => this._makeRequest('projects/{project}/regions/{region}/disks', 'GET', params);
    this.regionDisks.get = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}', 'GET', params);
    this.regionDisks.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/disks', 'POST', params);
    this.regionDisks.setLabels = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{resource}/setLabels', 'POST', params);
    this.regionDisks.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}', 'DELETE', params);
    this.regionDisks.createSnapshot = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}/createSnapshot', 'POST', params);
    this.regionDisks.resize = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}/resize', 'POST', params);
    this.regionDisks.addResourcePolicies = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}/addResourcePolicies', 'POST', params);
    this.regionDisks.removeResourcePolicies = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}/removeResourcePolicies', 'POST', params);
    this.regionDisks.getIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{resource}/getIamPolicy', 'GET', params);
    this.regionDisks.setIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{resource}/setIamPolicy', 'POST', params);
    this.regionDisks.testIamPermissions = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{resource}/testIamPermissions', 'POST', params);
    this.regionDisks.update = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}', 'PATCH', params);
    this.regionDisks.startAsyncReplication = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}/startAsyncReplication', 'POST', params);
    this.regionDisks.stopAsyncReplication = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/{disk}/stopAsyncReplication', 'POST', params);
    this.regionDisks.stopGroupAsyncReplication = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/stopGroupAsyncReplication', 'POST', params);
    this.regionDisks.bulkInsert = (params) => this._makeRequest('projects/{project}/regions/{region}/disks/bulkInsert', 'POST', params);

    this.firewalls = {};
    this.firewalls.list = (params) => this._makeRequest('projects/{project}/global/firewalls', 'GET', params);
    this.firewalls.get = (params) => this._makeRequest('projects/{project}/global/firewalls/{firewall}', 'GET', params);
    this.firewalls.insert = (params) => this._makeRequest('projects/{project}/global/firewalls', 'POST', params);
    this.firewalls.delete = (params) => this._makeRequest('projects/{project}/global/firewalls/{firewall}', 'DELETE', params);
    this.firewalls.update = (params) => this._makeRequest('projects/{project}/global/firewalls/{firewall}', 'PUT', params);
    this.firewalls.patch = (params) => this._makeRequest('projects/{project}/global/firewalls/{firewall}', 'PATCH', params);

    this.firewallPolicies = {};
    this.firewallPolicies.list = (params) => this._makeRequest('locations/global/firewallPolicies', 'GET', params);
    this.firewallPolicies.get = (params) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}', 'GET', params);
    this.firewallPolicies.insert = (params) => this._makeRequest('locations/global/firewallPolicies', 'POST', params);
    this.firewallPolicies.delete = (params) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}', 'DELETE', params);
    this.firewallPolicies.patch = (params) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}', 'PATCH', params);
    this.firewallPolicies.getRule = (params) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/getRule', 'GET', params);
    this.firewallPolicies.addRule = (params) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/addRule', 'POST', params);
    this.firewallPolicies.removeRule = (params) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/removeRule', 'POST', params);
    this.firewallPolicies.patchRule = (params) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/patchRule', 'POST', params);
    this.firewallPolicies.addAssociation = (params) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/addAssociation', 'POST', params);
    this.firewallPolicies.removeAssociation = (params) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/removeAssociation', 'POST', params);
    this.firewallPolicies.listAssociations = (params) => this._makeRequest('locations/global/firewallPolicies/listAssociations', 'GET', params);
    this.firewallPolicies.getAssociation = (params) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/getAssociation', 'GET', params);
    this.firewallPolicies.cloneRules = (params) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/cloneRules', 'POST', params);
    this.firewallPolicies.move = (params) => this._makeRequest('locations/global/firewallPolicies/{firewallPolicy}/move', 'POST', params);
    this.firewallPolicies.getIamPolicy = (params) => this._makeRequest('locations/global/firewallPolicies/{resource}/getIamPolicy', 'GET', params);
    this.firewallPolicies.setIamPolicy = (params) => this._makeRequest('locations/global/firewallPolicies/{resource}/setIamPolicy', 'POST', params);
    this.firewallPolicies.testIamPermissions = (params) => this._makeRequest('locations/global/firewallPolicies/{resource}/testIamPermissions', 'POST', params);

    this.networkFirewallPolicies = {};
    this.networkFirewallPolicies.list = (params) => this._makeRequest('projects/{project}/global/firewallPolicies', 'GET', params);
    this.networkFirewallPolicies.get = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}', 'GET', params);
    this.networkFirewallPolicies.insert = (params) => this._makeRequest('projects/{project}/global/firewallPolicies', 'POST', params);
    this.networkFirewallPolicies.delete = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}', 'DELETE', params);
    this.networkFirewallPolicies.patch = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}', 'PATCH', params);
    this.networkFirewallPolicies.getRule = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/getRule', 'GET', params);
    this.networkFirewallPolicies.getPacketMirroringRule = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/getPacketMirroringRule', 'GET', params);
    this.networkFirewallPolicies.addRule = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/addRule', 'POST', params);
    this.networkFirewallPolicies.addPacketMirroringRule = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/addPacketMirroringRule', 'POST', params);
    this.networkFirewallPolicies.removeRule = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/removeRule', 'POST', params);
    this.networkFirewallPolicies.removePacketMirroringRule = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/removePacketMirroringRule', 'POST', params);
    this.networkFirewallPolicies.patchRule = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/patchRule', 'POST', params);
    this.networkFirewallPolicies.patchPacketMirroringRule = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/patchPacketMirroringRule', 'POST', params);
    this.networkFirewallPolicies.getIamPolicy = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{resource}/getIamPolicy', 'GET', params);
    this.networkFirewallPolicies.setIamPolicy = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{resource}/setIamPolicy', 'POST', params);
    this.networkFirewallPolicies.testIamPermissions = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{resource}/testIamPermissions', 'POST', params);
    this.networkFirewallPolicies.addAssociation = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/addAssociation', 'POST', params);
    this.networkFirewallPolicies.removeAssociation = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/removeAssociation', 'POST', params);
    this.networkFirewallPolicies.getAssociation = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/getAssociation', 'GET', params);
    this.networkFirewallPolicies.cloneRules = (params) => this._makeRequest('projects/{project}/global/firewallPolicies/{firewallPolicy}/cloneRules', 'POST', params);
    this.networkFirewallPolicies.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/firewallPolicies', 'GET', params);

    this.regionNetworkFirewallPolicies = {};
    this.regionNetworkFirewallPolicies.list = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies', 'GET', params);
    this.regionNetworkFirewallPolicies.get = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}', 'GET', params);
    this.regionNetworkFirewallPolicies.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies', 'POST', params);
    this.regionNetworkFirewallPolicies.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}', 'DELETE', params);
    this.regionNetworkFirewallPolicies.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}', 'PATCH', params);
    this.regionNetworkFirewallPolicies.getRule = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/getRule', 'GET', params);
    this.regionNetworkFirewallPolicies.addRule = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/addRule', 'POST', params);
    this.regionNetworkFirewallPolicies.removeRule = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/removeRule', 'POST', params);
    this.regionNetworkFirewallPolicies.patchRule = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/patchRule', 'POST', params);
    this.regionNetworkFirewallPolicies.cloneRules = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/cloneRules', 'POST', params);
    this.regionNetworkFirewallPolicies.getAssociation = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/getAssociation', 'GET', params);
    this.regionNetworkFirewallPolicies.addAssociation = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/addAssociation', 'POST', params);
    this.regionNetworkFirewallPolicies.removeAssociation = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{firewallPolicy}/removeAssociation', 'POST', params);
    this.regionNetworkFirewallPolicies.getEffectiveFirewalls = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/getEffectiveFirewalls', 'GET', params);
    this.regionNetworkFirewallPolicies.getIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{resource}/getIamPolicy', 'GET', params);
    this.regionNetworkFirewallPolicies.setIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{resource}/setIamPolicy', 'POST', params);
    this.regionNetworkFirewallPolicies.testIamPermissions = (params) => this._makeRequest('projects/{project}/regions/{region}/firewallPolicies/{resource}/testIamPermissions', 'POST', params);

    this.securityPolicies = {};
    this.securityPolicies.list = (params) => this._makeRequest('projects/{project}/global/securityPolicies', 'GET', params);
    this.securityPolicies.get = (params) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}', 'GET', params);
    this.securityPolicies.insert = (params) => this._makeRequest('projects/{project}/global/securityPolicies', 'POST', params);
    this.securityPolicies.delete = (params) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}', 'DELETE', params);
    this.securityPolicies.patch = (params) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}', 'PATCH', params);
    this.securityPolicies.getRule = (params) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}/getRule', 'GET', params);
    this.securityPolicies.addRule = (params) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}/addRule', 'POST', params);
    this.securityPolicies.removeRule = (params) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}/removeRule', 'POST', params);
    this.securityPolicies.patchRule = (params) => this._makeRequest('projects/{project}/global/securityPolicies/{securityPolicy}/patchRule', 'POST', params);
    this.securityPolicies.listPreconfiguredExpressionSets = (params) => this._makeRequest('projects/{project}/global/securityPolicies/listPreconfiguredExpressionSets', 'GET', params);
    this.securityPolicies.setLabels = (params) => this._makeRequest('projects/{project}/global/securityPolicies/{resource}/setLabels', 'POST', params);
    this.securityPolicies.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/securityPolicies', 'GET', params);

    this.regionSecurityPolicies = {};
    this.regionSecurityPolicies.list = (params) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies', 'GET', params);
    this.regionSecurityPolicies.get = (params) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}', 'GET', params);
    this.regionSecurityPolicies.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies', 'POST', params);
    this.regionSecurityPolicies.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}', 'DELETE', params);
    this.regionSecurityPolicies.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}', 'PATCH', params);
    this.regionSecurityPolicies.getRule = (params) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/getRule', 'GET', params);
    this.regionSecurityPolicies.addRule = (params) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/addRule', 'POST', params);
    this.regionSecurityPolicies.removeRule = (params) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/removeRule', 'POST', params);
    this.regionSecurityPolicies.patchRule = (params) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{securityPolicy}/patchRule', 'POST', params);
    this.regionSecurityPolicies.setLabels = (params) => this._makeRequest('projects/{project}/regions/{region}/securityPolicies/{resource}/setLabels', 'POST', params);

    this.instances = {};
    this.instances.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances', 'GET', params);
    this.instances.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/instances', 'GET', params);
    this.instances.listReferrers = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/referrers', 'GET', params);
    this.instances.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}', 'GET', params);
    this.instances.insert = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances', 'POST', params);
    this.instances.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}', 'DELETE', params);
    this.instances.reset = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/reset', 'POST', params);
    this.instances.simulateMaintenanceEvent = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/simulateMaintenanceEvent', 'POST', params);
    this.instances.performMaintenance = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/performMaintenance', 'POST', params);
    this.instances.reportHostAsFaulty = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/reportHostAsFaulty', 'POST', params);
    this.instances.addAccessConfig = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/addAccessConfig', 'POST', params);
    this.instances.deleteAccessConfig = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/deleteAccessConfig', 'POST', params);
    this.instances.updateAccessConfig = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/updateAccessConfig', 'POST', params);
    this.instances.updateNetworkInterface = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/updateNetworkInterface', 'PATCH', params);
    this.instances.setScheduling = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setScheduling', 'POST', params);
    this.instances.getSerialPortOutput = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/serialPort', 'GET', params);
    this.instances.getScreenshot = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/screenshot', 'GET', params);
    this.instances.sendDiagnosticInterrupt = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/sendDiagnosticInterrupt', 'POST', params);
    this.instances.getGuestAttributes = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/getGuestAttributes', 'GET', params);
    this.instances.attachDisk = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/attachDisk', 'POST', params);
    this.instances.detachDisk = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/detachDisk', 'POST', params);
    this.instances.setMachineResources = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setMachineResources', 'POST', params);
    this.instances.setMachineType = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setMachineType', 'POST', params);
    this.instances.setMetadata = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setMetadata', 'POST', params);
    this.instances.setMinCpuPlatform = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setMinCpuPlatform', 'POST', params);
    this.instances.setTags = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setTags', 'POST', params);
    this.instances.setLabels = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setLabels', 'POST', params);
    this.instances.setName = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setName', 'POST', params);
    this.instances.setDiskAutoDelete = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setDiskAutoDelete', 'POST', params);
    this.instances.start = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/start', 'POST', params);
    this.instances.startWithEncryptionKey = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/startWithEncryptionKey', 'POST', params);
    this.instances.stop = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/stop', 'POST', params);
    this.instances.getIamPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{resource}/getIamPolicy', 'GET', params);
    this.instances.setIamPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{resource}/setIamPolicy', 'POST', params);
    this.instances.testIamPermissions = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{resource}/testIamPermissions', 'POST', params);
    this.instances.setServiceAccount = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setServiceAccount', 'POST', params);
    this.instances.setDeletionProtection = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{resource}/setDeletionProtection', 'POST', params);
    this.instances.suspend = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/suspend', 'POST', params);
    this.instances.resume = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/resume', 'POST', params);
    this.instances.addResourcePolicies = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/addResourcePolicies', 'POST', params);
    this.instances.removeResourcePolicies = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/removeResourcePolicies', 'POST', params);
    this.instances.update = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}', 'PUT', params);
    this.instances.updateShieldedInstanceConfig = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/updateShieldedInstanceConfig', 'PATCH', params);
    this.instances.updateDisplayDevice = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/updateDisplayDevice', 'PATCH', params);
    this.instances.setShieldedInstanceIntegrityPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setShieldedInstanceIntegrityPolicy', 'PATCH', params);
    this.instances.setSecurityPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/setSecurityPolicy', 'POST', params);
    this.instances.getShieldedInstanceIdentity = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/getShieldedInstanceIdentity', 'GET', params);
    this.instances.bulkInsert = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/bulkInsert', 'POST', params);
    this.instances.getEffectiveFirewalls = (params) => this._makeRequest('projects/{project}/zones/{zone}/instances/{instance}/getEffectiveFirewalls', 'GET', params);

    this.regionInstances = {};
    this.regionInstances.bulkInsert = (params) => this._makeRequest('projects/{project}/regions/{region}/instances/bulkInsert', 'POST', params);

    this.reservations = {};
    this.reservations.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations', 'GET', params);
    this.reservations.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/reservations', 'GET', params);
    this.reservations.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}', 'GET', params);
    this.reservations.insert = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations', 'POST', params);
    this.reservations.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}', 'DELETE', params);
    this.reservations.resize = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}/resize', 'POST', params);
    this.reservations.update = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}', 'PATCH', params);
    this.reservations.getIamPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{resource}/getIamPolicy', 'GET', params);
    this.reservations.setIamPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{resource}/setIamPolicy', 'POST', params);
    this.reservations.testIamPermissions = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{resource}/testIamPermissions', 'POST', params);
    this.reservations.performMaintenance = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}/performMaintenance', 'POST', params);

    this.instanceGroups = {};
    this.instanceGroups.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups', 'GET', params);
    this.instanceGroups.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/instanceGroups', 'GET', params);
    this.instanceGroups.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}', 'GET', params);
    this.instanceGroups.insert = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups', 'POST', params);
    this.instanceGroups.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}', 'DELETE', params);
    this.instanceGroups.addInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/addInstances', 'POST', params);
    this.instanceGroups.removeInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/removeInstances', 'POST', params);
    this.instanceGroups.listInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/listInstances', 'POST', params);
    this.instanceGroups.setNamedPorts = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroups/{instanceGroup}/setNamedPorts', 'POST', params);

    this.regionInstanceGroups = {};
    this.regionInstanceGroups.list = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroups', 'GET', params);
    this.regionInstanceGroups.get = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroups/{instanceGroup}', 'GET', params);
    this.regionInstanceGroups.listInstances = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroups/{instanceGroup}/listInstances', 'POST', params);
    this.regionInstanceGroups.setNamedPorts = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroups/{instanceGroup}/setNamedPorts', 'POST', params);

    this.instanceGroupManagers = {};
    this.instanceGroupManagers.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers', 'GET', params);
    this.instanceGroupManagers.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/instanceGroupManagers', 'GET', params);
    this.instanceGroupManagers.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}', 'GET', params);
    this.instanceGroupManagers.insert = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers', 'POST', params);
    this.instanceGroupManagers.patch = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}', 'PATCH', params);
    this.instanceGroupManagers.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}', 'DELETE', params);
    this.instanceGroupManagers.deleteInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deleteInstances', 'POST', params);
    this.instanceGroupManagers.suspendInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/suspendInstances', 'POST', params);
    this.instanceGroupManagers.resumeInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resumeInstances', 'POST', params);
    this.instanceGroupManagers.stopInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/stopInstances', 'POST', params);
    this.instanceGroupManagers.startInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/startInstances', 'POST', params);
    this.instanceGroupManagers.abandonInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/abandonInstances', 'POST', params);
    this.instanceGroupManagers.recreateInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/recreateInstances', 'POST', params);
    this.instanceGroupManagers.resize = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resize', 'POST', params);
    this.instanceGroupManagers.setInstanceTemplate = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate', 'POST', params);
    this.instanceGroupManagers.setTargetPools = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/setTargetPools', 'POST', params);
    this.instanceGroupManagers.listManagedInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances', 'POST', params);
    this.instanceGroupManagers.listErrors = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listErrors', 'GET', params);
    this.instanceGroupManagers.listPerInstanceConfigs = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/listPerInstanceConfigs', 'POST', params);
    this.instanceGroupManagers.updatePerInstanceConfigs = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/updatePerInstanceConfigs', 'POST', params);
    this.instanceGroupManagers.patchPerInstanceConfigs = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/patchPerInstanceConfigs', 'POST', params);
    this.instanceGroupManagers.deletePerInstanceConfigs = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/deletePerInstanceConfigs', 'POST', params);
    this.instanceGroupManagers.applyUpdatesToInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/applyUpdatesToInstances', 'POST', params);
    this.instanceGroupManagers.createInstances = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/createInstances', 'POST', params);

    this.instanceGroupManagerResizeRequests = {};
    this.instanceGroupManagerResizeRequests.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}', 'GET', params);
    this.instanceGroupManagerResizeRequests.insert = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests', 'POST', params);
    this.instanceGroupManagerResizeRequests.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests', 'GET', params);
    this.instanceGroupManagerResizeRequests.cancel = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}/cancel', 'POST', params);
    this.instanceGroupManagerResizeRequests.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceGroupManagers/{instanceGroupManager}/resizeRequests/{resizeRequest}', 'DELETE', params);

    this.regionInstanceGroupManagers = {};
    this.regionInstanceGroupManagers.list = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers', 'GET', params);
    this.regionInstanceGroupManagers.get = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}', 'GET', params);
    this.regionInstanceGroupManagers.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers', 'POST', params);
    this.regionInstanceGroupManagers.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}', 'PATCH', params);
    this.regionInstanceGroupManagers.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}', 'DELETE', params);
    this.regionInstanceGroupManagers.deleteInstances = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/deleteInstances', 'POST', params);
    this.regionInstanceGroupManagers.suspendInstances = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/suspendInstances', 'POST', params);
    this.regionInstanceGroupManagers.resumeInstances = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resumeInstances', 'POST', params);
    this.regionInstanceGroupManagers.stopInstances = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/stopInstances', 'POST', params);
    this.regionInstanceGroupManagers.startInstances = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/startInstances', 'POST', params);
    this.regionInstanceGroupManagers.abandonInstances = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/abandonInstances', 'POST', params);
    this.regionInstanceGroupManagers.recreateInstances = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/recreateInstances', 'POST', params);
    this.regionInstanceGroupManagers.resize = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/resize', 'POST', params);
    this.regionInstanceGroupManagers.setInstanceTemplate = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setInstanceTemplate', 'POST', params);
    this.regionInstanceGroupManagers.setTargetPools = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/setTargetPools', 'POST', params);
    this.regionInstanceGroupManagers.listManagedInstances = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listManagedInstances', 'POST', params);
    this.regionInstanceGroupManagers.listErrors = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listErrors', 'GET', params);
    this.regionInstanceGroupManagers.listPerInstanceConfigs = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/listPerInstanceConfigs', 'POST', params);
    this.regionInstanceGroupManagers.updatePerInstanceConfigs = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/updatePerInstanceConfigs', 'POST', params);
    this.regionInstanceGroupManagers.patchPerInstanceConfigs = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/patchPerInstanceConfigs', 'POST', params);
    this.regionInstanceGroupManagers.deletePerInstanceConfigs = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/deletePerInstanceConfigs', 'POST', params);
    this.regionInstanceGroupManagers.applyUpdatesToInstances = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/applyUpdatesToInstances', 'POST', params);
    this.regionInstanceGroupManagers.createInstances = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceGroupManagers/{instanceGroupManager}/createInstances', 'POST', params);

    this.autoscalers = {};
    this.autoscalers.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers', 'GET', params);
    this.autoscalers.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/autoscalers', 'GET', params);
    this.autoscalers.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers/{autoscaler}', 'GET', params);
    this.autoscalers.insert = (params) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers', 'POST', params);
    this.autoscalers.update = (params) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers', 'PUT', params);
    this.autoscalers.patch = (params) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers', 'PATCH', params);
    this.autoscalers.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/autoscalers/{autoscaler}', 'DELETE', params);

    this.regionAutoscalers = {};
    this.regionAutoscalers.list = (params) => this._makeRequest('projects/{project}/regions/{region}/autoscalers', 'GET', params);
    this.regionAutoscalers.get = (params) => this._makeRequest('projects/{project}/regions/{region}/autoscalers/{autoscaler}', 'GET', params);
    this.regionAutoscalers.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/autoscalers', 'POST', params);
    this.regionAutoscalers.update = (params) => this._makeRequest('projects/{project}/regions/{region}/autoscalers', 'PUT', params);
    this.regionAutoscalers.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/autoscalers', 'PATCH', params);
    this.regionAutoscalers.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/autoscalers/{autoscaler}', 'DELETE', params);

    this.backendBuckets = {};
    this.backendBuckets.list = (params) => this._makeRequest('projects/{project}/global/backendBuckets', 'GET', params);
    this.backendBuckets.get = (params) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}', 'GET', params);
    this.backendBuckets.insert = (params) => this._makeRequest('projects/{project}/global/backendBuckets', 'POST', params);
    this.backendBuckets.delete = (params) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}', 'DELETE', params);
    this.backendBuckets.update = (params) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}', 'PUT', params);
    this.backendBuckets.patch = (params) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}', 'PATCH', params);
    this.backendBuckets.addSignedUrlKey = (params) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}/addSignedUrlKey', 'POST', params);
    this.backendBuckets.deleteSignedUrlKey = (params) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}/deleteSignedUrlKey', 'POST', params);
    this.backendBuckets.setEdgeSecurityPolicy = (params) => this._makeRequest('projects/{project}/global/backendBuckets/{backendBucket}/setEdgeSecurityPolicy', 'POST', params);
    this.backendBuckets.getIamPolicy = (params) => this._makeRequest('projects/{project}/global/backendBuckets/{resource}/getIamPolicy', 'GET', params);
    this.backendBuckets.setIamPolicy = (params) => this._makeRequest('projects/{project}/global/backendBuckets/{resource}/setIamPolicy', 'POST', params);
    this.backendBuckets.testIamPermissions = (params) => this._makeRequest('projects/{project}/global/backendBuckets/{resource}/testIamPermissions', 'POST', params);

    this.backendServices = {};
    this.backendServices.list = (params) => this._makeRequest('projects/{project}/global/backendServices', 'GET', params);
    this.backendServices.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/backendServices', 'GET', params);
    this.backendServices.listUsable = (params) => this._makeRequest('projects/{project}/global/backendServices/listUsable', 'GET', params);
    this.backendServices.get = (params) => this._makeRequest('projects/{project}/global/backendServices/{backendService}', 'GET', params);
    this.backendServices.insert = (params) => this._makeRequest('projects/{project}/global/backendServices', 'POST', params);
    this.backendServices.delete = (params) => this._makeRequest('projects/{project}/global/backendServices/{backendService}', 'DELETE', params);
    this.backendServices.update = (params) => this._makeRequest('projects/{project}/global/backendServices/{backendService}', 'PUT', params);
    this.backendServices.patch = (params) => this._makeRequest('projects/{project}/global/backendServices/{backendService}', 'PATCH', params);
    this.backendServices.addSignedUrlKey = (params) => this._makeRequest('projects/{project}/global/backendServices/{backendService}/addSignedUrlKey', 'POST', params);
    this.backendServices.deleteSignedUrlKey = (params) => this._makeRequest('projects/{project}/global/backendServices/{backendService}/deleteSignedUrlKey', 'POST', params);
    this.backendServices.setSecurityPolicy = (params) => this._makeRequest('projects/{project}/global/backendServices/{backendService}/setSecurityPolicy', 'POST', params);
    this.backendServices.setEdgeSecurityPolicy = (params) => this._makeRequest('projects/{project}/global/backendServices/{backendService}/setEdgeSecurityPolicy', 'POST', params);
    this.backendServices.getHealth = (params) => this._makeRequest('projects/{project}/global/backendServices/{backendService}/getHealth', 'POST', params);
    this.backendServices.getIamPolicy = (params) => this._makeRequest('projects/{project}/global/backendServices/{resource}/getIamPolicy', 'GET', params);
    this.backendServices.setIamPolicy = (params) => this._makeRequest('projects/{project}/global/backendServices/{resource}/setIamPolicy', 'POST', params);
    this.backendServices.testIamPermissions = (params) => this._makeRequest('projects/{project}/global/backendServices/{resource}/testIamPermissions', 'POST', params);

    this.regionBackendServices = {};
    this.regionBackendServices.list = (params) => this._makeRequest('projects/{project}/regions/{region}/backendServices', 'GET', params);
    this.regionBackendServices.listUsable = (params) => this._makeRequest('projects/{project}/regions/{region}/backendServices/listUsable', 'GET', params);
    this.regionBackendServices.get = (params) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{backendService}', 'GET', params);
    this.regionBackendServices.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/backendServices', 'POST', params);
    this.regionBackendServices.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{backendService}', 'DELETE', params);
    this.regionBackendServices.update = (params) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{backendService}', 'PUT', params);
    this.regionBackendServices.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{backendService}', 'PATCH', params);
    this.regionBackendServices.setSecurityPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{backendService}/setSecurityPolicy', 'POST', params);
    this.regionBackendServices.getHealth = (params) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{backendService}/getHealth', 'POST', params);
    this.regionBackendServices.getIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{resource}/getIamPolicy', 'GET', params);
    this.regionBackendServices.setIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{resource}/setIamPolicy', 'POST', params);
    this.regionBackendServices.testIamPermissions = (params) => this._makeRequest('projects/{project}/regions/{region}/backendServices/{resource}/testIamPermissions', 'POST', params);

    this.regionCommitments = {};
    this.regionCommitments.list = (params) => this._makeRequest('projects/{project}/regions/{region}/commitments', 'GET', params);
    this.regionCommitments.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/commitments', 'GET', params);
    this.regionCommitments.get = (params) => this._makeRequest('projects/{project}/regions/{region}/commitments/{commitment}', 'GET', params);
    this.regionCommitments.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/commitments', 'POST', params);
    this.regionCommitments.update = (params) => this._makeRequest('projects/{project}/regions/{region}/commitments/{commitment}', 'PATCH', params);

    this.diskTypes = {};
    this.diskTypes.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/diskTypes', 'GET', params);
    this.diskTypes.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/diskTypes', 'GET', params);
    this.diskTypes.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/diskTypes/{diskType}', 'GET', params);

    this.regionDiskTypes = {};
    this.regionDiskTypes.list = (params) => this._makeRequest('projects/{project}/regions/{region}/diskTypes', 'GET', params);
    this.regionDiskTypes.get = (params) => this._makeRequest('projects/{project}/regions/{region}/diskTypes/{diskType}', 'GET', params);

    this.interconnectAttachments = {};
    this.interconnectAttachments.list = (params) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments', 'GET', params);
    this.interconnectAttachments.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/interconnectAttachments', 'GET', params);
    this.interconnectAttachments.get = (params) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}', 'GET', params);
    this.interconnectAttachments.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments', 'POST', params);
    this.interconnectAttachments.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}', 'PATCH', params);
    this.interconnectAttachments.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments/{interconnectAttachment}', 'DELETE', params);
    this.interconnectAttachments.setLabels = (params) => this._makeRequest('projects/{project}/regions/{region}/interconnectAttachments/{resource}/setLabels', 'POST', params);

    this.interconnectAttachmentGroups = {};
    this.interconnectAttachmentGroups.list = (params) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups', 'GET', params);
    this.interconnectAttachmentGroups.get = (params) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}', 'GET', params);
    this.interconnectAttachmentGroups.insert = (params) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups', 'POST', params);
    this.interconnectAttachmentGroups.delete = (params) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}', 'DELETE', params);
    this.interconnectAttachmentGroups.patch = (params) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}', 'PATCH', params);
    this.interconnectAttachmentGroups.getIamPolicy = (params) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{resource}/getIamPolicy', 'GET', params);
    this.interconnectAttachmentGroups.setIamPolicy = (params) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{resource}/setIamPolicy', 'POST', params);
    this.interconnectAttachmentGroups.testIamPermissions = (params) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{resource}/testIamPermissions', 'POST', params);
    this.interconnectAttachmentGroups.getOperationalStatus = (params) => this._makeRequest('projects/{project}/global/interconnectAttachmentGroups/{interconnectAttachmentGroup}/getOperationalStatus', 'GET', params);

    this.interconnects = {};
    this.interconnects.insert = (params) => this._makeRequest('projects/{project}/global/interconnects', 'POST', params);
    this.interconnects.list = (params) => this._makeRequest('projects/{project}/global/interconnects', 'GET', params);
    this.interconnects.getDiagnostics = (params) => this._makeRequest('projects/{project}/global/interconnects/{interconnect}/getDiagnostics', 'GET', params);
    this.interconnects.getMacsecConfig = (params) => this._makeRequest('projects/{project}/global/interconnects/{interconnect}/getMacsecConfig', 'GET', params);
    this.interconnects.get = (params) => this._makeRequest('projects/{project}/global/interconnects/{interconnect}', 'GET', params);
    this.interconnects.delete = (params) => this._makeRequest('projects/{project}/global/interconnects/{interconnect}', 'DELETE', params);
    this.interconnects.patch = (params) => this._makeRequest('projects/{project}/global/interconnects/{interconnect}', 'PATCH', params);
    this.interconnects.setLabels = (params) => this._makeRequest('projects/{project}/global/interconnects/{resource}/setLabels', 'POST', params);

    this.interconnectGroups = {};
    this.interconnectGroups.list = (params) => this._makeRequest('projects/{project}/global/interconnectGroups', 'GET', params);
    this.interconnectGroups.get = (params) => this._makeRequest('projects/{project}/global/interconnectGroups/{interconnectGroup}', 'GET', params);
    this.interconnectGroups.insert = (params) => this._makeRequest('projects/{project}/global/interconnectGroups', 'POST', params);
    this.interconnectGroups.delete = (params) => this._makeRequest('projects/{project}/global/interconnectGroups/{interconnectGroup}', 'DELETE', params);
    this.interconnectGroups.patch = (params) => this._makeRequest('projects/{project}/global/interconnectGroups/{interconnectGroup}', 'PATCH', params);
    this.interconnectGroups.getOperationalStatus = (params) => this._makeRequest('projects/{project}/global/interconnectGroups/{interconnectGroup}/getOperationalStatus', 'GET', params);
    this.interconnectGroups.getIamPolicy = (params) => this._makeRequest('projects/{project}/global/interconnectGroups/{resource}/getIamPolicy', 'GET', params);
    this.interconnectGroups.setIamPolicy = (params) => this._makeRequest('projects/{project}/global/interconnectGroups/{resource}/setIamPolicy', 'POST', params);
    this.interconnectGroups.testIamPermissions = (params) => this._makeRequest('projects/{project}/global/interconnectGroups/{resource}/testIamPermissions', 'POST', params);
    this.interconnectGroups.createMembers = (params) => this._makeRequest('projects/{project}/global/interconnectGroups/{interconnectGroup}/createMembers', 'POST', params);

    this.externalVpnGateways = {};
    this.externalVpnGateways.insert = (params) => this._makeRequest('projects/{project}/global/externalVpnGateways', 'POST', params);
    this.externalVpnGateways.list = (params) => this._makeRequest('projects/{project}/global/externalVpnGateways', 'GET', params);
    this.externalVpnGateways.get = (params) => this._makeRequest('projects/{project}/global/externalVpnGateways/{externalVpnGateway}', 'GET', params);
    this.externalVpnGateways.delete = (params) => this._makeRequest('projects/{project}/global/externalVpnGateways/{externalVpnGateway}', 'DELETE', params);
    this.externalVpnGateways.testIamPermissions = (params) => this._makeRequest('projects/{project}/global/externalVpnGateways/{resource}/testIamPermissions', 'POST', params);
    this.externalVpnGateways.setLabels = (params) => this._makeRequest('projects/{project}/global/externalVpnGateways/{resource}/setLabels', 'POST', params);

    this.globalForwardingRules = {};
    this.globalForwardingRules.list = (params) => this._makeRequest('projects/{project}/global/forwardingRules', 'GET', params);
    this.globalForwardingRules.get = (params) => this._makeRequest('projects/{project}/global/forwardingRules/{forwardingRule}', 'GET', params);
    this.globalForwardingRules.insert = (params) => this._makeRequest('projects/{project}/global/forwardingRules', 'POST', params);
    this.globalForwardingRules.delete = (params) => this._makeRequest('projects/{project}/global/forwardingRules/{forwardingRule}', 'DELETE', params);
    this.globalForwardingRules.setTarget = (params) => this._makeRequest('projects/{project}/global/forwardingRules/{forwardingRule}/setTarget', 'POST', params);
    this.globalForwardingRules.patch = (params) => this._makeRequest('projects/{project}/global/forwardingRules/{forwardingRule}', 'PATCH', params);
    this.globalForwardingRules.setLabels = (params) => this._makeRequest('projects/{project}/global/forwardingRules/{resource}/setLabels', 'POST', params);

    this.forwardingRules = {};
    this.forwardingRules.list = (params) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules', 'GET', params);
    this.forwardingRules.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/forwardingRules', 'GET', params);
    this.forwardingRules.get = (params) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules/{forwardingRule}', 'GET', params);
    this.forwardingRules.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules', 'POST', params);
    this.forwardingRules.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules/{forwardingRule}', 'DELETE', params);
    this.forwardingRules.setTarget = (params) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules/{forwardingRule}/setTarget', 'POST', params);
    this.forwardingRules.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules/{forwardingRule}', 'PATCH', params);
    this.forwardingRules.setLabels = (params) => this._makeRequest('projects/{project}/regions/{region}/forwardingRules/{resource}/setLabels', 'POST', params);

    this.regionHealthCheckServices = {};
    this.regionHealthCheckServices.list = (params) => this._makeRequest('projects/{project}/regions/{region}/healthCheckServices', 'GET', params);
    this.regionHealthCheckServices.get = (params) => this._makeRequest('projects/{project}/regions/{region}/healthCheckServices/{healthCheckService}', 'GET', params);
    this.regionHealthCheckServices.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/healthCheckServices', 'POST', params);
    this.regionHealthCheckServices.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/healthCheckServices/{healthCheckService}', 'DELETE', params);
    this.regionHealthCheckServices.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/healthCheckServices/{healthCheckService}', 'PATCH', params);

    this.healthChecks = {};
    this.healthChecks.list = (params) => this._makeRequest('projects/{project}/global/healthChecks', 'GET', params);
    this.healthChecks.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/healthChecks', 'GET', params);
    this.healthChecks.get = (params) => this._makeRequest('projects/{project}/global/healthChecks/{healthCheck}', 'GET', params);
    this.healthChecks.insert = (params) => this._makeRequest('projects/{project}/global/healthChecks', 'POST', params);
    this.healthChecks.delete = (params) => this._makeRequest('projects/{project}/global/healthChecks/{healthCheck}', 'DELETE', params);
    this.healthChecks.update = (params) => this._makeRequest('projects/{project}/global/healthChecks/{healthCheck}', 'PUT', params);
    this.healthChecks.patch = (params) => this._makeRequest('projects/{project}/global/healthChecks/{healthCheck}', 'PATCH', params);

    this.regionHealthChecks = {};
    this.regionHealthChecks.list = (params) => this._makeRequest('projects/{project}/regions/{region}/healthChecks', 'GET', params);
    this.regionHealthChecks.get = (params) => this._makeRequest('projects/{project}/regions/{region}/healthChecks/{healthCheck}', 'GET', params);
    this.regionHealthChecks.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/healthChecks', 'POST', params);
    this.regionHealthChecks.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/healthChecks/{healthCheck}', 'DELETE', params);
    this.regionHealthChecks.update = (params) => this._makeRequest('projects/{project}/regions/{region}/healthChecks/{healthCheck}', 'PUT', params);
    this.regionHealthChecks.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/healthChecks/{healthCheck}', 'PATCH', params);

    this.httpHealthChecks = {};
    this.httpHealthChecks.list = (params) => this._makeRequest('projects/{project}/global/httpHealthChecks', 'GET', params);
    this.httpHealthChecks.get = (params) => this._makeRequest('projects/{project}/global/httpHealthChecks/{httpHealthCheck}', 'GET', params);
    this.httpHealthChecks.insert = (params) => this._makeRequest('projects/{project}/global/httpHealthChecks', 'POST', params);
    this.httpHealthChecks.delete = (params) => this._makeRequest('projects/{project}/global/httpHealthChecks/{httpHealthCheck}', 'DELETE', params);
    this.httpHealthChecks.update = (params) => this._makeRequest('projects/{project}/global/httpHealthChecks/{httpHealthCheck}', 'PUT', params);
    this.httpHealthChecks.patch = (params) => this._makeRequest('projects/{project}/global/httpHealthChecks/{httpHealthCheck}', 'PATCH', params);

    this.httpsHealthChecks = {};
    this.httpsHealthChecks.list = (params) => this._makeRequest('projects/{project}/global/httpsHealthChecks', 'GET', params);
    this.httpsHealthChecks.get = (params) => this._makeRequest('projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}', 'GET', params);
    this.httpsHealthChecks.insert = (params) => this._makeRequest('projects/{project}/global/httpsHealthChecks', 'POST', params);
    this.httpsHealthChecks.delete = (params) => this._makeRequest('projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}', 'DELETE', params);
    this.httpsHealthChecks.update = (params) => this._makeRequest('projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}', 'PUT', params);
    this.httpsHealthChecks.patch = (params) => this._makeRequest('projects/{project}/global/httpsHealthChecks/{httpsHealthCheck}', 'PATCH', params);

    this.instanceTemplates = {};
    this.instanceTemplates.list = (params) => this._makeRequest('projects/{project}/global/instanceTemplates', 'GET', params);
    this.instanceTemplates.get = (params) => this._makeRequest('projects/{project}/global/instanceTemplates/{instanceTemplate}', 'GET', params);
    this.instanceTemplates.insert = (params) => this._makeRequest('projects/{project}/global/instanceTemplates', 'POST', params);
    this.instanceTemplates.delete = (params) => this._makeRequest('projects/{project}/global/instanceTemplates/{instanceTemplate}', 'DELETE', params);
    this.instanceTemplates.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/instanceTemplates', 'GET', params);
    this.instanceTemplates.getIamPolicy = (params) => this._makeRequest('projects/{project}/global/instanceTemplates/{resource}/getIamPolicy', 'GET', params);
    this.instanceTemplates.setIamPolicy = (params) => this._makeRequest('projects/{project}/global/instanceTemplates/{resource}/setIamPolicy', 'POST', params);
    this.instanceTemplates.testIamPermissions = (params) => this._makeRequest('projects/{project}/global/instanceTemplates/{resource}/testIamPermissions', 'POST', params);

    this.regionInstanceTemplates = {};
    this.regionInstanceTemplates.list = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceTemplates', 'GET', params);
    this.regionInstanceTemplates.get = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceTemplates/{instanceTemplate}', 'GET', params);
    this.regionInstanceTemplates.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceTemplates', 'POST', params);
    this.regionInstanceTemplates.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/instanceTemplates/{instanceTemplate}', 'DELETE', params);

    this.instanceSettings = {};
    this.instanceSettings.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceSettings', 'GET', params);
    this.instanceSettings.patch = (params) => this._makeRequest('projects/{project}/zones/{zone}/instanceSettings', 'PATCH', params);

    this.instantSnapshots = {};
    this.instantSnapshots.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots', 'GET', params);
    this.instantSnapshots.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots/{instantSnapshot}', 'GET', params);
    this.instantSnapshots.insert = (params) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots', 'POST', params);
    this.instantSnapshots.setLabels = (params) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots/{resource}/setLabels', 'POST', params);
    this.instantSnapshots.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots/{instantSnapshot}', 'DELETE', params);
    this.instantSnapshots.getIamPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots/{resource}/getIamPolicy', 'GET', params);
    this.instantSnapshots.setIamPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots/{resource}/setIamPolicy', 'POST', params);
    this.instantSnapshots.testIamPermissions = (params) => this._makeRequest('projects/{project}/zones/{zone}/instantSnapshots/{resource}/testIamPermissions', 'POST', params);
    this.instantSnapshots.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/instantSnapshots', 'GET', params);

    this.regionInstantSnapshots = {};
    this.regionInstantSnapshots.list = (params) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots', 'GET', params);
    this.regionInstantSnapshots.get = (params) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots/{instantSnapshot}', 'GET', params);
    this.regionInstantSnapshots.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots', 'POST', params);
    this.regionInstantSnapshots.setLabels = (params) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots/{resource}/setLabels', 'POST', params);
    this.regionInstantSnapshots.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots/{instantSnapshot}', 'DELETE', params);
    this.regionInstantSnapshots.getIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots/{resource}/getIamPolicy', 'GET', params);
    this.regionInstantSnapshots.setIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots/{resource}/setIamPolicy', 'POST', params);
    this.regionInstantSnapshots.testIamPermissions = (params) => this._makeRequest('projects/{project}/regions/{region}/instantSnapshots/{resource}/testIamPermissions', 'POST', params);

    this.interconnectLocations = {};
    this.interconnectLocations.list = (params) => this._makeRequest('projects/{project}/global/interconnectLocations', 'GET', params);
    this.interconnectLocations.get = (params) => this._makeRequest('projects/{project}/global/interconnectLocations/{interconnectLocation}', 'GET', params);

    this.interconnectRemoteLocations = {};
    this.interconnectRemoteLocations.list = (params) => this._makeRequest('projects/{project}/global/interconnectRemoteLocations', 'GET', params);
    this.interconnectRemoteLocations.get = (params) => this._makeRequest('projects/{project}/global/interconnectRemoteLocations/{interconnectRemoteLocation}', 'GET', params);

    this.licenseCodes = {};
    this.licenseCodes.get = (params) => this._makeRequest('projects/{project}/global/licenseCodes/{licenseCode}', 'GET', params);
    this.licenseCodes.testIamPermissions = (params) => this._makeRequest('projects/{project}/global/licenseCodes/{resource}/testIamPermissions', 'POST', params);

    this.licenses = {};
    this.licenses.get = (params) => this._makeRequest('projects/{project}/global/licenses/{license}', 'GET', params);
    this.licenses.list = (params) => this._makeRequest('projects/{project}/global/licenses', 'GET', params);
    this.licenses.delete = (params) => this._makeRequest('projects/{project}/global/licenses/{license}', 'DELETE', params);
    this.licenses.insert = (params) => this._makeRequest('projects/{project}/global/licenses', 'POST', params);
    this.licenses.update = (params) => this._makeRequest('projects/{project}/global/licenses/{license}', 'PATCH', params);
    this.licenses.getIamPolicy = (params) => this._makeRequest('projects/{project}/global/licenses/{resource}/getIamPolicy', 'GET', params);
    this.licenses.setIamPolicy = (params) => this._makeRequest('projects/{project}/global/licenses/{resource}/setIamPolicy', 'POST', params);
    this.licenses.testIamPermissions = (params) => this._makeRequest('projects/{project}/global/licenses/{resource}/testIamPermissions', 'POST', params);

    this.machineImages = {};
    this.machineImages.list = (params) => this._makeRequest('projects/{project}/global/machineImages', 'GET', params);
    this.machineImages.get = (params) => this._makeRequest('projects/{project}/global/machineImages/{machineImage}', 'GET', params);
    this.machineImages.insert = (params) => this._makeRequest('projects/{project}/global/machineImages', 'POST', params);
    this.machineImages.setLabels = (params) => this._makeRequest('projects/{project}/global/machineImages/{resource}/setLabels', 'POST', params);
    this.machineImages.delete = (params) => this._makeRequest('projects/{project}/global/machineImages/{machineImage}', 'DELETE', params);
    this.machineImages.getIamPolicy = (params) => this._makeRequest('projects/{project}/global/machineImages/{resource}/getIamPolicy', 'GET', params);
    this.machineImages.setIamPolicy = (params) => this._makeRequest('projects/{project}/global/machineImages/{resource}/setIamPolicy', 'POST', params);
    this.machineImages.testIamPermissions = (params) => this._makeRequest('projects/{project}/global/machineImages/{resource}/testIamPermissions', 'POST', params);

    this.machineTypes = {};
    this.machineTypes.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/machineTypes', 'GET', params);
    this.machineTypes.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/machineTypes', 'GET', params);
    this.machineTypes.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/machineTypes/{machineType}', 'GET', params);

    this.networkAttachments = {};
    this.networkAttachments.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/networkAttachments', 'GET', params);
    this.networkAttachments.list = (params) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments', 'GET', params);
    this.networkAttachments.get = (params) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments/{networkAttachment}', 'GET', params);
    this.networkAttachments.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments', 'POST', params);
    this.networkAttachments.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments/{networkAttachment}', 'DELETE', params);
    this.networkAttachments.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments/{networkAttachment}', 'PATCH', params);
    this.networkAttachments.getIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments/{resource}/getIamPolicy', 'GET', params);
    this.networkAttachments.setIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments/{resource}/setIamPolicy', 'POST', params);
    this.networkAttachments.testIamPermissions = (params) => this._makeRequest('projects/{project}/regions/{region}/networkAttachments/{resource}/testIamPermissions', 'POST', params);

    this.networkEdgeSecurityServices = {};
    this.networkEdgeSecurityServices.get = (params) => this._makeRequest('projects/{project}/regions/{region}/networkEdgeSecurityServices/{networkEdgeSecurityService}', 'GET', params);
    this.networkEdgeSecurityServices.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/networkEdgeSecurityServices', 'POST', params);
    this.networkEdgeSecurityServices.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/networkEdgeSecurityServices/{networkEdgeSecurityService}', 'DELETE', params);
    this.networkEdgeSecurityServices.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/networkEdgeSecurityServices/{networkEdgeSecurityService}', 'PATCH', params);
    this.networkEdgeSecurityServices.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/networkEdgeSecurityServices', 'GET', params);

    this.networkEndpointGroups = {};
    this.networkEndpointGroups.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups', 'GET', params);
    this.networkEndpointGroups.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/networkEndpointGroups', 'GET', params);
    this.networkEndpointGroups.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}', 'GET', params);
    this.networkEndpointGroups.insert = (params) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups', 'POST', params);
    this.networkEndpointGroups.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}', 'DELETE', params);
    this.networkEndpointGroups.attachNetworkEndpoints = (params) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints', 'POST', params);
    this.networkEndpointGroups.detachNetworkEndpoints = (params) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints', 'POST', params);
    this.networkEndpointGroups.listNetworkEndpoints = (params) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints', 'POST', params);
    this.networkEndpointGroups.testIamPermissions = (params) => this._makeRequest('projects/{project}/zones/{zone}/networkEndpointGroups/{resource}/testIamPermissions', 'POST', params);

    this.globalNetworkEndpointGroups = {};
    this.globalNetworkEndpointGroups.list = (params) => this._makeRequest('projects/{project}/global/networkEndpointGroups', 'GET', params);
    this.globalNetworkEndpointGroups.get = (params) => this._makeRequest('projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}', 'GET', params);
    this.globalNetworkEndpointGroups.insert = (params) => this._makeRequest('projects/{project}/global/networkEndpointGroups', 'POST', params);
    this.globalNetworkEndpointGroups.delete = (params) => this._makeRequest('projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}', 'DELETE', params);
    this.globalNetworkEndpointGroups.attachNetworkEndpoints = (params) => this._makeRequest('projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints', 'POST', params);
    this.globalNetworkEndpointGroups.detachNetworkEndpoints = (params) => this._makeRequest('projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints', 'POST', params);
    this.globalNetworkEndpointGroups.listNetworkEndpoints = (params) => this._makeRequest('projects/{project}/global/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints', 'POST', params);

    this.regionNetworkEndpointGroups = {};
    this.regionNetworkEndpointGroups.list = (params) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups', 'GET', params);
    this.regionNetworkEndpointGroups.get = (params) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}', 'GET', params);
    this.regionNetworkEndpointGroups.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups', 'POST', params);
    this.regionNetworkEndpointGroups.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}', 'DELETE', params);
    this.regionNetworkEndpointGroups.attachNetworkEndpoints = (params) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}/attachNetworkEndpoints', 'POST', params);
    this.regionNetworkEndpointGroups.detachNetworkEndpoints = (params) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}/detachNetworkEndpoints', 'POST', params);
    this.regionNetworkEndpointGroups.listNetworkEndpoints = (params) => this._makeRequest('projects/{project}/regions/{region}/networkEndpointGroups/{networkEndpointGroup}/listNetworkEndpoints', 'POST', params);

    this.networks = {};
    this.networks.list = (params) => this._makeRequest('projects/{project}/global/networks', 'GET', params);
    this.networks.get = (params) => this._makeRequest('projects/{project}/global/networks/{network}', 'GET', params);
    this.networks.insert = (params) => this._makeRequest('projects/{project}/global/networks', 'POST', params);
    this.networks.delete = (params) => this._makeRequest('projects/{project}/global/networks/{network}', 'DELETE', params);
    this.networks.patch = (params) => this._makeRequest('projects/{project}/global/networks/{network}', 'PATCH', params);
    this.networks.updatePeering = (params) => this._makeRequest('projects/{project}/global/networks/{network}/updatePeering', 'PATCH', params);
    this.networks.addPeering = (params) => this._makeRequest('projects/{project}/global/networks/{network}/addPeering', 'POST', params);
    this.networks.removePeering = (params) => this._makeRequest('projects/{project}/global/networks/{network}/removePeering', 'POST', params);
    this.networks.switchToCustomMode = (params) => this._makeRequest('projects/{project}/global/networks/{network}/switchToCustomMode', 'POST', params);
    this.networks.getEffectiveFirewalls = (params) => this._makeRequest('projects/{project}/global/networks/{network}/getEffectiveFirewalls', 'GET', params);
    this.networks.listPeeringRoutes = (params) => this._makeRequest('projects/{project}/global/networks/{network}/listPeeringRoutes', 'GET', params);

    this.nodeGroups = {};
    this.nodeGroups.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups', 'GET', params);
    this.nodeGroups.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/nodeGroups', 'GET', params);
    this.nodeGroups.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}', 'GET', params);
    this.nodeGroups.insert = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups', 'POST', params);
    this.nodeGroups.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}', 'DELETE', params);
    this.nodeGroups.addNodes = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/addNodes', 'POST', params);
    this.nodeGroups.deleteNodes = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/deleteNodes', 'POST', params);
    this.nodeGroups.listNodes = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/listNodes', 'POST', params);
    this.nodeGroups.setNodeTemplate = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/setNodeTemplate', 'POST', params);
    this.nodeGroups.patch = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}', 'PATCH', params);
    this.nodeGroups.simulateMaintenanceEvent = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/simulateMaintenanceEvent', 'POST', params);
    this.nodeGroups.performMaintenance = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{nodeGroup}/performMaintenance', 'POST', params);
    this.nodeGroups.getIamPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{resource}/getIamPolicy', 'GET', params);
    this.nodeGroups.setIamPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{resource}/setIamPolicy', 'POST', params);
    this.nodeGroups.testIamPermissions = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeGroups/{resource}/testIamPermissions', 'POST', params);

    this.nodeTemplates = {};
    this.nodeTemplates.list = (params) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates', 'GET', params);
    this.nodeTemplates.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/nodeTemplates', 'GET', params);
    this.nodeTemplates.get = (params) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates/{nodeTemplate}', 'GET', params);
    this.nodeTemplates.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates', 'POST', params);
    this.nodeTemplates.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates/{nodeTemplate}', 'DELETE', params);
    this.nodeTemplates.getIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates/{resource}/getIamPolicy', 'GET', params);
    this.nodeTemplates.setIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates/{resource}/setIamPolicy', 'POST', params);
    this.nodeTemplates.testIamPermissions = (params) => this._makeRequest('projects/{project}/regions/{region}/nodeTemplates/{resource}/testIamPermissions', 'POST', params);

    this.nodeTypes = {};
    this.nodeTypes.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeTypes', 'GET', params);
    this.nodeTypes.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/nodeTypes', 'GET', params);
    this.nodeTypes.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/nodeTypes/{nodeType}', 'GET', params);

    this.regionNotificationEndpoints = {};
    this.regionNotificationEndpoints.list = (params) => this._makeRequest('projects/{project}/regions/{region}/notificationEndpoints', 'GET', params);
    this.regionNotificationEndpoints.get = (params) => this._makeRequest('projects/{project}/regions/{region}/notificationEndpoints/{notificationEndpoint}', 'GET', params);
    this.regionNotificationEndpoints.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/notificationEndpoints', 'POST', params);
    this.regionNotificationEndpoints.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/notificationEndpoints/{notificationEndpoint}', 'DELETE', params);

    this.packetMirrorings = {};
    this.packetMirrorings.get = (params) => this._makeRequest('projects/{project}/regions/{region}/packetMirrorings/{packetMirroring}', 'GET', params);
    this.packetMirrorings.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/packetMirrorings', 'POST', params);
    this.packetMirrorings.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/packetMirrorings/{packetMirroring}', 'PATCH', params);
    this.packetMirrorings.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/packetMirrorings/{packetMirroring}', 'DELETE', params);
    this.packetMirrorings.list = (params) => this._makeRequest('projects/{project}/regions/{region}/packetMirrorings', 'GET', params);
    this.packetMirrorings.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/packetMirrorings', 'GET', params);
    this.packetMirrorings.testIamPermissions = (params) => this._makeRequest('projects/{project}/regions/{region}/packetMirrorings/{resource}/testIamPermissions', 'POST', params);

    this.projects = {};
    this.projects.get = (params) => this._makeRequest('projects/{project}', 'GET', params);
    this.projects.setCommonInstanceMetadata = (params) => this._makeRequest('projects/{project}/setCommonInstanceMetadata', 'POST', params);
    this.projects.setUsageExportBucket = (params) => this._makeRequest('projects/{project}/setUsageExportBucket', 'POST', params);
    this.projects.moveInstance = (params) => this._makeRequest('projects/{project}/moveInstance', 'POST', params);
    this.projects.moveDisk = (params) => this._makeRequest('projects/{project}/moveDisk', 'POST', params);
    this.projects.listXpnHosts = (params) => this._makeRequest('projects/{project}/listXpnHosts', 'POST', params);
    this.projects.enableXpnHost = (params) => this._makeRequest('projects/{project}/enableXpnHost', 'POST', params);
    this.projects.disableXpnHost = (params) => this._makeRequest('projects/{project}/disableXpnHost', 'POST', params);
    this.projects.enableXpnResource = (params) => this._makeRequest('projects/{project}/enableXpnResource', 'POST', params);
    this.projects.disableXpnResource = (params) => this._makeRequest('projects/{project}/disableXpnResource', 'POST', params);
    this.projects.getXpnHost = (params) => this._makeRequest('projects/{project}/getXpnHost', 'GET', params);
    this.projects.getXpnResources = (params) => this._makeRequest('projects/{project}/getXpnResources', 'GET', params);
    this.projects.setDefaultNetworkTier = (params) => this._makeRequest('projects/{project}/setDefaultNetworkTier', 'POST', params);
    this.projects.setCloudArmorTier = (params) => this._makeRequest('projects/{project}/setCloudArmorTier', 'POST', params);

    this.publicAdvertisedPrefixes = {};
    this.publicAdvertisedPrefixes.list = (params) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes', 'GET', params);
    this.publicAdvertisedPrefixes.get = (params) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}', 'GET', params);
    this.publicAdvertisedPrefixes.insert = (params) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes', 'POST', params);
    this.publicAdvertisedPrefixes.delete = (params) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}', 'DELETE', params);
    this.publicAdvertisedPrefixes.patch = (params) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}', 'PATCH', params);
    this.publicAdvertisedPrefixes.announce = (params) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}/announce', 'POST', params);
    this.publicAdvertisedPrefixes.withdraw = (params) => this._makeRequest('projects/{project}/global/publicAdvertisedPrefixes/{publicAdvertisedPrefix}/withdraw', 'POST', params);

    this.globalPublicDelegatedPrefixes = {};
    this.globalPublicDelegatedPrefixes.list = (params) => this._makeRequest('projects/{project}/global/publicDelegatedPrefixes', 'GET', params);
    this.globalPublicDelegatedPrefixes.get = (params) => this._makeRequest('projects/{project}/global/publicDelegatedPrefixes/{publicDelegatedPrefix}', 'GET', params);
    this.globalPublicDelegatedPrefixes.insert = (params) => this._makeRequest('projects/{project}/global/publicDelegatedPrefixes', 'POST', params);
    this.globalPublicDelegatedPrefixes.delete = (params) => this._makeRequest('projects/{project}/global/publicDelegatedPrefixes/{publicDelegatedPrefix}', 'DELETE', params);
    this.globalPublicDelegatedPrefixes.patch = (params) => this._makeRequest('projects/{project}/global/publicDelegatedPrefixes/{publicDelegatedPrefix}', 'PATCH', params);

    this.publicDelegatedPrefixes = {};
    this.publicDelegatedPrefixes.list = (params) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes', 'GET', params);
    this.publicDelegatedPrefixes.get = (params) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}', 'GET', params);
    this.publicDelegatedPrefixes.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes', 'POST', params);
    this.publicDelegatedPrefixes.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}', 'DELETE', params);
    this.publicDelegatedPrefixes.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}', 'PATCH', params);
    this.publicDelegatedPrefixes.announce = (params) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}/announce', 'POST', params);
    this.publicDelegatedPrefixes.withdraw = (params) => this._makeRequest('projects/{project}/regions/{region}/publicDelegatedPrefixes/{publicDelegatedPrefix}/withdraw', 'POST', params);
    this.publicDelegatedPrefixes.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/publicDelegatedPrefixes', 'GET', params);

    this.regions = {};
    this.regions.list = (params) => this._makeRequest('projects/{project}/regions', 'GET', params);
    this.regions.get = (params) => this._makeRequest('projects/{project}/regions/{region}', 'GET', params);

    this.subnetworks = {};
    this.subnetworks.list = (params) => this._makeRequest('projects/{project}/regions/{region}/subnetworks', 'GET', params);
    this.subnetworks.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/subnetworks', 'GET', params);
    this.subnetworks.listUsable = (params) => this._makeRequest('projects/{project}/aggregated/subnetworks/listUsable', 'GET', params);
    this.subnetworks.get = (params) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{subnetwork}', 'GET', params);
    this.subnetworks.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/subnetworks', 'POST', params);
    this.subnetworks.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{subnetwork}', 'DELETE', params);
    this.subnetworks.expandIpCidrRange = (params) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{subnetwork}/expandIpCidrRange', 'POST', params);
    this.subnetworks.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{subnetwork}', 'PATCH', params);
    this.subnetworks.getIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{resource}/getIamPolicy', 'GET', params);
    this.subnetworks.setIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{resource}/setIamPolicy', 'POST', params);
    this.subnetworks.testIamPermissions = (params) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{resource}/testIamPermissions', 'POST', params);
    this.subnetworks.setPrivateIpGoogleAccess = (params) => this._makeRequest('projects/{project}/regions/{region}/subnetworks/{subnetwork}/setPrivateIpGoogleAccess', 'POST', params);

    this.networkProfiles = {};
    this.networkProfiles.list = (params) => this._makeRequest('projects/{project}/global/networkProfiles', 'GET', params);
    this.networkProfiles.get = (params) => this._makeRequest('projects/{project}/global/networkProfiles/{networkProfile}', 'GET', params);

    this.reservationBlocks = {};
    this.reservationBlocks.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}/reservationBlocks/{reservationBlock}', 'GET', params);
    this.reservationBlocks.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}/reservationBlocks', 'GET', params);
    this.reservationBlocks.performMaintenance = (params) => this._makeRequest('projects/{project}/zones/{zone}/reservations/{reservation}/reservationBlocks/{reservationBlock}/performMaintenance', 'POST', params);

    this.reservationSubBlocks = {};
    this.reservationSubBlocks.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/{parentName}/reservationSubBlocks/{reservationSubBlock}', 'GET', params);
    this.reservationSubBlocks.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/{parentName}/reservationSubBlocks', 'GET', params);
    this.reservationSubBlocks.performMaintenance = (params) => this._makeRequest('projects/{project}/zones/{zone}/{parentName}/reservationSubBlocks/{reservationSubBlock}/performMaintenance', 'POST', params);

    this.resourcePolicies = {};
    this.resourcePolicies.list = (params) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies', 'GET', params);
    this.resourcePolicies.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/resourcePolicies', 'GET', params);
    this.resourcePolicies.get = (params) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies/{resourcePolicy}', 'GET', params);
    this.resourcePolicies.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies', 'POST', params);
    this.resourcePolicies.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies/{resourcePolicy}', 'DELETE', params);
    this.resourcePolicies.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies/{resourcePolicy}', 'PATCH', params);
    this.resourcePolicies.getIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies/{resource}/getIamPolicy', 'GET', params);
    this.resourcePolicies.setIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies/{resource}/setIamPolicy', 'POST', params);
    this.resourcePolicies.testIamPermissions = (params) => this._makeRequest('projects/{project}/regions/{region}/resourcePolicies/{resource}/testIamPermissions', 'POST', params);

    this.routes = {};
    this.routes.list = (params) => this._makeRequest('projects/{project}/global/routes', 'GET', params);
    this.routes.get = (params) => this._makeRequest('projects/{project}/global/routes/{route}', 'GET', params);
    this.routes.insert = (params) => this._makeRequest('projects/{project}/global/routes', 'POST', params);
    this.routes.delete = (params) => this._makeRequest('projects/{project}/global/routes/{route}', 'DELETE', params);

    this.routers = {};
    this.routers.get = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}', 'GET', params);
    this.routers.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/routers', 'POST', params);
    this.routers.update = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}', 'PUT', params);
    this.routers.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}', 'PATCH', params);
    this.routers.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}', 'DELETE', params);
    this.routers.list = (params) => this._makeRequest('projects/{project}/regions/{region}/routers', 'GET', params);
    this.routers.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/routers', 'GET', params);
    this.routers.getRouterStatus = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/getRouterStatus', 'GET', params);
    this.routers.getNatMappingInfo = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/getNatMappingInfo', 'GET', params);
    this.routers.getNatIpInfo = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/getNatIpInfo', 'GET', params);
    this.routers.preview = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/preview', 'POST', params);
    this.routers.updateRoutePolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/updateRoutePolicy', 'POST', params);
    this.routers.patchRoutePolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/patchRoutePolicy', 'POST', params);
    this.routers.deleteRoutePolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/deleteRoutePolicy', 'POST', params);
    this.routers.getRoutePolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/getRoutePolicy', 'GET', params);
    this.routers.listRoutePolicies = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/listRoutePolicies', 'GET', params);
    this.routers.listBgpRoutes = (params) => this._makeRequest('projects/{project}/regions/{region}/routers/{router}/listBgpRoutes', 'GET', params);

    this.serviceAttachments = {};
    this.serviceAttachments.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/serviceAttachments', 'GET', params);
    this.serviceAttachments.list = (params) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments', 'GET', params);
    this.serviceAttachments.get = (params) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments/{serviceAttachment}', 'GET', params);
    this.serviceAttachments.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments', 'POST', params);
    this.serviceAttachments.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments/{serviceAttachment}', 'DELETE', params);
    this.serviceAttachments.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments/{serviceAttachment}', 'PATCH', params);
    this.serviceAttachments.getIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments/{resource}/getIamPolicy', 'GET', params);
    this.serviceAttachments.setIamPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments/{resource}/setIamPolicy', 'POST', params);
    this.serviceAttachments.testIamPermissions = (params) => this._makeRequest('projects/{project}/regions/{region}/serviceAttachments/{resource}/testIamPermissions', 'POST', params);

    this.snapshotSettings = {};
    this.snapshotSettings.get = (params) => this._makeRequest('projects/{project}/global/snapshotSettings', 'GET', params);
    this.snapshotSettings.patch = (params) => this._makeRequest('projects/{project}/global/snapshotSettings', 'PATCH', params);

    this.sslCertificates = {};
    this.sslCertificates.list = (params) => this._makeRequest('projects/{project}/global/sslCertificates', 'GET', params);
    this.sslCertificates.get = (params) => this._makeRequest('projects/{project}/global/sslCertificates/{sslCertificate}', 'GET', params);
    this.sslCertificates.insert = (params) => this._makeRequest('projects/{project}/global/sslCertificates', 'POST', params);
    this.sslCertificates.delete = (params) => this._makeRequest('projects/{project}/global/sslCertificates/{sslCertificate}', 'DELETE', params);
    this.sslCertificates.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/sslCertificates', 'GET', params);

    this.regionSslCertificates = {};
    this.regionSslCertificates.list = (params) => this._makeRequest('projects/{project}/regions/{region}/sslCertificates', 'GET', params);
    this.regionSslCertificates.get = (params) => this._makeRequest('projects/{project}/regions/{region}/sslCertificates/{sslCertificate}', 'GET', params);
    this.regionSslCertificates.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/sslCertificates', 'POST', params);
    this.regionSslCertificates.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/sslCertificates/{sslCertificate}', 'DELETE', params);

    this.sslPolicies = {};
    this.sslPolicies.list = (params) => this._makeRequest('projects/{project}/global/sslPolicies', 'GET', params);
    this.sslPolicies.get = (params) => this._makeRequest('projects/{project}/global/sslPolicies/{sslPolicy}', 'GET', params);
    this.sslPolicies.insert = (params) => this._makeRequest('projects/{project}/global/sslPolicies', 'POST', params);
    this.sslPolicies.delete = (params) => this._makeRequest('projects/{project}/global/sslPolicies/{sslPolicy}', 'DELETE', params);
    this.sslPolicies.patch = (params) => this._makeRequest('projects/{project}/global/sslPolicies/{sslPolicy}', 'PATCH', params);
    this.sslPolicies.listAvailableFeatures = (params) => this._makeRequest('projects/{project}/global/sslPolicies/listAvailableFeatures', 'GET', params);
    this.sslPolicies.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/sslPolicies', 'GET', params);

    this.regionSslPolicies = {};
    this.regionSslPolicies.list = (params) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies', 'GET', params);
    this.regionSslPolicies.get = (params) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies/{sslPolicy}', 'GET', params);
    this.regionSslPolicies.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies', 'POST', params);
    this.regionSslPolicies.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies/{sslPolicy}', 'DELETE', params);
    this.regionSslPolicies.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies/{sslPolicy}', 'PATCH', params);
    this.regionSslPolicies.listAvailableFeatures = (params) => this._makeRequest('projects/{project}/regions/{region}/sslPolicies/listAvailableFeatures', 'GET', params);

    this.storagePoolTypes = {};
    this.storagePoolTypes.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/storagePoolTypes', 'GET', params);
    this.storagePoolTypes.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/storagePoolTypes', 'GET', params);
    this.storagePoolTypes.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/storagePoolTypes/{storagePoolType}', 'GET', params);

    this.storagePools = {};
    this.storagePools.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/storagePools', 'GET', params);
    this.storagePools.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/storagePools', 'GET', params);
    this.storagePools.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{storagePool}', 'GET', params);
    this.storagePools.insert = (params) => this._makeRequest('projects/{project}/zones/{zone}/storagePools', 'POST', params);
    this.storagePools.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{storagePool}', 'DELETE', params);
    this.storagePools.getIamPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{resource}/getIamPolicy', 'GET', params);
    this.storagePools.setIamPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{resource}/setIamPolicy', 'POST', params);
    this.storagePools.testIamPermissions = (params) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{resource}/testIamPermissions', 'POST', params);
    this.storagePools.update = (params) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{storagePool}', 'PATCH', params);
    this.storagePools.listDisks = (params) => this._makeRequest('projects/{project}/zones/{zone}/storagePools/{storagePool}/listDisks', 'GET', params);

    this.targetGrpcProxies = {};
    this.targetGrpcProxies.list = (params) => this._makeRequest('projects/{project}/global/targetGrpcProxies', 'GET', params);
    this.targetGrpcProxies.get = (params) => this._makeRequest('projects/{project}/global/targetGrpcProxies/{targetGrpcProxy}', 'GET', params);
    this.targetGrpcProxies.insert = (params) => this._makeRequest('projects/{project}/global/targetGrpcProxies', 'POST', params);
    this.targetGrpcProxies.delete = (params) => this._makeRequest('projects/{project}/global/targetGrpcProxies/{targetGrpcProxy}', 'DELETE', params);
    this.targetGrpcProxies.patch = (params) => this._makeRequest('projects/{project}/global/targetGrpcProxies/{targetGrpcProxy}', 'PATCH', params);

    this.targetHttpProxies = {};
    this.targetHttpProxies.list = (params) => this._makeRequest('projects/{project}/global/targetHttpProxies', 'GET', params);
    this.targetHttpProxies.get = (params) => this._makeRequest('projects/{project}/global/targetHttpProxies/{targetHttpProxy}', 'GET', params);
    this.targetHttpProxies.insert = (params) => this._makeRequest('projects/{project}/global/targetHttpProxies', 'POST', params);
    this.targetHttpProxies.delete = (params) => this._makeRequest('projects/{project}/global/targetHttpProxies/{targetHttpProxy}', 'DELETE', params);
    this.targetHttpProxies.patch = (params) => this._makeRequest('projects/{project}/global/targetHttpProxies/{targetHttpProxy}', 'PATCH', params);
    this.targetHttpProxies.setUrlMap = (params) => this._makeRequest('projects/{project}/targetHttpProxies/{targetHttpProxy}/setUrlMap', 'POST', params);
    this.targetHttpProxies.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/targetHttpProxies', 'GET', params);

    this.regionTargetHttpProxies = {};
    this.regionTargetHttpProxies.list = (params) => this._makeRequest('projects/{project}/regions/{region}/targetHttpProxies', 'GET', params);
    this.regionTargetHttpProxies.get = (params) => this._makeRequest('projects/{project}/regions/{region}/targetHttpProxies/{targetHttpProxy}', 'GET', params);
    this.regionTargetHttpProxies.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/targetHttpProxies', 'POST', params);
    this.regionTargetHttpProxies.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/targetHttpProxies/{targetHttpProxy}', 'DELETE', params);
    this.regionTargetHttpProxies.setUrlMap = (params) => this._makeRequest('projects/{project}/regions/{region}/targetHttpProxies/{targetHttpProxy}/setUrlMap', 'POST', params);

    this.targetHttpsProxies = {};
    this.targetHttpsProxies.list = (params) => this._makeRequest('projects/{project}/global/targetHttpsProxies', 'GET', params);
    this.targetHttpsProxies.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/targetHttpsProxies', 'GET', params);
    this.targetHttpsProxies.get = (params) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}', 'GET', params);
    this.targetHttpsProxies.insert = (params) => this._makeRequest('projects/{project}/global/targetHttpsProxies', 'POST', params);
    this.targetHttpsProxies.patch = (params) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}', 'PATCH', params);
    this.targetHttpsProxies.delete = (params) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}', 'DELETE', params);
    this.targetHttpsProxies.setUrlMap = (params) => this._makeRequest('projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setUrlMap', 'POST', params);
    this.targetHttpsProxies.setSslCertificates = (params) => this._makeRequest('projects/{project}/targetHttpsProxies/{targetHttpsProxy}/setSslCertificates', 'POST', params);
    this.targetHttpsProxies.setCertificateMap = (params) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}/setCertificateMap', 'POST', params);
    this.targetHttpsProxies.setSslPolicy = (params) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}/setSslPolicy', 'POST', params);
    this.targetHttpsProxies.setQuicOverride = (params) => this._makeRequest('projects/{project}/global/targetHttpsProxies/{targetHttpsProxy}/setQuicOverride', 'POST', params);

    this.regionTargetHttpsProxies = {};
    this.regionTargetHttpsProxies.list = (params) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies', 'GET', params);
    this.regionTargetHttpsProxies.get = (params) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}', 'GET', params);
    this.regionTargetHttpsProxies.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies', 'POST', params);
    this.regionTargetHttpsProxies.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}', 'DELETE', params);
    this.regionTargetHttpsProxies.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}', 'PATCH', params);
    this.regionTargetHttpsProxies.setUrlMap = (params) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}/setUrlMap', 'POST', params);
    this.regionTargetHttpsProxies.setSslCertificates = (params) => this._makeRequest('projects/{project}/regions/{region}/targetHttpsProxies/{targetHttpsProxy}/setSslCertificates', 'POST', params);

    this.targetInstances = {};
    this.targetInstances.list = (params) => this._makeRequest('projects/{project}/zones/{zone}/targetInstances', 'GET', params);
    this.targetInstances.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/targetInstances', 'GET', params);
    this.targetInstances.get = (params) => this._makeRequest('projects/{project}/zones/{zone}/targetInstances/{targetInstance}', 'GET', params);
    this.targetInstances.insert = (params) => this._makeRequest('projects/{project}/zones/{zone}/targetInstances', 'POST', params);
    this.targetInstances.delete = (params) => this._makeRequest('projects/{project}/zones/{zone}/targetInstances/{targetInstance}', 'DELETE', params);
    this.targetInstances.setSecurityPolicy = (params) => this._makeRequest('projects/{project}/zones/{zone}/targetInstances/{targetInstance}/setSecurityPolicy', 'POST', params);

    this.targetPools = {};
    this.targetPools.list = (params) => this._makeRequest('projects/{project}/regions/{region}/targetPools', 'GET', params);
    this.targetPools.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/targetPools', 'GET', params);
    this.targetPools.get = (params) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}', 'GET', params);
    this.targetPools.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/targetPools', 'POST', params);
    this.targetPools.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}', 'DELETE', params);
    this.targetPools.getHealth = (params) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/getHealth', 'POST', params);
    this.targetPools.addHealthCheck = (params) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/addHealthCheck', 'POST', params);
    this.targetPools.removeHealthCheck = (params) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/removeHealthCheck', 'POST', params);
    this.targetPools.addInstance = (params) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/addInstance', 'POST', params);
    this.targetPools.removeInstance = (params) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/removeInstance', 'POST', params);
    this.targetPools.setBackup = (params) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/setBackup', 'POST', params);
    this.targetPools.setSecurityPolicy = (params) => this._makeRequest('projects/{project}/regions/{region}/targetPools/{targetPool}/setSecurityPolicy', 'POST', params);

    this.targetSslProxies = {};
    this.targetSslProxies.list = (params) => this._makeRequest('projects/{project}/global/targetSslProxies', 'GET', params);
    this.targetSslProxies.get = (params) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}', 'GET', params);
    this.targetSslProxies.insert = (params) => this._makeRequest('projects/{project}/global/targetSslProxies', 'POST', params);
    this.targetSslProxies.delete = (params) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}', 'DELETE', params);
    this.targetSslProxies.setBackendService = (params) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}/setBackendService', 'POST', params);
    this.targetSslProxies.setSslCertificates = (params) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}/setSslCertificates', 'POST', params);
    this.targetSslProxies.setCertificateMap = (params) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}/setCertificateMap', 'POST', params);
    this.targetSslProxies.setProxyHeader = (params) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}/setProxyHeader', 'POST', params);
    this.targetSslProxies.setSslPolicy = (params) => this._makeRequest('projects/{project}/global/targetSslProxies/{targetSslProxy}/setSslPolicy', 'POST', params);

    this.targetTcpProxies = {};
    this.targetTcpProxies.list = (params) => this._makeRequest('projects/{project}/global/targetTcpProxies', 'GET', params);
    this.targetTcpProxies.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/targetTcpProxies', 'GET', params);
    this.targetTcpProxies.get = (params) => this._makeRequest('projects/{project}/global/targetTcpProxies/{targetTcpProxy}', 'GET', params);
    this.targetTcpProxies.insert = (params) => this._makeRequest('projects/{project}/global/targetTcpProxies', 'POST', params);
    this.targetTcpProxies.delete = (params) => this._makeRequest('projects/{project}/global/targetTcpProxies/{targetTcpProxy}', 'DELETE', params);
    this.targetTcpProxies.setBackendService = (params) => this._makeRequest('projects/{project}/global/targetTcpProxies/{targetTcpProxy}/setBackendService', 'POST', params);
    this.targetTcpProxies.setProxyHeader = (params) => this._makeRequest('projects/{project}/global/targetTcpProxies/{targetTcpProxy}/setProxyHeader', 'POST', params);

    this.regionTargetTcpProxies = {};
    this.regionTargetTcpProxies.list = (params) => this._makeRequest('projects/{project}/regions/{region}/targetTcpProxies', 'GET', params);
    this.regionTargetTcpProxies.get = (params) => this._makeRequest('projects/{project}/regions/{region}/targetTcpProxies/{targetTcpProxy}', 'GET', params);
    this.regionTargetTcpProxies.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/targetTcpProxies', 'POST', params);
    this.regionTargetTcpProxies.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/targetTcpProxies/{targetTcpProxy}', 'DELETE', params);

    this.targetVpnGateways = {};
    this.targetVpnGateways.list = (params) => this._makeRequest('projects/{project}/regions/{region}/targetVpnGateways', 'GET', params);
    this.targetVpnGateways.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/targetVpnGateways', 'GET', params);
    this.targetVpnGateways.get = (params) => this._makeRequest('projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}', 'GET', params);
    this.targetVpnGateways.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/targetVpnGateways', 'POST', params);
    this.targetVpnGateways.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/targetVpnGateways/{targetVpnGateway}', 'DELETE', params);
    this.targetVpnGateways.setLabels = (params) => this._makeRequest('projects/{project}/regions/{region}/targetVpnGateways/{resource}/setLabels', 'POST', params);

    this.urlMaps = {};
    this.urlMaps.list = (params) => this._makeRequest('projects/{project}/global/urlMaps', 'GET', params);
    this.urlMaps.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/urlMaps', 'GET', params);
    this.urlMaps.get = (params) => this._makeRequest('projects/{project}/global/urlMaps/{urlMap}', 'GET', params);
    this.urlMaps.insert = (params) => this._makeRequest('projects/{project}/global/urlMaps', 'POST', params);
    this.urlMaps.delete = (params) => this._makeRequest('projects/{project}/global/urlMaps/{urlMap}', 'DELETE', params);
    this.urlMaps.update = (params) => this._makeRequest('projects/{project}/global/urlMaps/{urlMap}', 'PUT', params);
    this.urlMaps.patch = (params) => this._makeRequest('projects/{project}/global/urlMaps/{urlMap}', 'PATCH', params);
    this.urlMaps.validate = (params) => this._makeRequest('projects/{project}/global/urlMaps/{urlMap}/validate', 'POST', params);
    this.urlMaps.invalidateCache = (params) => this._makeRequest('projects/{project}/global/urlMaps/{urlMap}/invalidateCache', 'POST', params);

    this.regionUrlMaps = {};
    this.regionUrlMaps.list = (params) => this._makeRequest('projects/{project}/regions/{region}/urlMaps', 'GET', params);
    this.regionUrlMaps.get = (params) => this._makeRequest('projects/{project}/regions/{region}/urlMaps/{urlMap}', 'GET', params);
    this.regionUrlMaps.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/urlMaps', 'POST', params);
    this.regionUrlMaps.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/urlMaps/{urlMap}', 'DELETE', params);
    this.regionUrlMaps.update = (params) => this._makeRequest('projects/{project}/regions/{region}/urlMaps/{urlMap}', 'PUT', params);
    this.regionUrlMaps.patch = (params) => this._makeRequest('projects/{project}/regions/{region}/urlMaps/{urlMap}', 'PATCH', params);
    this.regionUrlMaps.validate = (params) => this._makeRequest('projects/{project}/regions/{region}/urlMaps/{urlMap}/validate', 'POST', params);

    this.vpnGateways = {};
    this.vpnGateways.list = (params) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways', 'GET', params);
    this.vpnGateways.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/vpnGateways', 'GET', params);
    this.vpnGateways.get = (params) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways/{vpnGateway}', 'GET', params);
    this.vpnGateways.getStatus = (params) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways/{vpnGateway}/getStatus', 'GET', params);
    this.vpnGateways.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways', 'POST', params);
    this.vpnGateways.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways/{vpnGateway}', 'DELETE', params);
    this.vpnGateways.testIamPermissions = (params) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways/{resource}/testIamPermissions', 'POST', params);
    this.vpnGateways.setLabels = (params) => this._makeRequest('projects/{project}/regions/{region}/vpnGateways/{resource}/setLabels', 'POST', params);

    this.vpnTunnels = {};
    this.vpnTunnels.list = (params) => this._makeRequest('projects/{project}/regions/{region}/vpnTunnels', 'GET', params);
    this.vpnTunnels.aggregatedList = (params) => this._makeRequest('projects/{project}/aggregated/vpnTunnels', 'GET', params);
    this.vpnTunnels.get = (params) => this._makeRequest('projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}', 'GET', params);
    this.vpnTunnels.insert = (params) => this._makeRequest('projects/{project}/regions/{region}/vpnTunnels', 'POST', params);
    this.vpnTunnels.delete = (params) => this._makeRequest('projects/{project}/regions/{region}/vpnTunnels/{vpnTunnel}', 'DELETE', params);
    this.vpnTunnels.setLabels = (params) => this._makeRequest('projects/{project}/regions/{region}/vpnTunnels/{resource}/setLabels', 'POST', params);

    this.zones = {};
    this.zones.list = (params) => this._makeRequest('projects/{project}/zones', 'GET', params);
    this.zones.get = (params) => this._makeRequest('projects/{project}/zones/{zone}', 'GET', params);

    this.regionZones = {};
    this.regionZones.list = (params) => this._makeRequest('projects/{project}/regions/{region}/zones', 'GET', params);
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
