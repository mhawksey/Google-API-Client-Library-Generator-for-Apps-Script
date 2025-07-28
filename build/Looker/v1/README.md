# Looker (Google Cloud core) API - Apps Script Client Library

Auto-generated client library for using the **Looker (Google Cloud core) API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:08:25 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:34:58 GMT
- **Created:** Sun, 20 Jul 2025 16:42:00 GMT



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

Lists Instances in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | The maximum number of instances to return. If unspecified at most 256 will be returned. The maximum possible value is 2048. |
| `params.pageToken` | `string` | No | A page token received from a previous ListInstancesRequest. |

#### `projects.locations.instances.get()`

Gets details of a single Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/instances/{instance}`. |

#### `projects.locations.instances.create()`

Creates a new Instance in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}`. |
| `params.instanceId` | `string` | No | Required. The unique instance identifier. Must contain only lowercase letters, numbers, or hyphens, with the first character a letter and the last a letter or a number. 63 characters maximum. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.delete()`

Delete instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/instances/{instance}`. |
| `params.force` | `boolean` | No | Whether to force cascading delete. |

#### `projects.locations.instances.patch()`

Update Instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Format: `projects/{project}/locations/{location}/instances/{instance}`. |
| `params.updateMask` | `string` | No | Required. Field mask used to specify the fields to be overwritten in the Instance resource by the update. The fields specified in the mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.restart()`

Restart instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/instances/{instance}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.restore()`

Restore Looker instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Instance being restored Format: projects/{project}/locations/{location}/instances/{instance} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.import()`

Import instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/instances/{instance}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.export()`

Export instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/instances/{instance}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.instances.backups`

#### `projects.locations.instances.backups.list()`

List backups of Looker instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: projects/{project}/locations/{location}/instances/{instance}. |
| `params.pageSize` | `integer` | No | The maximum number of instances to return. |
| `params.pageToken` | `string` | No | A page token received from a previous ListInstances request. |
| `params.orderBy` | `string` | No | Sort results. Default order is "create_time desc". Other supported fields are "state" and "expire_time". https://google.aip.dev/132#ordering |

#### `projects.locations.instances.backups.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/instances/{instance}/backups/{backup}`. |

#### `projects.locations.instances.backups.create()`

Backup Looker instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: projects/{project}/locations/{location}/instances/{instance} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.backups.delete()`

Delete backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: projects/{project}/locations/{location}/instances/{instance}/backups/{backup} |