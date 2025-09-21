# Abusive Experience Report API - Apps Script Client Library

Auto-generated client library for using the **Abusive Experience Report API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:02:17 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:02:17 GMT
- **Created:** Sun, 20 Jul 2025 16:10:25 GMT



---

## API Reference

### `sites`

#### `sites.get()`

Gets a site's Abusive Experience Report summary.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the site whose summary to get, e.g. `sites/http%3A%2F%2Fwww.google.com%2F`. Format: `sites/{site}` |

### `violatingSites`

#### `violatingSites.list()`

Lists sites that are failing in the Abusive Experience Report.

| Parameter | Type | Required | Description |
|---|---|---|---|