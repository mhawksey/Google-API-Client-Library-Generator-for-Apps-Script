
/**
 * Google Apps Script client library for the Policy Simulator API
 * Documentation URL: https://cloud.google.com/iam/docs/simulating-access
 * @class
 */
class Policysimulator {
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
    this._rootUrl = 'https://policysimulator.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.list = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.replays = {};

    this.projects.locations.replays.operations = {};
    this.projects.locations.replays.operations.list = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.replays.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.orgPolicyViolationsPreviews = {};

    this.projects.locations.orgPolicyViolationsPreviews.operations = {};
    this.projects.locations.orgPolicyViolationsPreviews.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.accessPolicySimulations = {};

    this.projects.locations.accessPolicySimulations.operations = {};
    this.projects.locations.accessPolicySimulations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.folders = {};

    this.folders.locations = {};

    this.folders.locations.replays = {};

    this.folders.locations.replays.operations = {};
    this.folders.locations.replays.operations.list = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.folders.locations.replays.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.folders.locations.orgPolicyViolationsPreviews = {};

    this.folders.locations.orgPolicyViolationsPreviews.operations = {};
    this.folders.locations.orgPolicyViolationsPreviews.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.folders.locations.accessPolicySimulations = {};

    this.folders.locations.accessPolicySimulations.operations = {};
    this.folders.locations.accessPolicySimulations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.replays = {};

    this.organizations.locations.replays.operations = {};
    this.organizations.locations.replays.operations.list = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.organizations.locations.replays.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.organizations.locations.orgPolicyViolationsPreviews = {};

    this.organizations.locations.orgPolicyViolationsPreviews.operations = {};
    this.organizations.locations.orgPolicyViolationsPreviews.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.organizations.locations.accessPolicySimulations = {};

    this.organizations.locations.accessPolicySimulations.operations = {};
    this.organizations.locations.accessPolicySimulations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
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
