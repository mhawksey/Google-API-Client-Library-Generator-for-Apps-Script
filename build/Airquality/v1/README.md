# Air Quality API - Apps Script Client Library

Auto-generated client library for using the **Air Quality API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:03:22 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:03:22 GMT
- **Created:** Sun, 20 Jul 2025 16:11:31 GMT



---

## API Reference

### `currentConditions`

#### `currentConditions.lookup()`

The Current Conditions endpoint provides hourly air quality information in more than 100 countries, up to a 500 x 500 meters resolution. Includes over 70 local indexes and global air quality index and categories.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `history`

#### `history.lookup()`

Returns air quality history for a specific location for a given time range.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `forecast`

#### `forecast.lookup()`

Returns air quality forecast for a specific location for a given time range.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `mapTypes`

### `mapTypes.heatmapTiles`

#### `mapTypes.heatmapTiles.lookupHeatmapTile()`

Returns a bytes array containing the data of the tile PNG image.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.mapType` | `string` | Yes | Required. The type of the air quality heatmap. Defines the pollutant that the map will graphically represent. Allowed values: - UAQI_RED_GREEN (UAQI, red-green palette) - UAQI_INDIGO_PERSIAN (UAQI, indigo-persian palette) - PM25_INDIGO_PERSIAN - GBR_DEFRA - DEU_UBA - CAN_EC - FRA_ATMO - US_AQI |
| `params.zoom` | `integer` | Yes | Required. The map's zoom level. Defines how large or small the contents of a map appear in a map view. Zoom level 0 is the entire world in a single tile. Zoom level 1 is the entire world in 4 tiles. Zoom level 2 is the entire world in 16 tiles. Zoom level 16 is the entire world in 65,536 tiles. Allowed values: 0-16 |
| `params.x` | `integer` | Yes | Required. Defines the east-west point in the requested tile. |
| `params.y` | `integer` | Yes | Required. Defines the north-south point in the requested tile. |