# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: reports_v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:44:19 GMT
- **Last Modified:** Sun, 31 Aug 2025 23:44:19 GMT
- **Created:** Sun, 31 Aug 2025 23:44:19 GMT



---

## API Reference

### `accounts`

### `accounts.reports`

#### `accounts.reports.search()`

Retrieves a report defined by a search query. The response might contain fewer rows than specified by `page_size`. Rely on `next_page_token` to determine if there are more rows to be requested.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Id of the account making the call. Must be a standalone account or an MCA subaccount. Format: accounts/{account} |
| `params.resource` | `object` | Yes | The request body. |