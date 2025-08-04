
/**
 * Google Apps Script client library for the Google Cloud Memorystore for Redis API
 * Documentation URL: https://cloud.google.com/memorystore/docs/redis/
 * @class
 */
class Redis {
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
    this._rootUrl = 'https://redis.googleapis.com/';
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

    this.projects.locations.clusters = {};
    this.projects.locations.clusters.list = (params) => this._makeRequest('v1beta1/{+parent}/clusters', 'GET', params);
    this.projects.locations.clusters.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.clusters.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.clusters.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.clusters.create = (params) => this._makeRequest('v1beta1/{+parent}/clusters', 'POST', params);
    this.projects.locations.clusters.getCertificateAuthority = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.clusters.rescheduleClusterMaintenance = (params) => this._makeRequest('v1beta1/{+name}:rescheduleClusterMaintenance', 'POST', params);
    this.projects.locations.clusters.backup = (params) => this._makeRequest('v1beta1/{+name}:backup', 'POST', params);

    this.projects.locations.backupCollections = {};
    this.projects.locations.backupCollections.list = (params) => this._makeRequest('v1beta1/{+parent}/backupCollections', 'GET', params);
    this.projects.locations.backupCollections.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.backupCollections.backups = {};
    this.projects.locations.backupCollections.backups.list = (params) => this._makeRequest('v1beta1/{+parent}/backups', 'GET', params);
    this.projects.locations.backupCollections.backups.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.backupCollections.backups.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.backupCollections.backups.export = (params) => this._makeRequest('v1beta1/{+name}:export', 'POST', params);

    this.projects.locations.instances = {};
    this.projects.locations.instances.list = (params) => this._makeRequest('v1beta1/{+parent}/instances', 'GET', params);
    this.projects.locations.instances.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.instances.getAuthString = (params) => this._makeRequest('v1beta1/{+name}/authString', 'GET', params);
    this.projects.locations.instances.create = (params) => this._makeRequest('v1beta1/{+parent}/instances', 'POST', params);
    this.projects.locations.instances.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.instances.upgrade = (params) => this._makeRequest('v1beta1/{+name}:upgrade', 'POST', params);
    this.projects.locations.instances.import = (params) => this._makeRequest('v1beta1/{+name}:import', 'POST', params);
    this.projects.locations.instances.export = (params) => this._makeRequest('v1beta1/{+name}:export', 'POST', params);
    this.projects.locations.instances.failover = (params) => this._makeRequest('v1beta1/{+name}:failover', 'POST', params);
    this.projects.locations.instances.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.instances.rescheduleMaintenance = (params) => this._makeRequest('v1beta1/{+name}:rescheduleMaintenance', 'POST', params);
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
