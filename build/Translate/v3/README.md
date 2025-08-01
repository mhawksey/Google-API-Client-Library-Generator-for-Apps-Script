# Cloud Translation API - Apps Script Client Library

Auto-generated client library for using the **Cloud Translation API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:56:16 GMT
- **Last Modified:** Sun, 27 Jul 2025 13:47:41 GMT
- **Created:** Sun, 20 Jul 2025 16:56:21 GMT



---

## API Reference

### `projects`

#### `projects.translateText()`

Translates input text and returns translated text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.romanizeText()`

Romanize input text written in non-Latin scripts to Latin text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.detectLanguage()`

Detects the language of text within a request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.getSupportedLanguages()`

Returns a list of supported languages for translation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for AutoML models. Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned. |
| `params.displayLanguageCode` | `string` | No | Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response. |
| `params.model` | `string` | No | Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model. |

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

#### `projects.locations.translateText()`

Translates input text and returns translated text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have same location-id), otherwise an INVALID_ARGUMENT (400) error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.romanizeText()`

Romanize input text written in non-Latin scripts to Latin text.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.detectLanguage()`

Detects the language of text within a request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}` or `projects/{project-number-or-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Only models within the same region (has same location-id) can be used. Otherwise an INVALID_ARGUMENT (400) error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.getSupportedLanguages()`

Returns a list of supported languages for translation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project or location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}` or `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for AutoML models. Only models within the same region (have same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned. |
| `params.displayLanguageCode` | `string` | No | Optional. The language to use to return localized, human readable names of supported languages. If missing, then display names are not returned in a response. |
| `params.model` | `string` | No | Optional. Get supported languages of this model. The format depends on model type: - AutoML Translation models: `projects/{project-number-or-id}/locations/{location-id}/models/{model-id}` - General (built-in) models: `projects/{project-number-or-id}/locations/{location-id}/models/general/nmt`, Returns languages supported by the specified model. If missing, we get supported languages of Google general NMT model. |

#### `projects.locations.translateDocument()`

Translates documents in synchronous mode.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. For global calls, use `projects/{project-number-or-id}/locations/global` or `projects/{project-number-or-id}`. Non-global location is required for requests using AutoML models or custom glossaries. Models and glossaries must be within the same region (have the same location-id), otherwise an INVALID_ARGUMENT (400) error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.batchTranslateText()`

Translates a large volume of text in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Location to make a call. Must refer to a caller's project. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.batchTranslateDocument()`

Translates a large volume of document in asynchronous batch mode. This function provides real-time output as the inputs are being processed. If caller cancels a request, the partial results (for an input file, it's all or nothing) may still be available on the specified output location. This call returns immediately and you can use google.longrunning.Operation.name to poll the status of the call.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. The `global` location is not supported for batch translation. Only AutoML Translation models or glossaries within the same region (have the same location-id) can be used, otherwise an INVALID_ARGUMENT (400) error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.adaptiveMtTranslate()`

Translate text using Adaptive MT.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Location to make a regional call. Format: `projects/{project-number-or-id}/locations/{location-id}`. |
| `params.resource` | `object` | Yes | The request body. |

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

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.operations.wait()`

Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to wait on. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.glossaries`

#### `projects.locations.glossaries.create()`

Creates a glossary and returns the long-running operation. Returns NOT_FOUND, if the project doesn't exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.patch()`

Updates a glossary. A LRO is used since the update can be async if the glossary's entry file is updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the glossary. Glossary names have the form `projects/{project-number-or-id}/locations/{location-id}/glossaries/{glossary-id}`. |
| `params.updateMask` | `string` | No | The list of fields to be updated. Currently only `display_name` and 'input_config' |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.list()`

Lists glossaries in a project. Returns NOT_FOUND, if the project doesn't exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the project from which to list all of the glossaries. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server may return fewer glossaries than requested. If unspecified, the server picks an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossariesResponse.next_page_token] returned from the previous call to `ListGlossaries` method. The first page is returned if `page_token`is empty or missing. |
| `params.filter` | `string` | No | Optional. Filter specifying constraints of a list operation. Specify the constraint by the format of "key=value", where key must be "src" or "tgt", and the value must be a valid language code. For multiple restrictions, concatenate them by "AND" (uppercase only), such as: "src=en-US AND tgt=zh-CN". Notice that the exact match is used here, which means using 'en-US' and 'en' can lead to different results, which depends on the language code you used when you create the glossary. For the unidirectional glossaries, the "src" and "tgt" add restrictions on the source and target language code separately. For the equivalent term set glossaries, the "src" and/or "tgt" add restrictions on the term set. For example: "src=en-US AND tgt=zh-CN" will only pick the unidirectional glossaries which exactly match the source language code as "en-US" and the target language code "zh-CN", but all equivalent term set glossaries which contain "en-US" and "zh-CN" in their language set will be picked. If missing, no filtering is performed. |

#### `projects.locations.glossaries.get()`

Gets a glossary. Returns NOT_FOUND, if the glossary doesn't exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the glossary to retrieve. |

#### `projects.locations.glossaries.delete()`

Deletes a glossary, or cancels glossary construction if the glossary isn't created yet. Returns NOT_FOUND, if the glossary doesn't exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the glossary to delete. |

### `projects.locations.glossaries.glossaryEntries`

#### `projects.locations.glossaries.glossaryEntries.get()`

Gets a single glossary entry by the given id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the glossary entry to get |

#### `projects.locations.glossaries.glossaryEntries.list()`

List the entries for the glossary.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent glossary resource name for listing the glossary's entries. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server may return fewer glossary entries than requested. If unspecified, the server picks an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. Typically, this is the value of [ListGlossaryEntriesResponse.next_page_token] returned from the previous call. The first page is returned if `page_token`is empty or missing. |

#### `projects.locations.glossaries.glossaryEntries.create()`

Creates a glossary entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the glossary to create the entry under. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.glossaryEntries.patch()`

Updates a glossary entry.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the entry. Format: `projects/*/locations/*/glossaries/*/glossaryEntries/*` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.glossaries.glossaryEntries.delete()`

Deletes a single entry from the glossary

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the glossary entry to delete |

### `projects.locations.datasets`

#### `projects.locations.datasets.create()`

Creates a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.get()`

Gets a Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the dataset to retrieve. |

#### `projects.locations.datasets.list()`

Lists datasets.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server can return fewer results than requested. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListDatasets call. |

#### `projects.locations.datasets.delete()`

Deletes a dataset and all of its contents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the dataset to delete. |

#### `projects.locations.datasets.importData()`

Import sentence pairs into translation Dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dataset` | `string` | Yes | Required. Name of the dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.datasets.exportData()`

Exports dataset's data to the provided output location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dataset` | `string` | Yes | Required. Name of the dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.datasets.examples`

#### `projects.locations.datasets.examples.list()`

Lists sentence pairs in the dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent dataset. In form of `projects/{project-number-or-id}/locations/{location-id}/datasets/{dataset-id}` |
| `params.filter` | `string` | No | Optional. An expression for filtering the examples that will be returned. Example filter: * `usage=TRAIN` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server can return fewer results than requested. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListExamples call. |

### `projects.locations.adaptiveMtDatasets`

#### `projects.locations.adaptiveMtDatasets.create()`

Creates an Adaptive MT dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.adaptiveMtDatasets.delete()`

Deletes an Adaptive MT dataset, including all its entries and associated metadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the dataset. In the form of `projects/{project-number-or-id}/locations/{location-id}/adaptiveMtDatasets/{adaptive-mt-dataset-id}` |

#### `projects.locations.adaptiveMtDatasets.get()`

Gets the Adaptive MT dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the dataset. In the form of `projects/{project-number-or-id}/locations/{location-id}/adaptiveMtDatasets/{adaptive-mt-dataset-id}` |

#### `projects.locations.adaptiveMtDatasets.list()`

Lists all Adaptive MT datasets for which the caller has read permission.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the project from which to list the Adaptive MT datasets. `projects/{project-number-or-id}/locations/{location-id}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server may return fewer results than requested. If unspecified, the server picks an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtDatasetsResponse.next_page_token returned from the previous call to `ListAdaptiveMtDatasets` method. The first page is returned if `page_token`is empty or missing. |
| `params.filter` | `string` | No | Optional. An expression for filtering the results of the request. Filter is not supported yet. |

#### `projects.locations.adaptiveMtDatasets.importAdaptiveMtFile()`

Imports an AdaptiveMtFile and adds all of its sentences into the AdaptiveMtDataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.adaptiveMtDatasets.adaptiveMtFiles`

#### `projects.locations.adaptiveMtDatasets.adaptiveMtFiles.get()`

Gets and AdaptiveMtFile

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the file, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` |

#### `projects.locations.adaptiveMtDatasets.adaptiveMtFiles.delete()`

Deletes an AdaptiveMtFile along with its sentences.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the file to delete, in form of `projects/{project-number-or-id}/locations/{location_id}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` |

#### `projects.locations.adaptiveMtDatasets.adaptiveMtFiles.list()`

Lists all AdaptiveMtFiles associated to an AdaptiveMtDataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the project from which to list the Adaptive MT files. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}` |
| `params.pageSize` | `integer` | No | Optional.  |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtFilesResponse.next_page_token returned from the previous call to `ListAdaptiveMtFiles` method. The first page is returned if `page_token`is empty or missing. |

### `projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences`

#### `projects.locations.adaptiveMtDatasets.adaptiveMtFiles.adaptiveMtSentences.list()`

Lists all AdaptiveMtSentences under a given file/dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the project from which to list the Adaptive MT files. The following format lists all sentences under a file. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` The following format lists all sentences within a dataset. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}` |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing. |

### `projects.locations.adaptiveMtDatasets.adaptiveMtSentences`

#### `projects.locations.adaptiveMtDatasets.adaptiveMtSentences.list()`

Lists all AdaptiveMtSentences under a given file/dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the project from which to list the Adaptive MT files. The following format lists all sentences under a file. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}/adaptiveMtFiles/{file}` The following format lists all sentences within a dataset. `projects/{project}/locations/{location}/adaptiveMtDatasets/{dataset}` |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. Typically, this is the value of ListAdaptiveMtSentencesRequest.next_page_token returned from the previous call to `ListTranslationMemories` method. The first page is returned if `page_token` is empty or missing. |

### `projects.locations.models`

#### `projects.locations.models.create()`

Creates a Model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project name, in form of `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.models.list()`

Lists models.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent project. In form of `projects/{project-number-or-id}/locations/{location-id}` |
| `params.filter` | `string` | No | Optional. An expression for filtering the models that will be returned. Supported filter: `dataset_id=${dataset_id}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. The server can return fewer results than requested. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results for the server to return. Typically obtained from next_page_token field in the response of a ListModels call. |

#### `projects.locations.models.get()`

Gets a model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the model to retrieve. |

#### `projects.locations.models.delete()`

Deletes a model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the model to delete. |