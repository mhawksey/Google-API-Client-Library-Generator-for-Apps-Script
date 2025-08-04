
/**
 * Google Apps Script client library for the Data Labeling API
 * Documentation URL: https://cloud.google.com/data-labeling/docs/
 * @class
 */
class Datalabeling {
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
    this._rootUrl = 'https://datalabeling.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.operations = {};
    this.projects.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);
    this.projects.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'GET', params);

    this.projects.datasets = {};
    this.projects.datasets.create = (params) => this._makeRequest('v1beta1/{+parent}/datasets', 'POST', params);
    this.projects.datasets.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.datasets.list = (params) => this._makeRequest('v1beta1/{+parent}/datasets', 'GET', params);
    this.projects.datasets.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.datasets.importData = (params) => this._makeRequest('v1beta1/{+name}:importData', 'POST', params);
    this.projects.datasets.exportData = (params) => this._makeRequest('v1beta1/{+name}:exportData', 'POST', params);

    this.projects.datasets.dataItems = {};
    this.projects.datasets.dataItems.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.datasets.dataItems.list = (params) => this._makeRequest('v1beta1/{+parent}/dataItems', 'GET', params);

    this.projects.datasets.annotatedDatasets = {};
    this.projects.datasets.annotatedDatasets.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.datasets.annotatedDatasets.list = (params) => this._makeRequest('v1beta1/{+parent}/annotatedDatasets', 'GET', params);
    this.projects.datasets.annotatedDatasets.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.datasets.annotatedDatasets.dataItems = {};
    this.projects.datasets.annotatedDatasets.dataItems.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.datasets.annotatedDatasets.dataItems.list = (params) => this._makeRequest('v1beta1/{+parent}/dataItems', 'GET', params);

    this.projects.datasets.annotatedDatasets.examples = {};
    this.projects.datasets.annotatedDatasets.examples.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.datasets.annotatedDatasets.examples.list = (params) => this._makeRequest('v1beta1/{+parent}/examples', 'GET', params);

    this.projects.datasets.annotatedDatasets.feedbackThreads = {};
    this.projects.datasets.annotatedDatasets.feedbackThreads.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.datasets.annotatedDatasets.feedbackThreads.list = (params) => this._makeRequest('v1beta1/{+parent}/feedbackThreads', 'GET', params);
    this.projects.datasets.annotatedDatasets.feedbackThreads.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages = {};
    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.create = (params) => this._makeRequest('v1beta1/{+parent}/feedbackMessages', 'POST', params);
    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.list = (params) => this._makeRequest('v1beta1/{+parent}/feedbackMessages', 'GET', params);
    this.projects.datasets.annotatedDatasets.feedbackThreads.feedbackMessages.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.datasets.image = {};
    this.projects.datasets.image.label = (params) => this._makeRequest('v1beta1/{+parent}/image:label', 'POST', params);

    this.projects.datasets.video = {};
    this.projects.datasets.video.label = (params) => this._makeRequest('v1beta1/{+parent}/video:label', 'POST', params);

    this.projects.datasets.text = {};
    this.projects.datasets.text.label = (params) => this._makeRequest('v1beta1/{+parent}/text:label', 'POST', params);

    this.projects.datasets.evaluations = {};
    this.projects.datasets.evaluations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.datasets.evaluations.exampleComparisons = {};
    this.projects.datasets.evaluations.exampleComparisons.search = (params) => this._makeRequest('v1beta1/{+parent}/exampleComparisons:search', 'POST', params);

    this.projects.annotationSpecSets = {};
    this.projects.annotationSpecSets.create = (params) => this._makeRequest('v1beta1/{+parent}/annotationSpecSets', 'POST', params);
    this.projects.annotationSpecSets.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.annotationSpecSets.list = (params) => this._makeRequest('v1beta1/{+parent}/annotationSpecSets', 'GET', params);
    this.projects.annotationSpecSets.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.instructions = {};
    this.projects.instructions.create = (params) => this._makeRequest('v1beta1/{+parent}/instructions', 'POST', params);
    this.projects.instructions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.instructions.list = (params) => this._makeRequest('v1beta1/{+parent}/instructions', 'GET', params);
    this.projects.instructions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.evaluations = {};
    this.projects.evaluations.search = (params) => this._makeRequest('v1beta1/{+parent}/evaluations:search', 'GET', params);

    this.projects.evaluationJobs = {};
    this.projects.evaluationJobs.create = (params) => this._makeRequest('v1beta1/{+parent}/evaluationJobs', 'POST', params);
    this.projects.evaluationJobs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.evaluationJobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.evaluationJobs.pause = (params) => this._makeRequest('v1beta1/{+name}:pause', 'POST', params);
    this.projects.evaluationJobs.resume = (params) => this._makeRequest('v1beta1/{+name}:resume', 'POST', params);
    this.projects.evaluationJobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.evaluationJobs.list = (params) => this._makeRequest('v1beta1/{+parent}/evaluationJobs', 'GET', params);
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
