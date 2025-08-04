
/**
 * Google Apps Script client library for the Google Vault API
 * Documentation URL: https://developers.google.com/workspace/vault
 * @class
 */
class Vault {
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
    this._rootUrl = 'https://vault.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};
    this.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.matters = {};
    this.matters.create = (params) => this._makeRequest('v1/matters', 'POST', params);
    this.matters.update = (params) => this._makeRequest('v1/matters/{matterId}', 'PUT', params);
    this.matters.close = (params) => this._makeRequest('v1/matters/{matterId}:close', 'POST', params);
    this.matters.reopen = (params) => this._makeRequest('v1/matters/{matterId}:reopen', 'POST', params);
    this.matters.delete = (params) => this._makeRequest('v1/matters/{matterId}', 'DELETE', params);
    this.matters.undelete = (params) => this._makeRequest('v1/matters/{matterId}:undelete', 'POST', params);
    this.matters.get = (params) => this._makeRequest('v1/matters/{matterId}', 'GET', params);
    this.matters.list = (params) => this._makeRequest('v1/matters', 'GET', params);
    this.matters.addPermissions = (params) => this._makeRequest('v1/matters/{matterId}:addPermissions', 'POST', params);
    this.matters.removePermissions = (params) => this._makeRequest('v1/matters/{matterId}:removePermissions', 'POST', params);
    this.matters.count = (params) => this._makeRequest('v1/matters/{matterId}:count', 'POST', params);

    this.matters.exports = {};
    this.matters.exports.create = (params) => this._makeRequest('v1/matters/{matterId}/exports', 'POST', params);
    this.matters.exports.delete = (params) => this._makeRequest('v1/matters/{matterId}/exports/{exportId}', 'DELETE', params);
    this.matters.exports.get = (params) => this._makeRequest('v1/matters/{matterId}/exports/{exportId}', 'GET', params);
    this.matters.exports.list = (params) => this._makeRequest('v1/matters/{matterId}/exports', 'GET', params);

    this.matters.holds = {};
    this.matters.holds.create = (params) => this._makeRequest('v1/matters/{matterId}/holds', 'POST', params);
    this.matters.holds.update = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}', 'PUT', params);
    this.matters.holds.delete = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}', 'DELETE', params);
    this.matters.holds.get = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}', 'GET', params);
    this.matters.holds.list = (params) => this._makeRequest('v1/matters/{matterId}/holds', 'GET', params);
    this.matters.holds.addHeldAccounts = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}:addHeldAccounts', 'POST', params);
    this.matters.holds.removeHeldAccounts = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}:removeHeldAccounts', 'POST', params);

    this.matters.holds.accounts = {};
    this.matters.holds.accounts.create = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}/accounts', 'POST', params);
    this.matters.holds.accounts.delete = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}/accounts/{accountId}', 'DELETE', params);
    this.matters.holds.accounts.list = (params) => this._makeRequest('v1/matters/{matterId}/holds/{holdId}/accounts', 'GET', params);

    this.matters.savedQueries = {};
    this.matters.savedQueries.create = (params) => this._makeRequest('v1/matters/{matterId}/savedQueries', 'POST', params);
    this.matters.savedQueries.delete = (params) => this._makeRequest('v1/matters/{matterId}/savedQueries/{savedQueryId}', 'DELETE', params);
    this.matters.savedQueries.get = (params) => this._makeRequest('v1/matters/{matterId}/savedQueries/{savedQueryId}', 'GET', params);
    this.matters.savedQueries.list = (params) => this._makeRequest('v1/matters/{matterId}/savedQueries', 'GET', params);
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
