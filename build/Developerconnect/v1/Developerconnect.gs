
/**
 * Google Apps Script client library for the Developer Connect API
 * Documentation URL: http://cloud.google.com/developer-connect/docs/overview
 * @class
 */
class Developerconnect {
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
    this._rootUrl = 'https://developerconnect.googleapis.com/';
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

    this.projects.locations.connections = {};
    this.projects.locations.connections.list = (params) => this._makeRequest('v1/{+parent}/connections', 'GET', params);
    this.projects.locations.connections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.connections.create = (params) => this._makeRequest('v1/{+parent}/connections', 'POST', params);
    this.projects.locations.connections.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.connections.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.connections.fetchLinkableGitRepositories = (params) => this._makeRequest('v1/{+connection}:fetchLinkableGitRepositories', 'GET', params);
    this.projects.locations.connections.fetchGitHubInstallations = (params) => this._makeRequest('v1/{+connection}:fetchGitHubInstallations', 'GET', params);
    this.projects.locations.connections.processGitHubEnterpriseWebhook = (params) => this._makeRequest('v1/{+parent}/connections:processGitHubEnterpriseWebhook', 'POST', params);

    this.projects.locations.connections.gitRepositoryLinks = {};
    this.projects.locations.connections.gitRepositoryLinks.create = (params) => this._makeRequest('v1/{+parent}/gitRepositoryLinks', 'POST', params);
    this.projects.locations.connections.gitRepositoryLinks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.connections.gitRepositoryLinks.list = (params) => this._makeRequest('v1/{+parent}/gitRepositoryLinks', 'GET', params);
    this.projects.locations.connections.gitRepositoryLinks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.connections.gitRepositoryLinks.fetchReadWriteToken = (params) => this._makeRequest('v1/{+gitRepositoryLink}:fetchReadWriteToken', 'POST', params);
    this.projects.locations.connections.gitRepositoryLinks.fetchReadToken = (params) => this._makeRequest('v1/{+gitRepositoryLink}:fetchReadToken', 'POST', params);
    this.projects.locations.connections.gitRepositoryLinks.fetchGitRefs = (params) => this._makeRequest('v1/{+gitRepositoryLink}:fetchGitRefs', 'GET', params);
    this.projects.locations.connections.gitRepositoryLinks.processGitLabEnterpriseWebhook = (params) => this._makeRequest('v1/{+name}:processGitLabEnterpriseWebhook', 'POST', params);
    this.projects.locations.connections.gitRepositoryLinks.processGitLabWebhook = (params) => this._makeRequest('v1/{+name}:processGitLabWebhook', 'POST', params);
    this.projects.locations.connections.gitRepositoryLinks.processBitbucketDataCenterWebhook = (params) => this._makeRequest('v1/{+name}:processBitbucketDataCenterWebhook', 'POST', params);
    this.projects.locations.connections.gitRepositoryLinks.processBitbucketCloudWebhook = (params) => this._makeRequest('v1/{+name}:processBitbucketCloudWebhook', 'POST', params);

    this.projects.locations.accountConnectors = {};
    this.projects.locations.accountConnectors.list = (params) => this._makeRequest('v1/{+parent}/accountConnectors', 'GET', params);
    this.projects.locations.accountConnectors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.accountConnectors.create = (params) => this._makeRequest('v1/{+parent}/accountConnectors', 'POST', params);
    this.projects.locations.accountConnectors.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.accountConnectors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.accountConnectors.users = {};
    this.projects.locations.accountConnectors.users.fetchAccessToken = (params) => this._makeRequest('v1/{+accountConnector}/users:fetchAccessToken', 'POST', params);
    this.projects.locations.accountConnectors.users.list = (params) => this._makeRequest('v1/{+parent}/users', 'GET', params);
    this.projects.locations.accountConnectors.users.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.projects.locations.accountConnectors.users.fetchSelf = (params) => this._makeRequest('v1/{+name}/users:fetchSelf', 'GET', params);
    this.projects.locations.accountConnectors.users.deleteSelf = (params) => this._makeRequest('v1/{+name}/users:deleteSelf', 'DELETE', params);

    this.projects.locations.insightsConfigs = {};
    this.projects.locations.insightsConfigs.list = (params) => this._makeRequest('v1/{+parent}/insightsConfigs', 'GET', params);
    this.projects.locations.insightsConfigs.create = (params) => this._makeRequest('v1/{+parent}/insightsConfigs', 'POST', params);
    this.projects.locations.insightsConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.projects.locations.insightsConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.projects.locations.insightsConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
