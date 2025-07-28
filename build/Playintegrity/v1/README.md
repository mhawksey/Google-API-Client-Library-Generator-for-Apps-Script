# Google Play Integrity API - Apps Script Client Library

Auto-generated client library for using the **Google Play Integrity API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:17:13 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:43:57 GMT
- **Created:** Sun, 20 Jul 2025 16:45:27 GMT



---

## API Reference

### `v1`

#### `v1.decodeIntegrityToken()`

Decodes the integrity token and returns the token payload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes |  Package name of the app the attached integrity token belongs to. |
| `params.resource` | `object` | Yes | The request body. |

#### `v1.decodePcIntegrityToken()`

Decodes the PC integrity token and returns the PC token payload.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Package name of the app the attached integrity token belongs to. |
| `params.resource` | `object` | Yes | The request body. |

### `deviceRecall`

#### `deviceRecall.write()`

Writes recall bits for the device where Play Integrity API token is obtained. The endpoint is available to select Play partners in an early access program (EAP).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.packageName` | `string` | Yes | Required. Package name of the app the attached integrity token belongs to. |
| `params.resource` | `object` | Yes | The request body. |