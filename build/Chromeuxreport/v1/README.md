# Chrome UX Report API - Apps Script Client Library

Auto-generated client library for using the **Chrome UX Report API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:23:54 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:22:53 GMT
- **Created:** Sun, 20 Jul 2025 16:15:18 GMT



---

## API Reference

### `records`

#### `records.queryRecord()`

Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `records.queryHistoryRecord()`

Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |