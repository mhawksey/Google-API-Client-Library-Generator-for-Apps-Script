# BigQuery Connection API - Apps Script Client Library

Auto-generated client library for using the **BigQuery Connection API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:05:49 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:05:49 GMT
- **Created:** Sun, 20 Jul 2025 16:14:08 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.connections`

#### `projects.locations.connections.create()`

Creates a new connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name. Must be in the format `projects/{project_id}/locations/{location_id}` |
| `params.connectionId` | `string` | No | Optional. Connection id that should be assigned to the created connection. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.get()`

Returns specified connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the requested connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}` |

#### `projects.locations.connections.list()`

Returns a list of connections in the given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name. Must be in the form: `projects/{project_id}/locations/{location_id}` |
| `params.pageSize` | `integer` | No | Required. Page size. |
| `params.pageToken` | `string` | No | Page token. |

#### `projects.locations.connections.patch()`

Updates the specified connection. For security reasons, also resets credential if connection properties are in the update field mask.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the connection to update, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}` |
| `params.updateMask` | `string` | No | Required. Update mask for the connection fields to be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.delete()`

Deletes connection and associated credential.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the deleted connection, for example: `projects/{project_id}/locations/{location_id}/connections/{connection_id}` |

#### `projects.locations.connections.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |