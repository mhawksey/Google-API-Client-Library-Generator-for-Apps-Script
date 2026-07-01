# App Lifecycle Manager API - Apps Script Client Library

Auto-generated client library for using the **App Lifecycle Manager API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Wed, 01 Jul 2026 00:15:51 GMT
- **Last Modified:** Wed, 01 Jul 2026 00:15:51 GMT
- **Created:** Sun, 20 Jul 2025 16:53:07 GMT



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
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.unitGroupOperations`

#### `projects.locations.unitGroupOperations.delete()`

Delete a single unit group operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | Optional. The etag known to the client for the expected state of the unit group operation. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit group operation. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.validateOnly` | `boolean` | No | Optional. If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.unitGroupOperations.create()`

Create a new unit group operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.unitGroupOperationId` | `string` | No | Required. The ID value for the new unit group operation. |
| `params.parent` | `string` | Yes | Required. The parent of the unit group operation. |
| `params.validateOnly` | `boolean` | No | Optional. If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.unitGroupOperations.list()`

Retrieve a collection of unit group operations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.parent` | `string` | Yes | Required. The parent of the unit group operation. |
| `params.pageSize` | `integer` | No | The maximum number of unit group operations to send per page. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |

#### `projects.locations.unitGroupOperations.patch()`

Update a single unit group operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitGroupOperations/{unitGroupOperation}" |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the UnitGroupOperation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitGroupOperation will be overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.unitGroupOperations.get()`

Retrieve a single unit group operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

### `projects.locations.saas`

#### `projects.locations.saas.list()`

Retrieve a collection of saas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.parent` | `string` | Yes | Required. The parent of the saas. |
| `params.pageSize` | `integer` | No | The maximum number of saas to send per page. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |

#### `projects.locations.saas.patch()`

Update a single saas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saas/{saas}" |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Saas resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Saas will be overwritten. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.saas.get()`

Retrieve a single saas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.saas.delete()`

Delete a single saas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the saas. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the saas. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |

#### `projects.locations.saas.create()`

Create a new saas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.parent` | `string` | Yes | Required. The parent of the saas. |
| `params.saasId` | `string` | No | Required. The ID value for the new saas. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.unitKinds`

#### `projects.locations.unitKinds.delete()`

Delete a single unit kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the unit kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |

#### `projects.locations.unitKinds.create()`

Create a new unit kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the unit kind. |
| `params.unitKindId` | `string` | No | Required. The ID value for the new unit kind. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.unitKinds.get()`

Retrieve a single unit kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.unitKinds.list()`

Retrieve a collection of unit kinds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the unit kind. |
| `params.pageSize` | `integer` | No | The maximum number of unit kinds to send per page. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |

#### `projects.locations.unitKinds.patch()`

Update a single unit kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitKinds/{unitKind}" |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the UnitKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitKind will be overwritten. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.rollouts`

#### `projects.locations.rollouts.list()`

Retrieve a collection of rollouts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the rollout. |
| `params.pageSize` | `integer` | No | The maximum number of rollouts to send per page. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |

#### `projects.locations.rollouts.patch()`

Update a single rollout.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Rollout resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Rollout will be overwritten. |
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rollout/{rollout_id}" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.rollouts.get()`

Retrieve a single rollout.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.rollouts.delete()`

Delete a single rollout.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the rollout. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |

#### `projects.locations.rollouts.create()`

Create a new rollout.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the rollout. |
| `params.rolloutId` | `string` | No | Required. The ID value for the new rollout. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.rolloutKinds`

#### `projects.locations.rolloutKinds.get()`

Retrieve a single rollout kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.rolloutKinds.list()`

Retrieve a collection of rollout kinds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.parent` | `string` | Yes | Required. The parent of the rollout kind. |
| `params.pageSize` | `integer` | No | The maximum number of rollout kinds to send per page. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |

#### `projects.locations.rolloutKinds.patch()`

Update a single rollout kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the RolloutKind resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the RolloutKind will be overwritten. |
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/rolloutKinds/{rollout_kind_id}" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.rolloutKinds.delete()`

Delete a single rollout kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the rollout kind. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the rollout kind. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |

#### `projects.locations.rolloutKinds.create()`

Create a new rollout kind.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the rollout kind. |
| `params.rolloutKindId` | `string` | No | Required. The ID value for the new rollout kind. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.flagRevisions`

#### `projects.locations.flagRevisions.get()`

Retrieve a single flag revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.flagRevisions.list()`

Retrieve a collection of flag revisions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the flag revision. |
| `params.pageSize` | `integer` | No | The maximum number of flag revisions to send per page. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |

#### `projects.locations.flagRevisions.patch()`

Update a single flag revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagRevisions/{flag_revision_id}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the FlagRevision resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the FlagRevision will be overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.flagRevisions.delete()`

Delete a single flag revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the flag revision. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the flag revision. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

#### `projects.locations.flagRevisions.create()`

Create a new flag revision.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.parent` | `string` | Yes | Required. The parent of the flag revision. |
| `params.flagRevisionId` | `string` | No | Required. The ID value for the new flag revision. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.unitOperations`

#### `projects.locations.unitOperations.create()`

Create a new unit operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the unit operation. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.unitOperationId` | `string` | No | Required. The ID value for the new unit operation. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.unitOperations.delete()`

Delete a single unit operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the unit operation. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit operation. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |

#### `projects.locations.unitOperations.list()`

Retrieve a collection of unit operations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the unit operation. |
| `params.pageSize` | `integer` | No | The maximum number of unit operations to send per page. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |

#### `projects.locations.unitOperations.patch()`

Update a single unit operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitOperations/{unitOperation}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the UnitOperation resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the UnitOperation will be overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.unitOperations.get()`

Retrieve a single unit operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

### `projects.locations.units`

#### `projects.locations.units.delete()`

Delete a single unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the unit. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the unit. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |

#### `projects.locations.units.create()`

Create a new unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.unitId` | `string` | No | Required. The ID value for the new unit. |
| `params.parent` | `string` | Yes | Required. The parent of the unit. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.units.list()`

Retrieve a collection of units.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.parent` | `string` | Yes | Required. The parent of the unit. |
| `params.pageSize` | `integer` | No | The maximum number of units to send per page. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |

#### `projects.locations.units.patch()`

Update a single unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/units/{unit}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Unit resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Unit will be overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.units.get()`

Retrieve a single unit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

### `projects.locations.flags`

#### `projects.locations.flags.delete()`

Delete a single flag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the flag. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the flag. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |

#### `projects.locations.flags.create()`

Create a new flag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.parent` | `string` | Yes | Required. The parent of the flag. |
| `params.flagId` | `string` | No | Required. The ID value for the new flag. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.flags.list()`

Retrieve a collection of flags.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.parent` | `string` | Yes | Required. The parent of the flag. |
| `params.pageSize` | `integer` | No | The maximum number of flags to send per page. |
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |

#### `projects.locations.flags.patch()`

Update a single flag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Flag resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Flag will be overwritten. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flags/{flag_id}" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.flags.get()`

Retrieve a single flag.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

### `projects.locations.flagAttributes`

#### `projects.locations.flagAttributes.list()`

Retrieve a collection of flag attributes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.parent` | `string` | Yes | Required. The parent of the flag attribute. |
| `params.pageSize` | `integer` | No | The maximum number of flag attributes to send per page. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |

#### `projects.locations.flagAttributes.patch()`

Update a single flag attribute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagAttributes/{flag_attribute_id}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the FlagAttribute resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the FlagAttribute will be overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.flagAttributes.get()`

Retrieve a single flag attribute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.flagAttributes.delete()`

Delete a single flag attribute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the flag attribute. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the flag attribute. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |

#### `projects.locations.flagAttributes.create()`

Create a new flag attribute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parent` | `string` | Yes | Required. The parent of the flag attribute. |
| `params.flagAttributeId` | `string` | No | Required. The ID value for the new flag attribute. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.releases`

#### `projects.locations.releases.list()`

Retrieve a collection of releases.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.parent` | `string` | Yes | Required. The parent of the release. |
| `params.pageSize` | `integer` | No | The maximum number of releases to send per page. |

#### `projects.locations.releases.patch()`

Update a single release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/releases/{release}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Release resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Release will be overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.releases.get()`

Retrieve a single release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.releases.create()`

Create a new release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the release. |
| `params.releaseId` | `string` | No | Required. The ID value for the new release. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.releases.delete()`

Delete a single release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the release. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the release. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |

### `projects.locations.saasReleases`

#### `projects.locations.saasReleases.list()`

Retrieve a collection of saas releases.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.parent` | `string` | Yes | Required. The parent of the saas releases. |
| `params.pageSize` | `integer` | No | The maximum number of saas releases to send per page. |

#### `projects.locations.saasReleases.patch()`

Update a single saas release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/saasReleases/{saasRelease}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.saasReleases.get()`

Retrieve a single saas release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.saasReleases.create()`

Create a new saas release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the saas release. |
| `params.saasReleaseId` | `string` | No | Required. The ID value for the new saas release. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.saasReleases.delete()`

Delete a single saas release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the saas release. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |

### `projects.locations.unitGroups`

#### `projects.locations.unitGroups.delete()`

Delete a single unit group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the unit group. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |

#### `projects.locations.unitGroups.create()`

Create a new unit group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the unit group. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. |
| `params.unitGroupId` | `string` | No | Required. The ID value for the new unit group. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.unitGroups.get()`

Retrieve a single unit group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.unitGroups.list()`

Retrieve a collection of unit groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.parent` | `string` | Yes | Required. The parent of the unit group. |
| `params.pageSize` | `integer` | No | The maximum number of unit groups to send per page. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |

#### `projects.locations.unitGroups.patch()`

Update a single unit group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. |
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/unitGroups/{unitGroup}" |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.tenants`

#### `projects.locations.tenants.list()`

Retrieve a collection of tenants.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.parent` | `string` | Yes | Required. The parent of the tenant. |
| `params.pageSize` | `integer` | No | The maximum number of tenants to send per page. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |

#### `projects.locations.tenants.patch()`

Update a single tenant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the Tenant resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the Tenant will be overwritten. |
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/tenants/{tenant}" |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.tenants.get()`

Retrieve a single tenant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.tenants.delete()`

Delete a single tenant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the tenant. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the tenant. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |

#### `projects.locations.tenants.create()`

Create a new tenant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.tenantId` | `string` | No | Required. The ID value for the new tenant. |
| `params.parent` | `string` | Yes | Required. The parent of the tenant. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.flagReleases`

#### `projects.locations.flagReleases.get()`

Retrieve a single flag release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |

#### `projects.locations.flagReleases.list()`

Retrieve a collection of flag releases.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Filter the list as specified in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | Order results as specified in https://google.aip.dev/132. |
| `params.pageToken` | `string` | No | The page token: If the next_page_token from a previous response is provided, this request will send the subsequent page. |
| `params.parent` | `string` | Yes | Required. The parent of the flag release. |
| `params.pageSize` | `integer` | No | The maximum number of flag releases to send per page. |

#### `projects.locations.flagReleases.patch()`

Update a single flag release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name (full URI of the resource) following the standard naming scheme: "projects/{project}/locations/{location}/flagReleases/{flag_release_id}" |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.updateMask` | `string` | No | Field mask is used to specify the fields to be overwritten in the FlagRelease resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields in the FlagRelease will be overwritten. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.flagReleases.create()`

Create a new flag release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the flag release. |
| `params.flagReleaseId` | `string` | No | Required. The ID value for the new flag release. |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.flagReleases.delete()`

Delete a single flag release.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the resource within a service. |
| `params.etag` | `string` | No | The etag known to the client for the expected state of the flag release. This is used with state-changing methods to prevent accidental overwrites when multiple user agents might be acting in parallel on the same resource. An etag wildcard provide optimistic concurrency based on the expected existence of the flag release. The Any wildcard (`*`) requires that the resource must already exists, and the Not Any wildcard (`!*`) requires that it must not. |
| `params.requestId` | `string` | No | An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | If "validate_only" is set to true, the service will try to validate that this request would succeed, but will not actually make changes. |