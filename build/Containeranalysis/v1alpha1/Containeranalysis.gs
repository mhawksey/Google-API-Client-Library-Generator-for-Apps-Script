
/**
 * Google Apps Script client library for the Container Analysis API
 * Documentation URL: https://cloud.google.com/container-analysis/api/reference/rest/
 * @class
 */
class Containeranalysis {
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
    this._rootUrl = 'https://containeranalysis.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.occurrences = {};
    this.projects.occurrences.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.occurrences.list = (params) => this._makeRequest('v1alpha1/{+parent}/occurrences', 'GET', params);
    this.projects.occurrences.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.projects.occurrences.create = (params) => this._makeRequest('v1alpha1/{+parent}/occurrences', 'POST', params);
    this.projects.occurrences.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.projects.occurrences.getNotes = (params) => this._makeRequest('v1alpha1/{+name}/notes', 'GET', params);
    this.projects.occurrences.getVulnerabilitySummary = (params) => this._makeRequest('v1alpha1/{+parent}/occurrences:vulnerabilitySummary', 'GET', params);
    this.projects.occurrences.setIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.occurrences.getIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.occurrences.testIamPermissions = (params) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.notes = {};
    this.projects.notes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.notes.list = (params) => this._makeRequest('v1alpha1/{+parent}/notes', 'GET', params);
    this.projects.notes.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.projects.notes.create = (params) => this._makeRequest('v1alpha1/{+parent}/notes', 'POST', params);
    this.projects.notes.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.projects.notes.setIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.notes.getIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'POST', params);
    this.projects.notes.testIamPermissions = (params) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.notes.occurrences = {};
    this.projects.notes.occurrences.list = (params) => this._makeRequest('v1alpha1/{+name}/occurrences', 'GET', params);

    this.projects.operations = {};
    this.projects.operations.create = (params) => this._makeRequest('v1alpha1/{+parent}/operations', 'POST', params);
    this.projects.operations.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    this.projects.scanConfigs = {};
    this.projects.scanConfigs.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.projects.scanConfigs.list = (params) => this._makeRequest('v1alpha1/{+parent}/scanConfigs', 'GET', params);
    this.projects.scanConfigs.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    this.providers = {};

    this.providers.notes = {};
    this.providers.notes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);
    this.providers.notes.list = (params) => this._makeRequest('v1alpha1/{+name}/notes', 'GET', params);
    this.providers.notes.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
    this.providers.notes.create = (params) => this._makeRequest('v1alpha1/{+name}/notes', 'POST', params);
    this.providers.notes.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);
    this.providers.notes.setIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:setIamPolicy', 'POST', params);
    this.providers.notes.getIamPolicy = (params) => this._makeRequest('v1alpha1/{+resource}:getIamPolicy', 'POST', params);
    this.providers.notes.testIamPermissions = (params) => this._makeRequest('v1alpha1/{+resource}:testIamPermissions', 'POST', params);

    this.providers.notes.occurrences = {};
    this.providers.notes.occurrences.list = (params) => this._makeRequest('v1alpha1/{+name}/occurrences', 'GET', params);
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
