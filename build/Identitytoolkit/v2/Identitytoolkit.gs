
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

    this.projects = {};
    this.projects.getConfig = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.updateConfig = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.identityPlatform = {};
    this.projects.identityPlatform.initializeAuth = (params) => this._makeRequest('v2/{+project}/identityPlatform:initializeAuth', 'POST', params);

    this.projects.defaultSupportedIdpConfigs = {};
    this.projects.defaultSupportedIdpConfigs.create = (params) => this._makeRequest('v2/{+parent}/defaultSupportedIdpConfigs', 'POST', params);
    this.projects.defaultSupportedIdpConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.defaultSupportedIdpConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.defaultSupportedIdpConfigs.list = (params) => this._makeRequest('v2/{+parent}/defaultSupportedIdpConfigs', 'GET', params);
    this.projects.defaultSupportedIdpConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.oauthIdpConfigs = {};
    this.projects.oauthIdpConfigs.create = (params) => this._makeRequest('v2/{+parent}/oauthIdpConfigs', 'POST', params);
    this.projects.oauthIdpConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.oauthIdpConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.oauthIdpConfigs.list = (params) => this._makeRequest('v2/{+parent}/oauthIdpConfigs', 'GET', params);
    this.projects.oauthIdpConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.inboundSamlConfigs = {};
    this.projects.inboundSamlConfigs.create = (params) => this._makeRequest('v2/{+parent}/inboundSamlConfigs', 'POST', params);
    this.projects.inboundSamlConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.inboundSamlConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.inboundSamlConfigs.list = (params) => this._makeRequest('v2/{+parent}/inboundSamlConfigs', 'GET', params);
    this.projects.inboundSamlConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.tenants = {};
    this.projects.tenants.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);
    this.projects.tenants.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'POST', params);
    this.projects.tenants.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);
    this.projects.tenants.create = (params) => this._makeRequest('v2/{+parent}/tenants', 'POST', params);
    this.projects.tenants.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.tenants.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.tenants.list = (params) => this._makeRequest('v2/{+parent}/tenants', 'GET', params);
    this.projects.tenants.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.tenants.defaultSupportedIdpConfigs = {};
    this.projects.tenants.defaultSupportedIdpConfigs.create = (params) => this._makeRequest('v2/{+parent}/defaultSupportedIdpConfigs', 'POST', params);
    this.projects.tenants.defaultSupportedIdpConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.tenants.defaultSupportedIdpConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.tenants.defaultSupportedIdpConfigs.list = (params) => this._makeRequest('v2/{+parent}/defaultSupportedIdpConfigs', 'GET', params);
    this.projects.tenants.defaultSupportedIdpConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.tenants.oauthIdpConfigs = {};
    this.projects.tenants.oauthIdpConfigs.create = (params) => this._makeRequest('v2/{+parent}/oauthIdpConfigs', 'POST', params);
    this.projects.tenants.oauthIdpConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.tenants.oauthIdpConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.tenants.oauthIdpConfigs.list = (params) => this._makeRequest('v2/{+parent}/oauthIdpConfigs', 'GET', params);
    this.projects.tenants.oauthIdpConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.tenants.inboundSamlConfigs = {};
    this.projects.tenants.inboundSamlConfigs.create = (params) => this._makeRequest('v2/{+parent}/inboundSamlConfigs', 'POST', params);
    this.projects.tenants.inboundSamlConfigs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
    this.projects.tenants.inboundSamlConfigs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
    this.projects.tenants.inboundSamlConfigs.list = (params) => this._makeRequest('v2/{+parent}/inboundSamlConfigs', 'GET', params);
    this.projects.tenants.inboundSamlConfigs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.defaultSupportedIdps = {};
    this.defaultSupportedIdps.list = (params) => this._makeRequest('v2/defaultSupportedIdps', 'GET', params);

    this.v2 = {};
    this.v2.getRecaptchaConfig = (params) => this._makeRequest('v2/recaptchaConfig', 'GET', params);
    this.v2.getPasswordPolicy = (params) => this._makeRequest('v2/passwordPolicy', 'GET', params);

    this.accounts = {};
    this.accounts.revokeToken = (params) => this._makeRequest('v2/accounts:revokeToken', 'POST', params);

    this.accounts.mfaEnrollment = {};
    this.accounts.mfaEnrollment.finalize = (params) => this._makeRequest('v2/accounts/mfaEnrollment:finalize', 'POST', params);
    this.accounts.mfaEnrollment.start = (params) => this._makeRequest('v2/accounts/mfaEnrollment:start', 'POST', params);
    this.accounts.mfaEnrollment.withdraw = (params) => this._makeRequest('v2/accounts/mfaEnrollment:withdraw', 'POST', params);

    this.accounts.mfaSignIn = {};
    this.accounts.mfaSignIn.finalize = (params) => this._makeRequest('v2/accounts/mfaSignIn:finalize', 'POST', params);
    this.accounts.mfaSignIn.start = (params) => this._makeRequest('v2/accounts/mfaSignIn:start', 'POST', params);
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
