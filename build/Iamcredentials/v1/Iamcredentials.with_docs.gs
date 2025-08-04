
/**
 * Google Apps Script client library for the IAM Service Account Credentials API
 * Documentation URL: https://cloud.google.com/iam/docs/creating-short-lived-service-account-credentials
 * @class
 */
class Iamcredentials {
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
    this._rootUrl = 'https://iamcredentials.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.serviceAccounts = {};

    /**
     * Generates an OAuth 2.0 access token for a service account.
     * @param {string} params.name - (Required) Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.generateAccessToken = (params) => this._makeRequest('v1/{+name}:generateAccessToken', 'POST', params);

    /**
     * Generates an OpenID Connect ID token for a service account.
     * @param {string} params.name - (Required) Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.generateIdToken = (params) => this._makeRequest('v1/{+name}:generateIdToken', 'POST', params);

    /**
     * Signs a blob using a service account's system-managed private key.
     * @param {string} params.name - (Required) Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.signBlob = (params) => this._makeRequest('v1/{+name}:signBlob', 'POST', params);

    /**
     * Signs a JWT using a service account's system-managed private key.
     * @param {string} params.name - (Required) Required. The resource name of the service account for which the credentials are requested, in the following format: `projects/-/serviceAccounts/{ACCOUNT_EMAIL_OR_UNIQUEID}`. The `-` wildcard character is required; replacing it with a project ID is invalid.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.signJwt = (params) => this._makeRequest('v1/{+name}:signJwt', 'POST', params);

    /**
     * Returns the trust boundary info for a given service account.
     * @param {string} params.name - (Required) Required. Resource name of service account.
     * @return {object} The API response object.
     */
    this.projects.serviceAccounts.getAllowedLocations = (params) => this._makeRequest('v1/{+name}/allowedLocations', 'GET', params);

    this.projects.locations = {};

    this.projects.locations.workloadIdentityPools = {};

    /**
     * Returns the trust boundary info for a given workload identity pool.
     * @param {string} params.name - (Required) Required. Resource name of workload identity pool.
     * @return {object} The API response object.
     */
    this.projects.locations.workloadIdentityPools.getAllowedLocations = (params) => this._makeRequest('v1/{+name}/allowedLocations', 'GET', params);

    this.locations = {};

    this.locations.workforcePools = {};

    /**
     * Returns the trust boundary info for a given workforce pool.
     * @param {string} params.name - (Required) Required. Resource name of workforce pool.
     * @return {object} The API response object.
     */
    this.locations.workforcePools.getAllowedLocations = (params) => this._makeRequest('v1/{+name}/allowedLocations', 'GET', params);
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
