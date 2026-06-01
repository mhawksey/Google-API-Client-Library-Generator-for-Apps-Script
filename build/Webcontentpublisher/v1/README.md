# Web Content Publisher API - Apps Script Client Library

Auto-generated client library for using the **Web Content Publisher API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 01 Jun 2026 00:24:53 GMT
- **Last Modified:** Mon, 01 Jun 2026 00:24:53 GMT
- **Created:** Mon, 01 Jun 2026 00:24:53 GMT



---

## API Reference

### `publications`

#### `publications.checkFreeAccess()`

Checks if a user is eligible for free article access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the publication. Format: publications/{publication_id} |
| `params.httpReferrer` | `string` | No | Required. The HTTP referrer. |
| `params.uri` | `string` | No | Required. The URI of the content. |