# Pollen API - Apps Script Client Library

Auto-generated client library for using the **Pollen API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 22:05:08 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:44:15 GMT
- **Created:** Sun, 20 Jul 2025 16:45:50 GMT



---

## API Reference

### `forecast`

#### `forecast.lookup()`

Returns up to 5 days of daily pollen information in more than 65 countries, up to 1km resolution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location.latitude` | `number` | No | The latitude in degrees. It must be in the range [-90.0, +90.0]. |
| `params.location.longitude` | `number` | No | The longitude in degrees. It must be in the range [-180.0, +180.0]. |
| `params.days` | `integer` | No | Required. A number that indicates how many forecast days to request (minimum value 1, maximum value is 5). |
| `params.pageSize` | `integer` | No | Optional. The maximum number of daily info records to return per page. The default and max value is 5, indicating 5 days of data. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous daily call. It is used to retrieve the subsequent page. Note that when providing a value for the page token, all other request parameters provided must match the previous call that provided the page token. |
| `params.languageCode` | `string` | No | Optional. Allows the client to choose the language for the response. If data cannot be provided for that language, the API uses the closest match. Allowed values rely on the IETF BCP-47 standard. The default value is "en". |
| `params.plantsDescription` | `boolean` | No | Optional. Contains general information about plants, including details on their seasonality, special shapes and colors, information about allergic cross-reactions, and plant photos. The default value is "true". |

### `mapTypes`

### `mapTypes.heatmapTiles`

#### `mapTypes.heatmapTiles.lookupHeatmapTile()`

Returns a byte array containing the data of the tile PNG image.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mapType` | `string` | Yes | Required. The type of the pollen heatmap. Defines the combination of pollen type and index that the map will graphically represent. |
| `params.zoom` | `integer` | Yes | Required. The map's zoom level. Defines how large or small the contents of a map appear in a map view. * Zoom level 0 is the entire world in a single tile. * Zoom level 1 is the entire world in 4 tiles. * Zoom level 2 is the entire world in 16 tiles. * Zoom level 16 is the entire world in 65,536 tiles. Allowed values: 0-16 |
| `params.x` | `integer` | Yes | Required. Defines the east-west point in the requested tile. |
| `params.y` | `integer` | Yes | Required. Defines the north-south point in the requested tile. |