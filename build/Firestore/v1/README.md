# Cloud Firestore API - Apps Script Client Library

Auto-generated client library for using the **Cloud Firestore API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 31 Aug 2025 23:35:57 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:21:51 GMT
- **Created:** Sun, 20 Jul 2025 16:33:59 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.backups`

#### `projects.locations.backups.get()`

Gets information about a backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the backup to fetch. Format is `projects/{project}/locations/{location}/backups/{backup}`. |

#### `projects.locations.backups.list()`

Lists all the backups.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location to list backups from. Format is `projects/{project}/locations/{location}`. Use `{location} = '-'` to list backups from all locations for the given project. This allows listing backups from a single location or from all locations. |
| `params.filter` | `string` | No | An expression that filters the list of returned backups. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Backup are eligible for filtering: * `database_uid` (supports `=` only) |

#### `projects.locations.backups.delete()`

Deletes a backup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the backup to delete. format is `projects/{project}/locations/{location}/backups/{backup}`. |

### `projects.databases`

#### `projects.databases.exportDocuments()`

Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.importDocuments()`

Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.bulkDeleteDocuments()`

Bulk deletes a subset of documents from Google Cloud Firestore. Documents created or updated after the underlying system starts to process the request will not be deleted. The bulk delete occurs in the background and its progress can be monitored and managed via the Operation resource that is created. For more details on bulk delete behavior, refer to: https://cloud.google.com/firestore/docs/manage-data/bulk-delete

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Database to operate. Should be of the form: `projects/{project_id}/databases/{database_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.create()`

Create a database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. A parent name of the form `projects/{project_id}` |
| `params.databaseId` | `string` | No | Required. The ID to use for the database, which will become the final component of the database's resource name. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/. "(default)" database ID is also valid if the database is Standard edition. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.get()`

Gets information about a database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the form `projects/{project_id}/databases/{database_id}` |

#### `projects.databases.list()`

List all the databases in the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. A parent name of the form `projects/{project_id}` |
| `params.showDeleted` | `boolean` | No | If true, also returns deleted resources. |

#### `projects.databases.patch()`

Updates a database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the Database. Format: `projects/{project}/databases/{database}` |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.delete()`

Deletes a database.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the form `projects/{project_id}/databases/{database_id}` |
| `params.etag` | `string` | No | The current etag of the Database. If an etag is provided and does not match the current etag of the database, deletion will be blocked and a FAILED_PRECONDITION error will be returned. |

#### `projects.databases.restore()`

Creates a new database by restoring from an existing backup. The new database must be in the same cloud region or multi-region location as the existing backup. This behaves similar to FirestoreAdmin.CreateDatabase except instead of creating a new empty database, a new database is created with the database type, index configuration, and documents from an existing backup. The long-running operation can be used to track the progress of the restore, with the Operation's metadata field type being the RestoreDatabaseMetadata. The response type is the Database if the restore was successful. The new database is not readable or writeable until the LRO has completed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to restore the database in. Format is `projects/{project_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.clone()`

Creates a new database by cloning an existing one. The new database must be in the same cloud region or multi-region location as the existing database. This behaves similar to FirestoreAdmin.CreateDatabase except instead of creating a new empty database, a new database is created with the database type, index configuration, and documents from an existing database. The long-running operation can be used to track the progress of the clone, with the Operation's metadata field type being the CloneDatabaseMetadata. The response type is the Database if the clone was successful. The new database is not readable or writeable until the LRO has completed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to clone the database in. Format is `projects/{project_id}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.databases.operations`

#### `projects.databases.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.databases.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.databases.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.databases.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.databases.collectionGroups`

### `projects.databases.collectionGroups.indexes`

#### `projects.databases.collectionGroups.indexes.create()`

Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.collectionGroups.indexes.list()`

Lists composite indexes.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}` |
| `params.filter` | `string` | No | The filter to apply to list results. |
| `params.pageSize` | `integer` | No | The number of results to return. |
| `params.pageToken` | `string` | No | A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results. |

#### `projects.databases.collectionGroups.indexes.get()`

Gets a composite index.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}` |

#### `projects.databases.collectionGroups.indexes.delete()`

Deletes a composite index.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}` |

### `projects.databases.collectionGroups.fields`

#### `projects.databases.collectionGroups.fields.get()`

Gets the metadata and configuration for a Field.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}` |

#### `projects.databases.collectionGroups.fields.patch()`

Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A field name of the form: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path can be a simple field name, e.g. `address` or a path to fields within `map_value` , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths can be quoted using `` ` `` (backtick). The only character that must be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, `` ` `` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: `` `address.city` `` represents a field named `address.city`, not the map key `city` in the field `address`. `` `*` `` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration. |
| `params.updateMask` | `string` | No | A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.collectionGroups.fields.list()`

Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false` or `ttlConfig:*`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}` |
| `params.filter` | `string` | No | The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with a filter that includes `indexConfig.usesAncestorConfig:false` or `ttlConfig:*`. |
| `params.pageSize` | `integer` | No | The number of results to return. |
| `params.pageToken` | `string` | No | A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results. |

### `projects.databases.userCreds`

#### `projects.databases.userCreds.create()`

Create a user creds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. A parent name of the form `projects/{project_id}/databases/{database_id}` |
| `params.userCredsId` | `string` | No | Required. The ID to use for the user creds, which will become the final component of the user creds's resource name. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.userCreds.get()`

Gets a user creds resource. Note that the returned resource does not contain the secret value itself.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}` |

#### `projects.databases.userCreds.list()`

List all user creds in the database. Note that the returned resource does not contain the secret value itself.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. A parent database name of the form `projects/{project_id}/databases/{database_id}` |

#### `projects.databases.userCreds.enable()`

Enables a user creds. No-op if the user creds are already enabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.userCreds.disable()`

Disables a user creds. No-op if the user creds are already disabled.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.userCreds.resetPassword()`

Resets the password of a user creds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.userCreds.delete()`

Deletes a user creds.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}` |

### `projects.databases.backupSchedules`

#### `projects.databases.backupSchedules.create()`

Creates a backup schedule on a database. At most two backup schedules can be configured on a database, one daily backup schedule and one weekly backup schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent database. Format `projects/{project}/databases/{database}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.backupSchedules.get()`

Gets information about a backup schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the backup schedule. Format `projects/{project}/databases/{database}/backupSchedules/{backup_schedule}` |

#### `projects.databases.backupSchedules.list()`

List backup schedules.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent database. Format is `projects/{project}/databases/{database}`. |

#### `projects.databases.backupSchedules.patch()`

Updates a backup schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The unique backup schedule identifier across all locations and databases for the given project. This will be auto-assigned. Format is `projects/{project}/databases/{database}/backupSchedules/{backup_schedule}` |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.backupSchedules.delete()`

Deletes a backup schedule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the backup schedule. Format `projects/{project}/databases/{database}/backupSchedules/{backup_schedule}` |

### `projects.databases.documents`

#### `projects.databases.documents.get()`

Gets a single document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Document to get. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. |
| `params.mask.fieldPaths` | `string` | No | The list of field paths in the mask. See Document.fields for a field path syntax reference. |
| `params.transaction` | `string` | No | Reads the document in a transaction. |
| `params.readTime` | `string` | No | Reads the version of the document at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. |

#### `projects.databases.documents.list()`

Lists documents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` |
| `params.collectionId` | `string` | Yes | Optional. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`. This is optional, and when not provided, Firestore will list documents from all collections under the provided `parent`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of documents to return in a single response. Firestore may return fewer than this value. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListDocuments` response. Provide this to retrieve the subsequent page. When paginating, all other parameters (with the exception of `page_size`) must match the values set in the request that generated the page token. |
| `params.orderBy` | `string` | No | Optional. The optional ordering of the documents to return. For example: `priority desc, __name__ desc`. This mirrors the `ORDER BY` used in Firestore queries but in a string representation. When absent, documents are ordered based on `__name__ ASC`. |
| `params.mask.fieldPaths` | `string` | No | The list of field paths in the mask. See Document.fields for a field path syntax reference. |
| `params.transaction` | `string` | No | Perform the read as part of an already active transaction. |
| `params.readTime` | `string` | No | Perform the read at the provided time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. |
| `params.showMissing` | `boolean` | No | If the list should show missing documents. A document is missing if it does not exist, but there are sub-documents nested underneath it. When true, such missing documents will be returned with a key but will not have fields, `create_time`, or `update_time` set. Requests with `show_missing` may not specify `where` or `order_by`. |

#### `projects.databases.documents.listDocuments()`

Lists documents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` |
| `params.collectionId` | `string` | Yes | Optional. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`. This is optional, and when not provided, Firestore will list documents from all collections under the provided `parent`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of documents to return in a single response. Firestore may return fewer than this value. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListDocuments` response. Provide this to retrieve the subsequent page. When paginating, all other parameters (with the exception of `page_size`) must match the values set in the request that generated the page token. |
| `params.orderBy` | `string` | No | Optional. The optional ordering of the documents to return. For example: `priority desc, __name__ desc`. This mirrors the `ORDER BY` used in Firestore queries but in a string representation. When absent, documents are ordered based on `__name__ ASC`. |
| `params.mask.fieldPaths` | `string` | No | The list of field paths in the mask. See Document.fields for a field path syntax reference. |
| `params.transaction` | `string` | No | Perform the read as part of an already active transaction. |
| `params.readTime` | `string` | No | Perform the read at the provided time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days. |
| `params.showMissing` | `boolean` | No | If the list should show missing documents. A document is missing if it does not exist, but there are sub-documents nested underneath it. When true, such missing documents will be returned with a key but will not have fields, `create_time`, or `update_time` set. Requests with `show_missing` may not specify `where` or `order_by`. |

#### `projects.databases.documents.patch()`

Updates or inserts a document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`. |
| `params.updateMask.fieldPaths` | `string` | No | The list of field paths in the mask. See Document.fields for a field path syntax reference. |
| `params.mask.fieldPaths` | `string` | No | The list of field paths in the mask. See Document.fields for a field path syntax reference. |
| `params.currentDocument.exists` | `boolean` | No | When set to `true`, the target document must exist. When set to `false`, the target document must not exist. |
| `params.currentDocument.updateTime` | `string` | No | When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.documents.delete()`

Deletes a document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Document to delete. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. |
| `params.currentDocument.exists` | `boolean` | No | When set to `true`, the target document must exist. When set to `false`, the target document must not exist. |
| `params.currentDocument.updateTime` | `string` | No | When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned. |

#### `projects.databases.documents.batchGet()`

Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.documents.beginTransaction()`

Starts a new transaction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.documents.commit()`

Commits a transaction, while optionally updating documents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.documents.rollback()`

Rolls back a transaction.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.documents.runQuery()`

Runs a query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.documents.runAggregationQuery()`

Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT

* FROM k where a = true ); ```

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.documents.partitionQuery()`

Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents`. Document resource names are not supported; only database resource names can be specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.documents.write()`

Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. This is only required in the first message. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.documents.listen()`

Listens to changes. This method is only available via gRPC or WebChannel (not REST).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.documents.listCollectionIds()`

Lists all the collection IDs underneath a document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent document. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.documents.batchWrite()`

Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.database` | `string` | Yes | Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.documents.createDocument()`

Creates a new document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource. For example: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}` |
| `params.collectionId` | `string` | Yes | Required. The collection ID, relative to `parent`, to list. For example: `chatrooms`. |
| `params.documentId` | `string` | No | The client-assigned document ID to use for this document. Optional. If not specified, an ID will be assigned by the service. |
| `params.mask.fieldPaths` | `string` | No | The list of field paths in the mask. See Document.fields for a field path syntax reference. |
| `params.resource` | `object` | Yes | The request body. |