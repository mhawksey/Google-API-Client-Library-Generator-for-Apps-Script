# Application Integration API - Apps Script Client Library

Auto-generated client library for using the **Application Integration API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:28:45 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:28:45 GMT
- **Created:** Sun, 15 Nov 2026 16:28:45 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.generateIntegration()`

Generates an integration skeleton based on a natural language prompt.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location in which the integration will be generated. Format: `projects/{project}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.integrations`

#### `projects.locations.integrations.recommendTasks()`

Recommends tasks to replace a selected task.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/integrations/{integration}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.integrations.schedule()`

Schedules an integration for execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The integration resource name. |
| `params.requestId` | `string` | No | Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. |
| `params.scheduleTime` | `string` | No | Optional. The time that the integration should be executed. If the time is less or equal to the current time, the integration is executed immediately. |
| `params.triggerId` | `string` | No | Required. The API trigger id associated with the integration. An integration can have multiple trigger_id. This field is required to disambiguate which trigger should be invoked |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.integrations.generateIntegrationBranch()`

Generates an integration branch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/integrations/{integration}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.integrations.generateJavascript()`

Generates Javascript code for data mapping.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/integrations/{integration}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.integrations.execute()`

Executes integrations synchronously. The response is not returned until the requested execution is either fulfilled or experienced an error. Only one integration can be executed. Request format URL: https://integrations.googleapis.com/v2/projects/$PROJECT/locations/$LOCATION/integrations/$INTEGRATION_NAME:execute Request payload: (the entire payload is optional unless input variables need to be set.) {"variable1": "hello world", "variable2": 1, "variable3": {"my_json_key": "my json string value" }

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.triggerId` | `string` | No | Required. The API trigger id associated with the integration. An integration can have multiple trigger_id. This field is required to disambiguate which trigger should be invoked. |
| `params.parent` | `string` | Yes | Required. The integration resource name. |
| `params.requestId` | `string` | No | Optional. This is used to de-dup incoming request: if the duplicate request was detected, the response from the previous execution is returned. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.integrations.generateIntegrationDocument()`

Generates documentation for an integration version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}/integrations/{integration}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.integrations.executions`

#### `projects.locations.integrations.executions.list()`

Lists the results of all the integration executions. The response includes the same information as the [execution log](https://cloud.google.com/application-integration/docs/viewing-logs) in the Integration UI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Standard filter field, we support filtering on following fields: integration_name: the name of the integration. create_time: the execution created time. update_time: the execution last update time. state: the state of the executions. execution_id: the id of the execution. trigger_id: the id of the trigger. All fields support for EQUALS, in additional: create_time and update_time support for LESS_THAN, GREATER_THAN Also supports operators like AND, OR, NOT For example: trigger_id=\"id1\" AND integration_name=\"testIntegration\" |
| `params.pageSize` | `integer` | No | Optional. The size of entries in the response. |
| `params.parent` | `string` | Yes | Required. parent resource name of integration execution. |
| `params.readMask` | `string` | No | Optional. View mask for the response data. If set, only the field specified will be returned as part of the result. If not set, all fields in execution info will be filled and returned. |
| `params.pageToken` | `string` | No | Optional. The token returned in the previous response. |

#### `projects.locations.integrations.executions.troubleshoot()`

View detailed explanation of why an integration execution failed, using LLM

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Execution resource name. Format: `projects/{project}/locations/{location}/integrations/{integration}/executions/{execution_id}` |

### `projects.locations.integrations.executions.taskExecutions`

#### `projects.locations.integrations.executions.taskExecutions.get()`

Get a TaskExecution in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The TaskExecution to retrieve. Format: projects/{project}/locations/{location}/integrations/{integration}/executions/{execution}/taskExecutions/{task_execution} |