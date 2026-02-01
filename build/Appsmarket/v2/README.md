# Google Workspace Marketplace API - Apps Script Client Library

Auto-generated client library for using the **Google Workspace Marketplace API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 01 Feb 2026 00:23:31 GMT
- **Last Modified:** Sun, 01 Feb 2026 00:23:31 GMT
- **Created:** Sun, 01 Feb 2026 00:23:31 GMT



---

## API Reference

### `customerLicense`

#### `customerLicense.get()`

Gets the status of a license for a customer to determine if they have access for a given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Customer Id |
| `params.applicationId` | `string` | Yes | Application Id |

### `userLicense`

#### `userLicense.get()`

Gets the user's licensing status for their permission to use a given app.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.applicationId` | `string` | Yes | Application Id |
| `params.userId` | `string` | Yes | User Id |