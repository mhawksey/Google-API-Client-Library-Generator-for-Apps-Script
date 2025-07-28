# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: inventories_v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:57:26 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:41:29 GMT
- **Created:** Sun, 20 Jul 2025 16:42:36 GMT



---

## API Reference

### `accounts`

### `accounts.products`

### `accounts.products.localInventories`

#### `accounts.products.localInventories.list()`

Lists the `LocalInventory` resources for the given product in your merchant account. The response might contain fewer items than specified by `pageSize`. If `pageToken` was returned in previous request, it can be used to obtain additional results. `LocalInventory` resources are listed per product for a given account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The `name` of the parent product to list local inventories for. Format: `accounts/{account}/products/{product}` |
| `params.pageSize` | `integer` | No | The maximum number of `LocalInventory` resources for the given product to return. The service returns fewer than this value if the number of inventories for the given product is less that than the `pageSize`. The default value is 25000. The maximum value is 25000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListLocalInventories` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListLocalInventories` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request. |

#### `accounts.products.localInventories.insert()`

Inserts a `LocalInventory` resource to a product in your merchant account. Replaces the full `LocalInventory` resource if an entry with the same `storeCode` already exists for the product. It might take up to 30 minutes for the new or updated `LocalInventory` resource to appear in products.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account and product where this inventory will be inserted. Format: `accounts/{account}/products/{product}` |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.products.localInventories.delete()`

Deletes the specified `LocalInventory` from the given product in your merchant account. It might take a up to an hour for the `LocalInventory` to be deleted from the specific product. Once you have received a successful delete response, wait for that period before attempting a delete again.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the local inventory for the given product to delete. Format: `accounts/{account}/products/{product}/localInventories/{store_code}` |

### `accounts.products.regionalInventories`

#### `accounts.products.regionalInventories.list()`

Lists the `RegionalInventory` resources for the given product in your merchant account. The response might contain fewer items than specified by `pageSize`. If `pageToken` was returned in previous request, it can be used to obtain additional results. `RegionalInventory` resources are listed per product for a given account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The `name` of the parent product to list `RegionalInventory` resources for. Format: `accounts/{account}/products/{product}` |
| `params.pageSize` | `integer` | No | The maximum number of `RegionalInventory` resources for the given product to return. The service returns fewer than this value if the number of inventories for the given product is less that than the `pageSize`. The default value is 25000. The maximum value is 100000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListRegionalInventories` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListRegionalInventories` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request. |

#### `accounts.products.regionalInventories.insert()`

Inserts a `RegionalInventory` to a given product in your merchant account. Replaces the full `RegionalInventory` resource if an entry with the same `region` already exists for the product. It might take up to 30 minutes for the new or updated `RegionalInventory` resource to appear in products.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account and product where this inventory will be inserted. Format: `accounts/{account}/products/{product}` |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.products.regionalInventories.delete()`

Deletes the specified `RegionalInventory` resource from the given product in your merchant account. It might take up to an hour for the `RegionalInventory` to be deleted from the specific product. Once you have received a successful delete response, wait for that period before attempting a delete again.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `RegionalInventory` resource to delete. Format: `accounts/{account}/products/{product}/regionalInventories/{region}` |