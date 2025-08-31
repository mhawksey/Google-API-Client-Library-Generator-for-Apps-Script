# PageSpeed Insights API - Apps Script Client Library

Auto-generated client library for using the **PageSpeed Insights API (version: v5)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:46:04 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:35:30 GMT
- **Created:** Sun, 20 Jul 2025 16:44:56 GMT



---

## API Reference

### `pagespeedapi`

#### `pagespeedapi.runpagespeed()`

Runs PageSpeed analysis on the page at the specified URL, and returns PageSpeed scores, a list of suggestions to make that page faster, and other information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.category` | `string` | No | A Lighthouse category to run; if none are given, only Performance category will be run |
| `params.locale` | `string` | No | The locale used to localize formatted results |
| `params.strategy` | `string` | No | The analysis strategy (desktop or mobile) to use, and desktop is the default |
| `params.url` | `string` | Yes | Required. The URL to fetch and analyze |
| `params.utm_campaign` | `string` | No | Campaign name for analytics. |
| `params.utm_source` | `string` | No | Campaign source for analytics. |
| `params.captchaToken` | `string` | No | The captcha token passed when filling out a captcha. |