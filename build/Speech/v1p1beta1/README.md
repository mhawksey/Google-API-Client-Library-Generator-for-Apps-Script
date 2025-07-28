# Cloud Speech-to-Text API - Apps Script Client Library

Auto-generated client library for using the **Cloud Speech-to-Text API (version: v1p1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 22:07:53 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:40:28 GMT
- **Created:** Sun, 20 Jul 2025 16:54:56 GMT



---

## API Reference

### `operations`

#### `operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | No | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects`

### `projects.locations`

### `projects.locations.phraseSets`

#### `projects.locations.phraseSets.create()`

Create a set of phrase hints. Each item in the set can be a single word or a multi-word phrase. The items in the PhraseSet are favored by the recognition model when you send a call that includes the PhraseSet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this phrase set will be created. Format: `projects/{project}/locations/{location}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.phraseSets.get()`

Get a phrase set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the phrase set to retrieve. Format: `projects/{project}/locations/{location}/phraseSets/{phrase_set}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value. |

#### `projects.locations.phraseSets.list()`

List phrase sets.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of phrase set. Format: `projects/{project}/locations/{location}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value. |
| `params.pageSize` | `integer` | No | The maximum number of phrase sets to return. The service may return fewer than this value. If unspecified, at most 50 phrase sets will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListPhraseSet` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPhraseSet` must match the call that provided the page token. |

#### `projects.locations.phraseSets.patch()`

Update a phrase set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the phrase set. |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.phraseSets.delete()`

Delete a phrase set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the phrase set to delete. Format: `projects/{project}/locations/{location}/phraseSets/{phrase_set}` |

### `projects.locations.customClasses`

#### `projects.locations.customClasses.create()`

Create a custom class.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this custom class will be created. Format: `projects/{project}/locations/{location}/customClasses` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.customClasses.get()`

Get a custom class.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the custom class to retrieve. Format: `projects/{project}/locations/{location}/customClasses/{custom_class}` |

#### `projects.locations.customClasses.list()`

List custom classes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of custom classes. Format: `projects/{project}/locations/{location}/customClasses` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value. |
| `params.pageSize` | `integer` | No | The maximum number of custom classes to return. The service may return fewer than this value. If unspecified, at most 50 custom classes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListCustomClass` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCustomClass` must match the call that provided the page token. |

#### `projects.locations.customClasses.patch()`

Update a custom class.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the custom class. |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.customClasses.delete()`

Delete a custom class.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the custom class to delete. Format: `projects/{project}/locations/{location}/customClasses/{custom_class}` Speech-to-Text supports three locations: `global`, `us` (US North America), and `eu` (Europe). If you are calling the `speech.googleapis.com` endpoint, use the `global` location. To specify a region, use a [regional endpoint](https://cloud.google.com/speech-to-text/docs/endpoints) with matching `us` or `eu` location value. |

### `speech`

#### `speech.recognize()`

Performs synchronous speech recognition: receive results after all audio has been sent and processed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |

#### `speech.longrunningrecognize()`

Performs asynchronous speech recognition: receive results via the google.longrunning.Operations interface. Returns either an `Operation.error` or an `Operation.response` which contains a `LongRunningRecognizeResponse` message. For more information on asynchronous speech recognition, see the [how-to](https://cloud.google.com/speech-to-text/docs/async-recognize).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `object` | Yes | The request body. |