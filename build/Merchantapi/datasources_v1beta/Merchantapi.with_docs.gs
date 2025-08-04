
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

    this.accounts.dataSources = {};

    /**
     * Retrieves the data source configuration for the given account.
     * @param {string} params.name - (Required) Required. The name of the data source to retrieve. Format: `accounts/{account}/dataSources/{datasource}`
     * @return {object} The API response object.
     */
    this.accounts.dataSources.get = (params) => this._makeRequest('datasources/v1beta/{+name}', 'GET', params);

    /**
     * Lists the configurations for data sources for the given account.
     * @param {integer} params.pageSize - Optional. The maximum number of data sources to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the maximum number of data sources will be returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListDataSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDataSources` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account to list data sources for. Format: `accounts/{account}`
     * @return {object} The API response object.
     */
    this.accounts.dataSources.list = (params) => this._makeRequest('datasources/v1beta/{+parent}/dataSources', 'GET', params);

    /**
     * Creates the new data source configuration for the given account. This method always creates a new data source.
     * @param {string} params.parent - (Required) Required. The account where this data source will be created. Format: `accounts/{account}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.dataSources.create = (params) => this._makeRequest('datasources/v1beta/{+parent}/dataSources', 'POST', params);

    /**
     * Updates the existing data source configuration. The fields that are set in the update mask but not provided in the resource will be deleted.
     * @param {string} params.name - (Required) Required. Identifier. The name of the data source. Format: `accounts/{account}/dataSources/{datasource}`
     * @param {string} params.updateMask - Required. The list of data source fields to be updated. Fields specified in the update mask without a value specified in the body will be deleted from the data source. Providing special "*" value for full data source replacement is not supported. For example, If you insert `updateMask=displayName` in the request, it will only update the `displayName` leaving all other fields untouched.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.dataSources.patch = (params) => this._makeRequest('datasources/v1beta/{+name}', 'PATCH', params);

    /**
     * Deletes a data source from your Merchant Center account.
     * @param {string} params.name - (Required) Required. The name of the data source to delete. Format: `accounts/{account}/dataSources/{datasource}`
     * @return {object} The API response object.
     */
    this.accounts.dataSources.delete = (params) => this._makeRequest('datasources/v1beta/{+name}', 'DELETE', params);

    /**
     * Performs the data fetch immediately (even outside fetch schedule) on a data source from your Merchant Center Account. If you need to call this method more than once per day, you should use the Products service to update your product data instead. This method only works on data sources with a file input set.
     * @param {string} params.name - (Required) Required. The name of the data source resource to fetch. Format: `accounts/{account}/dataSources/{datasource}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accounts.dataSources.fetch = (params) => this._makeRequest('datasources/v1beta/{+name}:fetch', 'POST', params);

    this.accounts.dataSources.fileUploads = {};

    /**
     * Gets the latest data source file upload. Only the `latest` alias is accepted for a file upload.
     * @param {string} params.name - (Required) Required. The name of the data source file upload to retrieve. Format: `accounts/{account}/dataSources/{datasource}/fileUploads/latest`
     * @return {object} The API response object.
     */
    this.accounts.dataSources.fileUploads.get = (params) => this._makeRequest('datasources/v1beta/{+name}', 'GET', params);
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
