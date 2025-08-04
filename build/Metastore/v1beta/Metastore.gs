
/**
 * Google Apps Script client library for the Dataproc Metastore API
 * Documentation URL: https://cloud.google.com/dataproc-metastore/docs
 * @class
 */
class Metastore {
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
    this._rootUrl = 'https://metastore.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1beta/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta/{+name}:cancel', 'POST', params);

    this.projects.locations.federations = {};
    this.projects.locations.federations.list = (params) => this._makeRequest('v1beta/{+parent}/federations', 'GET', params);
    this.projects.locations.federations.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.locations.federations.create = (params) => this._makeRequest('v1beta/{+parent}/federations', 'POST', params);
    this.projects.locations.federations.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.projects.locations.federations.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.projects.locations.federations.setIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.federations.getIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.federations.testIamPermissions = (params) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.services = {};
    this.projects.locations.services.list = (params) => this._makeRequest('v1beta/{+parent}/services', 'GET', params);
    this.projects.locations.services.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.locations.services.create = (params) => this._makeRequest('v1beta/{+parent}/services', 'POST', params);
    this.projects.locations.services.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.projects.locations.services.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.projects.locations.services.exportMetadata = (params) => this._makeRequest('v1beta/{+service}:exportMetadata', 'POST', params);
    this.projects.locations.services.restore = (params) => this._makeRequest('v1beta/{+service}:restore', 'POST', params);
    this.projects.locations.services.removeIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:removeIamPolicy', 'POST', params);
    this.projects.locations.services.queryMetadata = (params) => this._makeRequest('v1beta/{+service}:queryMetadata', 'POST', params);
    this.projects.locations.services.moveTableToDatabase = (params) => this._makeRequest('v1beta/{+service}:moveTableToDatabase', 'POST', params);
    this.projects.locations.services.alterLocation = (params) => this._makeRequest('v1beta/{+service}:alterLocation', 'POST', params);
    this.projects.locations.services.alterTableProperties = (params) => this._makeRequest('v1beta/{+service}:alterTableProperties', 'POST', params);
    this.projects.locations.services.startMigration = (params) => this._makeRequest('v1beta/{+service}:startMigration', 'POST', params);
    this.projects.locations.services.completeMigration = (params) => this._makeRequest('v1beta/{+service}:completeMigration', 'POST', params);
    this.projects.locations.services.cancelMigration = (params) => this._makeRequest('v1beta/{+service}:cancelMigration', 'POST', params);
    this.projects.locations.services.setIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.services.getIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.services.testIamPermissions = (params) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.services.metadataImports = {};
    this.projects.locations.services.metadataImports.list = (params) => this._makeRequest('v1beta/{+parent}/metadataImports', 'GET', params);
    this.projects.locations.services.metadataImports.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.locations.services.metadataImports.create = (params) => this._makeRequest('v1beta/{+parent}/metadataImports', 'POST', params);
    this.projects.locations.services.metadataImports.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    this.projects.locations.services.backups = {};
    this.projects.locations.services.backups.list = (params) => this._makeRequest('v1beta/{+parent}/backups', 'GET', params);
    this.projects.locations.services.backups.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.locations.services.backups.create = (params) => this._makeRequest('v1beta/{+parent}/backups', 'POST', params);
    this.projects.locations.services.backups.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.projects.locations.services.backups.setIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.services.backups.getIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.services.backups.testIamPermissions = (params) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.services.migrationExecutions = {};
    this.projects.locations.services.migrationExecutions.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.locations.services.migrationExecutions.list = (params) => this._makeRequest('v1beta/{+parent}/migrationExecutions', 'GET', params);
    this.projects.locations.services.migrationExecutions.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);

    this.projects.locations.services.databases = {};
    this.projects.locations.services.databases.setIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.services.databases.getIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.services.databases.testIamPermissions = (params) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.services.databases.tables = {};
    this.projects.locations.services.databases.tables.setIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.services.databases.tables.getIamPolicy = (params) => this._makeRequest('v1beta/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.services.databases.tables.testIamPermissions = (params) => this._makeRequest('v1beta/{+resource}:testIamPermissions', 'POST', params);
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
