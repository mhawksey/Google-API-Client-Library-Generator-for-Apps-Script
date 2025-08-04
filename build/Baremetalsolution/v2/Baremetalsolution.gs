
/**
 * Google Apps Script client library for the Bare Metal Solution API
 * Documentation URL: https://cloud.google.com/bare-metal
 * @class
 */
class Baremetalsolution {
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
    this._rootUrl = 'https://baremetalsolution.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.instances = {};
    this.projects.locations.instances.list = (params) => this._makeRequest('v2/{+parent}/instances', 'GET', params);
    this.projects.locations.instances.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.instances.loadAuthInfo = (params) => this._makeRequest('v2/{+name}:loadAuthInfo', 'GET', params);
    this.projects.locations.instances.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.instances.reimage = (params) => this._makeRequest('v2/{+name}:reimage', 'POST', params);
    this.projects.locations.instances.enableHyperthreading = (params) => this._makeRequest('v2/{+name}:enableHyperthreading', 'POST', params);
    this.projects.locations.instances.disableHyperthreading = (params) => this._makeRequest('v2/{+name}:disableHyperthreading', 'POST', params);
    this.projects.locations.instances.rename = (params) => this._makeRequest('v2/{+name}:rename', 'POST', params);
    this.projects.locations.instances.reset = (params) => this._makeRequest('v2/{+name}:reset', 'POST', params);
    this.projects.locations.instances.start = (params) => this._makeRequest('v2/{+name}:start', 'POST', params);
    this.projects.locations.instances.stop = (params) => this._makeRequest('v2/{+name}:stop', 'POST', params);
    this.projects.locations.instances.enableInteractiveSerialConsole = (params) => this._makeRequest('v2/{+name}:enableInteractiveSerialConsole', 'POST', params);
    this.projects.locations.instances.disableInteractiveSerialConsole = (params) => this._makeRequest('v2/{+name}:disableInteractiveSerialConsole', 'POST', params);
    this.projects.locations.instances.detachLun = (params) => this._makeRequest('v2/{+instance}:detachLun', 'POST', params);

    this.projects.locations.sshKeys = {};
    this.projects.locations.sshKeys.list = (params) => this._makeRequest('v2/{+parent}/sshKeys', 'GET', params);
    this.projects.locations.sshKeys.create = (params) => this._makeRequest('v2/{+parent}/sshKeys', 'POST', params);
    this.projects.locations.sshKeys.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.volumes = {};
    this.projects.locations.volumes.list = (params) => this._makeRequest('v2/{+parent}/volumes', 'GET', params);
    this.projects.locations.volumes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.volumes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.volumes.rename = (params) => this._makeRequest('v2/{+name}:rename', 'POST', params);
    this.projects.locations.volumes.evict = (params) => this._makeRequest('v2/{+name}:evict', 'POST', params);
    this.projects.locations.volumes.resize = (params) => this._makeRequest('v2/{+volume}:resize', 'POST', params);

    this.projects.locations.volumes.snapshots = {};
    this.projects.locations.volumes.snapshots.create = (params) => this._makeRequest('v2/{+parent}/snapshots', 'POST', params);
    this.projects.locations.volumes.snapshots.restoreVolumeSnapshot = (params) => this._makeRequest('v2/{+volumeSnapshot}:restoreVolumeSnapshot', 'POST', params);
    this.projects.locations.volumes.snapshots.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.volumes.snapshots.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.volumes.snapshots.list = (params) => this._makeRequest('v2/{+parent}/snapshots', 'GET', params);

    this.projects.locations.volumes.luns = {};
    this.projects.locations.volumes.luns.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.volumes.luns.list = (params) => this._makeRequest('v2/{+parent}/luns', 'GET', params);
    this.projects.locations.volumes.luns.evict = (params) => this._makeRequest('v2/{+name}:evict', 'POST', params);

    this.projects.locations.networks = {};
    this.projects.locations.networks.list = (params) => this._makeRequest('v2/{+parent}/networks', 'GET', params);
    this.projects.locations.networks.listNetworkUsage = (params) => this._makeRequest('v2/{+location}/networks:listNetworkUsage', 'GET', params);
    this.projects.locations.networks.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.networks.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.networks.rename = (params) => this._makeRequest('v2/{+name}:rename', 'POST', params);

    this.projects.locations.nfsShares = {};
    this.projects.locations.nfsShares.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.nfsShares.list = (params) => this._makeRequest('v2/{+parent}/nfsShares', 'GET', params);
    this.projects.locations.nfsShares.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.nfsShares.create = (params) => this._makeRequest('v2/{+parent}/nfsShares', 'POST', params);
    this.projects.locations.nfsShares.rename = (params) => this._makeRequest('v2/{+name}:rename', 'POST', params);
    this.projects.locations.nfsShares.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.provisioningQuotas = {};
    this.projects.locations.provisioningQuotas.list = (params) => this._makeRequest('v2/{+parent}/provisioningQuotas', 'GET', params);

    this.projects.locations.provisioningConfigs = {};
    this.projects.locations.provisioningConfigs.submit = (params) => this._makeRequest('v2/{+parent}/provisioningConfigs:submit', 'POST', params);
    this.projects.locations.provisioningConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.provisioningConfigs.create = (params) => this._makeRequest('v2/{+parent}/provisioningConfigs', 'POST', params);
    this.projects.locations.provisioningConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.osImages = {};
    this.projects.locations.osImages.list = (params) => this._makeRequest('v2/{+parent}/osImages', 'GET', params);
    this.projects.locations.osImages.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
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
