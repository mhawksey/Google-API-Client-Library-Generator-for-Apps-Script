# Gemini Enterprise for Customer Experience API - Apps Script Client Library

Auto-generated client library for using the **Gemini Enterprise for Customer Experience API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Wed, 18 Mar 2026 21:20:01 GMT
- **Last Modified:** Wed, 18 Mar 2026 21:20:01 GMT
- **Created:** Sun, 01 Mar 2026 00:25:08 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.getSecuritySettings()`

Retrieves the security settings for the project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the security settings to retrieve. Format: `projects/{project}/locations/{location}/securitySettings` |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method can be called in two ways:

* **List all public locations:** Use the path `GET /v1/locations`.

* **List project-visible locations:** Use the path `GET /v1/projects/{project_id}/locations`. This may include public locations as well as private or other locations specifically visible to the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

#### `projects.locations.updateSecuritySettings()`

Updates the security settings for the project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The unique identifier of the security settings. Format: `projects/{project}/locations/{location}/securitySettings` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
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

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.apps`

#### `projects.locations.apps.retrieveToolSchema()`

Retrieve the schema of the given tool. The schema is computed on the fly for the given instance of the tool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the app which the tool/toolset belongs to. Format: `projects/{project}/locations/{location}/apps/{app}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.delete()`

Deletes the specified app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | Optional. The current etag of the app. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the app, deletion will be blocked and an ABORTED error will be returned. |
| `params.name` | `string` | Yes | Required. The resource name of the app to delete. |

#### `projects.locations.apps.testPersonaVoice()`

Tests the voice of a persona. Also accepts a default persona.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. the resource name of the app to test the persona voice for. Format: `projects/{project}/locations/{location}/apps/{app}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.runEvaluation()`

Runs an evaluation of the app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.app` | `string` | Yes | Required. The app to evaluate. Format: `projects/{project}/locations/{location}/apps/{app}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.exportApp()`

Exports the specified app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the app to export. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.create()`

Creates a new app in the given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appId` | `string` | No | Optional. The ID to use for the app, which will become the final component of the app's resource name. If not provided, a unique ID will be automatically assigned for the app. |
| `params.parent` | `string` | Yes | Required. The resource name of the location to create an app in. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.list()`

Lists apps in the given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list AgentService.ListApps call. |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the apps. See https://google.aip.dev/160 for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.parent` | `string` | Yes | Required. The resource name of the location to list apps from. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.apps.executeTool()`

Executes the given tool with the given arguments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the app which the tool/toolset belongs to. Format: `projects/{project}/locations/{location}/apps/{app}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.importEvaluations()`

Imports evaluations into the app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The app to import the evaluations into. Format: `projects/{project}/locations/{location}/apps/{app}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.importApp()`

Imports the specified app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name with the location of the app to import. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.get()`

Gets details of the specified app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the app to retrieve. |

#### `projects.locations.apps.patch()`

Updates the specified app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The unique identifier of the app. Format: `projects/{project}/locations/{location}/apps/{app}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.apps.guardrails`

#### `projects.locations.apps.guardrails.create()`

Creates a new guardrail in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.guardrailId` | `string` | No | Optional. The ID to use for the guardrail, which will become the final component of the guardrail's resource name. If not provided, a unique ID will be automatically assigned for the guardrail. |
| `params.parent` | `string` | Yes | Required. The resource name of the app to create a guardrail in. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.guardrails.get()`

Gets details of the specified guardrail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the guardrail to retrieve. |

#### `projects.locations.apps.guardrails.list()`

Lists guardrails in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list AgentService.ListGuardrails call. |
| `params.parent` | `string` | Yes | Required. The resource name of the app to list guardrails from. |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the guardrails. See https://google.aip.dev/160 for more details. |

#### `projects.locations.apps.guardrails.delete()`

Deletes the specified guardrail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the guardrail to delete. |
| `params.force` | `boolean` | No | Optional. Indicates whether to forcefully delete the guardrail, even if it is still referenced by app/agents. * If `force = false`, the deletion fails if any apps/agents still reference the guardrail. * If `force = true`, all existing references from apps/agents will be removed and the guardrail will be deleted. |
| `params.etag` | `string` | No | Optional. The current etag of the guardrail. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the guardrail, deletion will be blocked and an ABORTED error will be returned. |

#### `projects.locations.apps.guardrails.patch()`

Updates the specified guardrail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The unique identifier of the guardrail. Format: `projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.apps.examples`

#### `projects.locations.apps.examples.create()`

Creates a new example in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the app to create an example in. |
| `params.exampleId` | `string` | No | Optional. The ID to use for the example, which will become the final component of the example's resource name. If not provided, a unique ID will be automatically assigned for the example. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.examples.list()`

Lists examples in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list AgentService.ListExamples call. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the examples. See https://google.aip.dev/160 for more details. |
| `params.parent` | `string` | Yes | Required. The resource name of the app to list examples from. |

#### `projects.locations.apps.examples.get()`

Gets details of the specified example.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the example to retrieve. |

#### `projects.locations.apps.examples.patch()`

Updates the specified example.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The unique identifier of the example. Format: `projects/{project}/locations/{location}/apps/{app}/examples/{example}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.examples.delete()`

Deletes the specified example.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | Optional. The current etag of the example. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the example, deletion will be blocked and an ABORTED error will be returned. |
| `params.name` | `string` | Yes | Required. The resource name of the example to delete. |

### `projects.locations.apps.changelogs`

#### `projects.locations.apps.changelogs.get()`

Gets the specified changelog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the changelog to retrieve. |

#### `projects.locations.apps.changelogs.list()`

Lists the changelogs of the specified app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the app to list changelogs from. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list AgentService.ListChangelogs call. |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the changelogs. See https://google.aip.dev/160 for more details. The filter string can be used to filter by `action`, `resource_type`, `resource_name`, `author`, and `create_time`. The `:` comparator can be used for case-insensitive partial matching on string fields, while `=` performs an exact case-sensitive match. Examples: * `action:update` (case-insensitive partial match) * `action="Create"` (case-sensitive exact match) * `resource_type:agent` * `resource_name:my-agent` * `author:me@example.com` * `create_time > "2025-01-01T00:00:00Z"` * `create_time <= "2025-01-01T00:00:00Z" AND resource_type:tool` |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |

### `projects.locations.apps.evaluations`

#### `projects.locations.apps.evaluations.get()`

Gets details of the specified evaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the evaluation to retrieve. |

#### `projects.locations.apps.evaluations.uploadEvaluationAudio()`

Uploads audio for use in Golden Evaluations. Stores the audio in the Cloud Storage bucket defined in 'App.logging_settings.evaluation_audio_recording_config.gcs_bucket' and returns a transcript.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Evaluation for which to upload the evaluation audio. Format: `projects/{project}/locations/{location}/apps/{app}/evaluations/{evaluation}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.evaluations.list()`

Lists all evaluations in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluations call. |
| `params.filter` | `string` | No | Optional. Deprecated: Use evaluation_filter and evaluation_run_filter instead. |
| `params.evaluationRunFilter` | `string` | No | Optional. Filter string for fields on the associated EvaluationRun resources. See https://google.aip.dev/160 for more details. Supported fields: create_time, initiated_by, app_version_display_name |
| `params.lastTenResults` | `boolean` | No | Optional. Whether to include the last 10 evaluation results for each evaluation in the response. |
| `params.parent` | `string` | Yes | Required. The resource name of the app to list evaluations from. |
| `params.evaluationFilter` | `string` | No | Optional. Filter to be applied on the evaluation when listing the evaluations. See https://google.aip.dev/160 for more details. Supported fields: evaluation_datasets |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |

#### `projects.locations.apps.evaluations.delete()`

Deletes an evaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | Optional. The current etag of the evaluation. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the evaluation, deletion will be blocked and an ABORTED error will be returned. |
| `params.name` | `string` | Yes | Required. The resource name of the evaluation to delete. |
| `params.force` | `boolean` | No | Optional. Indicates whether to forcefully delete the evaluation, even if it is still referenced by evaluation datasets. * If `force = false`, the deletion will fail if any datasets still reference the evaluation. * If `force = true`, all existing references from datasets will be removed and the evaluation will be deleted. |

#### `projects.locations.apps.evaluations.patch()`

Updates an evaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The unique identifier of this evaluation. Format: `projects/{project}/locations/{location}/apps/{app}/evaluations/{evaluation}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.evaluations.create()`

Creates an evaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The app to create the evaluation for. Format: `projects/{project}/locations/{location}/apps/{app}` |
| `params.evaluationId` | `string` | No | Optional. The ID to use for the evaluation, which will become the final component of the evaluation's resource name. If not provided, a unique ID will be automatically assigned for the evaluation. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.apps.evaluations.results`

#### `projects.locations.apps.evaluations.results.get()`

Gets details of the specified evaluation result.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the evaluation result to retrieve. |

#### `projects.locations.apps.evaluations.results.list()`

Lists all evaluation results for a given evaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationResults call. |
| `params.parent` | `string` | Yes | Required. The resource name of the evaluation to list evaluation results from. To filter by evaluation run, use `-` as the evaluation ID and specify the evaluation run ID in the filter. For example: `projects/{project}/locations/{location}/apps/{app}/evaluations/-` |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the evaluation results. See https://google.aip.dev/160 for more details. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.apps.evaluations.results.delete()`

Deletes an evaluation result.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the evaluation result to delete. |

### `projects.locations.apps.toolsets`

#### `projects.locations.apps.toolsets.patch()`

Updates the specified toolset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.name` | `string` | Yes | Identifier. The unique identifier of the toolset. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.toolsets.retrieveTools()`

Retrieve the list of tools included in the specified toolset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.toolset` | `string` | Yes | Required. The name of the toolset to retrieve the tools for. Format: `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.toolsets.create()`

Creates a new toolset in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the app to create a toolset in. |
| `params.toolsetId` | `string` | No | Optional. The ID to use for the toolset, which will become the final component of the toolset's resource name. If not provided, a unique ID will be automatically assigned for the toolset. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.toolsets.get()`

Gets details of the specified toolset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the toolset to retrieve. |

#### `projects.locations.apps.toolsets.list()`

Lists toolsets in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the toolsets. See https://google.aip.dev/160 for more details. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list AgentService.ListToolsets call. |
| `params.parent` | `string` | Yes | Required. The resource name of the app to list toolsets from. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.apps.toolsets.delete()`

Deletes the specified toolset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Optional. Indicates whether to forcefully delete the toolset, even if it is still referenced by app/agents. * If `force = false`, the deletion fails if any agents still reference the toolset. * If `force = true`, all existing references from agents will be removed and the toolset will be deleted. |
| `params.etag` | `string` | No | Optional. The current etag of the toolset. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the toolset, deletion will be blocked and an ABORTED error will be returned. |
| `params.name` | `string` | Yes | Required. The resource name of the toolset to delete. |

### `projects.locations.apps.evaluationDatasets`

#### `projects.locations.apps.evaluationDatasets.patch()`

Updates an evaluation dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.name` | `string` | Yes | Identifier. The unique identifier of this evaluation dataset. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationDatasets/{evaluationDataset}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.evaluationDatasets.get()`

Gets details of the specified evaluation dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the evaluation dataset to retrieve. |

#### `projects.locations.apps.evaluationDatasets.list()`

Lists all evaluation datasets in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the evaluation datasets. See https://google.aip.dev/160 for more details. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationDatasets call. |
| `params.parent` | `string` | Yes | Required. The resource name of the app to list evaluation datasets from. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |

#### `projects.locations.apps.evaluationDatasets.delete()`

Deletes an evaluation dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | Optional. The current etag of the evaluation dataset. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the evaluation dataset, deletion will be blocked and an ABORTED error will be returned. |
| `params.name` | `string` | Yes | Required. The resource name of the evaluation dataset to delete. |

#### `projects.locations.apps.evaluationDatasets.create()`

Creates an evaluation dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The app to create the evaluation for. Format: `projects/{project}/locations/{location}/apps/{app}` |
| `params.evaluationDatasetId` | `string` | No | Optional. The ID to use for the evaluation dataset, which will become the final component of the evaluation dataset's resource name. If not provided, a unique ID will be automatically assigned for the evaluation. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.apps.evaluationRuns`

#### `projects.locations.apps.evaluationRuns.delete()`

Deletes an evaluation run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the evaluation run to delete. |

#### `projects.locations.apps.evaluationRuns.list()`

Lists all evaluation runs in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the app to list evaluation runs from. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationRuns call. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the evaluation runs. See https://google.aip.dev/160 for more details. |

#### `projects.locations.apps.evaluationRuns.get()`

Gets details of the specified evaluation run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the evaluation run to retrieve. |

### `projects.locations.apps.tools`

#### `projects.locations.apps.tools.list()`

Lists tools in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list AgentService.ListTools call. |
| `params.parent` | `string` | Yes | Required. The resource name of the app to list tools from. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the tools. Use "include_system_tools=true" to include system tools in the response. See https://google.aip.dev/160 for more details. |

#### `projects.locations.apps.tools.create()`

Creates a new tool in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.toolId` | `string` | No | Optional. The ID to use for the tool, which will become the final component of the tool's resource name. If not provided, a unique ID will be automatically assigned for the tool. |
| `params.parent` | `string` | Yes | Required. The resource name of the app to create a tool in. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.tools.get()`

Gets details of the specified tool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the tool to retrieve. |

#### `projects.locations.apps.tools.delete()`

Deletes the specified tool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.force` | `boolean` | No | Optional. Indicates whether to forcefully delete the tool, even if it is still referenced by agents/examples. * If `force = false`, the deletion will fail if any agents still reference the tool. * If `force = true`, all existing references from agents will be removed and the tool will be deleted. |
| `params.name` | `string` | Yes | Required. The resource name of the tool to delete. |
| `params.etag` | `string` | No | Optional. The current etag of the tool. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the tool, deletion will be blocked and an ABORTED error will be returned. |

#### `projects.locations.apps.tools.patch()`

Updates the specified tool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the tool. Format: * `projects/{project}/locations/{location}/apps/{app}/tools/{tool}` for standalone tools. * `projects/{project}/locations/{location}/apps/{app}/toolsets/{toolset}/tools/{tool}` for tools retrieved from a toolset. These tools are dynamic and output-only; they cannot be referenced directly where a tool is expected. |
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.apps.versions`

#### `projects.locations.apps.versions.create()`

Creates a new app version in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appVersionId` | `string` | No | Optional. The ID to use for the app version, which will become the final component of the app version's resource name. If not provided, a unique ID will be automatically assigned for the app version. |
| `params.parent` | `string` | Yes | Required. The resource name of the app to create an app version in. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.versions.list()`

Lists all app versions in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list AgentService.ListAppVersions call. |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the app versions. See https://google.aip.dev/160 for more details. |
| `params.parent` | `string` | Yes | Required. The resource name of the app to list app versions from. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |

#### `projects.locations.apps.versions.restore()`

Restores the specified app version. This will create a new app version from the current draft app and overwrite the current draft with the specified app version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the app version to restore. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.versions.delete()`

Deletes the specified app version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the app version to delete. |
| `params.etag` | `string` | No | Optional. The current etag of the app version. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the app version, deletion will be blocked and an ABORTED error will be returned. |

#### `projects.locations.apps.versions.get()`

Gets details of the specified app version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the app version to retrieve. |

### `projects.locations.apps.sessions`

#### `projects.locations.apps.sessions.runSession()`

Initiates a single-turn interaction with the CES agent within a session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The unique identifier of the session. Format: `projects/{project}/locations/{location}/apps/{app}/sessions/{session}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.sessions.generateChatToken()`

Generates a session scoped token for chat widget to authenticate with Session APIs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The session name to generate the chat token for. Format: projects/{project}/locations/{location}/apps/{app}/sessions/{session} |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.apps.agents`

#### `projects.locations.apps.agents.get()`

Gets details of the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the agent to retrieve. |

#### `projects.locations.apps.agents.create()`

Creates a new agent in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.agentId` | `string` | No | Optional. The ID to use for the agent, which will become the final component of the agent's resource name. If not provided, a unique ID will be automatically assigned for the agent. |
| `params.parent` | `string` | Yes | Required. The resource name of the app to create an agent in. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.agents.delete()`

Deletes the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the agent to delete. |
| `params.force` | `boolean` | No | Optional. Indicates whether to forcefully delete the agent, even if it is still referenced by other app/agents/examples. * If `force = false`, the deletion fails if other agents/examples reference it. * If `force = true`, delete the agent and remove it from all referencing apps/agents/examples. |
| `params.etag` | `string` | No | Optional. The current etag of the agent. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the agent, deletion will be blocked and an ABORTED error will be returned. |

#### `projects.locations.apps.agents.list()`

Lists agents in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the app to list agents from. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list AgentService.ListAgents call. |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the agents. See https://google.aip.dev/160 for more details. |

#### `projects.locations.apps.agents.patch()`

Updates the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The unique identifier of the agent. Format: `projects/{project}/locations/{location}/apps/{app}/agents/{agent}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.apps.scheduledEvaluationRuns`

#### `projects.locations.apps.scheduledEvaluationRuns.get()`

Gets details of the specified scheduled evaluation run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the scheduled evaluation run to retrieve. |

#### `projects.locations.apps.scheduledEvaluationRuns.create()`

Creates a scheduled evaluation run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The app to create the scheduled evaluation run for. Format: `projects/{project}/locations/{location}/apps/{app}` |
| `params.scheduledEvaluationRunId` | `string` | No | Optional. The ID to use for the scheduled evaluation run, which will become the final component of the scheduled evaluation run's resource name. If not provided, a unique ID will be automatically assigned. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.scheduledEvaluationRuns.delete()`

Deletes a scheduled evaluation run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the scheduled evaluation run to delete. |
| `params.etag` | `string` | No | Optional. The etag of the ScheduledEvaluationRun. If provided, it must match the server's etag. |

#### `projects.locations.apps.scheduledEvaluationRuns.list()`

Lists all scheduled evaluation runs in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the app to list scheduled evaluation runs from. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the scheduled evaluation runs. See https://google.aip.dev/160 for more details. Currently supports filtering by: * request.evaluations:evaluation_id * request.evaluation_dataset:evaluation_dataset_id |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list EvaluationService.ListScheduledEvaluationRuns call. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Supported fields are: "name" (ascending), "create_time" (descending), "update_time" (descending), "next_scheduled_execution" (ascending), and "last_completed_run.create_time" (descending). If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details. |

#### `projects.locations.apps.scheduledEvaluationRuns.patch()`

Updates a scheduled evaluation run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The unique identifier of the scheduled evaluation run config. Format: projects/{projectId}/locations/{locationId}/apps/{appId}/scheduledEvaluationRuns/{scheduledEvaluationRunId} |
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.apps.evaluationExpectations`

#### `projects.locations.apps.evaluationExpectations.list()`

Lists all evaluation expectations in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list EvaluationService.ListEvaluationExpectations call. |
| `params.parent` | `string` | Yes | Required. The resource name of the app to list evaluation expectations from. |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the evaluation expectations. See https://google.aip.dev/160 for more details. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time", and "update_time" are supported. Time fields are ordered in descending order, and the name field is ordered in ascending order. If not included, "update_time" will be the default. See https://google.aip.dev/132#ordering for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |

#### `projects.locations.apps.evaluationExpectations.create()`

Creates an evaluation expectation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The app to create the evaluation expectation for. Format: `projects/{project}/locations/{location}/apps/{app}` |
| `params.evaluationExpectationId` | `string` | No | Optional. The ID to use for the evaluation expectation, which will become the final component of the evaluation expectation's resource name. If not provided, a unique ID will be automatically assigned for the evaluation expectation. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.evaluationExpectations.patch()`

Updates an evaluation expectation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. Field mask is used to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.name` | `string` | Yes | Identifier. The unique identifier of this evaluation expectation. Format: `projects/{project}/locations/{location}/apps/{app}/evaluationExpectations/{evaluation_expectation}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.evaluationExpectations.delete()`

Deletes an evaluation expectation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the evaluation expectation to delete. |
| `params.etag` | `string` | No | Optional. The current etag of the evaluation expectation. If an etag is not provided, the deletion will overwrite any concurrent changes. If an etag is provided and does not match the current etag of the evaluation expectation, deletion will be blocked and an ABORTED error will be returned. |

#### `projects.locations.apps.evaluationExpectations.get()`

Gets details of the specified evaluation expectation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the evaluation expectation to retrieve. |

### `projects.locations.apps.deployments`

#### `projects.locations.apps.deployments.get()`

Gets details of the specified deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` |

#### `projects.locations.apps.deployments.delete()`

Deletes the specified deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment to delete. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` |
| `params.etag` | `string` | No | Optional. The etag of the deployment. If an etag is provided and does not match the current etag of the deployment, deletion will be blocked and an ABORTED error will be returned. |

#### `projects.locations.apps.deployments.list()`

Lists deployments in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDeployments` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 deployments will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.orderBy` | `string` | No | Optional. Field to sort by. Only "name" and "create_time" is supported. See https://google.aip.dev/132#ordering for more details. |
| `params.parent` | `string` | Yes | Required. The parent app. Format: `projects/{project}/locations/{location}/apps/{app}` |

#### `projects.locations.apps.deployments.patch()`

Updates the specified deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the deployment. Format: `projects/{project}/locations/{location}/apps/{app}/deployments/{deployment}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.deployments.create()`

Creates a new deployment in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.deploymentId` | `string` | No | Optional. The ID to use for the deployment, which will become the final component of the deployment's resource name. If not provided, a unique ID will be automatically assigned for the deployment. |
| `params.parent` | `string` | Yes | Required. The parent app. Format: `projects/{project}/locations/{location}/apps/{app}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.apps.conversations`

#### `projects.locations.apps.conversations.batchDelete()`

Batch deletes the specified conversations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the app to delete conversations from. Format: `projects/{project}/locations/{location}/apps/{app}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.apps.conversations.list()`

Lists conversations in the given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the app to list conversations from. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list AgentService.ListConversations call. |
| `params.source` | `string` | No | Optional. Indicate the source of the conversation. If not set, Source.Live will be applied by default. Will be deprecated in favor of `sources` field. |
| `params.sources` | `string` | No | Optional. Indicate the sources of the conversations. If not set, all available sources will be applied by default. |
| `params.filter` | `string` | No | Optional. Filter to be applied when listing the conversations. See https://google.aip.dev/160 for more details. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |

#### `projects.locations.apps.conversations.delete()`

Deletes the specified conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.source` | `string` | No | Optional. Indicate the source of the conversation. If not set, Source.Live will be applied by default. |
| `params.name` | `string` | Yes | Required. The resource name of the conversation to delete. |

#### `projects.locations.apps.conversations.get()`

Gets details of the specified conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the conversation to retrieve. |
| `params.source` | `string` | No | Optional. Indicate the source of the conversation. If not set, all source will be searched. |

#### `projects.locations.apps.conversations.generateEvaluation()`

Creates a golden evaluation from a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes | Required. The conversation to create the golden evaluation for. Format: `projects/{project}/locations/{location}/apps/{app}/conversations/{conversation}` |
| `params.requestBody` | `object` | Yes | The request body. |