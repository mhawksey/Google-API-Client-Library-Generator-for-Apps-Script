
/**
 * Google Apps Script client library for the Cloud Datastore API
 * Documentation URL: https://cloud.google.com/datastore/
 * @class
 */
class Datastore {
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
    this._rootUrl = 'https://datastore.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Exports a copy of all or a subset of entities from Google Cloud Datastore to another storage system, such as Google Cloud Storage. Recent updates to entities may not be reflected in the export. The export occurs in the background and its progress can be monitored and managed via the Operation resource that is created. The output of an export may only be used once the associated operation is done. If an export operation is cancelled before completion it may leave partial data behind in Google Cloud Storage.
     * @param {string} params.projectId - (Required) Required. Project ID against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.export = (params) => this._makeRequest('v1/projects/{projectId}:export', 'POST', params);

    /**
     * Imports entities into Google Cloud Datastore. Existing entities with the same key are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportEntities operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Datastore.
     * @param {string} params.projectId - (Required) Required. Project ID against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.import = (params) => this._makeRequest('v1/projects/{projectId}:import', 'POST', params);

    /**
     * Looks up entities by key.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.lookup = (params) => this._makeRequest('v1/projects/{projectId}:lookup', 'POST', params);

    /**
     * Queries for entities.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.runQuery = (params) => this._makeRequest('v1/projects/{projectId}:runQuery', 'POST', params);

    /**
     * Runs an aggregation query.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.runAggregationQuery = (params) => this._makeRequest('v1/projects/{projectId}:runAggregationQuery', 'POST', params);

    /**
     * Begins a new transaction.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.beginTransaction = (params) => this._makeRequest('v1/projects/{projectId}:beginTransaction', 'POST', params);

    /**
     * Commits a transaction, optionally creating, deleting or modifying some entities.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.commit = (params) => this._makeRequest('v1/projects/{projectId}:commit', 'POST', params);

    /**
     * Rolls back a transaction.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.rollback = (params) => this._makeRequest('v1/projects/{projectId}:rollback', 'POST', params);

    /**
     * Allocates IDs for the given keys, which is useful for referencing an entity before it is inserted.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.allocateIds = (params) => this._makeRequest('v1/projects/{projectId}:allocateIds', 'POST', params);

    /**
     * Prevents the supplied keys' IDs from being auto-allocated by Cloud Datastore.
     * @param {string} params.projectId - (Required) Required. The ID of the project against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.reserveIds = (params) => this._makeRequest('v1/projects/{projectId}:reserveIds', 'POST', params);

    this.projects.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.indexes = {};

    /**
     * Creates the specified index. A newly created index's initial state is `CREATING`. On completion of the returned google.longrunning.Operation, the state will be `READY`. If the index already exists, the call will return an `ALREADY_EXISTS` status. During index creation, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, removing the index with delete, then re-creating the index with create. Indexes with a single property cannot be created.
     * @param {string} params.projectId - (Required) Project ID against which to make the request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.indexes.create = (params) => this._makeRequest('v1/projects/{projectId}/indexes', 'POST', params);

    /**
     * Deletes an existing index. An index can only be deleted if it is in a `READY` or `ERROR` state. On successful execution of the request, the index will be in a `DELETING` state. And on completion of the returned google.longrunning.Operation, the index will be removed. During index deletion, the process could result in an error, in which case the index will move to the `ERROR` state. The process can be recovered by fixing the data that caused the error, followed by calling delete again.
     * @param {string} params.indexId - (Required) The resource ID of the index to delete.
     * @param {string} params.projectId - (Required) Project ID against which to make the request.
     * @return {object} The API response object.
     */
    this.projects.indexes.delete = (params) => this._makeRequest('v1/projects/{projectId}/indexes/{indexId}', 'DELETE', params);

    /**
     * Gets an index.
     * @param {string} params.indexId - (Required) The resource ID of the index to get.
     * @param {string} params.projectId - (Required) Project ID against which to make the request.
     * @return {object} The API response object.
     */
    this.projects.indexes.get = (params) => this._makeRequest('v1/projects/{projectId}/indexes/{indexId}', 'GET', params);

    /**
     * Lists the indexes that match the specified filters. Datastore uses an eventually consistent query to fetch the list of indexes and may occasionally return stale results.
     * @param {string} params.filter - 
     * @param {integer} params.pageSize - The maximum number of items to return. If zero, then all results will be returned.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.projectId - (Required) Project ID against which to make the request.
     * @return {object} The API response object.
     */
    this.projects.indexes.list = (params) => this._makeRequest('v1/projects/{projectId}/indexes', 'GET', params);
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
