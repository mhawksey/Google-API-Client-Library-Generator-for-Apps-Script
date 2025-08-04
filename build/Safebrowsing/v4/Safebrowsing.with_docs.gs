
/**
 * Google Apps Script client library for the Safe Browsing API
 * Documentation URL: https://developers.google.com/safe-browsing/
 * @class
 */
class Safebrowsing {
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
    this._rootUrl = 'https://safebrowsing.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.threatMatches = {};

    /**
     * Finds the threat entries that match the Safe Browsing lists.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.threatMatches.find = (params) => this._makeRequest('v4/threatMatches:find', 'POST', params);

    this.threatListUpdates = {};

    /**
     * Fetches the most recent threat list updates. A client can request updates for multiple lists at once.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.threatListUpdates.fetch = (params) => this._makeRequest('v4/threatListUpdates:fetch', 'POST', params);

    this.encodedUpdates = {};

    /**
     * @param {string} params.clientId - A client ID that uniquely identifies the client implementation of the Safe Browsing API.
     * @param {string} params.clientVersion - The version of the client implementation.
     * @param {string} params.encodedRequest - (Required) A serialized FetchThreatListUpdatesRequest proto.
     * @return {object} The API response object.
     */
    this.encodedUpdates.get = (params) => this._makeRequest('v4/encodedUpdates/{encodedRequest}', 'GET', params);

    this.fullHashes = {};

    /**
     * Finds the full hashes that match the requested hash prefixes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.fullHashes.find = (params) => this._makeRequest('v4/fullHashes:find', 'POST', params);

    this.encodedFullHashes = {};

    /**
     * @param {string} params.clientId - A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API.
     * @param {string} params.clientVersion - The version of the client implementation.
     * @param {string} params.encodedRequest - (Required) A serialized FindFullHashesRequest proto.
     * @return {object} The API response object.
     */
    this.encodedFullHashes.get = (params) => this._makeRequest('v4/encodedFullHashes/{encodedRequest}', 'GET', params);

    this.threatHits = {};

    /**
     * Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.threatHits.create = (params) => this._makeRequest('v4/threatHits', 'POST', params);

    this.threatLists = {};

    /**
     * Lists the Safe Browsing threat lists available for download.
     * @return {object} The API response object.
     */
    this.threatLists.list = (params) => this._makeRequest('v4/threatLists', 'GET', params);
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
