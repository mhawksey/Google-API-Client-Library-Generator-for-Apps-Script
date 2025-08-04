
/**
 * Google Apps Script client library for the Cloud Translation API
 * Documentation URL: https://cloud.google.com/translate/docs/quickstarts
 * @class
 */
class Translate {
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
    this._rootUrl = 'https://translation.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};
    this.projects.translateText = (params) => this._makeRequest('v3/{+parent}:translateText', 'POST', params);
    this.projects.romanizeText = (params) => this._makeRequest('v3/{+parent}:romanizeText', 'POST', params);
    this.projects.detectLanguage = (params) => this._makeRequest('v3/{+parent}:detectLanguage', 'POST', params);
    this.projects.getSupportedLanguages = (params) => this._makeRequest('v3/{+parent}/supportedLanguages', 'GET', params);

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v3/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.translateText = (params) => this._makeRequest('v3/{+parent}:translateText', 'POST', params);
    this.projects.locations.romanizeText = (params) => this._makeRequest('v3/{+parent}:romanizeText', 'POST', params);
    this.projects.locations.detectLanguage = (params) => this._makeRequest('v3/{+parent}:detectLanguage', 'POST', params);
    this.projects.locations.getSupportedLanguages = (params) => this._makeRequest('v3/{+parent}/supportedLanguages', 'GET', params);
    this.projects.locations.translateDocument = (params) => this._makeRequest('v3/{+parent}:translateDocument', 'POST', params);
    this.projects.locations.batchTranslateText = (params) => this._makeRequest('v3/{+parent}:batchTranslateText', 'POST', params);
    this.projects.locations.batchTranslateDocument = (params) => this._makeRequest('v3/{+parent}:batchTranslateDocument', 'POST', params);
    this.projects.locations.adaptiveMtTranslate = (params) => this._makeRequest('v3/{+parent}:adaptiveMtTranslate', 'POST', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v3/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v3/{+name}:cancel', 'POST', params);
    this.projects.locations.operations.wait = (params) => this._makeRequest('v3/{+name}:wait', 'POST', params);

    this.projects.locations.glossaries = {};
    this.projects.locations.glossaries.create = (params) => this._makeRequest('v3/{+parent}/glossaries', 'POST', params);
    this.projects.locations.glossaries.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.glossaries.list = (params) => this._makeRequest('v3/{+parent}/glossaries', 'GET', params);
    this.projects.locations.glossaries.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.glossaries.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.glossaries.glossaryEntries = {};
    this.projects.locations.glossaries.glossaryEntries.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.glossaries.glossaryEntries.list = (params) => this._makeRequest('v3/{+parent}/glossaryEntries', 'GET', params);
    this.projects.locations.glossaries.glossaryEntries.create = (params) => this._makeRequest('v3/{+parent}/glossaryEntries', 'POST', params);
    this.projects.locations.glossaries.glossaryEntries.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);
    this.projects.locations.glossaries.glossaryEntries.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.datasets = {};
    this.projects.locations.datasets.create = (params) => this._makeRequest('v3/{+parent}/datasets', 'POST', params);
    this.projects.locations.datasets.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.datasets.list = (params) => this._makeRequest('v3/{+parent}/datasets', 'GET', params);
    this.projects.locations.datasets.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.datasets.importData = (params) => this._makeRequest('v3/{+dataset}:importData', 'POST', params);
    this.projects.locations.datasets.exportData = (params) => this._makeRequest('v3/{+dataset}:exportData', 'POST', params);

    this.projects.locations.datasets.examples = {};
    this.projects.locations.datasets.examples.list = (params) => this._makeRequest('v3/{+parent}/examples', 'GET', params);

    this.projects.locations.adaptiveMtDatasets = {};
    this.projects.locations.adaptiveMtDatasets.create = (params) => this._makeRequest('v3/{+parent}/adaptiveMtDatasets', 'POST', params);
    this.projects.locations.adaptiveMtDatasets.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.adaptiveMtDatasets.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.adaptiveMtDatasets.list = (params) => this._makeRequest('v3/{+parent}/adaptiveMtDatasets', 'GET', params);
    this.projects.locations.adaptiveMtDatasets.importAdaptiveMtFile = (params) => this._makeRequest('v3/{+parent}:importAdaptiveMtFile', 'POST', params);

    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles = {};
    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.list = (params) => this._makeRequest('v3/{+parent}/adaptiveMtFiles', 'GET', params);

    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences = {};
    this.projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences.list = (params) => this._makeRequest('v3/{+parent}/adaptiveMtSentences', 'GET', params);

    this.projects.locations.adaptiveMtDatasets.adaptiveMtSentences = {};
    this.projects.locations.adaptiveMtDatasets.adaptiveMtSentences.list = (params) => this._makeRequest('v3/{+parent}/adaptiveMtSentences', 'GET', params);

    this.projects.locations.models = {};
    this.projects.locations.models.create = (params) => this._makeRequest('v3/{+parent}/models', 'POST', params);
    this.projects.locations.models.list = (params) => this._makeRequest('v3/{+parent}/models', 'GET', params);
    this.projects.locations.models.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);
    this.projects.locations.models.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);
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
