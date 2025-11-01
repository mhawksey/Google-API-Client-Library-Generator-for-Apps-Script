
/**
 * Google Apps Script client library for the Migration Center API
 * Documentation URL: https://cloud.google.com/migration-center
 * @class
 */
class Migrationcenter {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://migrationcenter.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.updateSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.getSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.assetsExportJobs = {};
    this.projects.locations.assetsExportJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/assetsExportJobs', 'GET', apiParams, clientConfig);
    this.projects.locations.assetsExportJobs.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:run', 'POST', apiParams, clientConfig);
    this.projects.locations.assetsExportJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/assetsExportJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.assetsExportJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.assetsExportJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.importJobs = {};
    this.projects.locations.importJobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.importJobs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.importJobs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.importJobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/importJobs', 'POST', apiParams, clientConfig);
    this.projects.locations.importJobs.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:run', 'POST', apiParams, clientConfig);
    this.projects.locations.importJobs.validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:validate', 'POST', apiParams, clientConfig);
    this.projects.locations.importJobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/importJobs', 'GET', apiParams, clientConfig);

    this.projects.locations.importJobs.importDataFiles = {};
    this.projects.locations.importJobs.importDataFiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.importJobs.importDataFiles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/importDataFiles', 'POST', apiParams, clientConfig);
    this.projects.locations.importJobs.importDataFiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/importDataFiles', 'GET', apiParams, clientConfig);
    this.projects.locations.importJobs.importDataFiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.sources = {};
    this.projects.locations.sources.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.sources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/sources', 'POST', apiParams, clientConfig);
    this.projects.locations.sources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/sources', 'GET', apiParams, clientConfig);

    this.projects.locations.sources.errorFrames = {};
    this.projects.locations.sources.errorFrames.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/errorFrames', 'GET', apiParams, clientConfig);
    this.projects.locations.sources.errorFrames.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.reportConfigs = {};
    this.projects.locations.reportConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/reportConfigs', 'POST', apiParams, clientConfig);
    this.projects.locations.reportConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.reportConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.reportConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/reportConfigs', 'GET', apiParams, clientConfig);

    this.projects.locations.reportConfigs.reports = {};
    this.projects.locations.reportConfigs.reports.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.reportConfigs.reports.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.reportConfigs.reports.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/reports', 'POST', apiParams, clientConfig);
    this.projects.locations.reportConfigs.reports.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/reports', 'GET', apiParams, clientConfig);

    this.projects.locations.discoveryClients = {};
    this.projects.locations.discoveryClients.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.discoveryClients.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/discoveryClients', 'POST', apiParams, clientConfig);
    this.projects.locations.discoveryClients.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/discoveryClients', 'GET', apiParams, clientConfig);
    this.projects.locations.discoveryClients.sendHeartbeat = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:sendHeartbeat', 'POST', apiParams, clientConfig);
    this.projects.locations.discoveryClients.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.discoveryClients.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.preferenceSets = {};
    this.projects.locations.preferenceSets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.preferenceSets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.preferenceSets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.preferenceSets.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/preferenceSets', 'POST', apiParams, clientConfig);
    this.projects.locations.preferenceSets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/preferenceSets', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}:cancel', 'POST', apiParams, clientConfig);
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.assets = {};
    this.projects.locations.assets.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/assets:batchDelete', 'POST', apiParams, clientConfig);
    this.projects.locations.assets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.assets.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/assets:batchUpdate', 'POST', apiParams, clientConfig);
    this.projects.locations.assets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.assets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/assets', 'GET', apiParams, clientConfig);
    this.projects.locations.assets.reportAssetFrames = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/assets:reportAssetFrames', 'POST', apiParams, clientConfig);
    this.projects.locations.assets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.assets.aggregateValues = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/assets:aggregateValues', 'POST', apiParams, clientConfig);

    this.projects.locations.groups = {};
    this.projects.locations.groups.removeAssets = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+group}:removeAssets', 'POST', apiParams, clientConfig);
    this.projects.locations.groups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/groups', 'GET', apiParams, clientConfig);
    this.projects.locations.groups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.groups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/groups', 'POST', apiParams, clientConfig);
    this.projects.locations.groups.addAssets = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+group}:addAssets', 'POST', apiParams, clientConfig);
    this.projects.locations.groups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.groups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.relations = {};
    this.projects.locations.relations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+parent}/relations', 'GET', apiParams, clientConfig);
    this.projects.locations.relations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha1/{+name}', 'GET', apiParams, clientConfig);
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
