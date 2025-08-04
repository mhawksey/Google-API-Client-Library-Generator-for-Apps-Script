# Cloud Firestore API - Apps Script Client Library

Auto-generated client library for using the **Cloud Firestore API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:21:44 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:21:44 GMT
- **Created:** Sun, 20 Jul 2025 16:33:53 GMT



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

### `projects.databases.indexes`

#### `projects.databases.indexes.create()`

Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the database this index will apply to. For example: `projects/{project_id}/databases/{database_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.databases.indexes.list()`

Lists the indexes that match the specified filters.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The database name. For example: `projects/{project_id}/databases/{database_id}` |
| `params.filter` | `string` | No |  |
| `params.pageSize` | `integer` | No | The standard List page size. |
| `params.pageToken` | `string` | No | The standard List page token. |

#### `projects.databases.indexes.get()`

Gets an index.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the index. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}` |

#### `projects.databases.indexes.delete()`

Deletes an index.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The index name. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}` |

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