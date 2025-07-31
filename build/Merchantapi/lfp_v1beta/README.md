# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: lfp_v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:43:51 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:41:33 GMT
- **Created:** Sun, 20 Jul 2025 16:42:42 GMT



---

## API Reference

### `accounts`

### `accounts.lfpInventories`

#### `accounts.lfpInventories.insert()`

Inserts a `LfpInventory` resource for the given target merchant account. If the resource already exists, it will be replaced. The inventory automatically expires after 30 days.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The LFP provider account. Format: `accounts/{account}` |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.lfpMerchantStates`

#### `accounts.lfpMerchantStates.get()`

Gets the LFP state of a merchant

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the state to retrieve. Format: `accounts/{account}/lfpMerchantStates/{target_merchant}`. For example, `accounts/123456/lfpMerchantStates/567890`. |

### `accounts.lfpSales`

#### `accounts.lfpSales.insert()`

Inserts a `LfpSale` for the given merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The LFP provider account. Format: `accounts/{lfp_partner}` |
| `params.resource` | `object` | Yes | The request body. |

### `accounts.lfpStores`

#### `accounts.lfpStores.get()`

Retrieves information about a store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the store to retrieve. Format: `accounts/{account}/lfpStores/{target_merchant}~{store_code}` |

#### `accounts.lfpStores.insert()`

Inserts a store for the target merchant. If the store with the same store code already exists, it will be replaced.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The LFP provider account Format: `accounts/{account}` |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.lfpStores.delete()`

Deletes a store for a target merchant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the store to delete for the target merchant account. Format: `accounts/{account}/lfpStores/{target_merchant}~{store_code}` |

#### `accounts.lfpStores.list()`

Lists the stores of the target merchant, specified by the filter in `ListLfpStoresRequest`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The LFP partner. Format: `accounts/{account}` |
| `params.targetAccount` | `string` | No | Required. The Merchant Center id of the merchant to list stores for. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of `LfpStore` resources for the given account to return. The service returns fewer than this value if the number of stores for the given account is less than the `pageSize`. The default value is 250. The maximum value is 1000; If a value higher than the maximum is specified, then the `pageSize` will default to the maximum. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListLfpStoresRequest` call. Provide the page token to retrieve the subsequent page. When paginating, all other parameters provided to `ListLfpStoresRequest` must match the call that provided the page token. The token returned as nextPageToken in the response to the previous request. |