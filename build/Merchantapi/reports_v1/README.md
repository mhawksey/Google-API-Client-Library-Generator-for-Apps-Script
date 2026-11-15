# Merchant API - Apps Script Client Library

Auto-generated client library for using the **Merchant API (version: reports_v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:31:41 GMT
- **Last Modified:** Fri, 01 May 2026 00:08:00 GMT
- **Created:** Sun, 31 Aug 2025 23:44:19 GMT



---

## API Reference

### `accounts`

### `accounts.reports`

#### `accounts.reports.search()`

Retrieves a report defined by a search query. The response might contain fewer rows than specified by `page_size`. Rely on `next_page_token` to determine if there are more rows to be requested. For more information, see [Get started](https://developers.google.com/merchant/api/guides/reports/get-started), [Use Merchant Center Query Language](https://developers.google.com/merchant/api/guides/reports/query-language), and [Paginate query results](https://developers.google.com/merchant/api/guides/reports/paging).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Id of the account making the call. Must be a standalone account or a subaccount of an advanced account. Format: accounts/{account} |
| `params.requestBody` | `object` | Yes | The request body. |