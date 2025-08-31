# Storage Transfer API - Apps Script Client Library

Auto-generated client library for using the **Storage Transfer API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:55:41 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:47:27 GMT
- **Created:** Sun, 20 Jul 2025 16:55:16 GMT



---

## API Reference

### `transferOperations`

#### `transferOperations.list()`

Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the type being listed; must be `transferOperations`. |
| `params.filter` | `string` | Yes | Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobNamePattern": "job_name_pattern", "operationNames":["opid1","opid2",...], "operationNamePattern": "operation_name_pattern", "minCreationTime": "min_creation_time", "maxCreationTime": "max_creation_time", "transferStatuses":["status1","status2",...]}` Since `jobNames`, `operationNames`, and `transferStatuses` support multiple values, they must be specified with array notation. `projectId` is the only argument that is required. If specified, `jobNamePattern` and `operationNamePattern` must match the full job or operation name respectively. '*' is a wildcard matching 0 or more characters. `minCreationTime` and `maxCreationTime` should be timestamps encoded as a string in the [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. The valid values for `transferStatuses` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED. |
| `params.pageSize` | `integer` | No | The list page size. The max allowed value is 256. |
| `params.pageToken` | `string` | No | The list page token. |

#### `transferOperations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `transferOperations.cancel()`

Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

#### `transferOperations.pause()`

Pauses a transfer operation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the transfer operation. |
| `params.resource` | `object` | Yes | The request body. |

#### `transferOperations.resume()`

Resumes a transfer operation that is paused.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the transfer operation. |
| `params.resource` | `object` | Yes | The request body. |

### `googleServiceAccounts`

#### `googleServiceAccounts.get()`

Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Cloud project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud project that the Google service account is associated with. |

### `transferJobs`

#### `transferJobs.create()`

Creates a transfer job that runs periodically.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `transferJobs.patch()`

Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobName` | `string` | Yes | Required. The name of job to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `transferJobs.get()`

Gets a transfer job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobName` | `string` | Yes | Required. The job to get. |
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud project that owns the job. |

#### `transferJobs.list()`

Lists transfer jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | Yes | Required. A list of query parameters specified as JSON text in the form of: ``` { "projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobStatuses":["status1","status2",...], "dataBackend":"QUERY_REPLICATION_CONFIGS", "sourceBucket":"source-bucket-name", "sinkBucket":"sink-bucket-name", } ``` The JSON formatting in the example is for display only; provide the query parameters without spaces or line breaks. * `projectId` is required. * Since `jobNames` and `jobStatuses` support multiple values, their values must be specified with array notation. `jobNames` and `jobStatuses` are optional. Valid values are case-insensitive: * ENABLED * DISABLED * DELETED * Specify `"dataBackend":"QUERY_REPLICATION_CONFIGS"` to return a list of cross-bucket replication jobs. * Limit the results to jobs from a particular bucket with `sourceBucket` and/or to a particular bucket with `sinkBucket`. |
| `params.pageSize` | `integer` | No | The list page size. The max allowed value is 256. |
| `params.pageToken` | `string` | No | The list page token. |

#### `transferJobs.run()`

Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobName` | `string` | Yes | Required. The name of the transfer job. |
| `params.resource` | `object` | Yes | The request body. |

#### `transferJobs.delete()`

Deletes a transfer job. Deleting a transfer job sets its status to DELETED.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobName` | `string` | Yes | Required. The job to delete. |
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud project that owns the job. |

### `projects`

### `projects.agentPools`

#### `projects.agentPools.create()`

Creates an agent pool resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud project that owns the agent pool. |
| `params.agentPoolId` | `string` | No | Required. The ID of the agent pool to create. The `agent_pool_id` must meet the following requirements: * Length of 128 characters or less. * Not start with the string `goog`. * Start with a lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (`-`), periods (`.`), underscores (`_`), or tildes (`~`). * One or more numerals or lowercase ASCII characters. As expressed by the regular expression: `^(?!goog)[a-z]([a-z0-9-._~]*[a-z0-9])?$`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agentPools.patch()`

Updates an existing agent pool resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id}/agentPools/{agent_pool_id}` |
| `params.updateMask` | `string` | No | The [field mask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in `agentPool` to update in this request. The following `agentPool` fields can be updated: * display_name * bandwidth_limit |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agentPools.get()`

Gets an agent pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the agent pool to get. |

#### `projects.agentPools.list()`

Lists agent pools.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Google Cloud project that owns the job. |
| `params.filter` | `string` | No | An optional list of query parameters specified as JSON text in the form of: `{"agentPoolNames":["agentpool1","agentpool2",...]}` Since `agentPoolNames` support multiple values, its values must be specified with array notation. When the filter is either empty or not provided, the list returns all agent pools for the project. |
| `params.pageSize` | `integer` | No | The list page size. The max allowed value is `256`. |
| `params.pageToken` | `string` | No | The list page token. |

#### `projects.agentPools.delete()`

Deletes an agent pool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the agent pool to delete. |