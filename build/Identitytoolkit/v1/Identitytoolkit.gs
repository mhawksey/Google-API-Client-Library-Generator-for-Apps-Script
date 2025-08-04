
/**
 * Google Apps Script client library for the Identity Toolkit API
 * Documentation URL: https://cloud.google.com/identity-platform
 * @class
 */
class Identitytoolkit {
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
    this._rootUrl = 'https://identitytoolkit.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};
    this.accounts.createAuthUri = (params) => this._makeRequest('v1/accounts:createAuthUri', 'POST', params);
    this.accounts.sendVerificationCode = (params) => this._makeRequest('v1/accounts:sendVerificationCode', 'POST', params);
    this.accounts.signInWithCustomToken = (params) => this._makeRequest('v1/accounts:signInWithCustomToken', 'POST', params);
    this.accounts.signInWithGameCenter = (params) => this._makeRequest('v1/accounts:signInWithGameCenter', 'POST', params);
    this.accounts.signInWithPassword = (params) => this._makeRequest('v1/accounts:signInWithPassword', 'POST', params);
    this.accounts.signInWithEmailLink = (params) => this._makeRequest('v1/accounts:signInWithEmailLink', 'POST', params);
    this.accounts.signInWithIdp = (params) => this._makeRequest('v1/accounts:signInWithIdp', 'POST', params);
    this.accounts.signInWithPhoneNumber = (params) => this._makeRequest('v1/accounts:signInWithPhoneNumber', 'POST', params);
    this.accounts.verifyIosClient = (params) => this._makeRequest('v1/accounts:verifyIosClient', 'POST', params);
    this.accounts.signUp = (params) => this._makeRequest('v1/accounts:signUp', 'POST', params);
    this.accounts.issueSamlResponse = (params) => this._makeRequest('v1/accounts:issueSamlResponse', 'POST', params);
    this.accounts.delete = (params) => this._makeRequest('v1/accounts:delete', 'POST', params);
    this.accounts.lookup = (params) => this._makeRequest('v1/accounts:lookup', 'POST', params);
    this.accounts.sendOobCode = (params) => this._makeRequest('v1/accounts:sendOobCode', 'POST', params);
    this.accounts.resetPassword = (params) => this._makeRequest('v1/accounts:resetPassword', 'POST', params);
    this.accounts.update = (params) => this._makeRequest('v1/accounts:update', 'POST', params);

    this.v1 = {};
    this.v1.getPublicKeys = (params) => this._makeRequest('v1/publicKeys', 'GET', params);
    this.v1.getRecaptchaParams = (params) => this._makeRequest('v1/recaptchaParams', 'GET', params);
    this.v1.getProjects = (params) => this._makeRequest('v1/projects', 'GET', params);
    this.v1.getSessionCookiePublicKeys = (params) => this._makeRequest('v1/sessionCookiePublicKeys', 'GET', params);

    this.projects = {};
    this.projects.accounts = (params) => this._makeRequest('v1/projects/{+targetProjectId}/accounts', 'POST', params);
    this.projects.queryAccounts = (params) => this._makeRequest('v1/projects/{+targetProjectId}:queryAccounts', 'POST', params);
    this.projects.createSessionCookie = (params) => this._makeRequest('v1/projects/{+targetProjectId}:createSessionCookie', 'POST', params);

    this.projects.tenants = {};
    this.projects.tenants.accounts = (params) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts', 'POST', params);
    this.projects.tenants.createSessionCookie = (params) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}:createSessionCookie', 'POST', params);

    this.projects.tenants.accounts = {};
    this.projects.tenants.accounts.batchDelete = (params) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:batchDelete', 'POST', params);
    this.projects.tenants.accounts.delete = (params) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:delete', 'POST', params);
    this.projects.tenants.accounts.batchGet = (params) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:batchGet', 'GET', params);
    this.projects.tenants.accounts.lookup = (params) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:lookup', 'POST', params);
    this.projects.tenants.accounts.sendOobCode = (params) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:sendOobCode', 'POST', params);
    this.projects.tenants.accounts.query = (params) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:query', 'POST', params);
    this.projects.tenants.accounts.update = (params) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:update', 'POST', params);
    this.projects.tenants.accounts.batchCreate = (params) => this._makeRequest('v1/projects/{+targetProjectId}/tenants/{+tenantId}/accounts:batchCreate', 'POST', params);

    this.projects.accounts = {};
    this.projects.accounts.batchDelete = (params) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:batchDelete', 'POST', params);
    this.projects.accounts.delete = (params) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:delete', 'POST', params);
    this.projects.accounts.batchGet = (params) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:batchGet', 'GET', params);
    this.projects.accounts.lookup = (params) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:lookup', 'POST', params);
    this.projects.accounts.sendOobCode = (params) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:sendOobCode', 'POST', params);
    this.projects.accounts.query = (params) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:query', 'POST', params);
    this.projects.accounts.update = (params) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:update', 'POST', params);
    this.projects.accounts.batchCreate = (params) => this._makeRequest('v1/projects/{+targetProjectId}/accounts:batchCreate', 'POST', params);
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
