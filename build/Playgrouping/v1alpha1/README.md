# Google Play Grouping API - Apps Script Client Library

Auto-generated client library for using the **Google Play Grouping API (version: v1alpha1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:46:26 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:36:14 GMT
- **Created:** Sun, 20 Jul 2025 16:45:25 GMT



---

## API Reference

### `apps`

### `apps.tokens`

#### `apps.tokens.verify()`

Verify an API token by asserting the app and persona it belongs to. The verification is a protection against client-side attacks and will fail if the contents of the token don't match the provided values. A token must be verified before it can be used to manipulate user tags.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appPackage` | `string` | Yes | Required. App the token belongs to. Format: apps/{package_name} |
| `params.token` | `string` | Yes | Required. The token to be verified. Format: tokens/{token} |
| `params.resource` | `object` | Yes | The request body. |

### `apps.tokens.tags`

#### `apps.tokens.tags.createOrUpdate()`

Create or update tags for the user and app that are represented by the given token.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.appPackage` | `string` | Yes | Required. App whose tags are being manipulated. Format: apps/{package_name} |
| `params.token` | `string` | Yes | Required. Token for which the tags are being inserted or updated. Format: tokens/{token} |
| `params.resource` | `object` | Yes | The request body. |