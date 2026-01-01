
/**
 * Google Apps Script client library for the VM Migration API
 * Documentation URL: https://cloud.google.com/migrate/virtual-machines
 * @class
 */
class Vmmigration {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://vmmigration.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.groups = {};
    this.projects.locations.groups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/groups', 'GET', apiParams, clientConfig);
    this.projects.locations.groups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/groups', 'POST', apiParams, clientConfig);
    this.projects.locations.groups.addGroupMigration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+group}:addGroupMigration', 'POST', apiParams, clientConfig);
    this.projects.locations.groups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.groups.removeGroupMigration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+group}:removeGroupMigration', 'POST', apiParams, clientConfig);
    this.projects.locations.groups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.groups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.sources = {};
    this.projects.locations.sources.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.sources.fetchInventory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+source}:fetchInventory', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/sources', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/sources', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.fetchStorageInventory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+source}:fetchStorageInventory', 'GET', apiParams, clientConfig);

    this.projects.locations.sources.datacenterConnectors = {};
    this.projects.locations.sources.datacenterConnectors.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.sources.datacenterConnectors.upgradeAppliance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+datacenterConnector}:upgradeAppliance', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.datacenterConnectors.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/datacenterConnectors', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.datacenterConnectors.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.datacenterConnectors.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/datacenterConnectors', 'POST', apiParams, clientConfig);

    this.projects.locations.sources.diskMigrationJobs = {};
    this.projects.locations.sources.diskMigrationJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.diskMigrationJobs.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:run', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.diskMigrationJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/diskMigrationJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.diskMigrationJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/diskMigrationJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.diskMigrationJobs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.sources.diskMigrationJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.sources.diskMigrationJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.sources.utilizationReports = {};
    this.projects.locations.sources.utilizationReports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.utilizationReports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/utilizationReports', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.utilizationReports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.sources.utilizationReports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/utilizationReports', 'POST', apiParams, clientConfig);

    this.projects.locations.sources.migratingVms = {};
    this.projects.locations.sources.migratingVms.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/migratingVms', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.extendMigration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+migratingVm}:extendMigration', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.pauseMigration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+migratingVm}:pauseMigration', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.finalizeMigration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+migratingVm}:finalizeMigration', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.resumeMigration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+migratingVm}:resumeMigration', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.startMigration = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+migratingVm}:startMigration', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/migratingVms', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.sources.migratingVms.cutoverJobs = {};
    this.projects.locations.sources.migratingVms.cutoverJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.cutoverJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/cutoverJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.cutoverJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/cutoverJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.cutoverJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.sources.migratingVms.replicationCycles = {};
    this.projects.locations.sources.migratingVms.replicationCycles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.replicationCycles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/replicationCycles', 'GET', apiParams, clientConfig);

    this.projects.locations.sources.migratingVms.cloneJobs = {};
    this.projects.locations.sources.migratingVms.cloneJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.cloneJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/cloneJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.cloneJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.migratingVms.cloneJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/cloneJobs', 'POST', apiParams, clientConfig);

    this.projects.locations.targetProjects = {};
    this.projects.locations.targetProjects.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/targetProjects', 'POST', apiParams, clientConfig);
    this.projects.locations.targetProjects.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.targetProjects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/targetProjects', 'GET', apiParams, clientConfig);
    this.projects.locations.targetProjects.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.targetProjects.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.imageImports = {};
    this.projects.locations.imageImports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/imageImports', 'GET', apiParams, clientConfig);
    this.projects.locations.imageImports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.imageImports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.imageImports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/imageImports', 'POST', apiParams, clientConfig);

    this.projects.locations.imageImports.imageImportJobs = {};
    this.projects.locations.imageImports.imageImportJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.imageImports.imageImportJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/imageImportJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.imageImports.imageImportJobs.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
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
