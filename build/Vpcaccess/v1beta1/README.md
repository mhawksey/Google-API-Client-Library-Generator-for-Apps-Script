# Serverless VPC Access API - Apps Script Client Library

Auto-generated client library for using the **Serverless VPC Access API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 01:25:01 GMT
- **Last Modified:** Sat, 01 Nov 2025 01:25:01 GMT
- **Created:** Sun, 20 Jul 2025 17:02:49 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the [ListOperationsResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. This field is not by default supported and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.connectors`

#### `projects.locations.connectors.list()`

Lists Serverless VPC Access connectors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Maximum number of functions to return per call. |
| `params.parent` | `string` | Yes | Required. The project and location from which the routes should be listed. |
| `params.pageToken` | `string` | No | Continuation token. |

#### `projects.locations.connectors.delete()`

Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of a Serverless VPC Access connector to delete. |

#### `projects.locations.connectors.create()`

Creates a Serverless VPC Access connector, returns an operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.connectorId` | `string` | No | Required. The ID to use for this connector. |
| `params.parent` | `string` | Yes | Required. The project ID and location in which the configuration should be created, specified in the format `projects/*/locations/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connectors.get()`

Gets a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of a Serverless VPC Access connector to get. |

#### `projects.locations.connectors.patch()`

Updates a Serverless VPC Access connector, returns an operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | The fields to update on the entry group. If absent or empty, all modifiable fields are updated. |
| `params.name` | `string` | Yes | The resource name in the format `projects/*/locations/*/connectors/*`. |
| `params.requestBody` | `object` | Yes | The request body. |