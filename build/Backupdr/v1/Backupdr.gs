
/**
 * Google Apps Script client library for the Backup and DR Service API
 * Documentation URL: https://cloud.google.com/backup-disaster-recovery
 * @class
 */
class Backupdr {
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
    this._rootUrl = 'https://backupdr.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.managementServers = {};
    this.projects.locations.managementServers.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.managementServers.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.managementServers.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.managementServers.list = (params) => this._makeRequest('v1/{+parent}/managementServers', 'GET', params);
    this.projects.locations.managementServers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.managementServers.create = (params) => this._makeRequest('v1/{+parent}/managementServers', 'POST', params);
    this.projects.locations.managementServers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.managementServers.msComplianceMetadata = (params) => this._makeRequest('v1/{+parent}:msComplianceMetadata', 'POST', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.backupVaults = {};
    this.projects.locations.backupVaults.create = (params) => this._makeRequest('v1/{+parent}/backupVaults', 'POST', params);
    this.projects.locations.backupVaults.list = (params) => this._makeRequest('v1/{+parent}/backupVaults', 'GET', params);
    this.projects.locations.backupVaults.fetchUsable = (params) => this._makeRequest('v1/{+parent}/backupVaults:fetchUsable', 'GET', params);
    this.projects.locations.backupVaults.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.backupVaults.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.backupVaults.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.backupVaults.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.backupVaults.dataSources = {};
    this.projects.locations.backupVaults.dataSources.list = (params) => this._makeRequest('v1/{+parent}/dataSources', 'GET', params);
    this.projects.locations.backupVaults.dataSources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.backupVaults.dataSources.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.backupVaults.dataSources.remove = (params) => this._makeRequest('v1/{+name}:remove', 'POST', params);
    this.projects.locations.backupVaults.dataSources.setInternalStatus = (params) => this._makeRequest('v1/{+dataSource}:setInternalStatus', 'POST', params);
    this.projects.locations.backupVaults.dataSources.initiateBackup = (params) => this._makeRequest('v1/{+dataSource}:initiateBackup', 'POST', params);
    this.projects.locations.backupVaults.dataSources.abandonBackup = (params) => this._makeRequest('v1/{+dataSource}:abandonBackup', 'POST', params);
    this.projects.locations.backupVaults.dataSources.finalizeBackup = (params) => this._makeRequest('v1/{+dataSource}:finalizeBackup', 'POST', params);
    this.projects.locations.backupVaults.dataSources.fetchAccessToken = (params) => this._makeRequest('v1/{+name}:fetchAccessToken', 'POST', params);

    this.projects.locations.backupVaults.dataSources.backups = {};
    this.projects.locations.backupVaults.dataSources.backups.list = (params) => this._makeRequest('v1/{+parent}/backups', 'GET', params);
    this.projects.locations.backupVaults.dataSources.backups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.backupVaults.dataSources.backups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.backupVaults.dataSources.backups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.backupVaults.dataSources.backups.restore = (params) => this._makeRequest('v1/{+name}:restore', 'POST', params);

    this.projects.locations.backupPlans = {};
    this.projects.locations.backupPlans.create = (params) => this._makeRequest('v1/{+parent}/backupPlans', 'POST', params);
    this.projects.locations.backupPlans.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.backupPlans.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.backupPlans.list = (params) => this._makeRequest('v1/{+parent}/backupPlans', 'GET', params);
    this.projects.locations.backupPlans.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.backupPlans.revisions = {};
    this.projects.locations.backupPlans.revisions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.backupPlans.revisions.list = (params) => this._makeRequest('v1/{+parent}/revisions', 'GET', params);

    this.projects.locations.backupPlanAssociations = {};
    this.projects.locations.backupPlanAssociations.create = (params) => this._makeRequest('v1/{+parent}/backupPlanAssociations', 'POST', params);
    this.projects.locations.backupPlanAssociations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.backupPlanAssociations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.backupPlanAssociations.list = (params) => this._makeRequest('v1/{+parent}/backupPlanAssociations', 'GET', params);
    this.projects.locations.backupPlanAssociations.fetchForResourceType = (params) => this._makeRequest('v1/{+parent}/backupPlanAssociations:fetchForResourceType', 'GET', params);
    this.projects.locations.backupPlanAssociations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.backupPlanAssociations.triggerBackup = (params) => this._makeRequest('v1/{+name}:triggerBackup', 'POST', params);

    this.projects.locations.dataSourceReferences = {};
    this.projects.locations.dataSourceReferences.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.dataSourceReferences.fetchForResourceType = (params) => this._makeRequest('v1/{+parent}/dataSourceReferences:fetchForResourceType', 'GET', params);

    this.projects.locations.serviceConfig = {};
    this.projects.locations.serviceConfig.initialize = (params) => this._makeRequest('v1/{+name}:initialize', 'POST', params);

    this.projects.locations.resourceBackupConfigs = {};
    this.projects.locations.resourceBackupConfigs.list = (params) => this._makeRequest('v1/{+parent}/resourceBackupConfigs', 'GET', params);
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
