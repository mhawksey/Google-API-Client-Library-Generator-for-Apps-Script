
/**
 * Google Apps Script client library for the AlloyDB API
 * Documentation URL: https://cloud.google.com/alloydb/
 * @class
 */
class Alloydb {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://alloydb.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/locations', 'GET', apiParams, clientConfig);
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}/operations', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.operations.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.clusters = {};
    this.projects.locations.clusters.restoreFromCloudSQL = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/clusters:restoreFromCloudSQL', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/clusters', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/clusters', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.clusters.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:export', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:import', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.upgrade = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:upgrade', 'PATCH', apiParams, clientConfig);
    this.projects.locations.clusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.clusters.promote = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:promote', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.switchover = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:switchover', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/clusters:restore', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.createsecondary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/clusters:createsecondary', 'POST', apiParams, clientConfig);

    this.projects.locations.clusters.instances = {};
    this.projects.locations.clusters.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/instances', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.instances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/instances', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.instances.createsecondary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/instances:createsecondary', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.instances.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.clusters.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.locations.clusters.instances.failover = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:failover', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.instances.injectFault = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:injectFault', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.instances.restart = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}:restart', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.instances.getConnectionInfo = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/connectionInfo', 'GET', apiParams, clientConfig);

    this.projects.locations.clusters.users = {};
    this.projects.locations.clusters.users.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/users', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.users.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.clusters.users.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/users', 'POST', apiParams, clientConfig);
    this.projects.locations.clusters.users.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.clusters.users.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.backups = {};
    this.projects.locations.backups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/backups', 'GET', apiParams, clientConfig);
    this.projects.locations.backups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'GET', apiParams, clientConfig);
    this.projects.locations.backups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/backups', 'POST', apiParams, clientConfig);
    this.projects.locations.backups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.locations.backups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.supportedDatabaseFlags = {};
    this.projects.locations.supportedDatabaseFlags.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1alpha/{+parent}/supportedDatabaseFlags', 'GET', apiParams, clientConfig);
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
