
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://bigtableadmin.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.operations.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.operations.projects = {};

    this.operations.projects.operations = {};
    this.operations.projects.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    this.projects = {};

    this.projects.instances = {};
    this.projects.instances.create = (params) => this._makeRequest('v2/{+parent}/instances', 'POST', params);
    this.projects.instances.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.instances.list = (params) => this._makeRequest('v2/{+parent}/instances', 'GET', params);
    this.projects.instances.update = (params) => this._makeRequest('v2/{+name}', 'PUT', params);
    this.projects.instances.partialUpdateInstance = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.instances.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.instances.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);
    this.projects.instances.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.instances.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.instances.clusters = {};
    this.projects.instances.clusters.create = (params) => this._makeRequest('v2/{+parent}/clusters', 'POST', params);
    this.projects.instances.clusters.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.instances.clusters.list = (params) => this._makeRequest('v2/{+parent}/clusters', 'GET', params);
    this.projects.instances.clusters.update = (params) => this._makeRequest('v2/{+name}', 'PUT', params);
    this.projects.instances.clusters.partialUpdateCluster = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.instances.clusters.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.instances.clusters.hotTablets = {};
    this.projects.instances.clusters.hotTablets.list = (params) => this._makeRequest('v2/{+parent}/hotTablets', 'GET', params);

    this.projects.instances.clusters.backups = {};
    this.projects.instances.clusters.backups.create = (params) => this._makeRequest('v2/{+parent}/backups', 'POST', params);
    this.projects.instances.clusters.backups.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.instances.clusters.backups.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.instances.clusters.backups.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.instances.clusters.backups.list = (params) => this._makeRequest('v2/{+parent}/backups', 'GET', params);
    this.projects.instances.clusters.backups.copy = (params) => this._makeRequest('v2/{+parent}/backups:copy', 'POST', params);
    this.projects.instances.clusters.backups.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);
    this.projects.instances.clusters.backups.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.instances.clusters.backups.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.instances.appProfiles = {};
    this.projects.instances.appProfiles.create = (params) => this._makeRequest('v2/{+parent}/appProfiles', 'POST', params);
    this.projects.instances.appProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.instances.appProfiles.list = (params) => this._makeRequest('v2/{+parent}/appProfiles', 'GET', params);
    this.projects.instances.appProfiles.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.instances.appProfiles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.instances.materializedViews = {};
    this.projects.instances.materializedViews.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);
    this.projects.instances.materializedViews.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.instances.materializedViews.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);
    this.projects.instances.materializedViews.create = (params) => this._makeRequest('v2/{+parent}/materializedViews', 'POST', params);
    this.projects.instances.materializedViews.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.instances.materializedViews.list = (params) => this._makeRequest('v2/{+parent}/materializedViews', 'GET', params);
    this.projects.instances.materializedViews.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.instances.materializedViews.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.instances.logicalViews = {};
    this.projects.instances.logicalViews.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);
    this.projects.instances.logicalViews.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.instances.logicalViews.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);
    this.projects.instances.logicalViews.create = (params) => this._makeRequest('v2/{+parent}/logicalViews', 'POST', params);
    this.projects.instances.logicalViews.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.instances.logicalViews.list = (params) => this._makeRequest('v2/{+parent}/logicalViews', 'GET', params);
    this.projects.instances.logicalViews.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.instances.logicalViews.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.instances.tables = {};
    this.projects.instances.tables.create = (params) => this._makeRequest('v2/{+parent}/tables', 'POST', params);
    this.projects.instances.tables.list = (params) => this._makeRequest('v2/{+parent}/tables', 'GET', params);
    this.projects.instances.tables.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.instances.tables.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.instances.tables.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.instances.tables.undelete = (params) => this._makeRequest('v2/{+name}:undelete', 'POST', params);
    this.projects.instances.tables.modifyColumnFamilies = (params) => this._makeRequest('v2/{+name}:modifyColumnFamilies', 'POST', params);
    this.projects.instances.tables.dropRowRange = (params) => this._makeRequest('v2/{+name}:dropRowRange', 'POST', params);
    this.projects.instances.tables.generateConsistencyToken = (params) => this._makeRequest('v2/{+name}:generateConsistencyToken', 'POST', params);
    this.projects.instances.tables.checkConsistency = (params) => this._makeRequest('v2/{+name}:checkConsistency', 'POST', params);
    this.projects.instances.tables.restore = (params) => this._makeRequest('v2/{+parent}/tables:restore', 'POST', params);
    this.projects.instances.tables.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);
    this.projects.instances.tables.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.instances.tables.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.instances.tables.authorizedViews = {};
    this.projects.instances.tables.authorizedViews.create = (params) => this._makeRequest('v2/{+parent}/authorizedViews', 'POST', params);
    this.projects.instances.tables.authorizedViews.list = (params) => this._makeRequest('v2/{+parent}/authorizedViews', 'GET', params);
    this.projects.instances.tables.authorizedViews.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.instances.tables.authorizedViews.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.instances.tables.authorizedViews.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.instances.tables.authorizedViews.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);
    this.projects.instances.tables.authorizedViews.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.instances.tables.authorizedViews.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.instances.tables.schemaBundles = {};
    this.projects.instances.tables.schemaBundles.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);
    this.projects.instances.tables.schemaBundles.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.instances.tables.schemaBundles.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);
    this.projects.instances.tables.schemaBundles.create = (params) => this._makeRequest('v2/{+parent}/schemaBundles', 'POST', params);
    this.projects.instances.tables.schemaBundles.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.instances.tables.schemaBundles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.instances.tables.schemaBundles.list = (params) => this._makeRequest('v2/{+parent}/schemaBundles', 'GET', params);
    this.projects.instances.tables.schemaBundles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
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
