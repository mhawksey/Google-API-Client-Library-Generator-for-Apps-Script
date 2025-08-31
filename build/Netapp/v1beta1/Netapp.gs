
/**
 * Google Apps Script client library for the NetApp API
 * Documentation URL: https://cloud.google.com/netapp/
 * @class
 */
class Netapp {
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
    this._rootUrl = 'https://netapp.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.storagePools = {};
    this.projects.locations.storagePools.list = (params) => this._makeRequest('v1beta1/{+parent}/storagePools', 'GET', params);
    this.projects.locations.storagePools.create = (params) => this._makeRequest('v1beta1/{+parent}/storagePools', 'POST', params);
    this.projects.locations.storagePools.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.storagePools.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.storagePools.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.storagePools.validateDirectoryService = (params) => this._makeRequest('v1beta1/{+name}:validateDirectoryService', 'POST', params);
    this.projects.locations.storagePools.switch = (params) => this._makeRequest('v1beta1/{+name}:switch', 'POST', params);

    this.projects.locations.volumes = {};
    this.projects.locations.volumes.list = (params) => this._makeRequest('v1beta1/{+parent}/volumes', 'GET', params);
    this.projects.locations.volumes.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.volumes.create = (params) => this._makeRequest('v1beta1/{+parent}/volumes', 'POST', params);
    this.projects.locations.volumes.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.volumes.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.volumes.revert = (params) => this._makeRequest('v1beta1/{+name}:revert', 'POST', params);
    this.projects.locations.volumes.establishPeering = (params) => this._makeRequest('v1beta1/{+name}:establishPeering', 'POST', params);
    this.projects.locations.volumes.restore = (params) => this._makeRequest('v1beta1/{+name}:restore', 'POST', params);

    this.projects.locations.volumes.snapshots = {};
    this.projects.locations.volumes.snapshots.list = (params) => this._makeRequest('v1beta1/{+parent}/snapshots', 'GET', params);
    this.projects.locations.volumes.snapshots.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.volumes.snapshots.create = (params) => this._makeRequest('v1beta1/{+parent}/snapshots', 'POST', params);
    this.projects.locations.volumes.snapshots.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.volumes.snapshots.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.volumes.replications = {};
    this.projects.locations.volumes.replications.list = (params) => this._makeRequest('v1beta1/{+parent}/replications', 'GET', params);
    this.projects.locations.volumes.replications.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.volumes.replications.create = (params) => this._makeRequest('v1beta1/{+parent}/replications', 'POST', params);
    this.projects.locations.volumes.replications.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.volumes.replications.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.volumes.replications.stop = (params) => this._makeRequest('v1beta1/{+name}:stop', 'POST', params);
    this.projects.locations.volumes.replications.resume = (params) => this._makeRequest('v1beta1/{+name}:resume', 'POST', params);
    this.projects.locations.volumes.replications.reverseDirection = (params) => this._makeRequest('v1beta1/{+name}:reverseDirection', 'POST', params);
    this.projects.locations.volumes.replications.establishPeering = (params) => this._makeRequest('v1beta1/{+name}:establishPeering', 'POST', params);
    this.projects.locations.volumes.replications.sync = (params) => this._makeRequest('v1beta1/{+name}:sync', 'POST', params);

    this.projects.locations.volumes.quotaRules = {};
    this.projects.locations.volumes.quotaRules.list = (params) => this._makeRequest('v1beta1/{+parent}/quotaRules', 'GET', params);
    this.projects.locations.volumes.quotaRules.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.volumes.quotaRules.create = (params) => this._makeRequest('v1beta1/{+parent}/quotaRules', 'POST', params);
    this.projects.locations.volumes.quotaRules.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.volumes.quotaRules.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.activeDirectories = {};
    this.projects.locations.activeDirectories.list = (params) => this._makeRequest('v1beta1/{+parent}/activeDirectories', 'GET', params);
    this.projects.locations.activeDirectories.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.activeDirectories.create = (params) => this._makeRequest('v1beta1/{+parent}/activeDirectories', 'POST', params);
    this.projects.locations.activeDirectories.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.activeDirectories.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.kmsConfigs = {};
    this.projects.locations.kmsConfigs.list = (params) => this._makeRequest('v1beta1/{+parent}/kmsConfigs', 'GET', params);
    this.projects.locations.kmsConfigs.create = (params) => this._makeRequest('v1beta1/{+parent}/kmsConfigs', 'POST', params);
    this.projects.locations.kmsConfigs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.kmsConfigs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.kmsConfigs.encrypt = (params) => this._makeRequest('v1beta1/{+name}:encrypt', 'POST', params);
    this.projects.locations.kmsConfigs.verify = (params) => this._makeRequest('v1beta1/{+name}:verify', 'POST', params);
    this.projects.locations.kmsConfigs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.backupVaults = {};
    this.projects.locations.backupVaults.create = (params) => this._makeRequest('v1beta1/{+parent}/backupVaults', 'POST', params);
    this.projects.locations.backupVaults.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.backupVaults.list = (params) => this._makeRequest('v1beta1/{+parent}/backupVaults', 'GET', params);
    this.projects.locations.backupVaults.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.backupVaults.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.backupVaults.backups = {};
    this.projects.locations.backupVaults.backups.create = (params) => this._makeRequest('v1beta1/{+parent}/backups', 'POST', params);
    this.projects.locations.backupVaults.backups.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.backupVaults.backups.list = (params) => this._makeRequest('v1beta1/{+parent}/backups', 'GET', params);
    this.projects.locations.backupVaults.backups.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.backupVaults.backups.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.backupPolicies = {};
    this.projects.locations.backupPolicies.create = (params) => this._makeRequest('v1beta1/{+parent}/backupPolicies', 'POST', params);
    this.projects.locations.backupPolicies.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.backupPolicies.list = (params) => this._makeRequest('v1beta1/{+parent}/backupPolicies', 'GET', params);
    this.projects.locations.backupPolicies.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.backupPolicies.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
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
