# Solar API - Apps Script Client Library

Auto-generated client library for using the **Solar API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:48:34 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:48:34 GMT
- **Created:** Sun, 20 Jul 2025 16:54:49 GMT



---

## API Reference

### `buildingInsights`

#### `buildingInsights.findClosest()`

Locates the building whose centroid is closest to a query point. Returns an error with code `NOT_FOUND` if there are no buildings within approximately 50m of the query point.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location.latitude` | `number` | No | The latitude in degrees. It must be in the range [-90.0, +90.0]. |
| `params.location.longitude` | `number` | No | The longitude in degrees. It must be in the range [-180.0, +180.0]. |
| `params.requiredQuality` | `string` | No | Optional. The minimum quality level allowed in the results. No result with lower quality than this will be returned. Not specifying this is equivalent to restricting to HIGH quality only. |
| `params.experiments` | `string` | No | Optional. Specifies the pre-GA features to enable. |

### `dataLayers`

#### `dataLayers.get()`

Gets solar information for a region surrounding a location. Returns an error with code `NOT_FOUND` if the location is outside the coverage area.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location.latitude` | `number` | No | The latitude in degrees. It must be in the range [-90.0, +90.0]. |
| `params.location.longitude` | `number` | No | The longitude in degrees. It must be in the range [-180.0, +180.0]. |
| `params.radiusMeters` | `number` | No | Required. The radius, in meters, defining the region surrounding that centre point for which data should be returned. The limitations on this value are: * Any value up to 100m can always be specified. * Values over 100m can be specified, as long as `radius_meters` <= `pixel_size_meters * 1000`. * However, for values over 175m, the `DataLayerView` in the request must not include monthly flux or hourly shade. |
| `params.view` | `string` | No | Optional. The desired subset of the data to return. |
| `params.requiredQuality` | `string` | No | Optional. The minimum quality level allowed in the results. No result with lower quality than this will be returned. Not specifying this is equivalent to restricting to HIGH quality only. |
| `params.pixelSizeMeters` | `number` | No | Optional. The minimum scale, in meters per pixel, of the data to return. Values of 0.1 (the default, if this field is not set explicitly), 0.25, 0.5, and 1.0 are supported. Imagery components whose normal resolution is less than `pixel_size_meters` will be returned at the resolution specified by `pixel_size_meters`; imagery components whose normal resolution is equal to or greater than `pixel_size_meters` will be returned at that normal resolution. |
| `params.exactQualityRequired` | `boolean` | No | Optional. Whether to require exact quality of the imagery. If set to false, the `required_quality` field is interpreted as the minimum required quality, such that HIGH quality imagery may be returned when `required_quality` is set to MEDIUM. If set to true, `required_quality` is interpreted as the exact required quality and only `MEDIUM` quality imagery is returned if `required_quality` is set to `MEDIUM`. |
| `params.experiments` | `string` | No | Optional. Specifies the pre-GA experiments to enable. |

### `geoTiff`

#### `geoTiff.get()`

Returns an image by its ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.id` | `string` | No | Required. The ID of the asset being requested. |