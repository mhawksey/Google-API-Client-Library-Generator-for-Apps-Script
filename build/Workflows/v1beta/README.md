# Workflows API - Apps Script Client Library

Auto-generated client library for using the **Workflows API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:57:19 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:49:33 GMT
- **Created:** Sun, 20 Jul 2025 17:03:16 GMT



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

### `projects.locations.workflows`

#### `projects.locations.workflows.list()`

Lists Workflows in a given project and location. The default order is not specified.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project and location from which the workflows should be listed. Format: projects/{project}/locations/{location} |
| `params.pageSize` | `integer` | No | Maximum number of workflows to return per call. The service may return fewer than this value. If the value is not specified, a default value of 500 will be used. The maximum permitted value is 1000 and values greater than 1000 will be coerced down to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListWorkflows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflows` must match the call that provided the page token. |
| `params.filter` | `string` | No | Filter to restrict results to specific workflows. |
| `params.orderBy` | `string` | No | Comma-separated list of fields that that specify the order of the results. Default sorting order for a field is ascending. To specify descending order for a field, append a " desc" suffix. If not specified, the results will be returned in an unspecified order. |

#### `projects.locations.workflows.get()`

Gets details of a single Workflow.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the workflow which information should be retrieved. Format: projects/{project}/locations/{location}/workflows/{workflow} |

#### `projects.locations.workflows.create()`

Creates a new workflow. If a workflow with the specified name already exists in the specified project and location, the long running operation will return ALREADY_EXISTS error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project and location in which the workflow should be created. Format: projects/{project}/locations/{location} |
| `params.workflowId` | `string` | No | Required. The ID of the workflow to be created. It has to fulfill the following requirements: * Must contain only letters, numbers, underscores and hyphens. * Must start with a letter. * Must be between 1-64 characters. * Must end with a number or a letter. * Must be unique within the customer project and location. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workflows.delete()`

Deletes a workflow with the specified name. This method also cancels and deletes all running executions of the workflow.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the workflow to be deleted. Format: projects/{project}/locations/{location}/workflows/{workflow} |

#### `projects.locations.workflows.patch()`

Updates an existing workflow. Running this method has no impact on already running executions of the workflow. A new revision of the workflow may be created as a result of a successful update operation. In that case, such revision will be used in new workflow executions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the workflow. Format: projects/{project}/locations/{location}/workflows/{workflow} |
| `params.updateMask` | `string` | No | List of fields to be updated. If not present, the entire workflow will be updated. |
| `params.resource` | `object` | Yes | The request body. |