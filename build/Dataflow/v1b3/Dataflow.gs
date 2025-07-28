
/**
 * Google Apps Script client library for the Dataflow API
 * Documentation URL: https://cloud.google.com/dataflow
 * @class
 */
class Dataflow {
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
    this._rootUrl = 'https://dataflow.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};
    this.projects.deleteSnapshots = (params) => this._makeRequest('v1b3/projects/{projectId}/snapshots', 'DELETE', params);
    this.projects.workerMessages = (params) => this._makeRequest('v1b3/projects/{projectId}/WorkerMessages', 'POST', params);

    this.projects.snapshots = {};
    this.projects.snapshots.get = (params) => this._makeRequest('v1b3/projects/{projectId}/snapshots/{snapshotId}', 'GET', params);
    this.projects.snapshots.list = (params) => this._makeRequest('v1b3/projects/{projectId}/snapshots', 'GET', params);

    this.projects.jobs = {};
    this.projects.jobs.create = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs', 'POST', params);
    this.projects.jobs.get = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}', 'GET', params);
    this.projects.jobs.update = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}', 'PUT', params);
    this.projects.jobs.list = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs', 'GET', params);
    this.projects.jobs.aggregated = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs:aggregated', 'GET', params);
    this.projects.jobs.snapshot = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}:snapshot', 'POST', params);
    this.projects.jobs.getMetrics = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/metrics', 'GET', params);

    this.projects.jobs.debug = {};
    this.projects.jobs.debug.getConfig = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig', 'POST', params);
    this.projects.jobs.debug.sendCapture = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture', 'POST', params);

    this.projects.jobs.messages = {};
    this.projects.jobs.messages.list = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/messages', 'GET', params);

    this.projects.jobs.workItems = {};
    this.projects.jobs.workItems.reportStatus = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus', 'POST', params);
    this.projects.jobs.workItems.lease = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease', 'POST', params);

    this.projects.templates = {};
    this.projects.templates.create = (params) => this._makeRequest('v1b3/projects/{projectId}/templates', 'POST', params);
    this.projects.templates.launch = (params) => this._makeRequest('v1b3/projects/{projectId}/templates:launch', 'POST', params);
    this.projects.templates.get = (params) => this._makeRequest('v1b3/projects/{projectId}/templates:get', 'GET', params);

    this.projects.locations = {};
    this.projects.locations.workerMessages = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/WorkerMessages', 'POST', params);

    this.projects.locations.snapshots = {};
    this.projects.locations.snapshots.get = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}', 'GET', params);
    this.projects.locations.snapshots.delete = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}', 'DELETE', params);
    this.projects.locations.snapshots.list = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/snapshots', 'GET', params);

    this.projects.locations.jobs = {};
    this.projects.locations.jobs.create = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs', 'POST', params);
    this.projects.locations.jobs.get = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}', 'GET', params);
    this.projects.locations.jobs.update = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}', 'PUT', params);
    this.projects.locations.jobs.list = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs', 'GET', params);
    this.projects.locations.jobs.snapshot = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}:snapshot', 'POST', params);
    this.projects.locations.jobs.getMetrics = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics', 'GET', params);
    this.projects.locations.jobs.getExecutionDetails = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/executionDetails', 'GET', params);

    this.projects.locations.jobs.debug = {};
    this.projects.locations.jobs.debug.getConfig = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig', 'POST', params);
    this.projects.locations.jobs.debug.sendCapture = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture', 'POST', params);
    this.projects.locations.jobs.debug.getWorkerStacktraces = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getWorkerStacktraces', 'POST', params);

    this.projects.locations.jobs.snapshots = {};
    this.projects.locations.jobs.snapshots.list = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/snapshots', 'GET', params);

    this.projects.locations.jobs.messages = {};
    this.projects.locations.jobs.messages.list = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages', 'GET', params);

    this.projects.locations.jobs.stages = {};
    this.projects.locations.jobs.stages.getExecutionDetails = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/stages/{stageId}/executionDetails', 'GET', params);

    this.projects.locations.jobs.workItems = {};
    this.projects.locations.jobs.workItems.reportStatus = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus', 'POST', params);
    this.projects.locations.jobs.workItems.lease = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease', 'POST', params);

    this.projects.locations.templates = {};
    this.projects.locations.templates.create = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/templates', 'POST', params);
    this.projects.locations.templates.launch = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/templates:launch', 'POST', params);
    this.projects.locations.templates.get = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/templates:get', 'GET', params);

    this.projects.locations.flexTemplates = {};
    this.projects.locations.flexTemplates.launch = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/flexTemplates:launch', 'POST', params);
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
