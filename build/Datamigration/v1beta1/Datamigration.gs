
/**
 * Google Apps Script client library for the Database Migration API
 * Documentation URL: https://cloud.google.com/database-migration/
 * @class
 */
class Datamigration {
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
    this._rootUrl = 'https://datamigration.googleapis.com/';
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

    this.projects.locations.migrationJobs = {};
    this.projects.locations.migrationJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/migrationJobs', 'GET', params);
    this.projects.locations.migrationJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.migrationJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/migrationJobs', 'POST', params);
    this.projects.locations.migrationJobs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.migrationJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.migrationJobs.start = (params) => this._makeRequest('v1beta1/{+name}:start', 'POST', params);
    this.projects.locations.migrationJobs.stop = (params) => this._makeRequest('v1beta1/{+name}:stop', 'POST', params);
    this.projects.locations.migrationJobs.resume = (params) => this._makeRequest('v1beta1/{+name}:resume', 'POST', params);
    this.projects.locations.migrationJobs.promote = (params) => this._makeRequest('v1beta1/{+name}:promote', 'POST', params);
    this.projects.locations.migrationJobs.verify = (params) => this._makeRequest('v1beta1/{+name}:verify', 'POST', params);
    this.projects.locations.migrationJobs.restart = (params) => this._makeRequest('v1beta1/{+name}:restart', 'POST', params);
    this.projects.locations.migrationJobs.generateSshScript = (params) => this._makeRequest('v1beta1/{+migrationJob}:generateSshScript', 'POST', params);
    this.projects.locations.migrationJobs.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.migrationJobs.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.migrationJobs.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.connectionProfiles = {};
    this.projects.locations.connectionProfiles.list = (params) => this._makeRequest('v1beta1/{+parent}/connectionProfiles', 'GET', params);
    this.projects.locations.connectionProfiles.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.connectionProfiles.create = (params) => this._makeRequest('v1beta1/{+parent}/connectionProfiles', 'POST', params);
    this.projects.locations.connectionProfiles.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.connectionProfiles.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.connectionProfiles.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.connectionProfiles.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.connectionProfiles.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
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
