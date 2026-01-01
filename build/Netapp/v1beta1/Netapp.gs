
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://netapp.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/locations', 'GET', apiParams, clientConfig);

    this.projects.locations.hostGroups = {};
    this.projects.locations.hostGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.hostGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.hostGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/hostGroups', 'POST', apiParams, clientConfig);
    this.projects.locations.hostGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.hostGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/hostGroups', 'GET', apiParams, clientConfig);

    this.projects.locations.kmsConfigs = {};
    this.projects.locations.kmsConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/kmsConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.kmsConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.kmsConfigs.encrypt = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:encrypt', 'POST', apiParams, clientConfig);
    this.projects.locations.kmsConfigs.verify = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:verify', 'POST', apiParams, clientConfig);
    this.projects.locations.kmsConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.kmsConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.kmsConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/kmsConfigs', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.activeDirectories = {};
    this.projects.locations.activeDirectories.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/activeDirectories', 'GET', apiParams, clientConfig);
    this.projects.locations.activeDirectories.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/activeDirectories', 'POST', apiParams, clientConfig);
    this.projects.locations.activeDirectories.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.activeDirectories.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.activeDirectories.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.backupPolicies = {};
    this.projects.locations.backupPolicies.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/backupPolicies', 'GET', apiParams, clientConfig);
    this.projects.locations.backupPolicies.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.backupPolicies.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/backupPolicies', 'POST', apiParams, clientConfig);
    this.projects.locations.backupPolicies.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.backupPolicies.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.backupVaults = {};
    this.projects.locations.backupVaults.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/backupVaults', 'POST', apiParams, clientConfig);
    this.projects.locations.backupVaults.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.backupVaults.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/backupVaults', 'GET', apiParams, clientConfig);
    this.projects.locations.backupVaults.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.backupVaults.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.backupVaults.backups = {};
    this.projects.locations.backupVaults.backups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.backupVaults.backups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.backupVaults.backups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/backups', 'GET', apiParams, clientConfig);
    this.projects.locations.backupVaults.backups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.backupVaults.backups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/backups', 'POST', apiParams, clientConfig);

    this.projects.locations.volumes = {};
    this.projects.locations.volumes.establishPeering = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:establishPeering', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.volumes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/volumes', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.volumes.revert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:revert', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:restore', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.volumes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/volumes', 'GET', apiParams, clientConfig);

    this.projects.locations.volumes.quotaRules = {};
    this.projects.locations.volumes.quotaRules.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.volumes.quotaRules.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/quotaRules', 'GET', apiParams, clientConfig);
    this.projects.locations.volumes.quotaRules.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.volumes.quotaRules.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.volumes.quotaRules.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/quotaRules', 'POST', apiParams, clientConfig);

    this.projects.locations.volumes.snapshots = {};
    this.projects.locations.volumes.snapshots.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.volumes.snapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.volumes.snapshots.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.volumes.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/snapshots', 'GET', apiParams, clientConfig);
    this.projects.locations.volumes.snapshots.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/snapshots', 'POST', apiParams, clientConfig);

    this.projects.locations.volumes.replications = {};
    this.projects.locations.volumes.replications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.volumes.replications.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/replications', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.replications.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.volumes.replications.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:stop', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.replications.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/replications', 'GET', apiParams, clientConfig);
    this.projects.locations.volumes.replications.reverseDirection = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:reverseDirection', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.replications.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.volumes.replications.sync = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:sync', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.replications.establishPeering = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:establishPeering', 'POST', apiParams, clientConfig);
    this.projects.locations.volumes.replications.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:resume', 'POST', apiParams, clientConfig);

    this.projects.locations.storagePools = {};
    this.projects.locations.storagePools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/storagePools', 'POST', apiParams, clientConfig);
    this.projects.locations.storagePools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.storagePools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.storagePools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/storagePools', 'GET', apiParams, clientConfig);
    this.projects.locations.storagePools.switch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:switch', 'POST', apiParams, clientConfig);
    this.projects.locations.storagePools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.storagePools.validateDirectoryService = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:validateDirectoryService', 'POST', apiParams, clientConfig);
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
