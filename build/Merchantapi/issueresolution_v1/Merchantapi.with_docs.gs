
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

    this.accounts.aggregateProductStatuses = {};

    /**
     * Lists the `AggregateProductStatuses` resources for your merchant account. The response might contain fewer items than specified by `pageSize`. If `pageToken` was returned in previous request, it can be used to obtain additional results.
     * @param {string} params.filter - Optional. A filter expression that filters the aggregate product statuses. Filtering is only supported by the `reporting_context` and `country` field. For example: `reporting_context = "SHOPPING_ADS" AND country = "US"`.
     * @param {integer} params.pageSize - Optional. The maximum number of aggregate product statuses to return. The service may return fewer than this value. If unspecified, at most 25 aggregate product statuses are returned. The maximum value is 250; values above 250 are coerced to 250.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListAggregateProductStatuses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAggregateProductStatuses` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The account to list aggregate product statuses for. Format: `accounts/{account}`
     * @return {object} The API response object.
     */
    this.accounts.aggregateProductStatuses.list = (params) => this._makeRequest('issueresolution/v1/{+parent}/aggregateProductStatuses', 'GET', params);

    this.issueresolution = {};

    /**
     * Provide a list of business's account issues with an issue resolution content and available actions. This content and actions are meant to be rendered and shown in third-party applications.
     * @param {string} params.languageCode - Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize issue resolution content. If not set, the result will be in default language `en-US`.
     * @param {string} params.name - (Required) Required. The account to fetch issues for. Format: `accounts/{account}`
     * @param {string} params.timeZone - Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in an issue resolution content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.issueresolution.renderaccountissues = (params) => this._makeRequest('issueresolution/v1/{+name}:renderaccountissues', 'POST', params);

    /**
     * Provide a list of issues for business's product with an issue resolution content and available actions. This content and actions are meant to be rendered and shown in third-party applications.
     * @param {string} params.languageCode - Optional. The [IETF BCP-47](https://tools.ietf.org/html/bcp47) language code used to localize an issue resolution content. If not set, the result will be in default language `en-US`.
     * @param {string} params.name - (Required) Required. The name of the product to fetch issues for. Format: `accounts/{account}/products/{product}`
     * @param {string} params.timeZone - Optional. The [IANA](https://www.iana.org/time-zones) timezone used to localize times in an issue resolution content. For example 'America/Los_Angeles'. If not set, results will use as a default UTC.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.issueresolution.renderproductissues = (params) => this._makeRequest('issueresolution/v1/{+name}:renderproductissues', 'POST', params);

    /**
     * Start an action. The action can be requested by a business in third-party application. Before the business can request the action, the third-party application needs to show them action specific content and display a user input form. The action can be successfully started only once all `required` inputs are provided. If any `required` input is missing, or invalid value was provided, the service will return 400 error. Validation errors will contain Ids for all problematic field together with translated, human readable error messages that can be shown to the user.
     * @param {string} params.languageCode - Optional. Language code [IETF BCP 47 syntax](https://tools.ietf.org/html/bcp47) used to localize the response. If not set, the result will be in default language `en-US`.
     * @param {string} params.name - (Required) Required. The business's account that is triggering the action. Format: `accounts/{account}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.issueresolution.triggeraction = (params) => this._makeRequest('issueresolution/v1/{+name}:triggeraction', 'POST', params);
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
