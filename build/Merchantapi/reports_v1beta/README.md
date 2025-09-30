# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: reports_v1beta)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:44:52 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:35:21 GMT
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