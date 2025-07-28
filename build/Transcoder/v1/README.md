# Transcoder API - Apps Script Client Library

Auto-generated client library for using the **Transcoder API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:27:55 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:47:29 GMT
- **Created:** Sun, 20 Jul 2025 16:56:11 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.jobs`

#### `projects.locations.jobs.create()`

Creates a job in the specified region.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobs.list()`

Lists jobs in the specified region.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous List request, if any. |
| `params.filter` | `string` | No | The filter expression, following the syntax outlined in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. |

#### `projects.locations.jobs.get()`

Returns the job data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the job to retrieve. Format: `projects/{project}/locations/{location}/jobs/{job}` |

#### `projects.locations.jobs.delete()`

Deletes a job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the job to delete. Format: `projects/{project}/locations/{location}/jobs/{job}` |
| `params.allowMissing` | `boolean` | No | If set to true, and the job is not found, the request will succeed but no action will be taken on the server. |

### `projects.locations.jobTemplates`

#### `projects.locations.jobTemplates.create()`

Creates a job template in the specified region.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}` |
| `params.jobTemplateId` | `string` | No | Required. The ID to use for the job template, which will become the final component of the job template's resource name. This value should be 4-63 characters, and valid characters must match the regular expression `a-zA-Z*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.jobTemplates.list()`

Lists job templates in the specified region.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent location from which to retrieve the collection of job templates. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous List request, if any. |
| `params.filter` | `string` | No | The filter expression, following the syntax outlined in https://google.aip.dev/160. |
| `params.orderBy` | `string` | No | One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering. |

#### `projects.locations.jobTemplates.get()`

Returns the job template data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}` |

#### `projects.locations.jobTemplates.delete()`

Deletes a job template.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}` |
| `params.allowMissing` | `boolean` | No | If set to true, and the job template is not found, the request will succeed but no action will be taken on the server. |