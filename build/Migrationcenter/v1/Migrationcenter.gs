
/**
 * Google Apps Script client library for the Migration Center API
 * Documentation URL: https://cloud.google.com/migration-center
 * @class
 */
class Migrationcenter {
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
    this._rootUrl = 'https://migrationcenter.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.updateSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.assets = {};
    this.projects.locations.assets.list = (params) => this._makeRequest('v1/{+parent}/assets', 'GET', params);
    this.projects.locations.assets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.assets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.assets.batchUpdate = (params) => this._makeRequest('v1/{+parent}/assets:batchUpdate', 'POST', params);
    this.projects.locations.assets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.assets.batchDelete = (params) => this._makeRequest('v1/{+parent}/assets:batchDelete', 'POST', params);
    this.projects.locations.assets.reportAssetFrames = (params) => this._makeRequest('v1/{+parent}/assets:reportAssetFrames', 'POST', params);
    this.projects.locations.assets.aggregateValues = (params) => this._makeRequest('v1/{+parent}/assets:aggregateValues', 'POST', params);

    this.projects.locations.importJobs = {};
    this.projects.locations.importJobs.create = (params) => this._makeRequest('v1/{+parent}/importJobs', 'POST', params);
    this.projects.locations.importJobs.list = (params) => this._makeRequest('v1/{+parent}/importJobs', 'GET', params);
    this.projects.locations.importJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.importJobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.importJobs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.importJobs.validate = (params) => this._makeRequest('v1/{+name}:validate', 'POST', params);
    this.projects.locations.importJobs.run = (params) => this._makeRequest('v1/{+name}:run', 'POST', params);

    this.projects.locations.importJobs.importDataFiles = {};
    this.projects.locations.importJobs.importDataFiles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.importJobs.importDataFiles.list = (params) => this._makeRequest('v1/{+parent}/importDataFiles', 'GET', params);
    this.projects.locations.importJobs.importDataFiles.create = (params) => this._makeRequest('v1/{+parent}/importDataFiles', 'POST', params);
    this.projects.locations.importJobs.importDataFiles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.groups = {};
    this.projects.locations.groups.list = (params) => this._makeRequest('v1/{+parent}/groups', 'GET', params);
    this.projects.locations.groups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.groups.create = (params) => this._makeRequest('v1/{+parent}/groups', 'POST', params);
    this.projects.locations.groups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.groups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.groups.addAssets = (params) => this._makeRequest('v1/{+group}:addAssets', 'POST', params);
    this.projects.locations.groups.removeAssets = (params) => this._makeRequest('v1/{+group}:removeAssets', 'POST', params);

    this.projects.locations.sources = {};
    this.projects.locations.sources.list = (params) => this._makeRequest('v1/{+parent}/sources', 'GET', params);
    this.projects.locations.sources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.sources.create = (params) => this._makeRequest('v1/{+parent}/sources', 'POST', params);
    this.projects.locations.sources.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.sources.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.sources.errorFrames = {};
    this.projects.locations.sources.errorFrames.list = (params) => this._makeRequest('v1/{+parent}/errorFrames', 'GET', params);
    this.projects.locations.sources.errorFrames.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.preferenceSets = {};
    this.projects.locations.preferenceSets.list = (params) => this._makeRequest('v1/{+parent}/preferenceSets', 'GET', params);
    this.projects.locations.preferenceSets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.preferenceSets.create = (params) => this._makeRequest('v1/{+parent}/preferenceSets', 'POST', params);
    this.projects.locations.preferenceSets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.preferenceSets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.reportConfigs = {};
    this.projects.locations.reportConfigs.create = (params) => this._makeRequest('v1/{+parent}/reportConfigs', 'POST', params);
    this.projects.locations.reportConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.reportConfigs.list = (params) => this._makeRequest('v1/{+parent}/reportConfigs', 'GET', params);
    this.projects.locations.reportConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.reportConfigs.reports = {};
    this.projects.locations.reportConfigs.reports.create = (params) => this._makeRequest('v1/{+parent}/reports', 'POST', params);
    this.projects.locations.reportConfigs.reports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.reportConfigs.reports.list = (params) => this._makeRequest('v1/{+parent}/reports', 'GET', params);
    this.projects.locations.reportConfigs.reports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.discoveryClients = {};
    this.projects.locations.discoveryClients.create = (params) => this._makeRequest('v1/{+parent}/discoveryClients', 'POST', params);
    this.projects.locations.discoveryClients.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.discoveryClients.list = (params) => this._makeRequest('v1/{+parent}/discoveryClients', 'GET', params);
    this.projects.locations.discoveryClients.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.discoveryClients.sendHeartbeat = (params) => this._makeRequest('v1/{+name}:sendHeartbeat', 'POST', params);
    this.projects.locations.discoveryClients.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.relations = {};
    this.projects.locations.relations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.relations.list = (params) => this._makeRequest('v1/{+parent}/relations', 'GET', params);
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
