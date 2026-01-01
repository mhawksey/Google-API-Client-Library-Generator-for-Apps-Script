
/**
 * Google Apps Script client library for the Cloud Bigtable Admin API
 * Documentation URL: https://cloud.google.com/bigtable/
 * @class
 */
class Bigtableadmin {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://bigtableadmin.googleapis.com/';
    this._servicePath = '';


    this.operations = {};
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.operations.projects = {};

    this.operations.projects.operations = {};
    this.operations.projects.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/operations', 'GET', apiParams, clientConfig);

    this.projects = {};

    this.projects.instances = {};
    this.projects.instances.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.instances.partialUpdateInstance = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.instances.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/instances', 'POST', apiParams, clientConfig);
    this.projects.instances.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/instances', 'GET', apiParams, clientConfig);

    this.projects.instances.clusters = {};
    this.projects.instances.clusters.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/clusters', 'GET', apiParams, clientConfig);
    this.projects.instances.clusters.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.clusters.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PUT', apiParams, clientConfig);
    this.projects.instances.clusters.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/clusters', 'POST', apiParams, clientConfig);
    this.projects.instances.clusters.partialUpdateCluster = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.clusters.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.instances.clusters.backups = {};
    this.projects.instances.clusters.backups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.clusters.backups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/backups', 'GET', apiParams, clientConfig);
    this.projects.instances.clusters.backups.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.clusters.backups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.clusters.backups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.clusters.backups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/backups', 'POST', apiParams, clientConfig);
    this.projects.instances.clusters.backups.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.instances.clusters.backups.copy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/backups:copy', 'POST', apiParams, clientConfig);
    this.projects.instances.clusters.backups.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    this.projects.instances.clusters.hotTablets = {};
    this.projects.instances.clusters.hotTablets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/hotTablets', 'GET', apiParams, clientConfig);

    this.projects.instances.appProfiles = {};
    this.projects.instances.appProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/appProfiles', 'GET', apiParams, clientConfig);
    this.projects.instances.appProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.appProfiles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/appProfiles', 'POST', apiParams, clientConfig);
    this.projects.instances.appProfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.appProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.instances.tables = {};
    this.projects.instances.tables.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.generateConsistencyToken = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:generateConsistencyToken', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:undelete', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.modifyColumnFamilies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:modifyColumnFamilies', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.tables.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.tables.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/tables:restore', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/tables', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.dropRowRange = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:dropRowRange', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.tables.checkConsistency = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}:checkConsistency', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/tables', 'GET', apiParams, clientConfig);

    this.projects.instances.tables.schemaBundles = {};
    this.projects.instances.tables.schemaBundles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.tables.schemaBundles.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.schemaBundles.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.schemaBundles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/schemaBundles', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.schemaBundles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.tables.schemaBundles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.tables.schemaBundles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/schemaBundles', 'GET', apiParams, clientConfig);
    this.projects.instances.tables.schemaBundles.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    this.projects.instances.tables.authorizedViews = {};
    this.projects.instances.tables.authorizedViews.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.authorizedViews.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.tables.authorizedViews.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/authorizedViews', 'GET', apiParams, clientConfig);
    this.projects.instances.tables.authorizedViews.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/authorizedViews', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.authorizedViews.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.tables.authorizedViews.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.tables.authorizedViews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);
    this.projects.instances.tables.authorizedViews.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    this.projects.instances.logicalViews = {};
    this.projects.instances.logicalViews.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.logicalViews.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logicalViews', 'POST', apiParams, clientConfig);
    this.projects.instances.logicalViews.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.logicalViews.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.logicalViews.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.instances.logicalViews.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.logicalViews.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/logicalViews', 'GET', apiParams, clientConfig);
    this.projects.instances.logicalViews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.instances.materializedViews = {};
    this.projects.instances.materializedViews.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/materializedViews', 'POST', apiParams, clientConfig);
    this.projects.instances.materializedViews.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.materializedViews.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'DELETE', apiParams, clientConfig);
    this.projects.instances.materializedViews.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);
    this.projects.instances.materializedViews.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'PATCH', apiParams, clientConfig);
    this.projects.instances.materializedViews.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);
    this.projects.instances.materializedViews.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+parent}/materializedViews', 'GET', apiParams, clientConfig);
    this.projects.instances.materializedViews.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations = {};
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2/{+name}/locations', 'GET', apiParams, clientConfig);
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
