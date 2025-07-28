
/**
 * Google Apps Script client library for the CSS API
 * Documentation URL: https://developers.google.com/comparison-shopping-services/api/overview
 * @class
 */
class Css {
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
    this._rootUrl = 'https://css.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.accounts = {};

    /**
     * Lists all the accounts under the specified CSS account ID, and optionally filters by label ID and account name.
     * @param {string} params.fullName - If set, only the MC accounts with the given name (case sensitive) will be returned.
     * @param {string} params.labelId - If set, only the MC accounts with the given label ID will be returned.
     * @param {integer} params.pageSize - Optional. The maximum number of accounts to return. The service may return fewer than this value. If unspecified, at most 50 accounts will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListChildAccounts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListChildAccounts` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent account. Must be a CSS group or domain. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.listChildAccounts = (params) => this._makeRequest('v1/{+parent}:listChildAccounts', 'GET', params);

    /**
     * Retrieves a single CSS/MC account by ID.
     * @param {string} params.name - (Required) Required. The name of the managed CSS/MC account. Format: accounts/{account}
     * @param {string} params.parent - Optional. Only required when retrieving MC account information. The CSS domain that is the parent resource of the MC account. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates labels assigned to CSS/MC accounts by a CSS domain.
     * @param {string} params.name - (Required) Required. The label resource name. Format: accounts/{account}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.updateLabels = (params) => this._makeRequest('v1/{+name}:updateLabels', 'POST', params);

    this.accounts.labels = {};

    /**
     * Lists the labels owned by an account.
     * @param {integer} params.pageSize - The maximum number of labels to return. The service may return fewer than this value. If unspecified, at most 50 labels will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListAccountLabels` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLabels` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent account. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.labels.list = (params) => this._makeRequest('v1/{+parent}/labels', 'GET', params);

    /**
     * Creates a new label, not assigned to any account.
     * @param {string} params.parent - (Required) Required. The parent account. Format: accounts/{account}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.labels.create = (params) => this._makeRequest('v1/{+parent}/labels', 'POST', params);

    /**
     * Updates a label.
     * @param {string} params.name - (Required) Identifier. The resource name of the label. Format: accounts/{account}/labels/{label}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.labels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a label and removes it from all accounts to which it was assigned.
     * @param {string} params.name - (Required) Required. The name of the label to delete. Format: accounts/{account}/labels/{label}
     * @return {object} The API response object.
     */
    this.accounts.labels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.accounts.cssProductInputs = {};

    /**
     * Uploads a CssProductInput to your CSS Center account. If an input with the same contentLanguage, identity, feedLabel and feedId already exists, this method replaces that entry. After inserting, updating, or deleting a CSS Product input, it may take several minutes before the processed CSS Product can be retrieved.
     * @param {string} params.feedId - Optional. DEPRECATED. Feed id is not required for CSS Products. The primary or supplemental feed id. If CSS Product already exists and feed id provided is different, then the CSS Product will be moved to a new feed. Note: For now, CSSs do not need to provide feed ids as we create feeds on the fly. We do not have supplemental feed support for CSS Products yet.
     * @param {string} params.parent - (Required) Required. The account where this CSS Product will be inserted. Format: accounts/{account}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.cssProductInputs.insert = (params) => this._makeRequest('v1/{+parent}/cssProductInputs:insert', 'POST', params);

    /**
     * Updates the existing Css Product input in your CSS Center account. After inserting, updating, or deleting a CSS Product input, it may take several minutes before the processed Css Product can be retrieved.
     * @param {string} params.name - (Required) Identifier. The name of the CSS Product input. Format: `accounts/{account}/cssProductInputs/{css_product_input}`, where the last section `css_product_input` consists of 3 parts: contentLanguage~feedLabel~offerId. Example: accounts/123/cssProductInputs/de~DE~rawProvidedId123
     * @param {string} params.updateMask - The list of CSS product attributes to be updated. If the update mask is omitted, then it is treated as implied field mask equivalent to all fields that are populated (have a non-empty value). Attributes specified in the update mask without a value specified in the body will be deleted from the CSS product. Update mask can only be specified for top level fields in attributes and custom attributes. To specify the update mask for custom attributes you need to add the `custom_attribute.` prefix. Providing special "*" value for full CSS product replacement is not supported.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.cssProductInputs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a CSS Product input from your CSS Center account. After a delete it may take several minutes until the input is no longer available.
     * @param {string} params.name - (Required) Required. The name of the CSS product input resource to delete. Format: accounts/{account}/cssProductInputs/{css_product_input}, where the last section `css_product_input` consists of 3 parts: contentLanguage~feedLabel~offerId. Example: accounts/123/cssProductInputs/de~DE~rawProvidedId123
     * @param {string} params.supplementalFeedId - The Content API Supplemental Feed ID. The field must not be set if the action applies to a primary feed. If the field is set, then product action applies to a supplemental feed instead of primary Content API feed.
     * @return {object} The API response object.
     */
    this.accounts.cssProductInputs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.accounts.cssProducts = {};

    /**
     * Retrieves the processed CSS Product from your CSS Center account. After inserting, updating, or deleting a product input, it may take several minutes before the updated final product can be retrieved.
     * @param {string} params.name - (Required) Required. The name of the CSS product to retrieve. Format: `accounts/{account}/cssProducts/{css_product}`
     * @return {object} The API response object.
     */
    this.accounts.cssProducts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists the processed CSS Products in your CSS Center account. The response might contain fewer items than specified by pageSize. Rely on pageToken to determine if there are more items to be requested. After inserting, updating, or deleting a CSS product input, it may take several minutes before the updated processed CSS product can be retrieved.
     * @param {integer} params.pageSize - The maximum number of CSS Products to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the maximum number of CSS products will be returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListCssProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCssProducts` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account/domain to list processed CSS Products for. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.cssProducts.list = (params) => this._makeRequest('v1/{+parent}/cssProducts', 'GET', params);

    this.accounts.quotas = {};

    /**
     * Lists the daily call quota and usage per group for your CSS Center account.
     * @param {integer} params.pageSize - Optional. The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token.
     * @param {string} params.parent - (Required) Required. The CSS account that owns the collection of method quotas and resources. In most cases, this is the CSS domain. Format: accounts/{account}
     * @return {object} The API response object.
     */
    this.accounts.quotas.list = (params) => this._makeRequest('v1/{+parent}/quotas', 'GET', params);
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
