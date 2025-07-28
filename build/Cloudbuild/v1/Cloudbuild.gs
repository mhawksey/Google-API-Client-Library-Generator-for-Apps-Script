
/**
 * Google Apps Script client library for the Cloud Build API
 * Documentation URL: https://cloud.google.com/cloud-build/docs/
 * @class
 */
class Cloudbuild {
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
    this._rootUrl = 'https://cloudbuild.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects = {};

    this.projects.builds = {};
    this.projects.builds.create = (params) => this._makeRequest('v1/projects/{projectId}/builds', 'POST', params);
    this.projects.builds.get = (params) => this._makeRequest('v1/projects/{projectId}/builds/{id}', 'GET', params);
    this.projects.builds.list = (params) => this._makeRequest('v1/projects/{projectId}/builds', 'GET', params);
    this.projects.builds.cancel = (params) => this._makeRequest('v1/projects/{projectId}/builds/{id}:cancel', 'POST', params);
    this.projects.builds.retry = (params) => this._makeRequest('v1/projects/{projectId}/builds/{id}:retry', 'POST', params);
    this.projects.builds.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);

    this.projects.triggers = {};
    this.projects.triggers.create = (params) => this._makeRequest('v1/projects/{projectId}/triggers', 'POST', params);
    this.projects.triggers.get = (params) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}', 'GET', params);
    this.projects.triggers.list = (params) => this._makeRequest('v1/projects/{projectId}/triggers', 'GET', params);
    this.projects.triggers.delete = (params) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}', 'DELETE', params);
    this.projects.triggers.patch = (params) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}', 'PATCH', params);
    this.projects.triggers.run = (params) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}:run', 'POST', params);
    this.projects.triggers.webhook = (params) => this._makeRequest('v1/projects/{projectId}/triggers/{trigger}:webhook', 'POST', params);

    this.projects.githubEnterpriseConfigs = {};
    this.projects.githubEnterpriseConfigs.create = (params) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'POST', params);
    this.projects.githubEnterpriseConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.githubEnterpriseConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.githubEnterpriseConfigs.list = (params) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'GET', params);
    this.projects.githubEnterpriseConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations = {};
    this.projects.locations.getDefaultServiceAccount = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.builds = {};
    this.projects.locations.builds.create = (params) => this._makeRequest('v1/{+parent}/builds', 'POST', params);
    this.projects.locations.builds.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.builds.list = (params) => this._makeRequest('v1/{+parent}/builds', 'GET', params);
    this.projects.locations.builds.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
    this.projects.locations.builds.retry = (params) => this._makeRequest('v1/{+name}:retry', 'POST', params);
    this.projects.locations.builds.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);

    this.projects.locations.triggers = {};
    this.projects.locations.triggers.create = (params) => this._makeRequest('v1/{+parent}/triggers', 'POST', params);
    this.projects.locations.triggers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.triggers.list = (params) => this._makeRequest('v1/{+parent}/triggers', 'GET', params);
    this.projects.locations.triggers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.triggers.patch = (params) => this._makeRequest('v1/{+resourceName}', 'PATCH', params);
    this.projects.locations.triggers.run = (params) => this._makeRequest('v1/{+name}:run', 'POST', params);
    this.projects.locations.triggers.webhook = (params) => this._makeRequest('v1/{+name}:webhook', 'POST', params);

    this.projects.locations.bitbucketServerConfigs = {};
    this.projects.locations.bitbucketServerConfigs.create = (params) => this._makeRequest('v1/{+parent}/bitbucketServerConfigs', 'POST', params);
    this.projects.locations.bitbucketServerConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.bitbucketServerConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.bitbucketServerConfigs.list = (params) => this._makeRequest('v1/{+parent}/bitbucketServerConfigs', 'GET', params);
    this.projects.locations.bitbucketServerConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.bitbucketServerConfigs.removeBitbucketServerConnectedRepository = (params) => this._makeRequest('v1/{+config}:removeBitbucketServerConnectedRepository', 'POST', params);

    this.projects.locations.bitbucketServerConfigs.repos = {};
    this.projects.locations.bitbucketServerConfigs.repos.list = (params) => this._makeRequest('v1/{+parent}/repos', 'GET', params);

    this.projects.locations.bitbucketServerConfigs.connectedRepositories = {};
    this.projects.locations.bitbucketServerConfigs.connectedRepositories.batchCreate = (params) => this._makeRequest('v1/{+parent}/connectedRepositories:batchCreate', 'POST', params);

    this.projects.locations.gitLabConfigs = {};
    this.projects.locations.gitLabConfigs.create = (params) => this._makeRequest('v1/{+parent}/gitLabConfigs', 'POST', params);
    this.projects.locations.gitLabConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.gitLabConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.gitLabConfigs.list = (params) => this._makeRequest('v1/{+parent}/gitLabConfigs', 'GET', params);
    this.projects.locations.gitLabConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.gitLabConfigs.removeGitLabConnectedRepository = (params) => this._makeRequest('v1/{+config}:removeGitLabConnectedRepository', 'POST', params);

    this.projects.locations.gitLabConfigs.repos = {};
    this.projects.locations.gitLabConfigs.repos.list = (params) => this._makeRequest('v1/{+parent}/repos', 'GET', params);

    this.projects.locations.gitLabConfigs.connectedRepositories = {};
    this.projects.locations.gitLabConfigs.connectedRepositories.batchCreate = (params) => this._makeRequest('v1/{+parent}/connectedRepositories:batchCreate', 'POST', params);

    this.projects.locations.githubEnterpriseConfigs = {};
    this.projects.locations.githubEnterpriseConfigs.create = (params) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'POST', params);
    this.projects.locations.githubEnterpriseConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.githubEnterpriseConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.githubEnterpriseConfigs.list = (params) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'GET', params);
    this.projects.locations.githubEnterpriseConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.workerPools = {};
    this.projects.locations.workerPools.create = (params) => this._makeRequest('v1/{+parent}/workerPools', 'POST', params);
    this.projects.locations.workerPools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.workerPools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.workerPools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.workerPools.list = (params) => this._makeRequest('v1/{+parent}/workerPools', 'GET', params);

    this.githubDotComWebhook = {};
    this.githubDotComWebhook.receive = (params) => this._makeRequest('v1/githubDotComWebhook:receive', 'POST', params);

    this.locations = {};
    this.locations.regionalWebhook = (params) => this._makeRequest('v1/{+location}/regionalWebhook', 'POST', params);

    this.v1 = {};
    this.v1.webhook = (params) => this._makeRequest('v1/webhook', 'POST', params);
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
