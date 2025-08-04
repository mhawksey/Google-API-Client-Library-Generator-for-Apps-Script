# Manufacturer Center API - Apps Script Client Library

Auto-generated client library for using the **Manufacturer Center API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:25:59 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:25:59 GMT
- **Created:** Sun, 20 Jul 2025 16:42:13 GMT



---

## API Reference

### `accounts`

### `accounts.products`

#### `accounts.products.list()`

Lists all the products in a Manufacturer Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. |
| `params.pageSize` | `integer` | No | Maximum number of product statuses to return in the response, used for paging. |
| `params.pageToken` | `string` | No | The token returned by the previous request. |
| `params.include` | `string` | No | The information to be included in the response. Only sections listed here will be returned. |

#### `accounts.products.get()`

Gets the product from a Manufacturer Center account, including product issues. A recently updated product takes around 15 minutes to process. Changes are only visible after it has been processed. While some issues may be available once the product has been processed, other issues may take days to appear.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. |
| `params.name` | `string` | Yes | Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id. |
| `params.include` | `string` | No | The information to be included in the response. Only sections listed here will be returned. |

#### `accounts.products.update()`

Inserts or updates the attributes of the product in a Manufacturer Center account. Creates a product with the provided attributes. If the product already exists, then all attributes are replaced with the new ones. The checks at upload time are minimal. All required attributes need to be present for a product to be valid. Issues may show up later after the API has accepted a new upload for a product and it is possible to overwrite an existing valid product with an invalid product. To detect this, you should retrieve the product and check it for issues once the new version is available. Uploaded attributes first need to be processed before they can be retrieved. Until then, new products will be unavailable, and retrieval of previously uploaded products will return the original state of the product.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. |
| `params.name` | `string` | Yes | Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.products.delete()`

Deletes the product from a Manufacturer Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Parent ID in the format `accounts/{account_id}`. `account_id` - The ID of the Manufacturer Center account. |
| `params.name` | `string` | Yes | Name in the format `{target_country}:{content_language}:{product_id}`. `target_country` - The target country of the product as a CLDR territory code (for example, US). `content_language` - The content language of the product as a two-letter ISO 639-1 language code (for example, en). `product_id` - The ID of the product. For more information, see https://support.google.com/manufacturers/answer/6124116#id. |

### `accounts.languages`

### `accounts.languages.productCertifications`

#### `accounts.languages.productCertifications.patch()`

Updates (or creates if allow_missing = true) a product certification which links certifications with products. This method can only be called by certification bodies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique name identifier of a product certification Format: accounts/{account}/languages/{language_code}/productCertifications/{id} Where `id` is a some unique identifier and `language_code` is a 2-letter ISO 639-1 code of a Shopping supported language according to https://support.google.com/merchants/answer/160637. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update according to aip.dev/134. However, only full update is supported as of right now. Therefore, it can be either ignored or set to "*". Setting any other values will returns UNIMPLEMENTED error. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.languages.productCertifications.list()`

Lists product certifications from a specified certification body. This method can only be called by certification bodies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of product certifications. Format: accounts/{account}/languages/{language_code} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of product certifications to return. The service may return fewer than this value. If unspecified, at most 50 product certifications will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListProductCertifications` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductCertifications` must match the call that provided the page token. Required if requesting the second or higher page. |

#### `accounts.languages.productCertifications.get()`

Gets a product certification by its name. This method can only be called by certification bodies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the product certification to get. Format: accounts/{account}/languages/{language_code}/productCertifications/{id} |

#### `accounts.languages.productCertifications.delete()`

Deletes a product certification by its name. This method can only be called by certification bodies.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the product certification to delete. Format: accounts/{account}/languages/{language_code}/productCertifications/{id} |