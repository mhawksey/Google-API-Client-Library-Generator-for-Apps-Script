# My Business Place Actions API - Apps Script Client Library

Auto-generated client library for using the **My Business Place Actions API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:44:37 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:42:21 GMT
- **Created:** Sun, 20 Jul 2025 16:43:37 GMT



---

## API Reference

### `placeActionTypeMetadata`

#### `placeActionTypeMetadata.list()`

Returns the list of available place action types for a location or country.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.languageCode` | `string` | No | Optional. The IETF BCP-47 code of language to get display names in. If this language is not available, they will be provided in English. |
| `params.pageSize` | `integer` | No | Optional. How many action types to include per page. Default is 10, minimum is 1. |
| `params.pageToken` | `string` | No | Optional. If specified, the next page of place action type metadata is retrieved. The `pageToken` is returned when a call to `placeActionTypeMetadata.list` returns more results than can fit into the requested page size. |
| `params.filter` | `string` | No | Optional. A filter constraining the place action types to return metadata for. The response includes entries that match the filter. We support only the following filters: 1. location=XYZ where XYZ is a string indicating the resource name of a location, in the format `locations/{location_id}`. 2. region_code=XYZ where XYZ is a Unicode CLDR region code to find available action types. If no filter is provided, all place action types are returned. |

### `locations`

### `locations.placeActionLinks`

#### `locations.placeActionLinks.list()`

Lists the place action links for the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the location whose place action links will be listed. `locations/{location_id}`. |
| `params.filter` | `string` | No | Optional. A filter constraining the place action links to return. The response includes entries that match the filter. We support only the following filter: 1. place_action_type=XYZ where XYZ is a valid PlaceActionType. |
| `params.pageSize` | `integer` | No | Optional. How many place action links to return per page. Default of 10. The minimum is 1. |
| `params.pageToken` | `string` | No | Optional. If specified, returns the next page of place action links. |

#### `locations.placeActionLinks.get()`

Gets the specified place action link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the place action link to fetch. |

#### `locations.placeActionLinks.create()`

Creates a place action link associated with the specified location, and returns it. The request is considered duplicate if the `parent`, `place_action_link.uri` and `place_action_link.place_action_type` are the same as a previous request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the location where to create this place action link. `locations/{location_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.placeActionLinks.patch()`

Updates the specified place action link and returns it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. The resource name, in the format `locations/{location_id}/placeActionLinks/{place_action_link_id}`. The name field will only be considered in UpdatePlaceActionLink and DeletePlaceActionLink requests for updating and deleting links respectively. However, it will be ignored in CreatePlaceActionLink request, where `place_action_link_id` will be assigned by the server on successful creation of a new link and returned as part of the response. |
| `params.updateMask` | `string` | No | Required. The specific fields to update. The only editable fields are `uri`, `place_action_type` and `is_preferred`. If the updated link already exists at the same location with the same `place_action_type` and `uri`, fails with an `ALREADY_EXISTS` error. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.placeActionLinks.delete()`

Deletes a place action link from the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the place action link to remove from the location. |