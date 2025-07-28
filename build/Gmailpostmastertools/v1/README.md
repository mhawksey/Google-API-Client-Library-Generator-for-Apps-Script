# Gmail Postmaster Tools API - Apps Script Client Library

Auto-generated client library for using the **Gmail Postmaster Tools API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:06:56 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:33:52 GMT
- **Created:** Sun, 20 Jul 2025 16:34:45 GMT



---

## API Reference

### `domains`

#### `domains.get()`

Gets a specific domain registered by the client. Returns NOT_FOUND if the domain does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the domain. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name. |

#### `domains.list()`

Lists the domains that have been registered by the client. The order of domains in the response is unspecified and non-deterministic. Newly created domains will not necessarily be added to the end of this list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer domains than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. This is the value of ListDomainsResponse.next_page_token returned from the previous call to `ListDomains` method. |

### `domains.trafficStats`

#### `domains.trafficStats.get()`

Get traffic statistics for a domain on a specific date. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the traffic statistics to get. E.g., domains/mymail.mydomain.com/trafficStats/20160807. |

#### `domains.trafficStats.list()`

List traffic statistics for all available days. Returns PERMISSION_DENIED if user does not have permission to access TrafficStats for the domain.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource name of the domain whose traffic statistics we'd like to list. It should have the form `domains/{domain_name}`, where domain_name is the fully qualified domain name. |
| `params.startDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.startDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.startDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.endDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.endDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.endDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer TrafficStats than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. This is the value of ListTrafficStatsResponse.next_page_token returned from the previous call to `ListTrafficStats` method. |