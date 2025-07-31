# Campaign Manager 360 API - Apps Script Client Library

Auto-generated client library for using the **Campaign Manager 360 API (version: v3.5)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:32:51 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:31:14 GMT
- **Created:** Sun, 20 Jul 2025 16:31:18 GMT



---

## API Reference

### `media`

#### `media.upload()`

Inserts a new creative asset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.profileId` | `string` | Yes | User profile ID associated with this request. |
| `params.advertiserId` | `string` | Yes | Advertiser ID of this creative. This is a required field. |
| `params.resource` | `object` | Yes | The request body. |