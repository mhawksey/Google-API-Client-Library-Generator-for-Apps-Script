# Data Lineage API - Apps Script Client Library

Auto-generated client library for using the **Data Lineage API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:45:51 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:30:36 GMT
- **Created:** Sun, 20 Jul 2025 16:25:00 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.processOpenLineageRunEvent()`

Creates new lineage events together with their parents: process and run. Updates the process and run if they already exist. Mapped from Open Lineage specification: https://github.com/OpenLineage/OpenLineage/blob/main/spec/OpenLineage.json.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project and its location that should own the process, run, and lineage event. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.searchLinks()`

Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location you want search in. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.batchSearchLinkProcesses()`

Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location where you want to search. |
| `params.resource` | `object` | Yes | The request body. |

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
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.processes`

#### `projects.locations.processes.create()`

Creates a new process.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project and its location that should own the process. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processes.patch()`

Updates a process.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the lineage process. Format: `projects/{project}/locations/{location}/processes/{process}`. Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` |
| `params.updateMask` | `string` | No | The list of fields to update. Currently not used. The whole message is updated. |
| `params.allowMissing` | `boolean` | No | If set to true and the process is not found, the request inserts it. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processes.get()`

Gets the details of the specified process.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the process to get. |

#### `projects.locations.processes.list()`

List processes in the given project and location. List order is descending by insertion time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project and its location that owns this collection of processes. |
| `params.pageSize` | `integer` | No | The maximum number of processes to return. The service may return fewer than this value. If unspecified, at most 50 processes are returned. The maximum value is 100; values greater than 100 are cut to 100. |
| `params.pageToken` | `string` | No | The page token received from a previous `ListProcesses` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token. |

#### `projects.locations.processes.delete()`

Deletes the process with the specified name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the process to delete. |
| `params.allowMissing` | `boolean` | No | If set to true and the process is not found, the request succeeds but the server doesn't perform any actions. |

### `projects.locations.processes.runs`

#### `projects.locations.processes.runs.create()`

Creates a new run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the process that should own the run. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processes.runs.patch()`

Updates a run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.` |
| `params.updateMask` | `string` | No | The list of fields to update. Currently not used. The whole message is updated. |
| `params.allowMissing` | `boolean` | No | If set to true and the run is not found, the request creates it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processes.runs.get()`

Gets the details of the specified run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the run to get. |

#### `projects.locations.processes.runs.list()`

Lists runs in the given project and location. List order is descending by `start_time`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of process that owns this collection of runs. |
| `params.pageSize` | `integer` | No | The maximum number of runs to return. The service may return fewer than this value. If unspecified, at most 50 runs are returned. The maximum value is 100; values greater than 100 are cut to 100. |
| `params.pageToken` | `string` | No | The page token received from a previous `ListRuns` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token. |

#### `projects.locations.processes.runs.delete()`

Deletes the run with the specified name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the run to delete. |
| `params.allowMissing` | `boolean` | No | If set to true and the run is not found, the request succeeds but the server doesn't perform any actions. |

### `projects.locations.processes.runs.lineageEvents`

#### `projects.locations.processes.runs.lineageEvents.create()`

Creates a new lineage event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the run that should own the lineage event. |
| `params.requestId` | `string` | No | Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.processes.runs.lineageEvents.get()`

Gets details of a specified lineage event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the lineage event to get. |

#### `projects.locations.processes.runs.lineageEvents.list()`

Lists lineage events in the given project and location. The list order is not defined.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the run that owns the collection of lineage events to get. |
| `params.pageSize` | `integer` | No | The maximum number of lineage events to return. The service may return fewer events than this value. If unspecified, at most 50 events are returned. The maximum value is 100; values greater than 100 are cut to 100. |
| `params.pageToken` | `string` | No | The page token received from a previous `ListLineageEvents` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token. |

#### `projects.locations.processes.runs.lineageEvents.delete()`

Deletes the lineage event with the specified name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the lineage event to delete. |
| `params.allowMissing` | `boolean` | No | If set to true and the lineage event is not found, the request succeeds but the server doesn't perform any actions. |