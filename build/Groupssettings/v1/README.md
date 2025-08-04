# Groups Settings API - Apps Script Client Library

Auto-generated client library for using the **Groups Settings API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:23:09 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:23:09 GMT
- **Created:** Sun, 20 Jul 2025 16:34:50 GMT



---

## API Reference

### `groups`

#### `groups.get()`

Gets one resource by id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupUniqueId` | `string` | Yes | The group's email address. |

#### `groups.update()`

Updates an existing resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupUniqueId` | `string` | Yes | The group's email address. |
| `params.resource` | `object` | Yes | The request body. |

#### `groups.patch()`

Updates an existing resource. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupUniqueId` | `string` | Yes | The group's email address. |
| `params.resource` | `object` | Yes | The request body. |