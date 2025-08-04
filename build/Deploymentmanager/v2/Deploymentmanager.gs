
/**
 * Google Apps Script client library for the Cloud Deployment Manager V2 API
 * Documentation URL: https://cloud.google.com/deployment-manager
 * @class
 */
class Deploymentmanager {
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
    this._rootUrl = 'https://deploymentmanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.deployments = {};
    this.deployments.insert = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments', 'POST', params);
    this.deployments.update = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}', 'PUT', params);
    this.deployments.patch = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}', 'PATCH', params);
    this.deployments.delete = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}', 'DELETE', params);
    this.deployments.get = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}', 'GET', params);
    this.deployments.list = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments', 'GET', params);
    this.deployments.cancelPreview = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/cancelPreview', 'POST', params);
    this.deployments.stop = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/stop', 'POST', params);
    this.deployments.getIamPolicy = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{resource}/getIamPolicy', 'GET', params);
    this.deployments.setIamPolicy = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{resource}/setIamPolicy', 'POST', params);
    this.deployments.testIamPermissions = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{resource}/testIamPermissions', 'POST', params);

    this.manifests = {};
    this.manifests.get = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/manifests/{manifest}', 'GET', params);
    this.manifests.list = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/manifests', 'GET', params);

    this.operations = {};
    this.operations.get = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/operations/{operation}', 'GET', params);
    this.operations.list = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/operations', 'GET', params);

    this.resources = {};
    this.resources.get = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/resources/{resource}', 'GET', params);
    this.resources.list = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/deployments/{deployment}/resources', 'GET', params);

    this.types = {};
    this.types.list = (params) => this._makeRequest('deploymentmanager/v2/projects/{project}/global/types', 'GET', params);
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
