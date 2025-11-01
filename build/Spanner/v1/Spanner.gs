
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://spanner.googleapis.com/';
    this._servicePath = '';


    this.scans = {};
    this.scans.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}', 'GET', apiParams, clientConfig);

    this.projects = {};

    this.projects.instanceConfigs = {};
    this.projects.instanceConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instanceConfigs', 'GET', apiParams, clientConfig);
    this.projects.instanceConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instanceConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instanceConfigs', 'POST', apiParams, clientConfig);
    this.projects.instanceConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instanceConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.instanceConfigs.operations = {};
    this.projects.instanceConfigs.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instanceConfigs.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instanceConfigs.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instanceConfigs.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.instanceConfigs.ssdCaches = {};

    this.projects.instanceConfigs.ssdCaches.operations = {};
    this.projects.instanceConfigs.ssdCaches.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instanceConfigs.ssdCaches.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instanceConfigs.ssdCaches.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instanceConfigs.ssdCaches.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.instanceConfigOperations = {};
    this.projects.instanceConfigOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instanceConfigOperations', 'GET', apiParams, clientConfig);

    this.projects.instances = {};
    this.projects.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instances', 'GET', apiParams, clientConfig);
    this.projects.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instances', 'POST', apiParams, clientConfig);
    this.projects.instances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.instances.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:move', 'POST', apiParams, clientConfig);

    this.projects.instances.databases = {};
    this.projects.instances.databases.getScans = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/scans', 'GET', apiParams, clientConfig);
    this.projects.instances.databases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/databases', 'GET', apiParams, clientConfig);
    this.projects.instances.databases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/databases', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.databases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.databases.updateDdl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+database}/ddl', 'PATCH', apiParams, clientConfig);
    this.projects.instances.databases.dropDatabase = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+database}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.databases.getDdl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+database}/ddl', 'GET', apiParams, clientConfig);
    this.projects.instances.databases.changequorum = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:changequorum', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/databases:restore', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.addSplitPoints = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+database}:addSplitPoints', 'POST', apiParams, clientConfig);

    this.projects.instances.databases.operations = {};
    this.projects.instances.databases.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.databases.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.databases.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.databases.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.instances.databases.sessions = {};
    this.projects.instances.databases.sessions.adapter = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/sessions:adapter', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.adaptMessage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:adaptMessage', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+database}/sessions', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+database}/sessions:batchCreate', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.databases.sessions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+database}/sessions', 'GET', apiParams, clientConfig);
    this.projects.instances.databases.sessions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.databases.sessions.executeSql = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:executeSql', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.executeStreamingSql = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:executeStreamingSql', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.executeBatchDml = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:executeBatchDml', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.read = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:read', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.streamingRead = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:streamingRead', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.beginTransaction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:beginTransaction', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.commit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:commit', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.rollback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:rollback', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.partitionQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:partitionQuery', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.partitionRead = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:partitionRead', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.sessions.batchWrite = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+session}:batchWrite', 'POST', apiParams, clientConfig);

    this.projects.instances.databases.backupSchedules = {};
    this.projects.instances.databases.backupSchedules.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.backupSchedules.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.backupSchedules.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.backupSchedules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/backupSchedules', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.backupSchedules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.databases.backupSchedules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.databases.backupSchedules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.databases.backupSchedules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/backupSchedules', 'GET', apiParams, clientConfig);

    this.projects.instances.databases.databaseRoles = {};
    this.projects.instances.databases.databaseRoles.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.instances.databases.databaseRoles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/databaseRoles', 'GET', apiParams, clientConfig);

    this.projects.instances.operations = {};
    this.projects.instances.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.instances.instancePartitions = {};
    this.projects.instances.instancePartitions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instancePartitions', 'GET', apiParams, clientConfig);
    this.projects.instances.instancePartitions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.instancePartitions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instancePartitions', 'POST', apiParams, clientConfig);
    this.projects.instances.instancePartitions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.instancePartitions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.instances.instancePartitions.operations = {};
    this.projects.instances.instancePartitions.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.instancePartitions.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.instancePartitions.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.instancePartitions.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.instances.instancePartitionOperations = {};
    this.projects.instances.instancePartitionOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/instancePartitionOperations', 'GET', apiParams, clientConfig);

    this.projects.instances.backups = {};
    this.projects.instances.backups.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.backups.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.backups.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.instances.backups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/backups', 'POST', apiParams, clientConfig);
    this.projects.instances.backups.copy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/backups:copy', 'POST', apiParams, clientConfig);
    this.projects.instances.backups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.backups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.backups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.backups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/backups', 'GET', apiParams, clientConfig);

    this.projects.instances.backups.operations = {};
    this.projects.instances.backups.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.backups.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.backups.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.backups.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.instances.databaseOperations = {};
    this.projects.instances.databaseOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/databaseOperations', 'GET', apiParams, clientConfig);

    this.projects.instances.backupOperations = {};
    this.projects.instances.backupOperations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/backupOperations', 'GET', apiParams, clientConfig);
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
