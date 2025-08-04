
/**
 * Google Apps Script client library for the Cloud Domains API
 * Documentation URL: https://cloud.google.com/domains/
 * @class
 */
class Domains {
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
    this._rootUrl = 'https://domains.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1alpha2/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1alpha2/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha2/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha2/{+name}', 'GET', params);

    this.projects.locations.registrations = {};
    this.projects.locations.registrations.setIamPolicy = (params) => this._makeRequest('v1alpha2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.registrations.getIamPolicy = (params) => this._makeRequest('v1alpha2/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.registrations.testIamPermissions = (params) => this._makeRequest('v1alpha2/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.registrations.searchDomains = (params) => this._makeRequest('v1alpha2/{+location}/registrations:searchDomains', 'GET', params);
    this.projects.locations.registrations.retrieveRegisterParameters = (params) => this._makeRequest('v1alpha2/{+location}/registrations:retrieveRegisterParameters', 'GET', params);
    this.projects.locations.registrations.register = (params) => this._makeRequest('v1alpha2/{+parent}/registrations:register', 'POST', params);
    this.projects.locations.registrations.retrieveTransferParameters = (params) => this._makeRequest('v1alpha2/{+location}/registrations:retrieveTransferParameters', 'GET', params);
    this.projects.locations.registrations.transfer = (params) => this._makeRequest('v1alpha2/{+parent}/registrations:transfer', 'POST', params);
    this.projects.locations.registrations.retrieveImportableDomains = (params) => this._makeRequest('v1alpha2/{+location}/registrations:retrieveImportableDomains', 'GET', params);
    this.projects.locations.registrations.import = (params) => this._makeRequest('v1alpha2/{+parent}/registrations:import', 'POST', params);
    this.projects.locations.registrations.list = (params) => this._makeRequest('v1alpha2/{+parent}/registrations', 'GET', params);
    this.projects.locations.registrations.get = (params) => this._makeRequest('v1alpha2/{+name}', 'GET', params);
    this.projects.locations.registrations.patch = (params) => this._makeRequest('v1alpha2/{+name}', 'PATCH', params);
    this.projects.locations.registrations.configureManagementSettings = (params) => this._makeRequest('v1alpha2/{+registration}:configureManagementSettings', 'POST', params);
    this.projects.locations.registrations.configureDnsSettings = (params) => this._makeRequest('v1alpha2/{+registration}:configureDnsSettings', 'POST', params);
    this.projects.locations.registrations.retrieveGoogleDomainsDnsRecords = (params) => this._makeRequest('v1alpha2/{+registration}:retrieveGoogleDomainsDnsRecords', 'GET', params);
    this.projects.locations.registrations.retrieveGoogleDomainsForwardingConfig = (params) => this._makeRequest('v1alpha2/{+registration}:retrieveGoogleDomainsForwardingConfig', 'GET', params);
    this.projects.locations.registrations.configureContactSettings = (params) => this._makeRequest('v1alpha2/{+registration}:configureContactSettings', 'POST', params);
    this.projects.locations.registrations.export = (params) => this._makeRequest('v1alpha2/{+name}:export', 'POST', params);
    this.projects.locations.registrations.delete = (params) => this._makeRequest('v1alpha2/{+name}', 'DELETE', params);
    this.projects.locations.registrations.retrieveAuthorizationCode = (params) => this._makeRequest('v1alpha2/{+registration}:retrieveAuthorizationCode', 'GET', params);
    this.projects.locations.registrations.resetAuthorizationCode = (params) => this._makeRequest('v1alpha2/{+registration}:resetAuthorizationCode', 'POST', params);
    this.projects.locations.registrations.initiatePushTransfer = (params) => this._makeRequest('v1alpha2/{+registration}:initiatePushTransfer', 'POST', params);
    this.projects.locations.registrations.renewDomain = (params) => this._makeRequest('v1alpha2/{+registration}:renewDomain', 'POST', params);
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
