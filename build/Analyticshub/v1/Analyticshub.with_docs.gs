
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://analyticshub.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.dataExchanges = {};

    /**
     * Lists all data exchanges in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call, to request the next page of results.
     * @param {string} apiParams.parent - (Required) Required. The parent resource path of the data exchanges. e.g. `projects/myproject/locations/us`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dataExchanges', 'GET', apiParams, clientConfig);

    /**
     * Gets the details of a data exchange.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new data exchange.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dataExchangeId - Required. The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Max length: 100 bytes.
     * @param {string} apiParams.parent - (Required) Required. The parent resource path of the data exchange. e.g. `projects/myproject/locations/us`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/dataExchanges', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing data exchange.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     * @param {string} apiParams.updateMask - Required. Field mask specifies the fields to update in the data exchange resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes an existing data exchange.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The full name of the data exchange resource that you want to delete. For example, `projects/myproject/locations/us/dataExchanges/123`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Creates a Subscription to a Data Clean Room. This is a long-running operation as it will create one or more linked datasets. Throws a Bad Request error if the Data Exchange does not contain any listings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the Data Exchange. e.g. `projects/publisherproject/locations/us/dataExchanges/123`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.subscribe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:subscribe', 'POST', apiParams, clientConfig);

    /**
     * Lists all subscriptions on a given Data Exchange or Listing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeDeletedSubscriptions - If selected, includes deleted subscriptions in the response (up to 63 days after deletion).
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response page.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call.
     * @param {string} apiParams.resource - (Required) Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/us/dataExchanges/456 OR e.g. projects/123/locations/us/dataExchanges/456/listings/789
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.listSubscriptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:listSubscriptions', 'GET', apiParams, clientConfig);

    /**
     * Gets the IAM policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Sets the IAM policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns the permissions that a caller has.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.dataExchanges.listings = {};

    /**
     * Lists all listings in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call, to request the next page of results.
     * @param {string} apiParams.parent - (Required) Required. The parent resource path of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.listings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/listings', 'GET', apiParams, clientConfig);

    /**
     * Gets the details of a listing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.listings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new listing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.listingId - Required. The ID of the listing to create. Must contain only Unicode letters, numbers (0-9), underscores (_). Max length: 100 bytes.
     * @param {string} apiParams.parent - (Required) Required. The parent resource path of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.listings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/listings', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing listing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`
     * @param {string} apiParams.updateMask - Required. Field mask specifies the fields to update in the listing resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.listings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a listing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.deleteCommercial - Optional. If the listing is commercial then this field must be set to true, otherwise a failure is thrown. This acts as a safety guard to avoid deleting commercial listings accidentally.
     * @param {string} apiParams.name - (Required) Required. Resource name of the listing to delete. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.listings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. Upon subscription to a listing for a BigQuery dataset, Analytics Hub creates a linked dataset in the subscriber's project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the listing that you want to subscribe to. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.listings.subscribe = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:subscribe', 'POST', apiParams, clientConfig);

    /**
     * Lists all subscriptions on a given Data Exchange or Listing.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.includeDeletedSubscriptions - If selected, includes deleted subscriptions in the response (up to 63 days after deletion).
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response page.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call.
     * @param {string} apiParams.resource - (Required) Required. Resource name of the requested target. This resource may be either a Listing or a DataExchange. e.g. projects/123/locations/us/dataExchanges/456 OR e.g. projects/123/locations/us/dataExchanges/456/listings/789
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.listings.listSubscriptions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:listSubscriptions', 'GET', apiParams, clientConfig);

    /**
     * Gets the IAM policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.listings.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Sets the IAM policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.listings.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Returns the permissions that a caller has.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.listings.testIamPermissions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', apiParams, clientConfig);

    this.projects.locations.dataExchanges.queryTemplates = {};

    /**
     * Creates a new QueryTemplate
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource path of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/myQueryTemplate`.
     * @param {string} apiParams.queryTemplateId - Required. The ID of the QueryTemplate to create. Must contain only Unicode letters, numbers (0-9), underscores (_). Max length: 100 bytes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.queryTemplates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/queryTemplates', 'POST', apiParams, clientConfig);

    /**
     * Gets a QueryTemplate
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The parent resource path of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/myqueryTemplate`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.queryTemplates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all QueryTemplates in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} apiParams.pageToken - Optional. Page token, returned by a previous call, to request the next page of results.
     * @param {string} apiParams.parent - (Required) Required. The parent resource path of the QueryTemplates. e.g. `projects/myproject/locations/us/dataExchanges/123`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.queryTemplates.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/queryTemplates', 'GET', apiParams, clientConfig);

    /**
     * Updates an existing QueryTemplate
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/456`
     * @param {string} apiParams.updateMask - Optional. Field mask specifies the fields to update in the query template resource. The fields specified in the `updateMask` are relative to the resource and are not a full request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.queryTemplates.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a query template.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource path of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/myqueryTemplate`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.queryTemplates.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Submits a query template for approval.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource path of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/myqueryTemplate`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.queryTemplates.submit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:submit', 'POST', apiParams, clientConfig);

    /**
     * Approves a query template.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource path of the QueryTemplate. e.g. `projects/myproject/locations/us/dataExchanges/123/queryTemplates/myqueryTemplate`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.dataExchanges.queryTemplates.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:approve', 'POST', apiParams, clientConfig);

    this.projects.locations.subscriptions = {};

    /**
     * Refreshes a Subscription to a Data Exchange. A Data Exchange can become stale when a publisher adds or removes data. This is a long-running operation as it may create many linked datasets.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the Subscription to refresh. e.g. `projects/subscriberproject/locations/us/subscriptions/123`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.subscriptions.refresh = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:refresh', 'POST', apiParams, clientConfig);

    /**
     * Gets the details of a Subscription.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the subscription. e.g. projects/123/locations/us/subscriptions/456
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.subscriptions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all subscriptions in a given project and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - An expression for filtering the results of the request. Eligible fields for filtering are: + `listing` + `data_exchange` Alternatively, a literal wrapped in double quotes may be provided. This will be checked for an exact match against both fields above. In all cases, the full Data Exchange or Listing resource name must be provided. Some example of using filters: + data_exchange="projects/myproject/locations/us/dataExchanges/123" + listing="projects/123/locations/us/dataExchanges/456/listings/789" + "projects/myproject/locations/us/dataExchanges/123"
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response page.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call.
     * @param {string} apiParams.parent - (Required) Required. The parent resource path of the subscription. e.g. projects/myproject/locations/us
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.subscriptions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/subscriptions', 'GET', apiParams, clientConfig);

    /**
     * Revokes a given subscription.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the subscription to revoke. e.g. projects/123/locations/us/subscriptions/456
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.subscriptions.revoke = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:revoke', 'POST', apiParams, clientConfig);

    /**
     * Deletes a subscription.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the subscription to delete. e.g. projects/123/locations/us/subscriptions/456
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.subscriptions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the IAM policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.subscriptions.getIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:getIamPolicy', 'POST', apiParams, clientConfig);

    /**
     * Sets the IAM policy.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.subscriptions.setIamPolicy = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', apiParams, clientConfig);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.dataExchanges = {};

    /**
     * Lists all data exchanges from projects in a given organization and location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.organization - (Required) Required. The organization resource path of the projects containing DataExchanges. e.g. `organizations/myorg/locations/us`.
     * @param {integer} apiParams.pageSize - The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection.
     * @param {string} apiParams.pageToken - Page token, returned by a previous call, to request the next page of results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.organizations.locations.dataExchanges.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+organization}/dataExchanges', 'GET', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
