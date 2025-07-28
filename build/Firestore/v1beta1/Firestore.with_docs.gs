
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

    this.projects.databases = {};

    /**
     * Exports a copy of all or a subset of documents from Google Cloud Firestore to another storage system, such as Google Cloud Storage. Recent updates to documents may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
     * @param {string} params.name - (Required) Database to export. Should be of the form: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.exportDocuments = (params) => this._makeRequest('v1beta1/{+name}:exportDocuments', 'POST', params);

    /**
     * Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
     * @param {string} params.name - (Required) Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.importDocuments = (params) => this._makeRequest('v1beta1/{+name}:importDocuments', 'POST', params);

    this.projects.databases.indexes = {};

    /**
     * Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single field cannot be created.
     * @param {string} params.parent - (Required) The name of the database this index will apply to. For example: `projects/{project_id}/databases/{database_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.indexes.create = (params) => this._makeRequest('v1beta1/{+parent}/indexes', 'POST', params);

    /**
     * Lists the indexes that match the specified filters.
     * @param {string} params.filter - 
     * @param {integer} params.pageSize - The standard List page size.
     * @param {string} params.pageToken - The standard List page token.
     * @param {string} params.parent - (Required) The database name. For example: `projects/{project_id}/databases/{database_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.indexes.list = (params) => this._makeRequest('v1beta1/{+parent}/indexes', 'GET', params);

    /**
     * Gets an index.
     * @param {string} params.name - (Required) The name of the index. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.indexes.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Deletes an index.
     * @param {string} params.name - (Required) The index name. For example: `projects/{project_id}/databases/{database_id}/indexes/{index_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.indexes.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.databases.documents = {};

    /**
     * Gets a single document.
     * @param {string} params.mask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} params.name - (Required) Required. The resource name of the Document to get. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * @param {string} params.readTime - Reads the version of the document at the given time. This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.
     * @param {string} params.transaction - Reads the document in a transaction.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

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
    this.projects.databases.documents.list = (params) => this._makeRequest('v1beta1/{+parent}/{collectionId}', 'GET', params);

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
    this.projects.databases.documents.listDocuments = (params) => this._makeRequest('v1beta1/{+parent}/{collectionId}', 'GET', params);

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
    this.projects.databases.documents.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a document.
     * @param {boolean} params.currentDocument.exists - When set to `true`, the target document must exist. When set to `false`, the target document must not exist.
     * @param {string} params.currentDocument.updateTime - When set, the target document must exist and have been last updated at that time. Timestamp must be microsecond aligned.
     * @param {string} params.name - (Required) Required. The resource name of the Document to delete. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Gets multiple documents. Documents returned by this method are not guaranteed to be returned in the same order that they were requested.
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.batchGet = (params) => this._makeRequest('v1beta1/{+database}/documents:batchGet', 'POST', params);

    /**
     * Starts a new transaction.
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.beginTransaction = (params) => this._makeRequest('v1beta1/{+database}/documents:beginTransaction', 'POST', params);

    /**
     * Commits a transaction, while optionally updating documents.
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.commit = (params) => this._makeRequest('v1beta1/{+database}/documents:commit', 'POST', params);

    /**
     * Rolls back a transaction.
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.rollback = (params) => this._makeRequest('v1beta1/{+database}/documents:rollback', 'POST', params);

    /**
     * Runs a query.
     * @param {string} params.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.runQuery = (params) => this._makeRequest('v1beta1/{+parent}:runQuery', 'POST', params);

    /**
     * Runs an aggregation query. Rather than producing Document results like Firestore.RunQuery, this API allows running an aggregation to produce a series of AggregationResult server-side. High-Level Example: ``` -- Return the number of documents in table given a filter. SELECT COUNT(*) FROM ( SELECT * FROM k where a = true ); ```
     * @param {string} params.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents` or `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.runAggregationQuery = (params) => this._makeRequest('v1beta1/{+parent}:runAggregationQuery', 'POST', params);

    /**
     * Partitions a query by returning partition cursors that can be used to run the query in parallel. The returned partition cursors are split points that can be used by RunQuery as starting/end points for the query results.
     * @param {string} params.parent - (Required) Required. The parent resource name. In the format: `projects/{project_id}/databases/{database_id}/documents`. Document resource names are not supported; only database resource names can be specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.partitionQuery = (params) => this._makeRequest('v1beta1/{+parent}:partitionQuery', 'POST', params);

    /**
     * Streams batches of document updates and deletes, in order. This method is only available via gRPC or WebChannel (not REST).
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`. This is only required in the first message.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.write = (params) => this._makeRequest('v1beta1/{+database}/documents:write', 'POST', params);

    /**
     * Listens to changes. This method is only available via gRPC or WebChannel (not REST).
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.listen = (params) => this._makeRequest('v1beta1/{+database}/documents:listen', 'POST', params);

    /**
     * Lists all the collection IDs underneath a document.
     * @param {string} params.parent - (Required) Required. The parent document. In the format: `projects/{project_id}/databases/{database_id}/documents/{document_path}`. For example: `projects/my-project/databases/my-database/documents/chatrooms/my-chatroom`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.listCollectionIds = (params) => this._makeRequest('v1beta1/{+parent}:listCollectionIds', 'POST', params);

    /**
     * Applies a batch of write operations. The BatchWrite method does not apply the write operations atomically and can apply them out of order. Method does not allow more than one write per document. Each write succeeds or fails independently. See the BatchWriteResponse for the success status of each write. If you require an atomically applied set of writes, use Commit instead.
     * @param {string} params.database - (Required) Required. The database name. In the format: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.batchWrite = (params) => this._makeRequest('v1beta1/{+database}/documents:batchWrite', 'POST', params);

    /**
     * Creates a new document.
     * @param {string} params.collectionId - (Required) Required. The collection ID, relative to `parent`, to list. For example: `chatrooms`.
     * @param {string} params.documentId - The client-assigned document ID to use for this document. Optional. If not specified, an ID will be assigned by the service.
     * @param {string} params.mask.fieldPaths - The list of field paths in the mask. See Document.fields for a field path syntax reference.
     * @param {string} params.parent - (Required) Required. The parent resource. For example: `projects/{project_id}/databases/{database_id}/documents` or `projects/{project_id}/databases/{database_id}/documents/chatrooms/{chatroom_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.documents.createDocument = (params) => this._makeRequest('v1beta1/{+parent}/{collectionId}', 'POST', params);
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
