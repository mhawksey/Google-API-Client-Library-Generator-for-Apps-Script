# App Lifecycle Manager API - Apps Script Client Library

Auto-generated client library for using the **App Lifecycle Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Fri, 01 May 2026 00:26:58 GMT
- **Last Modified:** Fri, 01 May 2026 00:26:58 GMT
- **Created:** Wed, 18 Mar 2026 22:02:03 GMT



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
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.saas`

#### `projects.locations.saas.list()`

Retrieve a collection of saas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.parent` | `string` | Yes | Required. The parent of the saas. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.pageSize` | `integer` | No | The maximum number of saas to send per page. |

#### `projects.locations.saas.get()`

Retrieve a single saas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.saas.create()`

Create a new saas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.saasId` | `string` | No | Required. The ID value for the new saas. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parent` | `string` | Yes | Required. The parent of the saas. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.saas.patch()`

Update a single saas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Saas resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Saas will be overwritten. |
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saas/{saas}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.saas.delete()`

Delete a single saas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | The etag known to the client for the expected state of the saas. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the saas. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.unitOperations`

#### `projects.locations.unitOperations.create()`

Create a new unit operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parent` | `string` | Yes | Required. The parent of the unit operation. |
| `params.unitOperationId` | `string` | No | Required. The ID value for the new unit operation. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.unitOperations.patch()`

Update a single unit operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the UnitOperation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitOperation will be overwritten. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitOperations/{unitOperation}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.unitOperations.delete()`

Delete a single unit operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | The etag known to the client for the expected state of the unit operation. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit operation. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.unitOperations.list()`

Retrieve a collection of unit operations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of unit operations to send per page. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.parent` | `string` | Yes | Required. The parent of the unit operation. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |

#### `projects.locations.unitOperations.get()`

Retrieve a single unit operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

### `projects.locations.rolloutKinds`

#### `projects.locations.rolloutKinds.list()`

Retrieve a collection of rollout kinds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.parent` | `string` | Yes | Required. The parent of the rollout kind. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.pageSize` | `integer` | No | The maximum number of rollout kinds to send per page. |

#### `projects.locations.rolloutKinds.get()`

Retrieve a single rollout kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.rolloutKinds.create()`

Create a new rollout kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.rolloutKindId` | `string` | No | Required. The ID value for the new rollout kind. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.parent` | `string` | Yes | Required. The parent of the rollout kind. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.rolloutKinds.patch()`

Update a single rollout kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the RolloutKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the RolloutKind will be overwritten. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rolloutKinds/{rollout_kind_id}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.rolloutKinds.delete()`

Delete a single rollout kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | The etag known to the client for the expected state of the rollout kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

### `projects.locations.unitKinds`

#### `projects.locations.unitKinds.create()`

Create a new unit kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.parent` | `string` | Yes | Required. The parent of the unit kind. |
| `params.unitKindId` | `string` | No | Required. The ID value for the new unit kind. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.unitKinds.patch()`

Update a single unit kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the UnitKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitKind will be overwritten. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitKinds/{unitKind}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.unitKinds.delete()`

Delete a single unit kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | The etag known to the client for the expected state of the unit kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.unitKinds.list()`

Retrieve a collection of unit kinds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.parent` | `string` | Yes | Required. The parent of the unit kind. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.pageSize` | `integer` | No | The maximum number of unit kinds to send per page. |

#### `projects.locations.unitKinds.get()`

Retrieve a single unit kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

### `projects.locations.units`

#### `projects.locations.units.patch()`

Update a single unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Unit resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Unit will be overwritten. |
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/units/{unit}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.units.delete()`

Delete a single unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the unit. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |

#### `projects.locations.units.create()`

Create a new unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.unitId` | `string` | No | Required. The ID value for the new unit. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parent` | `string` | Yes | Required. The parent of the unit. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.units.get()`

Retrieve a single unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.units.list()`

Retrieve a collection of units.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.parent` | `string` | Yes | Required. The parent of the unit. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.pageSize` | `integer` | No | The maximum number of units to send per page. |

### `projects.locations.tenants`

#### `projects.locations.tenants.get()`

Retrieve a single tenant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.tenants.list()`

Retrieve a collection of tenants.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of tenants to send per page. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.parent` | `string` | Yes | Required. The parent of the tenant. |

#### `projects.locations.tenants.patch()`

Update a single tenant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/tenants/{tenant}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Tenant resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Tenant will be overwritten. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tenants.delete()`

Delete a single tenant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the tenant. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the tenant. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |

#### `projects.locations.tenants.create()`

Create a new tenant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the tenant. |
| `params.tenantId` | `string` | No | Required. The ID value for the new tenant. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.rollouts`

#### `projects.locations.rollouts.patch()`

Update a single rollout.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollout/{rollout_id}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Rollout resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Rollout will be overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.rollouts.delete()`

Delete a single rollout.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | The etag known to the client for the expected state of the rollout. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.rollouts.create()`

Create a new rollout.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.rolloutId` | `string` | No | Required. The ID value for the new rollout. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parent` | `string` | Yes | Required. The parent of the rollout. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.rollouts.get()`

Retrieve a single rollout.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.rollouts.list()`

Retrieve a collection of rollouts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the rollout. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.pageSize` | `integer` | No | The maximum number of rollouts to send per page. |

### `projects.locations.releases`

#### `projects.locations.releases.list()`

Retrieve a collection of releases.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of releases to send per page. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.parent` | `string` | Yes | Required. The parent of the release. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |

#### `projects.locations.releases.get()`

Retrieve a single release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.releases.create()`

Create a new release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.releaseId` | `string` | No | Required. The ID value for the new release. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parent` | `string` | Yes | Required. The parent of the release. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.releases.patch()`

Update a single release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Release resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Release will be overwritten. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/releases/{release}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.releases.delete()`

Delete a single release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | The etag known to the client for the expected state of the release. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the release. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |