# Dataflow API - Apps Script Client Library

Auto-generated client library for using the **Dataflow API (version: v1b3)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:59:11 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:59:11 GMT
- **Created:** Sun, 20 Jul 2025 16:24:43 GMT



---

## API Reference

### `organizations`

### `organizations.locations`

### `organizations.locations.configStoreSettings`

#### `organizations.locations.configStoreSettings.delete()`

Deletes an existing ConfigStoreSetting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ConfigStoreSetting to delete. |

#### `organizations.locations.configStoreSettings.resolve()`

Resolves effective value of a ConfigStoreSetting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the setting to resolve. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.locations.configStoreSettings.list()`

Lists ConfigStoreSettings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of settings to return. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListConfigStoreSettings` call. |
| `params.parent` | `string` | Yes | Required. The parent resource whose settings are being listed. |

#### `organizations.locations.configStoreSettings.create()`

Creates a new ConfigStoreSetting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.configStoreSettingId` | `string` | No | Required. The ID to use for the setting. |
| `params.parent` | `string` | Yes | Required. The parent resource where this setting will be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `organizations.locations.configStoreSettings.get()`

Gets a ConfigStoreSetting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ConfigStoreSetting to retrieve. |

### `projects`

#### `projects.workerMessages()`

Send a worker_message to the service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project to send the WorkerMessages to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.deleteSnapshots()`

Deletes a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.snapshotId` | `string` | No | The ID of the snapshot. |
| `params.location` | `string` | No | The location that contains this snapshot. |
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the snapshot belongs to. |

### `projects.snapshots`

#### `projects.snapshots.get()`

Gets information about a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.snapshotId` | `string` | Yes | The ID of the snapshot. |
| `params.location` | `string` | No | The location that contains this snapshot. |
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the snapshot belongs to. |

#### `projects.snapshots.list()`

Lists snapshots.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | The location to list snapshots in. |
| `params.jobId` | `string` | No | If specified, list snapshots created from this job. |
| `params.projectId` | `string` | Yes | The project ID to list snapshots for. |

### `projects.templates`

#### `projects.templates.launch()`

Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`. # IAM Permissions Requires the following IAM permission(s) on the project: - `dataflow.jobs.create` - `resourcemanager.projects.get`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dynamicTemplate.gcsPath` | `string` | No | Path to the dynamic template specification file on Cloud Storage. The file must be a JSON serialized `DynamicTemplateFileSpec` object. |
| `params.gcsPath` | `string` | No | A Cloud Storage path to the template to use to create the job. Must be valid Cloud Storage URL, beginning with `gs://`. |
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.dynamicTemplate.stagingLocation` | `string` | No | Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`. |
| `params.validateOnly` | `boolean` | No | If true, the request is validated but not actually executed. Defaults to false. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.templates.create()`

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`. # IAM Permissions Requires the following IAM permission(s) on the project: - `dataflow.jobs.create` - `resourcemanager.projects.get`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.templates.get()`

Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved. # IAM Permissions Requires the `resourcemanager.projects.get` permission on the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.gcsPath` | `string` | No | Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. |
| `params.view` | `string` | No | The view to retrieve. Defaults to METADATA_ONLY. |
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |

### `projects.locations`

#### `projects.locations.workerMessages()`

Send a worker_message to the service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job. |
| `params.projectId` | `string` | Yes | The project to send the WorkerMessages to. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.jobs`

#### `projects.locations.jobs.snapshot()`

Snapshot the state of a streaming job. # IAM Permissions Requires the `dataflow.jobs.snapshot` permission on the job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project which owns the job to be snapshotted. |
| `params.jobId` | `string` | Yes | The job to be snapshotted. |
| `params.location` | `string` | Yes | The location that contains this job. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.jobs.get()`

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`. # IAM Permissions Requires the `dataflow.jobs.get` permission on the job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the job belongs to. |
| `params.view` | `string` | No | The level of information requested in response. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.jobId` | `string` | Yes | The job ID. |

#### `projects.locations.jobs.list()`

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`. # IAM Permissions Requires the `dataflow.jobs.list` permission on the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.filter` | `string` | No | The kind of filter to use. |
| `params.name` | `string` | No | Optional. The job name. |
| `params.createTimeRange.startTime` | `string` | No | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |
| `params.regionalFanoutRequested` | `boolean` | No | Optional. |
| `params.createTimeRange.endTime` | `string` | No | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |
| `params.terminationTimeRange.startTime` | `string` | No | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |
| `params.view` | `string` | No | Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews. |
| `params.pageToken` | `string` | No | Set this to the 'next_page_token' field of a previous response to request additional results in a long list. |
| `params.terminationTimeRange.endTime` | `string` | No | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |
| `params.projectId` | `string` | Yes | The project which owns the jobs. |
| `params.pageSize` | `integer` | No | If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit. |

#### `projects.locations.jobs.getMetrics()`

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`. # IAM Permissions Requires the `dataflow.metrics.get` permission on the job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.startTime` | `string` | No | Return only metric data that has changed since this time. Default is to return all information about all metrics for the job. |
| `params.projectId` | `string` | Yes | A project id. |
| `params.jobId` | `string` | Yes | The job to get metrics for. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |

#### `projects.locations.jobs.update()`

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`. # IAM Permissions 1. Requires the `dataflow.jobs.cancel` permission to cancel a job. 2. Requires the `dataflow.jobs.updateContents` permission to update runtime parameters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.updateMask` | `string` | No | The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, an error will be returned as we cannot update both state and mask. |
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the job belongs to. |
| `params.jobId` | `string` | Yes | The job ID. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.jobs.create()`

Creates a Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API. # IAM Permissions 1. Requires the `dataflow.jobs.create` permission on the project. 2. `resourcemanager.projects.get` (Specifically required for regional endpoints to resolve regional resource metadata)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No | The level of information requested in response. |
| `params.replaceJobId` | `string` | No | Deprecated. This field is now in the Job message. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the job belongs to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.jobs.getExecutionDetails()`

Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice. # IAM Permissions Requires the `dataflow.metrics.get` permission on the job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.pageSize` | `integer` | No | If specified, determines the maximum number of stages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results. |
| `params.jobId` | `string` | Yes | The job to get execution details for. |
| `params.pageToken` | `string` | No | If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned. |
| `params.projectId` | `string` | Yes | A project id. |

### `projects.locations.jobs.workItems`

#### `projects.locations.jobs.workItems.reportStatus()`

Reports the status of dataflow WorkItems leased by a worker.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobId` | `string` | Yes | The job which the WorkItem is part of. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job. |
| `params.projectId` | `string` | Yes | The project which owns the WorkItem's job. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.jobs.workItems.lease()`

Leases a dataflow WorkItem to run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job. |
| `params.jobId` | `string` | Yes | Identifies the workflow job this worker belongs to. |
| `params.projectId` | `string` | Yes | Identifies the project this worker belongs to. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.jobs.snapshots`

#### `projects.locations.jobs.snapshots.list()`

Lists snapshots.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | The location to list snapshots in. |
| `params.projectId` | `string` | Yes | The project ID to list snapshots for. |
| `params.jobId` | `string` | Yes | If specified, list snapshots created from this job. |

### `projects.locations.jobs.debug`

#### `projects.locations.jobs.debug.getWorkerStacktraces()`

Get worker stacktraces from debug capture.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobId` | `string` | Yes | The job for which to get stacktraces. |
| `params.projectId` | `string` | Yes | The project id. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.jobs.debug.getConfig()`

Get encoded debug configuration for component. Not cacheable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobId` | `string` | Yes | The job id. |
| `params.projectId` | `string` | Yes | The project id. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.jobs.debug.sendCapture()`

Send encoded debug capture data for component.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project id. |
| `params.jobId` | `string` | Yes | The job id. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.jobs.messages`

#### `projects.locations.jobs.messages.list()`

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`. # IAM Permissions Requires the `dataflow.messages.list` permission on the job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | A project id. |
| `params.jobId` | `string` | Yes | The job to get messages about. |
| `params.startTime` | `string` | No | If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages). |
| `params.pageToken` | `string` | No | If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned. |
| `params.pageSize` | `integer` | No | If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results. |
| `params.minimumImportance` | `string` | No | Filter to only get messages with importance >= level |
| `params.endTime` | `string` | No | Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available). |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |

### `projects.locations.jobs.stages`

#### `projects.locations.jobs.stages.getExecutionDetails()`

Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice. # IAM Permissions Requires the `dataflow.metrics.get` permission on the job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.jobId` | `string` | Yes | The job to get execution details for. |
| `params.endTime` | `string` | No | Upper time bound of work items to include, by start time. |
| `params.projectId` | `string` | Yes | A project id. |
| `params.startTime` | `string` | No | Lower time bound of work items to include, by start time. |
| `params.pageToken` | `string` | No | If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned. |
| `params.pageSize` | `integer` | No | If specified, determines the maximum number of work items to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results. |
| `params.stageId` | `string` | Yes | The stage for which to fetch information. |

### `projects.locations.flexTemplates`

#### `projects.locations.flexTemplates.launch()`

Launch a job with a FlexTemplate. # IAM Permissions Requires the following IAM permission(s) on the resource: - `dataflow.jobs.create` - `resourcemanager.projects.get` - `iam.serviceAccounts.actAs` - `storage.buckets.get` - `storage.buckets.create` (Required if the default staging bucket must be created)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. E.g., us-central1, us-west1. |
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.snapshots`

#### `projects.locations.snapshots.list()`

Lists snapshots.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobId` | `string` | No | If specified, list snapshots created from this job. |
| `params.projectId` | `string` | Yes | The project ID to list snapshots for. |
| `params.location` | `string` | Yes | The location to list snapshots in. |

#### `projects.locations.snapshots.get()`

Gets information about a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.snapshotId` | `string` | Yes | The ID of the snapshot. |
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the snapshot belongs to. |
| `params.location` | `string` | Yes | The location that contains this snapshot. |

#### `projects.locations.snapshots.delete()`

Deletes a snapshot.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | The location that contains this snapshot. |
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the snapshot belongs to. |
| `params.snapshotId` | `string` | Yes | The ID of the snapshot. |

### `projects.locations.templates`

#### `projects.locations.templates.get()`

Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved. # IAM Permissions Requires the `resourcemanager.projects.get` permission on the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.view` | `string` | No | The view to retrieve. Defaults to METADATA_ONLY. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. |
| `params.gcsPath` | `string` | No | Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'. |

#### `projects.locations.templates.create()`

Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`. # IAM Permissions Requires the following IAM permission(s) on the project: - `dataflow.jobs.create` - `resourcemanager.projects.get`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.templates.launch()`

Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`. # IAM Permissions Requires the following IAM permission(s) on the project: - `dataflow.jobs.create` - `resourcemanager.projects.get`

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. |
| `params.projectId` | `string` | Yes | Required. The ID of the Cloud Platform project that the job belongs to. |
| `params.validateOnly` | `boolean` | No | If true, the request is validated but not actually executed. Defaults to false. |
| `params.dynamicTemplate.gcsPath` | `string` | No | Path to the dynamic template specification file on Cloud Storage. The file must be a JSON serialized `DynamicTemplateFileSpec` object. |
| `params.dynamicTemplate.stagingLocation` | `string` | No | Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`. |
| `params.gcsPath` | `string` | No | A Cloud Storage path to the template to use to create the job. Must be valid Cloud Storage URL, beginning with `gs://`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.configStoreSettings`

#### `projects.locations.configStoreSettings.resolve()`

Resolves effective value of a ConfigStoreSetting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the setting to resolve. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.configStoreSettings.create()`

Creates a new ConfigStoreSetting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this setting will be created. |
| `params.configStoreSettingId` | `string` | No | Required. The ID to use for the setting. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.configStoreSettings.delete()`

Deletes an existing ConfigStoreSetting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ConfigStoreSetting to delete. |

#### `projects.locations.configStoreSettings.get()`

Gets a ConfigStoreSetting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ConfigStoreSetting to retrieve. |

#### `projects.locations.configStoreSettings.list()`

Lists ConfigStoreSettings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListConfigStoreSettings` call. |
| `params.parent` | `string` | Yes | Required. The parent resource whose settings are being listed. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of settings to return. |

### `projects.jobs`

#### `projects.jobs.list()`

List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`. # IAM Permissions Requires the `dataflow.jobs.list` permission on the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.createTimeRange.startTime` | `string` | No | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |
| `params.regionalFanoutRequested` | `boolean` | No | Optional. |
| `params.terminationTimeRange.startTime` | `string` | No | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |
| `params.createTimeRange.endTime` | `string` | No | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |
| `params.filter` | `string` | No | The kind of filter to use. |
| `params.pageSize` | `integer` | No | If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit. |
| `params.view` | `string` | No | Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.pageToken` | `string` | No | Set this to the 'next_page_token' field of a previous response to request additional results in a long list. |
| `params.terminationTimeRange.endTime` | `string` | No | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |
| `params.projectId` | `string` | Yes | The project which owns the jobs. |
| `params.name` | `string` | No | Optional. The job name. |

#### `projects.jobs.aggregated()`

List the jobs of a project across all regions. **Note:** This method doesn't support filtering the list of jobs by name. # IAM Permissions Requires the `dataflow.jobs.list` permission on the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project which owns the jobs. |
| `params.view` | `string` | No | Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews. |
| `params.terminationTimeRange.startTime` | `string` | No | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.pageToken` | `string` | No | Set this to the 'next_page_token' field of a previous response to request additional results in a long list. |
| `params.filter` | `string` | No | The kind of filter to use. |
| `params.name` | `string` | No | Optional. The job name. |
| `params.regionalFanoutRequested` | `boolean` | No | Optional. |
| `params.createTimeRange.endTime` | `string` | No | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |
| `params.pageSize` | `integer` | No | If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit. |
| `params.terminationTimeRange.endTime` | `string` | No | Optional. Exclusive end of the interval. If specified, a Timestamp matching this interval will have to be before the end. |
| `params.createTimeRange.startTime` | `string` | No | Optional. Inclusive start of the interval. If specified, a Timestamp matching this interval will have to be the same or after the start. |

#### `projects.jobs.getMetrics()`

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`. # IAM Permissions Requires the `dataflow.metrics.get` permission on the job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.startTime` | `string` | No | Return only metric data that has changed since this time. Default is to return all information about all metrics for the job. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.projectId` | `string` | Yes | A project id. |
| `params.jobId` | `string` | Yes | The job to get metrics for. |

#### `projects.jobs.create()`

Creates a Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API. # IAM Permissions 1. Requires the `dataflow.jobs.create` permission on the project. 2. `resourcemanager.projects.get` (Specifically required for regional endpoints to resolve regional resource metadata)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No | The level of information requested in response. |
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the job belongs to. |
| `params.replaceJobId` | `string` | No | Deprecated. This field is now in the Job message. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.jobs.update()`

Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`. # IAM Permissions 1. Requires the `dataflow.jobs.cancel` permission to cancel a job. 2. Requires the `dataflow.jobs.updateContents` permission to update runtime parameters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.jobId` | `string` | Yes | The job ID. |
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the job belongs to. |
| `params.updateMask` | `string` | No | The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, an error will be returned as we cannot update both state and mask. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.jobs.get()`

Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`. # IAM Permissions Requires the `dataflow.jobs.get` permission on the job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The ID of the Cloud Platform project that the job belongs to. |
| `params.view` | `string` | No | The level of information requested in response. |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job. |
| `params.jobId` | `string` | Yes | The job ID. |

#### `projects.jobs.snapshot()`

Snapshot the state of a streaming job. # IAM Permissions Requires the `dataflow.jobs.snapshot` permission on the job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project which owns the job to be snapshotted. |
| `params.jobId` | `string` | Yes | The job to be snapshotted. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.jobs.debug`

#### `projects.jobs.debug.sendCapture()`

Send encoded debug capture data for component.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobId` | `string` | Yes | The job id. |
| `params.projectId` | `string` | Yes | The project id. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.jobs.debug.getConfig()`

Get encoded debug configuration for component. Not cacheable.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project id. |
| `params.jobId` | `string` | Yes | The job id. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.jobs.messages`

#### `projects.jobs.messages.list()`

Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`. # IAM Permissions Requires the `dataflow.messages.list` permission on the job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned. |
| `params.pageSize` | `integer` | No | If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results. |
| `params.jobId` | `string` | Yes | The job to get messages about. |
| `params.projectId` | `string` | Yes | A project id. |
| `params.startTime` | `string` | No | If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages). |
| `params.endTime` | `string` | No | Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available). |
| `params.location` | `string` | No | The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id. |
| `params.minimumImportance` | `string` | No | Filter to only get messages with importance >= level |

### `projects.jobs.workItems`

#### `projects.jobs.workItems.lease()`

Leases a dataflow WorkItem to run.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Identifies the project this worker belongs to. |
| `params.jobId` | `string` | Yes | Identifies the workflow job this worker belongs to. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.jobs.workItems.reportStatus()`

Reports the status of dataflow WorkItems leased by a worker.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | The project which owns the WorkItem's job. |
| `params.jobId` | `string` | Yes | The job which the WorkItem is part of. |
| `params.requestBody` | `object` | Yes | The request body. |

### `folders`

### `folders.locations`

### `folders.locations.configStoreSettings`

#### `folders.locations.configStoreSettings.create()`

Creates a new ConfigStoreSetting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.configStoreSettingId` | `string` | No | Required. The ID to use for the setting. |
| `params.parent` | `string` | Yes | Required. The parent resource where this setting will be created. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.locations.configStoreSettings.delete()`

Deletes an existing ConfigStoreSetting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ConfigStoreSetting to delete. |

#### `folders.locations.configStoreSettings.get()`

Gets a ConfigStoreSetting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ConfigStoreSetting to retrieve. |

#### `folders.locations.configStoreSettings.resolve()`

Resolves effective value of a ConfigStoreSetting.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the setting to resolve. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `folders.locations.configStoreSettings.list()`

Lists ConfigStoreSettings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource whose settings are being listed. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of settings to return. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListConfigStoreSettings` call. |