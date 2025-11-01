# Chrome UX Report API - Apps Script Client Library

Auto-generated client library for using the **Chrome UX Report API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sat, 01 Nov 2025 00:25:33 GMT
- **Last Modified:** Sat, 01 Nov 2025 00:25:33 GMT
- **Created:** Sun, 20 Jul 2025 16:15:18 GMT



---

## API Reference

### `records`

#### `records.queryHistoryRecord()`

Queries the Chrome User Experience Report for a timeseries `history record` for a given site. Returns a `history record` that contains one or more `metric timeseries` corresponding to performance data about the requested site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `records.queryRecord()`

Queries the Chrome User Experience for a single `record` for a given site. Returns a `record` that contains one or more `metrics` corresponding to performance data about the requested site.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |