
/**
 * Google Apps Script client library for the Drive Labels API
 * Documentation URL: https://developers.google.com/workspace/drive/labels
 * @class
 */
class Drivelabels {
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
    this._rootUrl = 'https://drivelabels.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.users = {};
    this.users.getCapabilities = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);

    this.labels = {};
    this.labels.list = (params) => this._makeRequest('v2beta/labels', 'GET', params);
    this.labels.get = (params) => this._makeRequest('v2beta/{+name}', 'GET', params);
    this.labels.create = (params) => this._makeRequest('v2beta/labels', 'POST', params);
    this.labels.delta = (params) => this._makeRequest('v2beta/{+name}:delta', 'POST', params);
    this.labels.updateLabelCopyMode = (params) => this._makeRequest('v2beta/{+name}:updateLabelCopyMode', 'POST', params);
    this.labels.publish = (params) => this._makeRequest('v2beta/{+name}:publish', 'POST', params);
    this.labels.disable = (params) => this._makeRequest('v2beta/{+name}:disable', 'POST', params);
    this.labels.enable = (params) => this._makeRequest('v2beta/{+name}:enable', 'POST', params);
    this.labels.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);
    this.labels.updatePermissions = (params) => this._makeRequest('v2beta/{+parent}/permissions', 'PATCH', params);
    this.labels.updateLabelEnabledAppSettings = (params) => this._makeRequest('v2beta/{+name}:updateLabelEnabledAppSettings', 'POST', params);

    this.labels.permissions = {};
    this.labels.permissions.list = (params) => this._makeRequest('v2beta/{+parent}/permissions', 'GET', params);
    this.labels.permissions.create = (params) => this._makeRequest('v2beta/{+parent}/permissions', 'POST', params);
    this.labels.permissions.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);
    this.labels.permissions.batchUpdate = (params) => this._makeRequest('v2beta/{+parent}/permissions:batchUpdate', 'POST', params);
    this.labels.permissions.batchDelete = (params) => this._makeRequest('v2beta/{+parent}/permissions:batchDelete', 'POST', params);

    this.labels.revisions = {};
    this.labels.revisions.updatePermissions = (params) => this._makeRequest('v2beta/{+parent}/permissions', 'PATCH', params);

    this.labels.revisions.permissions = {};
    this.labels.revisions.permissions.list = (params) => this._makeRequest('v2beta/{+parent}/permissions', 'GET', params);
    this.labels.revisions.permissions.create = (params) => this._makeRequest('v2beta/{+parent}/permissions', 'POST', params);
    this.labels.revisions.permissions.delete = (params) => this._makeRequest('v2beta/{+name}', 'DELETE', params);
    this.labels.revisions.permissions.batchUpdate = (params) => this._makeRequest('v2beta/{+parent}/permissions:batchUpdate', 'POST', params);
    this.labels.revisions.permissions.batchDelete = (params) => this._makeRequest('v2beta/{+parent}/permissions:batchDelete', 'POST', params);

    this.labels.revisions.locks = {};
    this.labels.revisions.locks.list = (params) => this._makeRequest('v2beta/{+parent}/locks', 'GET', params);

    this.labels.locks = {};
    this.labels.locks.list = (params) => this._makeRequest('v2beta/{+parent}/locks', 'GET', params);

    this.limits = {};
    this.limits.getLabel = (params) => this._makeRequest('v2beta/limits/label', 'GET', params);
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
