# Cloud Location Finder API - Apps Script Client Library

Auto-generated client library for using the **Cloud Location Finder API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:25:15 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:13:10 GMT
- **Created:** Sun, 20 Jul 2025 16:22:09 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.cloudLocations`

#### `projects.locations.cloudLocations.list()`

Lists cloud locations under a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of cloud locations. Format: projects/{project}/locations/{location} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of cloud locations to return per page. The service might return fewer cloud locations than this value. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. Provide page token returned by a previous 'ListCloudLocations' call to retrieve the next page of results. When paginating, all other parameters provided to 'ListCloudLocations' must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. A filter expression that filters resources listed in the response. The expression is in the form of field=value. For example, 'cloud_location_type=CLOUD_LOCATION_TYPE_REGION'. Multiple filter queries are space-separated. For example, 'cloud_location_type=CLOUD_LOCATION_TYPE_REGION territory_code="US"' By default, each expression is an AND expression. However, you can include AND and OR expressions explicitly. |

#### `projects.locations.cloudLocations.get()`

Retrieves a resource containing information about a cloud location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |

#### `projects.locations.cloudLocations.search()`

Searches for cloud locations from a given source location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of cloud locations. Format: projects/{project}/locations/{location} |
| `params.sourceCloudLocation` | `string` | No | Required. The source cloud location to search from. Example search can be searching nearby cloud locations from the source cloud location by latency. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of cloud locations to return. The service might return fewer cloud locations than this value. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. Provide Page token returned by a previous 'ListCloudLocations' call to retrieve the next page of results. When paginating, all other parameters provided to 'ListCloudLocations' must match the call that provided the page token. |
| `params.query` | `string` | No | Optional. The query string in search query syntax. While filter is used to filter the search results by attributes, query is used to specify the search requirements. |