
/**
 * Google Apps Script client library for the VM Migration API
 * Documentation URL: https://cloud.google.com/migrate/virtual-machines
 * @class
 */
class Vmmigration {
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
    this._rootUrl = 'https://vmmigration.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

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

    this.projects.locations.sources = {};

    /**
     * Lists Sources in a given project and location.
     * @param {string} params.filter - Optional. The filter request.
     * @param {string} params.orderBy - Optional. the order by fields for the result.
     * @param {integer} params.pageSize - Optional. The maximum number of sources to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Required. A page token, received from a previous `ListSources` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSources` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of sources.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.list = (params) => this._makeRequest('v1/{+parent}/sources', 'GET', params);

    /**
     * Gets details of a single Source.
     * @param {string} params.name - (Required) Required. The Source name.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Source in a given project and location.
     * @param {string} params.parent - (Required) Required. The Source's parent.
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.sourceId - Required. The source identifier.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.create = (params) => this._makeRequest('v1/{+parent}/sources', 'POST', params);

    /**
     * Updates the parameters of a single Source.
     * @param {string} params.name - (Required) Output only. The Source name.
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the Source resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Source.
     * @param {string} params.name - (Required) Required. The Source name.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.sources.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * List remote source's inventory of VMs. The remote source is the onprem vCenter (remote in the sense it's not in Compute Engine). The inventory describes the list of existing VMs in that source. Note that this operation lists the VMs on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
     * @param {boolean} params.forceRefresh - If this flag is set to true, the source will be queried instead of using cached results. Using this flag will make the call slower.
     * @param {integer} params.pageSize - The maximum number of VMs to return. The service may return fewer than this value. For AWS source: If unspecified, at most 500 VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. For VMWare source: If unspecified, all VMs will be returned. There is no limit for maximum value.
     * @param {string} params.pageToken - A page token, received from a previous `FetchInventory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchInventory` must match the call that provided the page token.
     * @param {string} params.source - (Required) Required. The name of the Source.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.fetchInventory = (params) => this._makeRequest('v1/{+source}:fetchInventory', 'GET', params);

    /**
     * List remote source's inventory of storage resources. The remote source is another cloud vendor (e.g. AWS, Azure). The inventory describes the list of existing storage resources in that source. Note that this operation lists the resources on the remote source, as opposed to listing the MigratingVms resources in the vmmigration service.
     * @param {boolean} params.forceRefresh - Optional. If this flag is set to true, the source will be queried instead of using cached results. Using this flag will make the call slower.
     * @param {integer} params.pageSize - Optional. The maximum number of VMs to return. The service may return fewer than this value.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `FetchStorageInventory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchStorageInventory` must match the call that provided the page token.
     * @param {string} params.source - (Required) Required. The name of the Source.
     * @param {string} params.type - Required. The type of the storage inventory to fetch.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.fetchStorageInventory = (params) => this._makeRequest('v1/{+source}:fetchStorageInventory', 'GET', params);

    this.projects.locations.sources.utilizationReports = {};

    /**
     * Lists Utilization Reports of the given Source.
     * @param {string} params.filter - Optional. The filter request.
     * @param {string} params.orderBy - Optional. the order by fields for the result.
     * @param {integer} params.pageSize - Optional. The maximum number of reports to return. The service may return fewer than this value. If unspecified, at most 500 reports will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Required. A page token, received from a previous `ListUtilizationReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUtilizationReports` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The Utilization Reports parent.
     * @param {string} params.view - Optional. The level of details of each report. Defaults to BASIC.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.utilizationReports.list = (params) => this._makeRequest('v1/{+parent}/utilizationReports', 'GET', params);

    /**
     * Gets a single Utilization Report.
     * @param {string} params.name - (Required) Required. The Utilization Report name.
     * @param {string} params.view - Optional. The level of details of the report. Defaults to FULL
     * @return {object} The API response object.
     */
    this.projects.locations.sources.utilizationReports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new UtilizationReport.
     * @param {string} params.parent - (Required) Required. The Utilization Report's parent.
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.utilizationReportId - Required. The ID to use for the report, which will become the final component of the reports's resource name. This value maximum length is 63 characters, and valid characters are /a-z-/. It must start with an english letter and must not end with a hyphen.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.utilizationReports.create = (params) => this._makeRequest('v1/{+parent}/utilizationReports', 'POST', params);

    /**
     * Deletes a single Utilization Report.
     * @param {string} params.name - (Required) Required. The Utilization Report name.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.sources.utilizationReports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.sources.datacenterConnectors = {};

    /**
     * Lists DatacenterConnectors in a given Source.
     * @param {string} params.filter - Optional. The filter request.
     * @param {string} params.orderBy - Optional. the order by fields for the result.
     * @param {integer} params.pageSize - Optional. The maximum number of connectors to return. The service may return fewer than this value. If unspecified, at most 500 sources will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Required. A page token, received from a previous `ListDatacenterConnectors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatacenterConnectors` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of connectors.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.datacenterConnectors.list = (params) => this._makeRequest('v1/{+parent}/datacenterConnectors', 'GET', params);

    /**
     * Gets details of a single DatacenterConnector.
     * @param {string} params.name - (Required) Required. The name of the DatacenterConnector.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.datacenterConnectors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new DatacenterConnector in a given Source.
     * @param {string} params.datacenterConnectorId - Required. The datacenterConnector identifier.
     * @param {string} params.parent - (Required) Required. The DatacenterConnector's parent. Required. The Source in where the new DatacenterConnector will be created. For example: `projects/my-project/locations/us-central1/sources/my-source`
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.datacenterConnectors.create = (params) => this._makeRequest('v1/{+parent}/datacenterConnectors', 'POST', params);

    /**
     * Deletes a single DatacenterConnector.
     * @param {string} params.name - (Required) Required. The DatacenterConnector name.
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.sources.datacenterConnectors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Upgrades the appliance relate to this DatacenterConnector to the in-place updateable version.
     * @param {string} params.datacenterConnector - (Required) Required. The DatacenterConnector name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.datacenterConnectors.upgradeAppliance = (params) => this._makeRequest('v1/{+datacenterConnector}:upgradeAppliance', 'POST', params);

    this.projects.locations.sources.migratingVms = {};

    /**
     * Creates a new MigratingVm in a given Source.
     * @param {string} params.migratingVmId - Required. The migratingVm identifier.
     * @param {string} params.parent - (Required) Required. The MigratingVm's parent.
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.create = (params) => this._makeRequest('v1/{+parent}/migratingVms', 'POST', params);

    /**
     * Lists MigratingVms in a given Source.
     * @param {string} params.filter - Optional. The filter request.
     * @param {string} params.orderBy - Optional. the order by fields for the result.
     * @param {integer} params.pageSize - Optional. The maximum number of migrating VMs to return. The service may return fewer than this value. If unspecified, at most 500 migrating VMs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Required. A page token, received from a previous `ListMigratingVms` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMigratingVms` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of MigratingVms.
     * @param {string} params.view - Optional. The level of details of each migrating VM.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.list = (params) => this._makeRequest('v1/{+parent}/migratingVms', 'GET', params);

    /**
     * Gets details of a single MigratingVm.
     * @param {string} params.name - (Required) Required. The name of the MigratingVm.
     * @param {string} params.view - Optional. The level of details of the migrating VM.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the parameters of a single MigratingVm.
     * @param {string} params.name - (Required) Output only. The identifier of the MigratingVm.
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the MigratingVm resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single MigratingVm.
     * @param {string} params.name - (Required) Required. The name of the MigratingVm.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts migration for a VM. Starts the process of uploading data and creating snapshots, in replication cycles scheduled by the policy.
     * @param {string} params.migratingVm - (Required) Required. The name of the MigratingVm.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.startMigration = (params) => this._makeRequest('v1/{+migratingVm}:startMigration', 'POST', params);

    /**
     * Resumes a migration for a VM. When called on a paused migration, will start the process of uploading data and creating snapshots; when called on a completed cut-over migration, will update the migration to active state and start the process of uploading data and creating snapshots.
     * @param {string} params.migratingVm - (Required) Required. The name of the MigratingVm.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.resumeMigration = (params) => this._makeRequest('v1/{+migratingVm}:resumeMigration', 'POST', params);

    /**
     * Pauses a migration for a VM. If cycle tasks are running they will be cancelled, preserving source task data. Further replication cycles will not be triggered while the VM is paused.
     * @param {string} params.migratingVm - (Required) Required. The name of the MigratingVm.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.pauseMigration = (params) => this._makeRequest('v1/{+migratingVm}:pauseMigration', 'POST', params);

    /**
     * Marks a migration as completed, deleting migration resources that are no longer being used. Only applicable after cutover is done.
     * @param {string} params.migratingVm - (Required) Required. The name of the MigratingVm.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.finalizeMigration = (params) => this._makeRequest('v1/{+migratingVm}:finalizeMigration', 'POST', params);

    /**
     * Extend the migrating VM time to live.
     * @param {string} params.migratingVm - (Required) Required. The name of the MigratingVm.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.extendMigration = (params) => this._makeRequest('v1/{+migratingVm}:extendMigration', 'POST', params);

    this.projects.locations.sources.migratingVms.cloneJobs = {};

    /**
     * Initiates a Clone of a specific migrating VM.
     * @param {string} params.cloneJobId - Required. The clone job identifier.
     * @param {string} params.parent - (Required) Required. The Clone's parent.
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.cloneJobs.create = (params) => this._makeRequest('v1/{+parent}/cloneJobs', 'POST', params);

    /**
     * Initiates the cancellation of a running clone job.
     * @param {string} params.name - (Required) Required. The clone job id
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.cloneJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * Lists the CloneJobs of a migrating VM. Only 25 most recent CloneJobs are listed.
     * @param {string} params.filter - Optional. The filter request.
     * @param {string} params.orderBy - Optional. the order by fields for the result.
     * @param {integer} params.pageSize - Optional. The maximum number of clone jobs to return. The service may return fewer than this value. If unspecified, at most 500 clone jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Required. A page token, received from a previous `ListCloneJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCloneJobs` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of source VMs.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.cloneJobs.list = (params) => this._makeRequest('v1/{+parent}/cloneJobs', 'GET', params);

    /**
     * Gets details of a single CloneJob.
     * @param {string} params.name - (Required) Required. The name of the CloneJob.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.cloneJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.sources.migratingVms.cutoverJobs = {};

    /**
     * Initiates a Cutover of a specific migrating VM. The returned LRO is completed when the cutover job resource is created and the job is initiated.
     * @param {string} params.cutoverJobId - Required. The cutover job identifier.
     * @param {string} params.parent - (Required) Required. The Cutover's parent.
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.cutoverJobs.create = (params) => this._makeRequest('v1/{+parent}/cutoverJobs', 'POST', params);

    /**
     * Initiates the cancellation of a running cutover job.
     * @param {string} params.name - (Required) Required. The cutover job id
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.cutoverJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * Lists the CutoverJobs of a migrating VM. Only 25 most recent CutoverJobs are listed.
     * @param {string} params.filter - Optional. The filter request.
     * @param {string} params.orderBy - Optional. the order by fields for the result.
     * @param {integer} params.pageSize - Optional. The maximum number of cutover jobs to return. The service may return fewer than this value. If unspecified, at most 500 cutover jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Required. A page token, received from a previous `ListCutoverJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCutoverJobs` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of migrating VMs.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.cutoverJobs.list = (params) => this._makeRequest('v1/{+parent}/cutoverJobs', 'GET', params);

    /**
     * Gets details of a single CutoverJob.
     * @param {string} params.name - (Required) Required. The name of the CutoverJob.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.cutoverJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.sources.migratingVms.replicationCycles = {};

    /**
     * Lists ReplicationCycles in a given MigratingVM.
     * @param {string} params.filter - Optional. The filter request.
     * @param {string} params.orderBy - Optional. the order by fields for the result.
     * @param {integer} params.pageSize - Optional. The maximum number of replication cycles to return. The service may return fewer than this value. If unspecified, at most 100 migrating VMs will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - Required. A page token, received from a previous `ListReplicationCycles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReplicationCycles` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of ReplicationCycles.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.replicationCycles.list = (params) => this._makeRequest('v1/{+parent}/replicationCycles', 'GET', params);

    /**
     * Gets details of a single ReplicationCycle.
     * @param {string} params.name - (Required) Required. The name of the ReplicationCycle.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.migratingVms.replicationCycles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.sources.diskMigrationJobs = {};

    /**
     * Creates a new disk migration job in a given Source.
     * @param {string} params.diskMigrationJobId - Required. The DiskMigrationJob identifier. The maximum length of this value is 63 characters. Valid characters are lower case Latin letters, digits and hyphen. It must start with a Latin letter and must not end with a hyphen.
     * @param {string} params.parent - (Required) Required. The DiskMigrationJob's parent.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request timed out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.diskMigrationJobs.create = (params) => this._makeRequest('v1/{+parent}/diskMigrationJobs', 'POST', params);

    /**
     * Lists DiskMigrationJobs in a given Source.
     * @param {string} params.filter - Optional. The filter request (according to AIP-160).
     * @param {string} params.orderBy - Optional. Ordering of the result list.
     * @param {integer} params.pageSize - Optional. The maximum number of disk migration jobs to return. The service may return fewer than this value. If unspecified, at most 500 disk migration jobs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListDiskMigrationJobs` call. Provide this to retrieve the subsequent page. When paginating, all parameters provided to `ListDiskMigrationJobs` except `page_size` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of DiskMigrationJobs.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.diskMigrationJobs.list = (params) => this._makeRequest('v1/{+parent}/diskMigrationJobs', 'GET', params);

    /**
     * Gets details of a single DiskMigrationJob.
     * @param {string} params.name - (Required) Required. The name of the DiskMigrationJob.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.diskMigrationJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the parameters of a single DiskMigrationJob.
     * @param {string} params.name - (Required) Output only. Identifier. The identifier of the DiskMigrationJob.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request timed out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the DiskMigrationJob resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask, then a mask equivalent to all fields that are populated (have a non-empty value), will be implied.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.diskMigrationJobs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single DiskMigrationJob.
     * @param {string} params.name - (Required) Required. The name of the DiskMigrationJob.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.diskMigrationJobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Runs the disk migration job.
     * @param {string} params.name - (Required) Required. The name of the DiskMigrationJob.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.diskMigrationJobs.run = (params) => this._makeRequest('v1/{+name}:run', 'POST', params);

    /**
     * Cancels the disk migration job.
     * @param {string} params.name - (Required) Required. The name of the DiskMigrationJob.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sources.diskMigrationJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.groups = {};

    /**
     * Lists Groups in a given project and location.
     * @param {string} params.filter - Optional. The filter request.
     * @param {string} params.orderBy - Optional. the order by fields for the result.
     * @param {integer} params.pageSize - Optional. The maximum number of groups to return. The service may return fewer than this value. If unspecified, at most 500 groups will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Required. A page token, received from a previous `ListGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGroups` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of groups.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.list = (params) => this._makeRequest('v1/{+parent}/groups', 'GET', params);

    /**
     * Gets details of a single Group.
     * @param {string} params.name - (Required) Required. The group name.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Group in a given project and location.
     * @param {string} params.groupId - Required. The group identifier.
     * @param {string} params.parent - (Required) Required. The Group's parent.
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.create = (params) => this._makeRequest('v1/{+parent}/groups', 'POST', params);

    /**
     * Updates the parameters of a single Group.
     * @param {string} params.name - (Required) Output only. The Group name.
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the Group resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Group.
     * @param {string} params.name - (Required) Required. The Group name.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.groups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Adds a MigratingVm to a Group.
     * @param {string} params.group - (Required) Required. The full path name of the Group to add to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.addGroupMigration = (params) => this._makeRequest('v1/{+group}:addGroupMigration', 'POST', params);

    /**
     * Removes a MigratingVm from a Group.
     * @param {string} params.group - (Required) Required. The name of the Group.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.removeGroupMigration = (params) => this._makeRequest('v1/{+group}:removeGroupMigration', 'POST', params);

    this.projects.locations.targetProjects = {};

    /**
     * Lists TargetProjects in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     * @param {string} params.filter - Optional. The filter request.
     * @param {string} params.orderBy - Optional. the order by fields for the result.
     * @param {integer} params.pageSize - Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Required. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargets` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of targets.
     * @return {object} The API response object.
     */
    this.projects.locations.targetProjects.list = (params) => this._makeRequest('v1/{+parent}/targetProjects', 'GET', params);

    /**
     * Gets details of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     * @param {string} params.name - (Required) Required. The TargetProject name.
     * @return {object} The API response object.
     */
    this.projects.locations.targetProjects.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new TargetProject in a given project. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     * @param {string} params.parent - (Required) Required. The TargetProject's parent.
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.targetProjectId - Required. The target_project identifier.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.targetProjects.create = (params) => this._makeRequest('v1/{+parent}/targetProjects', 'POST', params);

    /**
     * Updates the parameters of a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     * @param {string} params.name - (Required) Output only. The name of the target project.
     * @param {string} params.requestId - A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Field mask is used to specify the fields to be overwritten in the TargetProject resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.targetProjects.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single TargetProject. NOTE: TargetProject is a global resource; hence the only supported value for location is `global`.
     * @param {string} params.name - (Required) Required. The TargetProject name.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.targetProjects.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.imageImports = {};

    /**
     * Lists ImageImports in a given project.
     * @param {string} params.filter - Optional. The filter request (according to AIP-160).
     * @param {string} params.orderBy - Optional. The order by fields for the result (according to AIP-132). Currently ordering is only possible by "name" field.
     * @param {integer} params.pageSize - Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListImageImports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImageImports` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of targets.
     * @return {object} The API response object.
     */
    this.projects.locations.imageImports.list = (params) => this._makeRequest('v1/{+parent}/imageImports', 'GET', params);

    /**
     * Gets details of a single ImageImport.
     * @param {string} params.name - (Required) Required. The ImageImport name.
     * @return {object} The API response object.
     */
    this.projects.locations.imageImports.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new ImageImport in a given project.
     * @param {string} params.imageImportId - Required. The image import identifier. This value maximum length is 63 characters, and valid characters are /a-z-/. It must start with an english letter and must not end with a hyphen.
     * @param {string} params.parent - (Required) Required. The ImageImport's parent.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.imageImports.create = (params) => this._makeRequest('v1/{+parent}/imageImports', 'POST', params);

    /**
     * Deletes a single ImageImport.
     * @param {string} params.name - (Required) Required. The ImageImport name.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.imageImports.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.imageImports.imageImportJobs = {};

    /**
     * Lists ImageImportJobs in a given project.
     * @param {string} params.filter - Optional. The filter request (according to AIP-160).
     * @param {string} params.orderBy - Optional. The order by fields for the result (according to AIP-132). Currently ordering is only possible by "name" field.
     * @param {integer} params.pageSize - Optional. The maximum number of targets to return. The service may return fewer than this value. If unspecified, at most 500 targets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListImageImportJobs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListImageImportJobs` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of targets.
     * @return {object} The API response object.
     */
    this.projects.locations.imageImports.imageImportJobs.list = (params) => this._makeRequest('v1/{+parent}/imageImportJobs', 'GET', params);

    /**
     * Gets details of a single ImageImportJob.
     * @param {string} params.name - (Required) Required. The ImageImportJob name.
     * @return {object} The API response object.
     */
    this.projects.locations.imageImports.imageImportJobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Initiates the cancellation of a running clone job.
     * @param {string} params.name - (Required) Required. The image import job id.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.imageImports.imageImportJobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);
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
