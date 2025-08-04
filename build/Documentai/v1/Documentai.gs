
/**
 * Google Apps Script client library for the Cloud Document AI API
 * Documentation URL: https://cloud.google.com/document-ai/docs/
 * @class
 */
class Documentai {
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
    this._rootUrl = 'https://documentai.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.operations = {};
    this.projects.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations = {};
    this.projects.locations.fetchProcessorTypes = (params) => this._makeRequest('v1/{+parent}:fetchProcessorTypes', 'GET', params);
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.processors = {};
    this.projects.locations.processors.process = (params) => this._makeRequest('v1/{+name}:process', 'POST', params);
    this.projects.locations.processors.batchProcess = (params) => this._makeRequest('v1/{+name}:batchProcess', 'POST', params);
    this.projects.locations.processors.list = (params) => this._makeRequest('v1/{+parent}/processors', 'GET', params);
    this.projects.locations.processors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.processors.create = (params) => this._makeRequest('v1/{+parent}/processors', 'POST', params);
    this.projects.locations.processors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.processors.enable = (params) => this._makeRequest('v1/{+name}:enable', 'POST', params);
    this.projects.locations.processors.disable = (params) => this._makeRequest('v1/{+name}:disable', 'POST', params);
    this.projects.locations.processors.setDefaultProcessorVersion = (params) => this._makeRequest('v1/{+processor}:setDefaultProcessorVersion', 'POST', params);

    this.projects.locations.processors.processorVersions = {};
    this.projects.locations.processors.processorVersions.process = (params) => this._makeRequest('v1/{+name}:process', 'POST', params);
    this.projects.locations.processors.processorVersions.batchProcess = (params) => this._makeRequest('v1/{+name}:batchProcess', 'POST', params);
    this.projects.locations.processors.processorVersions.train = (params) => this._makeRequest('v1/{+parent}/processorVersions:train', 'POST', params);
    this.projects.locations.processors.processorVersions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.processors.processorVersions.list = (params) => this._makeRequest('v1/{+parent}/processorVersions', 'GET', params);
    this.projects.locations.processors.processorVersions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.processors.processorVersions.deploy = (params) => this._makeRequest('v1/{+name}:deploy', 'POST', params);
    this.projects.locations.processors.processorVersions.undeploy = (params) => this._makeRequest('v1/{+name}:undeploy', 'POST', params);
    this.projects.locations.processors.processorVersions.evaluateProcessorVersion = (params) => this._makeRequest('v1/{+processorVersion}:evaluateProcessorVersion', 'POST', params);

    this.projects.locations.processors.processorVersions.evaluations = {};
    this.projects.locations.processors.processorVersions.evaluations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.processors.processorVersions.evaluations.list = (params) => this._makeRequest('v1/{+parent}/evaluations', 'GET', params);

    this.projects.locations.processors.humanReviewConfig = {};
    this.projects.locations.processors.humanReviewConfig.reviewDocument = (params) => this._makeRequest('v1/{+humanReviewConfig}:reviewDocument', 'POST', params);

    this.projects.locations.processorTypes = {};
    this.projects.locations.processorTypes.list = (params) => this._makeRequest('v1/{+parent}/processorTypes', 'GET', params);
    this.projects.locations.processorTypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.operations = {};
    this.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
