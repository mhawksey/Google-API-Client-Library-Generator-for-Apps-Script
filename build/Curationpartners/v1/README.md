# Curation Partners API - Apps Script Client Library

Auto-generated client library for using the **Curation Partners API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 15:58:48 GMT
- **Last Modified:** Sun, 15 Nov 2026 15:58:48 GMT
- **Created:** Sun, 15 Nov 2026 15:58:48 GMT



---

## API Reference

### `mediaPlanners`

#### `mediaPlanners.search()`

Searches for media planner accounts matching the given DSP seat ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of media planners to return. If unspecified, at most 100 media planners will be returned. The maximum value is 500; values above 500 will be coerced to 500. |
| `params.dspSeatId` | `string` | No | Required. The DSP seat ID to search for. The DSP seat ID is provided by the media planner. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. This value is received from a previous `SearchMediaPlanners` call in SearchMediaPlannersResponse.nextPageToken. |

#### `mediaPlanners.list()`

Lists all media planner accounts that the caller has access to. For curators, this will return all media planners that have accepted curator terms. For other accounts, attempting to list media planners will return an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return.This value is received from a previous `ListMediaPlanners` call in ListMediaPlannersResponse.nextPageToken. |
| `params.filter` | `string` | No | Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * `name` * `displayName` * `ancestorNames` |
| `params.pageSize` | `integer` | No | The maximum number of media planners to return. If unspecified, at most 100 media planners will be returned. The maximum value is 500; values above 500 will be coerced to 500. |

### `curators`

### `curators.dataSegments`

#### `curators.dataSegments.get()`

Gets a data segment given its name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of data segment to get. Format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` |

#### `curators.dataSegments.activate()`

Activates a data segment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of data segment to activate. Format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.dataSegments.create()`

Creates a data segment owned by the listed curator. The data segment will be created in the `ACTIVE` state, meaning it will be immediately available for buyers to use in preferred deals, private auction deals, and auction packages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this data segment will be created. Format: `curators/{accountId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.dataSegments.deactivate()`

Deactivates a data segment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of data segment to deactivate. Format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.dataSegments.patch()`

Updates a data segment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. |
| `params.name` | `string` | Yes | Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. Format: `curators/{curatorAccountId}/dataSegments/{curatorDataSegmentId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.dataSegments.list()`

List the data segments owned by a curator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. The page token as returned. ListDataSegmentsResponse.nextPageToken |
| `params.parent` | `string` | Yes | Required. Name of the parent curator that can access the data segment. Format: `curators/{accountId}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500. |

### `curators.reports`

#### `curators.reports.get()`

Retrieves a `Report` object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the report. Format: `curators/{account_id}/reports/{report_id}` |

#### `curators.reports.run()`

Initiates the execution of an existing report asynchronously. Users can get the report by polling this operation using `OperationsService.GetOperation`. Poll every 5 seconds initially, with an exponential backoff. Once a report is complete, the operation will contain a `RunReportResponse` in its response field containing a report_result that can be passed to the `FetchReportResultRows` method to retrieve the report data.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The report to run. Format: `curators/{account_id}/reports/{report_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.reports.delete()`

Deletes a `Report` object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the report to delete. Format: `curators/{account_id}/reports/{report_id}` |

#### `curators.reports.patch()`

Updates a `Report` object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.name` | `string` | Yes | Identifier. The resource name of the report. Report resource name have the form: `curators/{account_id}/reports/{report_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.reports.create()`

Creates a `Report` object.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this `Report` will be created. Format: `curators/{account_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.reports.list()`

Lists `Report` objects.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.skip` | `integer` | No | Optional. Number of individual resources to skip while paginating. |
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of reports. Format: `curators/{account_id}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of `Reports` to return. The service may return fewer than this value. If unspecified, at most 50 `Reports` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000. |
| `params.orderBy` | `string` | No | Optional. Expression to specify sorting order. See syntax details at https://developers.google.com/ad-manager/api/beta/filters#order |
| `params.filter` | `string` | No | Optional. Expression to filter the response. See syntax details at https://developers.google.com/ad-manager/api/beta/filters |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListReports` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReports` must match the call that provided the page token. |

### `curators.reports.operations`

#### `curators.reports.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `curators.reports.results`

#### `curators.reports.results.fetchRows()`

Returns the result rows from a completed report. The caller must have previously called `RunReport` and waited for that operation to complete. The rows will be returned according to the order specified by the `sorts` member of the report definition.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The report result being fetched. Format: `curators/{account_id}/reports/{report_id}/results/{report_result_id}` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `FetchReportResultRows` call. Provide this to retrieve the second and subsequent batches of rows. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 1,000 rows will be returned. The maximum value is 10,000; values greater than 10,000 will be reduced to 10,000. |

### `curators.curatedPackages`

#### `curators.curatedPackages.activate()`

Activates an existing curated package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the curated package to activate. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.curatedPackages.list()`

Lists curated packages owned by the specified curator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent curator account which owns this collection of curated packages. Format: `curators/{accountId}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500. |
| `params.filter` | `string` | No | Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * displayName * createTime * updateTime * state * feeCpm.currencyCode * feeCpm.units * feeCpm.nanos * floorPriceCpm.currencyCode * floorPriceCpm.units * floorPriceCpm.nanos |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListCuratedPackages` call. Provide this to retrieve the subsequent page. |

#### `curators.curatedPackages.create()`

Creates a new curated package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent curator account where this curated package will be created. Format: `curators/{accountId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.curatedPackages.deactivate()`

Deactivates an existing curated package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the curated package to deactivate. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.curatedPackages.get()`

Gets a curated package given its resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the curated package to retrieve. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` |

#### `curators.curatedPackages.patch()`

Updates an existing curated package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement (the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. |
| `params.name` | `string` | Yes | Identifier. The unique resource name for the curated package. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` |
| `params.requestBody` | `object` | Yes | The request body. |