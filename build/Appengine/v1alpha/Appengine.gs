
/**
 * Google Apps Script client library for the App Engine Admin API
 * Documentation URL: https://cloud.google.com/appengine/docs/admin-api/
 * @class
 */
class Appengine {
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
    this._rootUrl = 'https://appengine.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.apps = {};

    this.apps.operations = {};
    this.apps.operations.list = (params) => this._makeRequest('v1alpha/apps/{appsId}/operations', 'GET', params);
    this.apps.operations.get = (params) => this._makeRequest('v1alpha/apps/{appsId}/operations/{operationsId}', 'GET', params);

    this.apps.authorizedDomains = {};
    this.apps.authorizedDomains.list = (params) => this._makeRequest('v1alpha/apps/{appsId}/authorizedDomains', 'GET', params);

    this.apps.authorizedCertificates = {};
    this.apps.authorizedCertificates.list = (params) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates', 'GET', params);
    this.apps.authorizedCertificates.get = (params) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', params);
    this.apps.authorizedCertificates.create = (params) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates', 'POST', params);
    this.apps.authorizedCertificates.patch = (params) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', params);
    this.apps.authorizedCertificates.delete = (params) => this._makeRequest('v1alpha/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', params);

    this.apps.domainMappings = {};
    this.apps.domainMappings.list = (params) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings', 'GET', params);
    this.apps.domainMappings.get = (params) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}', 'GET', params);
    this.apps.domainMappings.create = (params) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings', 'POST', params);
    this.apps.domainMappings.patch = (params) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}', 'PATCH', params);
    this.apps.domainMappings.delete = (params) => this._makeRequest('v1alpha/apps/{appsId}/domainMappings/{domainMappingsId}', 'DELETE', params);

    this.apps.locations = {};
    this.apps.locations.list = (params) => this._makeRequest('v1alpha/apps/{appsId}/locations', 'GET', params);
    this.apps.locations.get = (params) => this._makeRequest('v1alpha/apps/{appsId}/locations/{locationsId}', 'GET', params);

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}', 'GET', params);

    this.projects.locations.applications = {};

    this.projects.locations.applications.authorizedDomains = {};
    this.projects.locations.applications.authorizedDomains.list = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedDomains', 'GET', params);

    this.projects.locations.applications.authorizedCertificates = {};
    this.projects.locations.applications.authorizedCertificates.list = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'GET', params);
    this.projects.locations.applications.authorizedCertificates.get = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', params);
    this.projects.locations.applications.authorizedCertificates.create = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'POST', params);
    this.projects.locations.applications.authorizedCertificates.patch = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', params);
    this.projects.locations.applications.authorizedCertificates.delete = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', params);

    this.projects.locations.applications.domainMappings = {};
    this.projects.locations.applications.domainMappings.get = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings/{domainMappingsId}', 'GET', params);
    this.projects.locations.applications.domainMappings.create = (params) => this._makeRequest('v1alpha/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings', 'POST', params);
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
