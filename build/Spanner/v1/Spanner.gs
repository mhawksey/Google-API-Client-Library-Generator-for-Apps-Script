
/**
 * Google Apps Script client library for the Cloud Spanner API
 * Documentation URL: https://cloud.google.com/spanner/
 * @class
 */
class Spanner {
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
    this._rootUrl = 'https://spanner.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.scans = {};
    this.scans.list = (params) => this._makeRequest('v1/{+parent}', 'GET', params);

    this.projects = {};

    this.projects.instanceConfigs = {};
    this.projects.instanceConfigs.list = (params) => this._makeRequest('v1/{+parent}/instanceConfigs', 'GET', params);
    this.projects.instanceConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instanceConfigs.create = (params) => this._makeRequest('v1/{+parent}/instanceConfigs', 'POST', params);
    this.projects.instanceConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.instanceConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.instanceConfigs.operations = {};
    this.projects.instanceConfigs.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instanceConfigs.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instanceConfigs.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.instanceConfigs.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.instanceConfigs.ssdCaches = {};

    this.projects.instanceConfigs.ssdCaches.operations = {};
    this.projects.instanceConfigs.ssdCaches.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instanceConfigs.ssdCaches.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instanceConfigs.ssdCaches.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.instanceConfigs.ssdCaches.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.instanceConfigOperations = {};
    this.projects.instanceConfigOperations.list = (params) => this._makeRequest('v1/{+parent}/instanceConfigOperations', 'GET', params);

    this.projects.instances = {};
    this.projects.instances.list = (params) => this._makeRequest('v1/{+parent}/instances', 'GET', params);
    this.projects.instances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.create = (params) => this._makeRequest('v1/{+parent}/instances', 'POST', params);
    this.projects.instances.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.instances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.instances.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.instances.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.instances.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.instances.move = (params) => this._makeRequest('v1/{+name}:move', 'POST', params);

    this.projects.instances.databases = {};
    this.projects.instances.databases.getScans = (params) => this._makeRequest('v1/{+name}/scans', 'GET', params);
    this.projects.instances.databases.list = (params) => this._makeRequest('v1/{+parent}/databases', 'GET', params);
    this.projects.instances.databases.create = (params) => this._makeRequest('v1/{+parent}/databases', 'POST', params);
    this.projects.instances.databases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.databases.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.instances.databases.updateDdl = (params) => this._makeRequest('v1/{+database}/ddl', 'PATCH', params);
    this.projects.instances.databases.dropDatabase = (params) => this._makeRequest('v1/{+database}', 'DELETE', params);
    this.projects.instances.databases.getDdl = (params) => this._makeRequest('v1/{+database}/ddl', 'GET', params);
    this.projects.instances.databases.changequorum = (params) => this._makeRequest('v1/{+name}:changequorum', 'POST', params);
    this.projects.instances.databases.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.instances.databases.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.instances.databases.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.instances.databases.restore = (params) => this._makeRequest('v1/{+parent}/databases:restore', 'POST', params);
    this.projects.instances.databases.addSplitPoints = (params) => this._makeRequest('v1/{+database}:addSplitPoints', 'POST', params);

    this.projects.instances.databases.operations = {};
    this.projects.instances.databases.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.databases.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.databases.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.instances.databases.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.instances.databases.sessions = {};
    this.projects.instances.databases.sessions.adapter = (params) => this._makeRequest('v1/{+parent}/sessions:adapter', 'POST', params);
    this.projects.instances.databases.sessions.adaptMessage = (params) => this._makeRequest('v1/{+name}:adaptMessage', 'POST', params);
    this.projects.instances.databases.sessions.create = (params) => this._makeRequest('v1/{+database}/sessions', 'POST', params);
    this.projects.instances.databases.sessions.batchCreate = (params) => this._makeRequest('v1/{+database}/sessions:batchCreate', 'POST', params);
    this.projects.instances.databases.sessions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.databases.sessions.list = (params) => this._makeRequest('v1/{+database}/sessions', 'GET', params);
    this.projects.instances.databases.sessions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.instances.databases.sessions.executeSql = (params) => this._makeRequest('v1/{+session}:executeSql', 'POST', params);
    this.projects.instances.databases.sessions.executeStreamingSql = (params) => this._makeRequest('v1/{+session}:executeStreamingSql', 'POST', params);
    this.projects.instances.databases.sessions.executeBatchDml = (params) => this._makeRequest('v1/{+session}:executeBatchDml', 'POST', params);
    this.projects.instances.databases.sessions.read = (params) => this._makeRequest('v1/{+session}:read', 'POST', params);
    this.projects.instances.databases.sessions.streamingRead = (params) => this._makeRequest('v1/{+session}:streamingRead', 'POST', params);
    this.projects.instances.databases.sessions.beginTransaction = (params) => this._makeRequest('v1/{+session}:beginTransaction', 'POST', params);
    this.projects.instances.databases.sessions.commit = (params) => this._makeRequest('v1/{+session}:commit', 'POST', params);
    this.projects.instances.databases.sessions.rollback = (params) => this._makeRequest('v1/{+session}:rollback', 'POST', params);
    this.projects.instances.databases.sessions.partitionQuery = (params) => this._makeRequest('v1/{+session}:partitionQuery', 'POST', params);
    this.projects.instances.databases.sessions.partitionRead = (params) => this._makeRequest('v1/{+session}:partitionRead', 'POST', params);
    this.projects.instances.databases.sessions.batchWrite = (params) => this._makeRequest('v1/{+session}:batchWrite', 'POST', params);

    this.projects.instances.databases.backupSchedules = {};
    this.projects.instances.databases.backupSchedules.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.instances.databases.backupSchedules.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.instances.databases.backupSchedules.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.instances.databases.backupSchedules.create = (params) => this._makeRequest('v1/{+parent}/backupSchedules', 'POST', params);
    this.projects.instances.databases.backupSchedules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.databases.backupSchedules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.instances.databases.backupSchedules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.instances.databases.backupSchedules.list = (params) => this._makeRequest('v1/{+parent}/backupSchedules', 'GET', params);

    this.projects.instances.databases.databaseRoles = {};
    this.projects.instances.databases.databaseRoles.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.instances.databases.databaseRoles.list = (params) => this._makeRequest('v1/{+parent}/databaseRoles', 'GET', params);

    this.projects.instances.operations = {};
    this.projects.instances.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.instances.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.instances.instancePartitions = {};
    this.projects.instances.instancePartitions.list = (params) => this._makeRequest('v1/{+parent}/instancePartitions', 'GET', params);
    this.projects.instances.instancePartitions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.instancePartitions.create = (params) => this._makeRequest('v1/{+parent}/instancePartitions', 'POST', params);
    this.projects.instances.instancePartitions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.instances.instancePartitions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.instances.instancePartitions.operations = {};
    this.projects.instances.instancePartitions.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.instancePartitions.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.instancePartitions.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.instances.instancePartitions.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.instances.instancePartitionOperations = {};
    this.projects.instances.instancePartitionOperations.list = (params) => this._makeRequest('v1/{+parent}/instancePartitionOperations', 'GET', params);

    this.projects.instances.backups = {};
    this.projects.instances.backups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.instances.backups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.instances.backups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.instances.backups.create = (params) => this._makeRequest('v1/{+parent}/backups', 'POST', params);
    this.projects.instances.backups.copy = (params) => this._makeRequest('v1/{+parent}/backups:copy', 'POST', params);
    this.projects.instances.backups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.backups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.instances.backups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.instances.backups.list = (params) => this._makeRequest('v1/{+parent}/backups', 'GET', params);

    this.projects.instances.backups.operations = {};
    this.projects.instances.backups.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.backups.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.instances.backups.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.instances.backups.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.instances.databaseOperations = {};
    this.projects.instances.databaseOperations.list = (params) => this._makeRequest('v1/{+parent}/databaseOperations', 'GET', params);

    this.projects.instances.backupOperations = {};
    this.projects.instances.backupOperations.list = (params) => this._makeRequest('v1/{+parent}/backupOperations', 'GET', params);
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
