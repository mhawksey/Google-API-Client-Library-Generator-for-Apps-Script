
/**
 * Google Apps Script client library for the Google Identity Toolkit API
 * Documentation URL: https://developers.google.com/identity-toolkit/v3/
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
    this._rootUrl = 'https://www.googleapis.com/';
    this._servicePath = 'identitytoolkit/v3/relyingparty/';

    // --- Public Interface Initialization ---

    this.relyingparty = {};

    /**
     * Creates the URI used by the IdP to authenticate the user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.createAuthUri = (params) => this._makeRequest('createAuthUri', 'POST', params);

    /**
     * Delete user account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.deleteAccount = (params) => this._makeRequest('deleteAccount', 'POST', params);

    /**
     * Batch download user accounts.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.downloadAccount = (params) => this._makeRequest('downloadAccount', 'POST', params);

    /**
     * Reset password for a user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.emailLinkSignin = (params) => this._makeRequest('emailLinkSignin', 'POST', params);

    /**
     * Returns the account info.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.getAccountInfo = (params) => this._makeRequest('getAccountInfo', 'POST', params);

    /**
     * Get a code for user action confirmation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.getOobConfirmationCode = (params) => this._makeRequest('getOobConfirmationCode', 'POST', params);

    /**
     * Get project configuration.
     * @param {string} params.delegatedProjectNumber - Delegated GCP project number of the request.
     * @param {string} params.projectNumber - GCP project number of the request.
     * @return {object} The API response object.
     */
    this.relyingparty.getProjectConfig = (params) => this._makeRequest('getProjectConfig', 'GET', params);

    /**
     * Get token signing public key.
     * @return {object} The API response object.
     */
    this.relyingparty.getPublicKeys = (params) => this._makeRequest('publicKeys', 'GET', params);

    /**
     * Get recaptcha secure param.
     * @return {object} The API response object.
     */
    this.relyingparty.getRecaptchaParam = (params) => this._makeRequest('getRecaptchaParam', 'GET', params);

    /**
     * Reset password for a user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.resetPassword = (params) => this._makeRequest('resetPassword', 'POST', params);

    /**
     * Send SMS verification code.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.sendVerificationCode = (params) => this._makeRequest('sendVerificationCode', 'POST', params);

    /**
     * Set account info for a user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.setAccountInfo = (params) => this._makeRequest('setAccountInfo', 'POST', params);

    /**
     * Set project configuration.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.setProjectConfig = (params) => this._makeRequest('setProjectConfig', 'POST', params);

    /**
     * Sign out user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.signOutUser = (params) => this._makeRequest('signOutUser', 'POST', params);

    /**
     * Signup new user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.signupNewUser = (params) => this._makeRequest('signupNewUser', 'POST', params);

    /**
     * Batch upload existing user accounts.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.uploadAccount = (params) => this._makeRequest('uploadAccount', 'POST', params);

    /**
     * Verifies the assertion returned by the IdP.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.verifyAssertion = (params) => this._makeRequest('verifyAssertion', 'POST', params);

    /**
     * Verifies the developer asserted ID token.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.verifyCustomToken = (params) => this._makeRequest('verifyCustomToken', 'POST', params);

    /**
     * Verifies the user entered password.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.verifyPassword = (params) => this._makeRequest('verifyPassword', 'POST', params);

    /**
     * Verifies ownership of a phone number and creates/updates the user account accordingly.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.relyingparty.verifyPhoneNumber = (params) => this._makeRequest('verifyPhoneNumber', 'POST', params);
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
