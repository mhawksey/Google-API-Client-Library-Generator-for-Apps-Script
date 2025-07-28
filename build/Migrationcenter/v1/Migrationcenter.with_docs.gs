
/**
 * Google Apps Script client library for the Migration Center API
 * Documentation URL: https://cloud.google.com/migration-center
 * @class
 */
class Migrationcenter {
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
    this._rootUrl = 'https://migrationcenter.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Gets the details of regional settings.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.getSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the regional-level project settings.
     * @param {string} params.name - (Required) Output only. The name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `Settings` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.updateSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
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

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.assets = {};

    /**
     * Lists all the assets in a given project and location.
     * @param {string} params.filter - Filtering results.
     * @param {string} params.orderBy - Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for `ListAssetsRequest`.
     * @param {boolean} params.showHidden - Optional. When this value is set to 'true,' the response will include all assets, including those that are hidden.
     * @param {string} params.view - View of the assets. Defaults to BASIC.
     * @return {object} The API response object.
     */
    this.projects.locations.assets.list = (params) => this._makeRequest('v1/{+parent}/assets', 'GET', params);

    /**
     * Gets the details of an asset.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.view - View of the assets. Defaults to BASIC.
     * @return {object} The API response object.
     */
    this.projects.locations.assets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the parameters of an asset.
     * @param {string} params.name - (Required) Output only. The full name of the asset.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.assets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Updates the parameters of a list of assets.
     * @param {string} params.parent - (Required) Required. Parent value for batch asset update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.assets.batchUpdate = (params) => this._makeRequest('v1/{+parent}/assets:batchUpdate', 'POST', params);

    /**
     * Deletes an asset.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.assets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Deletes list of Assets.
     * @param {string} params.parent - (Required) Required. Parent value for batch asset delete.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.assets.batchDelete = (params) => this._makeRequest('v1/{+parent}/assets:batchDelete', 'POST', params);

    /**
     * Reports a set of frames.
     * @param {string} params.parent - (Required) Required. Parent of the resource.
     * @param {string} params.source - Required. Reference to a source.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.assets.reportAssetFrames = (params) => this._makeRequest('v1/{+parent}/assets:reportAssetFrames', 'POST', params);

    /**
     * Aggregates the requested fields based on provided function.
     * @param {string} params.parent - (Required) Required. Parent value for `AggregateAssetsValuesRequest`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.assets.aggregateValues = (params) => this._makeRequest('v1/{+parent}/assets:aggregateValues', 'POST', params);

    this.projects.locations.importJobs = {};

    /**
     * Creates an import job.
     * @param {string} params.importJobId - Required. ID of the import job.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.importJobs.create = (params) => this._makeRequest('v1/{+parent}/importJobs', 'POST', params);

    /**
     * Lists all import jobs.
     * @param {string} params.filter - Filtering results.
     * @param {string} params.orderBy - Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for `ListImportJobsRequest`.
     * @param {string} params.view - Optional. The level of details of each import job. Default value is BASIC.
     * @return {object} The API response object.
     */
    this.projects.locations.importJobs.list = (params) => this._makeRequest('v1/{+parent}/importJobs', 'GET', params);

    /**
     * Gets the details of an import job.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.view - Optional. The level of details of the import job. Default value is FULL.
     * @return {object} The API response object.
     */
    this.projects.locations.importJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes an import job.
     * @param {boolean} params.force - Optional. If set to `true`, any `ImportDataFiles` of this job will also be deleted If set to `false`, the request only works if the job has no data files.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.importJobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates an import job.
     * @param {string} params.name - (Required) Output only. The full name of the import job.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `Asset` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.importJobs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Validates an import job.
     * @param {string} params.name - (Required) Required. The name of the import job to validate.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.importJobs.validate = (params) => this._makeRequest('v1/{+name}:validate', 'POST', params);

    /**
     * Runs an import job.
     * @param {string} params.name - (Required) Required. The name of the import job to run.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.importJobs.run = (params) => this._makeRequest('v1/{+name}:run', 'POST', params);

    this.projects.locations.importJobs.importDataFiles = {};

    /**
     * Gets an import data file.
     * @param {string} params.name - (Required) Required. Name of the ImportDataFile.
     * @return {object} The API response object.
     */
    this.projects.locations.importJobs.importDataFiles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List import data files.
     * @param {string} params.filter - Filtering results.
     * @param {string} params.orderBy - Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - The maximum number of data files to return. The service may return fewer than this value. If unspecified, at most 500 data files will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListImportDataFiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImportDataFiles` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent of the `ImportDataFiles` resource.
     * @return {object} The API response object.
     */
    this.projects.locations.importJobs.importDataFiles.list = (params) => this._makeRequest('v1/{+parent}/importDataFiles', 'GET', params);

    /**
     * Creates an import data file.
     * @param {string} params.importDataFileId - Required. The ID of the new data file.
     * @param {string} params.parent - (Required) Required. Name of the parent of the ImportDataFile.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.importJobs.importDataFiles.create = (params) => this._makeRequest('v1/{+parent}/importDataFiles', 'POST', params);

    /**
     * Delete an import data file.
     * @param {string} params.name - (Required) Required. Name of the ImportDataFile to delete.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.importJobs.importDataFiles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.groups = {};

    /**
     * Lists all groups in a given project and location.
     * @param {string} params.filter - Filtering results.
     * @param {string} params.orderBy - Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for `ListGroupsRequest`.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.list = (params) => this._makeRequest('v1/{+parent}/groups', 'GET', params);

    /**
     * Gets the details of a group.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new group in a given project and location.
     * @param {string} params.groupId - Required. User specified ID for the group. It will become the last component of the group name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.create = (params) => this._makeRequest('v1/{+parent}/groups', 'POST', params);

    /**
     * Updates the parameters of a group.
     * @param {string} params.name - (Required) Output only. The name of the group.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `Group` resource by the update. The values specified in the `update_mask` are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a group.
     * @param {string} params.name - (Required) Required. Name of the group resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.groups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Adds assets to a group.
     * @param {string} params.group - (Required) Required. Group reference.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.addAssets = (params) => this._makeRequest('v1/{+group}:addAssets', 'POST', params);

    /**
     * Removes assets from a group.
     * @param {string} params.group - (Required) Required. Group reference.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.removeAssets = (params) => this._makeRequest('v1/{+group}:removeAssets', 'POST', params);

    this.projects.locations.sources = {};

    /**
     * Lists all the sources in a given project and location.
     * @param {string} params.filter - Filtering results.
     * @param {string} params.orderBy - Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
     * @param {string} params.pageToken - A token identifying a page of results that the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for `ListSourcesRequest`.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.list = (params) => this._makeRequest('v1/{+parent}/sources', 'GET', params);

    /**
     * Gets the details of a source.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new source in a given project and location.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.sourceId - Required. User specified ID for the source. It will become the last component of the source name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.create = (params) => this._makeRequest('v1/{+parent}/sources', 'POST', params);

    /**
     * Updates the parameters of a source.
     * @param {string} params.name - (Required) Output only. The full name of the source.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `Source` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a source.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.sources.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.sources.errorFrames = {};

    /**
     * Lists all error frames in a given source and location.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value (the source) for `ListErrorFramesRequest`.
     * @param {string} params.view - Optional. An optional view mode to control the level of details of each error frame. The default is a BASIC frame view.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.errorFrames.list = (params) => this._makeRequest('v1/{+parent}/errorFrames', 'GET', params);

    /**
     * Gets the details of an error frame.
     * @param {string} params.name - (Required) Required. The name of the frame to retrieve. Format: projects/{project}/locations/{location}/sources/{source}/errorFrames/{error_frame}
     * @param {string} params.view - Optional. An optional view mode to control the level of details for the frame. The default is a basic frame view.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.errorFrames.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.preferenceSets = {};

    /**
     * Lists all the preference sets in a given project and location.
     * @param {string} params.orderBy - Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, at most 500 preference sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for `ListPreferenceSetsRequest`.
     * @return {object} The API response object.
     */
    this.projects.locations.preferenceSets.list = (params) => this._makeRequest('v1/{+parent}/preferenceSets', 'GET', params);

    /**
     * Gets the details of a preference set.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.preferenceSets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new preference set in a given project and location.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.preferenceSetId - Required. User specified ID for the preference set. It will become the last component of the preference set name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.preferenceSets.create = (params) => this._makeRequest('v1/{+parent}/preferenceSets', 'POST', params);

    /**
     * Updates the parameters of a preference set.
     * @param {string} params.name - (Required) Output only. Name of the preference set.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the `PreferenceSet` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.preferenceSets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a preference set.
     * @param {string} params.name - (Required) Required. Name of the group resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.preferenceSets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.reportConfigs = {};

    /**
     * Creates a report configuration.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.reportConfigId - Required. User specified ID for the report config. It will become the last component of the report config name. The ID must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The ID must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reportConfigs.create = (params) => this._makeRequest('v1/{+parent}/reportConfigs', 'POST', params);

    /**
     * Gets details of a single ReportConfig.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.reportConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists ReportConfigs in a given project and location.
     * @param {string} params.filter - Filtering results.
     * @param {string} params.orderBy - Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for `ListReportConfigsRequest`.
     * @return {object} The API response object.
     */
    this.projects.locations.reportConfigs.list = (params) => this._makeRequest('v1/{+parent}/reportConfigs', 'GET', params);

    /**
     * Deletes a ReportConfig.
     * @param {boolean} params.force - Optional. If set to `true`, any child `Reports` of this entity will also be deleted. If set to `false`, the request only works if the resource has no children.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.reportConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.reportConfigs.reports = {};

    /**
     * Creates a report.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.reportId - Required. User specified id for the report. It will become the last component of the report name. The id must be unique within the project, must conform with RFC-1034, is restricted to lower-cased letters, and has a maximum length of 63 characters. The id must match the regular expression: [a-z]([a-z0-9-]{0,61}[a-z0-9])?.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.reportConfigs.reports.create = (params) => this._makeRequest('v1/{+parent}/reports', 'POST', params);

    /**
     * Gets details of a single Report.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.view - Determines what information to retrieve for the Report.
     * @return {object} The API response object.
     */
    this.projects.locations.reportConfigs.reports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists Reports in a given ReportConfig.
     * @param {string} params.filter - Filtering results.
     * @param {string} params.orderBy - Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Requested page size. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
     * @param {string} params.pageToken - A token identifying a page of results that the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for `ListReportsRequest`.
     * @param {string} params.view - Determines what information to retrieve for each Report.
     * @return {object} The API response object.
     */
    this.projects.locations.reportConfigs.reports.list = (params) => this._makeRequest('v1/{+parent}/reports', 'GET', params);

    /**
     * Deletes a Report.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.reportConfigs.reports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.discoveryClients = {};

    /**
     * Creates a new discovery client.
     * @param {string} params.discoveryClientId - Required. User specified ID for the discovery client. It will become the last component of the discovery client name. The ID must be unique within the project, is restricted to lower-cased letters and has a maximum length of 63 characters. The ID must match the regular expression: `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`.
     * @param {string} params.parent - (Required) Required. Parent resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveryClients.create = (params) => this._makeRequest('v1/{+parent}/discoveryClients', 'POST', params);

    /**
     * Gets the details of a discovery client.
     * @param {string} params.name - (Required) Required. The discovery client name.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveryClients.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all the discovery clients in a given project and location.
     * @param {string} params.filter - Optional. Filter expression to filter results by.
     * @param {string} params.orderBy - Optional. Field to sort by.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default value.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListDiscoveryClients` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDiscoveryClients` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Parent resource.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveryClients.list = (params) => this._makeRequest('v1/{+parent}/discoveryClients', 'GET', params);

    /**
     * Updates a discovery client.
     * @param {string} params.name - (Required) Output only. Identifier. Full name of this discovery client.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Update mask is used to specify the fields to be overwritten in the `DiscoveryClient` resource by the update. The values specified in the `update_mask` field are relative to the resource, not the full request. A field will be overwritten if it is in the mask. A single * value in the mask lets you to overwrite all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveryClients.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Sends a discovery client heartbeat. Healthy clients are expected to send heartbeats regularly (normally every few minutes).
     * @param {string} params.name - (Required) Required. The discovery client name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveryClients.sendHeartbeat = (params) => this._makeRequest('v1/{+name}:sendHeartbeat', 'POST', params);

    /**
     * Deletes a discovery client.
     * @param {string} params.name - (Required) Required. The discovery client name.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.discoveryClients.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.relations = {};

    /**
     * Gets the details of an relation.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.relations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all the relations in a given project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for `ListRelationsRequest`.
     * @return {object} The API response object.
     */
    this.projects.locations.relations.list = (params) => this._makeRequest('v1/{+parent}/relations', 'GET', params);
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
