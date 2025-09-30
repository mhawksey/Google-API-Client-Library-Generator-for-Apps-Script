# Cloud Billing API - Apps Script Client Library

Auto-generated client library for using the **Cloud Billing API (version: v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:24:35 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:07:11 GMT
- **Created:** Sun, 20 Jul 2025 16:21:12 GMT



---

## API Reference

### `billingAccounts`

### `billingAccounts.services`

#### `billingAccounts.services.list()`

Lists services visible to a billing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The billing account to list billing account service from. Format: billingAccounts/{billing_account} |
| `params.pageSize` | `integer` | No | Maximum number of billing account service to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. |
| `params.pageToken` | `string` | No | Page token received from a previous ListBillingAccountServices call to retrieve the next page of results. If this field is empty, the first page is returned. |

#### `billingAccounts.services.get()`

Gets a Google Cloud service visible to a billing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the billing account service to retrieve. Format: billingAccounts/{billing_account}/services/{service} |

### `billingAccounts.skuGroups`

#### `billingAccounts.skuGroups.list()`

Lists SKU groups visible to a billing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The billing account to list billing account SKU groups from. Format: billingAccounts/{billing_account} |
| `params.pageSize` | `integer` | No | Maximum number of billing account SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. |
| `params.pageToken` | `string` | No | Page token received from a previous ListBillingAccountSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned. |

#### `billingAccounts.skuGroups.get()`

Gets a SKU group visible to a billing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the BillingAccountSkuGroup to retrieve. Format: billingAccounts/{billing_account}/skuGroups/{sku_group} |

### `billingAccounts.skuGroups.skus`

#### `billingAccounts.skuGroups.skus.list()`

Lists SKUs that is part of billing account SKU groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The billing account SKU group to list billing account SKU group SKUs from. Format: billingAccounts/{billing_account}/skuGroups/{sku_group} |
| `params.pageSize` | `integer` | No | Maximum number of billing account SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. |
| `params.pageToken` | `string` | No | Page token received from a previous ListBillingAccountSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned. |

#### `billingAccounts.skuGroups.skus.get()`

Gets a SKU that is part of a billing account SKU group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the billing account SKU group SKU to retrieve. Format: billingAccounts/{billing_account}/skuGroups/{sku_group}/skus/{sku} |

### `billingAccounts.skus`

#### `billingAccounts.skus.list()`

Lists SKUs visible to a billing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The billing account to list billing account SKU from. Format: billingAccounts/{billing_account} |
| `params.filter` | `string` | No | Options for how to filter the billing account SKUs. Currently, only filter on `billing_account_service` is supported. Only !=, = operators are supported. Examples: - billing_account_service = "billingAccounts/012345-567890-ABCDEF/services/DA34-426B-A397" |
| `params.pageSize` | `integer` | No | Maximum number of billing account SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. |
| `params.pageToken` | `string` | No | Page token received from a previous ListBillingAccountSkus call to retrieve the next page of results. If this field is empty, the first page is returned. |

#### `billingAccounts.skus.get()`

Gets a SKU visible to a billing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the billing account SKU to retrieve. Format: billingAccounts/{billing_account}/skus/{sku} |

### `billingAccounts.skus.price`

#### `billingAccounts.skus.price.get()`

Gets the latest price for SKUs available to your Cloud Billing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the billing account price to retrieve. Format: billingAccounts/{billing_account}/skus/{sku}/price |
| `params.currencyCode` | `string` | No | Optional. ISO-4217 currency code for the price. If not specified, the currency of the billing account is used. |

### `billingAccounts.skus.prices`

#### `billingAccounts.skus.prices.list()`

Lists the latest prices for SKUs available to your Cloud Billing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. To list all Billing Account SKUs, use `-` as the SKU ID. Format: `billingAccounts/{billing_account}/skus/-` Note: Specifying an actual SKU resource id will return a collection of one Billing Account Price. |
| `params.currencyCode` | `string` | No | Optional. ISO-4217 currency code for the price. If not specified, currency of billing account will be used. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of billing account price to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListBillingAccountPrices call to retrieve the next page of results. If this field is empty, the first page is returned. |

### `skus`

### `skus.price`

#### `skus.price.get()`

Gets the latest price for the given SKU.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the latest price to retrieve. Format: skus/{sku}/price |
| `params.currencyCode` | `string` | No | Optional. ISO-4217 currency code for the price. If not specified, USD will be used. |

### `skus.prices`

#### `skus.prices.list()`

Lists the latest prices for all SKUs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. To list the prices for all SKUs, use `-` as the SKU ID. Format: `skus/-` Specifying a specific SKU ID returns a collection with one Price object for the SKU. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of prices to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous ListPrices call to retrieve the next page of results. If this field is empty, the first page is returned. |
| `params.currencyCode` | `string` | No | Optional. ISO-4217 currency code for the price. If not specified, USD will be used. |

### `skuGroups`

#### `skuGroups.list()`

Lists all publicly listed SKU groups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Maximum number of SKU groups to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. |
| `params.pageToken` | `string` | No | Page token received from a previous ListSkuGroups call to retrieve the next page of results. If this field is empty, the first page is returned. |

#### `skuGroups.get()`

Gets a publicly listed SKU group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SKU group to retrieve. Format: skuGroups/{sku_group} |

### `skuGroups.skus`

#### `skuGroups.skus.list()`

Lists all publicly listed SKUs contained by a publicly listed SKU group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The SkuGroup to list SkuGroupSku from. Format: skuGroups/{sku_group} |
| `params.pageSize` | `integer` | No | Maximum number of SKU group SKUs to return. Results may return fewer than this value. Default value is 50 and maximum value is 5000. |
| `params.pageToken` | `string` | No | Page token received from a previous ListSkuGroupSkus call to retrieve the next page of results. If this field is empty, the first page is returned. |

#### `skuGroups.skus.get()`

Gets a publicly listed SKU that is part of a publicly listed SKU group.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SKU group SKU to retrieve. Format: skuGroups/{sku_group}/skus/{sku} |