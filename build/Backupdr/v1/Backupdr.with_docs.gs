
/**
 * Google Apps Script client library for the Backup and DR Service API
 * Documentation URL: https://cloud.google.com/backup-disaster-recovery
 * @class
 */
class Backupdr {
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
    this._rootUrl = 'https://backupdr.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

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

    this.projects.locations.managementServers = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.managementServers.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.managementServers.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.managementServers.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Lists ManagementServers in a given project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve management servers information, in the format 'projects/{project_id}/locations/{location}'. In Cloud BackupDR, locations map to Google Cloud regions, for example **us-central1**. To retrieve management servers for all locations, use "-" for the '{location}' value.
     * @return {object} The API response object.
     */
    this.projects.locations.managementServers.list = (params) => this._makeRequest('v1/{+parent}/managementServers', 'GET', params);

    /**
     * Gets details of a single ManagementServer.
     * @param {string} params.name - (Required) Required. Name of the management server resource name, in the format 'projects/{project_id}/locations/{location}/managementServers/{resource_name}'
     * @return {object} The API response object.
     */
    this.projects.locations.managementServers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new ManagementServer in a given project and location.
     * @param {string} params.managementServerId - Required. The name of the management server to create. The name must be unique for the specified project and location.
     * @param {string} params.parent - (Required) Required. The management server project and location in the format 'projects/{project_id}/locations/{location}'. In Cloud Backup and DR locations map to Google Cloud regions, for example **us-central1**.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.managementServers.create = (params) => this._makeRequest('v1/{+parent}/managementServers', 'POST', params);

    /**
     * Deletes a single ManagementServer.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.managementServers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Returns the Assured Workloads compliance metadata for a given project.
     * @param {string} params.parent - (Required) Required. The project and location to be used to check CSS metadata for target project information, in the format 'projects/{project_id}/locations/{location}'. In Cloud BackupDR, locations map to Google Cloud regions, for example **us-central1**.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.managementServers.msComplianceMetadata = (params) => this._makeRequest('v1/{+parent}:msComplianceMetadata', 'POST', params);

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

    this.projects.locations.backupVaults = {};

    /**
     * Creates a new BackupVault in a given project and location.
     * @param {string} params.backupVaultId - Required. ID of the requesting object If auto-generating ID server-side, remove this field and backup_vault_id from the method_signature of Create RPC
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is 'false'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.create = (params) => this._makeRequest('v1/{+parent}/backupVaults', 'POST', params);

    /**
     * Lists BackupVaults in a given project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve backupvault stores information, in the format 'projects/{project_id}/locations/{location}'. In Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. To retrieve backupvault stores for all locations, use "-" for the '{location}' value.
     * @param {string} params.view - Optional. Reserved for future use to provide a BASIC & FULL view of Backup Vault.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.list = (params) => this._makeRequest('v1/{+parent}/backupVaults', 'GET', params);

    /**
     * FetchUsableBackupVaults lists usable BackupVaults in a given project and location. Usable BackupVault are the ones that user has backupdr.backupVaults.get permission.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve backupvault stores information, in the format 'projects/{project_id}/locations/{location}'. In Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. To retrieve backupvault stores for all locations, use "-" for the '{location}' value.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.fetchUsable = (params) => this._makeRequest('v1/{+parent}/backupVaults:fetchUsable', 'GET', params);

    /**
     * Gets details of a BackupVault.
     * @param {string} params.name - (Required) Required. Name of the backupvault store resource name, in the format 'projects/{project_id}/locations/{location}/backupVaults/{resource_name}'
     * @param {string} params.view - Optional. Reserved for future use to provide a BASIC & FULL view of Backup Vault
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the settings of a BackupVault.
     * @param {boolean} params.force - Optional. If set to true, will not check plan duration against backup vault enforcement duration.
     * @param {boolean} params.forceUpdateAccessRestriction - Optional. If set to true, we will force update access restriction even if some non compliant data sources are present. The default is 'false'.
     * @param {string} params.name - (Required) Output only. Identifier. Name of the backup vault to create. It must have the format`"projects/{project}/locations/{location}/backupVaults/{backupvault}"`. `{backupvault}` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the project and location.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the BackupVault resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail.
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is 'false'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a BackupVault.
     * @param {boolean} params.allowMissing - Optional. If true and the BackupVault is not found, the request will succeed but no action will be taken.
     * @param {string} params.etag - The current etag of the backup vault. If an etag is provided and does not match the current etag of the connection, deletion will be blocked.
     * @param {boolean} params.force - Optional. If set to true, any data source from this backup vault will also be deleted.
     * @param {boolean} params.ignoreBackupPlanReferences - Optional. If set to true, backupvault deletion will proceed even if there are backup plans referencing the backupvault. The default is 'false'.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. Only validate the request, but do not perform mutations. The default is 'false'.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Returns the caller's permissions on a BackupVault resource. A caller is not required to have Google IAM permission to make this request.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.backupVaults.dataSources = {};

    /**
     * Lists DataSources in a given project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve data sources information, in the format 'projects/{project_id}/locations/{location}'. In Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. To retrieve data sources for all locations, use "-" for the '{location}' value.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.list = (params) => this._makeRequest('v1/{+parent}/dataSources', 'GET', params);

    /**
     * Gets details of a DataSource.
     * @param {string} params.name - (Required) Required. Name of the data source resource name, in the format 'projects/{project_id}/locations/{location}/backupVaults/{resource_name}/dataSource/{resource_name}'
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the settings of a DataSource.
     * @param {boolean} params.allowMissing - Optional. Enable upsert.
     * @param {string} params.name - (Required) Output only. Identifier. Name of the datasource to create. It must have the format`"projects/{project}/locations/{location}/backupVaults/{backupvault}/dataSources/{datasource}"`. `{datasource}` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the backup vault.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the DataSource resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a DataSource. This is a custom method instead of a standard delete method because external clients will not delete DataSources except for BackupDR backup appliances.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.remove = (params) => this._makeRequest('v1/{+name}:remove', 'POST', params);

    /**
     * Sets the internal status of a DataSource.
     * @param {string} params.dataSource - (Required) Required. The resource name of the instance, in the format 'projects/*\/locations/*\/backupVaults/*\/dataSources/'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.setInternalStatus = (params) => this._makeRequest('v1/{+dataSource}:setInternalStatus', 'POST', params);

    /**
     * Internal only. Initiates a backup.
     * @param {string} params.dataSource - (Required) Required. The resource name of the instance, in the format 'projects/*\/locations/*\/backupVaults/*\/dataSources/'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.initiateBackup = (params) => this._makeRequest('v1/{+dataSource}:initiateBackup', 'POST', params);

    /**
     * Internal only. Abandons a backup.
     * @param {string} params.dataSource - (Required) Required. The resource name of the instance, in the format 'projects/*\/locations/*\/backupVaults/*\/dataSources/'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.abandonBackup = (params) => this._makeRequest('v1/{+dataSource}:abandonBackup', 'POST', params);

    /**
     * Internal only. Finalize a backup that was started by a call to InitiateBackup.
     * @param {string} params.dataSource - (Required) Required. The resource name of the instance, in the format 'projects/*\/locations/*\/backupVaults/*\/dataSources/'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.finalizeBackup = (params) => this._makeRequest('v1/{+dataSource}:finalizeBackup', 'POST', params);

    /**
     * Internal only. Fetch access token for a given data source.
     * @param {string} params.name - (Required) Required. The resource name for the location for which static IPs should be returned. Must be in the format 'projects/*\/locations/*\/backupVaults/*\/dataSources'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.fetchAccessToken = (params) => this._makeRequest('v1/{+name}:fetchAccessToken', 'POST', params);

    this.projects.locations.backupVaults.dataSources.backups = {};

    /**
     * Lists Backups in a given project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve backup information, in the format 'projects/{project_id}/locations/{location}'. In Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**. To retrieve data sources for all locations, use "-" for the '{location}' value.
     * @param {string} params.view - Optional. Reserved for future use to provide a BASIC & FULL view of Backup resource.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.backups.list = (params) => this._makeRequest('v1/{+parent}/backups', 'GET', params);

    /**
     * Gets details of a Backup.
     * @param {string} params.name - (Required) Required. Name of the data source resource name, in the format 'projects/{project_id}/locations/{location}/backupVaults/{backupVault}/dataSources/{datasource}/backups/{backup}'
     * @param {string} params.view - Optional. Reserved for future use to provide a BASIC & FULL view of Backup resource.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.backups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the settings of a Backup.
     * @param {string} params.name - (Required) Output only. Identifier. Name of the backup to create. It must have the format`"projects//locations//backupVaults//dataSources/{datasource}/backups/{backup}"`. `{backup}` cannot be changed after creation. It must be between 3-63 characters long and must be unique within the datasource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Backup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.backups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a Backup.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.backups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Restore from a Backup
     * @param {string} params.name - (Required) Required. The resource name of the Backup instance, in the format 'projects/*\/locations/*\/backupVaults/*\/dataSources/*\/backups/'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.dataSources.backups.restore = (params) => this._makeRequest('v1/{+name}:restore', 'POST', params);

    this.projects.locations.backupPlans = {};

    /**
     * Create a BackupPlan
     * @param {string} params.backupPlanId - Required. The name of the `BackupPlan` to create. The name must be unique for the specified project and location.The name must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens. Pattern, /a-z{,62}/.
     * @param {string} params.parent - (Required) Required. The `BackupPlan` project and location in the format `projects/{project}/locations/{location}`. In Cloud BackupDR locations map to GCP regions, for example **us-central1**.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.create = (params) => this._makeRequest('v1/{+parent}/backupPlans', 'POST', params);

    /**
     * Update a BackupPlan.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of the `BackupPlan`. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. The list of fields to update. Field mask is used to specify the fields to be overwritten in the BackupPlan resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail. Currently, these fields are supported in update: description, schedules, retention period, adding and removing Backup Rules.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets details of a single BackupPlan.
     * @param {string} params.name - (Required) Required. The resource name of the `BackupPlan` to retrieve. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}`
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists BackupPlans in a given project and location.
     * @param {string} params.filter - Optional. Field match expression used to filter the results.
     * @param {string} params.orderBy - Optional. Field by which to sort the results.
     * @param {integer} params.pageSize - Optional. The maximum number of `BackupPlans` to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The value of next_page_token received from a previous `ListBackupPlans` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackupPlans` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve `BackupPlans` information. Format: `projects/{project}/locations/{location}`. In Cloud BackupDR, locations map to GCP regions, for e.g. **us-central1**. To retrieve backup plans for all locations, use "-" for the `{location}` value.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.list = (params) => this._makeRequest('v1/{+parent}/backupPlans', 'GET', params);

    /**
     * Deletes a single BackupPlan.
     * @param {string} params.name - (Required) Required. The resource name of the `BackupPlan` to delete. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.backupPlans.revisions = {};

    /**
     * Gets details of a single BackupPlanRevision.
     * @param {string} params.name - (Required) Required. The resource name of the `BackupPlanRevision` to retrieve. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}/revisions/{revision}`
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.revisions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists BackupPlanRevisions in a given project and location.
     * @param {integer} params.pageSize - Optional. The maximum number of `BackupPlans` to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The value of next_page_token received from a previous `ListBackupPlans` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackupPlans` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve `BackupPlanRevisions` information. Format: `projects/{project}/locations/{location}/backupPlans/{backup_plan}`. In Cloud BackupDR, locations map to GCP regions, for e.g. **us-central1**.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.revisions.list = (params) => this._makeRequest('v1/{+parent}/revisions', 'GET', params);

    this.projects.locations.backupPlanAssociations = {};

    /**
     * Create a BackupPlanAssociation
     * @param {string} params.backupPlanAssociationId - Required. The name of the backup plan association to create. The name must be unique for the specified project and location.
     * @param {string} params.parent - (Required) Required. The backup plan association project and location in the format `projects/{project_id}/locations/{location}`. In Cloud BackupDR locations map to GCP regions, for example **us-central1**.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlanAssociations.create = (params) => this._makeRequest('v1/{+parent}/backupPlanAssociations', 'POST', params);

    /**
     * Update a BackupPlanAssociation.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of BackupPlanAssociation in below format Format : projects/{project}/locations/{location}/backupPlanAssociations/{backupPlanAssociationId}
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. The list of fields to update. Field mask is used to specify the fields to be overwritten in the BackupPlanAssociation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then the request will fail. Currently backup_plan_association.backup_plan is the only supported field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlanAssociations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets details of a single BackupPlanAssociation.
     * @param {string} params.name - (Required) Required. Name of the backup plan association resource, in the format `projects/{project}/locations/{location}/backupPlanAssociations/{backupPlanAssociationId}`
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlanAssociations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists BackupPlanAssociations in a given project and location.
     * @param {string} params.filter - Optional. Filtering results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve backup Plan Associations information, in the format `projects/{project_id}/locations/{location}`. In Cloud BackupDR, locations map to GCP regions, for example **us-central1**. To retrieve backup plan associations for all locations, use "-" for the `{location}` value.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlanAssociations.list = (params) => this._makeRequest('v1/{+parent}/backupPlanAssociations', 'GET', params);

    /**
     * List BackupPlanAssociations for a given resource type.
     * @param {string} params.filter - Optional. A filter expression that filters the results fetched in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. Supported fields: * resource * backup_plan * state * data_source * cloud_sql_instance_backup_plan_association_properties.instance_create_time
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * name
     * @param {integer} params.pageSize - Optional. The maximum number of BackupPlanAssociations to return. The service may return fewer than this value. If unspecified, at most 50 BackupPlanAssociations will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - Optional. A page token, received from a previous call of `FetchBackupPlanAssociationsForResourceType`. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchBackupPlanAssociationsForResourceType` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent resource name. Format: projects/{project}/locations/{location}
     * @param {string} params.resourceType - Required. The type of the GCP resource. Ex: sql.googleapis.com/Instance
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlanAssociations.fetchForResourceType = (params) => this._makeRequest('v1/{+parent}/backupPlanAssociations:fetchForResourceType', 'GET', params);

    /**
     * Deletes a single BackupPlanAssociation.
     * @param {string} params.name - (Required) Required. Name of the backup plan association resource, in the format `projects/{project}/locations/{location}/backupPlanAssociations/{backupPlanAssociationId}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlanAssociations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Triggers a new Backup.
     * @param {string} params.name - (Required) Required. Name of the backup plan association resource, in the format `projects/{project}/locations/{location}/backupPlanAssociations/{backupPlanAssociationId}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlanAssociations.triggerBackup = (params) => this._makeRequest('v1/{+name}:triggerBackup', 'POST', params);

    this.projects.locations.dataSourceReferences = {};

    /**
     * Gets details of a single DataSourceReference.
     * @param {string} params.name - (Required) Required. The name of the DataSourceReference to retrieve. Format: projects/{project}/locations/{location}/dataSourceReferences/{data_source_reference}
     * @return {object} The API response object.
     */
    this.projects.locations.dataSourceReferences.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Fetch DataSourceReferences for a given project, location and resource type.
     * @param {string} params.filter - Optional. A filter expression that filters the results fetched in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. Supported fields: * data_source * data_source_gcp_resource_info.gcp_resourcename * data_source_backup_config_state * data_source_backup_count * data_source_backup_config_info.last_backup_state * data_source_gcp_resource_info.gcp_resourcename * data_source_gcp_resource_info.type * data_source_gcp_resource_info.location * data_source_gcp_resource_info.cloud_sql_instance_properties.instance_create_time
     * @param {string} params.orderBy - Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * name
     * @param {integer} params.pageSize - Optional. The maximum number of DataSourceReferences to return. The service may return fewer than this value. If unspecified, at most 50 DataSourceReferences will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - Optional. A page token, received from a previous call of `FetchDataSourceReferencesForResourceType`. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchDataSourceReferencesForResourceType` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent resource name. Format: projects/{project}/locations/{location}
     * @param {string} params.resourceType - Required. The type of the GCP resource. Ex: sql.googleapis.com/Instance
     * @return {object} The API response object.
     */
    this.projects.locations.dataSourceReferences.fetchForResourceType = (params) => this._makeRequest('v1/{+parent}/dataSourceReferences:fetchForResourceType', 'GET', params);

    this.projects.locations.serviceConfig = {};

    /**
     * Initializes the service related config for a project.
     * @param {string} params.name - (Required) Required. The resource name of the serviceConfig used to initialize the service. Format: `projects/{project_id}/locations/{location}/serviceConfig`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConfig.initialize = (params) => this._makeRequest('v1/{+name}:initialize', 'POST', params);

    this.projects.locations.resourceBackupConfigs = {};

    /**
     * Lists ResourceBackupConfigs.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will use 100 as default. Maximum value is 500 and values above 500 will be coerced to 500.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The project and location for which to retrieve resource backup configs. Format: 'projects/{project_id}/locations/{location}'. In Cloud Backup and DR, locations map to Google Cloud regions, for example **us-central1**.
     * @return {object} The API response object.
     */
    this.projects.locations.resourceBackupConfigs.list = (params) => this._makeRequest('v1/{+parent}/resourceBackupConfigs', 'GET', params);
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
