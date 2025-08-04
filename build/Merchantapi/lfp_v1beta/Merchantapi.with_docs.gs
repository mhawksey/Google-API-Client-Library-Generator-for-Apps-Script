
/**
 * Google Apps Script client library for the Merchant API
 * Documentation URL: https://developers.google.com/merchant/api
 * @class
 */
class Merchantapi {
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
    this._rootUrl = 'https://merchantapi.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};

    this.accounts.lfpInventories = {};

    /**
     * Inserts a `LfpInventory` resource for the given target merchant account. If the resource already exists, it will be replaced. The inventory automatically expires after 30 days.
     * @param {string} params.parent - (Required) Required. The LFP provider account. Format: `accounts/{account}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.lfpInventories.insert = (params) => this._makeRequest('lfp/v1beta/{+parent}/lfpInventories:insert', 'POST', params);

    this.accounts.lfpMerchantStates = {};

    /**
     * Gets the LFP state of a merchant
     * @param {string} params.name - (Required) Required. The name of the state to retrieve. Format: `accounts/{account}/lfpMerchantStates/{target_merchant}`. For example, `accounts/123456/lfpMerchantStates/567890`.
     * @return {object} The API response object.
     */
    this.accounts.lfpMerchantStates.get = (params) => this._makeRequest('lfp/v1beta/{+name}', 'GET', params);

    this.accounts.lfpSales = {};

    /**
     * Inserts a `LfpSale` for the given merchant.
     * @param {string} params.parent - (Required) Required. The LFP provider account. Format: `accounts/{lfp_partner}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.lfpSales.insert = (params) => this._makeRequest('lfp/v1beta/{+parent}/lfpSales:insert', 'POST', params);

    this.accounts.lfpStores = {};

    /**
     * Retrieves information about a store.
     * @param {string} params.name - (Required) Required. The name of the store to retrieve. Format: `accounts/{account}/lfpStores/{target_merchant}~{store_code}`
     * @return {object} The API response object.
     */
    this.accounts.lfpStores.get = (params) => this._makeRequest('lfp/v1beta/{+name}', 'GET', params);

    /**
     * Inserts a store for the target merchant. If the store with the same store code already exists, it will be replaced.
     * @param {string} params.parent - (Required) Required. The LFP provider account Format: `accounts/{account}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.lfpStores.insert = (params) => this._makeRequest('lfp/v1beta/{+parent}/lfpStores:insert', 'POST', params);

    /**
     * Deletes a store for a target merchant.
     * @param {string} params.name - (Required) Required. The name of the store to delete for the target merchant account. Format: `accounts/{account}/lfpStores/{target_merchant}~{store_code}`
     * @return {object} The API response object.
     */
    this.accounts.lfpStores.delete = (params) => this._makeRequest('lfp/v1beta/{+name}', 'DELETE', params);

    /**
     * Lists the stores of the target merchant, specified by the filter in `ListLfpStoresRequest`.
     * @param {integer} params.pageSize - Optional. The maximum number of `LfpStore` resources for the given account to return. The service returns fewer than this value if the number of stores for the given account is less than the `pageSize`. The default value is 250. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListLfpStoresRequest` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListLfpStoresRequest` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request.
     * @param {string} params.parent - (Required) Required. The LFP partner. Format: `accounts/{account}`
     * @param {string} params.targetAccount - Required. The Merchant Center id of the merchant to list stores for.
     * @return {object} The API response object.
     */
    this.accounts.lfpStores.list = (params) => this._makeRequest('lfp/v1beta/{+parent}/lfpStores', 'GET', params);
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
