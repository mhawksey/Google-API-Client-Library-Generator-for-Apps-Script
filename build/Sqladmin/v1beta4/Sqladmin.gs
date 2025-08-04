
/**
 * Google Apps Script client library for the Cloud SQL Admin API
 * Documentation URL: https://developers.google.com/cloud-sql/
 * @class
 */
class Sqladmin {
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
    this._rootUrl = 'https://sqladmin.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.backupRuns = {};
    this.backupRuns.delete = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}', 'DELETE', params);
    this.backupRuns.get = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/backupRuns/{id}', 'GET', params);
    this.backupRuns.insert = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/backupRuns', 'POST', params);
    this.backupRuns.list = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/backupRuns', 'GET', params);

    this.databases = {};
    this.databases.delete = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}', 'DELETE', params);
    this.databases.get = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}', 'GET', params);
    this.databases.insert = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/databases', 'POST', params);
    this.databases.list = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/databases', 'GET', params);
    this.databases.patch = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}', 'PATCH', params);
    this.databases.update = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/databases/{database}', 'PUT', params);

    this.flags = {};
    this.flags.list = (params) => this._makeRequest('sql/v1beta4/flags', 'GET', params);

    this.instances = {};
    this.instances.addServerCa = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/addServerCa', 'POST', params);
    this.instances.addServerCertificate = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/addServerCertificate', 'POST', params);
    this.instances.clone = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/clone', 'POST', params);
    this.instances.delete = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}', 'DELETE', params);
    this.instances.demoteMaster = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/demoteMaster', 'POST', params);
    this.instances.demote = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/demote', 'POST', params);
    this.instances.export = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/export', 'POST', params);
    this.instances.failover = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/failover', 'POST', params);
    this.instances.reencrypt = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/reencrypt', 'POST', params);
    this.instances.get = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}', 'GET', params);
    this.instances.import = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/import', 'POST', params);
    this.instances.insert = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances', 'POST', params);
    this.instances.list = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances', 'GET', params);
    this.instances.listServerCas = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/listServerCas', 'GET', params);
    this.instances.ListServerCertificates = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/listServerCertificates', 'GET', params);
    this.instances.patch = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}', 'PATCH', params);
    this.instances.promoteReplica = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/promoteReplica', 'POST', params);
    this.instances.switchover = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/switchover', 'POST', params);
    this.instances.resetSslConfig = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/resetSslConfig', 'POST', params);
    this.instances.restart = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/restart', 'POST', params);
    this.instances.restoreBackup = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/restoreBackup', 'POST', params);
    this.instances.rotateServerCa = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCa', 'POST', params);
    this.instances.RotateServerCertificate = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/rotateServerCertificate', 'POST', params);
    this.instances.startReplica = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/startReplica', 'POST', params);
    this.instances.stopReplica = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/stopReplica', 'POST', params);
    this.instances.truncateLog = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/truncateLog', 'POST', params);
    this.instances.update = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}', 'PUT', params);
    this.instances.acquireSsrsLease = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/acquireSsrsLease', 'POST', params);
    this.instances.releaseSsrsLease = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/releaseSsrsLease', 'POST', params);
    this.instances.pointInTimeRestore = (params) => this._makeRequest('sql/v1beta4/{+parent}:pointInTimeRestore', 'POST', params);

    this.sslCerts = {};
    this.sslCerts.createEphemeral = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/createEphemeral', 'POST', params);
    this.sslCerts.delete = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}', 'DELETE', params);
    this.sslCerts.get = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}', 'GET', params);
    this.sslCerts.insert = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/sslCerts', 'POST', params);
    this.sslCerts.list = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/sslCerts', 'GET', params);

    this.projects = {};

    this.projects.instances = {};
    this.projects.instances.rescheduleMaintenance = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/rescheduleMaintenance', 'POST', params);
    this.projects.instances.verifyExternalSyncSettings = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/verifyExternalSyncSettings', 'POST', params);
    this.projects.instances.startExternalSync = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/startExternalSync', 'POST', params);
    this.projects.instances.performDiskShrink = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/performDiskShrink', 'POST', params);
    this.projects.instances.getDiskShrinkConfig = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/getDiskShrinkConfig', 'GET', params);
    this.projects.instances.resetReplicaSize = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/resetReplicaSize', 'POST', params);
    this.projects.instances.getLatestRecoveryTime = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/getLatestRecoveryTime', 'GET', params);

    this.operations = {};
    this.operations.get = (params) => this._makeRequest('sql/v1beta4/projects/{project}/operations/{operation}', 'GET', params);
    this.operations.list = (params) => this._makeRequest('sql/v1beta4/projects/{project}/operations', 'GET', params);
    this.operations.cancel = (params) => this._makeRequest('sql/v1beta4/projects/{project}/operations/{operation}/cancel', 'POST', params);

    this.backups = {};
    this.backups.createBackup = (params) => this._makeRequest('sql/v1beta4/{+parent}/backups', 'POST', params);
    this.backups.getBackup = (params) => this._makeRequest('sql/v1beta4/{+name}', 'GET', params);
    this.backups.listBackups = (params) => this._makeRequest('sql/v1beta4/{+parent}/backups', 'GET', params);
    this.backups.updateBackup = (params) => this._makeRequest('sql/v1beta4/{+name}', 'PATCH', params);
    this.backups.deleteBackup = (params) => this._makeRequest('sql/v1beta4/{+name}', 'DELETE', params);

    this.connect = {};
    this.connect.get = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/connectSettings', 'GET', params);
    this.connect.generateEphemeralCert = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}:generateEphemeralCert', 'POST', params);

    this.tiers = {};
    this.tiers.list = (params) => this._makeRequest('sql/v1beta4/projects/{project}/tiers', 'GET', params);

    this.users = {};
    this.users.delete = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/users', 'DELETE', params);
    this.users.get = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/users/{name}', 'GET', params);
    this.users.insert = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/users', 'POST', params);
    this.users.list = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/users', 'GET', params);
    this.users.update = (params) => this._makeRequest('sql/v1beta4/projects/{project}/instances/{instance}/users', 'PUT', params);
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
