# Web Search Indexing API - Apps Script Client Library

Auto-generated client library for using the **Web Search Indexing API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:27:28 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:27:28 GMT
- **Created:** Sun, 20 Jul 2025 16:35:28 GMT



---

## API Reference

### `urlNotifications`

#### `urlNotifications.publish()`

Notifies that a URL has been updated or deleted.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `urlNotifications.getMetadata()`

Gets metadata about a Web Document. This method can _only_ be used to query URLs that were previously seen in successful Indexing API notifications. Includes the latest `UrlNotification` received via this API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.url` | `string` | No | URL that is being queried. |