# Cloud TPU API - Apps Script Client Library

Auto-generated client library for using the **Cloud TPU API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:56:23 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:53:50 GMT
- **Created:** Sun, 20 Jul 2025 16:55:59 GMT



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
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

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

### `projects.locations.nodes`

#### `projects.locations.nodes.list()`

Lists nodes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.locations.nodes.get()`

Gets the details of a node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. |

#### `projects.locations.nodes.create()`

Creates a node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. |
| `params.nodeId` | `string` | No | The unqualified resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.nodes.delete()`

Deletes a node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. |

#### `projects.locations.nodes.reimage()`

Reimages a node's OS.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.nodes.stop()`

Stops a node, this operation is only available with single TPU nodes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.nodes.start()`

Starts a node.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.tensorflowVersions`

#### `projects.locations.tensorflowVersions.list()`

List TensorFlow versions supported by this API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |
| `params.filter` | `string` | No | List filter. |
| `params.orderBy` | `string` | No | Sort results. |

#### `projects.locations.tensorflowVersions.get()`

Gets TensorFlow Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. |

### `projects.locations.acceleratorTypes`

#### `projects.locations.acceleratorTypes.list()`

Lists accelerator types supported by this API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |
| `params.filter` | `string` | No | List filter. |
| `params.orderBy` | `string` | No | Sort results. |

#### `projects.locations.acceleratorTypes.get()`

Gets AcceleratorType.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. |