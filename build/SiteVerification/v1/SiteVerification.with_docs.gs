
/**
 * Google Apps Script client library for the Google Site Verification API
 * Documentation URL: https://developers.google.com/site-verification/
 * @class
 */
class SiteVerification {
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
    this._servicePath = 'siteVerification/v1/';

    // --- Public Interface Initialization ---

    this.webResource = {};

    /**
     * Relinquish ownership of a website or domain.
     * @param {string} params.id - (Required) The id of a verified site or domain.
     * @return {object} The API response object.
     */
    this.webResource.delete = (params) => this._makeRequest('webResource/{id}', 'DELETE', params);

    /**
     * Get the most current data for a website or domain.
     * @param {string} params.id - (Required) The id of a verified site or domain.
     * @return {object} The API response object.
     */
    this.webResource.get = (params) => this._makeRequest('webResource/{id}', 'GET', params);

    /**
     * Get a verification token for placing on a website or domain.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.webResource.getToken = (params) => this._makeRequest('token', 'POST', params);

    /**
     * Attempt verification of a website or domain.
     * @param {string} params.verificationMethod - (Required) The method to use for verifying a site or domain.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.webResource.insert = (params) => this._makeRequest('webResource', 'POST', params);

    /**
     * Get the list of your verified websites and domains.
     * @return {object} The API response object.
     */
    this.webResource.list = (params) => this._makeRequest('webResource', 'GET', params);

    /**
     * Modify the list of owners for your website or domain. This method supports patch semantics.
     * @param {string} params.id - (Required) The id of a verified site or domain.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.webResource.patch = (params) => this._makeRequest('webResource/{id}', 'PATCH', params);

    /**
     * Modify the list of owners for your website or domain.
     * @param {string} params.id - (Required) The id of a verified site or domain.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.webResource.update = (params) => this._makeRequest('webResource/{id}', 'PUT', params);
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
