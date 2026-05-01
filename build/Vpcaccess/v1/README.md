# Serverless VPC Access API - Apps Script Client Library

Auto-generated client library for using the **Serverless VPC Access API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Fri, 01 May 2026 00:37:52 GMT
- **Last Modified:** Fri, 01 May 2026 00:37:52 GMT
- **Created:** Sun, 20 Jul 2025 17:02:53 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connectors.get()`

Gets a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of a Serverless VPC Access connector to get. |

#### `projects.locations.connectors.delete()`

Deletes a Serverless VPC Access connector. Returns NOT_FOUND if the resource does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of a Serverless VPC Access connector to delete. |

#### `projects.locations.connectors.list()`

Lists Serverless VPC Access connectors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Continuation token. |
| `params.parent` | `string` | Yes | Required. The project and location from which the routes should be listed. |
| `params.pageSize` | `integer` | No | Maximum number of functions to return per call. |

#### `projects.locations.connectors.patch()`

Updates a Serverless VPC Access connector, returns an operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name in the format `projects/*/locations/*/connectors/*`. |
| `params.updateMask` | `string` | No | The fields to update on the entry group. If absent or empty, all modifiable fields are updated. |
| `params.requestBody` | `object` | Yes | The request body. |