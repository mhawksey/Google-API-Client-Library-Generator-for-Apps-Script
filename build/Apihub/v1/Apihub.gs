
/**
 * Google Apps Script client library for the API hub API
 * Documentation URL: https://cloud.google.com/apigee/docs/api-hub/what-is-api-hub
 * @class
 */
class Apihub {
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
    this._rootUrl = 'https://apihub.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.searchResources = (params) => this._makeRequest('v1/{+location}:searchResources', 'POST', params);
    this.projects.locations.collectApiData = (params) => this._makeRequest('v1/{+location}:collectApiData', 'POST', params);
    this.projects.locations.lookupRuntimeProjectAttachment = (params) => this._makeRequest('v1/{+name}:lookupRuntimeProjectAttachment', 'GET', params);
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.plugins = {};
    this.projects.locations.plugins.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.plugins.enable = (params) => this._makeRequest('v1/{+name}:enable', 'POST', params);
    this.projects.locations.plugins.disable = (params) => this._makeRequest('v1/{+name}:disable', 'POST', params);
    this.projects.locations.plugins.create = (params) => this._makeRequest('v1/{+parent}/plugins', 'POST', params);
    this.projects.locations.plugins.list = (params) => this._makeRequest('v1/{+parent}/plugins', 'GET', params);
    this.projects.locations.plugins.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.plugins.getStyleGuide = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.plugins.updateStyleGuide = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.plugins.instances = {};
    this.projects.locations.plugins.instances.create = (params) => this._makeRequest('v1/{+parent}/instances', 'POST', params);
    this.projects.locations.plugins.instances.executeAction = (params) => this._makeRequest('v1/{+name}:executeAction', 'POST', params);
    this.projects.locations.plugins.instances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.plugins.instances.list = (params) => this._makeRequest('v1/{+parent}/instances', 'GET', params);
    this.projects.locations.plugins.instances.enableAction = (params) => this._makeRequest('v1/{+name}:enableAction', 'POST', params);
    this.projects.locations.plugins.instances.disableAction = (params) => this._makeRequest('v1/{+name}:disableAction', 'POST', params);
    this.projects.locations.plugins.instances.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.plugins.instances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.plugins.styleGuide = {};
    this.projects.locations.plugins.styleGuide.getContents = (params) => this._makeRequest('v1/{+name}:contents', 'GET', params);

    this.projects.locations.apis = {};
    this.projects.locations.apis.create = (params) => this._makeRequest('v1/{+parent}/apis', 'POST', params);
    this.projects.locations.apis.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apis.list = (params) => this._makeRequest('v1/{+parent}/apis', 'GET', params);
    this.projects.locations.apis.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.apis.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.apis.versions = {};
    this.projects.locations.apis.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);
    this.projects.locations.apis.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apis.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);
    this.projects.locations.apis.versions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.apis.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.apis.versions.specs = {};
    this.projects.locations.apis.versions.specs.create = (params) => this._makeRequest('v1/{+parent}/specs', 'POST', params);
    this.projects.locations.apis.versions.specs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apis.versions.specs.getContents = (params) => this._makeRequest('v1/{+name}:contents', 'GET', params);
    this.projects.locations.apis.versions.specs.list = (params) => this._makeRequest('v1/{+parent}/specs', 'GET', params);
    this.projects.locations.apis.versions.specs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.apis.versions.specs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.apis.versions.specs.lint = (params) => this._makeRequest('v1/{+name}:lint', 'POST', params);

    this.projects.locations.apis.versions.operations = {};
    this.projects.locations.apis.versions.operations.create = (params) => this._makeRequest('v1/{+parent}/operations', 'POST', params);
    this.projects.locations.apis.versions.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apis.versions.operations.list = (params) => this._makeRequest('v1/{+parent}/operations', 'GET', params);
    this.projects.locations.apis.versions.operations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.apis.versions.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.apis.versions.definitions = {};
    this.projects.locations.apis.versions.definitions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.deployments = {};
    this.projects.locations.deployments.create = (params) => this._makeRequest('v1/{+parent}/deployments', 'POST', params);
    this.projects.locations.deployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);
    this.projects.locations.deployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.deployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.attributes = {};
    this.projects.locations.attributes.create = (params) => this._makeRequest('v1/{+parent}/attributes', 'POST', params);
    this.projects.locations.attributes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.attributes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.attributes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.attributes.list = (params) => this._makeRequest('v1/{+parent}/attributes', 'GET', params);

    this.projects.locations.externalApis = {};
    this.projects.locations.externalApis.create = (params) => this._makeRequest('v1/{+parent}/externalApis', 'POST', params);
    this.projects.locations.externalApis.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.externalApis.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.externalApis.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.externalApis.list = (params) => this._makeRequest('v1/{+parent}/externalApis', 'GET', params);

    this.projects.locations.dependencies = {};
    this.projects.locations.dependencies.create = (params) => this._makeRequest('v1/{+parent}/dependencies', 'POST', params);
    this.projects.locations.dependencies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.dependencies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.dependencies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.dependencies.list = (params) => this._makeRequest('v1/{+parent}/dependencies', 'GET', params);

    this.projects.locations.curations = {};
    this.projects.locations.curations.create = (params) => this._makeRequest('v1/{+parent}/curations', 'POST', params);
    this.projects.locations.curations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.curations.list = (params) => this._makeRequest('v1/{+parent}/curations', 'GET', params);
    this.projects.locations.curations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.curations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.discoveredApiObservations = {};
    this.projects.locations.discoveredApiObservations.list = (params) => this._makeRequest('v1/{+parent}/discoveredApiObservations', 'GET', params);
    this.projects.locations.discoveredApiObservations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.discoveredApiObservations.discoveredApiOperations = {};
    this.projects.locations.discoveredApiObservations.discoveredApiOperations.list = (params) => this._makeRequest('v1/{+parent}/discoveredApiOperations', 'GET', params);
    this.projects.locations.discoveredApiObservations.discoveredApiOperations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.hostProjectRegistrations = {};
    this.projects.locations.hostProjectRegistrations.create = (params) => this._makeRequest('v1/{+parent}/hostProjectRegistrations', 'POST', params);
    this.projects.locations.hostProjectRegistrations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.hostProjectRegistrations.list = (params) => this._makeRequest('v1/{+parent}/hostProjectRegistrations', 'GET', params);

    this.projects.locations.apiHubInstances = {};
    this.projects.locations.apiHubInstances.create = (params) => this._makeRequest('v1/{+parent}/apiHubInstances', 'POST', params);
    this.projects.locations.apiHubInstances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.apiHubInstances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apiHubInstances.lookup = (params) => this._makeRequest('v1/{+parent}/apiHubInstances:lookup', 'GET', params);

    this.projects.locations.runtimeProjectAttachments = {};
    this.projects.locations.runtimeProjectAttachments.create = (params) => this._makeRequest('v1/{+parent}/runtimeProjectAttachments', 'POST', params);
    this.projects.locations.runtimeProjectAttachments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.runtimeProjectAttachments.list = (params) => this._makeRequest('v1/{+parent}/runtimeProjectAttachments', 'GET', params);
    this.projects.locations.runtimeProjectAttachments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
