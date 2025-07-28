
/**
 * Google Apps Script client library for the Tag Manager API
 * Documentation URL: https://developers.google.com/tag-manager
 * @class
 */
class Tagmanager {
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
    this._rootUrl = 'https://tagmanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};
    this.accounts.list = (params) => this._makeRequest('tagmanager/v1/accounts', 'GET', params);
    this.accounts.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}', 'GET', params);
    this.accounts.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}', 'PUT', params);

    this.accounts.permissions = {};
    this.accounts.permissions.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions', 'POST', params);
    this.accounts.permissions.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions', 'GET', params);
    this.accounts.permissions.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions/{permissionId}', 'GET', params);
    this.accounts.permissions.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions/{permissionId}', 'PUT', params);
    this.accounts.permissions.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/permissions/{permissionId}', 'DELETE', params);

    this.accounts.containers = {};
    this.accounts.containers.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers', 'POST', params);
    this.accounts.containers.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers', 'GET', params);
    this.accounts.containers.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}', 'GET', params);
    this.accounts.containers.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}', 'PUT', params);
    this.accounts.containers.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}', 'DELETE', params);

    this.accounts.containers.versions = {};
    this.accounts.containers.versions.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions', 'POST', params);
    this.accounts.containers.versions.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}', 'GET', params);
    this.accounts.containers.versions.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}', 'PUT', params);
    this.accounts.containers.versions.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}', 'DELETE', params);
    this.accounts.containers.versions.undelete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/undelete', 'POST', params);
    this.accounts.containers.versions.publish = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/publish', 'POST', params);
    this.accounts.containers.versions.restore = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions/{containerVersionId}/restore', 'POST', params);
    this.accounts.containers.versions.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/versions', 'GET', params);

    this.accounts.containers.variables = {};
    this.accounts.containers.variables.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables', 'POST', params);
    this.accounts.containers.variables.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables', 'GET', params);
    this.accounts.containers.variables.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}', 'GET', params);
    this.accounts.containers.variables.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}', 'PUT', params);
    this.accounts.containers.variables.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/variables/{variableId}', 'DELETE', params);

    this.accounts.containers.triggers = {};
    this.accounts.containers.triggers.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers', 'POST', params);
    this.accounts.containers.triggers.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers', 'GET', params);
    this.accounts.containers.triggers.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}', 'GET', params);
    this.accounts.containers.triggers.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}', 'PUT', params);
    this.accounts.containers.triggers.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/triggers/{triggerId}', 'DELETE', params);

    this.accounts.containers.tags = {};
    this.accounts.containers.tags.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags', 'POST', params);
    this.accounts.containers.tags.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags', 'GET', params);
    this.accounts.containers.tags.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}', 'GET', params);
    this.accounts.containers.tags.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}', 'PUT', params);
    this.accounts.containers.tags.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/tags/{tagId}', 'DELETE', params);

    this.accounts.containers.folders = {};
    this.accounts.containers.folders.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders', 'POST', params);
    this.accounts.containers.folders.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders', 'GET', params);
    this.accounts.containers.folders.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}', 'GET', params);
    this.accounts.containers.folders.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}', 'PUT', params);
    this.accounts.containers.folders.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}', 'DELETE', params);

    this.accounts.containers.folders.entities = {};
    this.accounts.containers.folders.entities.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/folders/{folderId}/entities', 'GET', params);

    this.accounts.containers.move_folders = {};
    this.accounts.containers.move_folders.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/move_folders/{folderId}', 'PUT', params);

    this.accounts.containers.environments = {};
    this.accounts.containers.environments.create = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments', 'POST', params);
    this.accounts.containers.environments.list = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments', 'GET', params);
    this.accounts.containers.environments.get = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}', 'GET', params);
    this.accounts.containers.environments.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}', 'PUT', params);
    this.accounts.containers.environments.delete = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/environments/{environmentId}', 'DELETE', params);

    this.accounts.containers.reauthorize_environments = {};
    this.accounts.containers.reauthorize_environments.update = (params) => this._makeRequest('tagmanager/v1/accounts/{accountId}/containers/{containerId}/reauthorize_environments/{environmentId}', 'PUT', params);
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
