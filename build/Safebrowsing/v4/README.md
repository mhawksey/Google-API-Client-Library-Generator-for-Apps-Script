# Safe Browsing API - Apps Script Client Library

Auto-generated client library for using the **Safe Browsing API (version: v4)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 01 Jan 2026 01:06:40 GMT
- **Last Modified:** Thu, 01 Jan 2026 01:06:40 GMT
- **Created:** Sun, 20 Jul 2025 16:53:11 GMT



---

## API Reference

### `encodedUpdates`

#### `encodedUpdates.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientVersion` | `string` | No | The version of the client implementation. |
| `params.encodedRequest` | `string` | Yes | A serialized FetchThreatListUpdatesRequest proto. |
| `params.clientId` | `string` | No | A client ID that uniquely identifies the client implementation of the Safe Browsing API. |

### `fullHashes`

#### `fullHashes.find()`

Finds the full hashes that match the requested hash prefixes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `encodedFullHashes`

#### `encodedFullHashes.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.clientId` | `string` | No | A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API. |
| `params.encodedRequest` | `string` | Yes | A serialized FindFullHashesRequest proto. |
| `params.clientVersion` | `string` | No | The version of the client implementation. |

### `threatMatches`

#### `threatMatches.find()`

Finds the threat entries that match the Safe Browsing lists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `threatListUpdates`

#### `threatListUpdates.fetch()`

Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `threatLists`

#### `threatLists.list()`

Lists the Safe Browsing threat lists available for download.

| Parameter | Type | Required | Description |
|---|---|---|---|

### `threatHits`

#### `threatHits.create()`

Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |