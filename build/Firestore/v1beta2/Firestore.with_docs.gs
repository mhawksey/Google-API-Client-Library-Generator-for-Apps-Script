
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
    this.projects.databases.exportDocuments = (params) => this._makeRequest('v1beta2/{+name}:exportDocuments', 'POST', params);

    /**
     * Imports documents into Google Cloud Firestore. Existing documents with the same name are overwritten. The import occurs in the background and its progress can be monitored and managed via the Operation resource that is created. If an ImportDocuments operation is cancelled, it is possible that a subset of the data has already been imported to Cloud Firestore.
     * @param {string} params.name - (Required) Database to import into. Should be of the form: `projects/{project_id}/databases/{database_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.importDocuments = (params) => this._makeRequest('v1beta2/{+name}:importDocuments', 'POST', params);

    this.projects.databases.collectionGroups = {};

    this.projects.databases.collectionGroups.indexes = {};

    /**
     * Creates a composite index. This returns a google.longrunning.Operation which may be used to track the status of the creation. The metadata for the operation will be the type IndexOperationMetadata.
     * @param {string} params.parent - (Required) A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.indexes.create = (params) => this._makeRequest('v1beta2/{+parent}/indexes', 'POST', params);

    /**
     * Lists composite indexes.
     * @param {string} params.filter - The filter to apply to list results.
     * @param {integer} params.pageSize - The number of results to return.
     * @param {string} params.pageToken - A page token, returned from a previous call to FirestoreAdmin.ListIndexes, that may be used to get the next page of results.
     * @param {string} params.parent - (Required) A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.indexes.list = (params) => this._makeRequest('v1beta2/{+parent}/indexes', 'GET', params);

    /**
     * Gets a composite index.
     * @param {string} params.name - (Required) A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.indexes.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Deletes a composite index.
     * @param {string} params.name - (Required) A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.indexes.delete = (params) => this._makeRequest('v1beta2/{+name}', 'DELETE', params);

    this.projects.databases.collectionGroups.fields = {};

    /**
     * Gets the metadata and configuration for a Field.
     * @param {string} params.name - (Required) A name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.fields.get = (params) => this._makeRequest('v1beta2/{+name}', 'GET', params);

    /**
     * Updates a field configuration. Currently, field updates apply only to single field index configuration. However, calls to FirestoreAdmin.UpdateField should provide a field mask to avoid changing any configuration that the caller isn't aware of. The field mask should be specified as: `{ paths: "index_config" }`. This call returns a google.longrunning.Operation which may be used to track the status of the field update. The metadata for the operation will be the type FieldOperationMetadata. To configure the default field settings for the database, use the special `Field` with resource name: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.
     * @param {string} params.name - (Required) A field name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}` A field path may be a simple field name, e.g. `address` or a path to fields within map_value , e.g. `address.city`, or a special field path. The only valid special field is `*`, which represents any field. Field paths may be quoted using ` (backtick). The only character that needs to be escaped within a quoted field path is the backtick character itself, escaped using a backslash. Special characters in field paths that must be quoted include: `*`, `.`, ``` (backtick), `[`, `]`, as well as any ascii symbolic characters. Examples: (Note: Comments here are written in markdown syntax, so there is an additional layer of backticks to represent a code block) `\`address.city\`` represents a field named `address.city`, not the map key `city` in the field `address`. `\`*\`` represents a field named `*`, not any field. A special `Field` contains the default indexing settings for all fields. This field's resource name is: `projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*` Indexes defined on this `Field` will be applied to all fields which do not have their own `Field` index configuration.
     * @param {string} params.updateMask - A mask, relative to the field. If specified, only configuration specified by this field_mask will be updated in the field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.fields.patch = (params) => this._makeRequest('v1beta2/{+name}', 'PATCH', params);

    /**
     * Lists the field configuration and metadata for this database. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
     * @param {string} params.filter - The filter to apply to list results. Currently, FirestoreAdmin.ListFields only supports listing fields that have been explicitly overridden. To issue this query, call FirestoreAdmin.ListFields with the filter set to `indexConfig.usesAncestorConfig:false`.
     * @param {integer} params.pageSize - The number of results to return.
     * @param {string} params.pageToken - A page token, returned from a previous call to FirestoreAdmin.ListFields, that may be used to get the next page of results.
     * @param {string} params.parent - (Required) A parent name of the form `projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`
     * @return {object} The API response object.
     */
    this.projects.databases.collectionGroups.fields.list = (params) => this._makeRequest('v1beta2/{+parent}/fields', 'GET', params);
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
