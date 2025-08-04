# Firebase ML API - Apps Script Client Library

Auto-generated client library for using the **Firebase ML API (version: v1beta2)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:16:03 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:16:03 GMT
- **Created:** Sun, 20 Jul 2025 16:33:40 GMT



---

## API Reference

### `projects`

### `projects.models`

#### `projects.models.download()`

Gets Download information for a model. This is meant for downloading model resources onto devices. It gives very limited information about the model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the model to download. The name must have the form `projects/{project}/models/{model}` |

#### `projects.models.create()`

Creates a model in Firebase ML. The longrunning operation will eventually return a Model

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent project resource where the model is to be created. The parent must have the form `projects/{project_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.models.patch()`

Updates a model. The longrunning operation will eventually return a Model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the Model. Model names have the form `projects/{project_id}/models/{model_id}` The name is ignored when creating a model. |
| `params.updateMask` | `string` | No | The update mask |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.models.get()`

Gets a model resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the model to get. The name must have the form `projects/{project_id}/models/{model_id}` |

#### `projects.models.list()`

Lists the models

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent to list models for. The parent must have the form `projects/{project_id}' |
| `params.filter` | `string` | No | A filter for the list e.g. 'tags: abc' to list models which are tagged with "abc" |
| `params.pageSize` | `integer` | No | The maximum number of items to return |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |

#### `projects.models.delete()`

Deletes a model

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the model to delete. The name must have the form `projects/{project_id}/models/{model_id}` |

### `projects.operations`

#### `projects.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |