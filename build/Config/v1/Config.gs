
/**
 * Google Apps Script client library for the Infrastructure Manager API
 * Documentation URL: https://cloud.google.com/infrastructure-manager/docs
 * @class
 */
class Config {
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
    this._rootUrl = 'https://config.googleapis.com/';
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

    this.projects.locations.deployments = {};
    this.projects.locations.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);
    this.projects.locations.deployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deployments.create = (params) => this._makeRequest('v1/{+parent}/deployments', 'POST', params);
    this.projects.locations.deployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.deployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.deployments.exportState = (params) => this._makeRequest('v1/{+parent}:exportState', 'POST', params);
    this.projects.locations.deployments.importState = (params) => this._makeRequest('v1/{+parent}:importState', 'POST', params);
    this.projects.locations.deployments.deleteState = (params) => this._makeRequest('v1/{+name}:deleteState', 'POST', params);
    this.projects.locations.deployments.lock = (params) => this._makeRequest('v1/{+name}:lock', 'POST', params);
    this.projects.locations.deployments.unlock = (params) => this._makeRequest('v1/{+name}:unlock', 'POST', params);
    this.projects.locations.deployments.exportLock = (params) => this._makeRequest('v1/{+name}:exportLock', 'GET', params);
    this.projects.locations.deployments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.deployments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.deployments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.deployments.revisions = {};
    this.projects.locations.deployments.revisions.list = (params) => this._makeRequest('v1/{+parent}/revisions', 'GET', params);
    this.projects.locations.deployments.revisions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deployments.revisions.exportState = (params) => this._makeRequest('v1/{+parent}:exportState', 'POST', params);

    this.projects.locations.deployments.revisions.resources = {};
    this.projects.locations.deployments.revisions.resources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deployments.revisions.resources.list = (params) => this._makeRequest('v1/{+parent}/resources', 'GET', params);

    this.projects.locations.previews = {};
    this.projects.locations.previews.create = (params) => this._makeRequest('v1/{+parent}/previews', 'POST', params);
    this.projects.locations.previews.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.previews.list = (params) => this._makeRequest('v1/{+parent}/previews', 'GET', params);
    this.projects.locations.previews.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.previews.export = (params) => this._makeRequest('v1/{+parent}:export', 'POST', params);

    this.projects.locations.previews.resourceChanges = {};
    this.projects.locations.previews.resourceChanges.list = (params) => this._makeRequest('v1/{+parent}/resourceChanges', 'GET', params);
    this.projects.locations.previews.resourceChanges.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.previews.resourceDrifts = {};
    this.projects.locations.previews.resourceDrifts.list = (params) => this._makeRequest('v1/{+parent}/resourceDrifts', 'GET', params);
    this.projects.locations.previews.resourceDrifts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.terraformVersions = {};
    this.projects.locations.terraformVersions.list = (params) => this._makeRequest('v1/{+parent}/terraformVersions', 'GET', params);
    this.projects.locations.terraformVersions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
