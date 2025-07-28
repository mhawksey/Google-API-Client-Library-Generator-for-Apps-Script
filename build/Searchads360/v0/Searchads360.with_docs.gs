
/**
 * Google Apps Script client library for the Search Ads 360 Reporting API
 * Documentation URL: https://developers.google.com/search-ads/reporting
 * @class
 */
class Searchads360 {
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
    this._rootUrl = 'https://searchads360.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.customers = {};

    /**
     * Returns resource names of customers directly accessible by the user authenticating the call. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @return {object} The API response object.
     */
    this.customers.listAccessibleCustomers = (params) => this._makeRequest('v0/customers:listAccessibleCustomers', 'GET', params);

    this.customers.customColumns = {};

    /**
     * Returns the requested custom column in full detail.
     * @param {string} params.resourceName - (Required) Required. The resource name of the custom column to fetch.
     * @return {object} The API response object.
     */
    this.customers.customColumns.get = (params) => this._makeRequest('v0/{+resourceName}', 'GET', params);

    /**
     * Returns all the custom columns associated with the customer in full detail.
     * @param {string} params.customerId - (Required) Required. The ID of the customer to apply the CustomColumn list operation to.
     * @return {object} The API response object.
     */
    this.customers.customColumns.list = (params) => this._makeRequest('v0/customers/{+customerId}/customColumns', 'GET', params);

    this.customers.searchAds360 = {};

    /**
     * Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()
     * @param {string} params.customerId - (Required) Required. The ID of the customer being queried.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.customers.searchAds360.search = (params) => this._makeRequest('v0/customers/{+customerId}/searchAds360:search', 'POST', params);

    this.searchAds360Fields = {};

    /**
     * Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()
     * @param {string} params.resourceName - (Required) Required. The resource name of the field to get.
     * @return {object} The API response object.
     */
    this.searchAds360Fields.get = (params) => this._makeRequest('v0/{+resourceName}', 'GET', params);

    /**
     * Returns all fields that match the search [query](/search-ads/reporting/concepts/field-service#use_a_query_to_get_field_details). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.searchAds360Fields.search = (params) => this._makeRequest('v0/searchAds360Fields:search', 'POST', params);
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
