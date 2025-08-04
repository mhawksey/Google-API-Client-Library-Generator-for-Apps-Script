
/**
 * Google Apps Script client library for the Artifact Registry API
 * Documentation URL: https://cloud.google.com/artifacts/docs/
 * @class
 */
class Artifactregistry {
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
    this._rootUrl = 'https://artifactregistry.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};
    this.projects.getProjectSettings = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.updateProjectSettings = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1beta2/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    this.projects.locations.repositories = {};
    this.projects.locations.repositories.list = (params) => this._makeRequest('v1beta2/{+parent}/repositories', 'GET', params);
    this.projects.locations.repositories.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.locations.repositories.create = (params) => this._makeRequest('v1beta2/{+parent}/repositories', 'POST', params);
    this.projects.locations.repositories.patch = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.projects.locations.repositories.delete = (params) => this._makeRequest('v1beta2/{+name}', 'DELETE', params);
    this.projects.locations.repositories.setIamPolicy = (params) => this._makeRequest('v1beta2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.repositories.getIamPolicy = (params) => this._makeRequest('v1beta2/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.repositories.testIamPermissions = (params) => this._makeRequest('v1beta2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.repositories.aptArtifacts = {};
    this.projects.locations.repositories.aptArtifacts.import = (params) => this._makeRequest('v1beta2/{+parent}/aptArtifacts:import', 'POST', params);
    this.projects.locations.repositories.aptArtifacts.upload = (params) => this._makeRequest('v1beta2/{+parent}/aptArtifacts:create', 'POST', params);

    this.projects.locations.repositories.yumArtifacts = {};
    this.projects.locations.repositories.yumArtifacts.import = (params) => this._makeRequest('v1beta2/{+parent}/yumArtifacts:import', 'POST', params);
    this.projects.locations.repositories.yumArtifacts.upload = (params) => this._makeRequest('v1beta2/{+parent}/yumArtifacts:create', 'POST', params);

    this.projects.locations.repositories.packages = {};
    this.projects.locations.repositories.packages.list = (params) => this._makeRequest('v1beta2/{+parent}/packages', 'GET', params);
    this.projects.locations.repositories.packages.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.locations.repositories.packages.delete = (params) => this._makeRequest('v1beta2/{+name}', 'DELETE', params);
    this.projects.locations.repositories.packages.patch = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    this.projects.locations.repositories.packages.versions = {};
    this.projects.locations.repositories.packages.versions.list = (params) => this._makeRequest('v1beta2/{+parent}/versions', 'GET', params);
    this.projects.locations.repositories.packages.versions.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.locations.repositories.packages.versions.delete = (params) => this._makeRequest('v1beta2/{+name}', 'DELETE', params);

    this.projects.locations.repositories.packages.tags = {};
    this.projects.locations.repositories.packages.tags.list = (params) => this._makeRequest('v1beta2/{+parent}/tags', 'GET', params);
    this.projects.locations.repositories.packages.tags.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.locations.repositories.packages.tags.create = (params) => this._makeRequest('v1beta2/{+parent}/tags', 'POST', params);
    this.projects.locations.repositories.packages.tags.patch = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);
    this.projects.locations.repositories.packages.tags.delete = (params) => this._makeRequest('v1beta2/{+name}', 'DELETE', params);

    this.projects.locations.repositories.files = {};
    this.projects.locations.repositories.files.list = (params) => this._makeRequest('v1beta2/{+parent}/files', 'GET', params);
    this.projects.locations.repositories.files.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);
    this.projects.locations.repositories.files.download = (params) => this._makeRequest('v1beta2/{+name}:download', 'GET', params);
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
