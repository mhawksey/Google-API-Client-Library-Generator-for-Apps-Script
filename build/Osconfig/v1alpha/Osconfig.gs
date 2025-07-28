
/**
 * Google Apps Script client library for the OS Config API
 * Documentation URL: https://cloud.google.com/compute/docs/osconfig/rest
 * @class
 */
class Osconfig {
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
    this._rootUrl = 'https://osconfig.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.osPolicyAssignments = {};
    this.projects.locations.osPolicyAssignments.create = (params) => this._makeRequest('v1alpha/{+parent}/osPolicyAssignments', 'POST', params);
    this.projects.locations.osPolicyAssignments.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
    this.projects.locations.osPolicyAssignments.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.osPolicyAssignments.list = (params) => this._makeRequest('v1alpha/{+parent}/osPolicyAssignments', 'GET', params);
    this.projects.locations.osPolicyAssignments.listRevisions = (params) => this._makeRequest('v1alpha/{+name}:listRevisions', 'GET', params);
    this.projects.locations.osPolicyAssignments.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.osPolicyAssignments.operations = {};
    this.projects.locations.osPolicyAssignments.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.osPolicyAssignments.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.projects.locations.instanceOSPoliciesCompliances = {};
    this.projects.locations.instanceOSPoliciesCompliances.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.instanceOSPoliciesCompliances.list = (params) => this._makeRequest('v1alpha/{+parent}/instanceOSPoliciesCompliances', 'GET', params);

    this.projects.locations.instances = {};

    this.projects.locations.instances.osPolicyAssignments = {};

    this.projects.locations.instances.osPolicyAssignments.reports = {};
    this.projects.locations.instances.osPolicyAssignments.reports.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.instances.osPolicyAssignments.reports.list = (params) => this._makeRequest('v1alpha/{+parent}/reports', 'GET', params);

    this.projects.locations.instances.inventories = {};
    this.projects.locations.instances.inventories.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.instances.inventories.list = (params) => this._makeRequest('v1alpha/{+parent}/inventories', 'GET', params);

    this.projects.locations.instances.vulnerabilityReports = {};
    this.projects.locations.instances.vulnerabilityReports.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
    this.projects.locations.instances.vulnerabilityReports.list = (params) => this._makeRequest('v1alpha/{+parent}/vulnerabilityReports', 'GET', params);
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
