
/**
 * Google Apps Script client library for the My Business Verifications API
 * Documentation URL: https://developers.google.com/my-business/
 * @class
 */
class Mybusinessverifications {
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
    this._rootUrl = 'https://mybusinessverifications.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.locations = {};

    /**
     * Gets the VoiceOfMerchant state.
     * @param {string} params.name - (Required) Required. Resource name of the location.
     * @return {object} The API response object.
     */
    this.locations.getVoiceOfMerchantState = (params) => this._makeRequest('v1/{+name}/VoiceOfMerchantState', 'GET', params);

    /**
     * Reports all eligible verification options for a location in a specific language.
     * @param {string} params.location - (Required) Required. The location to verify.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.fetchVerificationOptions = (params) => this._makeRequest('v1/{+location}:fetchVerificationOptions', 'POST', params);

    /**
     * Starts the verification process for a location.
     * @param {string} params.name - (Required) Required. Resource name of the location to verify.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.verify = (params) => this._makeRequest('v1/{+name}:verify', 'POST', params);

    this.locations.verifications = {};

    /**
     * Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
     * @param {string} params.name - (Required) Required. Resource name of the verification to complete.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.verifications.complete = (params) => this._makeRequest('v1/{+name}:complete', 'POST', params);

    /**
     * List verifications of a location, ordered by create time.
     * @param {integer} params.pageSize - How many verification to include per page. Minimum is 1, and the default and maximum page size is 100.
     * @param {string} params.pageToken - If specified, returns the next page of verifications.
     * @param {string} params.parent - (Required) Required. Resource name of the location that verification requests belong to.
     * @return {object} The API response object.
     */
    this.locations.verifications.list = (params) => this._makeRequest('v1/{+parent}/verifications', 'GET', params);

    this.verificationTokens = {};

    /**
     * Generate a token for the provided location data to verify the location.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.verificationTokens.generate = (params) => this._makeRequest('v1/verificationTokens:generate', 'POST', params);
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
