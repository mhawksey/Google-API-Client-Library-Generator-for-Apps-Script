# Serverless VPC Access API - Apps Script Client Library

Auto-generated client library for using the **Serverless VPC Access API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:56:58 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:49:00 GMT
- **Created:** Sun, 20 Jul 2025 17:02:53 GMT



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

### `projects.locations.connectors`

#### `projects.locations.connectors.create()`

Creates a Serverless VPC Access connector, returns an operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project ID and location in which the configuration should be created, specified in the format `projects/*/locations/*`. |
| `params.connectorId` | `string` | No | Required. The ID to use for this connector. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connectors.patch()`

Updates a Serverless VPC Access connector, returns an operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name in the format `projects/*/locations/*/connectors/*`. |
| `params.updateMask` | `string` | No | The fields to update on the entry group. If absent or empty, all modifiable fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connectors.get()`

Gets a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of a Serverless VPC Access connector to get. |

#### `projects.locations.connectors.list()`

Lists Serverless VPC Access connectors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the routes should be listed. |
| `params.pageSize` | `integer` | No | Maximum number of functions to return per call. |
| `params.pageToken` | `string` | No | Continuation token. |

#### `projects.locations.connectors.delete()`

Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of a Serverless VPC Access connector to delete. |