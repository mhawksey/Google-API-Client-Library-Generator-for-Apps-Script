# Cloud FTP API - Apps Script Client Library

Auto-generated client library for using the **Cloud FTP API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:20:06 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:20:06 GMT
- **Created:** Sun, 15 Nov 2026 16:20:06 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.operations`

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.filter` | `string` | No | The standard list filter. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

### `projects.locations.servers`

#### `projects.locations.servers.delete()`

Deletes a single Server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.servers.start()`

Starts a stopping/stopped Server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource Format: `projects/{project}/locations/{location}/servers/{server}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.servers.get()`

Gets details of a single Server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No | Optional. The view of the Server resource to return. |
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.servers.list()`

Lists Servers in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.view` | `string` | No | Optional. The view of the Server resource to return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.parent` | `string` | Yes | Required. Parent value for ListServersRequest |

#### `projects.locations.servers.patch()`

Updates the parameters of a single Server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Server resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields present in the request will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Identifier. name of resource |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.servers.stop()`

Stops an active Server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. Format: `projects/{project}/locations/{location}/servers/{server}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.servers.create()`

Creates a new Server in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.serverId` | `string` | No | Required. A unique ID for the server. Must start with a lowercase letter, and end with a lowercase letter or number. Can contain lowercase letters, numbers, and hyphens. Can't begin with the prefix `goog` or contain the string `google`, including close misspellings such as `g00gle`. Maximum length is 30 characters. |
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.servers.users`

#### `projects.locations.servers.users.list()`

Lists Users in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListUsersRequest |
| `params.view` | `string` | No | Optional. The view of the User resource to return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the user should return. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. User may return fewer items than requested. The maximum value is 1000; The default value is 50 if the field is omitted (or set to 0). |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.servers.users.patch()`

Updates the parameters of a single User.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the User resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields present in the request will be overwritten. |
| `params.name` | `string` | Yes | Identifier. User-friendly name via which User will be identified. projects/{project}/locations/{location}/servers/{server}/users/{user} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.servers.users.create()`

Creates a new User in a given project and location and Server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.userId` | `string` | No | Required. A unique user ID for the SFTP user. The user ID must start with a lowercase letter and can include lowercase letters, numbers, or hyphens. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.servers.users.delete()`

Deletes a single User.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Optional. If set to `true`, the request will `force` the deletion of the User. |
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.servers.users.get()`

Gets details of a single User.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |
| `params.view` | `string` | No | Optional. The view of the User resource to return. |