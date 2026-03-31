# Cloud Location Finder API - Apps Script Client Library

Auto-generated client library for using the **Cloud Location Finder API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 31 Mar 2026 23:25:26 GMT
- **Last Modified:** Sun, 01 Mar 2026 00:32:34 GMT
- **Created:** Sun, 20 Jul 2025 16:22:09 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

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