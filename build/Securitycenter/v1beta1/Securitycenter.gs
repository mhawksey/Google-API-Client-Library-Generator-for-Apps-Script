
/**
 * Google Apps Script client library for the Security Command Center API
 * Documentation URL: https://cloud.google.com/security-command-center
 * @class
 */
class Securitycenter {
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
    this._rootUrl = 'https://securitycenter.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.organizations = {};
    this.organizations.getOrganizationSettings = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.organizations.updateOrganizationSettings = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.organizations.operations = {};
    this.organizations.operations.list = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.organizations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.organizations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
    this.organizations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.organizations.sources = {};
    this.organizations.sources.create = (params) => this._makeRequest('v1beta1/{+parent}/sources', 'POST', params);
    this.organizations.sources.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'POST', params);
    this.organizations.sources.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);
    this.organizations.sources.list = (params) => this._makeRequest('v1beta1/{+parent}/sources', 'GET', params);
    this.organizations.sources.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);
    this.organizations.sources.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);
    this.organizations.sources.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.organizations.sources.findings = {};
    this.organizations.sources.findings.create = (params) => this._makeRequest('v1beta1/{+parent}/findings', 'POST', params);
    this.organizations.sources.findings.group = (params) => this._makeRequest('v1beta1/{+parent}/findings:group', 'POST', params);
    this.organizations.sources.findings.list = (params) => this._makeRequest('v1beta1/{+parent}/findings', 'GET', params);
    this.organizations.sources.findings.setState = (params) => this._makeRequest('v1beta1/{+name}:setState', 'POST', params);
    this.organizations.sources.findings.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
    this.organizations.sources.findings.updateSecurityMarks = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.organizations.assets = {};
    this.organizations.assets.group = (params) => this._makeRequest('v1beta1/{+parent}/assets:group', 'POST', params);
    this.organizations.assets.list = (params) => this._makeRequest('v1beta1/{+parent}/assets', 'GET', params);
    this.organizations.assets.runDiscovery = (params) => this._makeRequest('v1beta1/{+parent}/assets:runDiscovery', 'POST', params);
    this.organizations.assets.updateSecurityMarks = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);
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
