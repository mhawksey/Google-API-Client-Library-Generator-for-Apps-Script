# Safe Browsing API - Apps Script Client Library

Auto-generated client library for using the **Safe Browsing API (version: v4)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 22:06:48 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:46:09 GMT
- **Created:** Sun, 20 Jul 2025 16:53:11 GMT



---

## API Reference

### `threatMatches`

#### `threatMatches.find()`

Finds the threat entries that match the Safe Browsing lists.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `threatListUpdates`

#### `threatListUpdates.fetch()`

Fetches the most recent threat list updates. A client can request updates for multiple lists at once.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `encodedUpdates`

#### `encodedUpdates.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.encodedRequest` | `string` | Yes | A serialized FetchThreatListUpdatesRequest proto. |
| `params.clientId` | `string` | No | A client ID that uniquely identifies the client implementation of the Safe Browsing API. |
| `params.clientVersion` | `string` | No | The version of the client implementation. |

### `fullHashes`

#### `fullHashes.find()`

Finds the full hashes that match the requested hash prefixes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `encodedFullHashes`

#### `encodedFullHashes.get()`
| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.encodedRequest` | `string` | Yes | A serialized FindFullHashesRequest proto. |
| `params.clientId` | `string` | No | A client ID that (hopefully) uniquely identifies the client implementation of the Safe Browsing API. |
| `params.clientVersion` | `string` | No | The version of the client implementation. |

### `threatHits`

#### `threatHits.create()`

Reports a Safe Browsing threat list hit to Google. Only projects with TRUSTED_REPORTER visibility can use this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

### `threatLists`

#### `threatLists.list()`

Lists the Safe Browsing threat lists available for download.

| Parameter | Type | Required | Description |
|---|---|---|---|