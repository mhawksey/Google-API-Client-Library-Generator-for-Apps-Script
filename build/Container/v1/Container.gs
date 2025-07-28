
/**
 * Google Apps Script client library for the Kubernetes Engine API
 * Documentation URL: https://cloud.google.com/kubernetes-engine/docs/
 * @class
 */
class Container {
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
    this._rootUrl = 'https://container.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getServerConfig = (params) => this._makeRequest('v1/{+name}/serverConfig', 'GET', params);

    this.projects.locations.clusters = {};
    this.projects.locations.clusters.list = (params) => this._makeRequest('v1/{+parent}/clusters', 'GET', params);
    this.projects.locations.clusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.clusters.create = (params) => this._makeRequest('v1/{+parent}/clusters', 'POST', params);
    this.projects.locations.clusters.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.clusters.setLogging = (params) => this._makeRequest('v1/{+name}:setLogging', 'POST', params);
    this.projects.locations.clusters.setMonitoring = (params) => this._makeRequest('v1/{+name}:setMonitoring', 'POST', params);
    this.projects.locations.clusters.setAddons = (params) => this._makeRequest('v1/{+name}:setAddons', 'POST', params);
    this.projects.locations.clusters.setLocations = (params) => this._makeRequest('v1/{+name}:setLocations', 'POST', params);
    this.projects.locations.clusters.updateMaster = (params) => this._makeRequest('v1/{+name}:updateMaster', 'POST', params);
    this.projects.locations.clusters.setMasterAuth = (params) => this._makeRequest('v1/{+name}:setMasterAuth', 'POST', params);
    this.projects.locations.clusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.clusters.getJwks = (params) => this._makeRequest('v1/{+parent}/jwks', 'GET', params);
    this.projects.locations.clusters.setResourceLabels = (params) => this._makeRequest('v1/{+name}:setResourceLabels', 'POST', params);
    this.projects.locations.clusters.setLegacyAbac = (params) => this._makeRequest('v1/{+name}:setLegacyAbac', 'POST', params);
    this.projects.locations.clusters.startIpRotation = (params) => this._makeRequest('v1/{+name}:startIpRotation', 'POST', params);
    this.projects.locations.clusters.completeIpRotation = (params) => this._makeRequest('v1/{+name}:completeIpRotation', 'POST', params);
    this.projects.locations.clusters.setNetworkPolicy = (params) => this._makeRequest('v1/{+name}:setNetworkPolicy', 'POST', params);
    this.projects.locations.clusters.setMaintenancePolicy = (params) => this._makeRequest('v1/{+name}:setMaintenancePolicy', 'POST', params);
    this.projects.locations.clusters.checkAutopilotCompatibility = (params) => this._makeRequest('v1/{+name}:checkAutopilotCompatibility', 'GET', params);
    this.projects.locations.clusters.fetchClusterUpgradeInfo = (params) => this._makeRequest('v1/{+name}:fetchClusterUpgradeInfo', 'GET', params);

    this.projects.locations.clusters.nodePools = {};
    this.projects.locations.clusters.nodePools.update = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.clusters.nodePools.setAutoscaling = (params) => this._makeRequest('v1/{+name}:setAutoscaling', 'POST', params);
    this.projects.locations.clusters.nodePools.list = (params) => this._makeRequest('v1/{+parent}/nodePools', 'GET', params);
    this.projects.locations.clusters.nodePools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.clusters.nodePools.create = (params) => this._makeRequest('v1/{+parent}/nodePools', 'POST', params);
    this.projects.locations.clusters.nodePools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.clusters.nodePools.completeUpgrade = (params) => this._makeRequest('v1/{+name}:completeUpgrade', 'POST', params);
    this.projects.locations.clusters.nodePools.rollback = (params) => this._makeRequest('v1/{+name}:rollback', 'POST', params);
    this.projects.locations.clusters.nodePools.setManagement = (params) => this._makeRequest('v1/{+name}:setManagement', 'POST', params);
    this.projects.locations.clusters.nodePools.setSize = (params) => this._makeRequest('v1/{+name}:setSize', 'POST', params);
    this.projects.locations.clusters.nodePools.fetchNodePoolUpgradeInfo = (params) => this._makeRequest('v1/{+name}:fetchNodePoolUpgradeInfo', 'GET', params);

    this.projects.locations.clusters.well-known = {};
    this.projects.locations.clusters.well-known.getOpenid-configuration = (params) => this._makeRequest('v1/{+parent}/.well-known/openid-configuration', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+parent}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.zones = {};
    this.projects.zones.getServerconfig = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/serverconfig', 'GET', params);

    this.projects.zones.clusters = {};
    this.projects.zones.clusters.list = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters', 'GET', params);
    this.projects.zones.clusters.get = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}', 'GET', params);
    this.projects.zones.clusters.create = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters', 'POST', params);
    this.projects.zones.clusters.update = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}', 'PUT', params);
    this.projects.zones.clusters.logging = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/logging', 'POST', params);
    this.projects.zones.clusters.monitoring = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/monitoring', 'POST', params);
    this.projects.zones.clusters.addons = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/addons', 'POST', params);
    this.projects.zones.clusters.locations = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/locations', 'POST', params);
    this.projects.zones.clusters.master = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/master', 'POST', params);
    this.projects.zones.clusters.setMasterAuth = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMasterAuth', 'POST', params);
    this.projects.zones.clusters.delete = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}', 'DELETE', params);
    this.projects.zones.clusters.resourceLabels = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/resourceLabels', 'POST', params);
    this.projects.zones.clusters.legacyAbac = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/legacyAbac', 'POST', params);
    this.projects.zones.clusters.startIpRotation = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:startIpRotation', 'POST', params);
    this.projects.zones.clusters.completeIpRotation = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:completeIpRotation', 'POST', params);
    this.projects.zones.clusters.setNetworkPolicy = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setNetworkPolicy', 'POST', params);
    this.projects.zones.clusters.setMaintenancePolicy = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}:setMaintenancePolicy', 'POST', params);
    this.projects.zones.clusters.fetchClusterUpgradeInfo = (params) => this._makeRequest('v1/{+name}:fetchClusterUpgradeInfo', 'GET', params);

    this.projects.zones.clusters.nodePools = {};
    this.projects.zones.clusters.nodePools.update = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/update', 'POST', params);
    this.projects.zones.clusters.nodePools.autoscaling = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/autoscaling', 'POST', params);
    this.projects.zones.clusters.nodePools.list = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools', 'GET', params);
    this.projects.zones.clusters.nodePools.get = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}', 'GET', params);
    this.projects.zones.clusters.nodePools.create = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools', 'POST', params);
    this.projects.zones.clusters.nodePools.delete = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}', 'DELETE', params);
    this.projects.zones.clusters.nodePools.rollback = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}:rollback', 'POST', params);
    this.projects.zones.clusters.nodePools.setManagement = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setManagement', 'POST', params);
    this.projects.zones.clusters.nodePools.setSize = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/clusters/{clusterId}/nodePools/{nodePoolId}/setSize', 'POST', params);
    this.projects.zones.clusters.nodePools.fetchNodePoolUpgradeInfo = (params) => this._makeRequest('v1/{+name}:fetchNodePoolUpgradeInfo', 'GET', params);

    this.projects.zones.operations = {};
    this.projects.zones.operations.list = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/operations', 'GET', params);
    this.projects.zones.operations.get = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/operations/{operationId}', 'GET', params);
    this.projects.zones.operations.cancel = (params) => this._makeRequest('v1/projects/{projectId}/zones/{zone}/operations/{operationId}:cancel', 'POST', params);

    this.projects.aggregated = {};

    this.projects.aggregated.usableSubnetworks = {};
    this.projects.aggregated.usableSubnetworks.list = (params) => this._makeRequest('v1/{+parent}/aggregated/usableSubnetworks', 'GET', params);
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
