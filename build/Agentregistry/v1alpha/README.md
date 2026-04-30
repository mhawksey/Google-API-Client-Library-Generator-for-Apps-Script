# Agent Registry API - Apps Script Client Library

Auto-generated client library for using the **Agent Registry API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 30 Apr 2026 23:22:36 GMT
- **Last Modified:** Thu, 30 Apr 2026 23:22:36 GMT
- **Created:** Mon, 30 Mar 2026 19:58:45 GMT



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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

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
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents`

#### `projects.locations.agents.list()`

Lists Agents in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListAgentsRequest |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.agents.search()`

Searches Agents in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for SearchAgentsRequest. Format: `projects/{project}/locations/{location}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.get()`

Gets details of a single Agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

### `projects.locations.endpoints`

#### `projects.locations.endpoints.list()`

Lists Endpoints in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location to list endpoints in. Expected format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. A query string used to filter the list of endpoints returned. The filter expression must follow AIP-160 syntax. Filtering is supported on the `name`, `display_name`, `description`, `version`, and `interfaces` fields. Some examples: * `name = "projects/p1/locations/l1/endpoints/e1"` * `display_name = "my-endpoint"` * `description = "my-endpoint-description"` * `version = "v1"` * `interfaces.transport = "HTTP_JSON"` |

#### `projects.locations.endpoints.get()`

Gets details of a single Endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the endpoint to retrieve. Format: `projects/{project}/locations/{location}/endpoints/{endpoint}` |

### `projects.locations.mcpServers`

#### `projects.locations.mcpServers.list()`

Lists McpServers in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListMcpServersRequest. Format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.mcpServers.search()`

Searches McpServers in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for SearchMcpServersRequest. Format: `projects/{project}/locations/{location}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.mcpServers.get()`

Gets details of a single McpServer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

### `projects.locations.services`

#### `projects.locations.services.list()`

Lists Services in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location to list services in. Expected format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. A query string used to filter the list of services returned. The filter expression must follow AIP-160 syntax. Filtering is supported on the `name`, `display_name`, `description`, and `labels` fields. Some examples: * `name = "projects/p1/locations/l1/services/s1"` * `display_name = "my-service"` * `description : "myservice description"` * `labels.env = "prod"` |

#### `projects.locations.services.get()`

Gets details of a single Service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`. |

#### `projects.locations.services.create()`

Creates a new Service in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location to create the Service in. Expected format: `projects/{project}/locations/{location}`. |
| `params.serviceId` | `string` | No | Required. The ID to use for the service, which will become the final component of the service's resource name. This value should be 4-63 characters, and valid characters are `/a-z-/`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.services.patch()`

Updates the parameters of a single Service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Service resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields present in the request will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.services.delete()`

Deletes a single Service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Service. Format: `projects/{project}/locations/{location}/services/{service}`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.bindings`

#### `projects.locations.bindings.list()`

Lists Bindings in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location to list bindings in. Expected format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. Page size is 500 if unspecified and is capped at `500` even if a larger value is given. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. A query string used to filter the list of bindings returned. The filter expression must follow AIP-160 syntax. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.bindings.get()`

Gets details of a single Binding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`. |

#### `projects.locations.bindings.create()`

Creates a new Binding in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location to create the Binding in. Expected format: `projects/{project}/locations/{location}`. |
| `params.bindingId` | `string` | No | Required. The ID to use for the binding, which will become the final component of the binding's resource name. This value should be 4-63 characters, and must conform to RFC-1034. Specifically, it must match the regular expression `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.bindings.patch()`

Updates the parameters of a single Binding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. The resource name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Binding resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields present in the request will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.bindings.delete()`

Deletes a single Binding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Binding. Format: `projects/{project}/locations/{location}/bindings/{binding}`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.bindings.fetchAvailable()`

Fetches available Bindings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, in the format `projects/{project}/locations/{location}`. |
| `params.sourceIdentifier` | `string` | No | The identifier of the source Agent. Format: * `urn:agent:{publisher}:{namespace}:{name}` |
| `params.targetIdentifier` | `string` | No | Optional. The identifier of the target Agent, MCP Server, or Endpoint. Format: * `urn:agent:{publisher}:{namespace}:{name}` * `urn:mcp:{publisher}:{namespace}:{name}` * `urn:endpoint:{publisher}:{namespace}:{name}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. Page size is 500 if unspecified and is capped at `500` even if a larger value is given. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |