# Cloud Text-to-Speech API - Apps Script Client Library

Auto-generated client library for using the **Cloud Text-to-Speech API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:54:36 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:54:36 GMT
- **Created:** Sun, 20 Jul 2025 16:55:42 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.synthesizeLongAudio()`

Synthesizes long form text asynchronously.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The resource states of the request in the form of `projects/*/locations/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `voices`

#### `voices.list()`

Returns a list of Voice supported for synthesis.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.languageCode` | `string` | No | Optional. Recommended. [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt) language tag. If not specified, the API will return all supported voices. If specified, the ListVoices call will only return voices that can be used to synthesize this language_code. For example, if you specify `"en-NZ"`, all `"en-NZ"` voices will be returned. If you specify `"no"`, both `"no-\*"` (Norwegian) and `"nb-\*"` (Norwegian Bokmal) voices will be returned. |

### `text`

#### `text.synthesize()`

Synthesizes speech synchronously: receive results after all text input has been processed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |