# Backup for GKE API - Apps Script Client Library

Auto-generated client library for using the **Backup for GKE API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:35:32 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:33:31 GMT
- **Created:** Sun, 20 Jul 2025 16:34:15 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.backupPlans`

#### `projects.locations.backupPlans.create()`

Creates a new BackupPlan in a given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location within which to create the BackupPlan. Format: `projects/*/locations/*` |
| `params.backupPlanId` | `string` | No | Required. The client-provided short name for the BackupPlan resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of BackupPlans in this location |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupPlans.list()`

Lists BackupPlans in a given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location that contains the BackupPlans to list. Format: `projects/*/locations/*` |
| `params.pageSize` | `integer` | No | Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The value of next_page_token received from a previous `ListBackupPlans` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackupPlans` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Field match expression used to filter the results. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the results. |

#### `projects.locations.backupPlans.get()`

Retrieve the details of a single BackupPlan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Fully qualified BackupPlan name. Format: `projects/*/locations/*/backupPlans/*` |

#### `projects.locations.backupPlans.patch()`

Update a BackupPlan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The full name of the BackupPlan resource. Format: `projects/*/locations/*/backupPlans/*` |
| `params.updateMask` | `string` | No | Optional. This is used to specify the fields to be overwritten in the BackupPlan targeted for update. The values for each of these updated fields will be taken from the `backup_plan` provided with this request. Field names are relative to the root of the resource (e.g., `description`, `backup_config.include_volume_data`, etc.) If no `update_mask` is provided, all fields in `backup_plan` will be written to the target BackupPlan resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `backup_plan` are ignored and are not used to update the target BackupPlan. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupPlans.delete()`

Deletes an existing BackupPlan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Fully qualified BackupPlan name. Format: `projects/*/locations/*/backupPlans/*` |
| `params.etag` | `string` | No | Optional. If provided, this value must match the current value of the target BackupPlan's etag field or the request is rejected. |

#### `projects.locations.backupPlans.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupPlans.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.backupPlans.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.backupPlans.backups`

#### `projects.locations.backupPlans.backups.create()`

Creates a Backup for the given BackupPlan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The BackupPlan within which to create the Backup. Format: `projects/*/locations/*/backupPlans/*` |
| `params.backupId` | `string` | No | Optional. The client-provided short name for the Backup resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of Backups in this BackupPlan |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupPlans.backups.list()`

Lists the Backups for a given BackupPlan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The BackupPlan that contains the Backups to list. Format: `projects/*/locations/*/backupPlans/*` |
| `params.pageSize` | `integer` | No | Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The value of next_page_token received from a previous `ListBackups` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackups` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Field match expression used to filter the results. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the results. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If set to true, the response will return partial results when some regions are unreachable and the unreachable field will be populated. |

#### `projects.locations.backupPlans.backups.get()`

Retrieve the details of a single Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full name of the Backup resource. Format: `projects/*/locations/*/backupPlans/*/backups/*` |

#### `projects.locations.backupPlans.backups.patch()`

Update a Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The fully qualified name of the Backup. `projects/*/locations/*/backupPlans/*/backups/*` |
| `params.updateMask` | `string` | No | Optional. This is used to specify the fields to be overwritten in the Backup targeted for update. The values for each of these updated fields will be taken from the `backup_plan` provided with this request. Field names are relative to the root of the resource. If no `update_mask` is provided, all fields in `backup` will be written to the target Backup resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `backup` are ignored and are not used to update the target Backup. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupPlans.backups.delete()`

Deletes an existing Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the Backup resource. Format: `projects/*/locations/*/backupPlans/*/backups/*` |
| `params.etag` | `string` | No | Optional. If provided, this value must match the current value of the target Backup's etag field or the request is rejected. |
| `params.force` | `boolean` | No | Optional. If set to true, any VolumeBackups below this Backup will also be deleted. Otherwise, the request will only succeed if the Backup has no VolumeBackups. |

#### `projects.locations.backupPlans.backups.getBackupIndexDownloadUrl()`

Retrieve the link to the backupIndex.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.backup` | `string` | Yes | Required. Full name of Backup resource. Format: projects/{project}/locations/{location}/backupPlans/{backup_plan}/backups/{backup} |

#### `projects.locations.backupPlans.backups.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupPlans.backups.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.backupPlans.backups.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.backupPlans.backups.volumeBackups`

#### `projects.locations.backupPlans.backups.volumeBackups.list()`

Lists the VolumeBackups for a given Backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Backup that contains the VolumeBackups to list. Format: `projects/*/locations/*/backupPlans/*/backups/*` |
| `params.pageSize` | `integer` | No | Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The value of next_page_token received from a previous `ListVolumeBackups` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListVolumeBackups` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Field match expression used to filter the results. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the results. |

#### `projects.locations.backupPlans.backups.volumeBackups.get()`

Retrieve the details of a single VolumeBackup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full name of the VolumeBackup resource. Format: `projects/*/locations/*/backupPlans/*/backups/*/volumeBackups/*` |

#### `projects.locations.backupPlans.backups.volumeBackups.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupPlans.backups.volumeBackups.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.backupPlans.backups.volumeBackups.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.backupChannels`

#### `projects.locations.backupChannels.create()`

Creates a new BackupChannel in a given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location within which to create the BackupChannel. Format: `projects/*/locations/*` |
| `params.backupChannelId` | `string` | No | Optional. The client-provided short name for the BackupChannel resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of BackupChannels in this location If the user does not provide a name, a uuid will be used as the name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupChannels.list()`

Lists BackupChannels in a given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location that contains the BackupChannels to list. Format: `projects/*/locations/*` |
| `params.pageSize` | `integer` | No | Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The value of next_page_token received from a previous `ListBackupChannels` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackupChannels` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Field match expression used to filter the results. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the results. |

#### `projects.locations.backupChannels.get()`

Retrieve the details of a single BackupChannel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Fully qualified BackupChannel name. Format: `projects/*/locations/*/backupChannels/*` |

#### `projects.locations.backupChannels.patch()`

Update a BackupChannel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The fully qualified name of the BackupChannel. `projects/*/locations/*/backupChannels/*` |
| `params.updateMask` | `string` | No | Optional. This is used to specify the fields to be overwritten in the BackupChannel targeted for update. The values for each of these updated fields will be taken from the `backup_channel` provided with this request. Field names are relative to the root of the resource (e.g., `description`, `labels`, etc.) If no `update_mask` is provided, all fields in `backup_channel` will be written to the target BackupChannel resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `backup_channel` are ignored and are not used to update the target BackupChannel. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupChannels.delete()`

Deletes an existing BackupChannel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Fully qualified BackupChannel name. Format: `projects/*/locations/*/backupChannels/*` |
| `params.etag` | `string` | No | Optional. If provided, this value must match the current value of the target BackupChannel's etag field or the request is rejected. |
| `params.force` | `boolean` | No | Optional. If set to true, any BackupPlanAssociations below this BackupChannel will also be deleted. Otherwise, the request will only succeed if the BackupChannel has no BackupPlanAssociations. |

### `projects.locations.backupChannels.backupPlanBindings`

#### `projects.locations.backupChannels.backupPlanBindings.list()`

Lists BackupPlanBindings in a given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The BackupChannel that contains the BackupPlanBindings to list. Format: `projects/*/locations/*/backupChannels/*` |
| `params.pageSize` | `integer` | No | Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The value of next_page_token received from a previous `ListBackupPlanBindings` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListBackupPlanBindings` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Field match expression used to filter the results. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the results. |

#### `projects.locations.backupChannels.backupPlanBindings.get()`

Retrieve the details of a single BackupPlanBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Fully qualified BackupPlanBinding name. Format: `projects/*/locations/*/backupChannels/*/backupPlanBindings/*` |

### `projects.locations.restorePlans`

#### `projects.locations.restorePlans.create()`

Creates a new RestorePlan in a given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location within which to create the RestorePlan. Format: `projects/*/locations/*` |
| `params.restorePlanId` | `string` | No | Required. The client-provided short name for the RestorePlan resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of RestorePlans in this location |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.restorePlans.list()`

Lists RestorePlans in a given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location that contains the RestorePlans to list. Format: `projects/*/locations/*` |
| `params.pageSize` | `integer` | No | Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The value of next_page_token received from a previous `ListRestorePlans` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListRestorePlans` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Field match expression used to filter the results. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the results. |

#### `projects.locations.restorePlans.get()`

Retrieve the details of a single RestorePlan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Fully qualified RestorePlan name. Format: `projects/*/locations/*/restorePlans/*` |

#### `projects.locations.restorePlans.patch()`

Update a RestorePlan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The full name of the RestorePlan resource. Format: `projects/*/locations/*/restorePlans/*`. |
| `params.updateMask` | `string` | No | Optional. This is used to specify the fields to be overwritten in the RestorePlan targeted for update. The values for each of these updated fields will be taken from the `restore_plan` provided with this request. Field names are relative to the root of the resource. If no `update_mask` is provided, all fields in `restore_plan` will be written to the target RestorePlan resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `restore_plan` are ignored and are not used to update the target RestorePlan. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.restorePlans.delete()`

Deletes an existing RestorePlan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Fully qualified RestorePlan name. Format: `projects/*/locations/*/restorePlans/*` |
| `params.etag` | `string` | No | Optional. If provided, this value must match the current value of the target RestorePlan's etag field or the request is rejected. |
| `params.force` | `boolean` | No | Optional. If set to true, any Restores below this RestorePlan will also be deleted. Otherwise, the request will only succeed if the RestorePlan has no Restores. |

#### `projects.locations.restorePlans.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.restorePlans.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.restorePlans.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.restorePlans.restores`

#### `projects.locations.restorePlans.restores.create()`

Creates a new Restore for the given RestorePlan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The RestorePlan within which to create the Restore. Format: `projects/*/locations/*/restorePlans/*` |
| `params.restoreId` | `string` | No | Required. The client-provided short name for the Restore resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of Restores in this RestorePlan. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.restorePlans.restores.list()`

Lists the Restores for a given RestorePlan.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The RestorePlan that contains the Restores to list. Format: `projects/*/locations/*/restorePlans/*` |
| `params.pageSize` | `integer` | No | Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The value of next_page_token received from a previous `ListRestores` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListRestores` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Field match expression used to filter the results. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the results. |

#### `projects.locations.restorePlans.restores.get()`

Retrieves the details of a single Restore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the restore resource. Format: `projects/*/locations/*/restorePlans/*/restores/*` |

#### `projects.locations.restorePlans.restores.patch()`

Update a Restore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The full name of the Restore resource. Format: `projects/*/locations/*/restorePlans/*/restores/*` |
| `params.updateMask` | `string` | No | Optional. This is used to specify the fields to be overwritten in the Restore targeted for update. The values for each of these updated fields will be taken from the `restore` provided with this request. Field names are relative to the root of the resource. If no `update_mask` is provided, all fields in `restore` will be written to the target Restore resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `restore` are ignored and are not used to update the target Restore. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.restorePlans.restores.delete()`

Deletes an existing Restore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full name of the Restore Format: `projects/*/locations/*/restorePlans/*/restores/*` |
| `params.etag` | `string` | No | Optional. If provided, this value must match the current value of the target Restore's etag field or the request is rejected. |
| `params.force` | `boolean` | No | Optional. If set to true, any VolumeRestores below this restore will also be deleted. Otherwise, the request will only succeed if the restore has no VolumeRestores. |

#### `projects.locations.restorePlans.restores.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.restorePlans.restores.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.restorePlans.restores.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.restorePlans.restores.volumeRestores`

#### `projects.locations.restorePlans.restores.volumeRestores.list()`

Lists the VolumeRestores for a given Restore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Restore that contains the VolumeRestores to list. Format: `projects/*/locations/*/restorePlans/*/restores/*` |
| `params.pageSize` | `integer` | No | Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The value of next_page_token received from a previous `ListVolumeRestores` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListVolumeRestores` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Field match expression used to filter the results. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the results. |

#### `projects.locations.restorePlans.restores.volumeRestores.get()`

Retrieve the details of a single VolumeRestore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full name of the VolumeRestore resource. Format: `projects/*/locations/*/restorePlans/*/restores/*/volumeRestores/*` |

#### `projects.locations.restorePlans.restores.volumeRestores.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.restorePlans.restores.volumeRestores.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.restorePlans.restores.volumeRestores.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.restoreChannels`

#### `projects.locations.restoreChannels.create()`

Creates a new RestoreChannel in a given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location within which to create the RestoreChannel. Format: `projects/*/locations/*` |
| `params.restoreChannelId` | `string` | No | Optional. The client-provided short name for the RestoreChannel resource. This name must: - be between 1 and 63 characters long (inclusive) - consist of only lower-case ASCII letters, numbers, and dashes - start with a lower-case letter - end with a lower-case letter or number - be unique within the set of RestoreChannels in this location If the user does not provide a name, a uuid will be used as the name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.restoreChannels.list()`

Lists RestoreChannels in a given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location that contains the RestoreChannels to list. Format: `projects/*/locations/*` |
| `params.pageSize` | `integer` | No | Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The value of next_page_token received from a previous `ListRestoreChannels` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListRestoreChannels` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Field match expression used to filter the results. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the results. |

#### `projects.locations.restoreChannels.get()`

Retrieve the details of a single RestoreChannel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Fully qualified RestoreChannel name. Format: `projects/*/locations/*/restoreChannels/*` |

#### `projects.locations.restoreChannels.patch()`

Update a RestoreChannel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The fully qualified name of the RestoreChannel. `projects/*/locations/*/restoreChannels/*` |
| `params.updateMask` | `string` | No | Optional. This is used to specify the fields to be overwritten in the RestoreChannel targeted for update. The values for each of these updated fields will be taken from the `restore_channel` provided with this request. Field names are relative to the root of the resource (e.g., `description`, `destination_project_id`, etc.) If no `update_mask` is provided, all fields in `restore_channel` will be written to the target RestoreChannel resource. Note that OUTPUT_ONLY and IMMUTABLE fields in `restore_channel` are ignored and are not used to update the target RestoreChannel. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.restoreChannels.delete()`

Deletes an existing RestoreChannel.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Fully qualified RestoreChannel name. Format: `projects/*/locations/*/restoreChannels/*` |
| `params.etag` | `string` | No | Optional. If provided, this value must match the current value of the target RestoreChannel's etag field or the request is rejected. |

### `projects.locations.restoreChannels.restorePlanBindings`

#### `projects.locations.restoreChannels.restorePlanBindings.list()`

Lists RestorePlanBindings in a given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The RestoreChannel that contains the ListRestorePlanBindings to list. Format: `projects/*/locations/*/restoreChannels/*` |
| `params.pageSize` | `integer` | No | Optional. The target number of results to return in a single response. If not specified, a default value will be chosen by the service. Note that the response may include a partial list and a caller should only rely on the response's next_page_token to determine if there are more instances left to be queried. |
| `params.pageToken` | `string` | No | Optional. The value of next_page_token received from a previous `ListRestorePlanBindings` call. Provide this to retrieve the subsequent page in a multi-page list of results. When paginating, all other parameters provided to `ListRestorePlanBindings` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Field match expression used to filter the results. |
| `params.orderBy` | `string` | No | Optional. Field by which to sort the results. |

#### `projects.locations.restoreChannels.restorePlanBindings.get()`

Retrieve the details of a single RestorePlanBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Fully qualified RestorePlanBinding name. Format: `projects/*/locations/*/restoreChannels/*/restorePlanBindings/*` |