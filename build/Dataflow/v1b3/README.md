# Dataflow API - Apps Script Client Library

Auto-generated client library for using the **Dataflow API (version: v1b3)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:57:29 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:30:27 GMT
- **Created:** Sun, 20 Jul 2025 16:24:43 GMT



---

## API Reference

### `projects`

#### `projects.deleteSnapshots()`

Deletes a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the snapshot belongs to. |
| `params.snapshotId` | `string` | No | The ID of the snapshot. |
| `params.location` | `string` | No | The location that contains this snapshot. |

#### `projects.workerMessages()`

Send a worker_message to the service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project to send the WorkerMessages to. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.snapshots`

#### `projects.snapshots.get()`

Gets information about a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the snapshot belongs to. |
| `params.snapshotId` | `string` | Yes | The ID of the snapshot. |
| `params.location` | `string` | No | The location that contains this snapshot. |

#### `projects.snapshots.list()`

Lists snapshots.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project ID to list snapshots for. |
| `params.jobId` | `string` | No | If specified, list snapshots created from this job. |
| `params.location` | `string` | No | The location to list snapshots in. |

### `projects.jobs`

#### `projects.jobs.create()`

A Job is a multi-stage computation graph run by the Cloud Dataflow service. Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the job belongs to. |
| `params.view` | `string` | No | The level of information requested in response. |
| `params.replaceJobId` | `string` | No | Deprecated. This field is now in the Job message. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.jobs.get()`

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the job belongs to. |
| `params.jobId` | `string` | Yes | The job ID. |
| `params.view` | `string` | No | The level of information requested in response. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |

#### `projects.jobs.update()`

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the job belongs to. |
| `params.jobId` | `string` | Yes | The job ID. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.updateMask` | `string` | No | The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, an error will be returned as we cannot update both state and mask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.jobs.list()`

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project which owns the jobs. |
| `params.filter` | `string` | No | The kind of filter to use. |
| `params.view` | `string` | No | Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews. |
| `params.pageSize` | `integer` | No | If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit. |
| `params.pageToken` | `string` | No | Set this to the 'next_page_token' field of a previous response to request additional results in a long list. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.name` | `string` | No | Optional. The job name. |

#### `projects.jobs.aggregated()`

List the jobs of a project across all regions. **Note:** This method doesn't support filtering the list of jobs by name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project which owns the jobs. |
| `params.filter` | `string` | No | The kind of filter to use. |
| `params.view` | `string` | No | Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews. |
| `params.pageSize` | `integer` | No | If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit. |
| `params.pageToken` | `string` | No | Set this to the 'next_page_token' field of a previous response to request additional results in a long list. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.name` | `string` | No | Optional. The job name. |

#### `projects.jobs.snapshot()`

Snapshot the state of a streaming job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project which owns the job to be snapshotted. |
| `params.jobId` | `string` | Yes | The job to be snapshotted. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.jobs.getMetrics()`

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A project id. |
| `params.jobId` | `string` | Yes | The job to get metrics for. |
| `params.startTime` | `string` | No | Return only metric data that has changed since this time. Default is to return all information about all metrics for the job. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |

### `projects.jobs.debug`

#### `projects.jobs.debug.getConfig()`

Get encoded debug configuration for component. Not cacheable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project id. |
| `params.jobId` | `string` | Yes | The job id. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.jobs.debug.sendCapture()`

Send encoded debug capture data for component.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project id. |
| `params.jobId` | `string` | Yes | The job id. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.jobs.messages`

#### `projects.jobs.messages.list()`

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A project id. |
| `params.jobId` | `string` | Yes | The job to get messages about. |
| `params.minimumImportance` | `string` | No | Filter to only get messages with importance >= level |
| `params.pageSize` | `integer` | No | If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results. |
| `params.pageToken` | `string` | No | If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned. |
| `params.startTime` | `string` | No | If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages). |
| `params.endTime` | `string` | No | Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available). |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |

### `projects.jobs.workItems`

#### `projects.jobs.workItems.reportStatus()`

Reports the status of dataflow WorkItems leased by a worker.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project which owns the WorkItem's job. |
| `params.jobId` | `string` | Yes | The job which the WorkItem is part of. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.jobs.workItems.lease()`

Leases a dataflow WorkItem to run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Identifies the project this worker belongs to. |
| `params.jobId` | `string` | Yes | Identifies the workflow job this worker belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.templates`

#### `projects.templates.create()`

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.templates.launch()`

Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.validateOnly` | `boolean` | No | If true, the request is validated but not actually executed. Defaults to false. |
| `params.gcsPath` | `string` | No | A Cloud Storage path to the template to use to create the job. Must be valid Cloud Storage URL, beginning with `gs://`. |
| `params.dynamicTemplate.gcsPath` | `string` | No | Path to the dynamic template specification file on Cloud Storage. The file must be a JSON serialized `DynamicTemplateFileSpec` object. |
| `params.dynamicTemplate.stagingLocation` | `string` | No | Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.templates.get()`

Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.gcsPath` | `string` | No | Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'. |
| `params.view` | `string` | No | The view to retrieve. Defaults to METADATA_ONLY. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. |

### `projects.locations`

#### `projects.locations.workerMessages()`

Send a worker_message to the service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project to send the WorkerMessages to. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.snapshots`

#### `projects.locations.snapshots.get()`

Gets information about a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the snapshot belongs to. |
| `params.location` | `string` | Yes | The location that contains this snapshot. |
| `params.snapshotId` | `string` | Yes | The ID of the snapshot. |

#### `projects.locations.snapshots.delete()`

Deletes a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the snapshot belongs to. |
| `params.location` | `string` | Yes | The location that contains this snapshot. |
| `params.snapshotId` | `string` | Yes | The ID of the snapshot. |

#### `projects.locations.snapshots.list()`

Lists snapshots.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project ID to list snapshots for. |
| `params.location` | `string` | Yes | The location to list snapshots in. |
| `params.jobId` | `string` | No | If specified, list snapshots created from this job. |

### `projects.locations.jobs`

#### `projects.locations.jobs.create()`

A Job is a multi-stage computation graph run by the Cloud Dataflow service. Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the job belongs to. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.view` | `string` | No | The level of information requested in response. |
| `params.replaceJobId` | `string` | No | Deprecated. This field is now in the Job message. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobs.get()`

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the job belongs to. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.jobId` | `string` | Yes | The job ID. |
| `params.view` | `string` | No | The level of information requested in response. |

#### `projects.locations.jobs.update()`

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the job belongs to. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.jobId` | `string` | Yes | The job ID. |
| `params.updateMask` | `string` | No | The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, an error will be returned as we cannot update both state and mask. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobs.list()`

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project which owns the jobs. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.filter` | `string` | No | The kind of filter to use. |
| `params.view` | `string` | No | Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews. |
| `params.pageSize` | `integer` | No | If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit. |
| `params.pageToken` | `string` | No | Set this to the 'next_page_token' field of a previous response to request additional results in a long list. |
| `params.name` | `string` | No | Optional. The job name. |

#### `projects.locations.jobs.snapshot()`

Snapshot the state of a streaming job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project which owns the job to be snapshotted. |
| `params.location` | `string` | Yes | The location that contains this job. |
| `params.jobId` | `string` | Yes | The job to be snapshotted. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobs.getMetrics()`

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A project id. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.jobId` | `string` | Yes | The job to get metrics for. |
| `params.startTime` | `string` | No | Return only metric data that has changed since this time. Default is to return all information about all metrics for the job. |

#### `projects.locations.jobs.getExecutionDetails()`

Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A project id. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.jobId` | `string` | Yes | The job to get execution details for. |
| `params.pageSize` | `integer` | No | If specified, determines the maximum number of stages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results. |
| `params.pageToken` | `string` | No | If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned. |

### `projects.locations.jobs.debug`

#### `projects.locations.jobs.debug.getConfig()`

Get encoded debug configuration for component. Not cacheable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project id. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.jobId` | `string` | Yes | The job id. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobs.debug.sendCapture()`

Send encoded debug capture data for component.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project id. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.jobId` | `string` | Yes | The job id. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobs.debug.getWorkerStacktraces()`

Get worker stacktraces from debug capture.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project id. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.jobId` | `string` | Yes | The job for which to get stacktraces. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.jobs.snapshots`

#### `projects.locations.jobs.snapshots.list()`

Lists snapshots.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project ID to list snapshots for. |
| `params.location` | `string` | Yes | The location to list snapshots in. |
| `params.jobId` | `string` | Yes | If specified, list snapshots created from this job. |

### `projects.locations.jobs.messages`

#### `projects.locations.jobs.messages.list()`

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A project id. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.jobId` | `string` | Yes | The job to get messages about. |
| `params.minimumImportance` | `string` | No | Filter to only get messages with importance >= level |
| `params.pageSize` | `integer` | No | If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results. |
| `params.pageToken` | `string` | No | If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned. |
| `params.startTime` | `string` | No | If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages). |
| `params.endTime` | `string` | No | Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available). |

### `projects.locations.jobs.stages`

#### `projects.locations.jobs.stages.getExecutionDetails()`

Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A project id. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.jobId` | `string` | Yes | The job to get execution details for. |
| `params.stageId` | `string` | Yes | The stage for which to fetch information. |
| `params.pageSize` | `integer` | No | If specified, determines the maximum number of work items to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results. |
| `params.pageToken` | `string` | No | If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned. |
| `params.startTime` | `string` | No | Lower time bound of work items to include, by start time. |
| `params.endTime` | `string` | No | Upper time bound of work items to include, by start time. |

### `projects.locations.jobs.workItems`

#### `projects.locations.jobs.workItems.reportStatus()`

Reports the status of dataflow WorkItems leased by a worker.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project which owns the WorkItem's job. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job. |
| `params.jobId` | `string` | Yes | The job which the WorkItem is part of. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobs.workItems.lease()`

Leases a dataflow WorkItem to run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Identifies the project this worker belongs to. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job. |
| `params.jobId` | `string` | Yes | Identifies the workflow job this worker belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.templates`

#### `projects.locations.templates.create()`

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.templates.launch()`

Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. |
| `params.validateOnly` | `boolean` | No | If true, the request is validated but not actually executed. Defaults to false. |
| `params.gcsPath` | `string` | No | A Cloud Storage path to the template to use to create the job. Must be valid Cloud Storage URL, beginning with `gs://`. |
| `params.dynamicTemplate.gcsPath` | `string` | No | Path to the dynamic template specification file on Cloud Storage. The file must be a JSON serialized `DynamicTemplateFileSpec` object. |
| `params.dynamicTemplate.stagingLocation` | `string` | No | Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.templates.get()`

Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. |
| `params.gcsPath` | `string` | No | Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'. |
| `params.view` | `string` | No | The view to retrieve. Defaults to METADATA_ONLY. |

### `projects.locations.flexTemplates`

#### `projects.locations.flexTemplates.launch()`

Launch a job with a FlexTemplate.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.location` | `string` | Yes | Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. E.g., us-central1, us-west1. |
| `params.resource` | `object` | Yes | The request body. |