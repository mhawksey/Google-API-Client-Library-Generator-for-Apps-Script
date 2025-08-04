# Authorized Buyers Marketplace API - Apps Script Client Library

Auto-generated client library for using the **Authorized Buyers Marketplace API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 19:53:36 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:53:36 GMT
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
| `params.resource` | `object` | Yes | The request body. |

#### `curators.dataSegments.patch()`

Updates a data segment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The unique identifier for the data segment. Account ID corresponds to the account ID that created the segment. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{curatorAccountId}/dataSegments/{curatorDataSegmentId}` |
| `params.updateMask` | `string` | No | Optional. List of fields to be updated. If empty or unspecified, the service will update all fields populated in the update request excluding the output only fields and primitive fields with default value. Note that explicit field mask is required in order to reset a primitive field back to its default value, for example, false for boolean fields, 0 for integer fields. A special field mask consisting of a single path "*" can be used to indicate full replacement(the equivalent of PUT method), updatable fields unset or unspecified in the input will be cleared or set to default value. Output only fields will be ignored regardless of the value of updateMask. |
| `params.resource` | `object` | Yes | The request body. |

#### `curators.dataSegments.activate()`

Activates a data segment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of data segment to activate. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` |
| `params.resource` | `object` | Yes | The request body. |

#### `curators.dataSegments.deactivate()`

Deactivates a data segment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of data segment to deactivate. v1alpha format: `buyers/{accountId}/dataSegments/{curatorDataSegmentId}` v1beta format: `curators/{accountId}/dataSegments/{curatorDataSegmentId}` |
| `params.resource` | `object` | Yes | The request body. |