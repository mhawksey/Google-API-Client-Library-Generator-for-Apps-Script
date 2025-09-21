# Observability API - Apps Script Client Library

Auto-generated client library for using the **Observability API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:45:37 GMT
- **Last Modified:** Sun, 31 Aug 2025 23:45:37 GMT
- **Created:** Sun, 20 Jul 2025 16:44:22 GMT



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
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.scopes`

#### `projects.locations.scopes.get()`

Gets details of a single Scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. The format is: projects/{project}/locations/{location}/scopes/{scope} The `{location}` field must be set to `global`. The `{scope}` field must be set to `_Default`. |

#### `projects.locations.scopes.patch()`

Updates the parameters of a single Scope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the resource. The format is: projects/{project}/locations/{location}/scopes/{scope} The `{location}` field must be set to `global`. The `{scope}` field must be set to `_Default`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Scope resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten when it is in the mask. If the user does not provide a mask, then all fields present in the request are overwritten. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.traceScopes`

#### `projects.locations.traceScopes.get()`

Get TraceScope resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the trace scope: projects/[PROJECT_ID]/locations/[LOCATION_ID]/traceScopes/[TRACE_SCOPE_ID] For example: projects/my-project/locations/global/traceScopes/my-trace-scope |

#### `projects.locations.traceScopes.list()`

List TraceScopes of a project in a particular location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The full resource name of the location to look for trace scopes: projects/[PROJECT_ID]/locations/[LOCATION_ID] For example: projects/my-project/locations/global |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available. |
| `params.pageToken` | `string` | No | Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call. |

#### `projects.locations.traceScopes.create()`

Create a new TraceScope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The full resource name of the location where the trace scope should be created projects/[PROJECT_ID]/locations/[LOCATION_ID] For example: projects/my-project/locations/global |
| `params.traceScopeId` | `string` | No | Required. A client-assigned identifier for the trace scope. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.traceScopes.patch()`

Update a TraceScope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the trace scope. For example: projects/my-project/locations/global/traceScopes/my-trace-scope |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.traceScopes.delete()`

Delete a TraceScope.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the trace scope to delete: projects/[PROJECT_ID]/locations/[LOCATION_ID]/traceScopes/[TRACE_SCOPE_ID] For example: projects/my-project/locations/global/traceScopes/my-trace-scope |