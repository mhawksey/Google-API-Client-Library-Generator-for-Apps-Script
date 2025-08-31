# Local Services API - Apps Script Client Library

Auto-generated client library for using the **Local Services API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:42:43 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:25:29 GMT
- **Created:** Sun, 20 Jul 2025 16:41:54 GMT



---

## API Reference

### `accountReports`

#### `accountReports.search()`

Get account reports containing aggregate account data of all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.query` | `string` | No | A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Account Report for Manager with id 123. | Required. |
| `params.startDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.startDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.startDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.endDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.endDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.endDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.pageSize` | `integer` | No | The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional. |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous request to SearchAccountReports that indicates where listing should continue. Optional. |

### `detailedLeadReports`

#### `detailedLeadReports.search()`

Get detailed lead reports containing leads that have been received by all linked GLS accounts. Caller needs to provide their manager customer id and the associated auth credential that allows them read permissions on their linked accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.query` | `string` | No | A query string for searching for account reports. Caller must provide a customer id of their MCC account with an associated Gaia Mint that allows read permission on their linked accounts. Search expressions are case insensitive. Example query: | Query | Description | |-------------------------|-----------------------------------------------| | manager_customer_id:123 | Get Detailed Lead Report for Manager with id | | | 123. | Required. |
| `params.startDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.startDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.startDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.endDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.endDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.endDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.pageSize` | `integer` | No | The maximum number of accounts to return. If the page size is unset, page size will default to 1000. Maximum page_size is 10000. Optional. |
| `params.pageToken` | `string` | No | The `next_page_token` value returned from a previous request to SearchDetailedLeadReports that indicates where listing should continue. Optional. |