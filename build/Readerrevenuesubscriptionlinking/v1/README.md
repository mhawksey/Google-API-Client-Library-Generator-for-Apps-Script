# Reader Revenue Subscription Linking API - Apps Script Client Library

Auto-generated client library for using the **Reader Revenue Subscription Linking API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:18:44 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:45:26 GMT
- **Created:** Sun, 20 Jul 2025 16:52:07 GMT



---

## API Reference

### `publications`

### `publications.readers`

#### `publications.readers.get()`

Gets a reader of a publication. Returns NOT_FOUND if the reader does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the reader. Format: publications/{publication_id}/readers/{ppid} |

#### `publications.readers.delete()`

Removes a publication reader, effectively severing the association with a Google user. If `force` is set to true, any entitlements for this reader will also be deleted. (Otherwise, the request will only work if the reader has no entitlements.) - If the reader does not exist, return NOT_FOUND. - Return FAILED_PRECONDITION if the force field is false (or unset) and entitlements are present.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the reader. Format: publications/{publication_id}/readers/{ppid} |
| `params.force` | `boolean` | No | If set to true, any entitlements under the reader will also be purged. |

#### `publications.readers.getEntitlements()`

Gets the reader entitlements for a publication reader. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the reader entitlements to retrieve. Format: publications/{publication_id}/readers/{reader_id}/entitlements |

#### `publications.readers.updateEntitlements()`

Updates the reader entitlements for a publication reader. The entire reader entitlements will be overwritten by the new reader entitlements in the payload, like a PUT. - Returns PERMISSION_DENIED if the caller does not have access. - Returns NOT_FOUND if the reader does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the singleton. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Defaults to all fields. |
| `params.resource` | `object` | Yes | The request body. |