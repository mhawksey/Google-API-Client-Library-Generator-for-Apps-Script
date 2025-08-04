# Search Ads 360 Reporting API - Apps Script Client Library

Auto-generated client library for using the **Search Ads 360 Reporting API (version: v0)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:45:24 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:45:24 GMT
- **Created:** Sun, 20 Jul 2025 16:53:27 GMT



---

## API Reference

### `customers`

#### `customers.listAccessibleCustomers()`

Returns resource names of customers directly accessible by the user authenticating the call. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|

### `customers.customColumns`

#### `customers.customColumns.get()`

Returns the requested custom column in full detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The resource name of the custom column to fetch. |

#### `customers.customColumns.list()`

Returns all the custom columns associated with the customer in full detail.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer to apply the CustomColumn list operation to. |

### `customers.searchAds360`

#### `customers.searchAds360.search()`

Returns all rows that match the search query. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.customerId` | `string` | Yes | Required. The ID of the customer being queried. |
| `params.resource` | `object` | Yes | The request body. |

### `searchAds360Fields`

#### `searchAds360Fields.get()`

Returns just the requested field. List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Required. The resource name of the field to get. |

#### `searchAds360Fields.search()`

Returns all fields that match the search [query](/search-ads/reporting/concepts/field-service#use_a_query_to_get_field_details). List of thrown errors: [AuthenticationError]() [AuthorizationError]() [HeaderError]() [InternalError]() [QueryError]() [QuotaError]() [RequestError]()

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |