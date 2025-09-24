# Safe Browsing API - Apps Script Client Library

Auto-generated client library for using the **Safe Browsing API (version: v5)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:46:57 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:46:57 GMT
- **Created:** Sun, 20 Jul 2025 16:53:16 GMT



---

## API Reference

### `hashes`

#### `hashes.search()`

Search for full hashes matching the specified prefixes. This is a custom method as defined by https://google.aip.dev/136 (the custom method refers to this method having a custom name within Google's general API development nomenclature; it does not refer to using a custom HTTP method).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.hashPrefixes` | `string` | No | Required. The hash prefixes to be looked up. Clients MUST NOT send more than 1000 hash prefixes. However, following the URL processing procedure, clients SHOULD NOT need to send more than 30 hash prefixes. Currently each hash prefix is required to be exactly 4 bytes long. This MAY be relaxed in the future. |

### `hashList`

#### `hashList.get()`

Get the latest contents of a hash list. A hash list may either by a threat list or a non-threat list such as the Global Cache. This is a standard Get method as defined by https://google.aip.dev/131 and the HTTP method is also GET.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of this particular hash list. It may be a threat list, or it may be the Global Cache. |
| `params.version` | `string` | No | The version of the hash list that the client already has. If this is the first time the client is fetching the hash list, this field MUST be left empty. Otherwise, the client SHOULD supply the version previously received from the server. The client MUST NOT manipulate those bytes. **What's new in V5**: in V4 of the API, this was called `states`; it is now renamed to `version` for clarity. |
| `params.sizeConstraints.maxUpdateEntries` | `integer` | No | The maximum size in number of entries. The update will not contain more entries than this value, but it is possible that the update will contain fewer entries than this value. This MUST be at least 1024. If omitted or zero, no update size limit is set. |
| `params.sizeConstraints.maxDatabaseEntries` | `integer` | No | Sets the maximum number of entries that the client is willing to have in the local database for the list. (The server MAY cause the client to store less than this number of entries.) If omitted or zero, no database size limit is set. |

### `hashLists`

#### `hashLists.list()`

List hash lists. In the V5 API, Google will never remove a hash list that has ever been returned by this method. This enables clients to skip using this method and simply hard-code all hash lists they need. This is a standard List method as defined by https://google.aip.dev/132 and the HTTP method is GET.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The maximum number of hash lists to return. The service may return fewer than this value. If unspecified, the server will choose a page size, which may be larger than the number of hash lists so that pagination is not necessary. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListHashLists` call. Provide this to retrieve the subsequent page. |

#### `hashLists.batchGet()`

Get multiple hash lists at once. It is very common for a client to need to get multiple hash lists. Using this method is preferred over using the regular Get method multiple times. This is a standard batch Get method as defined by https://google.aip.dev/231 and the HTTP method is also GET.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.names` | `string` | No | Required. The names of the particular hash lists. The list MAY be a threat list, or it may be the Global Cache. The names MUST NOT contain duplicates; if they did, the client will get an error. |
| `params.version` | `string` | No | The versions of the hash list that the client already has. If this is the first time the client is fetching the hash lists, the field should be left empty. Otherwise, the client should supply the versions previously received from the server. The client MUST NOT manipulate those bytes. The client need not send the versions in the same order as the corresponding list names. The client may send fewer or more versions in a request than there are names. However the client MUST NOT send multiple versions that correspond to the same name; if it did, the client will get an error. Historical note: in V4 of the API, this was called `states`; it is now renamed to `version` for clarity. |
| `params.sizeConstraints.maxUpdateEntries` | `integer` | No | The maximum size in number of entries. The update will not contain more entries than this value, but it is possible that the update will contain fewer entries than this value. This MUST be at least 1024. If omitted or zero, no update size limit is set. |
| `params.sizeConstraints.maxDatabaseEntries` | `integer` | No | Sets the maximum number of entries that the client is willing to have in the local database for the list. (The server MAY cause the client to store less than this number of entries.) If omitted or zero, no database size limit is set. |