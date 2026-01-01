# Authorized Buyers Marketplace API - Apps Script Client Library

Auto-generated client library for using the **Authorized Buyers Marketplace API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 00:23:50 GMT
- **Last Modified:** Thu, 01 Jan 2026 00:23:50 GMT
- **Created:** Sun, 20 Jul 2025 16:13:34 GMT



---

## API Reference

### `curators`

### `curators.dataSegments`

#### `curators.dataSegments.get()`

Gets a data segment given its name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of data segment to get. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` |

#### `curators.dataSegments.patch()`

Updates a data segment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. |
| `params.name` | `string` | Yes | Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{curatorAccountId}/dataSegments/{curatorDataSegmentId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.dataSegments.activate()`

Activates a data segment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of data segment to activate. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.dataSegments.list()`

List the data segments owned by a curator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent curator that can access the data segment. v1alpha format: `buyers/{accountId}` v1beta format: `curators/{accountId}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500. |
| `params.pageToken` | `string` | No | Optional. The page token as returned. ListDataSegmentsResponse.nextPageToken |

#### `curators.dataSegments.create()`

Creates a data segment owned by the listed curator. The data segment will be created in the `ACTIVE` state, meaning it will be immediately available for buyers to use in preferred deals, private auction deals, and auction packages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this data segment will be created. v1alpha format: `buyers/{accountId}` v1beta format: `curators/{accountId}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.dataSegments.deactivate()`

Deactivates a data segment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of data segment to deactivate. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `curators.curatedPackages`

#### `curators.curatedPackages.activate()`

Activates an existing curated package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the curated package to activate. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` |
| `params.requestBody` | `object` | Yes | The request body. |

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

#### `curators.curatedPackages.list()`

Lists curated packages owned by the specified curator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server may return fewer results than requested. Max allowed page size is 500. If unspecified, the server will default to 500. |
| `params.filter` | `string` | No | Optional. Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * displayName * createTime * updateTime * state * feeCpm.currencyCode * feeCpm.units * feeCpm.nanos * floorPriceCpm.currencyCode * floorPriceCpm.units * floorPriceCpm.nanos |
| `params.parent` | `string` | Yes | Required. The parent curator account which owns this collection of curated packages. Format: `curators/{accountId}` |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListCuratedPackages` call. Provide this to retrieve the subsequent page. |

#### `curators.curatedPackages.patch()`

Updates an existing curated package.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The unique resource name for the curated package. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` |
| `params.updateMask` | `string` | No | Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement (the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `curators.curatedPackages.get()`

Gets a curated package given its resource name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the curated package to retrieve. Format: `curators/{accountId}/curatedPackages/{curatedPackageId}` |

### `mediaPlanners`

#### `mediaPlanners.list()`

Lists all media planner accounts that the caller has access to. For curators, this will return all media planners that have accepted curator terms. For other accounts, attempting to list media planners will return an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional query string using the [Cloud API list filtering syntax](/authorized-buyers/apis/guides/list-filters). Supported columns for filtering are: * `name` * `displayName` * `ancestorNames` |
| `params.pageSize` | `integer` | No | The maximum number of media planners to return. If unspecified, at most 100 media planners will be returned. The maximum value is 500; values above 500 will be coerced to 500. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. This value is received from a previous `ListMediaPlanners` call in ListMediaPlannersResponse.nextPageToken. |