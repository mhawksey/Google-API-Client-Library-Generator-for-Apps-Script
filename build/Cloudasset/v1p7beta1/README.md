# Cloud Asset API - Apps Script Client Library

Auto-generated client library for using the **Cloud Asset API (version: v1p7beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:36:46 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:23:04 GMT
- **Created:** Sun, 20 Jul 2025 16:21:01 GMT



---

## API Reference

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `v1p7beta1`

#### `v1p7beta1.exportAssets()`

Exports assets with time and resource types to a given Cloud Storage location/BigQuery table. For Cloud Storage location destinations, the output format is newline-delimited JSON. Each line represents a google.cloud.asset.v1p7beta1.Asset in the JSON format; for BigQuery table destinations, the output table stores the fields in asset proto as columns. This API implements the google.longrunning.Operation API , which allows you to keep track of the export. We recommend intervals of at least 2 seconds with exponential retry to poll the export operation result. For regular-size resource parent, the export operation usually finishes within 5 minutes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The relative name of the root asset. This can only be an organization number (such as "organizations/123"), a project ID (such as "projects/my-project-id"), or a project number (such as "projects/12345"), or a folder number (such as "folders/123"). |
| `params.resource` | `object` | Yes | The request body. |