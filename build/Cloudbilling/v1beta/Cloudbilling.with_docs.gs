
/**
 * Google Apps Script client library for the Cloud Billing API
 * Documentation URL: https://cloud.google.com/billing/docs/apis
 * @class
 */
class Cloudbilling {
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
    this._rootUrl = 'https://cloudbilling.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.billingAccounts = {};

    this.billingAccounts.services = {};

    /**
     * Lists services visible to a billing account.
     * @param {integer} params.pageSize - Maximum number of billing account service to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} params.pageToken - Page token received from a previous ListBillingAccountServices call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. The billing account to list billing account service from. Format: billingAccounts/{billing_account}
     * @return {object} The API response object.
     */
    this.billingAccounts.services.list = (params) => this._makeRequest('v1beta/{+parent}/services', 'GET', params);

    /**
     * Gets a Google Cloud service visible to a billing account.
     * @param {string} params.name - (Required) Required. The name of the billing account service to retrieve. Format: billingAccounts/{billing_account}/services/{service}
     * @return {object} The API response object.
     */
    this.billingAccounts.services.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.billingAccounts.skuGroups = {};

    /**
     * Lists SKU groups visible to a billing account.
     * @param {integer} params.pageSize - Maximum number of billing account SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} params.pageToken - Page token received from a previous ListBillingAccountSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. The billing account to list billing account SKU groups from. Format: billingAccounts/{billing_account}
     * @return {object} The API response object.
     */
    this.billingAccounts.skuGroups.list = (params) => this._makeRequest('v1beta/{+parent}/skuGroups', 'GET', params);

    /**
     * Gets a SKU group visible to a billing account.
     * @param {string} params.name - (Required) Required. The name of the BillingAccountSkuGroup to retrieve. Format: billingAccounts/{billing_account}/skuGroups/{sku_group}
     * @return {object} The API response object.
     */
    this.billingAccounts.skuGroups.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.billingAccounts.skuGroups.skus = {};

    /**
     * Lists SKUs that is part of billing account SKU groups.
     * @param {integer} params.pageSize - Maximum number of billing account SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} params.pageToken - Page token received from a previous ListBillingAccountSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. The billing account SKU group to list billing account SKU group SKUs from. Format: billingAccounts/{billing_account}/skuGroups/{sku_group}
     * @return {object} The API response object.
     */
    this.billingAccounts.skuGroups.skus.list = (params) => this._makeRequest('v1beta/{+parent}/skus', 'GET', params);

    /**
     * Gets a SKU that is part of a billing account SKU group.
     * @param {string} params.name - (Required) Required. The name of the billing account SKU group SKU to retrieve. Format: billingAccounts/{billing_account}/skuGroups/{sku_group}/skus/{sku}
     * @return {object} The API response object.
     */
    this.billingAccounts.skuGroups.skus.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.billingAccounts.skus = {};

    /**
     * Lists SKUs visible to a billing account.
     * @param {string} params.filter - Options for how to filter the billing account SKUs. Currently, only filter on `billing_account_service` is supported. Only !=, = operators are supported. Examples: - billing_account_service = "billingAccounts/012345-567890-ABCDEF/services/DA34-426B-A397"
     * @param {integer} params.pageSize - Maximum number of billing account SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} params.pageToken - Page token received from a previous ListBillingAccountSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. The billing account to list billing account SKU from. Format: billingAccounts/{billing_account}
     * @return {object} The API response object.
     */
    this.billingAccounts.skus.list = (params) => this._makeRequest('v1beta/{+parent}/skus', 'GET', params);

    /**
     * Gets a SKU visible to a billing account.
     * @param {string} params.name - (Required) Required. The name of the billing account SKU to retrieve. Format: billingAccounts/{billing_account}/skus/{sku}
     * @return {object} The API response object.
     */
    this.billingAccounts.skus.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.billingAccounts.skus.price = {};

    /**
     * Gets the latest price for SKUs available to your Cloud Billing account.
     * @param {string} params.currencyCode - Optional. ISO-4217 currency code for the price. If not specified, the currency of the billing account is used.
     * @param {string} params.name - (Required) Required. Name of the billing account price to retrieve. Format: billingAccounts/{billing_account}/skus/{sku}/price
     * @return {object} The API response object.
     */
    this.billingAccounts.skus.price.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.billingAccounts.skus.prices = {};

    /**
     * Lists the latest prices for SKUs available to your Cloud Billing account.
     * @param {string} params.currencyCode - Optional. ISO-4217 currency code for the price. If not specified, currency of billing account will be used.
     * @param {integer} params.pageSize - Optional. Maximum number of billing account price to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListBillingAccountPrices call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. To list all Billing Account SKUs, use `-` as the SKU ID. Format: `billingAccounts/{billing_account}/skus/-` Note: Specifying an actual SKU resource id will return a collection of one Billing Account Price.
     * @return {object} The API response object.
     */
    this.billingAccounts.skus.prices.list = (params) => this._makeRequest('v1beta/{+parent}/prices', 'GET', params);

    this.skus = {};

    this.skus.price = {};

    /**
     * Gets the latest price for the given SKU.
     * @param {string} params.currencyCode - Optional. ISO-4217 currency code for the price. If not specified, USD will be used.
     * @param {string} params.name - (Required) Required. Name of the latest price to retrieve. Format: skus/{sku}/price
     * @return {object} The API response object.
     */
    this.skus.price.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.skus.prices = {};

    /**
     * Lists the latest prices for all SKUs.
     * @param {string} params.currencyCode - Optional. ISO-4217 currency code for the price. If not specified, USD will be used.
     * @param {integer} params.pageSize - Optional. Maximum number of prices to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} params.pageToken - Optional. Page token received from a previous ListPrices call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. To list the prices for all SKUs, use `-` as the SKU ID. Format: `skus/-` Specifying a specific SKU ID returns a collection with one Price object for the SKU.
     * @return {object} The API response object.
     */
    this.skus.prices.list = (params) => this._makeRequest('v1beta/{+parent}/prices', 'GET', params);

    this.skuGroups = {};

    /**
     * Lists all publicly listed SKU groups.
     * @param {integer} params.pageSize - Maximum number of SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} params.pageToken - Page token received from a previous ListSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @return {object} The API response object.
     */
    this.skuGroups.list = (params) => this._makeRequest('v1beta/skuGroups', 'GET', params);

    /**
     * Gets a publicly listed SKU group.
     * @param {string} params.name - (Required) Required. The name of the SKU group to retrieve. Format: skuGroups/{sku_group}
     * @return {object} The API response object.
     */
    this.skuGroups.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    this.skuGroups.skus = {};

    /**
     * Lists all publicly listed SKUs contained by a publicly listed SKU group.
     * @param {integer} params.pageSize - Maximum number of SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000.
     * @param {string} params.pageToken - Page token received from a previous ListSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned.
     * @param {string} params.parent - (Required) Required. The SkuGroup to list SkuGroupSku from. Format: skuGroups/{sku_group}
     * @return {object} The API response object.
     */
    this.skuGroups.skus.list = (params) => this._makeRequest('v1beta/{+parent}/skus', 'GET', params);

    /**
     * Gets a publicly listed SKU that is part of a publicly listed SKU group.
     * @param {string} params.name - (Required) Required. The name of the SKU group SKU to retrieve. Format: skuGroups/{sku_group}/skus/{sku}
     * @return {object} The API response object.
     */
    this.skuGroups.skus.get = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);
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
