
/**
 * Google Apps Script client library for the Cloud Firestore API
 * Documentation URL: https://cloud.google.com/firestore
 * @class
 */
class Firestore {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://firestore.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.backups = {};

    /**
     * Gets information about a backup.
     * @param {string} params.name - (Required) Required. Name of the backup to fetch. Format is `projects/{project}/locations/{location}/backups/{backup}`.
     * @return {object} The API response object.
     */
    this.projects.locations.backups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all the backups.
     * @param {string} params.filter - An expression that filters the list of returned backups. A filter expression consists of a field name, a comparison operator, and a value for filtering. The value must be a string, a number, or a boolean. The comparison operator must be one of: `<`, `>`, `<=`, `>=`, `!=`, `=`, or `:`. Colon `:` is the contains operator. Filter rules are not case sensitive. The following fields in the Backup are eligible for filtering: * `database_uid` (supports `=` only)
     * @param {string} params.parent - (Required) Required. The location to list backups from. Format is `projects/{project}/locations/{location}`. Use `{location} = '-'` to list backups from all locations for the given project. This allows listing backups from a single location or from all locations.
     * @return {object} The API response object.
     */
    this.projects.locations.backups.list = (params) => this._makeRequest('v1/{+parent}/backups', 'GET', params);

    /**
     * Deletes a backup.
     * @param {string} params.name - (Required) Required. Name of the backup to delete. format is `projects/{project}/locations/{location}/backups/{backup}`.
     * @return {object} The API response object.
     */
    this.projects.locations.backups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.databases = {};

    /**
     * Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage. For more details on export behavior and output format, refer to: https://cloud.google.com/firestore/docs/manage-data/export-import
     * @param {string} params.name - (Required) Required. Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.exportDocuments = (params) => this._makeRequest('v1/{+name}:exportDocuments', 'POST', params);

    /**
     * Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
     * @param {string} params.name - (Required) Required. Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.importDocuments = (params) => this._makeRequest('v1/{+name}:importDocuments', 'POST', params);

    /**
     * Bulk deletes a subset of documents from Google Cloud Firestore. Documents created or updated after the underlying system starts to process the request will not be deleted. The bulk delete occurs in the background and its progress can be monitored and managed via the Operation resource that is created. For more details on bulk delete behavior, refer to: https://cloud.google.com/firestore/docs/manage-data/bulk-delete
     * @param {string} params.name - (Required) Required. Database to operate. Should be of the form: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.bulkDeleteDocuments = (params) => this._makeRequest('v1/{+name}:bulkDeleteDocuments', 'POST', params);

    /**
     * Create a database.
     * @param {string} params.databaseId - Required. The ID to use for the database, which will become the final component of the database's resource name. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/. "(default)" database ID is also valid if the database is Standard edition.
     * @param {string} params.parent - (Required) Required. A parent name of the form `projects/{project_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.create = (params) => this._makeRequest('v1/{+parent}/databases', 'POST', params);

    /**
     * Gets information about a database.
     * @param {string} params.name - (Required) Required. A name of the form `projects/{project_id}/databases/{database_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List all the databases in the project.
     * @param {string} params.parent - (Required) Required. A parent name of the form `projects/{project_id}`
     * @param {boolean} params.showDeleted - If true, also returns deleted resources.
     * @return {object} The API response object.
     */
    this.projects.databases.list = (params) => this._makeRequest('v1/{+parent}/databases', 'GET', params);

    /**
     * Updates a database.
     * @param {string} params.name - (Required) The resource name of the Database. Format: `projects/{project}/databases/{database}`
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a database.
     * @param {string} params.etag - The current etag of the Database. If an etag is provided and does not match the current etag of the database, deletion will be blocked and a FAILED_PRECONDITION error will be returned.
     * @param {string} params.name - (Required) Required. A name of the form `projects/{project_id}/databases/{database_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates a new database by restoring from an existing backup. The new database must be in the same cloud region or multi-region location as the existing backup. This behaves similar to FirestoreAdmin.CreateDatabase except instead of creating a new empty database, a new database is created with the database type, index configuration, and documents from an existing backup. The long-running operation can be used to track the progress of the restore, with the Operation's metadata field type being the RestoreDatabaseMetadata. The response type is the Database if the restore was successful. The new database is not readable or writeable until the LRO has completed.
     * @param {string} params.parent - (Required) Required. The project to restore the database in. Format is `projects/{project_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.restore = (params) => this._makeRequest('v1/{+parent}/databases:restore', 'POST', params);

    /**
     * Creates a new database by cloning an existing one. The new database must be in the same cloud region or multi-region location as the existing database. This behaves similar to FirestoreAdmin.CreateDatabase except instead of creating a new empty database, a new database is created with the database type, index configuration, and documents from an existing database. The long-running operation can be used to track the progress of the clone, with the Operation's metadata field type being the CloneDatabaseMetadata. The response type is the Database if the clone was successful. The new database is not readable or writeable until the LRO has completed.
     * @param {string} params.parent - (Required) Required. The project to clone the database in. Format is `projects/{project_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.clone = (params) => this._makeRequest('v1/{+parent}/databases:clone', 'POST', params);

    this.projects.databases.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.databases.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.databases.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.databases.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.databases.collectionGroups = {};

    this.projects.databases.collectionGroups.indexes = {};

    /**
     * Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
     * @param {string} params.parent - (Required) Required. A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.indexes.create = (params) => this._makeRequest('v1/{+parent}/indexes', 'POST', params);

    /**
     * Lists composite indexes.
     * @param {string} params.filter - The filter to apply to list results.
     * @param {integer} params.pageSize - The number of results to return.
     * @param {string} params.pageToken - A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results.
     * @param {string} params.parent - (Required) Required. A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.indexes.list = (params) => this._makeRequest('v1/{+parent}/indexes', 'GET', params);

    /**
     * Gets a composite index.
     * @param {string} params.name - (Required) Required. A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.indexes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a composite index.
     * @param {string} params.name - (Required) Required. A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.indexes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.databases.collectionGroups.fields = {};

    /**
     * Gets the metadata and configuration for a Field.
     * @param {string} params.name - (Required) Required. A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.fields.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.
     * @param {string} params.name - (Required) Required. A field name of the form: `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path can be a simple field name, e.g. `address` or a path to fields within `map_value` , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths can be quoted using `` ` `` (backtick). The only character that must be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, `` ` `` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: `` `address.city` `` represents a field named `address.city`, not the map key `city` in the field `address`. `` `*` `` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.
     * @param {string} params.updateMask - A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.fields.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false` or `ttlConfig:*`.
     * @param {string} params.filter - The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with a filter that includes `indexConfig.usesAncestorConfig:false` or `ttlConfig:*`.
     * @param {integer} params.pageSize - The number of results to return.
     * @param {string} params.pageToken - A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results.
     * @param {string} params.parent - (Required) Required. A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.fields.list = (params) => this._makeRequest('v1/{+parent}/fields', 'GET', params);

    this.projects.databases.userCreds = {};

    /**
     * Create a user creds.
     * @param {string} params.parent - (Required) Required. A parent name of the form `projects/{project_id}/databases/{database_id}`
     * @param {string} params.userCredsId - Required. The ID to use for the user creds, which will become the final component of the user creds's resource name. This value should be 4-63 characters. Valid characters are /a-z-/ with first character a letter and the last a letter or a number. Must not be UUID-like /[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.userCreds.create = (params) => this._makeRequest('v1/{+parent}/userCreds', 'POST', params);

    /**
     * Gets a user creds resource. Note that the returned resource does not contain the secret value itself.
     * @param {string} params.name - (Required) Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.userCreds.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List all user creds in the database. Note that the returned resource does not contain the secret value itself.
     * @param {string} params.parent - (Required) Required. A parent database name of the form `projects/{project_id}/databases/{database_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.userCreds.list = (params) => this._makeRequest('v1/{+parent}/userCreds', 'GET', params);

    /**
     * Enables a user creds. No-op if the user creds are already enabled.
     * @param {string} params.name - (Required) Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.userCreds.enable = (params) => this._makeRequest('v1/{+name}:enable', 'POST', params);

    /**
     * Disables a user creds. No-op if the user creds are already disabled.
     * @param {string} params.name - (Required) Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.userCreds.disable = (params) => this._makeRequest('v1/{+name}:disable', 'POST', params);

    /**
     * Resets the password of a user creds.
     * @param {string} params.name - (Required) Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.userCreds.resetPassword = (params) => this._makeRequest('v1/{+name}:resetPassword', 'POST', params);

    /**
     * Deletes a user creds.
     * @param {string} params.name - (Required) Required. A name of the form `projects/{project_id}/databases/{database_id}/userCreds/{user_creds_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.userCreds.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.databases.backupSchedules = {};

    /**
     * Creates a backup schedule on a database. At most two backup schedules can be configured on a database, one daily backup schedule and one weekly backup schedule.
     * @param {string} params.parent - (Required) Required. The parent database. Format `projects/{project}/databases/{database}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.backupSchedules.create = (params) => this._makeRequest('v1/{+parent}/backupSchedules', 'POST', params);

    /**
     * Gets information about a backup schedule.
     * @param {string} params.name - (Required) Required. The name of the backup schedule. Format `projects/{project}/databases/{database}/backupSchedules/{backup_schedule}`
     * @return {object} The API response object.
     */
    this.projects.databases.backupSchedules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List backup schedules.
     * @param {string} params.parent - (Required) Required. The parent database. Format is `projects/{project}/databases/{database}`.
     * @return {object} The API response object.
     */
    this.projects.databases.backupSchedules.list = (params) => this._makeRequest('v1/{+parent}/backupSchedules', 'GET', params);

    /**
     * Updates a backup schedule.
     * @param {string} params.name - (Required) Output only. The unique backup schedule identifier across all locations and databases for the given project. This will be auto-assigned. Format is `projects/{project}/databases/{database}/backupSchedules/{backup_schedule}`
     * @param {string} params.updateMask - The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.backupSchedules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a backup schedule.
     * @param {string} params.name - (Required) Required. The name of the backup schedule. Format `projects/{project}/databases/{database}/backupSchedules/{backup_schedule}`
     * @return {object} The API response object.
     */
    this.projects.databases.backupSchedules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.databases.documents = {};

    /**
     * Gets a single document.
     * @param {string} params.mask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} params.name - (Required) Required. The resource name of the Document to get. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * @param {string} params.readTime - Reads the version of the document at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     * @param {string} params.transaction - Reads the document in a transaction.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists documents.
     * @param {string} params.collectionId - (Required) Optional. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`. This is optional, and when not provided, Firestore will list documents from all collections under the provided `parent`.
     * @param {string} params.mask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} params.orderBy - Optional. The optional ordering of the documents to return. For example: `priority desc, __name__ desc`. This mirrors the `ORDER BY` used in Firestore queries but in a string representation. When absent, documents are ordered based on `__name__ ASC`.
     * @param {integer} params.pageSize - Optional. The maximum number of documents to return in a single response. Firestore may return fewer than this value.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListDocuments` response. Provide this to retrieve the subsequent page. When paginating, all other parameters (with the exception of `page_size`) must match the values set in the request that generated the page token.
     * @param {string} params.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {string} params.readTime - Perform the read at the provided time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     * @param {boolean} params.showMissing - If the list should show missing documents. A document is missing if it does not exist, but there are sub-documents nested underneath it. When true, such missing documents will be returned with a key but will not have fields, `create_time`, or `update_time` set. Requests with `show_missing` may not specify `where` or `order_by`.
     * @param {string} params.transaction - Perform the read as part of an already active transaction.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.list = (params) => this._makeRequest('v1/{+parent}/{collectionId}', 'GET', params);

    /**
     * Lists documents.
     * @param {string} params.collectionId - (Required) Optional. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`. This is optional, and when not provided, Firestore will list documents from all collections under the provided `parent`.
     * @param {string} params.mask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} params.orderBy - Optional. The optional ordering of the documents to return. For example: `priority desc, __name__ desc`. This mirrors the `ORDER BY` used in Firestore queries but in a string representation. When absent, documents are ordered based on `__name__ ASC`.
     * @param {integer} params.pageSize - Optional. The maximum number of documents to return in a single response. Firestore may return fewer than this value.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListDocuments` response. Provide this to retrieve the subsequent page. When paginating, all other parameters (with the exception of `page_size`) must match the values set in the request that generated the page token.
     * @param {string} params.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {string} params.readTime - Perform the read at the provided time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     * @param {boolean} params.showMissing - If the list should show missing documents. A document is missing if it does not exist, but there are sub-documents nested underneath it. When true, such missing documents will be returned with a key but will not have fields, `create_time`, or `update_time` set. Requests with `show_missing` may not specify `where` or `order_by`.
     * @param {string} params.transaction - Perform the read as part of an already active transaction.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.listDocuments = (params) => this._makeRequest('v1/{+parent}/{collectionId}', 'GET', params);

    /**
     * Updates or inserts a document.
     * @param {boolean} params.currentDocument.exists - When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     * @param {string} params.currentDocument.updateTime - When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     * @param {string} params.mask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} params.name - (Required) The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * @param {string} params.updateMask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a document.
     * @param {boolean} params.currentDocument.exists - When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     * @param {string} params.currentDocument.updateTime - When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     * @param {string} params.name - (Required) Required. The resource name of the Document to delete. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.batchGet = (params) => this._makeRequest('v1/{+database}/documents:batchGet', 'POST', params);

    /**
     * Starts a new transaction.
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.beginTransaction = (params) => this._makeRequest('v1/{+database}/documents:beginTransaction', 'POST', params);

    /**
     * Commits a transaction, while optionally updating documents.
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.commit = (params) => this._makeRequest('v1/{+database}/documents:commit', 'POST', params);

    /**
     * Rolls back a transaction.
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.rollback = (params) => this._makeRequest('v1/{+database}/documents:rollback', 'POST', params);

    /**
     * Runs a query.
     * @param {string} params.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.runQuery = (params) => this._makeRequest('v1/{+parent}:runQuery', 'POST', params);

    /**
     * Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
     * @param {string} params.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.runAggregationQuery = (params) => this._makeRequest('v1/{+parent}:runAggregationQuery', 'POST', params);

    /**
     * Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
     * @param {string} params.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents`. Document resource names are not supported; only database resource names can be specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.partitionQuery = (params) => this._makeRequest('v1/{+parent}:partitionQuery', 'POST', params);

    /**
     * Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. This is only required in the first message.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.write = (params) => this._makeRequest('v1/{+database}/documents:write', 'POST', params);

    /**
     * Listens to changes. This method is only available via gRPC or WebChannel (not REST).
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.listen = (params) => this._makeRequest('v1/{+database}/documents:listen', 'POST', params);

    /**
     * Lists all the collection IDs underneath a document.
     * @param {string} params.parent - (Required) Required. The parent document. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.listCollectionIds = (params) => this._makeRequest('v1/{+parent}:listCollectionIds', 'POST', params);

    /**
     * Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.batchWrite = (params) => this._makeRequest('v1/{+database}/documents:batchWrite', 'POST', params);

    /**
     * Creates a new document.
     * @param {string} params.collectionId - (Required) Required. The collection ID, relative to `parent`, to list. For example: `chatrooms`.
     * @param {string} params.documentId - The client-assigned document ID to use for this document. Optional. If not specified, an ID will be assigned by the service.
     * @param {string} params.mask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} params.parent - (Required) Required. The parent resource. For example: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.createDocument = (params) => this._makeRequest('v1/{+parent}/{collectionId}', 'POST', params);
  }

  /**
   * @private Builds the full request URL and options object.
   */
  _buildRequestDetails(path, httpMethod, params) {
    let url = this._rootUrl + this._servicePath + path;
    const remainingParams = { ...params };
    // Fix: Correctly handle {+param} style parameters and other potential special chars.
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
      const isPlus = placeholder.startsWith('{+');
      const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
      if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
        url = url.replace(placeholder, remainingParams[paramName]);
        delete remainingParams[paramName];
      }
    });

    const queryParts = [];
    for (const key in remainingParams) {
      if (key !== 'resource') {
        queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
      }
    }
    if (queryParts.length > 0) {
      url += '?' + queryParts.join('&');
    }

    const options = {
      method: httpMethod,
      headers: { 'Authorization': 'Bearer ' + this._token },
      contentType: 'application/json',
      muteHttpExceptions: true,
    };
    if (params && params.resource) {
      options.payload = JSON.stringify(params.resource);
    }
    
    return { url, options };
  }

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   */
  _makeRequest(path, httpMethod, params) {
    const { url, options } = this._buildRequestDetails(path, httpMethod, params);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseText = response.getContentText(); // Simplified call

      if (responseCode >= 200 && responseCode < 300) {
        return responseText ? JSON.parse(responseText) : {};
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      try {
        // Return parsed error if possible, otherwise a generic error object
        return JSON.parse(responseText);
      } catch (e) {
        return { error: { code: responseCode, message: responseText } };
      }
    }
    
    // This line is technically unreachable if retries >= 0, but good for safety.
    throw new Error('Request failed after multiple retries.');
  }
}
