
/**
 * Google Apps Script client library for the Cloud Composer API
 * Documentation URL: https://cloud.google.com/composer/
 * @class
 */
class Composer {
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
    this._rootUrl = 'https://composer.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.environments = {};
    this.projects.locations.environments.create = (params) => this._makeRequest('v1beta1/{+parent}/environments', 'POST', params);
    this.projects.locations.environments.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.environments.list = (params) => this._makeRequest('v1beta1/{+parent}/environments', 'GET', params);
    this.projects.locations.environments.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.environments.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.environments.restartWebServer = (params) => this._makeRequest('v1beta1/{+name}:restartWebServer', 'POST', params);
    this.projects.locations.environments.checkUpgrade = (params) => this._makeRequest('v1beta1/{+environment}:checkUpgrade', 'POST', params);
    this.projects.locations.environments.executeAirflowCommand = (params) => this._makeRequest('v1beta1/{+environment}:executeAirflowCommand', 'POST', params);
    this.projects.locations.environments.stopAirflowCommand = (params) => this._makeRequest('v1beta1/{+environment}:stopAirflowCommand', 'POST', params);
    this.projects.locations.environments.pollAirflowCommand = (params) => this._makeRequest('v1beta1/{+environment}:pollAirflowCommand', 'POST', params);
    this.projects.locations.environments.saveSnapshot = (params) => this._makeRequest('v1beta1/{+environment}:saveSnapshot', 'POST', params);
    this.projects.locations.environments.loadSnapshot = (params) => this._makeRequest('v1beta1/{+environment}:loadSnapshot', 'POST', params);
    this.projects.locations.environments.databaseFailover = (params) => this._makeRequest('v1beta1/{+environment}:databaseFailover', 'POST', params);
    this.projects.locations.environments.fetchDatabaseProperties = (params) => this._makeRequest('v1beta1/{+environment}:fetchDatabaseProperties', 'GET', params);

    this.projects.locations.environments.workloads = {};
    this.projects.locations.environments.workloads.list = (params) => this._makeRequest('v1beta1/{+parent}/workloads', 'GET', params);

    this.projects.locations.environments.userWorkloadsSecrets = {};
    this.projects.locations.environments.userWorkloadsSecrets.create = (params) => this._makeRequest('v1beta1/{+parent}/userWorkloadsSecrets', 'POST', params);
    this.projects.locations.environments.userWorkloadsSecrets.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.environments.userWorkloadsSecrets.list = (params) => this._makeRequest('v1beta1/{+parent}/userWorkloadsSecrets', 'GET', params);
    this.projects.locations.environments.userWorkloadsSecrets.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);
    this.projects.locations.environments.userWorkloadsSecrets.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.environments.userWorkloadsConfigMaps = {};
    this.projects.locations.environments.userWorkloadsConfigMaps.create = (params) => this._makeRequest('v1beta1/{+parent}/userWorkloadsConfigMaps', 'POST', params);
    this.projects.locations.environments.userWorkloadsConfigMaps.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.environments.userWorkloadsConfigMaps.list = (params) => this._makeRequest('v1beta1/{+parent}/userWorkloadsConfigMaps', 'GET', params);
    this.projects.locations.environments.userWorkloadsConfigMaps.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);
    this.projects.locations.environments.userWorkloadsConfigMaps.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.imageVersions = {};
    this.projects.locations.imageVersions.list = (params) => this._makeRequest('v1beta1/{+parent}/imageVersions', 'GET', params);
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
