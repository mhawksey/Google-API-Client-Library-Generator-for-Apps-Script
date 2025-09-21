
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://firestore.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    this.projects.databases = {};

    /**
     * Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.exportDocuments = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:exportDocuments', 'POST', apiParams, clientConfig);

    /**
     * Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.importDocuments = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}:importDocuments', 'POST', apiParams, clientConfig);

    this.projects.databases.indexes = {};

    /**
     * Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The name of the database this index will apply to. For example: `projects/{project_id}/databases/{database_id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.indexes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/indexes', 'POST', apiParams, clientConfig);

    /**
     * Lists the indexes that match the specified filters.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - 
     * @param {integer} apiParams.pageSize - The standard List page size.
     * @param {string} apiParams.pageToken - The standard List page token.
     * @param {string} apiParams.parent - (Required) The database name. For example: `projects/{project_id}/databases/{database_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.indexes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/indexes', 'GET', apiParams, clientConfig);

    /**
     * Gets an index.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the index. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.indexes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes an index.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The index name. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.indexes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.databases.documents = {};

    /**
     * Gets a single document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.mask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} apiParams.name - (Required) Required. The resource name of the Document to get. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * @param {string} apiParams.readTime - Reads the version of the document at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     * @param {string} apiParams.transaction - Reads the document in a transaction.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists documents.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.collectionId - (Required) Optional. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`. This is optional, and when not provided, Firestore will list documents from all collections under the provided `parent`.
     * @param {string} apiParams.mask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} apiParams.orderBy - Optional. The optional ordering of the documents to return. For example: `priority desc, __name__ desc`. This mirrors the `ORDER BY` used in Firestore queries but in a string representation. When absent, documents are ordered based on `__name__ ASC`.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of documents to return in a single response. Firestore may return fewer than this value.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListDocuments` response. Provide this to retrieve the subsequent page. When paginating, all other parameters (with the exception of `page_size`) must match the values set in the request that generated the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {string} apiParams.readTime - Perform the read at the provided time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     * @param {boolean} apiParams.showMissing - If the list should show missing documents. A document is missing if it does not exist, but there are sub-documents nested underneath it. When true, such missing documents will be returned with a key but will not have fields, `create_time`, or `update_time` set. Requests with `show_missing` may not specify `where` or `order_by`.
     * @param {string} apiParams.transaction - Perform the read as part of an already active transaction.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/{collectionId}', 'GET', apiParams, clientConfig);

    /**
     * Lists documents.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.collectionId - (Required) Optional. The collection ID, relative to `parent`, to list. For example: `chatrooms` or `messages`. This is optional, and when not provided, Firestore will list documents from all collections under the provided `parent`.
     * @param {string} apiParams.mask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} apiParams.orderBy - Optional. The optional ordering of the documents to return. For example: `priority desc, __name__ desc`. This mirrors the `ORDER BY` used in Firestore queries but in a string representation. When absent, documents are ordered based on `__name__ ASC`.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of documents to return in a single response. Firestore may return fewer than this value.
     * @param {string} apiParams.pageToken - Optional. A page token, received from a previous `ListDocuments` response. Provide this to retrieve the subsequent page. When paginating, all other parameters (with the exception of `page_size`) must match the values set in the request that generated the page token.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {string} apiParams.readTime - Perform the read at the provided time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     * @param {boolean} apiParams.showMissing - If the list should show missing documents. A document is missing if it does not exist, but there are sub-documents nested underneath it. When true, such missing documents will be returned with a key but will not have fields, `create_time`, or `update_time` set. Requests with `show_missing` may not specify `where` or `order_by`.
     * @param {string} apiParams.transaction - Perform the read as part of an already active transaction.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.listDocuments = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/{collectionId}', 'GET', apiParams, clientConfig);

    /**
     * Updates or inserts a document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.currentDocument.exists - When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     * @param {string} apiParams.currentDocument.updateTime - When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     * @param {string} apiParams.mask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} apiParams.name - (Required) The resource name of the document, for example `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * @param {string} apiParams.updateMask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.currentDocument.exists - When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     * @param {string} apiParams.currentDocument.updateTime - When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     * @param {string} apiParams.name - (Required) Required. The resource name of the Document to delete. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.batchGet = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+database}/documents:batchGet', 'POST', apiParams, clientConfig);

    /**
     * Starts a new transaction.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.beginTransaction = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+database}/documents:beginTransaction', 'POST', apiParams, clientConfig);

    /**
     * Commits a transaction, while optionally updating documents.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.commit = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+database}/documents:commit', 'POST', apiParams, clientConfig);

    /**
     * Rolls back a transaction.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.rollback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+database}/documents:rollback', 'POST', apiParams, clientConfig);

    /**
     * Runs a query.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.runQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:runQuery', 'POST', apiParams, clientConfig);

    /**
     * Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.runAggregationQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:runAggregationQuery', 'POST', apiParams, clientConfig);

    /**
     * Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents`. Document resource names are not supported; only database resource names can be specified.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.partitionQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:partitionQuery', 'POST', apiParams, clientConfig);

    /**
     * Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. This is only required in the first message.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.write = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+database}/documents:write', 'POST', apiParams, clientConfig);

    /**
     * Listens to changes. This method is only available via gRPC or WebChannel (not REST).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.listen = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+database}/documents:listen', 'POST', apiParams, clientConfig);

    /**
     * Lists all the collection IDs underneath a document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent document. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.listCollectionIds = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}:listCollectionIds', 'POST', apiParams, clientConfig);

    /**
     * Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.batchWrite = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+database}/documents:batchWrite', 'POST', apiParams, clientConfig);

    /**
     * Creates a new document.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.collectionId - (Required) Required. The collection ID, relative to `parent`, to list. For example: `chatrooms`.
     * @param {string} apiParams.documentId - The client-assigned document ID to use for this document. Optional. If not specified, an ID will be assigned by the service.
     * @param {string} apiParams.mask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} apiParams.parent - (Required) Required. The parent resource. For example: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.databases.documents.createDocument = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1beta1/{+parent}/{collectionId}', 'POST', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
