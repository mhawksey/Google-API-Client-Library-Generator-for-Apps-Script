
/**
 * Google Apps Script client library for the Manufacturer Center API
 * Documentation URL: https://developers.google.com/manufacturers/
 * @class
 */
class Manufacturers {
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
    this._rootUrl = 'https://manufacturers.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};

    this.accounts.products = {};

    /**
     * Lists all the products in a Manufacturer Center account.
     * @param {string} params.include - The information to be included in the response. Only sections listed here will be returned.
     * @param {integer} params.pageSize - Maximum number of product statuses to return in the response, used for paging.
     * @param {string} params.pageToken - The token returned by the previous request.
     * @param {string} params.parent - (Required) Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.
     * @return {object} The API response object.
     */
    this.accounts.products.list = (params) => this._makeRequest('v1/{+parent}/products', 'GET', params);

    /**
     * Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.
     * @param {string} params.include - The information to be included in the response. Only sections listed here will be returned.
     * @param {string} params.name - (Required) Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.
     * @param {string} params.parent - (Required) Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.
     * @return {object} The API response object.
     */
    this.accounts.products.get = (params) => this._makeRequest('v1/{+parent}/products/{+name}', 'GET', params);

    /**
     * Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.
     * @param {string} params.name - (Required) Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.
     * @param {string} params.parent - (Required) Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.products.update = (params) => this._makeRequest('v1/{+parent}/products/{+name}', 'PUT', params);

    /**
     * Deletes the product from a Manufacturer Center account.
     * @param {string} params.name - (Required) Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id.
     * @param {string} params.parent - (Required) Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account.
     * @return {object} The API response object.
     */
    this.accounts.products.delete = (params) => this._makeRequest('v1/{+parent}/products/{+name}', 'DELETE', params);

    this.accounts.languages = {};

    this.accounts.languages.productCertifications = {};

    /**
     * Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.
     * @param {string} params.name - (Required) Required. The unique name identifier of a product certification Format: accounts/{account}/languages/{language_code}/productCertifications/{id} Where `id` is a some unique identifier and `language_code` is a 2-letter ISO 639-1 code of a Shopping supported language according to https://support.google.com/merchants/answer/160637.
     * @param {string} params.updateMask - Optional. The list of fields to update according to aip.dev/134. However, only full update is supported as of right now. Therefore, it can be either ignored or set to "*". Setting any other values will returns UNIMPLEMENTED error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.languages.productCertifications.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists product certifications from a specified certification body. This method can only be called by certification bodies.
     * @param {integer} params.pageSize - Optional. The maximum number of product certifications to return. The service may return fewer than this value. If unspecified, at most 50 product certifications will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListProductCertifications` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductCertifications` must match the call that provided the page token. Required if requesting the second or higher page.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of product certifications. Format: accounts/{account}/languages/{language_code}
     * @return {object} The API response object.
     */
    this.accounts.languages.productCertifications.list = (params) => this._makeRequest('v1/{+parent}/productCertifications', 'GET', params);

    /**
     * Gets a product certification by its name. This method can only be called by certification bodies.
     * @param {string} params.name - (Required) Required. The name of the product certification to get. Format: accounts/{account}/languages/{language_code}/productCertifications/{id}
     * @return {object} The API response object.
     */
    this.accounts.languages.productCertifications.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a product certification by its name. This method can only be called by certification bodies.
     * @param {string} params.name - (Required) Required. The name of the product certification to delete. Format: accounts/{account}/languages/{language_code}/productCertifications/{id}
     * @return {object} The API response object.
     */
    this.accounts.languages.productCertifications.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
