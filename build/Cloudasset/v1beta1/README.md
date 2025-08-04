# Cloud Asset API - Apps Script Client Library

Auto-generated client library for using the **Cloud Asset API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:01:18 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:01:18 GMT
- **Created:** Sun, 20 Jul 2025 16:21:04 GMT



---

## API Reference

### `projects`

#### `projects.exportAssets()`

Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), a project number (such as "projects/12345"), or a folder number (such as "folders/123"). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.batchGetAssetsHistory()`

Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345"). |
| `params.assetNames` | `string` | No | A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info. The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request. |
| `params.contentType` | `string` | No | Optional. The content type. |
| `params.readTimeWindow.startTime` | `string` | No | Start time of the time window (exclusive). |
| `params.readTimeWindow.endTime` | `string` | No | End time of the time window (inclusive). If not specified, the current timestamp is used instead. |

### `projects.operations`

#### `projects.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `folders`

#### `folders.exportAssets()`

Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), a project number (such as "projects/12345"), or a folder number (such as "folders/123"). |
| `params.resource` | `object` | Yes | The request body. |

### `folders.operations`

#### `folders.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `organizations`

#### `organizations.exportAssets()`

Exports assets with time and resource types to a given Cloud Storage location. The output format is newline-delimited JSON. This API implements the google.longrunning.Operation API allowing you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), a project number (such as "projects/12345"), or a folder number (such as "folders/123"). |
| `params.resource` | `object` | Yes | The request body. |

#### `organizations.batchGetAssetsHistory()`

Batch gets the update history of assets that overlap a time window. For IAM_POLICY content, this API outputs history when the asset and its attached IAM POLICY both exist. This can create gaps in the output history. Otherwise, this API outputs history with asset in both non-delete or deleted status. If a specified asset does not exist, this API returns an INVALID_ARGUMENT error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The relative name of the root asset. It can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id")", or a project number (such as "projects/12345"). |
| `params.assetNames` | `string` | No | A list of the full names of the assets. For example: `//compute.googleapis.com/projects/my_project_123/zones/zone1/instances/instance1`. See [Resource Names](https://cloud.google.com/apis/design/resource_names#full_resource_name) for more info. The request becomes a no-op if the asset name list is empty, and the max size of the asset name list is 100 in one request. |
| `params.contentType` | `string` | No | Optional. The content type. |
| `params.readTimeWindow.startTime` | `string` | No | Start time of the time window (exclusive). |
| `params.readTimeWindow.endTime` | `string` | No | End time of the time window (inclusive). If not specified, the current timestamp is used instead. |

### `organizations.operations`

#### `organizations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |