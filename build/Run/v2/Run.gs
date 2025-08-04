
/**
 * Google Apps Script client library for the Cloud Run Admin API
 * Documentation URL: https://cloud.google.com/run/
 * @class
 */
class Run {
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
    this._rootUrl = 'https://run.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.exportProjectMetadata = (params) => this._makeRequest('v2/{+name}:exportProjectMetadata', 'GET', params);
    this.projects.locations.exportMetadata = (params) => this._makeRequest('v2/{+name}:exportMetadata', 'GET', params);
    this.projects.locations.exportImageMetadata = (params) => this._makeRequest('v2/{+name}:exportImageMetadata', 'GET', params);
    this.projects.locations.exportImage = (params) => this._makeRequest('v2/{+name}:exportImage', 'POST', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.operations.wait = (params) => this._makeRequest('v2/{+name}:wait', 'POST', params);

    this.projects.locations.builds = {};
    this.projects.locations.builds.submit = (params) => this._makeRequest('v2/{+parent}/builds:submit', 'POST', params);

    this.projects.locations.jobs = {};
    this.projects.locations.jobs.create = (params) => this._makeRequest('v2/{+parent}/jobs', 'POST', params);
    this.projects.locations.jobs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.jobs.list = (params) => this._makeRequest('v2/{+parent}/jobs', 'GET', params);
    this.projects.locations.jobs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.jobs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.jobs.run = (params) => this._makeRequest('v2/{+name}:run', 'POST', params);
    this.projects.locations.jobs.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.jobs.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.jobs.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.jobs.executions = {};
    this.projects.locations.jobs.executions.exportStatus = (params) => this._makeRequest('v2/{+name}/{+operationId}:exportStatus', 'GET', params);
    this.projects.locations.jobs.executions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.jobs.executions.list = (params) => this._makeRequest('v2/{+parent}/executions', 'GET', params);
    this.projects.locations.jobs.executions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.jobs.executions.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.projects.locations.jobs.executions.tasks = {};
    this.projects.locations.jobs.executions.tasks.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.jobs.executions.tasks.list = (params) => this._makeRequest('v2/{+parent}/tasks', 'GET', params);

    this.projects.locations.services = {};
    this.projects.locations.services.create = (params) => this._makeRequest('v2/{+parent}/services', 'POST', params);
    this.projects.locations.services.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.services.list = (params) => this._makeRequest('v2/{+parent}/services', 'GET', params);
    this.projects.locations.services.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.services.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.services.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.services.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.services.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.services.revisions = {};
    this.projects.locations.services.revisions.exportStatus = (params) => this._makeRequest('v2/{+name}/{+operationId}:exportStatus', 'GET', params);
    this.projects.locations.services.revisions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.services.revisions.list = (params) => this._makeRequest('v2/{+parent}/revisions', 'GET', params);
    this.projects.locations.services.revisions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.workerPools = {};
    this.projects.locations.workerPools.create = (params) => this._makeRequest('v2/{+parent}/workerPools', 'POST', params);
    this.projects.locations.workerPools.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.workerPools.list = (params) => this._makeRequest('v2/{+parent}/workerPools', 'GET', params);
    this.projects.locations.workerPools.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);
    this.projects.locations.workerPools.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.locations.workerPools.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.workerPools.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.workerPools.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.workerPools.revisions = {};
    this.projects.locations.workerPools.revisions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.locations.workerPools.revisions.list = (params) => this._makeRequest('v2/{+parent}/revisions', 'GET', params);
    this.projects.locations.workerPools.revisions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
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
