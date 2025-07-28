
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

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/operations/{operationsId}', 'GET', params);

    this.projects.locations.applications = {};
    this.projects.locations.applications.patch = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}', 'PATCH', params);

    this.projects.locations.applications.services = {};
    this.projects.locations.applications.services.patch = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}', 'PATCH', params);
    this.projects.locations.applications.services.delete = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}', 'DELETE', params);

    this.projects.locations.applications.services.versions = {};
    this.projects.locations.applications.services.versions.patch = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}/versions/{versionsId}', 'PATCH', params);
    this.projects.locations.applications.services.versions.delete = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/services/{servicesId}/versions/{versionsId}', 'DELETE', params);

    this.projects.locations.applications.authorizedDomains = {};
    this.projects.locations.applications.authorizedDomains.list = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedDomains', 'GET', params);

    this.projects.locations.applications.authorizedCertificates = {};
    this.projects.locations.applications.authorizedCertificates.list = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'GET', params);
    this.projects.locations.applications.authorizedCertificates.get = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', params);
    this.projects.locations.applications.authorizedCertificates.create = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates', 'POST', params);
    this.projects.locations.applications.authorizedCertificates.patch = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', params);
    this.projects.locations.applications.authorizedCertificates.delete = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', params);

    this.projects.locations.applications.domainMappings = {};
    this.projects.locations.applications.domainMappings.get = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings/{domainMappingsId}', 'GET', params);
    this.projects.locations.applications.domainMappings.create = (params) => this._makeRequest('v1beta/projects/{projectsId}/locations/{locationsId}/applications/{applicationsId}/domainMappings', 'POST', params);

    this.apps = {};
    this.apps.get = (params) => this._makeRequest('v1beta/apps/{appsId}', 'GET', params);
    this.apps.create = (params) => this._makeRequest('v1beta/apps', 'POST', params);
    this.apps.patch = (params) => this._makeRequest('v1beta/apps/{appsId}', 'PATCH', params);
    this.apps.repair = (params) => this._makeRequest('v1beta/apps/{appsId}:repair', 'POST', params);
    this.apps.listRuntimes = (params) => this._makeRequest('v1beta/apps/{appsId}:listRuntimes', 'GET', params);

    this.apps.operations = {};
    this.apps.operations.list = (params) => this._makeRequest('v1beta/apps/{appsId}/operations', 'GET', params);
    this.apps.operations.get = (params) => this._makeRequest('v1beta/apps/{appsId}/operations/{operationsId}', 'GET', params);

    this.apps.services = {};
    this.apps.services.list = (params) => this._makeRequest('v1beta/apps/{appsId}/services', 'GET', params);
    this.apps.services.get = (params) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}', 'GET', params);
    this.apps.services.patch = (params) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}', 'PATCH', params);
    this.apps.services.delete = (params) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}', 'DELETE', params);

    this.apps.services.versions = {};
    this.apps.services.versions.list = (params) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions', 'GET', params);
    this.apps.services.versions.get = (params) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}', 'GET', params);
    this.apps.services.versions.create = (params) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions', 'POST', params);
    this.apps.services.versions.patch = (params) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}', 'PATCH', params);
    this.apps.services.versions.delete = (params) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}', 'DELETE', params);

    this.apps.services.versions.instances = {};
    this.apps.services.versions.instances.list = (params) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances', 'GET', params);
    this.apps.services.versions.instances.get = (params) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}', 'GET', params);
    this.apps.services.versions.instances.delete = (params) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}', 'DELETE', params);
    this.apps.services.versions.instances.debug = (params) => this._makeRequest('v1beta/apps/{appsId}/services/{servicesId}/versions/{versionsId}/instances/{instancesId}:debug', 'POST', params);

    this.apps.firewall = {};

    this.apps.firewall.ingressRules = {};
    this.apps.firewall.ingressRules.list = (params) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules', 'GET', params);
    this.apps.firewall.ingressRules.batchUpdate = (params) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules:batchUpdate', 'POST', params);
    this.apps.firewall.ingressRules.create = (params) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules', 'POST', params);
    this.apps.firewall.ingressRules.get = (params) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}', 'GET', params);
    this.apps.firewall.ingressRules.patch = (params) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}', 'PATCH', params);
    this.apps.firewall.ingressRules.delete = (params) => this._makeRequest('v1beta/apps/{appsId}/firewall/ingressRules/{ingressRulesId}', 'DELETE', params);

    this.apps.authorizedDomains = {};
    this.apps.authorizedDomains.list = (params) => this._makeRequest('v1beta/apps/{appsId}/authorizedDomains', 'GET', params);

    this.apps.authorizedCertificates = {};
    this.apps.authorizedCertificates.list = (params) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates', 'GET', params);
    this.apps.authorizedCertificates.get = (params) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'GET', params);
    this.apps.authorizedCertificates.create = (params) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates', 'POST', params);
    this.apps.authorizedCertificates.patch = (params) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'PATCH', params);
    this.apps.authorizedCertificates.delete = (params) => this._makeRequest('v1beta/apps/{appsId}/authorizedCertificates/{authorizedCertificatesId}', 'DELETE', params);

    this.apps.domainMappings = {};
    this.apps.domainMappings.list = (params) => this._makeRequest('v1beta/apps/{appsId}/domainMappings', 'GET', params);
    this.apps.domainMappings.get = (params) => this._makeRequest('v1beta/apps/{appsId}/domainMappings/{domainMappingsId}', 'GET', params);
    this.apps.domainMappings.create = (params) => this._makeRequest('v1beta/apps/{appsId}/domainMappings', 'POST', params);
    this.apps.domainMappings.patch = (params) => this._makeRequest('v1beta/apps/{appsId}/domainMappings/{domainMappingsId}', 'PATCH', params);
    this.apps.domainMappings.delete = (params) => this._makeRequest('v1beta/apps/{appsId}/domainMappings/{domainMappingsId}', 'DELETE', params);

    this.apps.locations = {};
    this.apps.locations.list = (params) => this._makeRequest('v1beta/apps/{appsId}/locations', 'GET', params);
    this.apps.locations.get = (params) => this._makeRequest('v1beta/apps/{appsId}/locations/{locationsId}', 'GET', params);
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
