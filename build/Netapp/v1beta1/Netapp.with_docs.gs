
/**
 * Google Apps Script client library for the NetApp API
 * Documentation URL: https://cloud.google.com/netapp/
 * @class
 */
class Netapp {
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
    this._rootUrl = 'https://netapp.googleapis.com/';
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
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1beta1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    this.projects.locations.storagePools = {};

    /**
     * Returns descriptions of all storage pools owned by the caller.
     * @param {string} params.filter - Optional. List filter.
     * @param {string} params.orderBy - Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return.
     * @param {string} params.pageToken - Optional. The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. Parent value
     * @return {object} The API response object.
     */
    this.projects.locations.storagePools.list = (params) => this._makeRequest('v1beta1/{+parent}/storagePools', 'GET', params);

    /**
     * Creates a new storage pool.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.storagePoolId - Required. Id of the requesting storage pool. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.storagePools.create = (params) => this._makeRequest('v1beta1/{+parent}/storagePools', 'POST', params);

    /**
     * Returns the description of the specified storage pool by poolId.
     * @param {string} params.name - (Required) Required. Name of the storage pool
     * @return {object} The API response object.
     */
    this.projects.locations.storagePools.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates the storage pool properties with the full spec
     * @param {string} params.name - (Required) Identifier. Name of the storage pool
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the StoragePool resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.storagePools.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Warning! This operation will permanently delete the storage pool.
     * @param {string} params.name - (Required) Required. Name of the storage pool
     * @return {object} The API response object.
     */
    this.projects.locations.storagePools.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * ValidateDirectoryService does a connectivity check for a directory service policy attached to the storage pool.
     * @param {string} params.name - (Required) Required. Name of the storage pool
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.storagePools.validateDirectoryService = (params) => this._makeRequest('v1beta1/{+name}:validateDirectoryService', 'POST', params);

    /**
     * This operation will switch the active/replica zone for a regional storagePool.
     * @param {string} params.name - (Required) Required. Name of the storage pool
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.storagePools.switch = (params) => this._makeRequest('v1beta1/{+name}:switch', 'POST', params);

    this.projects.locations.volumes = {};

    /**
     * Lists Volumes in a given project.
     * @param {string} params.filter - Filtering results
     * @param {string} params.orderBy - Hint for how to order the results
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListVolumesRequest
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.list = (params) => this._makeRequest('v1beta1/{+parent}/volumes', 'GET', params);

    /**
     * Gets details of a single Volume.
     * @param {string} params.name - (Required) Required. Name of the volume
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new Volume in a given project and location.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.volumeId - Required. Id of the requesting volume. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.create = (params) => this._makeRequest('v1beta1/{+parent}/volumes', 'POST', params);

    /**
     * Updates the parameters of a single Volume.
     * @param {string} params.name - (Required) Identifier. Name of the volume
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Volume resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Volume.
     * @param {boolean} params.force - If this field is set as true, CCFE will not block the volume resource deletion even if it has any snapshots resource. (Otherwise, the request will only work if the volume has no snapshots.)
     * @param {string} params.name - (Required) Required. Name of the volume
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Revert an existing volume to a specified snapshot. Warning! This operation will permanently revert all changes made after the snapshot was created.
     * @param {string} params.name - (Required) Required. The resource name of the volume, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.revert = (params) => this._makeRequest('v1beta1/{+name}:revert', 'POST', params);

    /**
     * Restore files from a backup to a volume.
     * @param {string} params.name - (Required) Required. The volume resource name, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.restore = (params) => this._makeRequest('v1beta1/{+name}:restore', 'POST', params);

    this.projects.locations.volumes.snapshots = {};

    /**
     * Returns descriptions of all snapshots for a volume.
     * @param {string} params.filter - List filter.
     * @param {string} params.orderBy - Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. The volume for which to retrieve snapshot information, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.snapshots.list = (params) => this._makeRequest('v1beta1/{+parent}/snapshots', 'GET', params);

    /**
     * Describe a snapshot for a volume.
     * @param {string} params.name - (Required) Required. The snapshot resource name, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}/snapshots/{snapshot_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.snapshots.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Create a new snapshot for a volume.
     * @param {string} params.parent - (Required) Required. The NetApp volume to create the snapshots of, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}`
     * @param {string} params.snapshotId - Required. ID of the snapshot to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.snapshots.create = (params) => this._makeRequest('v1beta1/{+parent}/snapshots', 'POST', params);

    /**
     * Deletes a snapshot.
     * @param {string} params.name - (Required) Required. The snapshot resource name, in the format `projects/*\/locations/*\/volumes/*\/snapshots/{snapshot_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.snapshots.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates the settings of a specific snapshot.
     * @param {string} params.name - (Required) Identifier. The resource name of the snapshot. Format: `projects/{project_id}/locations/{location}/volumes/{volume_id}/snapshots/{snapshot_id}`.
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.snapshots.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.volumes.replications = {};

    /**
     * Returns descriptions of all replications for a volume.
     * @param {string} params.filter - List filter.
     * @param {string} params.orderBy - Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. The volume for which to retrieve replication information, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.replications.list = (params) => this._makeRequest('v1beta1/{+parent}/replications', 'GET', params);

    /**
     * Describe a replication for a volume.
     * @param {string} params.name - (Required) Required. The replication resource name, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.replications.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Create a new replication for a volume.
     * @param {string} params.parent - (Required) Required. The NetApp volume to create the replications of, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}`
     * @param {string} params.replicationId - Required. ID of the replication to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.replications.create = (params) => this._makeRequest('v1beta1/{+parent}/replications', 'POST', params);

    /**
     * Deletes a replication.
     * @param {string} params.name - (Required) Required. The replication resource name, in the format `projects/*\/locations/*\/volumes/*\/replications/{replication_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.replications.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Updates the settings of a specific replication.
     * @param {string} params.name - (Required) Identifier. The resource name of the Replication. Format: `projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}`.
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.replications.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Stop Cross Region Replication.
     * @param {string} params.name - (Required) Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.replications.stop = (params) => this._makeRequest('v1beta1/{+name}:stop', 'POST', params);

    /**
     * Resume Cross Region Replication.
     * @param {string} params.name - (Required) Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.replications.resume = (params) => this._makeRequest('v1beta1/{+name}:resume', 'POST', params);

    /**
     * Reverses direction of replication. Source becomes destination and destination becomes source.
     * @param {string} params.name - (Required) Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.replications.reverseDirection = (params) => this._makeRequest('v1beta1/{+name}:reverseDirection', 'POST', params);

    /**
     * Establish replication peering.
     * @param {string} params.name - (Required) Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.replications.establishPeering = (params) => this._makeRequest('v1beta1/{+name}:establishPeering', 'POST', params);

    /**
     * Syncs the replication. This will invoke one time volume data transfer from source to destination.
     * @param {string} params.name - (Required) Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.replications.sync = (params) => this._makeRequest('v1beta1/{+name}:sync', 'POST', params);

    this.projects.locations.volumes.quotaRules = {};

    /**
     * Returns list of all quota rules in a location.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListQuotaRulesRequest
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.quotaRules.list = (params) => this._makeRequest('v1beta1/{+parent}/quotaRules', 'GET', params);

    /**
     * Returns details of the specified quota rule.
     * @param {string} params.name - (Required) Required. Name of the quota rule
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.quotaRules.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new quota rule.
     * @param {string} params.parent - (Required) Required. Parent value for CreateQuotaRuleRequest
     * @param {string} params.quotaRuleId - Required. ID of the quota rule to create. Must be unique within the parent resource. Must contain only letters, numbers, underscore and hyphen, with the first character a letter or underscore, the last a letter or underscore or a number, and a 63 character maximum.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.quotaRules.create = (params) => this._makeRequest('v1beta1/{+parent}/quotaRules', 'POST', params);

    /**
     * Updates a quota rule.
     * @param {string} params.name - (Required) Identifier. The resource name of the quota rule. Format: `projects/{project_number}/locations/{location_id}/volumes/volumes/{volume_id}/quotaRules/{quota_rule_id}`.
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the Quota Rule resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.quotaRules.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a quota rule.
     * @param {string} params.name - (Required) Required. Name of the quota rule.
     * @return {object} The API response object.
     */
    this.projects.locations.volumes.quotaRules.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.activeDirectories = {};

    /**
     * Lists active directories.
     * @param {string} params.filter - Filtering results
     * @param {string} params.orderBy - Hint for how to order the results
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListActiveDirectoriesRequest
     * @return {object} The API response object.
     */
    this.projects.locations.activeDirectories.list = (params) => this._makeRequest('v1beta1/{+parent}/activeDirectories', 'GET', params);

    /**
     * Describes a specified active directory.
     * @param {string} params.name - (Required) Required. Name of the active directory.
     * @return {object} The API response object.
     */
    this.projects.locations.activeDirectories.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * CreateActiveDirectory Creates the active directory specified in the request.
     * @param {string} params.activeDirectoryId - Required. ID of the active directory to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter , the last a letter or a number, and a 63 character maximum.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.activeDirectories.create = (params) => this._makeRequest('v1beta1/{+parent}/activeDirectories', 'POST', params);

    /**
     * Update the parameters of an active directories.
     * @param {string} params.name - (Required) Identifier. The resource name of the active directory. Format: `projects/{project_number}/locations/{location_id}/activeDirectories/{active_directory_id}`.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Active Directory resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.activeDirectories.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Delete the active directory specified in the request.
     * @param {string} params.name - (Required) Required. Name of the active directory.
     * @return {object} The API response object.
     */
    this.projects.locations.activeDirectories.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.kmsConfigs = {};

    /**
     * Returns descriptions of all KMS configs owned by the caller.
     * @param {string} params.filter - List filter.
     * @param {string} params.orderBy - Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. Parent value
     * @return {object} The API response object.
     */
    this.projects.locations.kmsConfigs.list = (params) => this._makeRequest('v1beta1/{+parent}/kmsConfigs', 'GET', params);

    /**
     * Creates a new KMS config.
     * @param {string} params.kmsConfigId - Required. Id of the requesting KmsConfig. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.kmsConfigs.create = (params) => this._makeRequest('v1beta1/{+parent}/kmsConfigs', 'POST', params);

    /**
     * Returns the description of the specified KMS config by kms_config_id.
     * @param {string} params.name - (Required) Required. Name of the KmsConfig
     * @return {object} The API response object.
     */
    this.projects.locations.kmsConfigs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Updates the Kms config properties with the full spec
     * @param {string} params.name - (Required) Identifier. Name of the KmsConfig.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the KmsConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.kmsConfigs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Encrypt the existing volumes without CMEK encryption with the desired the KMS config for the whole region.
     * @param {string} params.name - (Required) Required. Name of the KmsConfig.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.kmsConfigs.encrypt = (params) => this._makeRequest('v1beta1/{+name}:encrypt', 'POST', params);

    /**
     * Verifies KMS config reachability.
     * @param {string} params.name - (Required) Required. Name of the KMS Config to be verified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.kmsConfigs.verify = (params) => this._makeRequest('v1beta1/{+name}:verify', 'POST', params);

    /**
     * Warning! This operation will permanently delete the Kms config.
     * @param {string} params.name - (Required) Required. Name of the KmsConfig.
     * @return {object} The API response object.
     */
    this.projects.locations.kmsConfigs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.backupVaults = {};

    /**
     * Creates new backup vault
     * @param {string} params.backupVaultId - Required. The ID to use for the backupVault. The ID must be unique within the specified location. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
     * @param {string} params.parent - (Required) Required. The location to create the backup vaults, in the format `projects/{project_id}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.create = (params) => this._makeRequest('v1beta1/{+parent}/backupVaults', 'POST', params);

    /**
     * Returns the description of the specified backup vault
     * @param {string} params.name - (Required) Required. The backupVault resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Returns list of all available backup vaults.
     * @param {string} params.filter - List filter.
     * @param {string} params.orderBy - Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. The location for which to retrieve backupVault information, in the format `projects/{project_id}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.list = (params) => this._makeRequest('v1beta1/{+parent}/backupVaults', 'GET', params);

    /**
     * Updates the settings of a specific backup vault.
     * @param {string} params.name - (Required) Identifier. The resource name of the backup vault. Format: `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}`.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Backup resource to be updated. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Warning! This operation will permanently delete the backup vault.
     * @param {string} params.name - (Required) Required. The backupVault resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.backupVaults.backups = {};

    /**
     * Creates a backup from the volume specified in the request The backup can be created from the given snapshot if specified in the request. If no snapshot specified, there'll be a new snapshot taken to initiate the backup creation.
     * @param {string} params.backupId - Required. The ID to use for the backup. The ID must be unique within the specified backupVault. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
     * @param {string} params.parent - (Required) Required. The NetApp backupVault to create the backups of, in the format `projects/*\/locations/*\/backupVaults/{backup_vault_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.backups.create = (params) => this._makeRequest('v1beta1/{+parent}/backups', 'POST', params);

    /**
     * Returns the description of the specified backup
     * @param {string} params.name - (Required) Required. The backup resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}/backups/{backup_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.backups.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Returns descriptions of all backups for a backupVault.
     * @param {string} params.filter - The standard list filter. If specified, backups will be returned based on the attribute name that matches the filter expression. If empty, then no backups are filtered out. See https://google.aip.dev/160
     * @param {string} params.orderBy - Sort results. Supported values are "name", "name desc" or "" (unsorted).
     * @param {integer} params.pageSize - The maximum number of items to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - The next_page_token value to use if there are additional results to retrieve for this list request.
     * @param {string} params.parent - (Required) Required. The backupVault for which to retrieve backup information, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}`. To retrieve backup information for all locations, use "-" for the `{location}` value. To retrieve backup information for all backupVaults, use "-" for the `{backup_vault_id}` value. To retrieve backup information for a volume, use "-" for the `{backup_vault_id}` value and specify volume full name with the filter.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.backups.list = (params) => this._makeRequest('v1beta1/{+parent}/backups', 'GET', params);

    /**
     * Warning! This operation will permanently delete the backup.
     * @param {string} params.name - (Required) Required. The backup resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}/backups/{backup_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.backups.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Update backup with full spec.
     * @param {string} params.name - (Required) Identifier. The resource name of the backup. Format: `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}/backups/{backup_id}`.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Backup resource to be updated. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupVaults.backups.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    this.projects.locations.backupPolicies = {};

    /**
     * Creates new backup policy
     * @param {string} params.backupPolicyId - Required. The ID to use for the backup policy. The ID must be unique within the specified location. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
     * @param {string} params.parent - (Required) Required. The location to create the backup policies of, in the format `projects/{project_id}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPolicies.create = (params) => this._makeRequest('v1beta1/{+parent}/backupPolicies', 'POST', params);

    /**
     * Returns the description of the specified backup policy by backup_policy_id.
     * @param {string} params.name - (Required) Required. The backupPolicy resource name, in the format `projects/{project_id}/locations/{location}/backupPolicies/{backup_policy_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.backupPolicies.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Returns list of all available backup policies.
     * @param {string} params.filter - Filtering results
     * @param {string} params.orderBy - Hint for how to order the results
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListBackupPoliciesRequest
     * @return {object} The API response object.
     */
    this.projects.locations.backupPolicies.list = (params) => this._makeRequest('v1beta1/{+parent}/backupPolicies', 'GET', params);

    /**
     * Updates settings of a specific backup policy.
     * @param {string} params.name - (Required) Identifier. The resource name of the backup policy. Format: `projects/{project_id}/locations/{location}/backupPolicies/{backup_policy_id}`.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Backup Policy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPolicies.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Warning! This operation will permanently delete the backup policy.
     * @param {string} params.name - (Required) Required. The backup policy resource name, in the format `projects/{project_id}/locations/{location}/backupPolicies/{backup_policy_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.backupPolicies.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);
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
