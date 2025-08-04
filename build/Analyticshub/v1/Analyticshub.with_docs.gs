
/**
 * Google Apps Script client library for the Analytics Hub API
 * Documentation URL: https://cloud.google.com/bigquery/docs/analytics-hub-introduction
 * @class
 */
class Analyticshub {
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
    this._rootUrl = 'https://analyticshub.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.dataExchanges = {};

    /**
     * Lists all data exchanges in a given project and location.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} params.pageToken - Page token, returned by a previous call, to request the next page of results.
     * @param {string} params.parent - (Required) Required. The parent resource path of the data exchanges. e.g. `projects/myproject/locations/us`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.list = (params) => this._makeRequest('v1/{+parent}/dataExchanges', 'GET', params);

    /**
     * Gets the details of a data exchange.
     * @param {string} params.name - (Required) Required. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new data exchange.
     * @param {string} params.dataExchangeId - Required. The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Max length: 100 bytes.
     * @param {string} params.parent - (Required) Required. The parent resource path of the data exchange. e.g. `projects/myproject/locations/us`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.create = (params) => this._makeRequest('v1/{+parent}/dataExchanges', 'POST', params);

    /**
     * Updates an existing data exchange.
     * @param {string} params.name - (Required) Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     * @param {string} params.updateMask - Required. Field mask specifies the fields to update in the data exchange resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an existing data exchange.
     * @param {string} params.name - (Required) Required. The full name of the data exchange resource that you want to delete. For example, `projects/myproject/locations/us/dataExchanges/123`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates a Subscription to a Data Clean Room. This is a long-running operation as it will create one or more linked datasets. Throws a Bad Request error if the Data Exchange does not contain any listings.
     * @param {string} params.name - (Required) Required. Resource name of the Data Exchange. e.g. `projects/publisherproject/locations/us/dataExchanges/123`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.subscribe = (params) => this._makeRequest('v1/{+name}:subscribe', 'POST', params);

    /**
     * Lists all subscriptions on a given Data Exchange or Listing.
     * @param {boolean} params.includeDeletedSubscriptions - If selected, includes deleted subscriptions in the response (up to 63 days after deletion).
     * @param {integer} params.pageSize - The maximum number of results to return in a single response page.
     * @param {string} params.pageToken - Page token, returned by a previous call.
     * @param {string} params.resource - (Required) Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/us/dataExchanges/456 OR e.g. projects/123/locations/us/dataExchanges/456/listings/789
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.listSubscriptions = (params) => this._makeRequest('v1/{+resource}:listSubscriptions', 'GET', params);

    /**
     * Gets the IAM policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.dataExchanges.listings = {};

    /**
     * Lists all listings in a given project and location.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} params.pageToken - Page token, returned by a previous call, to request the next page of results.
     * @param {string} params.parent - (Required) Required. The parent resource path of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.listings.list = (params) => this._makeRequest('v1/{+parent}/listings', 'GET', params);

    /**
     * Gets the details of a listing.
     * @param {string} params.name - (Required) Required. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.listings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new listing.
     * @param {string} params.listingId - Required. The ID of the listing to create. Must contain only Unicode letters, numbers (0-9), underscores (_). Max length: 100 bytes.
     * @param {string} params.parent - (Required) Required. The parent resource path of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.listings.create = (params) => this._makeRequest('v1/{+parent}/listings', 'POST', params);

    /**
     * Updates an existing listing.
     * @param {string} params.name - (Required) Output only. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`
     * @param {string} params.updateMask - Required. Field mask specifies the fields to update in the listing resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.listings.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a listing.
     * @param {boolean} params.deleteCommercial - Optional. If the listing is commercial then this field must be set to true, otherwise a failure is thrown. This acts as a safety guard to avoid deleting commercial listings accidentally.
     * @param {string} params.name - (Required) Required. Resource name of the listing to delete. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.listings.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. Upon subscription to a listing for a BigQuery dataset, Analytics Hub creates a linked dataset in the subscriber's project.
     * @param {string} params.name - (Required) Required. Resource name of the listing that you want to subscribe to. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.listings.subscribe = (params) => this._makeRequest('v1/{+name}:subscribe', 'POST', params);

    /**
     * Lists all subscriptions on a given Data Exchange or Listing.
     * @param {boolean} params.includeDeletedSubscriptions - If selected, includes deleted subscriptions in the response (up to 63 days after deletion).
     * @param {integer} params.pageSize - The maximum number of results to return in a single response page.
     * @param {string} params.pageToken - Page token, returned by a previous call.
     * @param {string} params.resource - (Required) Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/us/dataExchanges/456 OR e.g. projects/123/locations/us/dataExchanges/456/listings/789
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.listings.listSubscriptions = (params) => this._makeRequest('v1/{+resource}:listSubscriptions', 'GET', params);

    /**
     * Gets the IAM policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.listings.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.listings.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns the permissions that a caller has.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataExchanges.listings.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.subscriptions = {};

    /**
     * Refreshes a Subscription to a Data Exchange. A Data Exchange can become stale when a publisher adds or removes data. This is a long-running operation as it may create many linked datasets.
     * @param {string} params.name - (Required) Required. Resource name of the Subscription to refresh. e.g. `projects/subscriberproject/locations/us/subscriptions/123`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.subscriptions.refresh = (params) => this._makeRequest('v1/{+name}:refresh', 'POST', params);

    /**
     * Gets the details of a Subscription.
     * @param {string} params.name - (Required) Required. Resource name of the subscription. e.g. projects/123/locations/us/subscriptions/456
     * @return {object} The API response object.
     */
    this.projects.locations.subscriptions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all subscriptions in a given project and location.
     * @param {string} params.filter - An expression for filtering the results of the request. Eligible fields for filtering are: + `listing` + `data_exchange` Alternatively, a literal wrapped in double quotes may be provided. This will be checked for an exact match against both fields above. In all cases, the full Data Exchange or Listing resource name must be provided. Some example of using filters: + data_exchange="projects/myproject/locations/us/dataExchanges/123" + listing="projects/123/locations/us/dataExchanges/456/listings/789" + "projects/myproject/locations/us/dataExchanges/123"
     * @param {integer} params.pageSize - The maximum number of results to return in a single response page.
     * @param {string} params.pageToken - Page token, returned by a previous call.
     * @param {string} params.parent - (Required) Required. The parent resource path of the subscription. e.g. projects/myproject/locations/us
     * @return {object} The API response object.
     */
    this.projects.locations.subscriptions.list = (params) => this._makeRequest('v1/{+parent}/subscriptions', 'GET', params);

    /**
     * Revokes a given subscription.
     * @param {string} params.name - (Required) Required. Resource name of the subscription to revoke. e.g. projects/123/locations/us/subscriptions/456
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.subscriptions.revoke = (params) => this._makeRequest('v1/{+name}:revoke', 'POST', params);

    /**
     * Deletes a subscription.
     * @param {string} params.name - (Required) Required. Resource name of the subscription to delete. e.g. projects/123/locations/us/subscriptions/456
     * @return {object} The API response object.
     */
    this.projects.locations.subscriptions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets the IAM policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.subscriptions.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', params);

    /**
     * Sets the IAM policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.subscriptions.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.dataExchanges = {};

    /**
     * Lists all data exchanges from projects in a given organization and location.
     * @param {string} params.organization - (Required) Required. The organization resource path of the projects containing DataExchanges. e.g. `organizations/myorg/locations/us`.
     * @param {integer} params.pageSize - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} params.pageToken - Page token, returned by a previous call, to request the next page of results.
     * @return {object} The API response object.
     */
    this.organizations.locations.dataExchanges.list = (params) => this._makeRequest('v1/{+organization}/dataExchanges', 'GET', params);
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
