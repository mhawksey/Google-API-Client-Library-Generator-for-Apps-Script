# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: promotions_v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:35:06 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:35:06 GMT
- **Created:** Sun, 31 Aug 2025 23:44:08 GMT



---

## API Reference

### `accounts`

### `accounts.promotions`

#### `accounts.promotions.insert()`

Inserts a promotion for your Merchant Center account. If the promotion already exists, then it updates the promotion instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account where the promotion will be inserted. Format: accounts/{account} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `accounts.promotions.get()`

Retrieves the promotion from your Merchant Center account. After inserting or updating a promotion input, it may take several minutes before the updated promotion can be retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the promotion to retrieve. Format: `accounts/{account}/promotions/{promotions}` |

#### `accounts.promotions.list()`

Lists the promotions in your Merchant Center account. The response might contain fewer items than specified by `pageSize`. Rely on `pageToken` to determine if there are more items to be requested. After inserting or updating a promotion, it may take several minutes before the updated processed promotion can be retrieved.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account to list processed promotions for. Format: `accounts/{account}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of promotions to return. The service may return fewer than this value. The maximum value is 250; values above 250 will be coerced to 250. If unspecified, the maximum number of promotions will be returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListPromotions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPromotions` must match the call that provided the page token. |