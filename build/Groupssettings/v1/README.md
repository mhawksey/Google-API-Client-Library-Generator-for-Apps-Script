# Groups Settings API - Apps Script Client Library

Auto-generated client library for using the **Groups Settings API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:42:26 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:26:45 GMT
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
| `params.requestBody` | `object` | Yes | The request body. |

#### `groups.patch()`

Updates an existing resource. This method supports patch semantics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groupUniqueId` | `string` | Yes | The group's email address. |
| `params.requestBody` | `object` | Yes | The request body. |