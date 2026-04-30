# Google Workspace Marketplace API - Apps Script Client Library

Auto-generated client library for using the **Google Workspace Marketplace API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 30 Apr 2026 23:24:54 GMT
- **Last Modified:** Thu, 30 Apr 2026 23:24:54 GMT
- **Created:** Sun, 01 Feb 2026 00:23:31 GMT



---

## API Reference

### `userLicense`

#### `userLicense.get()`

Gets the user's licensing status to determine if they have permission to use a given app. For more information, see [Getting app installation and licensing details](https://developers.google.com/workspace/marketplace/example-calls-marketplace-api).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The ID of the application. |
| `params.userId` | `string` | Yes | The ID of the user. |

### `customerLicense`

#### `customerLicense.get()`

Gets the customer's licensing status to determine if they have access to a given app. For more information, see [Getting app installation and licensing details](https://developers.google.com/workspace/marketplace/example-calls-marketplace-api).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | The ID of the application. |
| `params.customerId` | `string` | Yes | The ID of the customer. |