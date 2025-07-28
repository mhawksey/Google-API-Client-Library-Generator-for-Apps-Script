
/**
 * Google Apps Script client library for the Oracle Database@Google Cloud API
 * Documentation URL: https://cloud.google.com/oracle/database/docs
 * @class
 */
class Oracledatabase {
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
    this._rootUrl = 'https://oracledatabase.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.cloudExadataInfrastructures = {};
    this.projects.locations.cloudExadataInfrastructures.list = (params) => this._makeRequest('v1/{+parent}/cloudExadataInfrastructures', 'GET', params);
    this.projects.locations.cloudExadataInfrastructures.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.cloudExadataInfrastructures.create = (params) => this._makeRequest('v1/{+parent}/cloudExadataInfrastructures', 'POST', params);
    this.projects.locations.cloudExadataInfrastructures.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.cloudExadataInfrastructures.dbServers = {};
    this.projects.locations.cloudExadataInfrastructures.dbServers.list = (params) => this._makeRequest('v1/{+parent}/dbServers', 'GET', params);

    this.projects.locations.cloudVmClusters = {};
    this.projects.locations.cloudVmClusters.list = (params) => this._makeRequest('v1/{+parent}/cloudVmClusters', 'GET', params);
    this.projects.locations.cloudVmClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.cloudVmClusters.create = (params) => this._makeRequest('v1/{+parent}/cloudVmClusters', 'POST', params);
    this.projects.locations.cloudVmClusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.cloudVmClusters.dbNodes = {};
    this.projects.locations.cloudVmClusters.dbNodes.list = (params) => this._makeRequest('v1/{+parent}/dbNodes', 'GET', params);

    this.projects.locations.entitlements = {};
    this.projects.locations.entitlements.list = (params) => this._makeRequest('v1/{+parent}/entitlements', 'GET', params);

    this.projects.locations.giVersions = {};
    this.projects.locations.giVersions.list = (params) => this._makeRequest('v1/{+parent}/giVersions', 'GET', params);

    this.projects.locations.dbSystemShapes = {};
    this.projects.locations.dbSystemShapes.list = (params) => this._makeRequest('v1/{+parent}/dbSystemShapes', 'GET', params);

    this.projects.locations.autonomousDatabases = {};
    this.projects.locations.autonomousDatabases.list = (params) => this._makeRequest('v1/{+parent}/autonomousDatabases', 'GET', params);
    this.projects.locations.autonomousDatabases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.autonomousDatabases.create = (params) => this._makeRequest('v1/{+parent}/autonomousDatabases', 'POST', params);
    this.projects.locations.autonomousDatabases.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.autonomousDatabases.restore = (params) => this._makeRequest('v1/{+name}:restore', 'POST', params);
    this.projects.locations.autonomousDatabases.generateWallet = (params) => this._makeRequest('v1/{+name}:generateWallet', 'POST', params);
    this.projects.locations.autonomousDatabases.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);
    this.projects.locations.autonomousDatabases.start = (params) => this._makeRequest('v1/{+name}:start', 'POST', params);
    this.projects.locations.autonomousDatabases.restart = (params) => this._makeRequest('v1/{+name}:restart', 'POST', params);
    this.projects.locations.autonomousDatabases.switchover = (params) => this._makeRequest('v1/{+name}:switchover', 'POST', params);

    this.projects.locations.autonomousDbVersions = {};
    this.projects.locations.autonomousDbVersions.list = (params) => this._makeRequest('v1/{+parent}/autonomousDbVersions', 'GET', params);

    this.projects.locations.autonomousDatabaseCharacterSets = {};
    this.projects.locations.autonomousDatabaseCharacterSets.list = (params) => this._makeRequest('v1/{+parent}/autonomousDatabaseCharacterSets', 'GET', params);

    this.projects.locations.autonomousDatabaseBackups = {};
    this.projects.locations.autonomousDatabaseBackups.list = (params) => this._makeRequest('v1/{+parent}/autonomousDatabaseBackups', 'GET', params);

    this.projects.locations.odbNetworks = {};
    this.projects.locations.odbNetworks.list = (params) => this._makeRequest('v1/{+parent}/odbNetworks', 'GET', params);
    this.projects.locations.odbNetworks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.odbNetworks.create = (params) => this._makeRequest('v1/{+parent}/odbNetworks', 'POST', params);
    this.projects.locations.odbNetworks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.odbNetworks.odbSubnets = {};
    this.projects.locations.odbNetworks.odbSubnets.list = (params) => this._makeRequest('v1/{+parent}/odbSubnets', 'GET', params);
    this.projects.locations.odbNetworks.odbSubnets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.odbNetworks.odbSubnets.create = (params) => this._makeRequest('v1/{+parent}/odbSubnets', 'POST', params);
    this.projects.locations.odbNetworks.odbSubnets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
