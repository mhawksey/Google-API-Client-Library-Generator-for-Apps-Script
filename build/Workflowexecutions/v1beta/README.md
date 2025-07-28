# Workflow Executions API - Apps Script Client Library

Auto-generated client library for using the **Workflow Executions API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:28:42 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:49:26 GMT
- **Created:** Sun, 20 Jul 2025 17:03:11 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.workflows`

### `projects.locations.workflows.executions`

#### `projects.locations.workflows.executions.list()`

Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the workflow for which the executions should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow} |
| `params.pageSize` | `integer` | No | Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 10000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token. |
| `params.view` | `string` | No | Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view. |

#### `projects.locations.workflows.executions.create()`

Creates a new execution using the latest revision of the given workflow.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow} The latest revision of the workflow will be used. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workflows.executions.get()`

Returns an execution of the given name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the execution to be retrieved. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} |
| `params.view` | `string` | No | Optional. A view defining which fields should be filled in the returned execution. The API will default to the FULL view. |

#### `projects.locations.workflows.executions.cancel()`

Cancels an execution of the given name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the execution to be cancelled. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} |
| `params.resource` | `object` | Yes | The request body. |