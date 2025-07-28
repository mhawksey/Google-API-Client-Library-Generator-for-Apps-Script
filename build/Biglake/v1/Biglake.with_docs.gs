
/**
 * Google Apps Script client library for the BigLake API
 * Documentation URL: https://cloud.google.com/bigquery/
 * @class
 */
class Biglake {
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
    this._rootUrl = 'https://biglake.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.catalogs = {};

    /**
     * Creates a new catalog.
     * @param {string} params.catalogId - Required. The ID to use for the catalog, which will become the final component of the catalog's resource name.
     * @param {string} params.parent - (Required) Required. The parent resource where this catalog will be created. Format: projects/{project_id_or_number}/locations/{location_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.create = (params) => this._makeRequest('v1/{+parent}/catalogs', 'POST', params);

    /**
     * Deletes an existing catalog specified by the catalog ID.
     * @param {string} params.name - (Required) Required. The name of the catalog to delete. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets the catalog specified by the resource name.
     * @param {string} params.name - (Required) Required. The name of the catalog to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List all catalogs in a specified project.
     * @param {integer} params.pageSize - The maximum number of catalogs to return. The service may return fewer than this value. If unspecified, at most 50 catalogs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListCatalogs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCatalogs` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of catalogs. Format: projects/{project_id_or_number}/locations/{location_id}
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.list = (params) => this._makeRequest('v1/{+parent}/catalogs', 'GET', params);

    this.projects.locations.catalogs.databases = {};

    /**
     * Creates a new database.
     * @param {string} params.databaseId - Required. The ID to use for the database, which will become the final component of the database's resource name.
     * @param {string} params.parent - (Required) Required. The parent resource where this database will be created. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.databases.create = (params) => this._makeRequest('v1/{+parent}/databases', 'POST', params);

    /**
     * Deletes an existing database specified by the database ID.
     * @param {string} params.name - (Required) Required. The name of the database to delete. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.databases.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates an existing database specified by the database ID.
     * @param {string} params.name - (Required) Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
     * @param {string} params.updateMask - The list of fields to update. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.databases.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets the database specified by the resource name.
     * @param {string} params.name - (Required) Required. The name of the database to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.databases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List all databases in a specified catalog.
     * @param {integer} params.pageSize - The maximum number of databases to return. The service may return fewer than this value. If unspecified, at most 50 databases will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListDatabases` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDatabases` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of databases. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.databases.list = (params) => this._makeRequest('v1/{+parent}/databases', 'GET', params);

    this.projects.locations.catalogs.databases.tables = {};

    /**
     * Creates a new table.
     * @param {string} params.parent - (Required) Required. The parent resource where this table will be created. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
     * @param {string} params.tableId - Required. The ID to use for the table, which will become the final component of the table's resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.databases.tables.create = (params) => this._makeRequest('v1/{+parent}/tables', 'POST', params);

    /**
     * Deletes an existing table specified by the table ID.
     * @param {string} params.name - (Required) Required. The name of the table to delete. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id}
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.databases.tables.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates an existing table specified by the table ID.
     * @param {string} params.name - (Required) Output only. The resource name. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id}
     * @param {string} params.updateMask - The list of fields to update. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask If not set, defaults to all of the fields that are allowed to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.databases.tables.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Renames an existing table specified by the table ID.
     * @param {string} params.name - (Required) Required. The table's `name` field is used to identify the table to rename. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.databases.tables.rename = (params) => this._makeRequest('v1/{+name}:rename', 'POST', params);

    /**
     * Gets the table specified by the resource name.
     * @param {string} params.name - (Required) Required. The name of the table to retrieve. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}/tables/{table_id}
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.databases.tables.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List all tables in a specified database.
     * @param {integer} params.pageSize - The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 50 tables will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of tables. Format: projects/{project_id_or_number}/locations/{location_id}/catalogs/{catalog_id}/databases/{database_id}
     * @param {string} params.view - The view for the returned tables.
     * @return {object} The API response object.
     */
    this.projects.locations.catalogs.databases.tables.list = (params) => this._makeRequest('v1/{+parent}/tables', 'GET', params);
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
