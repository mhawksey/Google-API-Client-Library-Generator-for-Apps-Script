# Cloud Scheduler API - Apps Script Client Library

Auto-generated client library for using the **Cloud Scheduler API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:25:31 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:13:36 GMT
- **Created:** Sun, 20 Jul 2025 16:22:33 GMT



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
| `params.extraLocationTypes` | `string` | No | Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.jobs`

#### `projects.locations.jobs.list()`

Lists jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`. |
| `params.filter` | `string` | No | `filter` can be used to specify a subset of jobs. If `filter` equals `target_config="HttpConfig"`, then the http target jobs are retrieved. If `filter` equals `target_config="PubSubConfig"`, then the Pub/Sub target jobs are retrieved. If `filter` equals `labels.foo=value1 labels.foo=value2` then only jobs which are labeled with foo=value1 AND foo=value2 will be returned. |
| `params.pageSize` | `integer` | No | Requested page size. The maximum page size is 500. If unspecified, the page size will be the maximum. Fewer jobs than requested might be returned, even if more jobs exist; use next_page_token to determine if more jobs exist. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server will return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListJobs. It is an error to switch the value of filter or order_by while iterating through pages. |
| `params.legacyAppEngineCron` | `boolean` | No | This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the jobs in the __cron queue will be listed instead. |

#### `projects.locations.jobs.get()`

Gets a job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. |

#### `projects.locations.jobs.create()`

Creates a job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.jobs.patch()`

Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optionally caller-specified in CreateJob, after which it becomes output only. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the job's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters. |
| `params.updateMask` | `string` | No | A mask used to specify which fields of the job are being updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.jobs.delete()`

Deletes a job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. |
| `params.legacyAppEngineCron` | `boolean` | No | This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job in the __cron queue with the corresponding name will be deleted instead. |

#### `projects.locations.jobs.pause()`

Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.jobs.resume()`

Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.jobs.run()`

Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. |
| `params.requestBody` | `object` | Yes | The request body. |