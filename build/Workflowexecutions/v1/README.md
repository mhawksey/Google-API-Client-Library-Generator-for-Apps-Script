# Workflow Executions API - Apps Script Client Library

Auto-generated client library for using the **Workflow Executions API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 01 Sep 2025 00:03:14 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:55:50 GMT
- **Created:** Sun, 20 Jul 2025 17:03:13 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.workflows`

#### `projects.locations.workflows.triggerPubsubExecution()`

Triggers a new execution using the latest revision of the given workflow by a Pub/Sub push notification.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workflow` | `string` | Yes | Required. Name of the workflow for which an execution should be created. Format: projects/{project}/locations/{location}/workflows/{workflow} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.workflows.executions`

#### `projects.locations.workflows.executions.list()`

Returns a list of executions which belong to the workflow with the given name. The method returns executions of all workflow revisions. Returned executions are ordered by their start time (newest first).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the workflow for which the executions should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow} |
| `params.pageSize` | `integer` | No | Maximum number of executions to return per call. Max supported value depends on the selected Execution view: it's 1000 for BASIC and 100 for FULL. The default value used if the field is not specified is 100, regardless of the selected view. Values greater than the max value will be coerced down to it. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListExecutions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListExecutions` must match the call that provided the page token. Note that pagination is applied to dynamic data. The list of executions returned can change between page requests. |
| `params.view` | `string` | No | Optional. A view defining which fields should be filled in the returned executions. The API will default to the BASIC view. |
| `params.filter` | `string` | No | Optional. Filters applied to the `[Executions.ListExecutions]` results. The following fields are supported for filtering: `executionId`, `state`, `createTime`, `startTime`, `endTime`, `duration`, `workflowRevisionId`, `stepName`, `label`, and `disableConcurrencyQuotaOverflowBuffering`. For details, see AIP-160. For more information, see Filter executions. For example, if you are using the Google APIs Explorer: `state="SUCCEEDED"` or `startTime>"2023-08-01" AND state="FAILED"` |
| `params.orderBy` | `string` | No | Optional. Comma-separated list of fields that specify the ordering applied to the `[Executions.ListExecutions]` results. By default the ordering is based on descending `createTime`. The following fields are supported for ordering: `executionId`, `state`, `createTime`, `startTime`, `endTime`, `duration`, and `workflowRevisionId`. For details, see AIP-132. |

#### `projects.locations.workflows.executions.create()`

Creates a new execution using the latest revision of the given workflow. For more information, see Execute a workflow.

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

#### `projects.locations.workflows.executions.exportData()`

Returns all metadata stored about an execution, excluding most data that is already accessible using other API methods.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the execution for which data is to be exported. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} |

#### `projects.locations.workflows.executions.deleteExecutionHistory()`

Deletes all step entries for an execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the execution for which step entries should be deleted. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.workflows.executions.callbacks`

#### `projects.locations.workflows.executions.callbacks.list()`

Returns a list of active callbacks that belong to the execution with the given name. The returned callbacks are ordered by callback ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the execution for which the callbacks should be listed. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} |
| `params.pageSize` | `integer` | No | Maximum number of callbacks to return per call. The default value is 100 and is also the maximum value. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListCallbacks` call. Provide this to retrieve the subsequent page. Note that pagination is applied to dynamic data. The list of callbacks returned can change between page requests if callbacks are created or deleted. |

### `projects.locations.workflows.executions.stepEntries`

#### `projects.locations.workflows.executions.stepEntries.list()`

Lists step entries for the corresponding workflow execution. Returned entries are ordered by their create_time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the workflow execution to list entries for. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution} |
| `params.pageSize` | `integer` | No | Optional. Number of step entries to return per call. The default max is 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListStepEntries` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStepEntries` must match the call that provided the page token. |
| `params.skip` | `integer` | No | Optional. The number of step entries to skip. It can be used with or without a pageToken. If used with a pageToken, then it indicates the number of step entries to skip starting from the requested page. |
| `params.filter` | `string` | No | Optional. Filters applied to the `[StepEntries.ListStepEntries]` results. The following fields are supported for filtering: `entryId`, `createTime`, `updateTime`, `routine`, `step`, `stepType`, `parent`, `state`. For details, see AIP-160. For example, if you are using the Google APIs Explorer: `state="SUCCEEDED"` or `createTime>"2023-08-01" AND state="FAILED"` |
| `params.orderBy` | `string` | No | Optional. Comma-separated list of fields that specify the ordering applied to the `[StepEntries.ListStepEntries]` results. By default the ordering is based on ascending `entryId`. The following fields are supported for ordering: `entryId`, `createTime`, `updateTime`, `routine`, `step`, `stepType`, `state`. For details, see AIP-132. |
| `params.view` | `string` | No | Deprecated field. |

#### `projects.locations.workflows.executions.stepEntries.get()`

Gets a step entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the step entry to retrieve. Format: projects/{project}/locations/{location}/workflows/{workflow}/executions/{execution}/stepEntries/{step_entry} |
| `params.view` | `string` | No | Deprecated field. |