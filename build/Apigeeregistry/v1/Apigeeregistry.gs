
/**
 * Google Apps Script client library for the Apigee Registry API
 * Documentation URL: https://cloud.google.com/apigee/docs/api-hub/what-is-api-hub
 * @class
 */
class Apigeeregistry {
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
    this._rootUrl = 'https://apigeeregistry.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.instances = {};
    this.projects.locations.instances.create = (params) => this._makeRequest('v1/{+parent}/instances', 'POST', params);
    this.projects.locations.instances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.instances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.instances.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.instances.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.instances.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis = {};
    this.projects.locations.apis.list = (params) => this._makeRequest('v1/{+parent}/apis', 'GET', params);
    this.projects.locations.apis.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apis.create = (params) => this._makeRequest('v1/{+parent}/apis', 'POST', params);
    this.projects.locations.apis.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.apis.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.apis.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.apis.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.apis.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.versions = {};
    this.projects.locations.apis.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);
    this.projects.locations.apis.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apis.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);
    this.projects.locations.apis.versions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.apis.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.apis.versions.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.apis.versions.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.apis.versions.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.versions.specs = {};
    this.projects.locations.apis.versions.specs.list = (params) => this._makeRequest('v1/{+parent}/specs', 'GET', params);
    this.projects.locations.apis.versions.specs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apis.versions.specs.getContents = (params) => this._makeRequest('v1/{+name}:getContents', 'GET', params);
    this.projects.locations.apis.versions.specs.create = (params) => this._makeRequest('v1/{+parent}/specs', 'POST', params);
    this.projects.locations.apis.versions.specs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.apis.versions.specs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.apis.versions.specs.tagRevision = (params) => this._makeRequest('v1/{+name}:tagRevision', 'POST', params);
    this.projects.locations.apis.versions.specs.listRevisions = (params) => this._makeRequest('v1/{+name}:listRevisions', 'GET', params);
    this.projects.locations.apis.versions.specs.rollback = (params) => this._makeRequest('v1/{+name}:rollback', 'POST', params);
    this.projects.locations.apis.versions.specs.deleteRevision = (params) => this._makeRequest('v1/{+name}:deleteRevision', 'DELETE', params);
    this.projects.locations.apis.versions.specs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.apis.versions.specs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.apis.versions.specs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.versions.specs.artifacts = {};
    this.projects.locations.apis.versions.specs.artifacts.list = (params) => this._makeRequest('v1/{+parent}/artifacts', 'GET', params);
    this.projects.locations.apis.versions.specs.artifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apis.versions.specs.artifacts.getContents = (params) => this._makeRequest('v1/{+name}:getContents', 'GET', params);
    this.projects.locations.apis.versions.specs.artifacts.create = (params) => this._makeRequest('v1/{+parent}/artifacts', 'POST', params);
    this.projects.locations.apis.versions.specs.artifacts.replaceArtifact = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.apis.versions.specs.artifacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.apis.versions.specs.artifacts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.apis.versions.specs.artifacts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.apis.versions.specs.artifacts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.versions.artifacts = {};
    this.projects.locations.apis.versions.artifacts.list = (params) => this._makeRequest('v1/{+parent}/artifacts', 'GET', params);
    this.projects.locations.apis.versions.artifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apis.versions.artifacts.getContents = (params) => this._makeRequest('v1/{+name}:getContents', 'GET', params);
    this.projects.locations.apis.versions.artifacts.create = (params) => this._makeRequest('v1/{+parent}/artifacts', 'POST', params);
    this.projects.locations.apis.versions.artifacts.replaceArtifact = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.apis.versions.artifacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.apis.versions.artifacts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.apis.versions.artifacts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.apis.versions.artifacts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.deployments = {};
    this.projects.locations.apis.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);
    this.projects.locations.apis.deployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apis.deployments.create = (params) => this._makeRequest('v1/{+parent}/deployments', 'POST', params);
    this.projects.locations.apis.deployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.apis.deployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.apis.deployments.tagRevision = (params) => this._makeRequest('v1/{+name}:tagRevision', 'POST', params);
    this.projects.locations.apis.deployments.listRevisions = (params) => this._makeRequest('v1/{+name}:listRevisions', 'GET', params);
    this.projects.locations.apis.deployments.rollback = (params) => this._makeRequest('v1/{+name}:rollback', 'POST', params);
    this.projects.locations.apis.deployments.deleteRevision = (params) => this._makeRequest('v1/{+name}:deleteRevision', 'DELETE', params);
    this.projects.locations.apis.deployments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.apis.deployments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.apis.deployments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.apis.deployments.artifacts = {};
    this.projects.locations.apis.deployments.artifacts.list = (params) => this._makeRequest('v1/{+parent}/artifacts', 'GET', params);
    this.projects.locations.apis.deployments.artifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apis.deployments.artifacts.getContents = (params) => this._makeRequest('v1/{+name}:getContents', 'GET', params);
    this.projects.locations.apis.deployments.artifacts.create = (params) => this._makeRequest('v1/{+parent}/artifacts', 'POST', params);
    this.projects.locations.apis.deployments.artifacts.replaceArtifact = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.apis.deployments.artifacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.apis.artifacts = {};
    this.projects.locations.apis.artifacts.list = (params) => this._makeRequest('v1/{+parent}/artifacts', 'GET', params);
    this.projects.locations.apis.artifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.apis.artifacts.getContents = (params) => this._makeRequest('v1/{+name}:getContents', 'GET', params);
    this.projects.locations.apis.artifacts.create = (params) => this._makeRequest('v1/{+parent}/artifacts', 'POST', params);
    this.projects.locations.apis.artifacts.replaceArtifact = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.apis.artifacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.apis.artifacts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.apis.artifacts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.apis.artifacts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.artifacts = {};
    this.projects.locations.artifacts.list = (params) => this._makeRequest('v1/{+parent}/artifacts', 'GET', params);
    this.projects.locations.artifacts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.artifacts.getContents = (params) => this._makeRequest('v1/{+name}:getContents', 'GET', params);
    this.projects.locations.artifacts.create = (params) => this._makeRequest('v1/{+parent}/artifacts', 'POST', params);
    this.projects.locations.artifacts.replaceArtifact = (params) => this._makeRequest('v1/{+name}', 'PUT', params);
    this.projects.locations.artifacts.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.artifacts.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.artifacts.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.artifacts.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.runtime = {};
    this.projects.locations.runtime.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.runtime.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.runtime.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.documents = {};
    this.projects.locations.documents.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.documents.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.documents.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
