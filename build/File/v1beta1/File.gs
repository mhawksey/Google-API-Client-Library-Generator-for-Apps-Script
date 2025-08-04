
/**
 * Google Apps Script client library for the Cloud Filestore API
 * Documentation URL: https://cloud.google.com/filestore/
 * @class
 */
class File {
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
    this._rootUrl = 'https://file.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.instances = {};
    this.projects.locations.instances.list = (params) => this._makeRequest('v1beta1/{+parent}/instances', 'GET', params);
    this.projects.locations.instances.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.instances.create = (params) => this._makeRequest('v1beta1/{+parent}/instances', 'POST', params);
    this.projects.locations.instances.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.instances.restore = (params) => this._makeRequest('v1beta1/{+name}:restore', 'POST', params);
    this.projects.locations.instances.revert = (params) => this._makeRequest('v1beta1/{+name}:revert', 'POST', params);
    this.projects.locations.instances.promoteReplica = (params) => this._makeRequest('v1beta1/{+name}:promoteReplica', 'POST', params);
    this.projects.locations.instances.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.instances.snapshots = {};
    this.projects.locations.instances.snapshots.list = (params) => this._makeRequest('v1beta1/{+parent}/snapshots', 'GET', params);
    this.projects.locations.instances.snapshots.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.instances.snapshots.create = (params) => this._makeRequest('v1beta1/{+parent}/snapshots', 'POST', params);
    this.projects.locations.instances.snapshots.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.instances.snapshots.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.instances.shares = {};
    this.projects.locations.instances.shares.list = (params) => this._makeRequest('v1beta1/{+parent}/shares', 'GET', params);
    this.projects.locations.instances.shares.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.instances.shares.create = (params) => this._makeRequest('v1beta1/{+parent}/shares', 'POST', params);
    this.projects.locations.instances.shares.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.instances.shares.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.backups = {};
    this.projects.locations.backups.list = (params) => this._makeRequest('v1beta1/{+parent}/backups', 'GET', params);
    this.projects.locations.backups.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.backups.create = (params) => this._makeRequest('v1beta1/{+parent}/backups', 'POST', params);
    this.projects.locations.backups.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.backups.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
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
