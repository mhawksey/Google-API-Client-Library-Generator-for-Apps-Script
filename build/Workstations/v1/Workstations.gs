
/**
 * Google Apps Script client library for the Cloud Workstations API
 * Documentation URL: https://cloud.google.com/workstations
 * @class
 */
class Workstations {
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
    this._rootUrl = 'https://workstations.googleapis.com/';
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

    this.projects.locations.workstationClusters = {};
    this.projects.locations.workstationClusters.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.workstationClusters.list = (params) => this._makeRequest('v1/{+parent}/workstationClusters', 'GET', params);
    this.projects.locations.workstationClusters.create = (params) => this._makeRequest('v1/{+parent}/workstationClusters', 'POST', params);
    this.projects.locations.workstationClusters.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.workstationClusters.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.workstationClusters.workstationConfigs = {};
    this.projects.locations.workstationClusters.workstationConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.workstationClusters.workstationConfigs.list = (params) => this._makeRequest('v1/{+parent}/workstationConfigs', 'GET', params);
    this.projects.locations.workstationClusters.workstationConfigs.listUsable = (params) => this._makeRequest('v1/{+parent}/workstationConfigs:listUsable', 'GET', params);
    this.projects.locations.workstationClusters.workstationConfigs.create = (params) => this._makeRequest('v1/{+parent}/workstationConfigs', 'POST', params);
    this.projects.locations.workstationClusters.workstationConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.workstationClusters.workstationConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.workstationClusters.workstationConfigs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.workstationClusters.workstationConfigs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.workstationClusters.workstationConfigs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.workstationClusters.workstationConfigs.workstations = {};
    this.projects.locations.workstationClusters.workstationConfigs.workstations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.workstationClusters.workstationConfigs.workstations.list = (params) => this._makeRequest('v1/{+parent}/workstations', 'GET', params);
    this.projects.locations.workstationClusters.workstationConfigs.workstations.listUsable = (params) => this._makeRequest('v1/{+parent}/workstations:listUsable', 'GET', params);
    this.projects.locations.workstationClusters.workstationConfigs.workstations.create = (params) => this._makeRequest('v1/{+parent}/workstations', 'POST', params);
    this.projects.locations.workstationClusters.workstationConfigs.workstations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.workstationClusters.workstationConfigs.workstations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.workstationClusters.workstationConfigs.workstations.start = (params) => this._makeRequest('v1/{+name}:start', 'POST', params);
    this.projects.locations.workstationClusters.workstationConfigs.workstations.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);
    this.projects.locations.workstationClusters.workstationConfigs.workstations.generateAccessToken = (params) => this._makeRequest('v1/{+workstation}:generateAccessToken', 'POST', params);
    this.projects.locations.workstationClusters.workstationConfigs.workstations.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.workstationClusters.workstationConfigs.workstations.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.workstationClusters.workstationConfigs.workstations.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
