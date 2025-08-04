# Firebase App Hosting API - Apps Script Client Library

Auto-generated client library for using the **Firebase App Hosting API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:15:34 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:15:34 GMT
- **Created:** Sun, 20 Jul 2025 16:33:18 GMT



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

### `projects.locations.backends`

#### `projects.locations.backends.list()`

Lists backends in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. A parent name of the form `projects/{project}/locations/{locationId}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page. |
| `params.filter` | `string` | No | Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160). |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix. |
| `params.showDeleted` | `boolean` | No | Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet. |

#### `projects.locations.backends.get()`

Gets information about a backend.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. |

#### `projects.locations.backends.create()`

Creates a new backend in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. A parent name of the form `projects/{project}/locations/{locationId}`. |
| `params.backendId` | `string` | No | Required. Id of the backend. Also used as the service ID for Cloud Run, and as part of the default domain name. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backends.patch()`

Updates the information for a single backend.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the backend. Format: `projects/{project}/locations/{locationId}/backends/{backendId}`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the backend resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated, without persisting the request or updating any resources. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the backend is not found, a new backend will be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backends.delete()`

Deletes a single backend.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.force` | `boolean` | No | Optional. If set to true, any resources for this backend will also be deleted. Otherwise, any children resources will block deletion. |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated, without persisting the request or updating any resources. |
| `params.etag` | `string` | No | Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error. |

### `projects.locations.backends.traffic`

#### `projects.locations.backends.traffic.get()`

Gets information about a backend's traffic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/traffic`. |

#### `projects.locations.backends.traffic.patch()`

Updates a backend's traffic.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the backend's traffic. Format: `projects/{project}/locations/{locationId}/backends/{backendId}/traffic`. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the traffic resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated, without persisting the request or updating any resources. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.backends.builds`

#### `projects.locations.backends.builds.list()`

Lists builds in a given project, location, and backend.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent backend in the form `projects/{project}/locations/{locationId}/backends/{backendId}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page. |
| `params.filter` | `string` | No | Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160). |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix. |
| `params.showDeleted` | `boolean` | No | Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet. |

#### `projects.locations.backends.builds.get()`

Gets information about a build.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/builds/{buildId}`. |

#### `projects.locations.backends.builds.create()`

Creates a new build for a backend.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. |
| `params.buildId` | `string` | No | Required. Desired ID of the build being created. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backends.builds.delete()`

Deletes a single build.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/builds/{buildId}`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.etag` | `string` | No | Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error. |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated and default values populated, without persisting the request or deleting any resources. |

### `projects.locations.backends.rollouts`

#### `projects.locations.backends.rollouts.list()`

Lists rollouts for a backend.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page. |
| `params.filter` | `string` | No | Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160). |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix. |
| `params.showDeleted` | `boolean` | No | Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet. |

#### `projects.locations.backends.rollouts.get()`

Gets information about a rollout.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/rollouts/{rolloutId}`. |

#### `projects.locations.backends.rollouts.create()`

Creates a new rollout for a backend.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. |
| `params.rolloutId` | `string` | No | Optional. Desired ID of the rollout being created. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.backends.domains`

#### `projects.locations.backends.domains.list()`

Lists domains of a backend.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page. |
| `params.filter` | `string` | No | Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160). |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix. |
| `params.showDeleted` | `boolean` | No | Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet. |

#### `projects.locations.backends.domains.get()`

Gets information about a domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/domains/{domainId}`. |

#### `projects.locations.backends.domains.create()`

Links a new domain to a backend.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`. |
| `params.domainId` | `string` | No | Required. Id of the domain to create. Must be a valid domain name. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backends.domains.patch()`

Updates the information for a single domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the domain, e.g. `/projects/p/locations/l/backends/b/domains/foo.com` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the Domain resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated and default values populated, without persisting the request or modifying any resources. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the domain is not found, a new domain will be created. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.backends.domains.delete()`

Deletes a single domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/domains/{domainId}`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.etag` | `string` | No | Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error. |
| `params.validateOnly` | `boolean` | No | Optional. Indicates that the request should be validated and default values populated, without persisting the request or deleting any resources. |