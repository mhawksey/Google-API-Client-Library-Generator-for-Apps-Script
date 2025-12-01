# YouTube Reporting API - Apps Script Client Library

Auto-generated client library for using the **YouTube Reporting API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 01 Dec 2025 01:25:20 GMT
- **Last Modified:** Mon, 01 Dec 2025 01:25:20 GMT
- **Created:** Sun, 20 Jul 2025 17:03:37 GMT



---

## API Reference

### `media`

#### `media.download()`

Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Name of the media that is being downloaded. |

### `reportTypes`

#### `reportTypes.list()`

Lists report types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.onBehalfOfContentOwner` | `string` | No | The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method. |
| `params.includeSystemManaged` | `boolean` | No | If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned. |

### `jobs`

#### `jobs.get()`

Gets a job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.onBehalfOfContentOwner` | `string` | No | The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). |
| `params.jobId` | `string` | Yes | The ID of the job to retrieve. |

#### `jobs.delete()`

Deletes a job.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.onBehalfOfContentOwner` | `string` | No | The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). |
| `params.jobId` | `string` | Yes | The ID of the job to delete. |

#### `jobs.list()`

Lists jobs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.includeSystemManaged` | `boolean` | No | If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted. |
| `params.onBehalfOfContentOwner` | `string` | No | The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method. |

#### `jobs.create()`

Creates a job and returns it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.onBehalfOfContentOwner` | `string` | No | The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). |
| `params.requestBody` | `object` | Yes | The request body. |

### `jobs.reports`

#### `jobs.reports.get()`

Gets the metadata of a specific report.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.jobId` | `string` | Yes | The ID of the job. |
| `params.onBehalfOfContentOwner` | `string` | No | The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). |
| `params.reportId` | `string` | Yes | The ID of the report to retrieve. |

#### `jobs.reports.list()`

Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.startTimeAtOrAfter` | `string` | No | If set, only reports whose start time is greater than or equal the specified date/time are returned. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default. |
| `params.createdAfter` | `string` | No | If set, only reports created after the specified date/time are returned. |
| `params.startTimeBefore` | `string` | No | If set, only reports whose start time is smaller than the specified date/time are returned. |
| `params.jobId` | `string` | Yes | The ID of the job. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method. |
| `params.onBehalfOfContentOwner` | `string` | No | The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel). |