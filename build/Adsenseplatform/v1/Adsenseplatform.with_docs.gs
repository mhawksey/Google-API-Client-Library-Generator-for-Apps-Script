
/**
 * Google Apps Script client library for the AdSense Platform API
 * Documentation URL: https://developers.google.com/adsense/platforms/
 * @class
 */
class Adsenseplatform {
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
    this._rootUrl = 'https://adsenseplatform.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.platforms = {};

    this.platforms.accounts = {};

    /**
     * Gets information about the selected sub-account.
     * @param {string} params.name - (Required) Required. Account to get information about. Format: platforms/{platform}/accounts/{account_id}
     * @return {object} The API response object.
     */
    this.platforms.accounts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Looks up information about a sub-account for a specified creation_request_id. If no account exists for the given creation_request_id, returns 404.
     * @param {string} params.creationRequestId - Optional. The creation_request_id provided when calling createAccount.
     * @param {string} params.parent - (Required) Required. Platform who parents the account. Format: platforms/{platform}
     * @return {object} The API response object.
     */
    this.platforms.accounts.lookup = (params) => this._makeRequest('v1/{+parent}/accounts:lookup', 'GET', params);

    /**
     * Lists a partial view of sub-accounts for a specific parent account.
     * @param {integer} params.pageSize - Optional. The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. Platform who parents the accounts. Format: platforms/{platform}
     * @return {object} The API response object.
     */
    this.platforms.accounts.list = (params) => this._makeRequest('v1/{+parent}/accounts', 'GET', params);

    /**
     * Creates a sub-account.
     * @param {string} params.parent - (Required) Required. Platform to create an account for. Format: platforms/{platform}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.platforms.accounts.create = (params) => this._makeRequest('v1/{+parent}/accounts', 'POST', params);

    /**
     * Closes a sub-account.
     * @param {string} params.name - (Required) Required. Account to close. Format: platforms/{platform}/accounts/{account_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.platforms.accounts.close = (params) => this._makeRequest('v1/{+name}:close', 'POST', params);

    this.platforms.accounts.events = {};

    /**
     * Creates an account event.
     * @param {string} params.parent - (Required) Required. Account to log events about. Format: platforms/{platform}/accounts/{account}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.platforms.accounts.events.create = (params) => this._makeRequest('v1/{+parent}/events', 'POST', params);

    this.platforms.accounts.sites = {};

    /**
     * Gets a site from a specified sub-account.
     * @param {string} params.name - (Required) Required. The name of the site to retrieve. Format: platforms/{platform}/accounts/{account}/sites/{site}
     * @return {object} The API response object.
     */
    this.platforms.accounts.sites.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists sites for a specific account.
     * @param {integer} params.pageSize - The maximum number of sites to include in the response, used for paging. If unspecified, at most 10000 sites will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSites` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account which owns the sites. Format: platforms/{platform}/accounts/{account}
     * @return {object} The API response object.
     */
    this.platforms.accounts.sites.list = (params) => this._makeRequest('v1/{+parent}/sites', 'GET', params);

    /**
     * Creates a site for a specified account.
     * @param {string} params.parent - (Required) Required. Account to create site. Format: platforms/{platform}/accounts/{account_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.platforms.accounts.sites.create = (params) => this._makeRequest('v1/{+parent}/sites', 'POST', params);

    /**
     * Requests the review of a site. The site should be in REQUIRES_REVIEW or NEEDS_ATTENTION state. Note: Make sure you place an [ad tag](https://developers.google.com/adsense/platforms/direct/ad-tags) on your site before requesting a review.
     * @param {string} params.name - (Required) Required. The name of the site to submit for review. Format: platforms/{platform}/accounts/{account}/sites/{site}
     * @return {object} The API response object.
     */
    this.platforms.accounts.sites.requestReview = (params) => this._makeRequest('v1/{+name}:requestReview', 'POST', params);

    /**
     * Deletes a site from a specified account.
     * @param {string} params.name - (Required) Required. The name of the site to delete. Format: platforms/{platform}/accounts/{account}/sites/{site}
     * @return {object} The API response object.
     */
    this.platforms.accounts.sites.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
