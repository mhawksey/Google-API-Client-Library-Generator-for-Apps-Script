
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
    // "Private" properties using the underscore convention
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://cloudsearch.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.operations.lro = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.operations.lro.list = (params) => this._makeRequest('v1/{+name}/lro', 'GET', params);

    this.debug = {};

    this.debug.datasources = {};

    this.debug.datasources.items = {};

    /**
     * Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.name - (Required) Item name, format: datasources/{source_id}/items/{item_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.debug.datasources.items.checkAccess = (params) => this._makeRequest('v1/debug/{+name}:checkAccess', 'POST', params);

    /**
     * Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.
     * @param {string} params.name - (Required) Source name, format: datasources/{source_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.debug.datasources.items.searchByViewUrl = (params) => this._makeRequest('v1/debug/{+name}/items:searchByViewUrl', 'POST', params);

    this.debug.datasources.items.unmappedids = {};

    /**
     * List all unmapped identities for a specific item. **Note:** This API requires an admin account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {integer} params.pageSize - Maximum number of items to fetch in a request. Defaults to 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) The name of the item, in the following format: datasources/{source_id}/items/{ID}
     * @return {object} The API response object.
     */
    this.debug.datasources.items.unmappedids.list = (params) => this._makeRequest('v1/debug/{+parent}/unmappedids', 'GET', params);

    this.debug.identitysources = {};

    this.debug.identitysources.unmappedids = {};

    /**
     * Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {integer} params.pageSize - Maximum number of items to fetch in a request. Defaults to 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) The name of the identity source, in the following format: identitysources/{source_id}
     * @param {string} params.resolutionStatusCode - Limit users selection to this status.
     * @return {object} The API response object.
     */
    this.debug.identitysources.unmappedids.list = (params) => this._makeRequest('v1/debug/{+parent}/unmappedids', 'GET', params);

    this.debug.identitysources.items = {};

    /**
     * Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.groupResourceName - 
     * @param {integer} params.pageSize - Maximum number of items to fetch in a request. Defaults to 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) The name of the identity source, in the following format: identitysources/{source_id}}
     * @param {string} params.userResourceName - 
     * @return {object} The API response object.
     */
    this.debug.identitysources.items.listForunmappedidentity = (params) => this._makeRequest('v1/debug/{+parent}/items:forunmappedidentity', 'GET', params);

    this.settings = {};

    /**
     * Get customer settings. **Note:** This API requires an admin account to execute.
     * @return {object} The API response object.
     */
    this.settings.getCustomer = (params) => this._makeRequest('v1/settings/customer', 'GET', params);

    /**
     * Update customer settings. **Note:** This API requires an admin account to execute.
     * @param {string} params.updateMask - Update mask to control which fields get updated. If you specify a field in the update_mask but don't specify its value here, that field will be cleared. If the mask is not present or empty, all fields will be updated. Currently supported field paths: vpc_settings and audit_logging_settings
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.settings.updateCustomer = (params) => this._makeRequest('v1/settings/customer', 'PATCH', params);

    this.settings.searchapplications = {};

    /**
     * Lists all search applications. **Note:** This API requires an admin account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any. The default value is 10
     * @return {object} The API response object.
     */
    this.settings.searchapplications.list = (params) => this._makeRequest('v1/settings/searchapplications', 'GET', params);

    /**
     * Gets the specified search application. **Note:** This API requires an admin account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.name - (Required) The name of the search application. Format: searchapplications/{application_id}.
     * @return {object} The API response object.
     */
    this.settings.searchapplications.get = (params) => this._makeRequest('v1/settings/{+name}', 'GET', params);

    /**
     * Creates a search application. **Note:** This API requires an admin account to execute.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.settings.searchapplications.create = (params) => this._makeRequest('v1/settings/searchapplications', 'POST', params);

    /**
     * Updates a search application. **Note:** This API requires an admin account to execute.
     * @param {string} params.name - (Required) The name of the Search Application. Format: searchapplications/{application_id}.
     * @param {string} params.updateMask - Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.settings.searchapplications.update = (params) => this._makeRequest('v1/settings/{+name}', 'PUT', params);

    /**
     * Updates a search application. **Note:** This API requires an admin account to execute.
     * @param {string} params.name - (Required) The name of the Search Application. Format: searchapplications/{application_id}.
     * @param {string} params.updateMask - Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.settings.searchapplications.patch = (params) => this._makeRequest('v1/settings/{+name}', 'PATCH', params);

    /**
     * Deletes a search application. **Note:** This API requires an admin account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.name - (Required) The name of the search application to be deleted. Format: applications/{application_id}.
     * @return {object} The API response object.
     */
    this.settings.searchapplications.delete = (params) => this._makeRequest('v1/settings/{+name}', 'DELETE', params);

    /**
     * Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.
     * @param {string} params.name - (Required) The name of the search application to be reset. Format: applications/{application_id}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.settings.searchapplications.reset = (params) => this._makeRequest('v1/settings/{+name}:reset', 'POST', params);

    this.settings.datasources = {};

    /**
     * Creates a datasource. **Note:** This API requires an admin account to execute.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.settings.datasources.create = (params) => this._makeRequest('v1/settings/datasources', 'POST', params);

    /**
     * Deletes a datasource. **Note:** This API requires an admin account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.name - (Required) The name of the datasource. Format: datasources/{source_id}.
     * @return {object} The API response object.
     */
    this.settings.datasources.delete = (params) => this._makeRequest('v1/settings/{+name}', 'DELETE', params);

    /**
     * Gets a datasource. **Note:** This API requires an admin account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.name - (Required) The name of the datasource resource. Format: datasources/{source_id}.
     * @return {object} The API response object.
     */
    this.settings.datasources.get = (params) => this._makeRequest('v1/settings/{+name}', 'GET', params);

    /**
     * Updates a datasource. **Note:** This API requires an admin account to execute.
     * @param {string} params.name - (Required) The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.settings.datasources.update = (params) => this._makeRequest('v1/settings/{+name}', 'PUT', params);

    /**
     * Updates a datasource. **Note:** This API requires an admin account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.name - (Required) The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource.
     * @param {string} params.updateMask - Only applies to [`settings.datasources.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.datasources/patch). Update mask to control which fields to update. Example field paths: `name`, `displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the source, that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.settings.datasources.patch = (params) => this._makeRequest('v1/settings/{+name}', 'PATCH', params);

    /**
     * Lists datasources. **Note:** This API requires an admin account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {integer} params.pageSize - Maximum number of datasources to fetch in a request. The max value is 1000. The default value is 1000.
     * @param {string} params.pageToken - Starting index of the results.
     * @return {object} The API response object.
     */
    this.settings.datasources.list = (params) => this._makeRequest('v1/settings/datasources', 'GET', params);

    this.v1 = {};

    /**
     * Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.v1.initializeCustomer = (params) => this._makeRequest('v1:initializeCustomer', 'POST', params);

    this.indexing = {};

    this.indexing.datasources = {};

    /**
     * Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.
     * @param {string} params.name - (Required) The name of the data source to update Schema. Format: datasources/{source_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.indexing.datasources.updateSchema = (params) => this._makeRequest('v1/indexing/{+name}/schema', 'PUT', params);

    /**
     * Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.name - (Required) The name of the data source to get Schema. Format: datasources/{source_id}
     * @return {object} The API response object.
     */
    this.indexing.datasources.getSchema = (params) => this._makeRequest('v1/indexing/{+name}/schema', 'GET', params);

    /**
     * Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.name - (Required) The name of the data source to delete Schema. Format: datasources/{source_id}
     * @return {object} The API response object.
     */
    this.indexing.datasources.deleteSchema = (params) => this._makeRequest('v1/indexing/{+name}/schema', 'DELETE', params);

    this.indexing.datasources.items = {};

    /**
     * Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {string} params.connectorName - The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.mode - Required. The RequestMode for this request.
     * @param {string} params.name - (Required) Required. The name of the item to delete. Format: datasources/{source_id}/items/{item_id}
     * @param {string} params.version - Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations).
     * @return {object} The API response object.
     */
    this.indexing.datasources.items.delete = (params) => this._makeRequest('v1/indexing/{+name}', 'DELETE', params);

    /**
     * Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {string} params.connectorName - The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.name - (Required) The name of the item to get info. Format: datasources/{source_id}/items/{item_id}
     * @return {object} The API response object.
     */
    this.indexing.datasources.items.get = (params) => this._makeRequest('v1/indexing/{+name}', 'GET', params);

    /**
     * Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {boolean} params.brief - When set to true, the indexing system only populates the following fields: name, version, queue. metadata.hash, metadata.title, metadata.sourceRepositoryURL, metadata.objectType, metadata.createTime, metadata.updateTime, metadata.contentLanguage, metadata.mimeType, structured_data.hash, content.hash, itemType, itemStatus.code, itemStatus.processingError.code, itemStatus.repositoryError.type, If this value is false, then all the fields are populated in Item.
     * @param {string} params.connectorName - The name of connector making this call. Format: datasources/{source_id}/connectors/{ID}
     * @param {boolean} params.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.name - (Required) The name of the Data Source to list Items. Format: datasources/{source_id}
     * @param {integer} params.pageSize - Maximum number of items to fetch in a request. The max value is 1000 when brief is true. The max value is 10 if brief is false. The default value is 10
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @return {object} The API response object.
     */
    this.indexing.datasources.items.list = (params) => this._makeRequest('v1/indexing/{+name}/items', 'GET', params);

    /**
     * Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {string} params.name - (Required) The name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.indexing.datasources.items.index = (params) => this._makeRequest('v1/indexing/{+name}:index', 'POST', params);

    /**
     * Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {string} params.name - (Required) The name of the Item to start a resumable upload. Format: datasources/{source_id}/items/{item_id}. The maximum length is 1536 bytes.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.indexing.datasources.items.upload = (params) => this._makeRequest('v1/indexing/{+name}:upload', 'POST', params);

    /**
     * Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {string} params.name - (Required) The name of the Data Source to poll items. Format: datasources/{source_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.indexing.datasources.items.poll = (params) => this._makeRequest('v1/indexing/{+name}/items:poll', 'POST', params);

    /**
     * Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {string} params.name - (Required) The name of the item to push into the indexing queue. Format: datasources/{source_id}/items/{ID} This is a required field. The maximum length is 1536 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.indexing.datasources.items.push = (params) => this._makeRequest('v1/indexing/{+name}:push', 'POST', params);

    /**
     * Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {string} params.name - (Required) The name of the Data Source to unreserve all items. Format: datasources/{source_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.indexing.datasources.items.unreserve = (params) => this._makeRequest('v1/indexing/{+name}/items:unreserve', 'POST', params);

    /**
     * Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.
     * @param {string} params.name - (Required) The name of the Data Source to delete items in a queue. Format: datasources/{source_id}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.indexing.datasources.items.deleteQueueItems = (params) => this._makeRequest('v1/indexing/{+name}/items:deleteQueueItems', 'POST', params);

    this.query = {};

    /**
     * Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.query.suggest = (params) => this._makeRequest('v1/query/suggest', 'POST', params);

    /**
     * The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.query.search = (params) => this._makeRequest('v1/query/search', 'POST', params);

    /**
     * Provides functionality to remove logged activity for a user. Currently to be used only for Chat 1p clients **Note:** This API requires a standard end user account to execute. A service account can't perform Remove Activity requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.query.removeActivity = (params) => this._makeRequest('v1/query:removeActivity', 'POST', params);

    /**
     * Returns Debug information for Cloud Search Query API provides the search method. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.query.debugSearch = (params) => this._makeRequest('v1/query:debugSearch', 'POST', params);

    this.query.sources = {};

    /**
     * Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).
     * @param {string} params.pageToken - Number of sources to return in the response.
     * @param {boolean} params.requestOptions.debugOptions.enableDebugging - If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field.
     * @param {string} params.requestOptions.languageCode - The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The Suggest API uses this field as a hint to make better third-party autocomplete predictions.
     * @param {string} params.requestOptions.searchApplicationId - The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922).
     * @param {string} params.requestOptions.timeZone - Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used.
     * @return {object} The API response object.
     */
    this.query.sources.list = (params) => this._makeRequest('v1/query/sources', 'GET', params);

    this.stats = {};

    /**
     * Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.
     * @param {integer} params.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {integer} params.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.toDate.year - Year of date. Must be from 1 to 9999.
     * @return {object} The API response object.
     */
    this.stats.getIndex = (params) => this._makeRequest('v1/stats/index', 'GET', params);

    /**
     * Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.
     * @param {integer} params.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {integer} params.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.toDate.year - Year of date. Must be from 1 to 9999.
     * @return {object} The API response object.
     */
    this.stats.getQuery = (params) => this._makeRequest('v1/stats/query', 'GET', params);

    /**
     * Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.
     * @param {integer} params.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {integer} params.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.toDate.year - Year of date. Must be from 1 to 9999.
     * @return {object} The API response object.
     */
    this.stats.getUser = (params) => this._makeRequest('v1/stats/user', 'GET', params);

    /**
     * Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.
     * @param {integer} params.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {integer} params.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.toDate.year - Year of date. Must be from 1 to 9999.
     * @return {object} The API response object.
     */
    this.stats.getSession = (params) => this._makeRequest('v1/stats/session', 'GET', params);

    /**
     * Get search application stats for customer. **Note:** This API requires a standard end user account to execute.
     * @param {integer} params.endDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.endDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.endDate.year - Year of date. Must be from 1 to 9999.
     * @param {integer} params.startDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.startDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.startDate.year - Year of date. Must be from 1 to 9999.
     * @return {object} The API response object.
     */
    this.stats.getSearchapplication = (params) => this._makeRequest('v1/stats/searchapplication', 'GET', params);

    this.stats.index = {};

    this.stats.index.datasources = {};

    /**
     * Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.
     * @param {integer} params.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {string} params.name - (Required) The resource id of the data source to retrieve statistics for, in the following format: "datasources/{source_id}"
     * @param {integer} params.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.toDate.year - Year of date. Must be from 1 to 9999.
     * @return {object} The API response object.
     */
    this.stats.index.datasources.get = (params) => this._makeRequest('v1/stats/index/{+name}', 'GET', params);

    this.stats.query = {};

    this.stats.query.searchapplications = {};

    /**
     * Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.
     * @param {integer} params.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {string} params.name - (Required) The resource id of the search application query stats, in the following format: searchapplications/{application_id}
     * @param {integer} params.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.toDate.year - Year of date. Must be from 1 to 9999.
     * @return {object} The API response object.
     */
    this.stats.query.searchapplications.get = (params) => this._makeRequest('v1/stats/query/{+name}', 'GET', params);

    this.stats.user = {};

    this.stats.user.searchapplications = {};

    /**
     * Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.
     * @param {integer} params.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {string} params.name - (Required) The resource id of the search application session stats, in the following format: searchapplications/{application_id}
     * @param {integer} params.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.toDate.year - Year of date. Must be from 1 to 9999.
     * @return {object} The API response object.
     */
    this.stats.user.searchapplications.get = (params) => this._makeRequest('v1/stats/user/{+name}', 'GET', params);

    this.stats.session = {};

    this.stats.session.searchapplications = {};

    /**
     * Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.
     * @param {integer} params.fromDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.fromDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.fromDate.year - Year of date. Must be from 1 to 9999.
     * @param {string} params.name - (Required) The resource id of the search application session stats, in the following format: searchapplications/{application_id}
     * @param {integer} params.toDate.day - Day of month. Must be from 1 to 31 and valid for the year and month.
     * @param {integer} params.toDate.month - Month of date. Must be from 1 to 12.
     * @param {integer} params.toDate.year - Year of date. Must be from 1 to 9999.
     * @return {object} The API response object.
     */
    this.stats.session.searchapplications.get = (params) => this._makeRequest('v1/stats/session/{+name}', 'GET', params);

    this.media = {};

    /**
     * Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.
     * @param {string} params.resourceName - (Required) Name of the media that is being downloaded. See ReadRequest.resource_name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.media.upload = (params) => this._makeRequest('v1/media/{+resourceName}', 'POST', params);
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
