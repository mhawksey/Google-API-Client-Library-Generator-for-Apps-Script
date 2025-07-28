
/**
 * Google Apps Script client library for the Document AI Warehouse API
 * Documentation URL: https://cloud.google.com/document-warehouse
 * @class
 */
class Contentwarehouse {
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
    this._rootUrl = 'https://contentwarehouse.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};
    this.projects.setAcl = (params) => this._makeRequest('v1/{+resource}:setAcl', 'POST', params);
    this.projects.fetchAcl = (params) => this._makeRequest('v1/{+resource}:fetchAcl', 'POST', params);

    this.projects.locations = {};
    this.projects.locations.runPipeline = (params) => this._makeRequest('v1/{+name}:runPipeline', 'POST', params);
    this.projects.locations.getStatus = (params) => this._makeRequest('v1/{+location}:getStatus', 'GET', params);
    this.projects.locations.initialize = (params) => this._makeRequest('v1/{+location}:initialize', 'POST', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.documents = {};
    this.projects.locations.documents.delete = (params) => this._makeRequest('v1/{+name}:delete', 'POST', params);
    this.projects.locations.documents.search = (params) => this._makeRequest('v1/{+parent}/documents:search', 'POST', params);
    this.projects.locations.documents.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.documents.create = (params) => this._makeRequest('v1/{+parent}/documents', 'POST', params);
    this.projects.locations.documents.get = (params) => this._makeRequest('v1/{+name}:get', 'POST', params);
    this.projects.locations.documents.lock = (params) => this._makeRequest('v1/{+name}:lock', 'POST', params);
    this.projects.locations.documents.linkedSources = (params) => this._makeRequest('v1/{+parent}/linkedSources', 'POST', params);
    this.projects.locations.documents.fetchAcl = (params) => this._makeRequest('v1/{+resource}:fetchAcl', 'POST', params);
    this.projects.locations.documents.setAcl = (params) => this._makeRequest('v1/{+resource}:setAcl', 'POST', params);
    this.projects.locations.documents.linkedTargets = (params) => this._makeRequest('v1/{+parent}/linkedTargets', 'POST', params);

    this.projects.locations.documents.documentLinks = {};
    this.projects.locations.documents.documentLinks.delete = (params) => this._makeRequest('v1/{+name}:delete', 'POST', params);
    this.projects.locations.documents.documentLinks.create = (params) => this._makeRequest('v1/{+parent}/documentLinks', 'POST', params);

    this.projects.locations.documents.referenceId = {};
    this.projects.locations.documents.referenceId.delete = (params) => this._makeRequest('v1/{+name}:delete', 'POST', params);
    this.projects.locations.documents.referenceId.get = (params) => this._makeRequest('v1/{+name}:get', 'POST', params);
    this.projects.locations.documents.referenceId.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.ruleSets = {};
    this.projects.locations.ruleSets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.ruleSets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.ruleSets.create = (params) => this._makeRequest('v1/{+parent}/ruleSets', 'POST', params);
    this.projects.locations.ruleSets.list = (params) => this._makeRequest('v1/{+parent}/ruleSets', 'GET', params);
    this.projects.locations.ruleSets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.synonymSets = {};
    this.projects.locations.synonymSets.list = (params) => this._makeRequest('v1/{+parent}/synonymSets', 'GET', params);
    this.projects.locations.synonymSets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.synonymSets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.synonymSets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.synonymSets.create = (params) => this._makeRequest('v1/{+parent}/synonymSets', 'POST', params);

    this.projects.locations.documentSchemas = {};
    this.projects.locations.documentSchemas.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.documentSchemas.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.documentSchemas.list = (params) => this._makeRequest('v1/{+parent}/documentSchemas', 'GET', params);
    this.projects.locations.documentSchemas.create = (params) => this._makeRequest('v1/{+parent}/documentSchemas', 'POST', params);
    this.projects.locations.documentSchemas.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
