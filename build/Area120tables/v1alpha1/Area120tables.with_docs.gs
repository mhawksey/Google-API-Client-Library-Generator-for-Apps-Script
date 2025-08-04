
/**
 * Google Apps Script client library for the Area120 Tables API
 * Documentation URL: https://support.google.com/area120-tables/answer/10011390
 * @class
 */
class Area120tables {
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
    this._rootUrl = 'https://area120tables.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.tables = {};

    /**
     * Gets a table. Returns NOT_FOUND if the table does not exist.
     * @param {string} params.name - (Required) Required. The name of the table to retrieve. Format: tables/{table}
     * @return {object} The API response object.
     */
    this.tables.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists tables for the user.
     * @param {string} params.orderBy - Optional. Sorting order for the list of tables on createTime/updateTime.
     * @param {integer} params.pageSize - The maximum number of tables to return. The service may return fewer than this value. If unspecified, at most 20 tables are returned. The maximum value is 100; values above 100 are coerced to 100.
     * @param {string} params.pageToken - A page token, received from a previous `ListTables` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTables` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.tables.list = (params) => this._makeRequest('v1alpha1/tables', 'GET', params);

    this.tables.rows = {};

    /**
     * Gets a row. Returns NOT_FOUND if the row does not exist in the table.
     * @param {string} params.name - (Required) Required. The name of the row to retrieve. Format: tables/{table}/rows/{row}
     * @param {string} params.view - Optional. Column key to use for values in the row. Defaults to user entered name.
     * @return {object} The API response object.
     */
    this.tables.rows.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists rows in a table. Returns NOT_FOUND if the table does not exist.
     * @param {string} params.filter - Optional. Filter to only include resources matching the requirements. For more information, see [Filtering list results](https://support.google.com/area120-tables/answer/10503371).
     * @param {string} params.orderBy - Optional. Sorting order for the list of rows on createTime/updateTime.
     * @param {integer} params.pageSize - The maximum number of rows to return. The service may return fewer than this value. If unspecified, at most 50 rows are returned. The maximum value is 1,000; values above 1,000 are coerced to 1,000.
     * @param {string} params.pageToken - A page token, received from a previous `ListRows` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRows` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent table. Format: tables/{table}
     * @param {string} params.view - Optional. Column key to use for values in the row. Defaults to user entered name.
     * @return {object} The API response object.
     */
    this.tables.rows.list = (params) => this._makeRequest('v1alpha1/{+parent}/rows', 'GET', params);

    /**
     * Creates a row.
     * @param {string} params.parent - (Required) Required. The parent table where this row will be created. Format: tables/{table}
     * @param {string} params.view - Optional. Column key to use for values in the row. Defaults to user entered name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tables.rows.create = (params) => this._makeRequest('v1alpha1/{+parent}/rows', 'POST', params);

    /**
     * Creates multiple rows.
     * @param {string} params.parent - (Required) Required. The parent table where the rows will be created. Format: tables/{table}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tables.rows.batchCreate = (params) => this._makeRequest('v1alpha1/{+parent}/rows:batchCreate', 'POST', params);

    /**
     * Updates a row.
     * @param {string} params.name - (Required) The resource name of the row. Row names have the form `tables/{table}/rows/{row}`. The name is ignored when creating a row.
     * @param {string} params.updateMask - The list of fields to update.
     * @param {string} params.view - Optional. Column key to use for values in the row. Defaults to user entered name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tables.rows.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Updates multiple rows.
     * @param {string} params.parent - (Required) Required. The parent table shared by all rows being updated. Format: tables/{table}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tables.rows.batchUpdate = (params) => this._makeRequest('v1alpha1/{+parent}/rows:batchUpdate', 'POST', params);

    /**
     * Deletes a row.
     * @param {string} params.name - (Required) Required. The name of the row to delete. Format: tables/{table}/rows/{row}
     * @return {object} The API response object.
     */
    this.tables.rows.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Deletes multiple rows.
     * @param {string} params.parent - (Required) Required. The parent table shared by all rows being deleted. Format: tables/{table}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.tables.rows.batchDelete = (params) => this._makeRequest('v1alpha1/{+parent}/rows:batchDelete', 'POST', params);

    this.workspaces = {};

    /**
     * Gets a workspace. Returns NOT_FOUND if the workspace does not exist.
     * @param {string} params.name - (Required) Required. The name of the workspace to retrieve. Format: workspaces/{workspace}
     * @return {object} The API response object.
     */
    this.workspaces.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Lists workspaces for the user.
     * @param {integer} params.pageSize - The maximum number of workspaces to return. The service may return fewer than this value. If unspecified, at most 10 workspaces are returned. The maximum value is 25; values above 25 are coerced to 25.
     * @param {string} params.pageToken - A page token, received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.workspaces.list = (params) => this._makeRequest('v1alpha1/workspaces', 'GET', params);
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
