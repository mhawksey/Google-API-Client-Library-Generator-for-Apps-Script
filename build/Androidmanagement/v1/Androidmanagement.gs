
/**
 * Google Apps Script client library for the Android Management API
 * Documentation URL: https://developers.google.com/android/management
 * @class
 */
class Androidmanagement {
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
    this._rootUrl = 'https://androidmanagement.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.signupUrls = {};
    this.signupUrls.create = (params) => this._makeRequest('v1/signupUrls', 'POST', params);

    this.enterprises = {};
    this.enterprises.create = (params) => this._makeRequest('v1/enterprises', 'POST', params);
    this.enterprises.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.enterprises.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.enterprises.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.enterprises.list = (params) => this._makeRequest('v1/enterprises', 'GET', params);
    this.enterprises.generateEnterpriseUpgradeUrl = (params) => this._makeRequest('v1/{+name}:generateEnterpriseUpgradeUrl', 'POST', params);

    this.enterprises.enrollmentTokens = {};
    this.enterprises.enrollmentTokens.create = (params) => this._makeRequest('v1/{+parent}/enrollmentTokens', 'POST', params);
    this.enterprises.enrollmentTokens.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.enterprises.enrollmentTokens.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.enterprises.enrollmentTokens.list = (params) => this._makeRequest('v1/{+parent}/enrollmentTokens', 'GET', params);

    this.enterprises.webTokens = {};
    this.enterprises.webTokens.create = (params) => this._makeRequest('v1/{+parent}/webTokens', 'POST', params);

    this.enterprises.devices = {};
    this.enterprises.devices.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.enterprises.devices.list = (params) => this._makeRequest('v1/{+parent}/devices', 'GET', params);
    this.enterprises.devices.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.enterprises.devices.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.enterprises.devices.issueCommand = (params) => this._makeRequest('v1/{+name}:issueCommand', 'POST', params);

    this.enterprises.devices.operations = {};
    this.enterprises.devices.operations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.enterprises.devices.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.enterprises.devices.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.enterprises.policies = {};
    this.enterprises.policies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.enterprises.policies.list = (params) => this._makeRequest('v1/{+parent}/policies', 'GET', params);
    this.enterprises.policies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.enterprises.policies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
    this.enterprises.policies.modifyPolicyApplications = (params) => this._makeRequest('v1/{+name}:modifyPolicyApplications', 'POST', params);
    this.enterprises.policies.removePolicyApplications = (params) => this._makeRequest('v1/{+name}:removePolicyApplications', 'POST', params);

    this.enterprises.applications = {};
    this.enterprises.applications.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.enterprises.webApps = {};
    this.enterprises.webApps.create = (params) => this._makeRequest('v1/{+parent}/webApps', 'POST', params);
    this.enterprises.webApps.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.enterprises.webApps.list = (params) => this._makeRequest('v1/{+parent}/webApps', 'GET', params);
    this.enterprises.webApps.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);
    this.enterprises.webApps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.enterprises.migrationTokens = {};
    this.enterprises.migrationTokens.create = (params) => this._makeRequest('v1/{+parent}/migrationTokens', 'POST', params);
    this.enterprises.migrationTokens.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
    this.enterprises.migrationTokens.list = (params) => this._makeRequest('v1/{+parent}/migrationTokens', 'GET', params);

    this.provisioningInfo = {};
    this.provisioningInfo.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
