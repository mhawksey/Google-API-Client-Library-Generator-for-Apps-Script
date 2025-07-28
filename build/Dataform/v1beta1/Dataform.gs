
/**
 * Google Apps Script client library for the Dataform API
 * Documentation URL: https://cloud.google.com/dataform/docs
 * @class
 */
class Dataform {
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
    this._rootUrl = 'https://dataform.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.updateConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.repositories = {};
    this.projects.locations.repositories.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.repositories.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.repositories.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.repositories.list = (params) => this._makeRequest('v1beta1/{+parent}/repositories', 'GET', params);
    this.projects.locations.repositories.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.repositories.create = (params) => this._makeRequest('v1beta1/{+parent}/repositories', 'POST', params);
    this.projects.locations.repositories.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.repositories.commit = (params) => this._makeRequest('v1beta1/{+name}:commit', 'POST', params);
    this.projects.locations.repositories.readFile = (params) => this._makeRequest('v1beta1/{+name}:readFile', 'GET', params);
    this.projects.locations.repositories.queryDirectoryContents = (params) => this._makeRequest('v1beta1/{+name}:queryDirectoryContents', 'GET', params);
    this.projects.locations.repositories.fetchHistory = (params) => this._makeRequest('v1beta1/{+name}:fetchHistory', 'GET', params);
    this.projects.locations.repositories.computeAccessTokenStatus = (params) => this._makeRequest('v1beta1/{+name}:computeAccessTokenStatus', 'GET', params);
    this.projects.locations.repositories.fetchRemoteBranches = (params) => this._makeRequest('v1beta1/{+name}:fetchRemoteBranches', 'GET', params);

    this.projects.locations.repositories.workspaces = {};
    this.projects.locations.repositories.workspaces.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.repositories.workspaces.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.repositories.workspaces.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.repositories.workspaces.list = (params) => this._makeRequest('v1beta1/{+parent}/workspaces', 'GET', params);
    this.projects.locations.repositories.workspaces.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.repositories.workspaces.create = (params) => this._makeRequest('v1beta1/{+parent}/workspaces', 'POST', params);
    this.projects.locations.repositories.workspaces.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.repositories.workspaces.installNpmPackages = (params) => this._makeRequest('v1beta1/{+workspace}:installNpmPackages', 'POST', params);
    this.projects.locations.repositories.workspaces.pull = (params) => this._makeRequest('v1beta1/{+name}:pull', 'POST', params);
    this.projects.locations.repositories.workspaces.push = (params) => this._makeRequest('v1beta1/{+name}:push', 'POST', params);
    this.projects.locations.repositories.workspaces.fetchFileGitStatuses = (params) => this._makeRequest('v1beta1/{+name}:fetchFileGitStatuses', 'GET', params);
    this.projects.locations.repositories.workspaces.fetchGitAheadBehind = (params) => this._makeRequest('v1beta1/{+name}:fetchGitAheadBehind', 'GET', params);
    this.projects.locations.repositories.workspaces.commit = (params) => this._makeRequest('v1beta1/{+name}:commit', 'POST', params);
    this.projects.locations.repositories.workspaces.reset = (params) => this._makeRequest('v1beta1/{+name}:reset', 'POST', params);
    this.projects.locations.repositories.workspaces.fetchFileDiff = (params) => this._makeRequest('v1beta1/{+workspace}:fetchFileDiff', 'GET', params);
    this.projects.locations.repositories.workspaces.queryDirectoryContents = (params) => this._makeRequest('v1beta1/{+workspace}:queryDirectoryContents', 'GET', params);
    this.projects.locations.repositories.workspaces.searchFiles = (params) => this._makeRequest('v1beta1/{+workspace}:searchFiles', 'GET', params);
    this.projects.locations.repositories.workspaces.makeDirectory = (params) => this._makeRequest('v1beta1/{+workspace}:makeDirectory', 'POST', params);
    this.projects.locations.repositories.workspaces.removeDirectory = (params) => this._makeRequest('v1beta1/{+workspace}:removeDirectory', 'POST', params);
    this.projects.locations.repositories.workspaces.moveDirectory = (params) => this._makeRequest('v1beta1/{+workspace}:moveDirectory', 'POST', params);
    this.projects.locations.repositories.workspaces.readFile = (params) => this._makeRequest('v1beta1/{+workspace}:readFile', 'GET', params);
    this.projects.locations.repositories.workspaces.removeFile = (params) => this._makeRequest('v1beta1/{+workspace}:removeFile', 'POST', params);
    this.projects.locations.repositories.workspaces.moveFile = (params) => this._makeRequest('v1beta1/{+workspace}:moveFile', 'POST', params);
    this.projects.locations.repositories.workspaces.writeFile = (params) => this._makeRequest('v1beta1/{+workspace}:writeFile', 'POST', params);

    this.projects.locations.repositories.releaseConfigs = {};
    this.projects.locations.repositories.releaseConfigs.list = (params) => this._makeRequest('v1beta1/{+parent}/releaseConfigs', 'GET', params);
    this.projects.locations.repositories.releaseConfigs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.repositories.releaseConfigs.create = (params) => this._makeRequest('v1beta1/{+parent}/releaseConfigs', 'POST', params);
    this.projects.locations.repositories.releaseConfigs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.releaseConfigs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.repositories.compilationResults = {};
    this.projects.locations.repositories.compilationResults.list = (params) => this._makeRequest('v1beta1/{+parent}/compilationResults', 'GET', params);
    this.projects.locations.repositories.compilationResults.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.repositories.compilationResults.create = (params) => this._makeRequest('v1beta1/{+parent}/compilationResults', 'POST', params);
    this.projects.locations.repositories.compilationResults.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'GET', params);

    this.projects.locations.repositories.workflowConfigs = {};
    this.projects.locations.repositories.workflowConfigs.list = (params) => this._makeRequest('v1beta1/{+parent}/workflowConfigs', 'GET', params);
    this.projects.locations.repositories.workflowConfigs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.repositories.workflowConfigs.create = (params) => this._makeRequest('v1beta1/{+parent}/workflowConfigs', 'POST', params);
    this.projects.locations.repositories.workflowConfigs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.workflowConfigs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.repositories.workflowInvocations = {};
    this.projects.locations.repositories.workflowInvocations.list = (params) => this._makeRequest('v1beta1/{+parent}/workflowInvocations', 'GET', params);
    this.projects.locations.repositories.workflowInvocations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.locations.repositories.workflowInvocations.create = (params) => this._makeRequest('v1beta1/{+parent}/workflowInvocations', 'POST', params);
    this.projects.locations.repositories.workflowInvocations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.locations.repositories.workflowInvocations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);
    this.projects.locations.repositories.workflowInvocations.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'GET', params);
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
