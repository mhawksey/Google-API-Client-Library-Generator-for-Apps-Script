
/**
 * Google Apps Script client library for the Oracle Database@Google Cloud API
 * Documentation URL: https://cloud.google.com/oracle/database/docs
 * @class
 */
class Oracledatabase {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://oracledatabase.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.cloudExadataInfrastructures = {};
    this.projects.locations.cloudExadataInfrastructures.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cloudExadataInfrastructures', 'GET', apiParams, clientConfig);
    this.projects.locations.cloudExadataInfrastructures.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.cloudExadataInfrastructures.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cloudExadataInfrastructures', 'POST', apiParams, clientConfig);
    this.projects.locations.cloudExadataInfrastructures.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.cloudExadataInfrastructures.dbServers = {};
    this.projects.locations.cloudExadataInfrastructures.dbServers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dbServers', 'GET', apiParams, clientConfig);

    this.projects.locations.cloudVmClusters = {};
    this.projects.locations.cloudVmClusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cloudVmClusters', 'GET', apiParams, clientConfig);
    this.projects.locations.cloudVmClusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.cloudVmClusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/cloudVmClusters', 'POST', apiParams, clientConfig);
    this.projects.locations.cloudVmClusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.cloudVmClusters.dbNodes = {};
    this.projects.locations.cloudVmClusters.dbNodes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dbNodes', 'GET', apiParams, clientConfig);

    this.projects.locations.entitlements = {};
    this.projects.locations.entitlements.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/entitlements', 'GET', apiParams, clientConfig);

    this.projects.locations.giVersions = {};
    this.projects.locations.giVersions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/giVersions', 'GET', apiParams, clientConfig);

    this.projects.locations.giVersions.minorVersions = {};
    this.projects.locations.giVersions.minorVersions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/minorVersions', 'GET', apiParams, clientConfig);

    this.projects.locations.dbSystemShapes = {};
    this.projects.locations.dbSystemShapes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dbSystemShapes', 'GET', apiParams, clientConfig);

    this.projects.locations.autonomousDatabases = {};
    this.projects.locations.autonomousDatabases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/autonomousDatabases', 'GET', apiParams, clientConfig);
    this.projects.locations.autonomousDatabases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.autonomousDatabases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/autonomousDatabases', 'POST', apiParams, clientConfig);
    this.projects.locations.autonomousDatabases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.autonomousDatabases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.autonomousDatabases.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:restore', 'POST', apiParams, clientConfig);
    this.projects.locations.autonomousDatabases.generateWallet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:generateWallet', 'POST', apiParams, clientConfig);
    this.projects.locations.autonomousDatabases.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:stop', 'POST', apiParams, clientConfig);
    this.projects.locations.autonomousDatabases.start = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:start', 'POST', apiParams, clientConfig);
    this.projects.locations.autonomousDatabases.restart = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:restart', 'POST', apiParams, clientConfig);
    this.projects.locations.autonomousDatabases.switchover = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:switchover', 'POST', apiParams, clientConfig);
    this.projects.locations.autonomousDatabases.failover = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:failover', 'POST', apiParams, clientConfig);

    this.projects.locations.autonomousDbVersions = {};
    this.projects.locations.autonomousDbVersions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/autonomousDbVersions', 'GET', apiParams, clientConfig);

    this.projects.locations.autonomousDatabaseCharacterSets = {};
    this.projects.locations.autonomousDatabaseCharacterSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/autonomousDatabaseCharacterSets', 'GET', apiParams, clientConfig);

    this.projects.locations.autonomousDatabaseBackups = {};
    this.projects.locations.autonomousDatabaseBackups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/autonomousDatabaseBackups', 'GET', apiParams, clientConfig);

    this.projects.locations.odbNetworks = {};
    this.projects.locations.odbNetworks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/odbNetworks', 'GET', apiParams, clientConfig);
    this.projects.locations.odbNetworks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.odbNetworks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/odbNetworks', 'POST', apiParams, clientConfig);
    this.projects.locations.odbNetworks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.odbNetworks.odbSubnets = {};
    this.projects.locations.odbNetworks.odbSubnets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/odbSubnets', 'GET', apiParams, clientConfig);
    this.projects.locations.odbNetworks.odbSubnets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.odbNetworks.odbSubnets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/odbSubnets', 'POST', apiParams, clientConfig);
    this.projects.locations.odbNetworks.odbSubnets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.exadbVmClusters = {};
    this.projects.locations.exadbVmClusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/exadbVmClusters', 'GET', apiParams, clientConfig);
    this.projects.locations.exadbVmClusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.exadbVmClusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/exadbVmClusters', 'POST', apiParams, clientConfig);
    this.projects.locations.exadbVmClusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.exadbVmClusters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.exadbVmClusters.removeVirtualMachine = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:removeVirtualMachine', 'POST', apiParams, clientConfig);

    this.projects.locations.exadbVmClusters.dbNodes = {};
    this.projects.locations.exadbVmClusters.dbNodes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dbNodes', 'GET', apiParams, clientConfig);

    this.projects.locations.exascaleDbStorageVaults = {};
    this.projects.locations.exascaleDbStorageVaults.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/exascaleDbStorageVaults', 'GET', apiParams, clientConfig);
    this.projects.locations.exascaleDbStorageVaults.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.exascaleDbStorageVaults.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/exascaleDbStorageVaults', 'POST', apiParams, clientConfig);
    this.projects.locations.exascaleDbStorageVaults.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.dbSystemInitialStorageSizes = {};
    this.projects.locations.dbSystemInitialStorageSizes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dbSystemInitialStorageSizes', 'GET', apiParams, clientConfig);

    this.projects.locations.databases = {};
    this.projects.locations.databases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/databases', 'GET', apiParams, clientConfig);
    this.projects.locations.databases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.pluggableDatabases = {};
    this.projects.locations.pluggableDatabases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/pluggableDatabases', 'GET', apiParams, clientConfig);
    this.projects.locations.pluggableDatabases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.dbSystems = {};
    this.projects.locations.dbSystems.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dbSystems', 'GET', apiParams, clientConfig);
    this.projects.locations.dbSystems.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.dbSystems.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dbSystems', 'POST', apiParams, clientConfig);
    this.projects.locations.dbSystems.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.dbVersions = {};
    this.projects.locations.dbVersions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dbVersions', 'GET', apiParams, clientConfig);

    this.projects.locations.databaseCharacterSets = {};
    this.projects.locations.databaseCharacterSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/databaseCharacterSets', 'GET', apiParams, clientConfig);
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
