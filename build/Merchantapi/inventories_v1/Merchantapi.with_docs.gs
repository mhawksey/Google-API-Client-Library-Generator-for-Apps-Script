
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

    this.accounts.products = {};

    this.accounts.products.localInventories = {};

    /**
     * Lists the `LocalInventory` resources for the given product in your merchant account. The response might contain fewer items than specified by `pageSize`. If `pageToken` was returned in previous request, it can be used to obtain additional results. `LocalInventory` resources are listed per product for a given account.
     * @param {integer} params.pageSize - The maximum number of `LocalInventory` resources for the given product to return. The service returns fewer than this value if the number of inventories for the given product is less that than the `pageSize`. The default value is 25000. The maximum value is 25000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum
     * @param {string} params.pageToken - A page token, received from a previous `ListLocalInventories` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListLocalInventories` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request.
     * @param {string} params.parent - (Required) Required. The `name` of the parent product to list local inventories for. Format: `accounts/{account}/products/{product}`
     * @return {object} The API response object.
     */
    this.accounts.products.localInventories.list = (params) => this._makeRequest('inventories/v1/{+parent}/localInventories', 'GET', params);

    /**
     * Inserts a `LocalInventory` resource to a product in your merchant account. Replaces the full `LocalInventory` resource if an entry with the same `storeCode` already exists for the product. It might take up to 30 minutes for the new or updated `LocalInventory` resource to appear in products.
     * @param {string} params.parent - (Required) Required. The account and product where this inventory will be inserted. Format: `accounts/{account}/products/{product}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.products.localInventories.insert = (params) => this._makeRequest('inventories/v1/{+parent}/localInventories:insert', 'POST', params);

    /**
     * Deletes the specified `LocalInventory` from the given product in your merchant account. It might take a up to an hour for the `LocalInventory` to be deleted from the specific product. Once you have received a successful delete response, wait for that period before attempting a delete again.
     * @param {string} params.name - (Required) Required. The name of the local inventory for the given product to delete. Format: `accounts/{account}/products/{product}/localInventories/{store_code}`
     * @return {object} The API response object.
     */
    this.accounts.products.localInventories.delete = (params) => this._makeRequest('inventories/v1/{+name}', 'DELETE', params);

    this.accounts.products.regionalInventories = {};

    /**
     * Lists the `RegionalInventory` resources for the given product in your merchant account. The response might contain fewer items than specified by `pageSize`. If `pageToken` was returned in previous request, it can be used to obtain additional results. `RegionalInventory` resources are listed per product for a given account.
     * @param {integer} params.pageSize - The maximum number of `RegionalInventory` resources for the given product to return. The service returns fewer than this value if the number of inventories for the given product is less that than the `pageSize`. The default value is 25000. The maximum value is 100000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum.
     * @param {string} params.pageToken - A page token, received from a previous `ListRegionalInventories` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegionalInventories` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request.
     * @param {string} params.parent - (Required) Required. The `name` of the parent product to list `RegionalInventory` resources for. Format: `accounts/{account}/products/{product}`
     * @return {object} The API response object.
     */
    this.accounts.products.regionalInventories.list = (params) => this._makeRequest('inventories/v1/{+parent}/regionalInventories', 'GET', params);

    /**
     * Inserts a `RegionalInventory` to a given product in your merchant account. Replaces the full `RegionalInventory` resource if an entry with the same `region` already exists for the product. It might take up to 30 minutes for the new or updated `RegionalInventory` resource to appear in products.
     * @param {string} params.parent - (Required) Required. The account and product where this inventory will be inserted. Format: `accounts/{account}/products/{product}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.products.regionalInventories.insert = (params) => this._makeRequest('inventories/v1/{+parent}/regionalInventories:insert', 'POST', params);

    /**
     * Deletes the specified `RegionalInventory` resource from the given product in your merchant account. It might take up to an hour for the `RegionalInventory` to be deleted from the specific product. Once you have received a successful delete response, wait for that period before attempting a delete again.
     * @param {string} params.name - (Required) Required. The name of the `RegionalInventory` resource to delete. Format: `accounts/{account}/products/{product}/regionalInventories/{region}`
     * @return {object} The API response object.
     */
    this.accounts.products.regionalInventories.delete = (params) => this._makeRequest('inventories/v1/{+name}', 'DELETE', params);
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
