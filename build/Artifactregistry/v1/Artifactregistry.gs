
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
    this.projects.getProjectSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.updateProjectSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations = {};
    this.projects.locations.getVpcscConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.updateVpcscConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.repositories = {};
    this.projects.locations.repositories.list = (params) => this._makeRequest('v1/{+parent}/repositories', 'GET', params);
    this.projects.locations.repositories.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.create = (params) => this._makeRequest('v1/{+parent}/repositories', 'POST', params);
    this.projects.locations.repositories.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.repositories.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.repositories.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.repositories.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.repositories.dockerImages = {};
    this.projects.locations.repositories.dockerImages.list = (params) => this._makeRequest('v1/{+parent}/dockerImages', 'GET', params);
    this.projects.locations.repositories.dockerImages.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.repositories.mavenArtifacts = {};
    this.projects.locations.repositories.mavenArtifacts.list = (params) => this._makeRequest('v1/{+parent}/mavenArtifacts', 'GET', params);
    this.projects.locations.repositories.mavenArtifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.repositories.npmPackages = {};
    this.projects.locations.repositories.npmPackages.list = (params) => this._makeRequest('v1/{+parent}/npmPackages', 'GET', params);
    this.projects.locations.repositories.npmPackages.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.repositories.pythonPackages = {};
    this.projects.locations.repositories.pythonPackages.list = (params) => this._makeRequest('v1/{+parent}/pythonPackages', 'GET', params);
    this.projects.locations.repositories.pythonPackages.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.repositories.aptArtifacts = {};
    this.projects.locations.repositories.aptArtifacts.import = (params) => this._makeRequest('v1/{+parent}/aptArtifacts:import', 'POST', params);
    this.projects.locations.repositories.aptArtifacts.upload = (params) => this._makeRequest('v1/{+parent}/aptArtifacts:create', 'POST', params);

    this.projects.locations.repositories.yumArtifacts = {};
    this.projects.locations.repositories.yumArtifacts.import = (params) => this._makeRequest('v1/{+parent}/yumArtifacts:import', 'POST', params);
    this.projects.locations.repositories.yumArtifacts.upload = (params) => this._makeRequest('v1/{+parent}/yumArtifacts:create', 'POST', params);

    this.projects.locations.repositories.googetArtifacts = {};
    this.projects.locations.repositories.googetArtifacts.import = (params) => this._makeRequest('v1/{+parent}/googetArtifacts:import', 'POST', params);
    this.projects.locations.repositories.googetArtifacts.upload = (params) => this._makeRequest('v1/{+parent}/googetArtifacts:create', 'POST', params);

    this.projects.locations.repositories.genericArtifacts = {};
    this.projects.locations.repositories.genericArtifacts.upload = (params) => this._makeRequest('v1/{+parent}/genericArtifacts:create', 'POST', params);

    this.projects.locations.repositories.kfpArtifacts = {};
    this.projects.locations.repositories.kfpArtifacts.upload = (params) => this._makeRequest('v1/{+parent}/kfpArtifacts:create', 'POST', params);

    this.projects.locations.repositories.goModules = {};
    this.projects.locations.repositories.goModules.upload = (params) => this._makeRequest('v1/{+parent}/goModules:create', 'POST', params);

    this.projects.locations.repositories.packages = {};
    this.projects.locations.repositories.packages.list = (params) => this._makeRequest('v1/{+parent}/packages', 'GET', params);
    this.projects.locations.repositories.packages.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.packages.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.repositories.packages.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.repositories.packages.versions = {};
    this.projects.locations.repositories.packages.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);
    this.projects.locations.repositories.packages.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.packages.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.repositories.packages.versions.batchDelete = (params) => this._makeRequest('v1/{+parent}/versions:batchDelete', 'POST', params);
    this.projects.locations.repositories.packages.versions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.repositories.packages.tags = {};
    this.projects.locations.repositories.packages.tags.list = (params) => this._makeRequest('v1/{+parent}/tags', 'GET', params);
    this.projects.locations.repositories.packages.tags.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.packages.tags.create = (params) => this._makeRequest('v1/{+parent}/tags', 'POST', params);
    this.projects.locations.repositories.packages.tags.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.packages.tags.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.repositories.files = {};
    this.projects.locations.repositories.files.list = (params) => this._makeRequest('v1/{+parent}/files', 'GET', params);
    this.projects.locations.repositories.files.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.files.download = (params) => this._makeRequest('v1/{+name}:download', 'GET', params);
    this.projects.locations.repositories.files.upload = (params) => this._makeRequest('v1/{+parent}/files:upload', 'POST', params);
    this.projects.locations.repositories.files.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.repositories.files.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.repositories.rules = {};
    this.projects.locations.repositories.rules.create = (params) => this._makeRequest('v1/{+parent}/rules', 'POST', params);
    this.projects.locations.repositories.rules.list = (params) => this._makeRequest('v1/{+parent}/rules', 'GET', params);
    this.projects.locations.repositories.rules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.rules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.rules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.repositories.attachments = {};
    this.projects.locations.repositories.attachments.list = (params) => this._makeRequest('v1/{+parent}/attachments', 'GET', params);
    this.projects.locations.repositories.attachments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.attachments.create = (params) => this._makeRequest('v1/{+parent}/attachments', 'POST', params);
    this.projects.locations.repositories.attachments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
