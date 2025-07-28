
/**
 * Google Apps Script client library for the Security Posture API
 * Documentation URL: https://cloud.google.com/security-command-center
 * @class
 */
class Securityposture {
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
    this._rootUrl = 'https://securityposture.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.operations = {};
    this.organizations.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.organizations.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.organizations.locations.postures = {};
    this.organizations.locations.postures.list = (params) => this._makeRequest('v1/{+parent}/postures', 'GET', params);
    this.organizations.locations.postures.listRevisions = (params) => this._makeRequest('v1/{+name}:listRevisions', 'GET', params);
    this.organizations.locations.postures.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.postures.create = (params) => this._makeRequest('v1/{+parent}/postures', 'POST', params);
    this.organizations.locations.postures.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.locations.postures.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.organizations.locations.postures.extract = (params) => this._makeRequest('v1/{+parent}/postures:extract', 'POST', params);

    this.organizations.locations.postureDeployments = {};
    this.organizations.locations.postureDeployments.list = (params) => this._makeRequest('v1/{+parent}/postureDeployments', 'GET', params);
    this.organizations.locations.postureDeployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.postureDeployments.create = (params) => this._makeRequest('v1/{+parent}/postureDeployments', 'POST', params);
    this.organizations.locations.postureDeployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.organizations.locations.postureDeployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.locations.postureTemplates = {};
    this.organizations.locations.postureTemplates.list = (params) => this._makeRequest('v1/{+parent}/postureTemplates', 'GET', params);
    this.organizations.locations.postureTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.organizations.locations.reports = {};
    this.organizations.locations.reports.list = (params) => this._makeRequest('v1/{+parent}/reports', 'GET', params);
    this.organizations.locations.reports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.organizations.locations.reports.createIaCValidationReport = (params) => this._makeRequest('v1/{+parent}/reports:createIaCValidationReport', 'POST', params);

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
