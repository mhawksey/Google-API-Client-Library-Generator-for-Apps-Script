
/**
 * Google Apps Script client library for the VMware Engine API
 * Documentation URL: https://cloud.google.com/solutions/vmware-as-a-service
 * @class
 */
class Vmwareengine {
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
    this._rootUrl = 'https://vmwareengine.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getDnsBindPermission = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.privateClouds = {};
    this.projects.locations.privateClouds.list = (params) => this._makeRequest('v1/{+parent}/privateClouds', 'GET', params);
    this.projects.locations.privateClouds.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.privateClouds.create = (params) => this._makeRequest('v1/{+parent}/privateClouds', 'POST', params);
    this.projects.locations.privateClouds.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.privateClouds.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.privateClouds.undelete = (params) => this._makeRequest('v1/{+name}:undelete', 'POST', params);
    this.projects.locations.privateClouds.showNsxCredentials = (params) => this._makeRequest('v1/{+privateCloud}:showNsxCredentials', 'GET', params);
    this.projects.locations.privateClouds.showVcenterCredentials = (params) => this._makeRequest('v1/{+privateCloud}:showVcenterCredentials', 'GET', params);
    this.projects.locations.privateClouds.resetNsxCredentials = (params) => this._makeRequest('v1/{+privateCloud}:resetNsxCredentials', 'POST', params);
    this.projects.locations.privateClouds.resetVcenterCredentials = (params) => this._makeRequest('v1/{+privateCloud}:resetVcenterCredentials', 'POST', params);
    this.projects.locations.privateClouds.getDnsForwarding = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.privateClouds.updateDnsForwarding = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.privateClouds.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.privateClouds.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.privateClouds.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.privateClouds.clusters = {};
    this.projects.locations.privateClouds.clusters.list = (params) => this._makeRequest('v1/{+parent}/clusters', 'GET', params);
    this.projects.locations.privateClouds.clusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.privateClouds.clusters.create = (params) => this._makeRequest('v1/{+parent}/clusters', 'POST', params);
    this.projects.locations.privateClouds.clusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.privateClouds.clusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.privateClouds.clusters.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.privateClouds.clusters.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.privateClouds.clusters.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.privateClouds.clusters.nodes = {};
    this.projects.locations.privateClouds.clusters.nodes.list = (params) => this._makeRequest('v1/{+parent}/nodes', 'GET', params);
    this.projects.locations.privateClouds.clusters.nodes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.privateClouds.externalAddresses = {};
    this.projects.locations.privateClouds.externalAddresses.list = (params) => this._makeRequest('v1/{+parent}/externalAddresses', 'GET', params);
    this.projects.locations.privateClouds.externalAddresses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.privateClouds.externalAddresses.create = (params) => this._makeRequest('v1/{+parent}/externalAddresses', 'POST', params);
    this.projects.locations.privateClouds.externalAddresses.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.privateClouds.externalAddresses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.privateClouds.subnets = {};
    this.projects.locations.privateClouds.subnets.list = (params) => this._makeRequest('v1/{+parent}/subnets', 'GET', params);
    this.projects.locations.privateClouds.subnets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.privateClouds.subnets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.privateClouds.loggingServers = {};
    this.projects.locations.privateClouds.loggingServers.list = (params) => this._makeRequest('v1/{+parent}/loggingServers', 'GET', params);
    this.projects.locations.privateClouds.loggingServers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.privateClouds.loggingServers.create = (params) => this._makeRequest('v1/{+parent}/loggingServers', 'POST', params);
    this.projects.locations.privateClouds.loggingServers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.privateClouds.loggingServers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.privateClouds.hcxActivationKeys = {};
    this.projects.locations.privateClouds.hcxActivationKeys.create = (params) => this._makeRequest('v1/{+parent}/hcxActivationKeys', 'POST', params);
    this.projects.locations.privateClouds.hcxActivationKeys.list = (params) => this._makeRequest('v1/{+parent}/hcxActivationKeys', 'GET', params);
    this.projects.locations.privateClouds.hcxActivationKeys.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.privateClouds.hcxActivationKeys.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.privateClouds.hcxActivationKeys.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.privateClouds.hcxActivationKeys.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.privateClouds.managementDnsZoneBindings = {};
    this.projects.locations.privateClouds.managementDnsZoneBindings.list = (params) => this._makeRequest('v1/{+parent}/managementDnsZoneBindings', 'GET', params);
    this.projects.locations.privateClouds.managementDnsZoneBindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.privateClouds.managementDnsZoneBindings.create = (params) => this._makeRequest('v1/{+parent}/managementDnsZoneBindings', 'POST', params);
    this.projects.locations.privateClouds.managementDnsZoneBindings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.privateClouds.managementDnsZoneBindings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.privateClouds.managementDnsZoneBindings.repair = (params) => this._makeRequest('v1/{+name}:repair', 'POST', params);

    this.projects.locations.privateClouds.upgrades = {};
    this.projects.locations.privateClouds.upgrades.list = (params) => this._makeRequest('v1/{+parent}/upgrades', 'GET', params);
    this.projects.locations.privateClouds.upgrades.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.privateClouds.upgrades.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.networkPolicies = {};
    this.projects.locations.networkPolicies.fetchExternalAddresses = (params) => this._makeRequest('v1/{+networkPolicy}:fetchExternalAddresses', 'GET', params);
    this.projects.locations.networkPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.networkPolicies.list = (params) => this._makeRequest('v1/{+parent}/networkPolicies', 'GET', params);
    this.projects.locations.networkPolicies.create = (params) => this._makeRequest('v1/{+parent}/networkPolicies', 'POST', params);
    this.projects.locations.networkPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.networkPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.networkPolicies.externalAccessRules = {};
    this.projects.locations.networkPolicies.externalAccessRules.list = (params) => this._makeRequest('v1/{+parent}/externalAccessRules', 'GET', params);
    this.projects.locations.networkPolicies.externalAccessRules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.networkPolicies.externalAccessRules.create = (params) => this._makeRequest('v1/{+parent}/externalAccessRules', 'POST', params);
    this.projects.locations.networkPolicies.externalAccessRules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.networkPolicies.externalAccessRules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.nodeTypes = {};
    this.projects.locations.nodeTypes.list = (params) => this._makeRequest('v1/{+parent}/nodeTypes', 'GET', params);
    this.projects.locations.nodeTypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.networkPeerings = {};
    this.projects.locations.networkPeerings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.networkPeerings.list = (params) => this._makeRequest('v1/{+parent}/networkPeerings', 'GET', params);
    this.projects.locations.networkPeerings.create = (params) => this._makeRequest('v1/{+parent}/networkPeerings', 'POST', params);
    this.projects.locations.networkPeerings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.networkPeerings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.networkPeerings.peeringRoutes = {};
    this.projects.locations.networkPeerings.peeringRoutes.list = (params) => this._makeRequest('v1/{+parent}/peeringRoutes', 'GET', params);

    this.projects.locations.vmwareEngineNetworks = {};
    this.projects.locations.vmwareEngineNetworks.create = (params) => this._makeRequest('v1/{+parent}/vmwareEngineNetworks', 'POST', params);
    this.projects.locations.vmwareEngineNetworks.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.vmwareEngineNetworks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.vmwareEngineNetworks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.vmwareEngineNetworks.list = (params) => this._makeRequest('v1/{+parent}/vmwareEngineNetworks', 'GET', params);

    this.projects.locations.privateConnections = {};
    this.projects.locations.privateConnections.create = (params) => this._makeRequest('v1/{+parent}/privateConnections', 'POST', params);
    this.projects.locations.privateConnections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.privateConnections.list = (params) => this._makeRequest('v1/{+parent}/privateConnections', 'GET', params);
    this.projects.locations.privateConnections.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.privateConnections.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.privateConnections.peeringRoutes = {};
    this.projects.locations.privateConnections.peeringRoutes.list = (params) => this._makeRequest('v1/{+parent}/peeringRoutes', 'GET', params);

    this.projects.locations.dnsBindPermission = {};
    this.projects.locations.dnsBindPermission.grant = (params) => this._makeRequest('v1/{+name}:grant', 'POST', params);
    this.projects.locations.dnsBindPermission.revoke = (params) => this._makeRequest('v1/{+name}:revoke', 'POST', params);

    this.projects.locations.announcements = {};
    this.projects.locations.announcements.list = (params) => this._makeRequest('v1/{+parent}/announcements', 'GET', params);
    this.projects.locations.announcements.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
