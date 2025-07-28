# Cloud Filestore API - Apps Script Client Library

Auto-generated client library for using the **Cloud Filestore API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:59:47 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:32:35 GMT
- **Created:** Sun, 20 Jul 2025 16:33:02 GMT



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

### `projects.locations.instances`

#### `projects.locations.instances.list()`

Lists all instances in a project for either a specified location or for all locations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location for which to retrieve instance information, in the format `projects/{project_id}/locations/{location}`. In Cloud Filestore, locations map to Google Cloud zones, for example **us-west1-b**. To retrieve instance information for all locations, use "-" for the `{location}` value. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value to use if there are additional results to retrieve for this list request. |
| `params.orderBy` | `string` | No | Sort results. Supported values are "name", "name desc" or "" (unsorted). |
| `params.filter` | `string` | No | List filter. |

#### `projects.locations.instances.get()`

Gets the details of a specific instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The instance resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`. |

#### `projects.locations.instances.create()`

Creates an instance. When creating from a backup, the capacity of the new instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The instance's project and location, in the format `projects/{project_id}/locations/{location}`. In Filestore, locations map to Google Cloud zones, for example **us-west1-b**. |
| `params.instanceId` | `string` | No | Required. The name of the instance to create. The name must be unique for the specified project and location. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.patch()`

Updates the settings of a specific instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the instance, in the format `projects/{project}/locations/{location}/instances/{instance}`. |
| `params.updateMask` | `string` | No | Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields: * "description" * "file_shares" * "labels" * "performance_config" * "deletion_protection_enabled" * "deletion_protection_reason" |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.restore()`

Restores an existing instance's file share from a backup. The capacity of the instance needs to be equal to or larger than the capacity of the backup (and also equal to or larger than the minimum capacity of the tier).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the instance, in the format `projects/{project_number}/locations/{location_id}/instances/{instance_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.revert()`

Revert an existing instance's file system to a specified snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.delete()`

Deletes an instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The instance resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.force` | `boolean` | No | If set to true, all snapshots of the instance will also be deleted. (Otherwise, the request will only work if the instance has no snapshots.) |

#### `projects.locations.instances.promoteReplica()`

Promote the standby instance (replica).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the instance, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.instances.snapshots`

#### `projects.locations.instances.snapshots.list()`

Lists all snapshots in a project for either a specified location or for all locations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The instance for which to retrieve snapshot information, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value to use if there are additional results to retrieve for this list request. |
| `params.orderBy` | `string` | No | Sort results. Supported values are "name", "name desc" or "" (unsorted). |
| `params.filter` | `string` | No | List filter. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If true, allow partial responses for multi-regional Aggregated List requests. |

#### `projects.locations.instances.snapshots.get()`

Gets the details of a specific snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The snapshot resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}/snapshots/{snapshot_id}` |

#### `projects.locations.instances.snapshots.create()`

Creates a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Filestore Instance to create the snapshots of, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}` |
| `params.snapshotId` | `string` | No | Required. The ID to use for the snapshot. The ID must be unique within the specified instance. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.snapshots.delete()`

Deletes a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The snapshot resource name, in the format `projects/{project_id}/locations/{location}/instances/{instance_id}/snapshots/{snapshot_id}` |

#### `projects.locations.instances.snapshots.patch()`

Updates the settings of a specific snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the snapshot, in the format `projects/{project_id}/locations/{location_id}/instances/{instance_id}/snapshots/{snapshot_id}`. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.backups`

#### `projects.locations.backups.list()`

Lists all backups in a project for either a specified location or for all locations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location for which to retrieve backup information, in the format `projects/{project_number}/locations/{location}`. In Filestore, backup locations map to Google Cloud regions, for example **us-west1**. To retrieve backup information for all locations, use "-" for the `{location}` value. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value to use if there are additional results to retrieve for this list request. |
| `params.orderBy` | `string` | No | Sort results. Supported values are "name", "name desc" or "" (unsorted). |
| `params.filter` | `string` | No | List filter. |

#### `projects.locations.backups.get()`

Gets the details of a specific backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The backup resource name, in the format `projects/{project_number}/locations/{location}/backups/{backup_id}`. |

#### `projects.locations.backups.create()`

Creates a backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The backup's project and location, in the format `projects/{project_number}/locations/{location}`. In Filestore, backup locations map to Google Cloud regions, for example **us-west1**. |
| `params.backupId` | `string` | No | Required. The ID to use for the backup. The ID must be unique within the specified project and location. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. Values that do not match this pattern will trigger an INVALID_ARGUMENT error. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backups.delete()`

Deletes a backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The backup resource name, in the format `projects/{project_number}/locations/{location}/backups/{backup_id}` |

#### `projects.locations.backups.patch()`

Updates the settings of a specific backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the backup, in the format `projects/{project_number}/locations/{location_id}/backups/{backup_id}`. |
| `params.updateMask` | `string` | No | Required. Mask of fields to update. At least one path must be supplied in this field. |
| `params.resource` | `object` | Yes | The request body. |