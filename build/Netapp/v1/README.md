# NetApp API - Apps Script Client Library

Auto-generated client library for using the **NetApp API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:33:46 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:33:46 GMT
- **Created:** Sun, 20 Jul 2025 16:43:48 GMT



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

### `projects.locations.storagePools`

#### `projects.locations.storagePools.list()`

Returns descriptions of all storage pools owned by the caller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value to use if there are additional results to retrieve for this list request. |
| `params.orderBy` | `string` | No | Optional. Sort results. Supported values are "name", "name desc" or "" (unsorted). |
| `params.filter` | `string` | No | Optional. List filter. |

#### `projects.locations.storagePools.create()`

Creates a new storage pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.storagePoolId` | `string` | No | Required. Id of the requesting storage pool. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.storagePools.get()`

Returns the description of the specified storage pool by poolId.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the storage pool |

#### `projects.locations.storagePools.patch()`

Updates the storage pool properties with the full spec

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the storage pool |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the StoragePool resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.storagePools.delete()`

Warning! This operation will permanently delete the storage pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the storage pool |

#### `projects.locations.storagePools.validateDirectoryService()`

ValidateDirectoryService does a connectivity check for a directory service policy attached to the storage pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the storage pool |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.storagePools.switch()`

This operation will switch the active/replica zone for a regional storagePool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the storage pool |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.volumes`

#### `projects.locations.volumes.list()`

Lists Volumes in a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListVolumesRequest |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Filtering results |
| `params.orderBy` | `string` | No | Hint for how to order the results |

#### `projects.locations.volumes.get()`

Gets details of a single Volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the volume |

#### `projects.locations.volumes.create()`

Creates a new Volume in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.volumeId` | `string` | No | Required. Id of the requesting volume. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.patch()`

Updates the parameters of a single Volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the volume |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the Volume resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.delete()`

Deletes a single Volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the volume |
| `params.force` | `boolean` | No | If this field is set as true, CCFE will not block the volume resource deletion even if it has any snapshots resource. (Otherwise, the request will only work if the volume has no snapshots.) |

#### `projects.locations.volumes.revert()`

Revert an existing volume to a specified snapshot. Warning! This operation will permanently revert all changes made after the snapshot was created.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the volume, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.volumes.snapshots`

#### `projects.locations.volumes.snapshots.list()`

Returns descriptions of all snapshots for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The volume for which to retrieve snapshot information, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value to use if there are additional results to retrieve for this list request. |
| `params.orderBy` | `string` | No | Sort results. Supported values are "name", "name desc" or "" (unsorted). |
| `params.filter` | `string` | No | List filter. |

#### `projects.locations.volumes.snapshots.get()`

Describe a snapshot for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The snapshot resource name, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}/snapshots/{snapshot_id}` |

#### `projects.locations.volumes.snapshots.create()`

Create a new snapshot for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The NetApp volume to create the snapshots of, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}` |
| `params.snapshotId` | `string` | No | Required. ID of the snapshot to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.snapshots.delete()`

Deletes a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The snapshot resource name, in the format `projects/*/locations/*/volumes/*/snapshots/{snapshot_id}` |

#### `projects.locations.volumes.snapshots.patch()`

Updates the settings of a specific snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the snapshot. Format: `projects/{project_id}/locations/{location}/volumes/{volume_id}/snapshots/{snapshot_id}`. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.volumes.replications`

#### `projects.locations.volumes.replications.list()`

Returns descriptions of all replications for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The volume for which to retrieve replication information, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value to use if there are additional results to retrieve for this list request. |
| `params.orderBy` | `string` | No | Sort results. Supported values are "name", "name desc" or "" (unsorted). |
| `params.filter` | `string` | No | List filter. |

#### `projects.locations.volumes.replications.get()`

Describe a replication for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The replication resource name, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}` |

#### `projects.locations.volumes.replications.create()`

Create a new replication for a volume.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The NetApp volume to create the replications of, in the format `projects/{project_id}/locations/{location}/volumes/{volume_id}` |
| `params.replicationId` | `string` | No | Required. ID of the replication to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.replications.delete()`

Deletes a replication.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The replication resource name, in the format `projects/*/locations/*/volumes/*/replications/{replication_id}` |

#### `projects.locations.volumes.replications.patch()`

Updates the settings of a specific replication.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the Replication. Format: `projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}`. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.replications.stop()`

Stop Cross Region Replication.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.replications.resume()`

Resume Cross Region Replication.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.replications.reverseDirection()`

Reverses direction of replication. Source becomes destination and destination becomes source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.replications.establishPeering()`

Establish replication peering.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.replications.sync()`

Syncs the replication. This will invoke one time volume data transfer from source to destination.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the replication, in the format of projects/{project_id}/locations/{location}/volumes/{volume_id}/replications/{replication_id}. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.volumes.quotaRules`

#### `projects.locations.volumes.quotaRules.list()`

Returns list of all quota rules in a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListQuotaRulesRequest |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.volumes.quotaRules.get()`

Returns details of the specified quota rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the quota rule |

#### `projects.locations.volumes.quotaRules.create()`

Creates a new quota rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for CreateQuotaRuleRequest |
| `params.quotaRuleId` | `string` | No | Required. ID of the quota rule to create. Must be unique within the parent resource. Must contain only letters, numbers, underscore and hyphen, with the first character a letter or underscore, the last a letter or underscore or a number, and a 63 character maximum. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.quotaRules.patch()`

Updates a quota rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the quota rule. Format: `projects/{project_number}/locations/{location_id}/volumes/volumes/{volume_id}/quotaRules/{quota_rule_id}`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Quota Rule resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.volumes.quotaRules.delete()`

Deletes a quota rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the quota rule. |

### `projects.locations.activeDirectories`

#### `projects.locations.activeDirectories.list()`

Lists active directories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListActiveDirectoriesRequest |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Filtering results |
| `params.orderBy` | `string` | No | Hint for how to order the results |

#### `projects.locations.activeDirectories.get()`

Describes a specified active directory.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the active directory. |

#### `projects.locations.activeDirectories.create()`

CreateActiveDirectory Creates the active directory specified in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.activeDirectoryId` | `string` | No | Required. ID of the active directory to create. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter , the last a letter or a number, and a 63 character maximum. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.activeDirectories.patch()`

Update the parameters of an active directories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the active directory. Format: `projects/{project_number}/locations/{location_id}/activeDirectories/{active_directory_id}`. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the Active Directory resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.activeDirectories.delete()`

Delete the active directory specified in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the active directory. |

### `projects.locations.kmsConfigs`

#### `projects.locations.kmsConfigs.list()`

Returns descriptions of all KMS configs owned by the caller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value to use if there are additional results to retrieve for this list request. |
| `params.orderBy` | `string` | No | Sort results. Supported values are "name", "name desc" or "" (unsorted). |
| `params.filter` | `string` | No | List filter. |

#### `projects.locations.kmsConfigs.create()`

Creates a new KMS config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.kmsConfigId` | `string` | No | Required. Id of the requesting KmsConfig. Must be unique within the parent resource. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.kmsConfigs.get()`

Returns the description of the specified KMS config by kms_config_id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the KmsConfig |

#### `projects.locations.kmsConfigs.patch()`

Updates the Kms config properties with the full spec

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the KmsConfig. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the KmsConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.kmsConfigs.encrypt()`

Encrypt the existing volumes without CMEK encryption with the desired the KMS config for the whole region.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the KmsConfig. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.kmsConfigs.verify()`

Verifies KMS config reachability.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the KMS Config to be verified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.kmsConfigs.delete()`

Warning! This operation will permanently delete the Kms config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the KmsConfig. |

### `projects.locations.backupVaults`

#### `projects.locations.backupVaults.create()`

Creates new backup vault

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location to create the backup vaults, in the format `projects/{project_id}/locations/{location}` |
| `params.backupVaultId` | `string` | No | Required. The ID to use for the backupVault. The ID must be unique within the specified location. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupVaults.get()`

Returns the description of the specified backup vault

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The backupVault resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}` |

#### `projects.locations.backupVaults.list()`

Returns list of all available backup vaults.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location for which to retrieve backupVault information, in the format `projects/{project_id}/locations/{location}`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value to use if there are additional results to retrieve for this list request. |
| `params.orderBy` | `string` | No | Sort results. Supported values are "name", "name desc" or "" (unsorted). |
| `params.filter` | `string` | No | List filter. |

#### `projects.locations.backupVaults.patch()`

Updates the settings of a specific backup vault.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the backup vault. Format: `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}`. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the Backup resource to be updated. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupVaults.delete()`

Warning! This operation will permanently delete the backup vault.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The backupVault resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}` |

### `projects.locations.backupVaults.backups`

#### `projects.locations.backupVaults.backups.create()`

Creates a backup from the volume specified in the request The backup can be created from the given snapshot if specified in the request. If no snapshot specified, there'll be a new snapshot taken to initiate the backup creation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The NetApp backupVault to create the backups of, in the format `projects/*/locations/*/backupVaults/{backup_vault_id}` |
| `params.backupId` | `string` | No | Required. The ID to use for the backup. The ID must be unique within the specified backupVault. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupVaults.backups.get()`

Returns the description of the specified backup

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The backup resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}/backups/{backup_id}` |

#### `projects.locations.backupVaults.backups.list()`

Returns descriptions of all backups for a backupVault.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The backupVault for which to retrieve backup information, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}`. To retrieve backup information for all locations, use "-" for the `{location}` value. To retrieve backup information for all backupVaults, use "-" for the `{backup_vault_id}` value. To retrieve backup information for a volume, use "-" for the `{backup_vault_id}` value and specify volume full name with the filter. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | The next_page_token value to use if there are additional results to retrieve for this list request. |
| `params.orderBy` | `string` | No | Sort results. Supported values are "name", "name desc" or "" (unsorted). |
| `params.filter` | `string` | No | The standard list filter. If specified, backups will be returned based on the attribute name that matches the filter expression. If empty, then no backups are filtered out. See https://google.aip.dev/160 |

#### `projects.locations.backupVaults.backups.delete()`

Warning! This operation will permanently delete the backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The backup resource name, in the format `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}/backups/{backup_id}` |

#### `projects.locations.backupVaults.backups.patch()`

Update backup with full spec.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the backup. Format: `projects/{project_id}/locations/{location}/backupVaults/{backup_vault_id}/backups/{backup_id}`. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the Backup resource to be updated. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.backupPolicies`

#### `projects.locations.backupPolicies.create()`

Creates new backup policy

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location to create the backup policies of, in the format `projects/{project_id}/locations/{location}` |
| `params.backupPolicyId` | `string` | No | Required. The ID to use for the backup policy. The ID must be unique within the specified location. Must contain only letters, numbers and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupPolicies.get()`

Returns the description of the specified backup policy by backup_policy_id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The backupPolicy resource name, in the format `projects/{project_id}/locations/{location}/backupPolicies/{backup_policy_id}` |

#### `projects.locations.backupPolicies.list()`

Returns list of all available backup policies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListBackupPoliciesRequest |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Filtering results |
| `params.orderBy` | `string` | No | Hint for how to order the results |

#### `projects.locations.backupPolicies.patch()`

Updates settings of a specific backup policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the backup policy. Format: `projects/{project_id}/locations/{location}/backupPolicies/{backup_policy_id}`. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the Backup Policy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backupPolicies.delete()`

Warning! This operation will permanently delete the backup policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The backup policy resource name, in the format `projects/{project_id}/locations/{location}/backupPolicies/{backup_policy_id}` |