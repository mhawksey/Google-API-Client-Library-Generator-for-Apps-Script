# Ad Experience Report API - Apps Script Client Library

Auto-generated client library for using the **Ad Experience Report API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:21:03 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:02:36 GMT
- **Created:** Sun, 20 Jul 2025 16:10:47 GMT



---

## API Reference

### `sites`

#### `sites.get()`

Gets a site's Ad Experience Report summary.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the site whose summary to get, e.g. `sites/http%3A%2F%2Fwww.google.com%2F`. Format: `sites/{site}` |

### `violatingSites`

#### `violatingSites.list()`

Lists sites that are failing in the Ad Experience Report on at least one platform.

| Parameter | Type | Required | Description |
|---|---|---|---|