# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: quota_v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 01 Dec 2025 00:57:13 GMT
- **Last Modified:** Mon, 01 Dec 2025 00:57:13 GMT
- **Created:** Sun, 31 Aug 2025 23:44:14 GMT



---

## API Reference

### `accounts`

### `accounts.limits`

#### `accounts.limits.get()`

Retrieves an account limit.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the limit to retrieve. Format: `accounts/{account}/limits/{limit}` For example: `accounts/123/limits/products~ADS_NON_EEA` |

#### `accounts.limits.list()`

Lists the limits of an account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent account. Format: `accounts/{account}` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of limits to return. The service may return fewer than this value. If unspecified, at most 100 limits will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListAccountLimits` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListAccountLimits` must match the call that provided the page token. |
| `params.filter` | `string` | No | Required. A filter on the limit `type` is required, for example, `type = "products"`. |

### `accounts.quotas`

#### `accounts.quotas.list()`

Lists the daily call quota and usage per group for your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The merchant account who owns the collection of method quotas Format: accounts/{account} |
| `params.pageSize` | `integer` | No | Optional. The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | Optional. Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token. |