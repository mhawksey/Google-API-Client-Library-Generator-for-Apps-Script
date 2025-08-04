
/**
 * Google Apps Script client library for the Backup for GKE API
 * Documentation URL: https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke
 * @class
 */
class Gkebackup {
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
    this._rootUrl = 'https://gkebackup.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.backupPlans = {};
    this.projects.locations.backupPlans.create = (params) => this._makeRequest('v1/{+parent}/backupPlans', 'POST', params);
    this.projects.locations.backupPlans.list = (params) => this._makeRequest('v1/{+parent}/backupPlans', 'GET', params);
    this.projects.locations.backupPlans.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.backupPlans.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.backupPlans.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.backupPlans.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.backupPlans.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.backupPlans.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.backupPlans.backups = {};
    this.projects.locations.backupPlans.backups.create = (params) => this._makeRequest('v1/{+parent}/backups', 'POST', params);
    this.projects.locations.backupPlans.backups.list = (params) => this._makeRequest('v1/{+parent}/backups', 'GET', params);
    this.projects.locations.backupPlans.backups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.backupPlans.backups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.backupPlans.backups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.backupPlans.backups.getBackupIndexDownloadUrl = (params) => this._makeRequest('v1/{+backup}:getBackupIndexDownloadUrl', 'GET', params);
    this.projects.locations.backupPlans.backups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.backupPlans.backups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.backupPlans.backups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.backupPlans.backups.volumeBackups = {};
    this.projects.locations.backupPlans.backups.volumeBackups.list = (params) => this._makeRequest('v1/{+parent}/volumeBackups', 'GET', params);
    this.projects.locations.backupPlans.backups.volumeBackups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.backupPlans.backups.volumeBackups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.backupPlans.backups.volumeBackups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.backupPlans.backups.volumeBackups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.backupChannels = {};
    this.projects.locations.backupChannels.create = (params) => this._makeRequest('v1/{+parent}/backupChannels', 'POST', params);
    this.projects.locations.backupChannels.list = (params) => this._makeRequest('v1/{+parent}/backupChannels', 'GET', params);
    this.projects.locations.backupChannels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.backupChannels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.backupChannels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.backupChannels.backupPlanBindings = {};
    this.projects.locations.backupChannels.backupPlanBindings.list = (params) => this._makeRequest('v1/{+parent}/backupPlanBindings', 'GET', params);
    this.projects.locations.backupChannels.backupPlanBindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.restorePlans = {};
    this.projects.locations.restorePlans.create = (params) => this._makeRequest('v1/{+parent}/restorePlans', 'POST', params);
    this.projects.locations.restorePlans.list = (params) => this._makeRequest('v1/{+parent}/restorePlans', 'GET', params);
    this.projects.locations.restorePlans.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.restorePlans.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.restorePlans.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.restorePlans.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.restorePlans.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.restorePlans.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.restorePlans.restores = {};
    this.projects.locations.restorePlans.restores.create = (params) => this._makeRequest('v1/{+parent}/restores', 'POST', params);
    this.projects.locations.restorePlans.restores.list = (params) => this._makeRequest('v1/{+parent}/restores', 'GET', params);
    this.projects.locations.restorePlans.restores.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.restorePlans.restores.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.restorePlans.restores.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.restorePlans.restores.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.restorePlans.restores.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.restorePlans.restores.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.restorePlans.restores.volumeRestores = {};
    this.projects.locations.restorePlans.restores.volumeRestores.list = (params) => this._makeRequest('v1/{+parent}/volumeRestores', 'GET', params);
    this.projects.locations.restorePlans.restores.volumeRestores.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.restorePlans.restores.volumeRestores.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.restorePlans.restores.volumeRestores.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.restorePlans.restores.volumeRestores.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.restoreChannels = {};
    this.projects.locations.restoreChannels.create = (params) => this._makeRequest('v1/{+parent}/restoreChannels', 'POST', params);
    this.projects.locations.restoreChannels.list = (params) => this._makeRequest('v1/{+parent}/restoreChannels', 'GET', params);
    this.projects.locations.restoreChannels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.restoreChannels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.restoreChannels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.restoreChannels.restorePlanBindings = {};
    this.projects.locations.restoreChannels.restorePlanBindings.list = (params) => this._makeRequest('v1/{+parent}/restorePlanBindings', 'GET', params);
    this.projects.locations.restoreChannels.restorePlanBindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
