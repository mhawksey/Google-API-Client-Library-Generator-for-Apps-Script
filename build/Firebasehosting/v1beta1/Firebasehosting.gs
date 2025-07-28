
/**
 * Google Apps Script client library for the Firebase Hosting API
 * Documentation URL: https://firebase.google.com/docs/hosting/
 * @class
 */
class Firebasehosting {
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
    this._rootUrl = 'https://firebasehosting.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.operations = {};
    this.projects.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.sites = {};
    this.projects.sites.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.sites.updateConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.sites.create = (params) => this._makeRequest('v1beta1/{+parent}/sites', 'POST', params);
    this.projects.sites.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.sites.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.sites.list = (params) => this._makeRequest('v1beta1/{+parent}/sites', 'GET', params);
    this.projects.sites.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.sites.customDomains = {};
    this.projects.sites.customDomains.create = (params) => this._makeRequest('v1beta1/{+parent}/customDomains', 'POST', params);
    this.projects.sites.customDomains.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.sites.customDomains.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.sites.customDomains.list = (params) => this._makeRequest('v1beta1/{+parent}/customDomains', 'GET', params);
    this.projects.sites.customDomains.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.sites.customDomains.undelete = (params) => this._makeRequest('v1beta1/{+name}:undelete', 'POST', params);

    this.projects.sites.customDomains.operations = {};
    this.projects.sites.customDomains.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);
    this.projects.sites.customDomains.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.sites.domains = {};
    this.projects.sites.domains.list = (params) => this._makeRequest('v1beta1/{+parent}/domains', 'GET', params);
    this.projects.sites.domains.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.sites.domains.create = (params) => this._makeRequest('v1beta1/{+parent}/domains', 'POST', params);
    this.projects.sites.domains.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);
    this.projects.sites.domains.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.sites.versions = {};
    this.projects.sites.versions.create = (params) => this._makeRequest('v1beta1/{+parent}/versions', 'POST', params);
    this.projects.sites.versions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.sites.versions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.projects.sites.versions.populateFiles = (params) => this._makeRequest('v1beta1/{+parent}:populateFiles', 'POST', params);
    this.projects.sites.versions.list = (params) => this._makeRequest('v1beta1/{+parent}/versions', 'GET', params);
    this.projects.sites.versions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.sites.versions.clone = (params) => this._makeRequest('v1beta1/{+parent}/versions:clone', 'POST', params);

    this.projects.sites.versions.files = {};
    this.projects.sites.versions.files.list = (params) => this._makeRequest('v1beta1/{+parent}/files', 'GET', params);

    this.projects.sites.releases = {};
    this.projects.sites.releases.list = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', params);
    this.projects.sites.releases.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.sites.releases.create = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', params);

    this.projects.sites.channels = {};
    this.projects.sites.channels.list = (params) => this._makeRequest('v1beta1/{+parent}/channels', 'GET', params);
    this.projects.sites.channels.create = (params) => this._makeRequest('v1beta1/{+parent}/channels', 'POST', params);
    this.projects.sites.channels.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.sites.channels.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.projects.sites.channels.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.sites.channels.releases = {};
    this.projects.sites.channels.releases.list = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', params);
    this.projects.sites.channels.releases.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.projects.sites.channels.releases.create = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', params);

    this.sites = {};
    this.sites.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.sites.updateConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.sites.domains = {};
    this.sites.domains.list = (params) => this._makeRequest('v1beta1/{+parent}/domains', 'GET', params);
    this.sites.domains.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.sites.domains.create = (params) => this._makeRequest('v1beta1/{+parent}/domains', 'POST', params);
    this.sites.domains.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);
    this.sites.domains.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.sites.versions = {};
    this.sites.versions.create = (params) => this._makeRequest('v1beta1/{+parent}/versions', 'POST', params);
    this.sites.versions.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.sites.versions.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.sites.versions.populateFiles = (params) => this._makeRequest('v1beta1/{+parent}:populateFiles', 'POST', params);
    this.sites.versions.list = (params) => this._makeRequest('v1beta1/{+parent}/versions', 'GET', params);
    this.sites.versions.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.sites.versions.clone = (params) => this._makeRequest('v1beta1/{+parent}/versions:clone', 'POST', params);

    this.sites.versions.files = {};
    this.sites.versions.files.list = (params) => this._makeRequest('v1beta1/{+parent}/files', 'GET', params);

    this.sites.releases = {};
    this.sites.releases.list = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', params);
    this.sites.releases.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.sites.releases.create = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', params);

    this.sites.channels = {};
    this.sites.channels.list = (params) => this._makeRequest('v1beta1/{+parent}/channels', 'GET', params);
    this.sites.channels.create = (params) => this._makeRequest('v1beta1/{+parent}/channels', 'POST', params);
    this.sites.channels.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.sites.channels.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.sites.channels.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.sites.channels.releases = {};
    this.sites.channels.releases.list = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'GET', params);
    this.sites.channels.releases.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.sites.channels.releases.create = (params) => this._makeRequest('v1beta1/{+parent}/releases', 'POST', params);
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
