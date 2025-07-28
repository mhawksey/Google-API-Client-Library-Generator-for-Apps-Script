
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

    this.accounts.merchantReviews = {};

    /**
     * Gets a merchant review.
     * @param {string} params.name - (Required) Required. The ID of the merchant review. Format: accounts/{account}/merchantReviews/{merchantReview}
     * @return {object} The API response object.
     */
    this.accounts.merchantReviews.get = (params) => this._makeRequest('reviews/v1beta/{+name}', 'GET', params);

    /**
     * Lists merchant reviews.
     * @param {integer} params.pageSize - Optional. The maximum number of merchant reviews to return. The service can return fewer than this value. The maximum value is 1000; values above 1000 are coerced to 1000. If unspecified, the maximum number of reviews is returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListMerchantReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMerchantReviews` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account to list merchant reviews for. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.merchantReviews.list = (params) => this._makeRequest('reviews/v1beta/{+parent}/merchantReviews', 'GET', params);

    /**
     * Inserts a review for your Merchant Center account. If the review already exists, then the review is replaced with the new instance.
     * @param {string} params.dataSource - Required. The data source of the [merchantreview](https://support.google.com/merchants/answer/7045996?sjid=5253581244217581976-EU) Format: `accounts/{account}/dataSources/{datasource}`.
     * @param {string} params.parent - (Required) Required. The account where the merchant review will be inserted. Format: accounts/{account}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.merchantReviews.insert = (params) => this._makeRequest('reviews/v1beta/{+parent}/merchantReviews:insert', 'POST', params);

    /**
     * Deletes merchant review.
     * @param {string} params.name - (Required) Required. The ID of the merchant review. Format: accounts/{account}/merchantReviews/{merchantReview}
     * @return {object} The API response object.
     */
    this.accounts.merchantReviews.delete = (params) => this._makeRequest('reviews/v1beta/{+name}', 'DELETE', params);

    this.accounts.productReviews = {};

    /**
     * Gets a product review.
     * @param {string} params.name - (Required) Required. The ID of the merchant review. Format: accounts/{account}/productReviews/{productReview}
     * @return {object} The API response object.
     */
    this.accounts.productReviews.get = (params) => this._makeRequest('reviews/v1beta/{+name}', 'GET', params);

    /**
     * Lists product reviews.
     * @param {integer} params.pageSize - Optional. The maximum number of products to return. The service may return fewer than this value.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListProductReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductReviews` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account to list product reviews for. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.productReviews.list = (params) => this._makeRequest('reviews/v1beta/{+parent}/productReviews', 'GET', params);

    /**
     * Inserts a product review.
     * @param {string} params.dataSource - Required. Format: `accounts/{account}/dataSources/{datasource}`.
     * @param {string} params.parent - (Required) Required. The account where the product review will be inserted. Format: accounts/{account}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.productReviews.insert = (params) => this._makeRequest('reviews/v1beta/{+parent}/productReviews:insert', 'POST', params);

    /**
     * Deletes a product review.
     * @param {string} params.name - (Required) Required. The ID of the Product review. Format: accounts/{account}/productReviews/{productReview}
     * @return {object} The API response object.
     */
    this.accounts.productReviews.delete = (params) => this._makeRequest('reviews/v1beta/{+name}', 'DELETE', params);
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
