
/**
 * Google Apps Script client library for the Enterprise License Manager API
 * Documentation URL: https://developers.google.com/workspace/admin/licensing/
 * @class
 */
class Licensing {
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
    this._rootUrl = 'https://licensing.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.licenseAssignments = {};

    /**
     * Revoke a license.
     * @param {string} params.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} params.skuId - (Required) A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {string} params.userId - (Required) The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
     * @return {object} The API response object.
     */
    this.licenseAssignments.delete = (params) => this._makeRequest('apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}', 'DELETE', params);

    /**
     * Get a specific user's license by product SKU.
     * @param {string} params.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} params.skuId - (Required) A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {string} params.userId - (Required) The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
     * @return {object} The API response object.
     */
    this.licenseAssignments.get = (params) => this._makeRequest('apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}', 'GET', params);

    /**
     * Assign a license.
     * @param {string} params.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} params.skuId - (Required) A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.licenseAssignments.insert = (params) => this._makeRequest('apps/licensing/v1/product/{productId}/sku/{skuId}/user', 'POST', params);

    /**
     * List all users assigned licenses for a specific product SKU.
     * @param {string} params.customerId - (Required) The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.
     * @param {integer} params.maxResults - The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
     * @param {string} params.pageToken - Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
     * @param {string} params.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @return {object} The API response object.
     */
    this.licenseAssignments.listForProduct = (params) => this._makeRequest('apps/licensing/v1/product/{productId}/users', 'GET', params);

    /**
     * List all users assigned licenses for a specific product SKU.
     * @param {string} params.customerId - (Required) The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.
     * @param {integer} params.maxResults - The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.
     * @param {string} params.pageToken - Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.
     * @param {string} params.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} params.skuId - (Required) A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @return {object} The API response object.
     */
    this.licenseAssignments.listForProductAndSku = (params) => this._makeRequest('apps/licensing/v1/product/{productId}/sku/{skuId}/users', 'GET', params);

    /**
     * Reassign a user's product SKU with a different SKU in the same product.
     * @param {string} params.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} params.skuId - (Required) A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {string} params.userId - (Required) The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.licenseAssignments.update = (params) => this._makeRequest('apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}', 'PUT', params);

    /**
     * Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.
     * @param {string} params.productId - (Required) A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.
     * @param {string} params.skuId - (Required) A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.
     * @param {string} params.userId - (Required) The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.licenseAssignments.patch = (params) => this._makeRequest('apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}', 'PATCH', params);
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
