
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
    this.platforms.accounts.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Looks up information about a sub-account for a specified creation_request_id. If no account exists for the given creation_request_id, returns 404.
     * @param {string} params.creationRequestId - Optional. The creation_request_id provided when calling createAccount.
     * @param {string} params.parent - (Required) Required. Platform who parents the account. Format: platforms/{platform}
     * @return {object} The API response object.
     */
    this.platforms.accounts.lookup = (params) => this._makeRequest('v1alpha/{+parent}/accounts:lookup', 'GET', params);

    /**
     * Lists a partial view of sub-accounts for a specific parent account.
     * @param {integer} params.pageSize - Optional. The maximum number of accounts to include in the response, used for paging. If unspecified, at most 10000 accounts will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListAccounts` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. Platform who parents the accounts. Format: platforms/{platform}
     * @return {object} The API response object.
     */
    this.platforms.accounts.list = (params) => this._makeRequest('v1alpha/{+parent}/accounts', 'GET', params);

    /**
     * Creates a sub-account.
     * @param {string} params.parent - (Required) Required. Platform to create an account for. Format: platforms/{platform}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.platforms.accounts.create = (params) => this._makeRequest('v1alpha/{+parent}/accounts', 'POST', params);

    /**
     * Closes a sub-account.
     * @param {string} params.name - (Required) Required. Account to close. Format: platforms/{platform}/accounts/{account_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.platforms.accounts.close = (params) => this._makeRequest('v1alpha/{+name}:close', 'POST', params);

    this.platforms.accounts.events = {};

    /**
     * Creates an account event.
     * @param {string} params.parent - (Required) Required. Account to log events about. Format: platforms/{platform}/accounts/{account}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.platforms.accounts.events.create = (params) => this._makeRequest('v1alpha/{+parent}/events', 'POST', params);

    this.platforms.accounts.sites = {};

    /**
     * Gets a site from a specified sub-account.
     * @param {string} params.name - (Required) Required. The name of the site to retrieve. Format: platforms/{platform}/accounts/{account}/sites/{site}
     * @return {object} The API response object.
     */
    this.platforms.accounts.sites.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists sites for a specific account.
     * @param {integer} params.pageSize - The maximum number of sites to include in the response, used for paging. If unspecified, at most 10000 sites will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSites` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account which owns the sites. Format: platforms/{platform}/accounts/{account}
     * @return {object} The API response object.
     */
    this.platforms.accounts.sites.list = (params) => this._makeRequest('v1alpha/{+parent}/sites', 'GET', params);

    /**
     * Creates a site for a specified account.
     * @param {string} params.parent - (Required) Required. Account to create site. Format: platforms/{platform}/accounts/{account_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.platforms.accounts.sites.create = (params) => this._makeRequest('v1alpha/{+parent}/sites', 'POST', params);

    /**
     * Requests the review of a site. The site should be in REQUIRES_REVIEW or NEEDS_ATTENTION state. Note: Make sure you place an [ad tag](https://developers.google.com/adsense/platforms/direct/ad-tags) on your site before requesting a review.
     * @param {string} params.name - (Required) Required. The name of the site to submit for review. Format: platforms/{platform}/accounts/{account}/sites/{site}
     * @return {object} The API response object.
     */
    this.platforms.accounts.sites.requestReview = (params) => this._makeRequest('v1alpha/{+name}:requestReview', 'POST', params);

    /**
     * Deletes a site from a specified account.
     * @param {string} params.name - (Required) Required. The name of the site to delete. Format: platforms/{platform}/accounts/{account}/sites/{site}
     * @return {object} The API response object.
     */
    this.platforms.accounts.sites.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.accounts = {};

    this.accounts.platforms = {};

    /**
     * Gets a platform.
     * @param {string} params.name - (Required) Required. The name of the platform to retrieve. Format: accounts/{account}/platforms/{platform}
     * @return {object} The API response object.
     */
    this.accounts.platforms.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists platforms for a specified account.
     * @param {integer} params.pageSize - Optional. The maximum number of platforms to include in the response, used for paging. If unspecified, at most 10000 platforms will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListPlatforms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatforms` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account which owns the platforms. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.platforms.list = (params) => this._makeRequest('v1alpha/{+parent}/platforms', 'GET', params);

    this.accounts.platforms.groups = {};

    /**
     * Lists Platform Groups for a specified Platform.
     * @param {integer} params.pageSize - Optional. The maximum number of groups to include in the response, used for paging. If unspecified, at most 10000 groups will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListPlatformGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatformGroups` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the platform to retrieve. Format: accounts/{account}/platforms/{platform}
     * @return {object} The API response object.
     */
    this.accounts.platforms.groups.list = (params) => this._makeRequest('v1alpha/{+parent}/groups', 'GET', params);

    /**
     * Gets a Platform Group for a specified Platform and group.
     * @param {string} params.name - (Required) Required. The name of the platform group to retrieve. Format: accounts/{account}/platforms/{platform}/groups/{group}
     * @return {object} The API response object.
     */
    this.accounts.platforms.groups.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Update a Platform Group.
     * @param {string} params.name - (Required) Identifier. Format: accounts/{account}/platforms/{platform}/groups/{platform_group}
     * @param {string} params.updateMask - Optional. The list of fields to update - currently only supports updating the `description` field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.platforms.groups.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.accounts.platforms.childAccounts = {};

    this.accounts.platforms.childAccounts.sites = {};

    /**
     * Lists Platform Child Sites for a specified Platform Child Account.
     * @param {integer} params.pageSize - Optional. The maximum number of children to include in the response, used for paging. If unspecified, at most 10000 platforms will be returned. The maximum value is 10000; values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListPlatformChildSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPlatformChildSites` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the child account under the given platform which owns the platform child sites. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account}
     * @return {object} The API response object.
     */
    this.accounts.platforms.childAccounts.sites.list = (params) => this._makeRequest('v1alpha/{+parent}/sites', 'GET', params);

    /**
     * Gets a Platform Child Site for a specified Platform Child Account and site.
     * @param {string} params.name - (Required) Required. The name of the platform child site to retrieve. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account}/sites/{platform_child_site}
     * @return {object} The API response object.
     */
    this.accounts.platforms.childAccounts.sites.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Update a Platform Child Site.
     * @param {string} params.name - (Required) Identifier. Format: accounts/{account}/platforms/{platform}/childAccounts/{child_account}/sites/{platform_child_site}
     * @param {string} params.updateMask - Optional. The list of fields to update - currently only supports updating the `platform_group` field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.platforms.childAccounts.sites.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);
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
