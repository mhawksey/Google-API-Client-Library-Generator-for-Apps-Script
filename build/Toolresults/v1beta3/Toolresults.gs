
/**
 * Google Apps Script client library for the Cloud Tool Results API
 * Documentation URL: https://firebase.google.com/docs/test-lab/
 * @class
 */
class Toolresults {
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
    this._rootUrl = 'https://toolresults.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};
    this.projects.getSettings = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/settings', 'GET', params);
    this.projects.initializeSettings = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}:initializeSettings', 'POST', params);

    this.projects.histories = {};
    this.projects.histories.create = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories', 'POST', params);
    this.projects.histories.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}', 'GET', params);
    this.projects.histories.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories', 'GET', params);

    this.projects.histories.executions = {};
    this.projects.histories.executions.create = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions', 'POST', params);
    this.projects.histories.executions.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions', 'GET', params);
    this.projects.histories.executions.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}', 'GET', params);
    this.projects.histories.executions.patch = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}', 'PATCH', params);

    this.projects.histories.executions.steps = {};
    this.projects.histories.executions.steps.accessibilityClusters = (params) => this._makeRequest('toolresults/v1beta3/{+name}:accessibilityClusters', 'GET', params);
    this.projects.histories.executions.steps.create = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps', 'POST', params);
    this.projects.histories.executions.steps.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}', 'GET', params);
    this.projects.histories.executions.steps.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps', 'GET', params);
    this.projects.histories.executions.steps.patch = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}', 'PATCH', params);
    this.projects.histories.executions.steps.publishXunitXmlFiles = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}:publishXunitXmlFiles', 'POST', params);
    this.projects.histories.executions.steps.getPerfMetricsSummary = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary', 'GET', params);

    this.projects.histories.executions.steps.testCases = {};
    this.projects.histories.executions.steps.testCases.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases/{testCaseId}', 'GET', params);
    this.projects.histories.executions.steps.testCases.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/testCases', 'GET', params);

    this.projects.histories.executions.steps.thumbnails = {};
    this.projects.histories.executions.steps.thumbnails.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/thumbnails', 'GET', params);

    this.projects.histories.executions.steps.perfMetricsSummary = {};
    this.projects.histories.executions.steps.perfMetricsSummary.create = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfMetricsSummary', 'POST', params);

    this.projects.histories.executions.steps.perfSampleSeries = {};
    this.projects.histories.executions.steps.perfSampleSeries.create = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries', 'POST', params);
    this.projects.histories.executions.steps.perfSampleSeries.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}', 'GET', params);
    this.projects.histories.executions.steps.perfSampleSeries.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries', 'GET', params);

    this.projects.histories.executions.steps.perfSampleSeries.samples = {};
    this.projects.histories.executions.steps.perfSampleSeries.samples.batchCreate = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples:batchCreate', 'POST', params);
    this.projects.histories.executions.steps.perfSampleSeries.samples.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/steps/{stepId}/perfSampleSeries/{sampleSeriesId}/samples', 'GET', params);

    this.projects.histories.executions.clusters = {};
    this.projects.histories.executions.clusters.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters/{clusterId}', 'GET', params);
    this.projects.histories.executions.clusters.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/clusters', 'GET', params);

    this.projects.histories.executions.environments = {};
    this.projects.histories.executions.environments.get = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments/{environmentId}', 'GET', params);
    this.projects.histories.executions.environments.list = (params) => this._makeRequest('toolresults/v1beta3/projects/{projectId}/histories/{historyId}/executions/{executionId}/environments', 'GET', params);
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
