# My Business Lodging API - Apps Script Client Library

Auto-generated client library for using the **My Business Lodging API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 01:04:25 GMT
- **Last Modified:** Sat, 01 Nov 2025 01:04:25 GMT
- **Created:** Sun, 20 Jul 2025 16:43:31 GMT



---

## API Reference

### `locations`

#### `locations.updateLodging()`

Updates the Lodging of a specific location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Google identifier for this location in the form: `locations/{location_id}/lodging` |
| `params.updateMask` | `string` | No | Required. The specific fields to update. Use "*" to update all fields, which may include unsetting empty fields in the request. Repeated field items cannot be individually updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `locations.getLodging()`

Returns the Lodging of a specific location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.readMask` | `string` | No | Required. The specific fields to return. Use "*" to include all fields. Repeated field items cannot be individually specified. |
| `params.name` | `string` | Yes | Required. Google identifier for this location in the form: `locations/{location_id}/lodging` |

### `locations.lodging`

#### `locations.lodging.getGoogleUpdated()`

Returns the Google updated Lodging of a specific location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.readMask` | `string` | No | Required. The specific fields to return. Use "*" to include all fields. Repeated field items cannot be individually specified. |
| `params.name` | `string` | Yes | Required. Google identifier for this location in the form: `locations/{location_id}/lodging` |