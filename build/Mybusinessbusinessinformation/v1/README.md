# My Business Business Information API - Apps Script Client Library

Auto-generated client library for using the **My Business Business Information API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:09:48 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:42:15 GMT
- **Created:** Sun, 20 Jul 2025 16:43:29 GMT



---

## API Reference

### `attributes`

#### `attributes.list()`

Returns the list of attributes that would be available for a location with the given primary category and country.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | No | Resource name of the location to look up available attributes. If this field is set, category_name, region_code, language_code and show_all are not required and must not be set. |
| `params.categoryName` | `string` | No | The primary category stable ID to find available attributes. Must be of the format categories/{category_id}. |
| `params.regionCode` | `string` | No | The ISO 3166-1 alpha-2 country code to find available attributes. |
| `params.languageCode` | `string` | No | The BCP 47 code of language to get attribute display names in. If this language is not available, they will be provided in English. |
| `params.showAll` | `boolean` | No | Metadata for all available attributes are returned when this field is set to true, disregarding parent and category_name fields. language_code and region_code are required when show_all is set to true. |
| `params.pageSize` | `integer` | No | How many attributes to include per page. Default is 200, minimum is 1. |
| `params.pageToken` | `string` | No | If specified, the next page of attribute metadata is retrieved. |

### `locations`

#### `locations.updateAttributes()`

Update attributes for a given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Google identifier for this location in the form of `locations/{location_id}/attributes`. |
| `params.attributeMask` | `string` | No | Required. Attribute name of attributes that you'd like to update. Represented by `attributes/{attribute}`. Updates: All attributes provided in the attributes field that you would like to update must be set in the `attribute_mask`. Attributes set in the above list but not in the `attribute_mask` will be ignored. Deletes: If you'd like to delete certain attributes, they must be specified in the `attribute_mask` with no matching entry in the attributes list. If you'd like to delete all attributes set on a location, you should look up all the applicable attributes for the location and then add them to the `attribute_mask` with an empty attributes field. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.getAttributes()`

Looks up all the attributes set for a given location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Google identifier for this location in the form of `locations/{location_id}/attributes`. |

#### `locations.get()`

Returns the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the location to fetch. |
| `params.readMask` | `string` | No | Required. Read mask to specify what fields will be returned in the response. |

#### `locations.getGoogleUpdated()`

Gets the Google-updated version of the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the location to fetch. |
| `params.readMask` | `string` | No | Required. Read mask to specify what fields will be returned in the response. |

#### `locations.patch()`

Updates the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Google identifier for this location in the form: `locations/{location_id}`. |
| `params.updateMask` | `string` | No | Required. The specific fields to update. |
| `params.validateOnly` | `boolean` | No | Optional. If true, the request is validated without actually updating the location. When this field is set, we will only return validation errors if there were any. The response will be empty if no errors were found. |
| `params.resource` | `object` | Yes | The request body. |

#### `locations.delete()`

Deletes a location. If this location cannot be deleted using the API and it is marked so in the `google.mybusiness.businessinformation.v1.LocationState`, use the [Google Business Profile](https://business.google.com/manage/) website.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the location to delete. |

### `locations.attributes`

#### `locations.attributes.getGoogleUpdated()`

Gets the Google-updated version of the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Google identifier for this location in the form of `locations/{location_id}/attributes`. |

### `categories`

#### `categories.list()`

Returns a list of business categories. Search will match the category name but not the category ID. Search only matches the front of a category name (that is, 'food' may return 'Food Court' but not 'Fast Food Restaurant').

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.regionCode` | `string` | No | Required. The ISO 3166-1 alpha-2 country code. |
| `params.languageCode` | `string` | No | Required. The BCP 47 code of language. |
| `params.filter` | `string` | No | Optional. Filter string from user. The only field that supported is `displayName`. Eg: `filter=displayName=foo`. |
| `params.pageSize` | `integer` | No | Optional. How many categories to fetch per page. Default is 100, minimum is 1, and maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. If specified, the next page of categories will be fetched. |
| `params.view` | `string` | No | Required. Specifies which parts to the Category resource should be returned in the response. |

#### `categories.batchGet()`

Returns a list of business categories for the provided language and GConcept ids.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.names` | `string` | No | Required. At least one name must be set. The GConcept ids the localized category names should be returned for. To return details for more than one category, repeat this parameter in the request. |
| `params.languageCode` | `string` | No | Required. The BCP 47 code of language that the category names should be returned in. |
| `params.regionCode` | `string` | No | Optional. The ISO 3166-1 alpha-2 country code used to infer non-standard language. |
| `params.view` | `string` | No | Required. Specifies which parts to the Category resource should be returned in the response. |

### `chains`

#### `chains.get()`

Gets the specified chain. Returns `NOT_FOUND` if the chain does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The chain's resource name, in the format `chains/{chain_place_id}`. |

#### `chains.search()`

Searches the chain based on chain name.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.chainName` | `string` | No | Required. Search for a chain by its name. Exact/partial/fuzzy/related queries are supported. Examples: "walmart", "wal-mart", "walmmmart", "沃尔玛" |
| `params.pageSize` | `integer` | No | The maximum number of matched chains to return from this query. The default is 10. The maximum possible value is 500. |

### `googleLocations`

#### `googleLocations.search()`

Search all of the possible locations that are a match to the specified request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `accounts`

### `accounts.locations`

#### `accounts.locations.list()`

Lists the locations for the specified account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the account to fetch locations from. If the parent Account is of AccountType PERSONAL, only Locations that are directly owned by the Account are returned, otherwise it will return all accessible locations from the Account, either directly or indirectly. |
| `params.pageSize` | `integer` | No | Optional. How many locations to fetch per page. Default value is 10 if not set. Minimum is 1, and maximum page size is 100. |
| `params.pageToken` | `string` | No | Optional. If specified, it fetches the next `page` of locations. The page token is returned by previous calls to `ListLocations` when there were more locations than could fit in the requested page size. |
| `params.filter` | `string` | No | Optional. A filter constraining the locations to return. The response includes only entries that match the filter. If `filter` is empty, then constraints are applied and all locations (paginated) are retrieved for the requested account. For more information about valid fields and example usage, see [Work with Location Data Guide](https://developers.google.com/my-business/content/location-data#filter_results_when_you_list_locations). |
| `params.orderBy` | `string` | No | Optional. Sorting order for the request. Multiple fields should be comma-separated, following SQL syntax. The default sorting order is ascending. To specify descending order, a suffix " desc" should be added. Valid fields to order_by are title and store_code. For example: "title, store_code desc" or "title" or "store_code desc" |
| `params.readMask` | `string` | No | Required. Read mask to specify what fields will be returned in the response. |

#### `accounts.locations.create()`

Creates a new Location that will be owned by the logged in user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the account in which to create this location. |
| `params.validateOnly` | `boolean` | No | Optional. If true, the request is validated without actually creating the location. |
| `params.requestId` | `string` | No | Optional. A unique request ID for the server to detect duplicated requests. We recommend using UUIDs. Max length is 50 characters. |
| `params.resource` | `object` | Yes | The request body. |