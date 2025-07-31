# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: products_v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:43:58 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:41:40 GMT
- **Created:** Sun, 20 Jul 2025 16:42:50 GMT



---

## API Reference

### `accounts`

### `accounts.productInputs`

#### `accounts.productInputs.insert()`

[Uploads a product input to your Merchant Center account](/merchant/api/guides/products/overview#upload-product-input). You must have a products [data source](/merchant/api/guides/data-sources/overview) to be able to insert a product. The unique identifier of the data source is passed as a query parameter in the request URL. If a product input with the same contentLanguage, offerId, and dataSource already exists, then the product input inserted by this method replaces that entry. After inserting, updating, or deleting a product input, it may take several minutes before the processed product can be retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account where this product will be inserted. Format: `accounts/{account}` |
| `params.dataSource` | `string` | No | Required. The primary or supplemental product data source name. If the product already exists and data source provided is different, then the product will be moved to a new data source. For more information, see [Overview of Data sources sub-API](/merchant/api/guides/data-sources/overview). Only API data sources are supported. Format: `accounts/{account}/dataSources/{datasource}`. For example, `accounts/123456/dataSources/104628`. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.productInputs.patch()`

Updates the existing product input in your Merchant Center account. After inserting, updating, or deleting a product input, it may take several minutes before the processed product can be retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the product input. Format: `accounts/{account}/productInputs/{productinput}` where the last section `productinput` consists of: `content_language~feed_label~offer_id` example for product input name is `accounts/123/productInputs/en~US~sku123`. A legacy local product input name would be `accounts/123/productInputs/local~en~US~sku123`. Note: For calls to the v1beta version, the `productInput` section consists of: `channel~content_language~feed_label~offer_id`, for example: `accounts/123/productInputs/online~en~US~sku123`. |
| `params.updateMask` | `string` | No | Optional. The list of product attributes to be updated. If the update mask is omitted, then it is treated as implied field mask equivalent to all fields that are populated (have a non-empty value). Attributes specified in the update mask without a value specified in the body will be deleted from the product. Update mask can only be specified for top level fields in attributes and custom attributes. To specify the update mask for custom attributes you need to add the `custom_attribute.` prefix. Providing special "*" value for full product replacement is not supported. |
| `params.dataSource` | `string` | No | Required. The primary or supplemental product data source where `data_source` name identifies the product input to be updated. Only API data sources are supported. Format: `accounts/{account}/dataSources/{datasource}`. For example, `accounts/123456/dataSources/104628`. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.productInputs.delete()`

Deletes a product input from your Merchant Center account. After inserting, updating, or deleting a product input, it may take several minutes before the processed product can be retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the product input resource to delete. Format: `accounts/{account}/productInputs/{product}` where the last section `product` consists of: `content_language~feed_label~offer_id` example for product name is `accounts/123/productInputs/en~US~sku123`. |
| `params.dataSource` | `string` | No | Required. The primary or supplemental data source from which the product input should be deleted. Format: `accounts/{account}/dataSources/{datasource}`. For example, `accounts/123456/dataSources/104628`. |

### `accounts.products`

#### `accounts.products.get()`

Retrieves the processed product from your Merchant Center account. After inserting, updating, or deleting a product input, it may take several minutes before the updated final product can be retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the product to retrieve. Format: `accounts/{account}/products/{product}` where the last section `product` consists of: `content_language~feed_label~offer_id` example for product name is `accounts/123/products/en~US~sku123`. A legacy local product name would be `accounts/123/products/local~en~US~sku123`. Note: For calls to the v1beta version, the `product` section consists of: `channel~content_language~feed_label~offer_id`, for example: `accounts/123/products/online~en~US~sku123`. |

#### `accounts.products.list()`

Lists the processed products in your Merchant Center account. The response might contain fewer items than specified by `pageSize`. Rely on `pageToken` to determine if there are more items to be requested. After inserting, updating, or deleting a product input, it may take several minutes before the updated processed product can be retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account to list processed products for. Format: `accounts/{account}` |
| `params.pageSize` | `integer` | No | The maximum number of products to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. If unspecified, the default page size of 25 products will be returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListProducts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProducts` must match the call that provided the page token. |