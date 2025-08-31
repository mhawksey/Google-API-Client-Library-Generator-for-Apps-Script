# Cloud Firestore API - Apps Script Client Library

Auto-generated client library for using the **Cloud Firestore API (version: v1beta2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:35:54 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:21:47 GMT
- **Created:** Sun, 20 Jul 2025 16:33:56 GMT



---

## API Reference

### `projects`

### `projects.databases`

#### `projects.databases.exportDocuments()`

Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.importDocuments()`

Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.databases.collectionGroups`

### `projects.databases.collectionGroups.indexes`

#### `projects.databases.collectionGroups.indexes.create()`

Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.collectionGroups.indexes.list()`

Lists composite indexes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}` |
| `params.filter` | `string` | No | The filter to apply to list results. |
| `params.pageSize` | `integer` | No | The number of results to return. |
| `params.pageToken` | `string` | No | A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results. |

#### `projects.databases.collectionGroups.indexes.get()`

Gets a composite index.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}` |

#### `projects.databases.collectionGroups.indexes.delete()`

Deletes a composite index.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}` |

### `projects.databases.collectionGroups.fields`

#### `projects.databases.collectionGroups.fields.get()`

Gets the metadata and configuration for a Field.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}` |

#### `projects.databases.collectionGroups.fields.patch()`

Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration. |
| `params.updateMask` | `string` | No | A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.collectionGroups.fields.list()`

Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}` |
| `params.filter` | `string` | No | The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`. |
| `params.pageSize` | `integer` | No | The number of results to return. |
| `params.pageToken` | `string` | No | A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results. |