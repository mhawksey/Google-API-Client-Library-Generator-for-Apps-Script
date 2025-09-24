
/**
 * Google Apps Script client library for the Cloud Search API
 * Documentation URL: https://developers.google.com/cloud-search/docs/guides/
 * @class
 */
class Cloudsearch {
  /**
   * @constructor
   * @param {object} [config] - Optional configuration object.
   * @param {string} [config.token] - An explicit OAuth2 token.
   * @param {object} [config.backoff] - Configuration for exponential backoff.
   */
  constructor(config = {}) {
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://cloudsearch.googleapis.com/';
    this._servicePath = '';


    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.operations.lro = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The standard list filter.
     * @param {string} apiParams.name - (Required) The name of the operation's parent resource.
     * @param {integer} apiParams.pageSize - The standard list page size.
     * @param {string} apiParams.pageToken - The standard list page token.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.lro.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}/lro', 'GET', apiParams, clientConfig);

    this.debug = {};

    this.debug.datasources = {};

    this.debug.datasources.items = {};

    /**
     * Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.name - (Required) Item name, format: datasources/{source_id}/items/{item_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.debug.datasources.items.checkAccess = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/debug/{+name}:checkAccess', 'POST', apiParams, clientConfig);

    /**
     * Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Source name, format: datasources/{source_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.debug.datasources.items.searchByViewUrl = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/debug/{+name}/items:searchByViewUrl', 'POST', apiParams, clientConfig);

    this.debug.datasources.items.unmappedids = {};

    /**
     * List all unmapped identities for a specific item. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {integer} apiParams.pageSize - Maximum number of items to fetch in a request. Defaults to 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} apiParams.parent - (Required) The name of the item, in the following format: datasources/{source_id}/items/{ID}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.debug.datasources.items.unmappedids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/debug/{+parent}/unmappedids', 'GET', apiParams, clientConfig);

    this.debug.identitysources = {};

    this.debug.identitysources.unmappedids = {};

    /**
     * Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {integer} apiParams.pageSize - Maximum number of items to fetch in a request. Defaults to 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} apiParams.parent - (Required) The name of the identity source, in the following format: identitysources/{source_id}
     * @param {string} apiParams.resolutionStatusCode - Limit users selection to this status.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.debug.identitysources.unmappedids.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/debug/{+parent}/unmappedids', 'GET', apiParams, clientConfig);

    this.debug.identitysources.items = {};

    /**
     * Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.groupResourceName - 
     * @param {integer} apiParams.pageSize - Maximum number of items to fetch in a request. Defaults to 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} apiParams.parent - (Required) The name of the identity source, in the following format: identitysources/{source_id}}
     * @param {string} apiParams.userResourceName - 
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.debug.identitysources.items.listForunmappedidentity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/debug/{+parent}/items:forunmappedidentity', 'GET', apiParams, clientConfig);

    this.settings = {};

    /**
     * Get customer settings. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.getCustomer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/customer', 'GET', apiParams, clientConfig);

    /**
     * Update customer settings. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.updateMask - Update mask to control which fields get updated. If you specify a field in the update_mask but don't specify its value here, that field will be cleared. If the mask is not present or empty, all fields will be updated. Currently supported field paths: vpc_settings and audit_logging_settings
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.updateCustomer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/customer', 'PATCH', apiParams, clientConfig);

    this.settings.searchapplications = {};

    /**
     * Lists all search applications. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {integer} apiParams.pageSize - The maximum number of items to return.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous List request, if any. The default value is 10
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.searchapplications.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/searchapplications', 'GET', apiParams, clientConfig);

    /**
     * Gets the specified search application. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.name - (Required) The name of the search application. Format: searchapplications/{application_id}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.searchapplications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a search application. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.searchapplications.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/searchapplications', 'POST', apiParams, clientConfig);

    /**
     * Updates a search application. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the Search Application. Format: searchapplications/{application_id}.
     * @param {string} apiParams.updateMask - Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.searchapplications.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Updates a search application. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the Search Application. Format: searchapplications/{application_id}.
     * @param {string} apiParams.updateMask - Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.searchapplications.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a search application. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.name - (Required) The name of the search application to be deleted. Format: applications/{application_id}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.searchapplications.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the search application to be reset. Format: applications/{application_id}.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.searchapplications.reset = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}:reset', 'POST', apiParams, clientConfig);

    this.settings.datasources = {};

    /**
     * Creates a datasource. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.datasources.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/datasources', 'POST', apiParams, clientConfig);

    /**
     * Deletes a datasource. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.name - (Required) The name of the datasource. Format: datasources/{source_id}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.datasources.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets a datasource. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.name - (Required) The name of the datasource resource. Format: datasources/{source_id}.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.datasources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates a datasource. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.datasources.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'PUT', apiParams, clientConfig);

    /**
     * Updates a datasource. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.name - (Required) The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource.
     * @param {string} apiParams.updateMask - Only applies to [`settings.datasources.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.datasources/patch). Update mask to control which fields to update. Example field paths: `name`, `displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the source, that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.datasources.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists datasources. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {integer} apiParams.pageSize - Maximum number of datasources to fetch in a request. The max value is 1000. The default value is 1000.
     * @param {string} apiParams.pageToken - Starting index of the results.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.settings.datasources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/settings/datasources', 'GET', apiParams, clientConfig);

    this.v1 = {};

    /**
     * Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v1.initializeCustomer = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1:initializeCustomer', 'POST', apiParams, clientConfig);

    this.indexing = {};

    this.indexing.datasources = {};

    /**
     * Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the data source to update Schema. Format: datasources/{source_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.indexing.datasources.updateSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/schema', 'PUT', apiParams, clientConfig);

    /**
     * Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.name - (Required) The name of the data source to get Schema. Format: datasources/{source_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.indexing.datasources.getSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/schema', 'GET', apiParams, clientConfig);

    /**
     * Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.name - (Required) The name of the data source to delete Schema. Format: datasources/{source_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.indexing.datasources.deleteSchema = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/schema', 'DELETE', apiParams, clientConfig);

    this.indexing.datasources.items = {};

    /**
     * Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.connectorName - The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.mode - Required. The RequestMode for this request.
     * @param {string} apiParams.name - (Required) Required. The name of the item to delete. Format: datasources/{source_id}/items/{item_id}
     * @param {string} apiParams.version - Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.indexing.datasources.items.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.connectorName - The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.name - (Required) The name of the item to get info. Format: datasources/{source_id}/items/{item_id}
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.indexing.datasources.items.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.brief - When set to true, the indexing system only populates the following fields: name, version, queue. metadata.hash, metadata.title, metadata.sourceRepositoryURL, metadata.objectType, metadata.createTime, metadata.updateTime, metadata.contentLanguage, metadata.mimeType, structured_data.hash, content.hash, itemType, itemStatus.code, itemStatus.processingError.code, itemStatus.repositoryError.type, If this value is false, then all the fields are populated in Item.
     * @param {string} apiParams.connectorName - The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
     * @param {boolean} apiParams.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.name - (Required) The name of the Data Source to list Items. Format: datasources/{source_id}
     * @param {integer} apiParams.pageSize - Maximum number of items to fetch in a request. The max value is 1000 when brief is true. The max value is 10 if brief is false. The default value is 10
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.indexing.datasources.items.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/items', 'GET', apiParams, clientConfig);

    /**
     * Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.indexing.datasources.items.index = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}:index', 'POST', apiParams, clientConfig);

    /**
     * Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the Item to start a resumable upload. Format: datasources/{source_id}/items/{item_id}. The maximum length is 1536 bytes.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.indexing.datasources.items.upload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}:upload', 'POST', apiParams, clientConfig);

    /**
     * Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the Data Source to poll items. Format: datasources/{source_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.indexing.datasources.items.poll = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/items:poll', 'POST', apiParams, clientConfig);

    /**
     * Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the item to push into the indexing queue. Format: datasources/{source_id}/items/{ID} This is a required field. The maximum length is 1536 characters.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.indexing.datasources.items.push = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}:push', 'POST', apiParams, clientConfig);

    /**
     * Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the Data Source to unreserve all items. Format: datasources/{source_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.indexing.datasources.items.unreserve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/items:unreserve', 'POST', apiParams, clientConfig);

    /**
     * Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the Data Source to delete items in a queue. Format: datasources/{source_id}
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.indexing.datasources.items.deleteQueueItems = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/indexing/{+name}/items:deleteQueueItems', 'POST', apiParams, clientConfig);

    this.query = {};

    /**
     * Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.query.suggest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/query/suggest', 'POST', apiParams, clientConfig);

    /**
     * The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.query.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/query/search', 'POST', apiParams, clientConfig);

    /**
     * Provides functionality to remove logged activity for a user. Currently to be used only for Chat 1p clients **Note:** This API requires a standard end user account to execute. A service account can't perform Remove Activity requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.query.removeActivity = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/query:removeActivity', 'POST', apiParams, clientConfig);

    /**
     * Returns Debug information for Cloud Search Query API provides the search method. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @param {object} apiParams - The parameters for the API request.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.query.debugSearch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/query:debugSearch', 'POST', apiParams, clientConfig);

    this.query.sources = {};

    /**
     * Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.pageToken - Number of sources to return in the response.
     * @param {boolean} apiParams.requestOptions.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} apiParams.requestOptions.languageCode - The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The Suggest API uses this field as a hint to make better third-party autocomplete predictions.
     * @param {string} apiParams.requestOptions.searchApplicationId - The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).
     * @param {string} apiParams.requestOptions.timeZone - Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.query.sources.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/query/sources', 'GET', apiParams, clientConfig);

    this.stats = {};

    /**
     * Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {integer} apiParams.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.toDate.year - Year of date. Must be from 1 to 9999.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.stats.getIndex = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/index', 'GET', apiParams, clientConfig);

    /**
     * Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {integer} apiParams.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.toDate.year - Year of date. Must be from 1 to 9999.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.stats.getQuery = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/query', 'GET', apiParams, clientConfig);

    /**
     * Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {integer} apiParams.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.toDate.year - Year of date. Must be from 1 to 9999.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.stats.getUser = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/user', 'GET', apiParams, clientConfig);

    /**
     * Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {integer} apiParams.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.toDate.year - Year of date. Must be from 1 to 9999.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.stats.getSession = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/session', 'GET', apiParams, clientConfig);

    /**
     * Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.endDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.endDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.endDate.year - Year of date. Must be from 1 to 9999.
     * @param {integer} apiParams.startDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.startDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.startDate.year - Year of date. Must be from 1 to 9999.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.stats.getSearchapplication = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/searchapplication', 'GET', apiParams, clientConfig);

    this.stats.index = {};

    this.stats.index.datasources = {};

    /**
     * Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {string} apiParams.name - (Required) The resource id of the data source to retrieve statistics for, in the following format: "datasources/{source_id}"
     * @param {integer} apiParams.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.toDate.year - Year of date. Must be from 1 to 9999.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.stats.index.datasources.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/index/{+name}', 'GET', apiParams, clientConfig);

    this.stats.query = {};

    this.stats.query.searchapplications = {};

    /**
     * Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {string} apiParams.name - (Required) The resource id of the search application query stats, in the following format: searchapplications/{application_id}
     * @param {integer} apiParams.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.toDate.year - Year of date. Must be from 1 to 9999.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.stats.query.searchapplications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/query/{+name}', 'GET', apiParams, clientConfig);

    this.stats.user = {};

    this.stats.user.searchapplications = {};

    /**
     * Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {string} apiParams.name - (Required) The resource id of the search application session stats, in the following format: searchapplications/{application_id}
     * @param {integer} apiParams.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.toDate.year - Year of date. Must be from 1 to 9999.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.stats.user.searchapplications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/user/{+name}', 'GET', apiParams, clientConfig);

    this.stats.session = {};

    this.stats.session.searchapplications = {};

    /**
     * Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {string} apiParams.name - (Required) The resource id of the search application session stats, in the following format: searchapplications/{application_id}
     * @param {integer} apiParams.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} apiParams.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} apiParams.toDate.year - Year of date. Must be from 1 to 9999.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.stats.session.searchapplications.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/stats/session/{+name}', 'GET', apiParams, clientConfig);

    this.media = {};

    /**
     * Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.resourceName - (Required) Name of the media that is being downloaded. See ReadRequest.resource_name.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.media.upload = async (apiParams = {}, clientConfig = {}) => {
      // If apiParams.media is provided, use the upload path; otherwise, use the standard path.
      const path = apiParams.media ? '/upload/v1/media/{+resourceName}' : 'v1/media/{+resourceName}';
      return this._makeRequest(path, 'POST', apiParams, clientConfig);
    };
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
