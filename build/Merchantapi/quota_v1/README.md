# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: quota_v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 01:03:11 GMT
- **Last Modified:** Sat, 01 Nov 2025 01:03:11 GMT
- **Created:** Sun, 31 Aug 2025 23:44:14 GMT



---

## API Reference

### `accounts`

### `accounts.quotas`

#### `accounts.quotas.list()`

Lists the daily call quota and usage per group for your Merchant Center account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. Token (if provided) to retrieve the subsequent page. All other parameters must match the original call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of quotas to return in the response, used for paging. Defaults to 500; values above 1000 will be coerced to 1000. |
| `params.parent` | `string` | Yes | Required. The merchant account who owns the collection of method quotas Format: accounts/{account} |