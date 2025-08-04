
/**
 * Google Apps Script client library for the Secure Source Manager API
 * Documentation URL: https://cloud.google.com/secure-source-manager
 * @class
 */
class Securesourcemanager {
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
    this._rootUrl = 'https://securesourcemanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.instances = {};
    this.projects.locations.instances.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.instances.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.instances.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.instances.list = (params) => this._makeRequest('v1/{+parent}/instances', 'GET', params);
    this.projects.locations.instances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.instances.create = (params) => this._makeRequest('v1/{+parent}/instances', 'POST', params);
    this.projects.locations.instances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.repositories = {};
    this.projects.locations.repositories.list = (params) => this._makeRequest('v1/{+parent}/repositories', 'GET', params);
    this.projects.locations.repositories.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.create = (params) => this._makeRequest('v1/{+parent}/repositories', 'POST', params);
    this.projects.locations.repositories.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.repositories.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
    this.projects.locations.repositories.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);
    this.projects.locations.repositories.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
    this.projects.locations.repositories.fetchTree = (params) => this._makeRequest('v1/{+repository}:fetchTree', 'GET', params);
    this.projects.locations.repositories.fetchBlob = (params) => this._makeRequest('v1/{+repository}:fetchBlob', 'GET', params);

    this.projects.locations.repositories.hooks = {};
    this.projects.locations.repositories.hooks.list = (params) => this._makeRequest('v1/{+parent}/hooks', 'GET', params);
    this.projects.locations.repositories.hooks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.hooks.create = (params) => this._makeRequest('v1/{+parent}/hooks', 'POST', params);
    this.projects.locations.repositories.hooks.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.hooks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.repositories.branchRules = {};
    this.projects.locations.repositories.branchRules.create = (params) => this._makeRequest('v1/{+parent}/branchRules', 'POST', params);
    this.projects.locations.repositories.branchRules.list = (params) => this._makeRequest('v1/{+parent}/branchRules', 'GET', params);
    this.projects.locations.repositories.branchRules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.branchRules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.branchRules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.repositories.pullRequests = {};
    this.projects.locations.repositories.pullRequests.create = (params) => this._makeRequest('v1/{+parent}/pullRequests', 'POST', params);
    this.projects.locations.repositories.pullRequests.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.pullRequests.list = (params) => this._makeRequest('v1/{+parent}/pullRequests', 'GET', params);
    this.projects.locations.repositories.pullRequests.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.pullRequests.merge = (params) => this._makeRequest('v1/{+name}:merge', 'POST', params);
    this.projects.locations.repositories.pullRequests.open = (params) => this._makeRequest('v1/{+name}:open', 'POST', params);
    this.projects.locations.repositories.pullRequests.close = (params) => this._makeRequest('v1/{+name}:close', 'POST', params);
    this.projects.locations.repositories.pullRequests.listFileDiffs = (params) => this._makeRequest('v1/{+name}:listFileDiffs', 'GET', params);

    this.projects.locations.repositories.pullRequests.pullRequestComments = {};
    this.projects.locations.repositories.pullRequests.pullRequestComments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.pullRequests.pullRequestComments.list = (params) => this._makeRequest('v1/{+parent}/pullRequestComments', 'GET', params);
    this.projects.locations.repositories.pullRequests.pullRequestComments.create = (params) => this._makeRequest('v1/{+parent}/pullRequestComments', 'POST', params);
    this.projects.locations.repositories.pullRequests.pullRequestComments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.pullRequests.pullRequestComments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.repositories.pullRequests.pullRequestComments.batchCreate = (params) => this._makeRequest('v1/{+parent}/pullRequestComments:batchCreate', 'POST', params);
    this.projects.locations.repositories.pullRequests.pullRequestComments.resolve = (params) => this._makeRequest('v1/{+parent}/pullRequestComments:resolve', 'POST', params);
    this.projects.locations.repositories.pullRequests.pullRequestComments.unresolve = (params) => this._makeRequest('v1/{+parent}/pullRequestComments:unresolve', 'POST', params);

    this.projects.locations.repositories.issues = {};
    this.projects.locations.repositories.issues.create = (params) => this._makeRequest('v1/{+parent}/issues', 'POST', params);
    this.projects.locations.repositories.issues.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.issues.list = (params) => this._makeRequest('v1/{+parent}/issues', 'GET', params);
    this.projects.locations.repositories.issues.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.issues.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.repositories.issues.open = (params) => this._makeRequest('v1/{+name}:open', 'POST', params);
    this.projects.locations.repositories.issues.close = (params) => this._makeRequest('v1/{+name}:close', 'POST', params);

    this.projects.locations.repositories.issues.issueComments = {};
    this.projects.locations.repositories.issues.issueComments.create = (params) => this._makeRequest('v1/{+parent}/issueComments', 'POST', params);
    this.projects.locations.repositories.issues.issueComments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.repositories.issues.issueComments.list = (params) => this._makeRequest('v1/{+parent}/issueComments', 'GET', params);
    this.projects.locations.repositories.issues.issueComments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.repositories.issues.issueComments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
