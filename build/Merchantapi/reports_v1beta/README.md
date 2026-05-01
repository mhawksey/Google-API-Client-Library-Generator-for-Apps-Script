# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: reports_v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Fri, 01 May 2026 00:08:04 GMT
- **Last Modified:** Fri, 01 May 2026 00:08:04 GMT
- **Created:** Sun, 20 Jul 2025 16:42:58 GMT



---

## API Reference

### `accounts`

### `accounts.reports`

#### `accounts.reports.search()`

Retrieves a report defined by a search query. The response might contain fewer rows than specified by `page_size`. Rely on `next_page_token` to determine if there are more rows to be requested.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Id of the account making the call. Must be a standalone account or an MCA subaccount. Format: accounts/{account} |
| `params.requestBody` | `object` | Yes | The request body. |