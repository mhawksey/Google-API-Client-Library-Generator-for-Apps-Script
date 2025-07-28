
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://alloydb.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1alpha/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.projects.locations.clusters = {};
    this.projects.locations.clusters.restoreFromCloudSQL = (params) => this._makeRequest('v1alpha/{+parent}/clusters:restoreFromCloudSQL', 'POST', params);
    this.projects.locations.clusters.list = (params) => this._makeRequest('v1alpha/{+parent}/clusters', 'GET', params);
    this.projects.locations.clusters.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.clusters.create = (params) => this._makeRequest('v1alpha/{+parent}/clusters', 'POST', params);
    this.projects.locations.clusters.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.clusters.export = (params) => this._makeRequest('v1alpha/{+name}:export', 'POST', params);
    this.projects.locations.clusters.import = (params) => this._makeRequest('v1alpha/{+name}:import', 'POST', params);
    this.projects.locations.clusters.upgrade = (params) => this._makeRequest('v1alpha/{+name}:upgrade', 'PATCH', params);
    this.projects.locations.clusters.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.clusters.promote = (params) => this._makeRequest('v1alpha/{+name}:promote', 'POST', params);
    this.projects.locations.clusters.switchover = (params) => this._makeRequest('v1alpha/{+name}:switchover', 'POST', params);
    this.projects.locations.clusters.restore = (params) => this._makeRequest('v1alpha/{+parent}/clusters:restore', 'POST', params);
    this.projects.locations.clusters.createsecondary = (params) => this._makeRequest('v1alpha/{+parent}/clusters:createsecondary', 'POST', params);

    this.projects.locations.clusters.instances = {};
    this.projects.locations.clusters.instances.list = (params) => this._makeRequest('v1alpha/{+parent}/instances', 'GET', params);
    this.projects.locations.clusters.instances.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.clusters.instances.create = (params) => this._makeRequest('v1alpha/{+parent}/instances', 'POST', params);
    this.projects.locations.clusters.instances.createsecondary = (params) => this._makeRequest('v1alpha/{+parent}/instances:createsecondary', 'POST', params);
    this.projects.locations.clusters.instances.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.clusters.instances.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
    this.projects.locations.clusters.instances.failover = (params) => this._makeRequest('v1alpha/{+name}:failover', 'POST', params);
    this.projects.locations.clusters.instances.injectFault = (params) => this._makeRequest('v1alpha/{+name}:injectFault', 'POST', params);
    this.projects.locations.clusters.instances.restart = (params) => this._makeRequest('v1alpha/{+name}:restart', 'POST', params);
    this.projects.locations.clusters.instances.getConnectionInfo = (params) => this._makeRequest('v1alpha/{+parent}/connectionInfo', 'GET', params);

    this.projects.locations.clusters.users = {};
    this.projects.locations.clusters.users.list = (params) => this._makeRequest('v1alpha/{+parent}/users', 'GET', params);
    this.projects.locations.clusters.users.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.clusters.users.create = (params) => this._makeRequest('v1alpha/{+parent}/users', 'POST', params);
    this.projects.locations.clusters.users.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.clusters.users.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.backups = {};
    this.projects.locations.backups.list = (params) => this._makeRequest('v1alpha/{+parent}/backups', 'GET', params);
    this.projects.locations.backups.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.backups.create = (params) => this._makeRequest('v1alpha/{+parent}/backups', 'POST', params);
    this.projects.locations.backups.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.backups.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.supportedDatabaseFlags = {};
    this.projects.locations.supportedDatabaseFlags.list = (params) => this._makeRequest('v1alpha/{+parent}/supportedDatabaseFlags', 'GET', params);
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
