# Web Risk API - Apps Script Client Library

Auto-generated client library for using the **Web Risk API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 22:09:30 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:49:13 GMT
- **Created:** Sun, 20 Jul 2025 17:03:00 GMT



---

## API Reference

### `projects`

### `projects.operations`

#### `projects.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.submissions`

#### `projects.submissions.create()`

Creates a Submission of a URI suspected of containing phishing content to be reviewed. If the result verifies the existence of malicious phishing content, the site will be added to the [Google's Social Engineering lists](https://support.google.com/webmasters/answer/6350487/) in order to protect users that could get exposed to this threat in the future. Only allowlisted projects can use this method during Early Access. Please reach out to Sales or your customer engineer to obtain access.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project that is making the submission. This string is in the format "projects/{project_number}". |
| `params.resource` | `object` | Yes | The request body. |

### `threatLists`

#### `threatLists.computeDiff()`

Gets the most recent threat list diffs. These diffs should be applied to a local database of hashes to keep it up-to-date. If the local database is empty or excessively out-of-date, a complete snapshot of the database will be returned. This Method only updates a single ThreatList at a time. To update multiple ThreatList databases, this method needs to be called once for each list.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.threatType` | `string` | No | Required. The threat list to update. Only a single ThreatType should be specified per request. If you want to handle multiple ThreatTypes, you must make one request per ThreatType. |
| `params.versionToken` | `string` | No | The current version token of the client for the requested list (the client version that was received from the last successful diff). If the client does not have a version token (this is the first time calling ComputeThreatListDiff), this may be left empty and a full database snapshot will be returned. |
| `params.constraints.maxDiffEntries` | `integer` | No | The maximum size in number of entries. The diff will not contain more entries than this value. This should be a power of 2 between 2**10 and 2**20. If zero, no diff size limit is set. |
| `params.constraints.maxDatabaseEntries` | `integer` | No | Sets the maximum number of entries that the client is willing to have in the local database. This should be a power of 2 between 2**10 and 2**20. If zero, no database size limit is set. |
| `params.constraints.supportedCompressions` | `string` | No | The compression types supported by the client. |

### `uris`

#### `uris.search()`

This method is used to check whether a URI is on a given threatList. Multiple threatLists may be searched in a single query. The response will list all requested threatLists the URI was found to match. If the URI is not found on any of the requested ThreatList an empty response will be returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.uri` | `string` | No | Required. The URI to be checked for matches. |
| `params.threatTypes` | `string` | No | Required. The ThreatLists to search in. Multiple ThreatLists may be specified. |

### `hashes`

#### `hashes.search()`

Gets the full hashes that match the requested hash prefix. This is used after a hash prefix is looked up in a threatList and there is a match. The client side threatList only holds partial hashes so the client must query this method to determine if there is a full hash match of a threat.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.hashPrefix` | `string` | No | A hash prefix, consisting of the most significant 4-32 bytes of a SHA256 hash. For JSON requests, this field is base64-encoded. Note that if this parameter is provided by a URI, it must be encoded using the web safe base64 variant (RFC 4648). |
| `params.threatTypes` | `string` | No | Required. The ThreatLists to search in. Multiple ThreatLists may be specified. |