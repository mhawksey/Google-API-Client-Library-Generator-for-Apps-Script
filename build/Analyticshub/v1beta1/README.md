# Analytics Hub API - Apps Script Client Library

Auto-generated client library for using the **Analytics Hub API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:46:24 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:20:57 GMT
- **Created:** Sun, 20 Jul 2025 16:12:04 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.dataExchanges`

#### `projects.locations.dataExchanges.list()`

Lists all data exchanges in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource path of the data exchanges. e.g. `projects/myproject/locations/us`. |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results. |

#### `projects.locations.dataExchanges.get()`

Gets the details of a data exchange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`. |

#### `projects.locations.dataExchanges.create()`

Creates a new data exchange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource path of the data exchange. e.g. `projects/myproject/locations/us`. |
| `params.dataExchangeId` | `string` | No | Required. The ID of the data exchange. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces. Max length: 100 bytes. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.patch()`

Updates an existing data exchange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the data exchange. e.g. `projects/myproject/locations/us/dataExchanges/123`. |
| `params.updateMask` | `string` | No | Required. Field mask specifies the fields to update in the data exchange resource. The fields specified in the `updateMask` are relative to the resource and are not a full request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.delete()`

Deletes an existing data exchange.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full name of the data exchange resource that you want to delete. For example, `projects/myproject/locations/us/dataExchanges/123`. |

#### `projects.locations.dataExchanges.getIamPolicy()`

Gets the IAM policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.setIamPolicy()`

Sets the IAM policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.testIamPermissions()`

Returns the permissions that a caller has.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.dataExchanges.listings`

#### `projects.locations.dataExchanges.listings.list()`

Lists all listings in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource path of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123`. |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results. |

#### `projects.locations.dataExchanges.listings.get()`

Gets the details of a listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`. |

#### `projects.locations.dataExchanges.listings.create()`

Creates a new listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource path of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123`. |
| `params.listingId` | `string` | No | Required. The ID of the listing to create. Must contain only Unicode letters, numbers (0-9), underscores (_). Should not use characters that require URL-escaping, or characters outside of ASCII, spaces. Max length: 100 bytes. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.listings.patch()`

Updates an existing listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the listing. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456` |
| `params.updateMask` | `string` | No | Required. Field mask specifies the fields to update in the listing resource. The fields specified in the `updateMask` are relative to the resource and are not a full request. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.listings.delete()`

Deletes a listing.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the listing to delete. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`. |

#### `projects.locations.dataExchanges.listings.subscribe()`

Subscribes to a listing. Currently, with Analytics Hub, you can create listings that reference only BigQuery datasets. Upon subscription to a listing for a BigQuery dataset, Analytics Hub creates a linked dataset in the subscriber's project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the listing that you want to subscribe to. e.g. `projects/myproject/locations/us/dataExchanges/123/listings/456`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.listings.getIamPolicy()`

Gets the IAM policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.listings.setIamPolicy()`

Sets the IAM policy.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataExchanges.listings.testIamPermissions()`

Returns the permissions that a caller has.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

### `organizations`

### `organizations.locations`

### `organizations.locations.dataExchanges`

#### `organizations.locations.dataExchanges.list()`

Lists all data exchanges from projects in a given organization and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.organization` | `string` | Yes | Required. The organization resource path of the projects containing DataExchanges. e.g. `organizations/myorg/locations/us`. |
| `params.pageSize` | `integer` | No | The maximum number of results to return in a single response page. Leverage the page tokens to iterate through the entire collection. |
| `params.pageToken` | `string` | No | Page token, returned by a previous call, to request the next page of results. |