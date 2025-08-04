
/**
 * Google Apps Script client library for the AdMob API
 * Documentation URL: https://developers.google.com/admob/api/
 * @class
 */
class Admob {
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
    this._rootUrl = 'https://admob.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};

    /**
     * Gets information about the specified AdMob publisher account.
     * @param {string} params.name - (Required) Resource name of the publisher account to retrieve. Example: accounts/pub-9876543210987654
     * @return {object} The API response object.
     */
    this.accounts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists the AdMob publisher account that was most recently signed in to from the AdMob UI. For more information, see https://support.google.com/admob/answer/10243672.
     * @param {integer} params.pageSize - Maximum number of accounts to return.
     * @param {string} params.pageToken - The value returned by the last `ListPublisherAccountsResponse`; indicates that this is a continuation of a prior `ListPublisherAccounts` call, and that the system should return the next page of data.
     * @return {object} The API response object.
     */
    this.accounts.list = (params) => this._makeRequest('v1/accounts', 'GET', params);

    this.accounts.networkReport = {};

    /**
     * Generates an AdMob Network report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
     * @param {string} params.parent - (Required) Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.networkReport.generate = (params) => this._makeRequest('v1/{+parent}/networkReport:generate', 'POST', params);

    this.accounts.mediationReport = {};

    /**
     * Generates an AdMob Mediation report based on the provided report specification. Returns result of a server-side streaming RPC. The result is returned in a sequence of responses.
     * @param {string} params.parent - (Required) Resource name of the account to generate the report for. Example: accounts/pub-9876543210987654
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.mediationReport.generate = (params) => this._makeRequest('v1/{+parent}/mediationReport:generate', 'POST', params);

    this.accounts.apps = {};

    /**
     * List the apps under the specified AdMob account.
     * @param {integer} params.pageSize - The maximum number of apps to return. If unspecified or 0, at most 10,000 apps will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     * @param {string} params.pageToken - The value returned by the last `ListAppsResponse`; indicates that this is a continuation of a prior `ListApps` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Resource name of the account to list apps for. Example: accounts/pub-9876543210987654
     * @return {object} The API response object.
     */
    this.accounts.apps.list = (params) => this._makeRequest('v1/{+parent}/apps', 'GET', params);

    this.accounts.adUnits = {};

    /**
     * List the ad units under the specified AdMob account.
     * @param {integer} params.pageSize - The maximum number of ad units to return. If unspecified or 0, at most 10,000 ad units will be returned. The maximum value is 20,000; values above 20,000 will be coerced to 20,000.
     * @param {string} params.pageToken - The value returned by the last `ListAdUnitsResponse`; indicates that this is a continuation of a prior `ListAdUnits` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. Resource name of the account to list ad units for. Example: accounts/pub-9876543210987654
     * @return {object} The API response object.
     */
    this.accounts.adUnits.list = (params) => this._makeRequest('v1/{+parent}/adUnits', 'GET', params);
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
