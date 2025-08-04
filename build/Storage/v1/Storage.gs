
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://storage.googleapis.com/';
    this._servicePath = 'storage/v1/';

    // --- Public Interface Initialization ---

    this.anywhereCaches = {};
    this.anywhereCaches.insert = (params) => this._makeRequest('b/{bucket}/anywhereCaches', 'POST', params);
    this.anywhereCaches.update = (params) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}', 'PATCH', params);
    this.anywhereCaches.get = (params) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}', 'GET', params);
    this.anywhereCaches.list = (params) => this._makeRequest('b/{bucket}/anywhereCaches', 'GET', params);
    this.anywhereCaches.pause = (params) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}/pause', 'POST', params);
    this.anywhereCaches.resume = (params) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}/resume', 'POST', params);
    this.anywhereCaches.disable = (params) => this._makeRequest('b/{bucket}/anywhereCaches/{anywhereCacheId}/disable', 'POST', params);

    this.bucketAccessControls = {};
    this.bucketAccessControls.delete = (params) => this._makeRequest('b/{bucket}/acl/{entity}', 'DELETE', params);
    this.bucketAccessControls.get = (params) => this._makeRequest('b/{bucket}/acl/{entity}', 'GET', params);
    this.bucketAccessControls.insert = (params) => this._makeRequest('b/{bucket}/acl', 'POST', params);
    this.bucketAccessControls.list = (params) => this._makeRequest('b/{bucket}/acl', 'GET', params);
    this.bucketAccessControls.patch = (params) => this._makeRequest('b/{bucket}/acl/{entity}', 'PATCH', params);
    this.bucketAccessControls.update = (params) => this._makeRequest('b/{bucket}/acl/{entity}', 'PUT', params);

    this.buckets = {};
    this.buckets.delete = (params) => this._makeRequest('b/{bucket}', 'DELETE', params);
    this.buckets.restore = (params) => this._makeRequest('b/{bucket}/restore', 'POST', params);
    this.buckets.relocate = (params) => this._makeRequest('b/{bucket}/relocate', 'POST', params);
    this.buckets.get = (params) => this._makeRequest('b/{bucket}', 'GET', params);
    this.buckets.getIamPolicy = (params) => this._makeRequest('b/{bucket}/iam', 'GET', params);
    this.buckets.getStorageLayout = (params) => this._makeRequest('b/{bucket}/storageLayout', 'GET', params);
    this.buckets.insert = (params) => this._makeRequest('b', 'POST', params);
    this.buckets.list = (params) => this._makeRequest('b', 'GET', params);
    this.buckets.lockRetentionPolicy = (params) => this._makeRequest('b/{bucket}/lockRetentionPolicy', 'POST', params);
    this.buckets.patch = (params) => this._makeRequest('b/{bucket}', 'PATCH', params);
    this.buckets.setIamPolicy = (params) => this._makeRequest('b/{bucket}/iam', 'PUT', params);
    this.buckets.testIamPermissions = (params) => this._makeRequest('b/{bucket}/iam/testPermissions', 'GET', params);
    this.buckets.update = (params) => this._makeRequest('b/{bucket}', 'PUT', params);

    this.operations = {};
    this.operations.cancel = (params) => this._makeRequest('b/{bucket}/operations/{operationId}/cancel', 'POST', params);
    this.operations.get = (params) => this._makeRequest('b/{bucket}/operations/{operationId}', 'GET', params);
    this.operations.advanceRelocateBucket = (params) => this._makeRequest('b/{bucket}/operations/{operationId}/advanceRelocateBucket', 'POST', params);
    this.operations.list = (params) => this._makeRequest('b/{bucket}/operations', 'GET', params);

    this.channels = {};
    this.channels.stop = (params) => this._makeRequest('channels/stop', 'POST', params);

    this.defaultObjectAccessControls = {};
    this.defaultObjectAccessControls.delete = (params) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'DELETE', params);
    this.defaultObjectAccessControls.get = (params) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'GET', params);
    this.defaultObjectAccessControls.insert = (params) => this._makeRequest('b/{bucket}/defaultObjectAcl', 'POST', params);
    this.defaultObjectAccessControls.list = (params) => this._makeRequest('b/{bucket}/defaultObjectAcl', 'GET', params);
    this.defaultObjectAccessControls.patch = (params) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'PATCH', params);
    this.defaultObjectAccessControls.update = (params) => this._makeRequest('b/{bucket}/defaultObjectAcl/{entity}', 'PUT', params);

    this.folders = {};
    this.folders.delete = (params) => this._makeRequest('b/{bucket}/folders/{folder}', 'DELETE', params);
    this.folders.get = (params) => this._makeRequest('b/{bucket}/folders/{folder}', 'GET', params);
    this.folders.insert = (params) => this._makeRequest('b/{bucket}/folders', 'POST', params);
    this.folders.list = (params) => this._makeRequest('b/{bucket}/folders', 'GET', params);
    this.folders.rename = (params) => this._makeRequest('b/{bucket}/folders/{sourceFolder}/renameTo/folders/{destinationFolder}', 'POST', params);

    this.managedFolders = {};
    this.managedFolders.delete = (params) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}', 'DELETE', params);
    this.managedFolders.get = (params) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}', 'GET', params);
    this.managedFolders.getIamPolicy = (params) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}/iam', 'GET', params);
    this.managedFolders.insert = (params) => this._makeRequest('b/{bucket}/managedFolders', 'POST', params);
    this.managedFolders.list = (params) => this._makeRequest('b/{bucket}/managedFolders', 'GET', params);
    this.managedFolders.setIamPolicy = (params) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}/iam', 'PUT', params);
    this.managedFolders.testIamPermissions = (params) => this._makeRequest('b/{bucket}/managedFolders/{managedFolder}/iam/testPermissions', 'GET', params);

    this.notifications = {};
    this.notifications.delete = (params) => this._makeRequest('b/{bucket}/notificationConfigs/{notification}', 'DELETE', params);
    this.notifications.get = (params) => this._makeRequest('b/{bucket}/notificationConfigs/{notification}', 'GET', params);
    this.notifications.insert = (params) => this._makeRequest('b/{bucket}/notificationConfigs', 'POST', params);
    this.notifications.list = (params) => this._makeRequest('b/{bucket}/notificationConfigs', 'GET', params);

    this.objectAccessControls = {};
    this.objectAccessControls.delete = (params) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'DELETE', params);
    this.objectAccessControls.get = (params) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'GET', params);
    this.objectAccessControls.insert = (params) => this._makeRequest('b/{bucket}/o/{object}/acl', 'POST', params);
    this.objectAccessControls.list = (params) => this._makeRequest('b/{bucket}/o/{object}/acl', 'GET', params);
    this.objectAccessControls.patch = (params) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'PATCH', params);
    this.objectAccessControls.update = (params) => this._makeRequest('b/{bucket}/o/{object}/acl/{entity}', 'PUT', params);

    this.objects = {};
    this.objects.compose = (params) => this._makeRequest('b/{destinationBucket}/o/{destinationObject}/compose', 'POST', params);
    this.objects.copy = (params) => this._makeRequest('b/{sourceBucket}/o/{sourceObject}/copyTo/b/{destinationBucket}/o/{destinationObject}', 'POST', params);
    this.objects.delete = (params) => this._makeRequest('b/{bucket}/o/{object}', 'DELETE', params);
    this.objects.get = (params) => this._makeRequest('b/{bucket}/o/{object}', 'GET', params);
    this.objects.getIamPolicy = (params) => this._makeRequest('b/{bucket}/o/{object}/iam', 'GET', params);
    this.objects.insert = (params) => this._makeRequest('b/{bucket}/o', 'POST', params);
    this.objects.list = (params) => this._makeRequest('b/{bucket}/o', 'GET', params);
    this.objects.patch = (params) => this._makeRequest('b/{bucket}/o/{object}', 'PATCH', params);
    this.objects.rewrite = (params) => this._makeRequest('b/{sourceBucket}/o/{sourceObject}/rewriteTo/b/{destinationBucket}/o/{destinationObject}', 'POST', params);
    this.objects.move = (params) => this._makeRequest('b/{bucket}/o/{sourceObject}/moveTo/o/{destinationObject}', 'POST', params);
    this.objects.setIamPolicy = (params) => this._makeRequest('b/{bucket}/o/{object}/iam', 'PUT', params);
    this.objects.testIamPermissions = (params) => this._makeRequest('b/{bucket}/o/{object}/iam/testPermissions', 'GET', params);
    this.objects.update = (params) => this._makeRequest('b/{bucket}/o/{object}', 'PUT', params);
    this.objects.watchAll = (params) => this._makeRequest('b/{bucket}/o/watch', 'POST', params);
    this.objects.restore = (params) => this._makeRequest('b/{bucket}/o/{object}/restore', 'POST', params);
    this.objects.bulkRestore = (params) => this._makeRequest('b/{bucket}/o/bulkRestore', 'POST', params);

    this.projects = {};

    this.projects.hmacKeys = {};
    this.projects.hmacKeys.create = (params) => this._makeRequest('projects/{projectId}/hmacKeys', 'POST', params);
    this.projects.hmacKeys.delete = (params) => this._makeRequest('projects/{projectId}/hmacKeys/{accessId}', 'DELETE', params);
    this.projects.hmacKeys.get = (params) => this._makeRequest('projects/{projectId}/hmacKeys/{accessId}', 'GET', params);
    this.projects.hmacKeys.list = (params) => this._makeRequest('projects/{projectId}/hmacKeys', 'GET', params);
    this.projects.hmacKeys.update = (params) => this._makeRequest('projects/{projectId}/hmacKeys/{accessId}', 'PUT', params);

    this.projects.serviceAccount = {};
    this.projects.serviceAccount.get = (params) => this._makeRequest('projects/{projectId}/serviceAccount', 'GET', params);
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
