# Cloud Product Registry API - Apps Script Client Library

Auto-generated client library for using the **Cloud Product Registry API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Jun 2026 23:35:13 GMT
- **Last Modified:** Tue, 30 Jun 2026 23:35:13 GMT
- **Created:** Tue, 30 Jun 2026 23:35:13 GMT



---

## API Reference

### `productSuites`

#### `productSuites.lookupEntity()`

Look up entities.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.lookupUri` | `string` | Yes | Required. Entity uri to look up. Supported Formats: logicalProducts/{logical_product} logicalProducts/{logical_product}/variants/{variant} productSuites/{product_suite} |

#### `productSuites.get()`

Get details of a ProductSuite.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the ProductSuite to retrieve. Format: productSuites/{product_suite} |

#### `productSuites.list()`

Lists ProductSuites.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. The maximum number of suites to return. The service may return fewer than this value. If unspecified, at most 100 suites will be returned. The maximum value is 500; values above 500 will be coerced to 500. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListProductSuites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductSuites` must match the call that provided the page token. |

### `logicalProducts`

#### `logicalProducts.get()`

Gets details of a LogicalProduct.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the LogicalProduct to retrieve. Format: logicalProducts/{logical_product} |

#### `logicalProducts.list()`

Lists LogicalProducts matching given criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. The filter expression for listing logical products. Filter syntax: https://google.aip.dev/160 Supported fields: suite_id |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListLogicalProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLogicalProducts` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of logical products to return. The service may return fewer than this value. If unspecified, at most 100 logical products will be returned. The maximum value is 500; values above 500 will be coerced to 500. |

#### `logicalProducts.lookupEntity()`

Look up entities.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.lookupUri` | `string` | Yes | Required. Entity uri to look up. Supported Formats: logicalProducts/{logical_product} logicalProducts/{logical_product}/variants/{variant} productSuites/{product_suite} |

### `logicalProducts.variants`

#### `logicalProducts.variants.lookupEntity()`

Look up entities.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.lookupUri` | `string` | Yes | Required. Entity uri to look up. Supported Formats: logicalProducts/{logical_product} logicalProducts/{logical_product}/variants/{variant} productSuites/{product_suite} |

#### `logicalProducts.variants.get()`

Get details of a LogicalProductVariant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the LogicalProductVariant to retrieve. Format: logicalProducts/{logical_product}/variants/{variant} |

#### `logicalProducts.variants.list()`

Lists LogicalProductVariants matching given criteria.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent logical product id. Format: logicalProducts/{logical_product} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of logical product variants to return. The service may return fewer than this value. If unspecified, at most 100 logical product variants will be returned. The maximum value is 500; values above 500 will be coerced to 500. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListLogicalProductVariants` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListLogicalProductVariants` must match the call that provided the page token. |