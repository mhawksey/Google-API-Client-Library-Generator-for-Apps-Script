# OS Config API - Apps Script Client Library

Auto-generated client library for using the **OS Config API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:37:42 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:37:42 GMT
- **Created:** Sun, 20 Jul 2025 16:44:46 GMT



---

## API Reference

### `projects`

### `projects.locations`

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
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.global`

### `projects.locations.global.policyOrchestrators`

#### `projects.locations.global.policyOrchestrators.create()`

Creates a new policy orchestrator under the given project resource. `name` field of the given orchestrator are ignored and instead replaced by a product of `parent` and `policy_orchestrator_id`. Orchestrator state field might be only set to `ACTIVE`, `STOPPED` or omitted (in which case, the created resource will be in `ACTIVE` state anyway).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name in the form of: * `organizations/{organization_id}/locations/global` * `folders/{folder_id}/locations/global` * `projects/{project_id_or_number}/locations/global` |
| `params.policyOrchestratorId` | `string` | No | Required. The logical identifier of the policy orchestrator, with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the parent. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.global.policyOrchestrators.list()`

Lists the policy orchestrators under the given parent project resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.global.policyOrchestrators.get()`

Retrieves an existing policy orchestrator, parented by a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. |

#### `projects.locations.global.policyOrchestrators.patch()`

Updates an existing policy orchestrator, parented by a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. In form of * `organizations/{organization_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `folders/{folder_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `projects/{project_id_or_number}/locations/global/policyOrchestrators/{orchestrator_id}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to merge into the existing policy orchestrator. A special ["*"] field mask can be used to simply replace the entire resource. Otherwise, for all paths referenced in the mask, following merge rules are used: * output only fields are ignored, * primitive fields are replaced, * repeated fields are replaced, * map fields are merged key by key, * message fields are cleared if not set in the request, otherwise they are merged recursively (in particular - message fields set to an empty message has no side effects) If field mask (or its paths) is not specified, it is automatically inferred from the request using following rules: * primitive fields are listed, if set to a non-default value (as there is no way to distinguish between default and unset value), * map and repeated fields are listed, * `google.protobuf.Any` fields are listed, * other message fields are traversed recursively. Note: implicit mask does not allow clearing fields. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.global.policyOrchestrators.delete()`

Deletes an existing policy orchestrator resource, parented by a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource to be deleted. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.etag` | `string` | No | Optional. The current etag of the policy orchestrator. If an etag is provided and does not match the current etag of the policy orchestrator, deletion will be blocked and an ABORTED error will be returned. |

### `folders`

### `folders.locations`

### `folders.locations.operations`

#### `folders.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `folders.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `folders.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `folders.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders.locations.global`

### `folders.locations.global.policyOrchestrators`

#### `folders.locations.global.policyOrchestrators.create()`

Creates a new policy orchestrator under the given folder resource. `name` field of the given orchestrator are ignored and instead replaced by a product of `parent` and `policy_orchestrator_id`. Orchestrator state field might be only set to `ACTIVE`, `STOPPED` or omitted (in which case, the created resource will be in `ACTIVE` state anyway).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name in the form of: * `organizations/{organization_id}/locations/global` * `folders/{folder_id}/locations/global` * `projects/{project_id_or_number}/locations/global` |
| `params.policyOrchestratorId` | `string` | No | Required. The logical identifier of the policy orchestrator, with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the parent. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.locations.global.policyOrchestrators.list()`

Lists the policy orchestrators under the given parent folder resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `folders.locations.global.policyOrchestrators.get()`

Retrieves an existing policy orchestrator, parented by a folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. |

#### `folders.locations.global.policyOrchestrators.patch()`

Updates an existing policy orchestrator, parented by a folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. In form of * `organizations/{organization_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `folders/{folder_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `projects/{project_id_or_number}/locations/global/policyOrchestrators/{orchestrator_id}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to merge into the existing policy orchestrator. A special ["*"] field mask can be used to simply replace the entire resource. Otherwise, for all paths referenced in the mask, following merge rules are used: * output only fields are ignored, * primitive fields are replaced, * repeated fields are replaced, * map fields are merged key by key, * message fields are cleared if not set in the request, otherwise they are merged recursively (in particular - message fields set to an empty message has no side effects) If field mask (or its paths) is not specified, it is automatically inferred from the request using following rules: * primitive fields are listed, if set to a non-default value (as there is no way to distinguish between default and unset value), * map and repeated fields are listed, * `google.protobuf.Any` fields are listed, * other message fields are traversed recursively. Note: implicit mask does not allow clearing fields. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.locations.global.policyOrchestrators.delete()`

Deletes an existing policy orchestrator resource, parented by a folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource to be deleted. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.etag` | `string` | No | Optional. The current etag of the policy orchestrator. If an etag is provided and does not match the current etag of the policy orchestrator, deletion will be blocked and an ABORTED error will be returned. |

### `organizations`

### `organizations.locations`

### `organizations.locations.operations`

#### `organizations.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `organizations.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `organizations.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `organizations.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

### `organizations.locations.global`

### `organizations.locations.global.policyOrchestrators`

#### `organizations.locations.global.policyOrchestrators.create()`

Creates a new policy orchestrator under the given organizations resource. `name` field of the given orchestrator are ignored and instead replaced by a product of `parent` and `policy_orchestrator_id`. Orchestrator state field might be only set to `ACTIVE`, `STOPPED` or omitted (in which case, the created resource will be in `ACTIVE` state anyway).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name in the form of: * `organizations/{organization_id}/locations/global` * `folders/{folder_id}/locations/global` * `projects/{project_id_or_number}/locations/global` |
| `params.policyOrchestratorId` | `string` | No | Required. The logical identifier of the policy orchestrator, with the following restrictions: * Must contain only lowercase letters, numbers, and hyphens. * Must start with a letter. * Must be between 1-63 characters. * Must end with a number or a letter. * Must be unique within the parent. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.locations.global.policyOrchestrators.list()`

Lists the policy orchestrators under the given parent organization resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `organizations.locations.global.policyOrchestrators.get()`

Retrieves an existing policy orchestrator, parented by an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name. |

#### `organizations.locations.global.policyOrchestrators.patch()`

Updates an existing policy orchestrator, parented by an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. In form of * `organizations/{organization_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `folders/{folder_id}/locations/global/policyOrchestrators/{orchestrator_id}` * `projects/{project_id_or_number}/locations/global/policyOrchestrators/{orchestrator_id}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to merge into the existing policy orchestrator. A special ["*"] field mask can be used to simply replace the entire resource. Otherwise, for all paths referenced in the mask, following merge rules are used: * output only fields are ignored, * primitive fields are replaced, * repeated fields are replaced, * map fields are merged key by key, * message fields are cleared if not set in the request, otherwise they are merged recursively (in particular - message fields set to an empty message has no side effects) If field mask (or its paths) is not specified, it is automatically inferred from the request using following rules: * primitive fields are listed, if set to a non-default value (as there is no way to distinguish between default and unset value), * map and repeated fields are listed, * `google.protobuf.Any` fields are listed, * other message fields are traversed recursively. Note: implicit mask does not allow clearing fields. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.locations.global.policyOrchestrators.delete()`

Deletes an existing policy orchestrator resource, parented by an organization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource to be deleted. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.etag` | `string` | No | Optional. The current etag of the policy orchestrator. If an etag is provided and does not match the current etag of the policy orchestrator, deletion will be blocked and an ABORTED error will be returned. |