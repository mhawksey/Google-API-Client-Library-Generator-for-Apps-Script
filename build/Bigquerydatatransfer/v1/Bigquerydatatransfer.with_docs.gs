
/**
 * Google Apps Script client library for the BigQuery Data Transfer API
 * Documentation URL: https://cloud.google.com/bigquery-transfer/
 * @class
 */
class Bigquerydatatransfer {
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
    this._rootUrl = 'https://bigquerydatatransfer.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
     * @param {string} params.name - (Required) Required. The name of the project resource in the form: `projects/{project_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.enrollDataSources = (params) => this._makeRequest('v1/{+name}:enrollDataSources', 'POST', params);

    this.projects.dataSources = {};

    /**
     * Retrieves a supported data source and returns its settings.
     * @param {string} params.name - (Required) Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/dataSources/{data_source_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`
     * @return {object} The API response object.
     */
    this.projects.dataSources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists supported data sources and returns their settings.
     * @param {integer} params.pageSize - Page size. The default page size is the maximum value of 1000 results.
     * @param {string} params.pageToken - Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent - (Required) Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.dataSources.list = (params) => this._makeRequest('v1/{+parent}/dataSources', 'GET', params);

    /**
     * Returns true if valid credentials exist for the given data source and requesting user.
     * @param {string} params.name - (Required) Required. The name of the data source. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/dataSources/{data_source_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.dataSources.checkValidCreds = (params) => this._makeRequest('v1/{+name}:checkValidCreds', 'POST', params);

    this.projects.transferConfigs = {};

    /**
     * Creates a new data transfer configuration.
     * @param {string} params.authorizationCode - Deprecated: Authorization code was required when `transferConfig.dataSourceId` is 'youtube_channel' but it is no longer used in any data sources. Use `version_info` instead. Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config.
     * @param {string} params.parent - (Required) Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail.
     * @param {string} params.serviceAccountName - Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts).
     * @param {string} params.versionInfo - Optional version info. This parameter replaces `authorization_code` which is no longer used in any data sources. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.transferConfigs.create = (params) => this._makeRequest('v1/{+parent}/transferConfigs', 'POST', params);

    /**
     * Updates a data transfer configuration. All fields must be set, even if they are not updated.
     * @param {string} params.authorizationCode - Deprecated: Authorization code was required when `transferConfig.dataSourceId` is 'youtube_channel' but it is no longer used in any data sources. Use `version_info` instead. Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config.
     * @param {string} params.name - (Required) Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/{project_id}/locations/{region}/transferConfigs/{config_id}` or `projects/{project_id}/transferConfigs/{config_id}`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
     * @param {string} params.serviceAccountName - Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts).
     * @param {string} params.updateMask - Required. Required list of fields to be updated in this request.
     * @param {string} params.versionInfo - Optional version info. This parameter replaces `authorization_code` which is no longer used in any data sources. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.transferConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a data transfer configuration, including any associated transfer runs and logs.
     * @param {string} params.name - (Required) Required. The name of the resource to delete. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @return {object} The API response object.
     */
    this.projects.transferConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Returns information about a data transfer config.
     * @param {string} params.name - (Required) Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @return {object} The API response object.
     */
    this.projects.transferConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns information about all transfer configs owned by a project in the specified location.
     * @param {string} params.dataSourceIds - When specified, only configurations of requested data sources are returned.
     * @param {integer} params.pageSize - Page size. The default page size is the maximum value of 1000 results.
     * @param {string} params.pageToken - Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent - (Required) Required. The BigQuery project id for which transfer configs should be returned. If you are using the regionless method, the location must be `US` and `parent` should be in the following form: * `projects/{project_id} If you are using the regionalized method, `parent` should be in the following form: * `projects/{project_id}/locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.transferConfigs.list = (params) => this._makeRequest('v1/{+parent}/transferConfigs', 'GET', params);

    /**
     * Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
     * @param {string} params.parent - (Required) Required. Transfer configuration name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.transferConfigs.scheduleRuns = (params) => this._makeRequest('v1/{+parent}:scheduleRuns', 'POST', params);

    /**
     * Manually initiates transfer runs. You can schedule these runs in two ways: 1. For a specific point in time using the 'requested_run_time' parameter. 2. For a period between 'start_time' (inclusive) and 'end_time' (exclusive). If scheduling a single run, it is set to execute immediately (schedule_time equals the current time). When scheduling multiple runs within a time range, the first run starts now, and subsequent runs are delayed by 15 seconds each.
     * @param {string} params.parent - (Required) Required. Transfer configuration name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.transferConfigs.startManualRuns = (params) => this._makeRequest('v1/{+parent}:startManualRuns', 'POST', params);

    this.projects.transferConfigs.runs = {};

    /**
     * Returns information about the particular transfer run.
     * @param {string} params.name - (Required) Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @return {object} The API response object.
     */
    this.projects.transferConfigs.runs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes the specified transfer run.
     * @param {string} params.name - (Required) Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @return {object} The API response object.
     */
    this.projects.transferConfigs.runs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Returns information about running and completed transfer runs.
     * @param {integer} params.pageSize - Page size. The default page size is the maximum value of 1000 results.
     * @param {string} params.pageToken - Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent - (Required) Required. Name of transfer configuration for which transfer runs should be retrieved. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @param {string} params.runAttempt - Indicates how run attempts are to be pulled.
     * @param {string} params.states - When specified, only transfer runs with requested states are returned.
     * @return {object} The API response object.
     */
    this.projects.transferConfigs.runs.list = (params) => this._makeRequest('v1/{+parent}/runs', 'GET', params);

    this.projects.transferConfigs.runs.transferLogs = {};

    /**
     * Returns log messages for the transfer run.
     * @param {string} params.messageTypes - Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
     * @param {integer} params.pageSize - Page size. The default page size is the maximum value of 1000 results.
     * @param {string} params.pageToken - Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent - (Required) Required. Transfer run name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @return {object} The API response object.
     */
    this.projects.transferConfigs.runs.transferLogs.list = (params) => this._makeRequest('v1/{+parent}/transferLogs', 'GET', params);

    this.projects.locations = {};

    /**
     * Enroll data sources in a user project. This allows users to create transfer configurations for these data sources. They will also appear in the ListDataSources RPC and as such, will appear in the [BigQuery UI](https://console.cloud.google.com/bigquery), and the documents can be found in the public guide for [BigQuery Web UI](https://cloud.google.com/bigquery/bigquery-web-ui) and [Data Transfer Service](https://cloud.google.com/bigquery/docs/working-with-transfers).
     * @param {string} params.name - (Required) Required. The name of the project resource in the form: `projects/{project_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.enrollDataSources = (params) => this._makeRequest('v1/{+name}:enrollDataSources', 'POST', params);

    /**
     * Unenroll data sources in a user project. This allows users to remove transfer configurations for these data sources. They will no longer appear in the ListDataSources RPC and will also no longer appear in the [BigQuery UI](https://console.cloud.google.com/bigquery). Data transfers configurations of unenrolled data sources will not be scheduled.
     * @param {string} params.name - (Required) Required. The name of the project resource in the form: `projects/{project_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.unenrollDataSources = (params) => this._makeRequest('v1/{+name}:unenrollDataSources', 'POST', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.dataSources = {};

    /**
     * Retrieves a supported data source and returns its settings.
     * @param {string} params.name - (Required) Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/dataSources/{data_source_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataSources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists supported data sources and returns their settings.
     * @param {integer} params.pageSize - Page size. The default page size is the maximum value of 1000 results.
     * @param {string} params.pageToken - Pagination token, which can be used to request a specific page of `ListDataSourcesRequest` list results. For multiple-page results, `ListDataSourcesResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent - (Required) Required. The BigQuery project id for which data sources should be returned. Must be in the form: `projects/{project_id}` or `projects/{project_id}/locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataSources.list = (params) => this._makeRequest('v1/{+parent}/dataSources', 'GET', params);

    /**
     * Returns true if valid credentials exist for the given data source and requesting user.
     * @param {string} params.name - (Required) Required. The name of the data source. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/dataSources/{data_source_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/dataSources/{data_source_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataSources.checkValidCreds = (params) => this._makeRequest('v1/{+name}:checkValidCreds', 'POST', params);

    this.projects.locations.transferConfigs = {};

    /**
     * Creates a new data transfer configuration.
     * @param {string} params.authorizationCode - Deprecated: Authorization code was required when `transferConfig.dataSourceId` is 'youtube_channel' but it is no longer used in any data sources. Use `version_info` instead. Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config.
     * @param {string} params.parent - (Required) Required. The BigQuery project id where the transfer configuration should be created. Must be in the format projects/{project_id}/locations/{location_id} or projects/{project_id}. If specified location and location of the destination bigquery dataset do not match - the request will fail.
     * @param {string} params.serviceAccountName - Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts).
     * @param {string} params.versionInfo - Optional version info. This parameter replaces `authorization_code` which is no longer used in any data sources. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to create the transfer config.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.transferConfigs.create = (params) => this._makeRequest('v1/{+parent}/transferConfigs', 'POST', params);

    /**
     * Updates a data transfer configuration. All fields must be set, even if they are not updated.
     * @param {string} params.authorizationCode - Deprecated: Authorization code was required when `transferConfig.dataSourceId` is 'youtube_channel' but it is no longer used in any data sources. Use `version_info` instead. Optional OAuth2 authorization code to use with this transfer configuration. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' and new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain authorization_code, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=authorization_code&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config.
     * @param {string} params.name - (Required) Identifier. The resource name of the transfer config. Transfer config names have the form either `projects/{project_id}/locations/{region}/transferConfigs/{config_id}` or `projects/{project_id}/transferConfigs/{config_id}`, where `config_id` is usually a UUID, even though it is not guaranteed or required. The name is ignored when creating a transfer config.
     * @param {string} params.serviceAccountName - Optional service account email. If this field is set, the transfer config will be created with this service account's credentials. It requires that the requesting user calling this API has permissions to act as this service account. Note that not all data sources support service account credentials when creating a transfer config. For the latest list of data sources, read about [using service accounts](https://cloud.google.com/bigquery-transfer/docs/use-service-accounts).
     * @param {string} params.updateMask - Required. Required list of fields to be updated in this request.
     * @param {string} params.versionInfo - Optional version info. This parameter replaces `authorization_code` which is no longer used in any data sources. This is required only if `transferConfig.dataSourceId` is 'youtube_channel' *or* new credentials are needed, as indicated by `CheckValidCreds`. In order to obtain version info, make a request to the following URL: https://bigquery.cloud.google.com/datatransfer/oauthz/auth?redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=version_info&client_id=client_id&scope=data_source_scopes * The client_id is the OAuth client_id of the data source as returned by ListDataSources method. * data_source_scopes are the scopes returned by ListDataSources method. Note that this should not be set when `service_account_name` is used to update the transfer config.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.transferConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a data transfer configuration, including any associated transfer runs and logs.
     * @param {string} params.name - (Required) Required. The name of the resource to delete. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.transferConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Returns information about a data transfer config.
     * @param {string} params.name - (Required) Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.transferConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Returns information about all transfer configs owned by a project in the specified location.
     * @param {string} params.dataSourceIds - When specified, only configurations of requested data sources are returned.
     * @param {integer} params.pageSize - Page size. The default page size is the maximum value of 1000 results.
     * @param {string} params.pageToken - Pagination token, which can be used to request a specific page of `ListTransfersRequest` list results. For multiple-page results, `ListTransfersResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent - (Required) Required. The BigQuery project id for which transfer configs should be returned. If you are using the regionless method, the location must be `US` and `parent` should be in the following form: * `projects/{project_id} If you are using the regionalized method, `parent` should be in the following form: * `projects/{project_id}/locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.transferConfigs.list = (params) => this._makeRequest('v1/{+parent}/transferConfigs', 'GET', params);

    /**
     * Creates transfer runs for a time range [start_time, end_time]. For each date - or whatever granularity the data source supports - in the range, one transfer run is created. Note that runs are created per UTC time in the time range. DEPRECATED: use StartManualTransferRuns instead.
     * @param {string} params.parent - (Required) Required. Transfer configuration name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.transferConfigs.scheduleRuns = (params) => this._makeRequest('v1/{+parent}:scheduleRuns', 'POST', params);

    /**
     * Manually initiates transfer runs. You can schedule these runs in two ways: 1. For a specific point in time using the 'requested_run_time' parameter. 2. For a period between 'start_time' (inclusive) and 'end_time' (exclusive). If scheduling a single run, it is set to execute immediately (schedule_time equals the current time). When scheduling multiple runs within a time range, the first run starts now, and subsequent runs are delayed by 15 seconds each.
     * @param {string} params.parent - (Required) Required. Transfer configuration name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.transferConfigs.startManualRuns = (params) => this._makeRequest('v1/{+parent}:startManualRuns', 'POST', params);

    this.projects.locations.transferConfigs.runs = {};

    /**
     * Returns information about the particular transfer run.
     * @param {string} params.name - (Required) Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.transferConfigs.runs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes the specified transfer run.
     * @param {string} params.name - (Required) Required. The name of the resource requested. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.transferConfigs.runs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Returns information about running and completed transfer runs.
     * @param {integer} params.pageSize - Page size. The default page size is the maximum value of 1000 results.
     * @param {string} params.pageToken - Pagination token, which can be used to request a specific page of `ListTransferRunsRequest` list results. For multiple-page results, `ListTransferRunsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent - (Required) Required. Name of transfer configuration for which transfer runs should be retrieved. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}`
     * @param {string} params.runAttempt - Indicates how run attempts are to be pulled.
     * @param {string} params.states - When specified, only transfer runs with requested states are returned.
     * @return {object} The API response object.
     */
    this.projects.locations.transferConfigs.runs.list = (params) => this._makeRequest('v1/{+parent}/runs', 'GET', params);

    this.projects.locations.transferConfigs.runs.transferLogs = {};

    /**
     * Returns log messages for the transfer run.
     * @param {string} params.messageTypes - Message types to return. If not populated - INFO, WARNING and ERROR messages are returned.
     * @param {integer} params.pageSize - Page size. The default page size is the maximum value of 1000 results.
     * @param {string} params.pageToken - Pagination token, which can be used to request a specific page of `ListTransferLogsRequest` list results. For multiple-page results, `ListTransferLogsResponse` outputs a `next_page` token, which can be used as the `page_token` value to request the next page of list results.
     * @param {string} params.parent - (Required) Required. Transfer run name. If you are using the regionless method, the location must be `US` and the name should be in the following form: * `projects/{project_id}/transferConfigs/{config_id}/runs/{run_id}` If you are using the regionalized method, the name should be in the following form: * `projects/{project_id}/locations/{location_id}/transferConfigs/{config_id}/runs/{run_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.transferConfigs.runs.transferLogs.list = (params) => this._makeRequest('v1/{+parent}/transferLogs', 'GET', params);
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
