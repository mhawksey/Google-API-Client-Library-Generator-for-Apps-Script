
/**
 * Google Apps Script client library for the Backup for GKE API
 * Documentation URL: https://cloud.google.com/kubernetes-engine/docs/add-on/backup-for-gke
 * @class
 */
class Gkebackup {
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
    this._rootUrl = 'https://gkebackup.googleapis.com/';
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

    this.projects.locations.backupPlans = {};

    /**
     * Creates a new BackupPlan in a given location.
     * @param {string} params.backupPlanId - Required. The client-provided short name for the BackupPlan resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of BackupPlans in this location
     * @param {string} params.parent - (Required) Required. The location within which to create the BackupPlan. Format: `projects/*\/locations/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.create = (params) => this._makeRequest('v1/{+parent}/backupPlans', 'POST', params);

    /**
     * Lists BackupPlans in a given location.
     * @param {string} params.filter - Optional. Field match expression used to filter the results.
     * @param {string} params.orderBy - Optional. Field by which to sort the results.
     * @param {integer} params.pageSize - Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The value of next_page_token received from a previous `ListBackupPlans` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackupPlans` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The location that contains the BackupPlans to list. Format: `projects/*\/locations/*`
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.list = (params) => this._makeRequest('v1/{+parent}/backupPlans', 'GET', params);

    /**
     * Retrieve the details of a single BackupPlan.
     * @param {string} params.name - (Required) Required. Fully qualified BackupPlan name. Format: `projects/*\/locations/*\/backupPlans/*`
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update a BackupPlan.
     * @param {string} params.name - (Required) Output only. The full name of the BackupPlan resource. Format: `projects/*\/locations/*\/backupPlans/*`
     * @param {string} params.updateMask - Optional. This is used to specify the fields to be overwritten in the BackupPlan targeted for update. The values for each of these updated fields will be taken from the `backup_plan` provided with this request. Field names are relative to the root of the resource (e.g., `description`, `backup_config.include_volume_data`, etc.) If no `update_mask` is provided, all fields in `backup_plan` will be written to the target BackupPlan resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `backup_plan` are ignored and are not used to update the target BackupPlan.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an existing BackupPlan.
     * @param {string} params.etag - Optional. If provided, this value must match the current value of the target BackupPlan's etag field or the request is rejected.
     * @param {string} params.name - (Required) Required. Fully qualified BackupPlan name. Format: `projects/*\/locations/*\/backupPlans/*`
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.backupPlans.backups = {};

    /**
     * Creates a Backup for the given BackupPlan.
     * @param {string} params.backupId - Optional. The client-provided short name for the Backup resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of Backups in this BackupPlan
     * @param {string} params.parent - (Required) Required. The BackupPlan within which to create the Backup. Format: `projects/*\/locations/*\/backupPlans/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.create = (params) => this._makeRequest('v1/{+parent}/backups', 'POST', params);

    /**
     * Lists the Backups for a given BackupPlan.
     * @param {string} params.filter - Optional. Field match expression used to filter the results.
     * @param {string} params.orderBy - Optional. Field by which to sort the results.
     * @param {integer} params.pageSize - Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The value of next_page_token received from a previous `ListBackups` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The BackupPlan that contains the Backups to list. Format: `projects/*\/locations/*\/backupPlans/*`
     * @param {boolean} params.returnPartialSuccess - Optional. If set to true, the response will return partial results when some regions are unreachable and the unreachable field will be populated.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.list = (params) => this._makeRequest('v1/{+parent}/backups', 'GET', params);

    /**
     * Retrieve the details of a single Backup.
     * @param {string} params.name - (Required) Required. Full name of the Backup resource. Format: `projects/*\/locations/*\/backupPlans/*\/backups/*`
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update a Backup.
     * @param {string} params.name - (Required) Output only. The fully qualified name of the Backup. `projects/*\/locations/*\/backupPlans/*\/backups/*`
     * @param {string} params.updateMask - Optional. This is used to specify the fields to be overwritten in the Backup targeted for update. The values for each of these updated fields will be taken from the `backup_plan` provided with this request. Field names are relative to the root of the resource. If no `update_mask` is provided, all fields in `backup` will be written to the target Backup resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `backup` are ignored and are not used to update the target Backup.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an existing Backup.
     * @param {string} params.etag - Optional. If provided, this value must match the current value of the target Backup's etag field or the request is rejected.
     * @param {boolean} params.force - Optional. If set to true, any VolumeBackups below this Backup will also be deleted. Otherwise, the request will only succeed if the Backup has no VolumeBackups.
     * @param {string} params.name - (Required) Required. Name of the Backup resource. Format: `projects/*\/locations/*\/backupPlans/*\/backups/*`
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Retrieve the link to the backupIndex.
     * @param {string} params.backup - (Required) Required. Full name of Backup resource. Format: projects/{project}/locations/{location}/backupPlans/{backup_plan}/backups/{backup}
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.getBackupIndexDownloadUrl = (params) => this._makeRequest('v1/{+backup}:getBackupIndexDownloadUrl', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.backupPlans.backups.volumeBackups = {};

    /**
     * Lists the VolumeBackups for a given Backup.
     * @param {string} params.filter - Optional. Field match expression used to filter the results.
     * @param {string} params.orderBy - Optional. Field by which to sort the results.
     * @param {integer} params.pageSize - Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The value of next_page_token received from a previous `ListVolumeBackups` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListVolumeBackups` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The Backup that contains the VolumeBackups to list. Format: `projects/*\/locations/*\/backupPlans/*\/backups/*`
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.volumeBackups.list = (params) => this._makeRequest('v1/{+parent}/volumeBackups', 'GET', params);

    /**
     * Retrieve the details of a single VolumeBackup.
     * @param {string} params.name - (Required) Required. Full name of the VolumeBackup resource. Format: `projects/*\/locations/*\/backupPlans/*\/backups/*\/volumeBackups/*`
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.volumeBackups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.volumeBackups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.volumeBackups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupPlans.backups.volumeBackups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.backupChannels = {};

    /**
     * Creates a new BackupChannel in a given location.
     * @param {string} params.backupChannelId - Optional. The client-provided short name for the BackupChannel resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of BackupChannels in this location If the user does not provide a name, a uuid will be used as the name.
     * @param {string} params.parent - (Required) Required. The location within which to create the BackupChannel. Format: `projects/*\/locations/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupChannels.create = (params) => this._makeRequest('v1/{+parent}/backupChannels', 'POST', params);

    /**
     * Lists BackupChannels in a given location.
     * @param {string} params.filter - Optional. Field match expression used to filter the results.
     * @param {string} params.orderBy - Optional. Field by which to sort the results.
     * @param {integer} params.pageSize - Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The value of next_page_token received from a previous `ListBackupChannels` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackupChannels` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The location that contains the BackupChannels to list. Format: `projects/*\/locations/*`
     * @return {object} The API response object.
     */
    this.projects.locations.backupChannels.list = (params) => this._makeRequest('v1/{+parent}/backupChannels', 'GET', params);

    /**
     * Retrieve the details of a single BackupChannel.
     * @param {string} params.name - (Required) Required. Fully qualified BackupChannel name. Format: `projects/*\/locations/*\/backupChannels/*`
     * @return {object} The API response object.
     */
    this.projects.locations.backupChannels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update a BackupChannel.
     * @param {string} params.name - (Required) Identifier. The fully qualified name of the BackupChannel. `projects/*\/locations/*\/backupChannels/*`
     * @param {string} params.updateMask - Optional. This is used to specify the fields to be overwritten in the BackupChannel targeted for update. The values for each of these updated fields will be taken from the `backup_channel` provided with this request. Field names are relative to the root of the resource (e.g., `description`, `labels`, etc.) If no `update_mask` is provided, all fields in `backup_channel` will be written to the target BackupChannel resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `backup_channel` are ignored and are not used to update the target BackupChannel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backupChannels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an existing BackupChannel.
     * @param {string} params.etag - Optional. If provided, this value must match the current value of the target BackupChannel's etag field or the request is rejected.
     * @param {boolean} params.force - Optional. If set to true, any BackupPlanAssociations below this BackupChannel will also be deleted. Otherwise, the request will only succeed if the BackupChannel has no BackupPlanAssociations.
     * @param {string} params.name - (Required) Required. Fully qualified BackupChannel name. Format: `projects/*\/locations/*\/backupChannels/*`
     * @return {object} The API response object.
     */
    this.projects.locations.backupChannels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.backupChannels.backupPlanBindings = {};

    /**
     * Lists BackupPlanBindings in a given location.
     * @param {string} params.filter - Optional. Field match expression used to filter the results.
     * @param {string} params.orderBy - Optional. Field by which to sort the results.
     * @param {integer} params.pageSize - Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The value of next_page_token received from a previous `ListBackupPlanBindings` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackupPlanBindings` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The BackupChannel that contains the BackupPlanBindings to list. Format: `projects/*\/locations/*\/backupChannels/*`
     * @return {object} The API response object.
     */
    this.projects.locations.backupChannels.backupPlanBindings.list = (params) => this._makeRequest('v1/{+parent}/backupPlanBindings', 'GET', params);

    /**
     * Retrieve the details of a single BackupPlanBinding.
     * @param {string} params.name - (Required) Required. Fully qualified BackupPlanBinding name. Format: `projects/*\/locations/*\/backupChannels/*\/backupPlanBindings/*`
     * @return {object} The API response object.
     */
    this.projects.locations.backupChannels.backupPlanBindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.restorePlans = {};

    /**
     * Creates a new RestorePlan in a given location.
     * @param {string} params.parent - (Required) Required. The location within which to create the RestorePlan. Format: `projects/*\/locations/*`
     * @param {string} params.restorePlanId - Required. The client-provided short name for the RestorePlan resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of RestorePlans in this location
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.create = (params) => this._makeRequest('v1/{+parent}/restorePlans', 'POST', params);

    /**
     * Lists RestorePlans in a given location.
     * @param {string} params.filter - Optional. Field match expression used to filter the results.
     * @param {string} params.orderBy - Optional. Field by which to sort the results.
     * @param {integer} params.pageSize - Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The value of next_page_token received from a previous `ListRestorePlans` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListRestorePlans` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The location that contains the RestorePlans to list. Format: `projects/*\/locations/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.list = (params) => this._makeRequest('v1/{+parent}/restorePlans', 'GET', params);

    /**
     * Retrieve the details of a single RestorePlan.
     * @param {string} params.name - (Required) Required. Fully qualified RestorePlan name. Format: `projects/*\/locations/*\/restorePlans/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update a RestorePlan.
     * @param {string} params.name - (Required) Output only. The full name of the RestorePlan resource. Format: `projects/*\/locations/*\/restorePlans/*`.
     * @param {string} params.updateMask - Optional. This is used to specify the fields to be overwritten in the RestorePlan targeted for update. The values for each of these updated fields will be taken from the `restore_plan` provided with this request. Field names are relative to the root of the resource. If no `update_mask` is provided, all fields in `restore_plan` will be written to the target RestorePlan resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `restore_plan` are ignored and are not used to update the target RestorePlan.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an existing RestorePlan.
     * @param {string} params.etag - Optional. If provided, this value must match the current value of the target RestorePlan's etag field or the request is rejected.
     * @param {boolean} params.force - Optional. If set to true, any Restores below this RestorePlan will also be deleted. Otherwise, the request will only succeed if the RestorePlan has no Restores.
     * @param {string} params.name - (Required) Required. Fully qualified RestorePlan name. Format: `projects/*\/locations/*\/restorePlans/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.restorePlans.restores = {};

    /**
     * Creates a new Restore for the given RestorePlan.
     * @param {string} params.parent - (Required) Required. The RestorePlan within which to create the Restore. Format: `projects/*\/locations/*\/restorePlans/*`
     * @param {string} params.restoreId - Required. The client-provided short name for the Restore resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of Restores in this RestorePlan.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.create = (params) => this._makeRequest('v1/{+parent}/restores', 'POST', params);

    /**
     * Lists the Restores for a given RestorePlan.
     * @param {string} params.filter - Optional. Field match expression used to filter the results.
     * @param {string} params.orderBy - Optional. Field by which to sort the results.
     * @param {integer} params.pageSize - Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The value of next_page_token received from a previous `ListRestores` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListRestores` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The RestorePlan that contains the Restores to list. Format: `projects/*\/locations/*\/restorePlans/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.list = (params) => this._makeRequest('v1/{+parent}/restores', 'GET', params);

    /**
     * Retrieves the details of a single Restore.
     * @param {string} params.name - (Required) Required. Name of the restore resource. Format: `projects/*\/locations/*\/restorePlans/*\/restores/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update a Restore.
     * @param {string} params.name - (Required) Output only. The full name of the Restore resource. Format: `projects/*\/locations/*\/restorePlans/*\/restores/*`
     * @param {string} params.updateMask - Optional. This is used to specify the fields to be overwritten in the Restore targeted for update. The values for each of these updated fields will be taken from the `restore` provided with this request. Field names are relative to the root of the resource. If no `update_mask` is provided, all fields in `restore` will be written to the target Restore resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `restore` are ignored and are not used to update the target Restore.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an existing Restore.
     * @param {string} params.etag - Optional. If provided, this value must match the current value of the target Restore's etag field or the request is rejected.
     * @param {boolean} params.force - Optional. If set to true, any VolumeRestores below this restore will also be deleted. Otherwise, the request will only succeed if the restore has no VolumeRestores.
     * @param {string} params.name - (Required) Required. Full name of the Restore Format: `projects/*\/locations/*\/restorePlans/*\/restores/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.restorePlans.restores.volumeRestores = {};

    /**
     * Lists the VolumeRestores for a given Restore.
     * @param {string} params.filter - Optional. Field match expression used to filter the results.
     * @param {string} params.orderBy - Optional. Field by which to sort the results.
     * @param {integer} params.pageSize - Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The value of next_page_token received from a previous `ListVolumeRestores` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListVolumeRestores` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The Restore that contains the VolumeRestores to list. Format: `projects/*\/locations/*\/restorePlans/*\/restores/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.volumeRestores.list = (params) => this._makeRequest('v1/{+parent}/volumeRestores', 'GET', params);

    /**
     * Retrieve the details of a single VolumeRestore.
     * @param {string} params.name - (Required) Required. Full name of the VolumeRestore resource. Format: `projects/*\/locations/*\/restorePlans/*\/restores/*\/volumeRestores/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.volumeRestores.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.volumeRestores.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.volumeRestores.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.restorePlans.restores.volumeRestores.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.restoreChannels = {};

    /**
     * Creates a new RestoreChannel in a given location.
     * @param {string} params.parent - (Required) Required. The location within which to create the RestoreChannel. Format: `projects/*\/locations/*`
     * @param {string} params.restoreChannelId - Optional. The client-provided short name for the RestoreChannel resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of RestoreChannels in this location If the user does not provide a name, a uuid will be used as the name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.restoreChannels.create = (params) => this._makeRequest('v1/{+parent}/restoreChannels', 'POST', params);

    /**
     * Lists RestoreChannels in a given location.
     * @param {string} params.filter - Optional. Field match expression used to filter the results.
     * @param {string} params.orderBy - Optional. Field by which to sort the results.
     * @param {integer} params.pageSize - Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The value of next_page_token received from a previous `ListRestoreChannels` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListRestoreChannels` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The location that contains the RestoreChannels to list. Format: `projects/*\/locations/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restoreChannels.list = (params) => this._makeRequest('v1/{+parent}/restoreChannels', 'GET', params);

    /**
     * Retrieve the details of a single RestoreChannel.
     * @param {string} params.name - (Required) Required. Fully qualified RestoreChannel name. Format: `projects/*\/locations/*\/restoreChannels/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restoreChannels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update a RestoreChannel.
     * @param {string} params.name - (Required) Identifier. The fully qualified name of the RestoreChannel. `projects/*\/locations/*\/restoreChannels/*`
     * @param {string} params.updateMask - Optional. This is used to specify the fields to be overwritten in the RestoreChannel targeted for update. The values for each of these updated fields will be taken from the `restore_channel` provided with this request. Field names are relative to the root of the resource (e.g., `description`, `destination_project_id`, etc.) If no `update_mask` is provided, all fields in `restore_channel` will be written to the target RestoreChannel resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `restore_channel` are ignored and are not used to update the target RestoreChannel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.restoreChannels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an existing RestoreChannel.
     * @param {string} params.etag - Optional. If provided, this value must match the current value of the target RestoreChannel's etag field or the request is rejected.
     * @param {string} params.name - (Required) Required. Fully qualified RestoreChannel name. Format: `projects/*\/locations/*\/restoreChannels/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restoreChannels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.restoreChannels.restorePlanBindings = {};

    /**
     * Lists RestorePlanBindings in a given location.
     * @param {string} params.filter - Optional. Field match expression used to filter the results.
     * @param {string} params.orderBy - Optional. Field by which to sort the results.
     * @param {integer} params.pageSize - Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The value of next_page_token received from a previous `ListRestorePlanBindings` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListRestorePlanBindings` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The RestoreChannel that contains the ListRestorePlanBindings to list. Format: `projects/*\/locations/*\/restoreChannels/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restoreChannels.restorePlanBindings.list = (params) => this._makeRequest('v1/{+parent}/restorePlanBindings', 'GET', params);

    /**
     * Retrieve the details of a single RestorePlanBinding.
     * @param {string} params.name - (Required) Required. Fully qualified RestorePlanBinding name. Format: `projects/*\/locations/*\/restoreChannels/*\/restorePlanBindings/*`
     * @return {object} The API response object.
     */
    this.projects.locations.restoreChannels.restorePlanBindings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
