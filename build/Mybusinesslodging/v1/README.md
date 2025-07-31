# My Business Lodging API - Apps Script Client Library

Auto-generated client library for using the **My Business Lodging API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:44:33 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:42:17 GMT
- **Created:** Sun, 20 Jul 2025 16:43:31 GMT



---

## API Reference

### `locations`

#### `locations.getLodging()`

Returns the Lodging of a specific location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Google identifier for this location in the form: `locations/{location_id}/lodging` |
| `params.readMask` | `string` | No | Required. The specific fields to return. Use "*" to include all fields. Repeated field items cannot be individually specified. |

#### `locations.updateLodging()`

Updates the Lodging of a specific location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Google identifier for this location in the form: `locations/{location_id}/lodging` |
| `params.updateMask` | `string` | No | Required. The specific fields to update. Use "*" to update all fields, which may include unsetting empty fields in the request. Repeated field items cannot be individually updated. |
| `params.resource` | `object` | Yes | The request body. |

### `locations.lodging`

#### `locations.lodging.getGoogleUpdated()`

Returns the Google updated Lodging of a specific location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Google identifier for this location in the form: `locations/{location_id}/lodging` |
| `params.readMask` | `string` | No | Required. The specific fields to return. Use "*" to include all fields. Repeated field items cannot be individually specified. |