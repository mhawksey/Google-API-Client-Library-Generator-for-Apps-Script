
/**
 * Google Apps Script client library for the AI Platform Training & Prediction API
 * Documentation URL: https://cloud.google.com/ml/
 * @class
 */
class Ml {
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
    this._rootUrl = 'https://ml.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};
    this.projects.predict = (params) => this._makeRequest('v1/{+name}:predict', 'POST', params);
    this.projects.explain = (params) => this._makeRequest('v1/{+name}:explain', 'POST', params);
    this.projects.getConfig = (params) => this._makeRequest('v1/{+name}:getConfig', 'GET', params);

    this.projects.jobs = {};
    this.projects.jobs.create = (params) => this._makeRequest('v1/{+parent}/jobs', 'POST', params);
    this.projects.jobs.list = (params) => this._makeRequest('v1/{+parent}/jobs', 'GET', params);
    this.projects.jobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.jobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.jobs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.jobs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.jobs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.jobs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations = {};
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.list = (params) => this._makeRequest('v1/{+parent}/locations', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.studies = {};
    this.projects.locations.studies.create = (params) => this._makeRequest('v1/{+parent}/studies', 'POST', params);
    this.projects.locations.studies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.studies.list = (params) => this._makeRequest('v1/{+parent}/studies', 'GET', params);
    this.projects.locations.studies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.studies.trials = {};
    this.projects.locations.studies.trials.suggest = (params) => this._makeRequest('v1/{+parent}/trials:suggest', 'POST', params);
    this.projects.locations.studies.trials.create = (params) => this._makeRequest('v1/{+parent}/trials', 'POST', params);
    this.projects.locations.studies.trials.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.studies.trials.list = (params) => this._makeRequest('v1/{+parent}/trials', 'GET', params);
    this.projects.locations.studies.trials.addMeasurement = (params) => this._makeRequest('v1/{+name}:addMeasurement', 'POST', params);
    this.projects.locations.studies.trials.complete = (params) => this._makeRequest('v1/{+name}:complete', 'POST', params);
    this.projects.locations.studies.trials.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.studies.trials.checkEarlyStoppingState = (params) => this._makeRequest('v1/{+name}:checkEarlyStoppingState', 'POST', params);
    this.projects.locations.studies.trials.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);
    this.projects.locations.studies.trials.listOptimalTrials = (params) => this._makeRequest('v1/{+parent}/trials:listOptimalTrials', 'POST', params);

    this.projects.operations = {};
    this.projects.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.models = {};
    this.projects.models.create = (params) => this._makeRequest('v1/{+parent}/models', 'POST', params);
    this.projects.models.list = (params) => this._makeRequest('v1/{+parent}/models', 'GET', params);
    this.projects.models.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.models.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.models.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.models.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.models.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.models.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.models.versions = {};
    this.projects.models.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);
    this.projects.models.versions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.models.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);
    this.projects.models.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.models.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.models.versions.setDefault = (params) => this._makeRequest('v1/{+name}:setDefault', 'POST', params);
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
