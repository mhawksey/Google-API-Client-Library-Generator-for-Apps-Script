# Network Services API - Apps Script Client Library

Auto-generated client library for using the **Network Services API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:58:48 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:42:50 GMT
- **Created:** Sun, 20 Jul 2025 16:44:09 GMT



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

### `projects.locations.lbTrafficExtensions`

#### `projects.locations.lbTrafficExtensions.list()`

Lists `LbTrafficExtension` resources in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the `LbTrafficExtension` resources are listed. These values are specified in the following format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results that the server returns. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.orderBy` | `string` | No | Optional. Hint about how to order the results. |

#### `projects.locations.lbTrafficExtensions.get()`

Gets details of the specified `LbTrafficExtension` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the `LbTrafficExtension` resource to get. Must be in the format `projects/{project}/locations/{location}/lbTrafficExtensions/{lb_traffic_extension}`. |

#### `projects.locations.lbTrafficExtensions.create()`

Creates a new `LbTrafficExtension` resource in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the `LbTrafficExtension` resource. Must be in the format `projects/{project}/locations/{location}`. |
| `params.lbTrafficExtensionId` | `string` | No | Required. User-provided ID of the `LbTrafficExtension` resource to be created. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lbTrafficExtensions.patch()`

Updates the parameters of the specified `LbTrafficExtension` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. Name of the `LbTrafficExtension` resource in the following format: `projects/{project}/locations/{location}/lbTrafficExtensions/{lb_traffic_extension}`. |
| `params.updateMask` | `string` | No | Optional. Used to specify the fields to be overwritten in the `LbTrafficExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lbTrafficExtensions.delete()`

Deletes the specified `LbTrafficExtension` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `LbTrafficExtension` resource to delete. Must be in the format `projects/{project}/locations/{location}/lbTrafficExtensions/{lb_traffic_extension}`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.lbRouteExtensions`

#### `projects.locations.lbRouteExtensions.list()`

Lists `LbRouteExtension` resources in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the `LbRouteExtension` resources are listed. These values are specified in the following format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results that the server returns. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.orderBy` | `string` | No | Optional. Hint about how to order the results. |

#### `projects.locations.lbRouteExtensions.get()`

Gets details of the specified `LbRouteExtension` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the `LbRouteExtension` resource to get. Must be in the format `projects/{project}/locations/{location}/lbRouteExtensions/{lb_route_extension}`. |

#### `projects.locations.lbRouteExtensions.create()`

Creates a new `LbRouteExtension` resource in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the `LbRouteExtension` resource. Must be in the format `projects/{project}/locations/{location}`. |
| `params.lbRouteExtensionId` | `string` | No | Required. User-provided ID of the `LbRouteExtension` resource to be created. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lbRouteExtensions.patch()`

Updates the parameters of the specified `LbRouteExtension` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. Name of the `LbRouteExtension` resource in the following format: `projects/{project}/locations/{location}/lbRouteExtensions/{lb_route_extension}`. |
| `params.updateMask` | `string` | No | Optional. Used to specify the fields to be overwritten in the `LbRouteExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lbRouteExtensions.delete()`

Deletes the specified `LbRouteExtension` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `LbRouteExtension` resource to delete. Must be in the format `projects/{project}/locations/{location}/lbRouteExtensions/{lb_route_extension}`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.lbEdgeExtensions`

#### `projects.locations.lbEdgeExtensions.list()`

Lists `LbEdgeExtension` resources in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the `LbEdgeExtension` resources are listed. These values are specified in the following format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results that the server returns. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.orderBy` | `string` | No | Optional. Hint about how to order the results. |

#### `projects.locations.lbEdgeExtensions.get()`

Gets details of the specified `LbEdgeExtension` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the `LbEdgeExtension` resource to get. Must be in the format `projects/{project}/locations/{location}/lbEdgeExtensions/{lb_edge_extension}`. |

#### `projects.locations.lbEdgeExtensions.create()`

Creates a new `LbEdgeExtension` resource in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the `LbEdgeExtension` resource. Must be in the format `projects/{project}/locations/{location}`. |
| `params.lbEdgeExtensionId` | `string` | No | Required. User-provided ID of the `LbEdgeExtension` resource to be created. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lbEdgeExtensions.patch()`

Updates the parameters of the specified `LbEdgeExtension` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. Name of the `LbEdgeExtension` resource in the following format: `projects/{project}/locations/{location}/lbEdgeExtensions/{lb_edge_extension}`. |
| `params.updateMask` | `string` | No | Optional. Used to specify the fields to be overwritten in the `LbEdgeExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.lbEdgeExtensions.delete()`

Deletes the specified `LbEdgeExtension` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `LbEdgeExtension` resource to delete. Must be in the format `projects/{project}/locations/{location}/lbEdgeExtensions/{lb_edge_extension}`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.authzExtensions`

#### `projects.locations.authzExtensions.list()`

Lists `AuthzExtension` resources in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the `AuthzExtension` resources are listed. These values are specified in the following format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results that the server returns. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.orderBy` | `string` | No | Optional. Hint about how to order the results. |

#### `projects.locations.authzExtensions.get()`

Gets details of the specified `AuthzExtension` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the `AuthzExtension` resource to get. Must be in the format `projects/{project}/locations/{location}/authzExtensions/{authz_extension}`. |

#### `projects.locations.authzExtensions.create()`

Creates a new `AuthzExtension` resource in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the `AuthzExtension` resource. Must be in the format `projects/{project}/locations/{location}`. |
| `params.authzExtensionId` | `string` | No | Required. User-provided ID of the `AuthzExtension` resource to be created. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authzExtensions.patch()`

Updates the parameters of the specified `AuthzExtension` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Identifier. Name of the `AuthzExtension` resource in the following format: `projects/{project}/locations/{location}/authzExtensions/{authz_extension}`. |
| `params.updateMask` | `string` | No | Required. Used to specify the fields to be overwritten in the `AuthzExtension` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.authzExtensions.delete()`

Deletes the specified `AuthzExtension` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `AuthzExtension` resource to delete. Must be in the format `projects/{project}/locations/{location}/authzExtensions/{authz_extension}`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server ignores the second request This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.endpointPolicies`

#### `projects.locations.endpointPolicies.list()`

Lists EndpointPolicies in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the EndpointPolicies should be listed, specified in the format `projects/*/locations/global`. |
| `params.pageSize` | `integer` | No | Maximum number of EndpointPolicies to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListEndpointPoliciesResponse` Indicates that this is a continuation of a prior `ListEndpointPolicies` call, and that the system should return the next page of data. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail. |

#### `projects.locations.endpointPolicies.get()`

Gets details of a single EndpointPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the EndpointPolicy to get. Must be in the format `projects/*/locations/global/endpointPolicies/*`. |

#### `projects.locations.endpointPolicies.create()`

Creates a new EndpointPolicy in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the EndpointPolicy. Must be in the format `projects/*/locations/global`. |
| `params.endpointPolicyId` | `string` | No | Required. Short name of the EndpointPolicy resource to be created. E.g. "CustomECS". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpointPolicies.patch()`

Updates the parameters of a single EndpointPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the EndpointPolicy resource. It matches pattern `projects/{project}/locations/global/endpointPolicies/{endpoint_policy}`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the EndpointPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.endpointPolicies.delete()`

Deletes a single EndpointPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the EndpointPolicy to delete. Must be in the format `projects/*/locations/global/endpointPolicies/*`. |

### `projects.locations.wasmPlugins`

#### `projects.locations.wasmPlugins.list()`

Lists `WasmPlugin` resources in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the `WasmPlugin` resources are listed, specified in the following format: `projects/{project}/locations/global`. |
| `params.pageSize` | `integer` | No | Maximum number of `WasmPlugin` resources to return per call. If not specified, at most 50 `WasmPlugin` resources are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | The value returned by the last `ListWasmPluginsResponse` call. Indicates that this is a continuation of a prior `ListWasmPlugins` call, and that the next page of data is to be returned. |

#### `projects.locations.wasmPlugins.get()`

Gets details of the specified `WasmPlugin` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the `WasmPlugin` resource to get. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}`. |
| `params.view` | `string` | No | Determines how much data must be returned in the response. See [AIP-157](https://google.aip.dev/157). |

#### `projects.locations.wasmPlugins.create()`

Creates a new `WasmPlugin` resource in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the `WasmPlugin` resource. Must be in the format `projects/{project}/locations/global`. |
| `params.wasmPluginId` | `string` | No | Required. User-provided ID of the `WasmPlugin` resource to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.wasmPlugins.patch()`

Updates the parameters of the specified `WasmPlugin` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the `WasmPlugin` resource in the following format: `projects/{project}/locations/{location}/wasmPlugins/{wasm_plugin}`. |
| `params.updateMask` | `string` | No | Optional. Used to specify the fields to be overwritten in the `WasmPlugin` resource by the update. The fields specified in the `update_mask` field are relative to the resource, not the full request. An omitted `update_mask` field is treated as an implied `update_mask` field equivalent to all fields that are populated (that have a non-empty value). The `update_mask` field supports a special value `*`, which means that each field in the given `WasmPlugin` resource (including the empty ones) replaces the current value. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.wasmPlugins.delete()`

Deletes the specified `WasmPlugin` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the `WasmPlugin` resource to delete. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}`. |

### `projects.locations.wasmPlugins.versions`

#### `projects.locations.wasmPlugins.versions.list()`

Lists `WasmPluginVersion` resources in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The `WasmPlugin` resource whose `WasmPluginVersion`s are listed, specified in the following format: `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}`. |
| `params.pageSize` | `integer` | No | Maximum number of `WasmPluginVersion` resources to return per call. If not specified, at most 50 `WasmPluginVersion` resources are returned. The maximum value is 1000; values above 1000 are coerced to 1000. |
| `params.pageToken` | `string` | No | The value returned by the last `ListWasmPluginVersionsResponse` call. Indicates that this is a continuation of a prior `ListWasmPluginVersions` call, and that the next page of data is to be returned. |

#### `projects.locations.wasmPlugins.versions.get()`

Gets details of the specified `WasmPluginVersion` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the `WasmPluginVersion` resource to get. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}/versions/{wasm_plugin_version}`. |

#### `projects.locations.wasmPlugins.versions.create()`

Creates a new `WasmPluginVersion` resource in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the `WasmPluginVersion` resource. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}`. |
| `params.wasmPluginVersionId` | `string` | No | Required. User-provided ID of the `WasmPluginVersion` resource to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.wasmPlugins.versions.delete()`

Deletes the specified `WasmPluginVersion` resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the `WasmPluginVersion` resource to delete. Must be in the format `projects/{project}/locations/global/wasmPlugins/{wasm_plugin}/versions/{wasm_plugin_version}`. |

### `projects.locations.gateways`

#### `projects.locations.gateways.list()`

Lists Gateways in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the Gateways should be listed, specified in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Maximum number of Gateways to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListGatewaysResponse` Indicates that this is a continuation of a prior `ListGateways` call, and that the system should return the next page of data. |

#### `projects.locations.gateways.get()`

Gets details of a single Gateway.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the Gateway to get. Must be in the format `projects/*/locations/*/gateways/*`. |

#### `projects.locations.gateways.create()`

Creates a new Gateway in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the Gateway. Must be in the format `projects/*/locations/*`. |
| `params.gatewayId` | `string` | No | Required. Short name of the Gateway resource to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.gateways.patch()`

Updates the parameters of a single Gateway.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the Gateway resource. It matches pattern `projects/*/locations/*/gateways/`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Gateway resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.gateways.delete()`

Deletes a single Gateway.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the Gateway to delete. Must be in the format `projects/*/locations/*/gateways/*`. |

### `projects.locations.gateways.routeViews`

#### `projects.locations.gateways.routeViews.get()`

Get a single RouteView of a Gateway.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the GatewayRouteView resource. Formats: projects/{project_number}/locations/{location}/gateways/{gateway}/routeViews/{route_view} |

#### `projects.locations.gateways.routeViews.list()`

Lists RouteViews

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Gateway to which a Route is associated. Formats: projects/{project_number}/locations/{location}/gateways/{gateway} |
| `params.pageSize` | `integer` | No | Maximum number of GatewayRouteViews to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListGatewayRouteViewsResponse` Indicates that this is a continuation of a prior `ListGatewayRouteViews` call, and that the system should return the next page of data. |

### `projects.locations.grpcRoutes`

#### `projects.locations.grpcRoutes.list()`

Lists GrpcRoutes in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the GrpcRoutes should be listed, specified in the format `projects/*/locations/global`. |
| `params.pageSize` | `integer` | No | Maximum number of GrpcRoutes to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListGrpcRoutesResponse` Indicates that this is a continuation of a prior `ListGrpcRoutes` call, and that the system should return the next page of data. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail. |

#### `projects.locations.grpcRoutes.get()`

Gets details of a single GrpcRoute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the GrpcRoute to get. Must be in the format `projects/*/locations/global/grpcRoutes/*`. |

#### `projects.locations.grpcRoutes.create()`

Creates a new GrpcRoute in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the GrpcRoute. Must be in the format `projects/*/locations/global`. |
| `params.grpcRouteId` | `string` | No | Required. Short name of the GrpcRoute resource to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.grpcRoutes.patch()`

Updates the parameters of a single GrpcRoute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the GrpcRoute resource. It matches pattern `projects/*/locations/global/grpcRoutes/` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the GrpcRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.grpcRoutes.delete()`

Deletes a single GrpcRoute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the GrpcRoute to delete. Must be in the format `projects/*/locations/global/grpcRoutes/*`. |

### `projects.locations.httpRoutes`

#### `projects.locations.httpRoutes.list()`

Lists HttpRoute in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the HttpRoutes should be listed, specified in the format `projects/*/locations/global`. |
| `params.pageSize` | `integer` | No | Maximum number of HttpRoutes to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListHttpRoutesResponse` Indicates that this is a continuation of a prior `ListHttpRoutes` call, and that the system should return the next page of data. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail. |

#### `projects.locations.httpRoutes.get()`

Gets details of a single HttpRoute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the HttpRoute to get. Must be in the format `projects/*/locations/global/httpRoutes/*`. |

#### `projects.locations.httpRoutes.create()`

Creates a new HttpRoute in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the HttpRoute. Must be in the format `projects/*/locations/global`. |
| `params.httpRouteId` | `string` | No | Required. Short name of the HttpRoute resource to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.httpRoutes.patch()`

Updates the parameters of a single HttpRoute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the HttpRoute resource. It matches pattern `projects/*/locations/global/httpRoutes/http_route_name>`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the HttpRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.httpRoutes.delete()`

Deletes a single HttpRoute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the HttpRoute to delete. Must be in the format `projects/*/locations/global/httpRoutes/*`. |

### `projects.locations.tcpRoutes`

#### `projects.locations.tcpRoutes.list()`

Lists TcpRoute in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the TcpRoutes should be listed, specified in the format `projects/*/locations/global`. |
| `params.pageSize` | `integer` | No | Maximum number of TcpRoutes to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListTcpRoutesResponse` Indicates that this is a continuation of a prior `ListTcpRoutes` call, and that the system should return the next page of data. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail. |

#### `projects.locations.tcpRoutes.get()`

Gets details of a single TcpRoute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the TcpRoute to get. Must be in the format `projects/*/locations/global/tcpRoutes/*`. |

#### `projects.locations.tcpRoutes.create()`

Creates a new TcpRoute in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the TcpRoute. Must be in the format `projects/*/locations/global`. |
| `params.tcpRouteId` | `string` | No | Required. Short name of the TcpRoute resource to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tcpRoutes.patch()`

Updates the parameters of a single TcpRoute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the TcpRoute resource. It matches pattern `projects/*/locations/global/tcpRoutes/tcp_route_name>`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the TcpRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tcpRoutes.delete()`

Deletes a single TcpRoute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the TcpRoute to delete. Must be in the format `projects/*/locations/global/tcpRoutes/*`. |

### `projects.locations.tlsRoutes`

#### `projects.locations.tlsRoutes.list()`

Lists TlsRoute in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the TlsRoutes should be listed, specified in the format `projects/*/locations/global`. |
| `params.pageSize` | `integer` | No | Maximum number of TlsRoutes to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListTlsRoutesResponse` Indicates that this is a continuation of a prior `ListTlsRoutes` call, and that the system should return the next page of data. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail. |

#### `projects.locations.tlsRoutes.get()`

Gets details of a single TlsRoute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the TlsRoute to get. Must be in the format `projects/*/locations/global/tlsRoutes/*`. |

#### `projects.locations.tlsRoutes.create()`

Creates a new TlsRoute in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the TlsRoute. Must be in the format `projects/*/locations/global`. |
| `params.tlsRouteId` | `string` | No | Required. Short name of the TlsRoute resource to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tlsRoutes.patch()`

Updates the parameters of a single TlsRoute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the TlsRoute resource. It matches pattern `projects/*/locations/global/tlsRoutes/tls_route_name>`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the TlsRoute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.tlsRoutes.delete()`

Deletes a single TlsRoute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the TlsRoute to delete. Must be in the format `projects/*/locations/global/tlsRoutes/*`. |

### `projects.locations.serviceBindings`

#### `projects.locations.serviceBindings.list()`

Lists ServiceBinding in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the ServiceBindings should be listed, specified in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Maximum number of ServiceBindings to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListServiceBindingsResponse` Indicates that this is a continuation of a prior `ListRouters` call, and that the system should return the next page of data. |

#### `projects.locations.serviceBindings.get()`

Gets details of a single ServiceBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the ServiceBinding to get. Must be in the format `projects/*/locations/*/serviceBindings/*`. |

#### `projects.locations.serviceBindings.create()`

Creates a new ServiceBinding in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the ServiceBinding. Must be in the format `projects/*/locations/*`. |
| `params.serviceBindingId` | `string` | No | Required. Short name of the ServiceBinding resource to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.serviceBindings.patch()`

Updates the parameters of a single ServiceBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the ServiceBinding resource. It matches pattern `projects/*/locations/*/serviceBindings/`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the ServiceBinding resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.serviceBindings.delete()`

Deletes a single ServiceBinding.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the ServiceBinding to delete. Must be in the format `projects/*/locations/*/serviceBindings/*`. |

### `projects.locations.meshes`

#### `projects.locations.meshes.list()`

Lists Meshes in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the Meshes should be listed, specified in the format `projects/*/locations/global`. |
| `params.pageSize` | `integer` | No | Maximum number of Meshes to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListMeshesResponse` Indicates that this is a continuation of a prior `ListMeshes` call, and that the system should return the next page of data. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If true, allow partial responses for multi-regional Aggregated List requests. Otherwise if one of the locations is down or unreachable, the Aggregated List request will fail. |

#### `projects.locations.meshes.get()`

Gets details of a single Mesh.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the Mesh to get. Must be in the format `projects/*/locations/global/meshes/*`. |

#### `projects.locations.meshes.create()`

Creates a new Mesh in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the Mesh. Must be in the format `projects/*/locations/global`. |
| `params.meshId` | `string` | No | Required. Short name of the Mesh resource to be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.meshes.patch()`

Updates the parameters of a single Mesh.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the Mesh resource. It matches pattern `projects/*/locations/global/meshes/`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Mesh resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.meshes.delete()`

Deletes a single Mesh.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the Mesh to delete. Must be in the format `projects/*/locations/global/meshes/*`. |

### `projects.locations.meshes.routeViews`

#### `projects.locations.meshes.routeViews.get()`

Get a single RouteView of a Mesh.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the MeshRouteView resource. Format: projects/{project_number}/locations/{location}/meshes/{mesh}/routeViews/{route_view} |

#### `projects.locations.meshes.routeViews.list()`

Lists RouteViews

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Mesh to which a Route is associated. Format: projects/{project_number}/locations/{location}/meshes/{mesh} |
| `params.pageSize` | `integer` | No | Maximum number of MeshRouteViews to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListMeshRouteViewsResponse` Indicates that this is a continuation of a prior `ListMeshRouteViews` call, and that the system should return the next page of data. |

### `projects.locations.serviceLbPolicies`

#### `projects.locations.serviceLbPolicies.list()`

Lists ServiceLbPolicies in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location from which the ServiceLbPolicies should be listed, specified in the format `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of ServiceLbPolicies to return per call. |
| `params.pageToken` | `string` | No | The value returned by the last `ListServiceLbPoliciesResponse` Indicates that this is a continuation of a prior `ListRouters` call, and that the system should return the next page of data. |

#### `projects.locations.serviceLbPolicies.get()`

Gets details of a single ServiceLbPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the ServiceLbPolicy to get. Must be in the format `projects/{project}/locations/{location}/serviceLbPolicies/*`. |

#### `projects.locations.serviceLbPolicies.create()`

Creates a new ServiceLbPolicy in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the ServiceLbPolicy. Must be in the format `projects/{project}/locations/{location}`. |
| `params.serviceLbPolicyId` | `string` | No | Required. Short name of the ServiceLbPolicy resource to be created. E.g. for resource name `projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}`. the id is value of {service_lb_policy_name} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.serviceLbPolicies.patch()`

Updates the parameters of a single ServiceLbPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Name of the ServiceLbPolicy resource. It matches pattern `projects/{project}/locations/{location}/serviceLbPolicies/{service_lb_policy_name}`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the ServiceLbPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.serviceLbPolicies.delete()`

Deletes a single ServiceLbPolicy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the ServiceLbPolicy to delete. Must be in the format `projects/{project}/locations/{location}/serviceLbPolicies/*`. |