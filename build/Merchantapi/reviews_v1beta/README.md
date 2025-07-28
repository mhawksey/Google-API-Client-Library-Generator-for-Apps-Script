# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: reviews_v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:09:19 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:41:49 GMT
- **Created:** Sun, 20 Jul 2025 16:43:01 GMT



---

## API Reference

### `accounts`

### `accounts.merchantReviews`

#### `accounts.merchantReviews.get()`

Gets a merchant review.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The ID of the merchant review. Format: accounts/{account}/merchantReviews/{merchantReview} |

#### `accounts.merchantReviews.list()`

Lists merchant reviews.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account to list merchant reviews for. Format: accounts/{account} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of merchant reviews to return. The service can return fewer than this value. The maximum value is 1000; values above 1000 are coerced to 1000. If unspecified, the maximum number of reviews is returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListMerchantReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMerchantReviews` must match the call that provided the page token. |

#### `accounts.merchantReviews.insert()`

Inserts a review for your Merchant Center account. If the review already exists, then the review is replaced with the new instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account where the merchant review will be inserted. Format: accounts/{account} |
| `params.dataSource` | `string` | No | Required. The data source of the [merchantreview](https://support.google.com/merchants/answer/7045996?sjid=5253581244217581976-EU) Format: `accounts/{account}/dataSources/{datasource}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.merchantReviews.delete()`

Deletes merchant review.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The ID of the merchant review. Format: accounts/{account}/merchantReviews/{merchantReview} |

### `accounts.productReviews`

#### `accounts.productReviews.get()`

Gets a product review.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The ID of the merchant review. Format: accounts/{account}/productReviews/{productReview} |

#### `accounts.productReviews.list()`

Lists product reviews.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account to list product reviews for. Format: accounts/{account} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of products to return. The service may return fewer than this value. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListProductReviews` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListProductReviews` must match the call that provided the page token. |

#### `accounts.productReviews.insert()`

Inserts a product review.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account where the product review will be inserted. Format: accounts/{account} |
| `params.dataSource` | `string` | No | Required. Format: `accounts/{account}/dataSources/{datasource}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `accounts.productReviews.delete()`

Deletes a product review.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The ID of the Product review. Format: accounts/{account}/productReviews/{productReview} |