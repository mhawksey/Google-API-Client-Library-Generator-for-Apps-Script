
/**
 * Google Apps Script client library for the Cloud SQL Admin API
 * Documentation URL: https://cloud.google.com/sql/docs
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://sqladmin.googleapis.com/';
    this._servicePath = '';


    this.sslCerts = {};
    this.sslCerts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}', 'DELETE', apiParams, clientConfig);
    this.sslCerts.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/sslCerts', 'POST', apiParams, clientConfig);
    this.sslCerts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/sslCerts', 'GET', apiParams, clientConfig);
    this.sslCerts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/sslCerts/{sha1Fingerprint}', 'GET', apiParams, clientConfig);
    this.sslCerts.createEphemeral = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/createEphemeral', 'POST', apiParams, clientConfig);

    this.projects = {};

    this.projects.instances = {};
    this.projects.instances.rescheduleMaintenance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/rescheduleMaintenance', 'POST', apiParams, clientConfig);
    this.projects.instances.startExternalSync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/startExternalSync', 'POST', apiParams, clientConfig);
    this.projects.instances.verifyExternalSyncSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/verifyExternalSyncSettings', 'POST', apiParams, clientConfig);
    this.projects.instances.resetReplicaSize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/resetReplicaSize', 'POST', apiParams, clientConfig);
    this.projects.instances.getDiskShrinkConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/getDiskShrinkConfig', 'GET', apiParams, clientConfig);
    this.projects.instances.performDiskShrink = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/performDiskShrink', 'POST', apiParams, clientConfig);
    this.projects.instances.getLatestRecoveryTime = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/getLatestRecoveryTime', 'GET', apiParams, clientConfig);

    this.connect = {};
    this.connect.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/connectSettings', 'GET', apiParams, clientConfig);
    this.connect.generateEphemeralCert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}:generateEphemeralCert', 'POST', apiParams, clientConfig);

    this.users = {};
    this.users.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/users', 'POST', apiParams, clientConfig);
    this.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/users/{name}', 'GET', apiParams, clientConfig);
    this.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/users', 'DELETE', apiParams, clientConfig);
    this.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/users', 'GET', apiParams, clientConfig);
    this.users.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/users', 'PUT', apiParams, clientConfig);

    this.tiers = {};
    this.tiers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/tiers', 'GET', apiParams, clientConfig);

    this.operations = {};
    this.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/operations', 'GET', apiParams, clientConfig);
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/operations/{operation}', 'GET', apiParams, clientConfig);
    this.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/operations/{operation}/cancel', 'POST', apiParams, clientConfig);

    this.databases = {};
    this.databases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases/{database}', 'PATCH', apiParams, clientConfig);
    this.databases.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases', 'POST', apiParams, clientConfig);
    this.databases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases', 'GET', apiParams, clientConfig);
    this.databases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases/{database}', 'GET', apiParams, clientConfig);
    this.databases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases/{database}', 'DELETE', apiParams, clientConfig);
    this.databases.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/databases/{database}', 'PUT', apiParams, clientConfig);

    this.backupRuns = {};
    this.backupRuns.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/backupRuns/{id}', 'GET', apiParams, clientConfig);
    this.backupRuns.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/backupRuns', 'GET', apiParams, clientConfig);
    this.backupRuns.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/backupRuns', 'POST', apiParams, clientConfig);
    this.backupRuns.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/backupRuns/{id}', 'DELETE', apiParams, clientConfig);

    this.flags = {};
    this.flags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/flags', 'GET', apiParams, clientConfig);

    this.Backups = {};
    this.Backups.DeleteBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.Backups.ListBackups = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/backups', 'GET', apiParams, clientConfig);
    this.Backups.CreateBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/backups', 'POST', apiParams, clientConfig);
    this.Backups.GetBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.Backups.UpdateBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.instances = {};
    this.instances.failover = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/failover', 'POST', apiParams, clientConfig);
    this.instances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}', 'PATCH', apiParams, clientConfig);
    this.instances.acquireSsrsLease = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/acquireSsrsLease', 'POST', apiParams, clientConfig);
    this.instances.startReplica = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/startReplica', 'POST', apiParams, clientConfig);
    this.instances.demote = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/demote', 'POST', apiParams, clientConfig);
    this.instances.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/import', 'POST', apiParams, clientConfig);
    this.instances.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances', 'POST', apiParams, clientConfig);
    this.instances.addServerCertificate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/addServerCertificate', 'POST', apiParams, clientConfig);
    this.instances.resetSslConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/resetSslConfig', 'POST', apiParams, clientConfig);
    this.instances.addEntraIdCertificate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/addEntraIdCertificate', 'POST', apiParams, clientConfig);
    this.instances.ListEntraIdCertificates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/listEntraIdCertificates', 'GET', apiParams, clientConfig);
    this.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}', 'GET', apiParams, clientConfig);
    this.instances.rotateServerCa = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/rotateServerCa', 'POST', apiParams, clientConfig);
    this.instances.executeSql = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/executeSql', 'POST', apiParams, clientConfig);
    this.instances.demoteMaster = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/demoteMaster', 'POST', apiParams, clientConfig);
    this.instances.stopReplica = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/stopReplica', 'POST', apiParams, clientConfig);
    this.instances.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/export', 'POST', apiParams, clientConfig);
    this.instances.truncateLog = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/truncateLog', 'POST', apiParams, clientConfig);
    this.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}', 'DELETE', apiParams, clientConfig);
    this.instances.releaseSsrsLease = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/releaseSsrsLease', 'POST', apiParams, clientConfig);
    this.instances.listServerCas = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/listServerCas', 'GET', apiParams, clientConfig);
    this.instances.restart = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/restart', 'POST', apiParams, clientConfig);
    this.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances', 'GET', apiParams, clientConfig);
    this.instances.RotateEntraIdCertificate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/rotateEntraIdCertificate', 'POST', apiParams, clientConfig);
    this.instances.preCheckMajorVersionUpgrade = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/preCheckMajorVersionUpgrade', 'POST', apiParams, clientConfig);
    this.instances.promoteReplica = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/promoteReplica', 'POST', apiParams, clientConfig);
    this.instances.switchover = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/switchover', 'POST', apiParams, clientConfig);
    this.instances.ListServerCertificates = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/listServerCertificates', 'GET', apiParams, clientConfig);
    this.instances.pointInTimeRestore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}:pointInTimeRestore', 'POST', apiParams, clientConfig);
    this.instances.clone = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/clone', 'POST', apiParams, clientConfig);
    this.instances.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}', 'PUT', apiParams, clientConfig);
    this.instances.reencrypt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/reencrypt', 'POST', apiParams, clientConfig);
    this.instances.addServerCa = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/addServerCa', 'POST', apiParams, clientConfig);
    this.instances.restoreBackup = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/restoreBackup', 'POST', apiParams, clientConfig);
    this.instances.RotateServerCertificate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{project}/instances/{instance}/rotateServerCertificate', 'POST', apiParams, clientConfig);
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
