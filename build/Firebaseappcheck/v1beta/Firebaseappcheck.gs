
/**
 * Google Apps Script client library for the Firebase App Check API
 * Documentation URL: https://firebase.google.com/docs/app-check
 * @class
 */
class Firebaseappcheck {
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
    this._rootUrl = 'https://firebaseappcheck.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.jwks = {};
    this.jwks.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.oauthClients = {};
    this.oauthClients.exchangeDebugToken = (params) => this._makeRequest('v1beta/{+app}:exchangeDebugToken', 'POST', params);
    this.oauthClients.generateAppAttestChallenge = (params) => this._makeRequest('v1beta/{+app}:generateAppAttestChallenge', 'POST', params);
    this.oauthClients.exchangeAppAttestAttestation = (params) => this._makeRequest('v1beta/{+app}:exchangeAppAttestAttestation', 'POST', params);
    this.oauthClients.exchangeAppAttestAssertion = (params) => this._makeRequest('v1beta/{+app}:exchangeAppAttestAssertion', 'POST', params);

    this.projects = {};
    this.projects.verifyAppCheckToken = (params) => this._makeRequest('v1beta/{+project}:verifyAppCheckToken', 'POST', params);

    this.projects.services = {};
    this.projects.services.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.services.list = (params) => this._makeRequest('v1beta/{+parent}/services', 'GET', params);
    this.projects.services.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.projects.services.batchUpdate = (params) => this._makeRequest('v1beta/{+parent}/services:batchUpdate', 'POST', params);

    this.projects.services.resourcePolicies = {};
    this.projects.services.resourcePolicies.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.services.resourcePolicies.list = (params) => this._makeRequest('v1beta/{+parent}/resourcePolicies', 'GET', params);
    this.projects.services.resourcePolicies.create = (params) => this._makeRequest('v1beta/{+parent}/resourcePolicies', 'POST', params);
    this.projects.services.resourcePolicies.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.projects.services.resourcePolicies.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
    this.projects.services.resourcePolicies.batchUpdate = (params) => this._makeRequest('v1beta/{+parent}/resourcePolicies:batchUpdate', 'POST', params);

    this.projects.apps = {};
    this.projects.apps.exchangeSafetyNetToken = (params) => this._makeRequest('v1beta/{+app}:exchangeSafetyNetToken', 'POST', params);
    this.projects.apps.generatePlayIntegrityChallenge = (params) => this._makeRequest('v1beta/{+app}:generatePlayIntegrityChallenge', 'POST', params);
    this.projects.apps.exchangePlayIntegrityToken = (params) => this._makeRequest('v1beta/{+app}:exchangePlayIntegrityToken', 'POST', params);
    this.projects.apps.exchangeDeviceCheckToken = (params) => this._makeRequest('v1beta/{+app}:exchangeDeviceCheckToken', 'POST', params);
    this.projects.apps.exchangeRecaptchaToken = (params) => this._makeRequest('v1beta/{+app}:exchangeRecaptchaToken', 'POST', params);
    this.projects.apps.exchangeRecaptchaV3Token = (params) => this._makeRequest('v1beta/{+app}:exchangeRecaptchaV3Token', 'POST', params);
    this.projects.apps.exchangeRecaptchaEnterpriseToken = (params) => this._makeRequest('v1beta/{+app}:exchangeRecaptchaEnterpriseToken', 'POST', params);
    this.projects.apps.exchangeCustomToken = (params) => this._makeRequest('v1beta/{+app}:exchangeCustomToken', 'POST', params);
    this.projects.apps.exchangeDebugToken = (params) => this._makeRequest('v1beta/{+app}:exchangeDebugToken', 'POST', params);
    this.projects.apps.generateAppAttestChallenge = (params) => this._makeRequest('v1beta/{+app}:generateAppAttestChallenge', 'POST', params);
    this.projects.apps.exchangeAppAttestAttestation = (params) => this._makeRequest('v1beta/{+app}:exchangeAppAttestAttestation', 'POST', params);
    this.projects.apps.exchangeAppAttestAssertion = (params) => this._makeRequest('v1beta/{+app}:exchangeAppAttestAssertion', 'POST', params);

    this.projects.apps.appAttestConfig = {};
    this.projects.apps.appAttestConfig.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.apps.appAttestConfig.batchGet = (params) => this._makeRequest('v1beta/{+parent}/apps/-/appAttestConfig:batchGet', 'GET', params);
    this.projects.apps.appAttestConfig.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    this.projects.apps.deviceCheckConfig = {};
    this.projects.apps.deviceCheckConfig.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.apps.deviceCheckConfig.batchGet = (params) => this._makeRequest('v1beta/{+parent}/apps/-/deviceCheckConfig:batchGet', 'GET', params);
    this.projects.apps.deviceCheckConfig.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    this.projects.apps.recaptchaConfig = {};
    this.projects.apps.recaptchaConfig.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.apps.recaptchaConfig.batchGet = (params) => this._makeRequest('v1beta/{+parent}/apps/-/recaptchaConfig:batchGet', 'GET', params);
    this.projects.apps.recaptchaConfig.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    this.projects.apps.recaptchaV3Config = {};
    this.projects.apps.recaptchaV3Config.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.apps.recaptchaV3Config.batchGet = (params) => this._makeRequest('v1beta/{+parent}/apps/-/recaptchaV3Config:batchGet', 'GET', params);
    this.projects.apps.recaptchaV3Config.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    this.projects.apps.recaptchaEnterpriseConfig = {};
    this.projects.apps.recaptchaEnterpriseConfig.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.apps.recaptchaEnterpriseConfig.batchGet = (params) => this._makeRequest('v1beta/{+parent}/apps/-/recaptchaEnterpriseConfig:batchGet', 'GET', params);
    this.projects.apps.recaptchaEnterpriseConfig.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    this.projects.apps.safetyNetConfig = {};
    this.projects.apps.safetyNetConfig.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.apps.safetyNetConfig.batchGet = (params) => this._makeRequest('v1beta/{+parent}/apps/-/safetyNetConfig:batchGet', 'GET', params);
    this.projects.apps.safetyNetConfig.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    this.projects.apps.playIntegrityConfig = {};
    this.projects.apps.playIntegrityConfig.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.apps.playIntegrityConfig.batchGet = (params) => this._makeRequest('v1beta/{+parent}/apps/-/playIntegrityConfig:batchGet', 'GET', params);
    this.projects.apps.playIntegrityConfig.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);

    this.projects.apps.debugTokens = {};
    this.projects.apps.debugTokens.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
    this.projects.apps.debugTokens.list = (params) => this._makeRequest('v1beta/{+parent}/debugTokens', 'GET', params);
    this.projects.apps.debugTokens.create = (params) => this._makeRequest('v1beta/{+parent}/debugTokens', 'POST', params);
    this.projects.apps.debugTokens.patch = (params) => this._makeRequest('v1beta/{+name}', 'PATCH', params);
    this.projects.apps.debugTokens.delete = (params) => this._makeRequest('v1beta/{+name}', 'DELETE', params);
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
