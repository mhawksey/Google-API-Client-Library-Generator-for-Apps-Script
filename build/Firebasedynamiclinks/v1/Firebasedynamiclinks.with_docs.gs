
/**
 * Google Apps Script client library for the Firebase Dynamic Links API
 * Documentation URL: https://firebase.google.com/docs/dynamic-links/
 * @class
 */
class Firebasedynamiclinks {
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
    this._rootUrl = 'https://firebasedynamiclinks.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.shortLinks = {};

    /**
     * Creates a short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. Repeated calls with the same long Dynamic Link or Dynamic Link information will produce the same short Dynamic Link. The Dynamic Link domain in the request must be owned by requester's Firebase project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.shortLinks.create = (params) => this._makeRequest('v1/shortLinks', 'POST', params);

    this.v1 = {};

    /**
     * Get iOS reopen attribution for app universal link open deeplinking.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.v1.reopenAttribution = (params) => this._makeRequest('v1/reopenAttribution', 'POST', params);

    /**
     * Fetches analytics stats of a short Dynamic Link for a given duration. Metrics include number of clicks, redirects, installs, app first opens, and app reopens.
     * @param {string} params.durationDays - The span of time requested in days.
     * @param {string} params.dynamicLink - (Required) Dynamic Link URL. e.g. https://abcd.app.goo.gl/wxyz
     * @param {string} params.sdkVersion - Google SDK version. Version takes the form "$major.$minor.$patch"
     * @return {object} The API response object.
     */
    this.v1.getLinkStats = (params) => this._makeRequest('v1/{dynamicLink}/linkStats', 'GET', params);

    /**
     * Get iOS strong/weak-match info for post-install attribution.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.v1.installAttribution = (params) => this._makeRequest('v1/installAttribution', 'POST', params);

    this.managedShortLinks = {};

    /**
     * Creates a managed short Dynamic Link given either a valid long Dynamic Link or details such as Dynamic Link domain, Android and iOS app information. The created short Dynamic Link will not expire. This differs from CreateShortDynamicLink in the following ways: - The request will also contain a name for the link (non unique name for the front end). - The response must be authenticated with an auth token (generated with the admin service account). - The link will appear in the FDL list of links in the console front end. The Dynamic Link domain in the request must be owned by requester's Firebase project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.managedShortLinks.create = (params) => this._makeRequest('v1/managedShortLinks:create', 'POST', params);
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
