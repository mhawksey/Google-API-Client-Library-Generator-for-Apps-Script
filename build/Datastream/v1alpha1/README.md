# Datastream API - Apps Script Client Library

Auto-generated client library for using the **Datastream API (version: v1alpha1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 00:41:24 GMT
- **Last Modified:** Sat, 01 Nov 2025 00:41:24 GMT
- **Created:** Sun, 20 Jul 2025 16:25:44 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.fetchStaticIps()`

The FetchStaticIps API call exposes the static IP addresses used by Datastream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Maximum number of Ips to return, will likely not be specified. |
| `params.name` | `string` | Yes | Required. The name resource of the Response type. Must be in the format `projects/*/locations/*`. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListStaticIps` call. will likely not be specified. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the [ListOperationsResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`. This field is not by default supported and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.privateConnections`

#### `projects.locations.privateConnections.create()`

Use this method to create a private connectivity configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parent` | `string` | Yes | Required. The parent that owns the collection of PrivateConnections. |
| `params.privateConnectionId` | `string` | No | Required. The private connectivity identifier. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.privateConnections.delete()`

Use this method to delete a private connectivity configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Required. The name of the private connectivity configuration to delete. |

#### `projects.locations.privateConnections.list()`

Use this method to list private connectivity configurations in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Filter request. |
| `params.orderBy` | `string` | No | Order by fields for the result. |
| `params.pageToken` | `string` | No | Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Maximum number of private connectivity configurations to return. If unspecified, at most 50 private connectivity configurations that will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The parent that owns the collection of private connectivity configurations. |

#### `projects.locations.privateConnections.get()`

Use this method to get details about a private connectivity configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the private connectivity configuration to get. |

### `projects.locations.privateConnections.routes`

#### `projects.locations.privateConnections.routes.create()`

Use this method to create a route for a private connectivity in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.routeId` | `string` | No | Required. The Route identifier. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parent` | `string` | Yes | Required. The parent that owns the collection of Routes. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.privateConnections.routes.get()`

Use this method to get details about a route.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Route resource to get. |

#### `projects.locations.privateConnections.routes.list()`

Use this method to list routes created for a private connectivity in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Order by fields for the result. |
| `params.pageSize` | `integer` | No | Maximum number of Routes to return. The service may return fewer than this value. If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The parent that owns the collection of Routess. |
| `params.pageToken` | `string` | No | Page token received from a previous `ListRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRoutes` must match the call that provided the page token. |
| `params.filter` | `string` | No | Filter request. |

#### `projects.locations.privateConnections.routes.delete()`

Use this method to delete a route.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Route resource to delete. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.connectionProfiles`

#### `projects.locations.connectionProfiles.delete()`

Use this method to delete a connection profile..

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the connection profile resource to delete. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.connectionProfiles.list()`

Use this method to list connection profiles created in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Filter request. |
| `params.orderBy` | `string` | No | Order by fields for the result. |
| `params.pageToken` | `string` | No | Page token received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The parent that owns the collection of connection profiles. |

#### `projects.locations.connectionProfiles.get()`

Use this method to get details about a connection profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the connection profile resource to get. |

#### `projects.locations.connectionProfiles.patch()`

Use this method to update the parameters of a connection profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Output only. The resource's name. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.validateOnly` | `boolean` | No | Optional. Only validate the connection profile, but do not update any resources. The default is false. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connectionProfiles.create()`

Use this method to create a connection profile in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.connectionProfileId` | `string` | No | Required. The connection profile identifier. |
| `params.parent` | `string` | Yes | Required. The parent that owns the collection of ConnectionProfiles. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connectionProfiles.discover()`

Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the ConnectionProfile type. Must be in the format `projects/*/locations/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.streams`

#### `projects.locations.streams.create()`

Use this method to create a stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | Optional. Only validate the stream, but do not create any resources. The default is false. |
| `params.streamId` | `string` | No | Required. The stream identifier. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.force` | `boolean` | No | Optional. Create the stream without validating it. |
| `params.parent` | `string` | Yes | Required. The parent that owns the collection of streams. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.streams.fetchErrors()`

Use this method to fetch any errors associated with a stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.stream` | `string` | Yes | Name of the Stream resource for which to fetch any errors. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.streams.list()`

Use this method to list streams in a project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Order by fields for the result. |
| `params.pageSize` | `integer` | No | Maximum number of streams to return. If unspecified, at most 50 streams will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The parent that owns the collection of streams. |
| `params.pageToken` | `string` | No | Page token received from a previous `ListStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreams` must match the call that provided the page token. |
| `params.filter` | `string` | No | Filter request. |

#### `projects.locations.streams.patch()`

Use this method to update the configuration of a stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | Optional. Only validate the stream with the changes, without actually updating it. The default is false. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.force` | `boolean` | No | Optional. Execute the update without validating it. |
| `params.name` | `string` | Yes | Output only. The stream's name. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the stream resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.streams.get()`

Use this method to get details about a stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the stream resource to get. |

#### `projects.locations.streams.delete()`

Use this method to delete a stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the stream resource to delete. |
| `params.requestId` | `string` | No | Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.streams.objects`

#### `projects.locations.streams.objects.stopBackfillJob()`

Stops the backfill job for the specified stream object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.object` | `string` | Yes | Required. The name of the stream object resource to stop the backfill job for. |

#### `projects.locations.streams.objects.startBackfillJob()`

Starts backfill job for the specified stream object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.object` | `string` | Yes | Required. The name of the stream object resource to start a backfill job for. |

#### `projects.locations.streams.objects.list()`

Use this method to list the objects of a specific stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Page token received from a previous `ListStreamObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreamObjectsRequest` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The parent stream that owns the collection of objects. |

#### `projects.locations.streams.objects.get()`

Use this method to get details about a stream object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the stream object resource to get. |