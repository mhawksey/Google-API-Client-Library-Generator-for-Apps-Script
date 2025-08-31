# Places Aggregate API - Apps Script Client Library

Auto-generated client library for using the **Places Aggregate API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:22:47 GMT
- **Last Modified:** Mon, 04 Aug 2025 19:53:12 GMT
- **Created:** Sun, 20 Jul 2025 16:13:10 GMT



---

## API Reference

### `v1`

#### `v1.computeInsights()`

This method lets you retrieve insights about areas using a variety of filter such as: area, place type, operating status, price level and ratings. Currently "count" and "places" insights are supported. With "count" insights you can answer questions such as "How many restaurant are located in California that are operational, are inexpensive and have an average rating of at least 4 stars" (see `insight` enum for more details). With "places" insights, you can determine which places match the requested filter. Clients can then use those place resource names to fetch more details about each individual place using the Places API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |