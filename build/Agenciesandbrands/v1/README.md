# Agencies and Brands API - Apps Script Client Library

Auto-generated client library for using the **Agencies and Brands API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:25:37 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:25:37 GMT
- **Created:** Sun, 15 Nov 2026 15:25:37 GMT



---

## API Reference

### `agencies`

### `agencies.reports`

#### `agencies.reports.delete()`

Deletes a `Report` object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the report to delete. Format: `agencies/{account_id}/reports/{report_id}` |

#### `agencies.reports.patch()`

Updates a `Report` object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.name` | `string` | Yes | Identifier. The resource name of the report. Report resource name have the form: `agencies/{account_id}/reports/{report_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `agencies.reports.create()`

Creates a `Report` object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this `Report` will be created. Format: `agencies/{account_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `agencies.reports.run()`

Initiates the execution of an existing report asynchronously. Users can get the report by polling this operation using `OperationsService.GetOperation`. Poll every 5 seconds initially, with an exponential backoff. Once a report is complete, the operation will contain a `RunReportResponse` in its response field containing a report_result that can be passed to the `FetchReportResultRows` method to retrieve the report data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The report to run. Format: `agencies/{account_id}/reports/{report_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `agencies.reports.get()`

Retrieves a `Report` object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the report. Format: `agencies/{account_id}/reports/{report_id}` |

#### `agencies.reports.list()`

Lists `Report` objects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReports` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters |
| `params.skip` | `integer` | No | Optional. Number of individual resources to skip while paginating. |
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of reports. Format: `agencies/{account_id}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of `Reports` to return. The service may return fewer than this value. If unspecified, at most 50 `Reports` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |

### `agencies.reports.operations`

#### `agencies.reports.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `agencies.reports.results`

#### `agencies.reports.results.fetchRows()`

Returns the result rows from a completed report. The caller must have previously called `RunReport` and waited for that operation to complete. The rows will be returned according to the order specified by the `sorts` member of the report definition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `FetchReportResultRows` call. Provide this to retrieve the second and subsequent batches of rows. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 1,000 rows will be returned. The maximum value is 10,000; values greater than 10,000 will be reduced to 10,000. |
| `params.name` | `string` | Yes | The report result being fetched. Format: `agencies/{account_id}/reports/{report_id}/results/{report_result_id}` |