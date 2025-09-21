# Cloud Datastore API - Apps Script Client Library

Auto-generated client library for using the **Cloud Datastore API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:16:26 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:16:26 GMT
- **Created:** Sun, 20 Jul 2025 16:25:33 GMT



---

## API Reference

### `projects`

#### `projects.export()`

Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Project ID against which to make the request. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.import()`

Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Project ID against which to make the request. |
| `params.requestBody` | `object` | Yes | The request body. |