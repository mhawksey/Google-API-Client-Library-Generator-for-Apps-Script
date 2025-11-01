
/**
 * Google Apps Script client library for the Cloud Storage JSON API
 * Documentation URL: https://developers.google.com/storage/docs/json_api/
 * @class
 */
class Storage {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://storage.googleapis.com/';
    this._servicePath = 'storage/v1/';


    this.anywhereCaches = {};
    this.anywhereCaches.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches', 'POST', apiParams, clientConfig);
    this.anywhereCaches.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}', 'PATCH', apiParams, clientConfig);
    this.anywhereCaches.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}', 'GET', apiParams, clientConfig);
    this.anywhereCaches.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches', 'GET', apiParams, clientConfig);
    this.anywhereCaches.pause = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}/pause', 'POST', apiParams, clientConfig);
    this.anywhereCaches.resume = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}/resume', 'POST', apiParams, clientConfig);
    this.anywhereCaches.disable = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}/disable', 'POST', apiParams, clientConfig);

    this.bucketAccessControls = {};
    this.bucketAccessControls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/acl/{entity}', 'DELETE', apiParams, clientConfig);
    this.bucketAccessControls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/acl/{entity}', 'GET', apiParams, clientConfig);
    this.bucketAccessControls.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/acl', 'POST', apiParams, clientConfig);
    this.bucketAccessControls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/acl', 'GET', apiParams, clientConfig);
    this.bucketAccessControls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/acl/{entity}', 'PATCH', apiParams, clientConfig);
    this.bucketAccessControls.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/acl/{entity}', 'PUT', apiParams, clientConfig);

    this.buckets = {};
    this.buckets.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}', 'DELETE', apiParams, clientConfig);
    this.buckets.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/restore', 'POST', apiParams, clientConfig);
    this.buckets.relocate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/relocate', 'POST', apiParams, clientConfig);
    this.buckets.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}', 'GET', apiParams, clientConfig);
    this.buckets.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/iam', 'GET', apiParams, clientConfig);
    this.buckets.getStorageLayout = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/storageLayout', 'GET', apiParams, clientConfig);
    this.buckets.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b', 'POST', apiParams, clientConfig);
    this.buckets.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b', 'GET', apiParams, clientConfig);
    this.buckets.lockRetentionPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/lockRetentionPolicy', 'POST', apiParams, clientConfig);
    this.buckets.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}', 'PATCH', apiParams, clientConfig);
    this.buckets.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/iam', 'PUT', apiParams, clientConfig);
    this.buckets.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/iam/testPermissions', 'GET', apiParams, clientConfig);
    this.buckets.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}', 'PUT', apiParams, clientConfig);

    this.operations = {};
    this.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/operations/{operationId}/cancel', 'POST', apiParams, clientConfig);
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/operations/{operationId}', 'GET', apiParams, clientConfig);
    this.operations.advanceRelocateBucket = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/operations/{operationId}/advanceRelocateBucket', 'POST', apiParams, clientConfig);
    this.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/operations', 'GET', apiParams, clientConfig);

    this.channels = {};
    this.channels.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('channels/stop', 'POST', apiParams, clientConfig);

    this.defaultObjectAccessControls = {};
    this.defaultObjectAccessControls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'DELETE', apiParams, clientConfig);
    this.defaultObjectAccessControls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'GET', apiParams, clientConfig);
    this.defaultObjectAccessControls.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/defaultObjectAcl', 'POST', apiParams, clientConfig);
    this.defaultObjectAccessControls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/defaultObjectAcl', 'GET', apiParams, clientConfig);
    this.defaultObjectAccessControls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'PATCH', apiParams, clientConfig);
    this.defaultObjectAccessControls.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'PUT', apiParams, clientConfig);

    this.folders = {};
    this.folders.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/folders/{folder}', 'DELETE', apiParams, clientConfig);
    this.folders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/folders/{folder}', 'GET', apiParams, clientConfig);
    this.folders.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/folders', 'POST', apiParams, clientConfig);
    this.folders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/folders', 'GET', apiParams, clientConfig);
    this.folders.rename = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/folders/{sourceFolder}/renameTo/folders/{destinationFolder}', 'POST', apiParams, clientConfig);

    this.managedFolders = {};
    this.managedFolders.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}', 'DELETE', apiParams, clientConfig);
    this.managedFolders.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}', 'GET', apiParams, clientConfig);
    this.managedFolders.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}/iam', 'GET', apiParams, clientConfig);
    this.managedFolders.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders', 'POST', apiParams, clientConfig);
    this.managedFolders.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders', 'GET', apiParams, clientConfig);
    this.managedFolders.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}/iam', 'PUT', apiParams, clientConfig);
    this.managedFolders.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}/iam/testPermissions', 'GET', apiParams, clientConfig);

    this.notifications = {};
    this.notifications.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/notificationConfigs/{notification}', 'DELETE', apiParams, clientConfig);
    this.notifications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/notificationConfigs/{notification}', 'GET', apiParams, clientConfig);
    this.notifications.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/notificationConfigs', 'POST', apiParams, clientConfig);
    this.notifications.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/notificationConfigs', 'GET', apiParams, clientConfig);

    this.objectAccessControls = {};
    this.objectAccessControls.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'DELETE', apiParams, clientConfig);
    this.objectAccessControls.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'GET', apiParams, clientConfig);
    this.objectAccessControls.insert = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/acl', 'POST', apiParams, clientConfig);
    this.objectAccessControls.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/acl', 'GET', apiParams, clientConfig);
    this.objectAccessControls.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'PATCH', apiParams, clientConfig);
    this.objectAccessControls.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'PUT', apiParams, clientConfig);

    this.objects = {};
    this.objects.compose = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{destinationBucket}/o/{destinationObject}/compose', 'POST', apiParams, clientConfig);
    this.objects.copy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}', 'POST', apiParams, clientConfig);
    this.objects.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}', 'DELETE', apiParams, clientConfig);
    this.objects.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}', 'GET', apiParams, clientConfig);
    this.objects.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/iam', 'GET', apiParams, clientConfig);
    this.objects.insert = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/storage/v1/b/{bucket}/o' : 'b/{bucket}/o';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
    this.objects.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o', 'GET', apiParams, clientConfig);
    this.objects.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}', 'PATCH', apiParams, clientConfig);
    this.objects.rewrite = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject}', 'POST', apiParams, clientConfig);
    this.objects.move = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{sourceObject}/moveTo/o/{destinationObject}', 'POST', apiParams, clientConfig);
    this.objects.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/iam', 'PUT', apiParams, clientConfig);
    this.objects.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/iam/testPermissions', 'GET', apiParams, clientConfig);
    this.objects.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}', 'PUT', apiParams, clientConfig);
    this.objects.watchAll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/watch', 'POST', apiParams, clientConfig);
    this.objects.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/{object}/restore', 'POST', apiParams, clientConfig);
    this.objects.bulkRestore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('b/{bucket}/o/bulkRestore', 'POST', apiParams, clientConfig);

    this.projects = {};

    this.projects.hmacKeys = {};
    this.projects.hmacKeys.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{projectId}/hmacKeys', 'POST', apiParams, clientConfig);
    this.projects.hmacKeys.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{projectId}/hmacKeys/{accessId}', 'DELETE', apiParams, clientConfig);
    this.projects.hmacKeys.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{projectId}/hmacKeys/{accessId}', 'GET', apiParams, clientConfig);
    this.projects.hmacKeys.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{projectId}/hmacKeys', 'GET', apiParams, clientConfig);
    this.projects.hmacKeys.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{projectId}/hmacKeys/{accessId}', 'PUT', apiParams, clientConfig);

    this.projects.serviceAccount = {};
    this.projects.serviceAccount.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('projects/{projectId}/serviceAccount', 'GET', apiParams, clientConfig);
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
