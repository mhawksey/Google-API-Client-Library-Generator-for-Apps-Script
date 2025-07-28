# Web Fonts Developer API - Apps Script Client Library

Auto-generated client library for using the **Web Fonts Developer API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:28:34 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:49:09 GMT
- **Created:** Sun, 20 Jul 2025 17:02:58 GMT



---

## API Reference

### `webfonts`

#### `webfonts.list()`

Retrieves the list of fonts currently served by the Google Fonts Developer API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.sort` | `string` | No | Enables sorting of the list. |
| `params.capability` | `string` | No | Controls the font urls in `Webfont.files`, by default, static ttf fonts are sent. |
| `params.family` | `string` | No | Filters by Webfont.family, using literal match. If not set, returns all families |
| `params.subset` | `string` | No | Filters by Webfont.subset, if subset is found in Webfont.subsets. If not set, returns all families. |
| `params.category` | `string` | No | Filters by Webfont.category, if category is found in Webfont.categories. If not set, returns all families. |