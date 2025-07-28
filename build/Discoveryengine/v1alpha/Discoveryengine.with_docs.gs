
/**
 * Google Apps Script client library for the Discovery Engine API
 * Documentation URL: https://cloud.google.com/generative-ai-app-builder/docs/
 * @class
 */
class Discoveryengine {
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
    this._rootUrl = 'https://discoveryengine.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.media = {};

    /**
     * Downloads a file from the session.
     * @param {string} params.fileId - Required. The ID of the file to be downloaded.
     * @param {string} params.name - (Required) Required. The resource name of the Session. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/sessions/{session}`
     * @param {string} params.viewId - Optional. The ID of the view to be downloaded.
     * @return {object} The API response object.
     */
    this.media.download = (params) => this._makeRequest('v1alpha/{+name}:downloadFile', 'GET', params);

    this.projects = {};

    /**
     * Gets a Project. Returns NOT_FOUND when the project is not yet created.
     * @param {string} params.name - (Required) Required. Full resource name of a Project, such as `projects/{project_id_or_number}`.
     * @return {object} The API response object.
     */
    this.projects.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Provisions the project resource. During the process, related systems will get prepared and initialized. Caller must read the [Terms for data use](https://cloud.google.com/retail/data-use-terms), and optionally specify in request to provide consent to that service terms.
     * @param {string} params.name - (Required) Required. Full resource name of a Project, such as `projects/{project_id_or_number}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.provision = (params) => this._makeRequest('v1alpha/{+name}:provision', 'POST', params);

    /**
     * Updates service terms for this project. This method can be used to retroactively accept the latest terms. Terms available for update: * [Terms for data use](https://cloud.google.com/retail/data-use-terms)
     * @param {string} params.project - (Required) Required. Full resource name of a Project, such as `projects/{project_id_or_number}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.reportConsentChange = (params) => this._makeRequest('v1alpha/{+project}:reportConsentChange', 'POST', params);

    this.projects.locations = {};

    /**
     * Default ACL configuration for use in a location of a customer's project. Updates will only reflect to new data stores. Existing data stores will still use the old value.
     * @param {string} params.name - (Required) Immutable. The full resource name of the acl configuration. Format: `projects/{project}/locations/{location}/aclConfig`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.updateAclConfig = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets the AclConfig.
     * @param {string} params.name - (Required) Required. Resource name of AclConfig, such as `projects/*\/locations/*\/aclConfig`. If the caller does not have permission to access the AclConfig, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.getAclConfig = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Provisions a CMEK key for use in a location of a customer's project. This method will also conduct location validation on the provided cmekConfig to make sure the key is valid and can be used in the selected location.
     * @param {string} params.name - (Required) Required. The name of the CmekConfig of the form `projects/{project}/locations/{location}/cmekConfig` or `projects/{project}/locations/{location}/cmekConfigs/{cmek_config}`.
     * @param {boolean} params.setDefault - Set the following CmekConfig as the default to be used for child resources if one is not specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.updateCmekConfig = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets the CmekConfig.
     * @param {string} params.name - (Required) Required. Resource name of CmekConfig, such as `projects/*\/locations/*\/cmekConfig` or `projects/*\/locations/*\/cmekConfigs/*`. If the caller does not have permission to access the CmekConfig, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.getCmekConfig = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Obtains the time series data of organic or dedicated crawl rate for monitoring. When dedicated crawl rate is not set, it will return vertex AI's organic crawl rate time series. Organic crawl means Google automatically crawl the internet at its own convenience. When dedicated crawl rate is set, it will return vertex AI's dedicated crawl rate time series.
     * @param {string} params.location - (Required) Required. The location resource where crawl rate management will be performed. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.obtainCrawlRate = (params) => this._makeRequest('v1alpha/{+location}:obtainCrawlRate', 'POST', params);

    /**
     * Sets the dedicated crawl rate for a crawl_rate_scope. If the dedicated crawl rate was not set, this will enable vertex AI's crawl bot to use the new dedicated crawl rate for crawling. If the dedicated crawl rate was set, vertex AI's crawl bot will try to update the rate to the new value. If the new value is too high, the crawl bot may crawl at a lower rate to avoid overloading the user's website.
     * @param {string} params.location - (Required) Required. The location resource where crawl rate management will be performed. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.setDedicatedCrawlRate = (params) => this._makeRequest('v1alpha/{+location}:setDedicatedCrawlRate', 'POST', params);

    /**
     * Removes the dedicated crawl rate for a craw_rate_scope. If the dedicated crawl rate was set, this will disable vertex AI's crawl bot from using the dedicated crawl rate for crawling. If the dedicated crawl rate was not set, this is a no-op.
     * @param {string} params.location - (Required) Required. The location resource where crawl rate management will be performed. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.removeDedicatedCrawlRate = (params) => this._makeRequest('v1alpha/{+location}:removeDedicatedCrawlRate', 'POST', params);

    /**
     * Creates a Collection and sets up the DataConnector for it. To stop a DataConnector after setup, use the CollectionService.DeleteCollection method.
     * @param {string} params.parent - (Required) Required. The parent of Collection, in the format of `projects/{project}/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.setUpDataConnector = (params) => this._makeRequest('v1alpha/{+parent}:setUpDataConnector', 'POST', params);

    /**
     * Estimates the data size to be used by a customer.
     * @param {string} params.location - (Required) Required. Full resource name of the location, such as `projects/{project}/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.estimateDataSize = (params) => this._makeRequest('v1alpha/{+location}:estimateDataSize', 'POST', params);

    this.projects.locations.notebooks = {};

    /**
     * Lists the recently viewed notebooks. Needs a side channel with the user's EUC.
     * @param {integer} params.pageSize - Optional. Maximum number of Notebooks to return. If unspecified, defaults to "200". The maximum allowed value is "500". If this field is negative, will use the default value.
     * @param {string} params.pageToken - Optional. The page token, provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent branch resource name, such as `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.notebooks.listRecentlyViewed = (params) => this._makeRequest('v1alpha/{+parent}/notebooks:listRecentlyViewed', 'GET', params);

    this.projects.locations.notebooks.sources = {};

    /**
     * Creates a list of Sources.
     * @param {string} params.parent - (Required) Required. The parent resource where the sources will be created. Format: projects/{project}/locations/{location}/notebooks/{notebook}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebooks.sources.batchCreate = (params) => this._makeRequest('v1alpha/{+parent}/sources:batchCreate', 'POST', params);

    /**
     * Uploads a file for Notebook LM to use. Creates a Source.
     * @param {string} params.parent - (Required) Required. The parent resource where the sources will be created. Format: projects/{project}/locations/{location}/notebooks/{notebook}
     * @param {string} params.sourceId - (Required) The source id of the associated file. If not set, a source id will be generated and a new tentative source will be created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.notebooks.sources.uploadFile = (params) => this._makeRequest('v1alpha/{+parent}/sources/{sourceId}:uploadFile', 'POST', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.podcasts = {};

    this.projects.locations.podcasts.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.podcasts.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.cmekConfigs = {};

    /**
     * Provisions a CMEK key for use in a location of a customer's project. This method will also conduct location validation on the provided cmekConfig to make sure the key is valid and can be used in the selected location.
     * @param {string} params.name - (Required) Required. The name of the CmekConfig of the form `projects/{project}/locations/{location}/cmekConfig` or `projects/{project}/locations/{location}/cmekConfigs/{cmek_config}`.
     * @param {boolean} params.setDefault - Set the following CmekConfig as the default to be used for child resources if one is not specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.cmekConfigs.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets the CmekConfig.
     * @param {string} params.name - (Required) Required. Resource name of CmekConfig, such as `projects/*\/locations/*\/cmekConfig` or `projects/*\/locations/*\/cmekConfigs/*`. If the caller does not have permission to access the CmekConfig, regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.cmekConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all the CmekConfigs with the project.
     * @param {string} params.parent - (Required) Required. The parent location resource name, such as `projects/{project}/locations/{location}`. If the caller does not have permission to list CmekConfigs under this location, regardless of whether or not a CmekConfig exists, a PERMISSION_DENIED error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.cmekConfigs.list = (params) => this._makeRequest('v1alpha/{+parent}/cmekConfigs', 'GET', params);

    /**
     * De-provisions a CmekConfig.
     * @param {string} params.name - (Required) Required. The resource name of the CmekConfig to delete, such as `projects/{project}/locations/{location}/cmekConfigs/{cmek_config}`.
     * @return {object} The API response object.
     */
    this.projects.locations.cmekConfigs.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.collections = {};

    /**
     * Gets a Collection.
     * @param {string} params.name - (Required) Required. The full resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Gets a list of Collections.
     * @param {string} params.filter - Filter returned collections by associated data connector data sources. For example: `filter = 'data_source:jira confluence'`. If the filter is empty, we return all collections under a project and location.
     * @param {integer} params.pageSize - The maximum number of Collections to return. The service may return fewer than this value. If unspecified, at most 100 Collections will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous CollectionService.ListCollections call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CollectionService.ListCollections must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.list = (params) => this._makeRequest('v1alpha/{+parent}/collections', 'GET', params);

    /**
     * Updates a Collection.
     * @param {string} params.name - (Required) Immutable. The full resource name of the Collection. Format: `projects/{project}/locations/{location}/collections/{collection_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     * @param {string} params.updateMask - Optional. The list of fields to be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a Collection.
     * @param {string} params.name - (Required) Required. The full resource name of the Collection, in the format of `projects/{project}/locations/{location}/collections/{collection}`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Gets the DataConnector. DataConnector is a singleton resource for each Collection.
     * @param {string} params.name - (Required) Required. Full resource name of DataConnector, such as `projects/{project}/locations/{location}/collections/{collection_id}/dataConnector`. If the caller does not have permission to access the DataConnector, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested DataConnector does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.getDataConnector = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates a DataConnector.
     * @param {string} params.name - (Required) Output only. The full resource name of the Data Connector. Format: `projects/*\/locations/*\/collections/*\/dataConnector`.
     * @param {string} params.updateMask - Indicates which fields in the provided DataConnector to update. Supported field paths include: - refresh_interval - params - auto_run_disabled - action_config - action_config.action_params - action_config.service_name - destination_configs - blocking_reasons - sync_mode - incremental_sync_disabled - incremental_refresh_interval Note: Support for these fields may vary depending on the connector type. For example, not all connectors support `destination_configs`. If an unsupported or unknown field path is provided, the request will return an INVALID_ARGUMENT error.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.updateDataConnector = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    this.projects.locations.collections.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores = {};

    /**
     * Completes the specified user input with keyword suggestions.
     * @param {string} params.dataStore - (Required) Required. The parent data store resource name for which the completion is performed, such as `projects/*\/locations/global/collections/default_collection/dataStores/default_data_store`.
     * @param {boolean} params.includeTailSuggestions - Indicates if tail suggestions should be returned if there are no suggestions that match the full query. Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned.
     * @param {string} params.query - Required. The typeahead input used to fetch suggestions. Maximum length is 128 characters.
     * @param {string} params.queryModel - Specifies the autocomplete data model. This overrides any model specified in the Configuration > Autocomplete section of the Cloud console. Currently supported values: * `document` - Using suggestions generated from user-imported documents. * `search-history` - Using suggestions generated from the past history of SearchService.Search API calls. Do not use it when there is no traffic for Search API. * `user-event` - Using suggestions generated from user-imported search events. * `document-completable` - Using suggestions taken directly from user-imported document fields marked as completable. Default values: * `document` is the default model for regular dataStores. * `search-history` is the default model for site search dataStores.
     * @param {string} params.userPseudoId - A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.completeQuery = (params) => this._makeRequest('v1alpha/{+dataStore}:completeQuery', 'GET', params);

    /**
     * Creates a DataStore. DataStore is for storing Documents. To serve these documents for Search, or Recommendation use case, an Engine needs to be created separately.
     * @param {string} params.cmekConfigName - Resource name of the CmekConfig to use for protecting this DataStore.
     * @param {boolean} params.createAdvancedSiteSearch - A boolean flag indicating whether user want to directly create an advanced data store for site search. If the data store is not configured as site search (GENERIC vertical and PUBLIC_WEBSITE content_config), this flag will be ignored.
     * @param {string} params.dataStoreId - Required. The ID to use for the DataStore, which will become the final component of the DataStore's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     * @param {boolean} params.disableCmek - DataStore without CMEK protections. If a default CmekConfig is set for the project, setting this field will override the default CmekConfig as well.
     * @param {string} params.parent - (Required) Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}`.
     * @param {boolean} params.skipDefaultSchemaCreation - A boolean flag indicating whether to skip the default schema creation for the data store. Only enable this flag if you are certain that the default schema is incompatible with your use case. If set to true, you must manually create a schema for the data store before any documents can be ingested. This flag cannot be specified if `data_store.starting_schema` is specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.create = (params) => this._makeRequest('v1alpha/{+parent}/dataStores', 'POST', params);

    /**
     * Gets a DataStore.
     * @param {string} params.name - (Required) Required. Full resource name of DataStore, such as `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. If the caller does not have permission to access the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested DataStore does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all the DataStores associated with the project.
     * @param {string} params.filter - Filter by solution type . For example: `filter = 'solution_type:SOLUTION_TYPE_SEARCH'`
     * @param {integer} params.pageSize - Maximum number of DataStores to return. If unspecified, defaults to 10. The maximum allowed value is 50. Values above 50 will be coerced to 50. If this field is negative, an INVALID_ARGUMENT is returned.
     * @param {string} params.pageToken - A page token ListDataStoresResponse.next_page_token, received from a previous DataStoreService.ListDataStores call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DataStoreService.ListDataStores must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     * @param {string} params.parent - (Required) Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection_id}`. If the caller does not have permission to list DataStores under this location, regardless of whether or not this data store exists, a PERMISSION_DENIED error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.list = (params) => this._makeRequest('v1alpha/{+parent}/dataStores', 'GET', params);

    /**
     * Deletes a DataStore.
     * @param {string} params.name - (Required) Required. Full resource name of DataStore, such as `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. If the caller does not have permission to delete the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the DataStore to delete does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a DataStore
     * @param {string} params.name - (Required) Immutable. Identifier. The full resource name of the data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     * @param {string} params.updateMask - Indicates which fields in the provided DataStore to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a DocumentProcessingConfig.
     * @param {string} params.name - (Required) Required. Full DocumentProcessingConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/documentProcessingConfig`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.getDocumentProcessingConfig = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates the DocumentProcessingConfig. DocumentProcessingConfig is a singleon resource of DataStore. It's empty when DataStore is created. The first call to this method will set up DocumentProcessingConfig.
     * @param {string} params.name - (Required) The full resource name of the Document Processing Config. Format: `projects/*\/locations/*\/collections/*\/dataStores/*\/documentProcessingConfig`.
     * @param {string} params.updateMask - Indicates which fields in the provided DocumentProcessingConfig to update. The following are the only supported fields: * DocumentProcessingConfig.ocr_config If not set, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.updateDocumentProcessingConfig = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Trains a custom model.
     * @param {string} params.dataStore - (Required) Required. The resource name of the Data Store, such as `projects/*\/locations/global/collections/default_collection/dataStores/default_data_store`. This field is used to identify the data store where to train the models.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.trainCustomModel = (params) => this._makeRequest('v1alpha/{+dataStore}:trainCustomModel', 'POST', params);

    /**
     * Gets the SiteSearchEngine.
     * @param {string} params.name - (Required) Required. Resource name of SiteSearchEngine, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. If the caller does not have permission to access the [SiteSearchEngine], regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.getSiteSearchEngine = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.servingConfigs = {};

    /**
     * Performs a search.
     * @param {string} params.servingConfig - (Required) Required. The resource name of the Search serving config, such as `projects/*\/locations/global/collections/default_collection/engines/*\/servingConfigs/default_serving_config`, or `projects/*\/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.servingConfigs.search = (params) => this._makeRequest('v1alpha/{+servingConfig}:search', 'POST', params);

    /**
     * Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.
     * @param {string} params.servingConfig - (Required) Required. The resource name of the Search serving config, such as `projects/*\/locations/global/collections/default_collection/engines/*\/servingConfigs/default_serving_config`, or `projects/*\/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.servingConfigs.searchLite = (params) => this._makeRequest('v1alpha/{+servingConfig}:searchLite', 'POST', params);

    /**
     * Answer query method.
     * @param {string} params.servingConfig - (Required) Required. The resource name of the Search serving config, such as `projects/*\/locations/global/collections/default_collection/engines/*\/servingConfigs/default_serving_config`, or `projects/*\/locations/global/collections/default_collection/dataStores/*\/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.servingConfigs.answer = (params) => this._makeRequest('v1alpha/{+servingConfig}:answer', 'POST', params);

    /**
     * Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.
     * @param {string} params.servingConfig - (Required) Required. The resource name of the Search serving config, such as `projects/*\/locations/global/collections/default_collection/engines/*\/servingConfigs/default_serving_config`, or `projects/*\/locations/global/collections/default_collection/dataStores/*\/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.servingConfigs.streamAnswer = (params) => this._makeRequest('v1alpha/{+servingConfig}:streamAnswer', 'POST', params);

    /**
     * Makes a recommendation, which requires a contextual user event.
     * @param {string} params.servingConfig - (Required) Required. Full resource name of a ServingConfig: `projects/*\/locations/global/collections/*\/engines/*\/servingConfigs/*`, or `projects/*\/locations/global/collections/*\/dataStores/*\/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID is used as the ID of the default serving config. For example, for Engine `projects/*\/locations/global/collections/*\/engines/my-engine`, you can use `projects/*\/locations/global/collections/*\/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.servingConfigs.recommend = (params) => this._makeRequest('v1alpha/{+servingConfig}:recommend', 'POST', params);

    /**
     * Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}/servingConfigs/{serving_config_id}`
     * @param {string} params.updateMask - Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.servingConfigs.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
     * @param {string} params.name - (Required) Required. The resource name of the ServingConfig to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.servingConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all ServingConfigs linked to this dataStore.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. Full resource name of the parent resource. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.servingConfigs.list = (params) => this._makeRequest('v1alpha/{+parent}/servingConfigs', 'GET', params);

    this.projects.locations.collections.dataStores.models = {};

    this.projects.locations.collections.dataStores.models.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.models.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.models.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.completionConfig = {};

    /**
     * Completes the user input with advanced keyword suggestions.
     * @param {string} params.completionConfig - (Required) Required. The completion_config of the parent dataStore or engine resource name for which the completion is performed, such as `projects/*\/locations/global/collections/default_collection/dataStores/*\/completionConfig` `projects/*\/locations/global/collections/default_collection/engines/*\/completionConfig`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.completionConfig.completeQuery = (params) => this._makeRequest('v1alpha/{+completionConfig}:completeQuery', 'POST', params);

    this.projects.locations.collections.dataStores.suggestionDenyListEntries = {};

    /**
     * Imports all SuggestionDenyListEntry for a DataStore.
     * @param {string} params.parent - (Required) Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/*\/locations/*\/collections/*\/dataStores/*.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.suggestionDenyListEntries.import = (params) => this._makeRequest('v1alpha/{+parent}/suggestionDenyListEntries:import', 'POST', params);

    /**
     * Permanently deletes all SuggestionDenyListEntry for a DataStore.
     * @param {string} params.parent - (Required) Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/*\/locations/*\/collections/*\/dataStores/*.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.suggestionDenyListEntries.purge = (params) => this._makeRequest('v1alpha/{+parent}/suggestionDenyListEntries:purge', 'POST', params);

    this.projects.locations.collections.dataStores.completionSuggestions = {};

    /**
     * Imports CompletionSuggestions for a DataStore.
     * @param {string} params.parent - (Required) Required. The parent data store resource name for which to import customer autocomplete suggestions. Follows pattern `projects/*\/locations/*\/collections/*\/dataStores/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.completionSuggestions.import = (params) => this._makeRequest('v1alpha/{+parent}/completionSuggestions:import', 'POST', params);

    /**
     * Permanently deletes all CompletionSuggestions for a DataStore.
     * @param {string} params.parent - (Required) Required. The parent data store resource name for which to purge completion suggestions. Follows pattern projects/*\/locations/*\/collections/*\/dataStores/*.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.completionSuggestions.purge = (params) => this._makeRequest('v1alpha/{+parent}/completionSuggestions:purge', 'POST', params);

    this.projects.locations.collections.dataStores.controls = {};

    /**
     * Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.
     * @param {string} params.controlId - Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value must be within 1-63 characters. Valid characters are /a-z-_/.
     * @param {string} params.parent - (Required) Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.controls.create = (params) => this._makeRequest('v1alpha/{+parent}/controls', 'POST', params);

    /**
     * Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Required. The resource name of the Control to delete. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/controls/{control_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.controls.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a Control. Control action type cannot be changed. If the Control to update does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/*\/locations/global/dataStore/*\/controls/*`
     * @param {string} params.updateMask - Optional. Indicates which fields in the provided Control to update. The following are NOT supported: * Control.name * Control.solution_type If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.controls.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a Control.
     * @param {string} params.name - (Required) Required. The resource name of the Control to get. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/controls/{control_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.controls.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all Controls by their parent DataStore.
     * @param {string} params.filter - Optional. A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. Currently this field is unsupported.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListControls` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.controls.list = (params) => this._makeRequest('v1alpha/{+parent}/controls', 'GET', params);

    this.projects.locations.collections.dataStores.conversations = {};

    /**
     * Converses a conversation.
     * @param {string} params.name - (Required) Required. The resource name of the Conversation to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`. Use `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.conversations.converse = (params) => this._makeRequest('v1alpha/{+name}:converse', 'POST', params);

    /**
     * Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.
     * @param {string} params.parent - (Required) Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.conversations.create = (params) => this._makeRequest('v1alpha/{+parent}/conversations', 'POST', params);

    /**
     * Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Required. The resource name of the Conversation to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.conversations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/dataStore/*\/conversations/*` or `projects/{project}/locations/global/collections/{collection}/engines/*\/conversations/*`.
     * @param {string} params.updateMask - Indicates which fields in the provided Conversation to update. The following are NOT supported: * Conversation.name If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.conversations.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a Conversation.
     * @param {string} params.name - (Required) Required. The resource name of the Conversation to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.conversations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all Conversations by their parent DataStore.
     * @param {string} params.filter - A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time"
     * @param {integer} params.pageSize - Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.conversations.list = (params) => this._makeRequest('v1alpha/{+parent}/conversations', 'GET', params);

    this.projects.locations.collections.dataStores.branches = {};

    /**
     * Gets index freshness metadata for Documents. Supported for website search only.
     * @param {string} params.matcher.fhirMatcher.fhirResources - Required. The FHIR resources to match by. Format: projects/{project}/locations/{location}/datasets/{dataset}/fhirStores/{fhir_store}/fhir/{resource_type}/{fhir_resource_id}
     * @param {string} params.matcher.urisMatcher.uris - The exact URIs to match by.
     * @param {string} params.parent - (Required) Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.batchGetDocumentsMetadata = (params) => this._makeRequest('v1alpha/{+parent}/batchGetDocumentsMetadata', 'GET', params);

    this.projects.locations.collections.dataStores.branches.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.projects.locations.collections.dataStores.branches.documents = {};

    /**
     * Gets a Document.
     * @param {string} params.name - (Required) Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Document does not exist, a `NOT_FOUND` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.documents.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Gets a list of Documents.
     * @param {integer} params.pageSize - Maximum number of Documents to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 are set to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.pageToken - A page token ListDocumentsResponse.next_page_token, received from a previous DocumentService.ListDocuments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DocumentService.ListDocuments must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.parent - (Required) Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. Use `default_branch` as the branch ID, to list documents under the default branch. If the caller does not have permission to list Documents under this branch, regardless of whether or not this branch exists, a `PERMISSION_DENIED` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.documents.list = (params) => this._makeRequest('v1alpha/{+parent}/documents', 'GET', params);

    /**
     * Creates a Document.
     * @param {string} params.documentId - Required. The ID to use for the Document, which becomes the final component of the Document.name. If the caller does not have permission to create the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all Documents with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.parent - (Required) Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.documents.create = (params) => this._makeRequest('v1alpha/{+parent}/documents', 'POST', params);

    /**
     * Updates a Document.
     * @param {boolean} params.allowMissing - If set to `true` and the Document is not found, a new Document is be created.
     * @param {string} params.name - (Required) Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     * @param {string} params.updateMask - Indicates which fields in the provided imported 'document' to update. If not set, by default updates all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.documents.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a Document.
     * @param {string} params.name - (Required) Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to delete the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the Document to delete does not exist, a `NOT_FOUND` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.documents.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items are created. Note: It is possible for a subset of the Documents to be successfully updated.
     * @param {string} params.parent - (Required) Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. Requires create/update permission.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.documents.import = (params) => this._makeRequest('v1alpha/{+parent}/documents:import', 'POST', params);

    /**
     * Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.
     * @param {string} params.parent - (Required) Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.documents.purge = (params) => this._makeRequest('v1alpha/{+parent}/documents:purge', 'POST', params);

    /**
     * Gets the parsed layout information for a Document.
     * @param {string} params.imageId - Optional. Specifies config for IMAGE_BYTES.
     * @param {string} params.name - (Required) Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Document does not exist, a `NOT_FOUND` error is returned.
     * @param {string} params.processedDocumentFormat - What format output should be. If unspecified, defaults to JSON.
     * @param {string} params.processedDocumentType - Required. What type of processing to return.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.documents.getProcessedDocument = (params) => this._makeRequest('v1alpha/{+name}:getProcessedDocument', 'GET', params);

    this.projects.locations.collections.dataStores.branches.documents.chunks = {};

    /**
     * Gets a Document.
     * @param {string} params.name - (Required) Required. Full resource name of Chunk, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}/chunks/{chunk}`. If the caller does not have permission to access the Chunk, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Chunk does not exist, a `NOT_FOUND` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.documents.chunks.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Gets a list of Chunks.
     * @param {integer} params.pageSize - Maximum number of Chunks to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.pageToken - A page token ListChunksResponse.next_page_token, received from a previous ChunkService.ListChunks call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ChunkService.ListChunks must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.parent - (Required) Required. The parent document resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to list Chunks under this document, regardless of whether or not this document exists, a `PERMISSION_DENIED` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.branches.documents.chunks.list = (params) => this._makeRequest('v1alpha/{+parent}/chunks', 'GET', params);

    this.projects.locations.collections.dataStores.schemas = {};

    /**
     * Gets a Schema.
     * @param {string} params.name - (Required) Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.schemas.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Gets a list of Schemas.
     * @param {integer} params.pageSize - The maximum number of Schemas to return. The service may return fewer than this value. If unspecified, at most 100 Schemas are returned. The maximum value is 1000; values above 1000 are set to 1000.
     * @param {string} params.pageToken - A page token, received from a previous SchemaService.ListSchemas call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SchemaService.ListSchemas must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.schemas.list = (params) => this._makeRequest('v1alpha/{+parent}/schemas', 'GET', params);

    /**
     * Creates a Schema.
     * @param {string} params.parent - (Required) Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.
     * @param {string} params.schemaId - Required. The ID to use for the Schema, which becomes the final component of the Schema.name. This field should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.schemas.create = (params) => this._makeRequest('v1alpha/{+parent}/schemas', 'POST', params);

    /**
     * Updates a Schema.
     * @param {boolean} params.allowMissing - If set to true, and the Schema is not found, a new Schema is created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.schemas.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a Schema.
     * @param {string} params.name - (Required) Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.schemas.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.collections.dataStores.schemas.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.schemas.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.schemas.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.customModels = {};

    /**
     * Gets a list of all the custom models.
     * @param {string} params.dataStore - (Required) Required. The resource name of the parent Data Store, such as `projects/*\/locations/global/collections/default_collection/dataStores/default_data_store`. This field is used to identify the data store where to fetch the models from.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.customModels.list = (params) => this._makeRequest('v1alpha/{+dataStore}/customModels', 'GET', params);

    this.projects.locations.collections.dataStores.sessions = {};

    /**
     * Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.
     * @param {string} params.parent - (Required) Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.sessions.create = (params) => this._makeRequest('v1alpha/{+parent}/sessions', 'POST', params);

    /**
     * Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Required. The resource name of the Session to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/sessions/{session_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.sessions.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/engines/{engine}/sessions/*`
     * @param {string} params.updateMask - Indicates which fields in the provided Session to update. The following are NOT supported: * Session.name If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.sessions.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a Session.
     * @param {boolean} params.includeAnswerDetails - Optional. If set to true, the full session including all answer details will be returned.
     * @param {string} params.name - (Required) Required. The resource name of the Session to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/sessions/{session_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.sessions.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all Sessions by their parent DataStore.
     * @param {string} params.filter - A comma-separated list of fields to filter by, in EBNF grammar. The supported fields are: * `user_pseudo_id` * `state` * `display_name` * `starred` * `is_pinned` * `labels` * `create_time` * `update_time` Examples: "user_pseudo_id = some_id" "display_name = \"some_name\"" "starred = true" "is_pinned=true AND (NOT labels:hidden)" "create_time > \"1970-01-01T12:00:00Z\""
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `session_name` * `is_pinned` Example: * "update_time desc" * "create_time" * "is_pinned desc,update_time desc": list sessions by is_pinned first, then by update_time.
     * @param {integer} params.pageSize - Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListSessions` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.sessions.list = (params) => this._makeRequest('v1alpha/{+parent}/sessions', 'GET', params);

    this.projects.locations.collections.dataStores.sessions.answers = {};

    /**
     * Gets a Answer.
     * @param {string} params.name - (Required) Required. The resource name of the Answer to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine_id}/sessions/{session_id}/answers/{answer_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.sessions.answers.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.siteSearchEngine = {};

    /**
     * Upgrade from basic site search to advanced site search.
     * @param {string} params.siteSearchEngine - (Required) Required. Full resource name of the SiteSearchEngine, such as `projects/{project}/locations/{location}/dataStores/{data_store_id}/siteSearchEngine`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.enableAdvancedSiteSearch = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:enableAdvancedSiteSearch', 'POST', params);

    /**
     * Downgrade from advanced site search to basic site search.
     * @param {string} params.siteSearchEngine - (Required) Required. Full resource name of the SiteSearchEngine, such as `projects/{project}/locations/{location}/dataStores/{data_store_id}/siteSearchEngine`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.disableAdvancedSiteSearch = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:disableAdvancedSiteSearch', 'POST', params);

    /**
     * Request on-demand recrawl for a list of URIs.
     * @param {string} params.siteSearchEngine - (Required) Required. Full resource name of the SiteSearchEngine, such as `projects/*\/locations/*\/collections/*\/dataStores/*\/siteSearchEngine`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.recrawlUris = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:recrawlUris', 'POST', params);

    /**
     * Verify target sites' ownership and validity. This API sends all the target sites under site search engine for verification.
     * @param {string} params.parent - (Required) Required. The parent resource shared by all TargetSites being verified. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.batchVerifyTargetSites = (params) => this._makeRequest('v1alpha/{+parent}:batchVerifyTargetSites', 'POST', params);

    /**
     * Returns list of target sites with its domain verification status. This method can only be called under data store with BASIC_SITE_SEARCH state at the moment.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     * @param {string} params.pageToken - A page token, received from a previous `FetchDomainVerificationStatus` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchDomainVerificationStatus` must match the call that provided the page token.
     * @param {string} params.siteSearchEngine - (Required) Required. The site search engine resource under which we fetch all the domain verification status. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.fetchDomainVerificationStatus = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:fetchDomainVerificationStatus', 'GET', params);

    /**
     * Sets the URI Pattern to Document data mapping for an Advanced Site Search DataStore.
     * @param {string} params.siteSearchEngine - (Required) Required. Full resource name of the SiteSearchEngine, such as `projects/*\/locations/*\/collections/*\/dataStores/*\/siteSearchEngine`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.setUriPatternDocumentData = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:setUriPatternDocumentData', 'POST', params);

    /**
     * Gets the URI Pattern to Document data mapping for an Advanced Site Search DataStore.
     * @param {string} params.siteSearchEngine - (Required) Required. Full resource name of the SiteSearchEngine, such as `projects/*\/locations/*\/collections/*\/dataStores/*\/siteSearchEngine`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.getUriPatternDocumentData = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:getUriPatternDocumentData', 'GET', params);

    this.projects.locations.collections.dataStores.siteSearchEngine.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites = {};

    /**
     * Creates a TargetSite.
     * @param {string} params.parent - (Required) Required. Parent resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.create = (params) => this._makeRequest('v1alpha/{+parent}/targetSites', 'POST', params);

    /**
     * Creates TargetSite in a batch.
     * @param {string} params.parent - (Required) Required. The parent resource shared by all TargetSites being created. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. The parent field in the CreateBookRequest messages must either be empty or match this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.batchCreate = (params) => this._makeRequest('v1alpha/{+parent}/targetSites:batchCreate', 'POST', params);

    /**
     * Gets a TargetSite.
     * @param {string} params.name - (Required) Required. Full resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates a TargetSite.
     * @param {string} params.name - (Required) Output only. The fully qualified resource name of the target site. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}` The `target_site_id` is system-generated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a TargetSite.
     * @param {string} params.name - (Required) Required. Full resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Gets a list of TargetSites.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListTargetSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargetSites` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent site search engine resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. If the caller does not have permission to list TargetSites under this site search engine, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.list = (params) => this._makeRequest('v1alpha/{+parent}/targetSites', 'GET', params);

    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.targetSites.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataStores.siteSearchEngine.sitemaps = {};

    /**
     * Creates a Sitemap.
     * @param {string} params.parent - (Required) Required. Parent resource name of the SiteSearchEngine, such as `projects/*\/locations/*\/collections/*\/dataStores/*\/siteSearchEngine`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.sitemaps.create = (params) => this._makeRequest('v1alpha/{+parent}/sitemaps', 'POST', params);

    /**
     * Deletes a Sitemap.
     * @param {string} params.name - (Required) Required. Full resource name of Sitemap, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/sitemaps/{sitemap}`. If the caller does not have permission to access the Sitemap, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested Sitemap does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.sitemaps.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Fetch Sitemaps in a DataStore.
     * @param {string} params.matcher.urisMatcher.uris - The Sitemap uris.
     * @param {string} params.parent - (Required) Required. Parent resource name of the SiteSearchEngine, such as `projects/*\/locations/*\/collections/*\/dataStores/*\/siteSearchEngine`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.siteSearchEngine.sitemaps.fetch = (params) => this._makeRequest('v1alpha/{+parent}/sitemaps:fetch', 'GET', params);

    this.projects.locations.collections.dataStores.userEvents = {};

    /**
     * Writes a single user event.
     * @param {string} params.parent - (Required) Required. The parent resource name. If the write user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the write user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`.
     * @param {boolean} params.writeAsync - If set to true, the user event is written asynchronously after validation, and the API responds without waiting for the write.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.userEvents.write = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:write', 'POST', params);

    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
     * @param {string} params.ets - The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     * @param {string} params.parent - (Required) Required. The parent resource name. If the collect user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the collect user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`.
     * @param {string} params.uri - The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for third-party requests.
     * @param {string} params.userEvent - Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.userEvents.collect = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:collect', 'GET', params);

    /**
     * Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
     * @param {string} params.parent - (Required) Required. The resource name of the catalog under which the events are created. The format is `projects/{project}/locations/global/collections/{collection}/dataStores/{dataStore}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.userEvents.purge = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:purge', 'POST', params);

    /**
     * Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
     * @param {string} params.parent - (Required) Required. Parent DataStore resource name, of the form `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.userEvents.import = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:import', 'POST', params);

    this.projects.locations.collections.dataStores.widgetConfigs = {};

    /**
     * Gets a WidgetConfig.
     * @param {boolean} params.acceptCache - Optional. Whether it's acceptable to load the widget config from cache. If set to true, recent changes on widget configs may take a few minutes to reflect on the end user's view. It's recommended to set to true for maturely developed widgets, as it improves widget performance. Set to false to see changes reflected in prod right away, if your widget is under development.
     * @param {boolean} params.getWidgetConfigRequestOption.turnOffCollectionComponents - Optional. Whether to turn off collection_components in WidgetConfig to reduce latency and data transmission.
     * @param {string} params.name - (Required) Required. Full WidgetConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataStores.widgetConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataConnector = {};

    /**
     * Starts an immediate synchronization process for a DataConnector. Third Party Connector Users must specify which entities should be synced. FHIR Connectors must provide a timestamp to indicate the point in time from which data should be synced.
     * @param {string} params.parent - (Required) Required. Connector name of the form projects/{project}/locations/{location}/collections/ {collection_id}/dataConnector
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataConnector.startConnectorRun = (params) => this._makeRequest('v1alpha/{+parent}:startConnectorRun', 'POST', params);

    /**
     * Uses the per-user refresh token minted with AcquireAndStoreRefreshToken to generate and return a new access token and its details. Takes the access token from cache if available. Rotates the stored refresh token if needed. Uses the end user identity to return the user specific access token. Does *not* return the credentials configured by the administrator. Used by Agentspace action execution and Agentspace UI.
     * @param {string} params.name - (Required) Required. The resource name of the connector for which a token is queried.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataConnector.acquireAccessToken = (params) => this._makeRequest('v1alpha/{+name}:acquireAccessToken', 'POST', params);

    /**
     * Get the secret for the associated connector.
     * @param {string} params.name - (Required) Required. The full resource name of the associated data connector.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataConnector.getConnectorSecret = (params) => this._makeRequest('v1alpha/{+name}:getConnectorSecret', 'GET', params);

    this.projects.locations.collections.dataConnector.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataConnector.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataConnector.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.dataConnector.connectorRuns = {};

    /**
     * Lists the ConnectorRuns of a DataConnector.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, defaults to 10. The maximum value is 50; values above 50 will be coerced to 50. If this field is negative, an INVALID_ARGUMENT error is returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListConnectorRuns` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectorRuns` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent DataConnector resource name, such as `projects/{project}/locations/{location}/collections/{collection_id}/dataConnector`. If the caller does not have permission to list ConnectorRuns under this DataConnector, regardless of whether or not this DataConnector exists, a PERMISSION_DENIED error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.dataConnector.connectorRuns.list = (params) => this._makeRequest('v1alpha/{+parent}/connectorRuns', 'GET', params);

    this.projects.locations.collections.engines = {};

    /**
     * Creates a Engine.
     * @param {string} params.engineId - Required. The ID to use for the Engine, which will become the final component of the Engine's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     * @param {string} params.parent - (Required) Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.create = (params) => this._makeRequest('v1alpha/{+parent}/engines', 'POST', params);

    /**
     * Deletes a Engine.
     * @param {string} params.name - (Required) Required. Full resource name of Engine, such as `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. If the caller does not have permission to delete the Engine, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Engine to delete does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates an Engine
     * @param {string} params.name - (Required) Immutable. Identifier. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` engine should be 1-63 characters, and valid characters are /a-z0-9*\/. Otherwise, an INVALID_ARGUMENT error is returned.
     * @param {string} params.updateMask - Indicates which fields in the provided Engine to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a Engine.
     * @param {string} params.name - (Required) Required. Full resource name of Engine, such as `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all the Engines associated with the project.
     * @param {string} params.filter - Optional. Filter by solution type. For example: solution_type=SOLUTION_TYPE_SEARCH
     * @param {integer} params.pageSize - Optional. Not supported.
     * @param {string} params.pageToken - Optional. Not supported.
     * @param {string} params.parent - (Required) Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.list = (params) => this._makeRequest('v1alpha/{+parent}/engines', 'GET', params);

    /**
     * Pauses the training of an existing engine. Only applicable if SolutionType is SOLUTION_TYPE_RECOMMENDATION.
     * @param {string} params.name - (Required) Required. The name of the engine to pause. Format: `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.pause = (params) => this._makeRequest('v1alpha/{+name}:pause', 'POST', params);

    /**
     * Resumes the training of an existing engine. Only applicable if SolutionType is SOLUTION_TYPE_RECOMMENDATION.
     * @param {string} params.name - (Required) Required. The name of the engine to resume. Format: `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.resume = (params) => this._makeRequest('v1alpha/{+name}:resume', 'POST', params);

    /**
     * Tunes an existing engine. Only applicable if SolutionType is SOLUTION_TYPE_RECOMMENDATION.
     * @param {string} params.name - (Required) Required. The resource name of the engine to tune. Format: `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.tune = (params) => this._makeRequest('v1alpha/{+name}:tune', 'POST', params);

    this.projects.locations.collections.engines.servingConfigs = {};

    /**
     * Performs a search.
     * @param {string} params.servingConfig - (Required) Required. The resource name of the Search serving config, such as `projects/*\/locations/global/collections/default_collection/engines/*\/servingConfigs/default_serving_config`, or `projects/*\/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.servingConfigs.search = (params) => this._makeRequest('v1alpha/{+servingConfig}:search', 'POST', params);

    /**
     * Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.
     * @param {string} params.servingConfig - (Required) Required. The resource name of the Search serving config, such as `projects/*\/locations/global/collections/default_collection/engines/*\/servingConfigs/default_serving_config`, or `projects/*\/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.servingConfigs.searchLite = (params) => this._makeRequest('v1alpha/{+servingConfig}:searchLite', 'POST', params);

    /**
     * Answer query method.
     * @param {string} params.servingConfig - (Required) Required. The resource name of the Search serving config, such as `projects/*\/locations/global/collections/default_collection/engines/*\/servingConfigs/default_serving_config`, or `projects/*\/locations/global/collections/default_collection/dataStores/*\/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.servingConfigs.answer = (params) => this._makeRequest('v1alpha/{+servingConfig}:answer', 'POST', params);

    /**
     * Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.
     * @param {string} params.servingConfig - (Required) Required. The resource name of the Search serving config, such as `projects/*\/locations/global/collections/default_collection/engines/*\/servingConfigs/default_serving_config`, or `projects/*\/locations/global/collections/default_collection/dataStores/*\/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.servingConfigs.streamAnswer = (params) => this._makeRequest('v1alpha/{+servingConfig}:streamAnswer', 'POST', params);

    /**
     * Makes a recommendation, which requires a contextual user event.
     * @param {string} params.servingConfig - (Required) Required. Full resource name of a ServingConfig: `projects/*\/locations/global/collections/*\/engines/*\/servingConfigs/*`, or `projects/*\/locations/global/collections/*\/dataStores/*\/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID is used as the ID of the default serving config. For example, for Engine `projects/*\/locations/global/collections/*\/engines/my-engine`, you can use `projects/*\/locations/global/collections/*\/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.servingConfigs.recommend = (params) => this._makeRequest('v1alpha/{+servingConfig}:recommend', 'POST', params);

    /**
     * Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}/servingConfigs/{serving_config_id}`
     * @param {string} params.updateMask - Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.servingConfigs.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
     * @param {string} params.name - (Required) Required. The resource name of the ServingConfig to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.servingConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all ServingConfigs linked to this dataStore.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. Full resource name of the parent resource. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.servingConfigs.list = (params) => this._makeRequest('v1alpha/{+parent}/servingConfigs', 'GET', params);

    this.projects.locations.collections.engines.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.engines.assistants = {};

    /**
     * Assists the user with a query in a streaming fashion.
     * @param {string} params.name - (Required) Required. The resource name of the Assistant. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.assistants.streamAssist = (params) => this._makeRequest('v1alpha/{+name}:streamAssist', 'POST', params);

    /**
     * Updates an Assistant
     * @param {string} params.name - (Required) Immutable. Resource name of the assistant. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` It must be a UTF-8 encoded string with a length limit of 1024 characters.
     * @param {string} params.updateMask - The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.assistants.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets an Assistant.
     * @param {string} params.name - (Required) Required. Resource name of Assistant. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.assistants.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.engines.completionConfig = {};

    /**
     * Completes the user input with advanced keyword suggestions.
     * @param {string} params.completionConfig - (Required) Required. The completion_config of the parent dataStore or engine resource name for which the completion is performed, such as `projects/*\/locations/global/collections/default_collection/dataStores/*\/completionConfig` `projects/*\/locations/global/collections/default_collection/engines/*\/completionConfig`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.completionConfig.completeQuery = (params) => this._makeRequest('v1alpha/{+completionConfig}:completeQuery', 'POST', params);

    /**
     * Removes the search history suggestion in an engine for a user. This will remove the suggestion from being returned in the AdvancedCompleteQueryResponse.recent_search_suggestions for this user. If the user searches the same suggestion again, the new history will override and suggest this suggestion again.
     * @param {string} params.completionConfig - (Required) Required. The completion_config of the parent engine resource name for which the search history suggestion is to be removed, such as `projects/*\/locations/global/collections/default_collection/engines/*\/completionConfig`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.completionConfig.removeSuggestion = (params) => this._makeRequest('v1alpha/{+completionConfig}:removeSuggestion', 'POST', params);

    this.projects.locations.collections.engines.controls = {};

    /**
     * Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.
     * @param {string} params.controlId - Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value must be within 1-63 characters. Valid characters are /a-z-_/.
     * @param {string} params.parent - (Required) Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.controls.create = (params) => this._makeRequest('v1alpha/{+parent}/controls', 'POST', params);

    /**
     * Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Required. The resource name of the Control to delete. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/controls/{control_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.controls.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a Control. Control action type cannot be changed. If the Control to update does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/*\/locations/global/dataStore/*\/controls/*`
     * @param {string} params.updateMask - Optional. Indicates which fields in the provided Control to update. The following are NOT supported: * Control.name * Control.solution_type If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.controls.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a Control.
     * @param {string} params.name - (Required) Required. The resource name of the Control to get. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/controls/{control_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.controls.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all Controls by their parent DataStore.
     * @param {string} params.filter - Optional. A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. Currently this field is unsupported.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListControls` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.controls.list = (params) => this._makeRequest('v1alpha/{+parent}/controls', 'GET', params);

    this.projects.locations.collections.engines.conversations = {};

    /**
     * Converses a conversation.
     * @param {string} params.name - (Required) Required. The resource name of the Conversation to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`. Use `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.conversations.converse = (params) => this._makeRequest('v1alpha/{+name}:converse', 'POST', params);

    /**
     * Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.
     * @param {string} params.parent - (Required) Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.conversations.create = (params) => this._makeRequest('v1alpha/{+parent}/conversations', 'POST', params);

    /**
     * Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Required. The resource name of the Conversation to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.conversations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/dataStore/*\/conversations/*` or `projects/{project}/locations/global/collections/{collection}/engines/*\/conversations/*`.
     * @param {string} params.updateMask - Indicates which fields in the provided Conversation to update. The following are NOT supported: * Conversation.name If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.conversations.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a Conversation.
     * @param {string} params.name - (Required) Required. The resource name of the Conversation to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.conversations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all Conversations by their parent DataStore.
     * @param {string} params.filter - A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time"
     * @param {integer} params.pageSize - Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.conversations.list = (params) => this._makeRequest('v1alpha/{+parent}/conversations', 'GET', params);

    this.projects.locations.collections.engines.sessions = {};

    /**
     * Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.
     * @param {string} params.parent - (Required) Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.sessions.create = (params) => this._makeRequest('v1alpha/{+parent}/sessions', 'POST', params);

    /**
     * Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Required. The resource name of the Session to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/sessions/{session_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.sessions.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/engines/{engine}/sessions/*`
     * @param {string} params.updateMask - Indicates which fields in the provided Session to update. The following are NOT supported: * Session.name If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.sessions.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a Session.
     * @param {boolean} params.includeAnswerDetails - Optional. If set to true, the full session including all answer details will be returned.
     * @param {string} params.name - (Required) Required. The resource name of the Session to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/sessions/{session_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.sessions.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all Sessions by their parent DataStore.
     * @param {string} params.filter - A comma-separated list of fields to filter by, in EBNF grammar. The supported fields are: * `user_pseudo_id` * `state` * `display_name` * `starred` * `is_pinned` * `labels` * `create_time` * `update_time` Examples: "user_pseudo_id = some_id" "display_name = \"some_name\"" "starred = true" "is_pinned=true AND (NOT labels:hidden)" "create_time > \"1970-01-01T12:00:00Z\""
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `session_name` * `is_pinned` Example: * "update_time desc" * "create_time" * "is_pinned desc,update_time desc": list sessions by is_pinned first, then by update_time.
     * @param {integer} params.pageSize - Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListSessions` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.sessions.list = (params) => this._makeRequest('v1alpha/{+parent}/sessions', 'GET', params);

    this.projects.locations.collections.engines.sessions.answers = {};

    /**
     * Gets a Answer.
     * @param {string} params.name - (Required) Required. The resource name of the Answer to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine_id}/sessions/{session_id}/answers/{answer_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.sessions.answers.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.collections.engines.sessions.files = {};

    /**
     * Lists metadata for all files in the current session.
     * @param {string} params.filter - Optional. The filter syntax consists of an expression language for constructing a predicate from one or more fields of the files being filtered. Filter expression is case-sensitive. Currently supported field names are: * upload_time * last_add_time * last_use_time * file_name * mime_type Some examples of filters would be: * "file_name = 'file_1'" * "file_name = 'file_1' AND mime_type = 'text/plain'" * "last_use_time > '2025-06-14T12:00:00Z'" For a full description of the filter format, please see https://google.aip.dev/160.
     * @param {integer} params.pageSize - Optional. The maximum number of files to return. The service may return fewer than this value. If unspecified, at most 100 files will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. If user specifies a value less than or equal to 0 - the request will be rejected with an INVALID_ARGUMENT error.
     * @param {string} params.pageToken - Optional. A page token received from a previous `ListFiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFiles` must match the call that provided the page token (except `page_size`, which may differ).
     * @param {string} params.parent - (Required) Required. The resource name of the Session. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/sessions/{session}` Name of the session resource to which the file belong.
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.sessions.files.list = (params) => this._makeRequest('v1alpha/{+parent}/files', 'GET', params);

    this.projects.locations.collections.engines.widgetConfigs = {};

    /**
     * Gets a WidgetConfig.
     * @param {boolean} params.acceptCache - Optional. Whether it's acceptable to load the widget config from cache. If set to true, recent changes on widget configs may take a few minutes to reflect on the end user's view. It's recommended to set to true for maturely developed widgets, as it improves widget performance. Set to false to see changes reflected in prod right away, if your widget is under development.
     * @param {boolean} params.getWidgetConfigRequestOption.turnOffCollectionComponents - Optional. Whether to turn off collection_components in WidgetConfig to reduce latency and data transmission.
     * @param {string} params.name - (Required) Required. Full WidgetConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.collections.engines.widgetConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.dataStores = {};

    /**
     * Completes the specified user input with keyword suggestions.
     * @param {string} params.dataStore - (Required) Required. The parent data store resource name for which the completion is performed, such as `projects/*\/locations/global/collections/default_collection/dataStores/default_data_store`.
     * @param {boolean} params.includeTailSuggestions - Indicates if tail suggestions should be returned if there are no suggestions that match the full query. Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned.
     * @param {string} params.query - Required. The typeahead input used to fetch suggestions. Maximum length is 128 characters.
     * @param {string} params.queryModel - Specifies the autocomplete data model. This overrides any model specified in the Configuration > Autocomplete section of the Cloud console. Currently supported values: * `document` - Using suggestions generated from user-imported documents. * `search-history` - Using suggestions generated from the past history of SearchService.Search API calls. Do not use it when there is no traffic for Search API. * `user-event` - Using suggestions generated from user-imported search events. * `document-completable` - Using suggestions taken directly from user-imported document fields marked as completable. Default values: * `document` is the default model for regular dataStores. * `search-history` is the default model for site search dataStores.
     * @param {string} params.userPseudoId - A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.completeQuery = (params) => this._makeRequest('v1alpha/{+dataStore}:completeQuery', 'GET', params);

    /**
     * Creates a DataStore. DataStore is for storing Documents. To serve these documents for Search, or Recommendation use case, an Engine needs to be created separately.
     * @param {string} params.cmekConfigName - Resource name of the CmekConfig to use for protecting this DataStore.
     * @param {boolean} params.createAdvancedSiteSearch - A boolean flag indicating whether user want to directly create an advanced data store for site search. If the data store is not configured as site search (GENERIC vertical and PUBLIC_WEBSITE content_config), this flag will be ignored.
     * @param {string} params.dataStoreId - Required. The ID to use for the DataStore, which will become the final component of the DataStore's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned.
     * @param {boolean} params.disableCmek - DataStore without CMEK protections. If a default CmekConfig is set for the project, setting this field will override the default CmekConfig as well.
     * @param {string} params.parent - (Required) Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}`.
     * @param {boolean} params.skipDefaultSchemaCreation - A boolean flag indicating whether to skip the default schema creation for the data store. Only enable this flag if you are certain that the default schema is incompatible with your use case. If set to true, you must manually create a schema for the data store before any documents can be ingested. This flag cannot be specified if `data_store.starting_schema` is specified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.create = (params) => this._makeRequest('v1alpha/{+parent}/dataStores', 'POST', params);

    /**
     * Gets a DataStore.
     * @param {string} params.name - (Required) Required. Full resource name of DataStore, such as `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. If the caller does not have permission to access the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested DataStore does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all the DataStores associated with the project.
     * @param {string} params.filter - Filter by solution type . For example: `filter = 'solution_type:SOLUTION_TYPE_SEARCH'`
     * @param {integer} params.pageSize - Maximum number of DataStores to return. If unspecified, defaults to 10. The maximum allowed value is 50. Values above 50 will be coerced to 50. If this field is negative, an INVALID_ARGUMENT is returned.
     * @param {string} params.pageToken - A page token ListDataStoresResponse.next_page_token, received from a previous DataStoreService.ListDataStores call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DataStoreService.ListDataStores must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned.
     * @param {string} params.parent - (Required) Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection_id}`. If the caller does not have permission to list DataStores under this location, regardless of whether or not this data store exists, a PERMISSION_DENIED error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.list = (params) => this._makeRequest('v1alpha/{+parent}/dataStores', 'GET', params);

    /**
     * Deletes a DataStore.
     * @param {string} params.name - (Required) Required. Full resource name of DataStore, such as `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. If the caller does not have permission to delete the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the DataStore to delete does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a DataStore
     * @param {string} params.name - (Required) Immutable. Identifier. The full resource name of the data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     * @param {string} params.updateMask - Indicates which fields in the provided DataStore to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a DocumentProcessingConfig.
     * @param {string} params.name - (Required) Required. Full DocumentProcessingConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/documentProcessingConfig`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.getDocumentProcessingConfig = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates the DocumentProcessingConfig. DocumentProcessingConfig is a singleon resource of DataStore. It's empty when DataStore is created. The first call to this method will set up DocumentProcessingConfig.
     * @param {string} params.name - (Required) The full resource name of the Document Processing Config. Format: `projects/*\/locations/*\/collections/*\/dataStores/*\/documentProcessingConfig`.
     * @param {string} params.updateMask - Indicates which fields in the provided DocumentProcessingConfig to update. The following are the only supported fields: * DocumentProcessingConfig.ocr_config If not set, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.updateDocumentProcessingConfig = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets the SiteSearchEngine.
     * @param {string} params.name - (Required) Required. Resource name of SiteSearchEngine, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. If the caller does not have permission to access the [SiteSearchEngine], regardless of whether or not it exists, a PERMISSION_DENIED error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.getSiteSearchEngine = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.dataStores.servingConfigs = {};

    /**
     * Performs a search.
     * @param {string} params.servingConfig - (Required) Required. The resource name of the Search serving config, such as `projects/*\/locations/global/collections/default_collection/engines/*\/servingConfigs/default_serving_config`, or `projects/*\/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.servingConfigs.search = (params) => this._makeRequest('v1alpha/{+servingConfig}:search', 'POST', params);

    /**
     * Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.
     * @param {string} params.servingConfig - (Required) Required. The resource name of the Search serving config, such as `projects/*\/locations/global/collections/default_collection/engines/*\/servingConfigs/default_serving_config`, or `projects/*\/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.servingConfigs.searchLite = (params) => this._makeRequest('v1alpha/{+servingConfig}:searchLite', 'POST', params);

    /**
     * Answer query method.
     * @param {string} params.servingConfig - (Required) Required. The resource name of the Search serving config, such as `projects/*\/locations/global/collections/default_collection/engines/*\/servingConfigs/default_serving_config`, or `projects/*\/locations/global/collections/default_collection/dataStores/*\/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.servingConfigs.answer = (params) => this._makeRequest('v1alpha/{+servingConfig}:answer', 'POST', params);

    /**
     * Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.
     * @param {string} params.servingConfig - (Required) Required. The resource name of the Search serving config, such as `projects/*\/locations/global/collections/default_collection/engines/*\/servingConfigs/default_serving_config`, or `projects/*\/locations/global/collections/default_collection/dataStores/*\/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.servingConfigs.streamAnswer = (params) => this._makeRequest('v1alpha/{+servingConfig}:streamAnswer', 'POST', params);

    /**
     * Makes a recommendation, which requires a contextual user event.
     * @param {string} params.servingConfig - (Required) Required. Full resource name of a ServingConfig: `projects/*\/locations/global/collections/*\/engines/*\/servingConfigs/*`, or `projects/*\/locations/global/collections/*\/dataStores/*\/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID is used as the ID of the default serving config. For example, for Engine `projects/*\/locations/global/collections/*\/engines/my-engine`, you can use `projects/*\/locations/global/collections/*\/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.servingConfigs.recommend = (params) => this._makeRequest('v1alpha/{+servingConfig}:recommend', 'POST', params);

    /**
     * Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}/servingConfigs/{serving_config_id}`
     * @param {string} params.updateMask - Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.servingConfigs.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.
     * @param {string} params.name - (Required) Required. The resource name of the ServingConfig to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.servingConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all ServingConfigs linked to this dataStore.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. Full resource name of the parent resource. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.servingConfigs.list = (params) => this._makeRequest('v1alpha/{+parent}/servingConfigs', 'GET', params);

    this.projects.locations.dataStores.models = {};

    this.projects.locations.dataStores.models.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.models.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.models.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.dataStores.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.dataStores.completionConfig = {};

    /**
     * Completes the user input with advanced keyword suggestions.
     * @param {string} params.completionConfig - (Required) Required. The completion_config of the parent dataStore or engine resource name for which the completion is performed, such as `projects/*\/locations/global/collections/default_collection/dataStores/*\/completionConfig` `projects/*\/locations/global/collections/default_collection/engines/*\/completionConfig`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.completionConfig.completeQuery = (params) => this._makeRequest('v1alpha/{+completionConfig}:completeQuery', 'POST', params);

    this.projects.locations.dataStores.suggestionDenyListEntries = {};

    /**
     * Imports all SuggestionDenyListEntry for a DataStore.
     * @param {string} params.parent - (Required) Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/*\/locations/*\/collections/*\/dataStores/*.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.suggestionDenyListEntries.import = (params) => this._makeRequest('v1alpha/{+parent}/suggestionDenyListEntries:import', 'POST', params);

    /**
     * Permanently deletes all SuggestionDenyListEntry for a DataStore.
     * @param {string} params.parent - (Required) Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/*\/locations/*\/collections/*\/dataStores/*.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.suggestionDenyListEntries.purge = (params) => this._makeRequest('v1alpha/{+parent}/suggestionDenyListEntries:purge', 'POST', params);

    this.projects.locations.dataStores.completionSuggestions = {};

    /**
     * Imports CompletionSuggestions for a DataStore.
     * @param {string} params.parent - (Required) Required. The parent data store resource name for which to import customer autocomplete suggestions. Follows pattern `projects/*\/locations/*\/collections/*\/dataStores/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.completionSuggestions.import = (params) => this._makeRequest('v1alpha/{+parent}/completionSuggestions:import', 'POST', params);

    /**
     * Permanently deletes all CompletionSuggestions for a DataStore.
     * @param {string} params.parent - (Required) Required. The parent data store resource name for which to purge completion suggestions. Follows pattern projects/*\/locations/*\/collections/*\/dataStores/*.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.completionSuggestions.purge = (params) => this._makeRequest('v1alpha/{+parent}/completionSuggestions:purge', 'POST', params);

    this.projects.locations.dataStores.controls = {};

    /**
     * Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.
     * @param {string} params.controlId - Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value must be within 1-63 characters. Valid characters are /a-z-_/.
     * @param {string} params.parent - (Required) Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.controls.create = (params) => this._makeRequest('v1alpha/{+parent}/controls', 'POST', params);

    /**
     * Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Required. The resource name of the Control to delete. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/controls/{control_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.controls.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a Control. Control action type cannot be changed. If the Control to update does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/*\/locations/global/dataStore/*\/controls/*`
     * @param {string} params.updateMask - Optional. Indicates which fields in the provided Control to update. The following are NOT supported: * Control.name * Control.solution_type If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.controls.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a Control.
     * @param {string} params.name - (Required) Required. The resource name of the Control to get. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/controls/{control_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.controls.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all Controls by their parent DataStore.
     * @param {string} params.filter - Optional. A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. Currently this field is unsupported.
     * @param {integer} params.pageSize - Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListControls` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.controls.list = (params) => this._makeRequest('v1alpha/{+parent}/controls', 'GET', params);

    this.projects.locations.dataStores.conversations = {};

    /**
     * Converses a conversation.
     * @param {string} params.name - (Required) Required. The resource name of the Conversation to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`. Use `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.conversations.converse = (params) => this._makeRequest('v1alpha/{+name}:converse', 'POST', params);

    /**
     * Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.
     * @param {string} params.parent - (Required) Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.conversations.create = (params) => this._makeRequest('v1alpha/{+parent}/conversations', 'POST', params);

    /**
     * Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Required. The resource name of the Conversation to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.conversations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/dataStore/*\/conversations/*` or `projects/{project}/locations/global/collections/{collection}/engines/*\/conversations/*`.
     * @param {string} params.updateMask - Indicates which fields in the provided Conversation to update. The following are NOT supported: * Conversation.name If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.conversations.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a Conversation.
     * @param {string} params.name - (Required) Required. The resource name of the Conversation to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.conversations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all Conversations by their parent DataStore.
     * @param {string} params.filter - A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id"
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time"
     * @param {integer} params.pageSize - Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.conversations.list = (params) => this._makeRequest('v1alpha/{+parent}/conversations', 'GET', params);

    this.projects.locations.dataStores.branches = {};

    /**
     * Gets index freshness metadata for Documents. Supported for website search only.
     * @param {string} params.matcher.fhirMatcher.fhirResources - Required. The FHIR resources to match by. Format: projects/{project}/locations/{location}/datasets/{dataset}/fhirStores/{fhir_store}/fhir/{resource_type}/{fhir_resource_id}
     * @param {string} params.matcher.urisMatcher.uris - The exact URIs to match by.
     * @param {string} params.parent - (Required) Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.batchGetDocumentsMetadata = (params) => this._makeRequest('v1alpha/{+parent}/batchGetDocumentsMetadata', 'GET', params);

    this.projects.locations.dataStores.branches.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.projects.locations.dataStores.branches.documents = {};

    /**
     * Gets a Document.
     * @param {string} params.name - (Required) Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Document does not exist, a `NOT_FOUND` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.documents.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Gets a list of Documents.
     * @param {integer} params.pageSize - Maximum number of Documents to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 are set to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.pageToken - A page token ListDocumentsResponse.next_page_token, received from a previous DocumentService.ListDocuments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DocumentService.ListDocuments must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.parent - (Required) Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. Use `default_branch` as the branch ID, to list documents under the default branch. If the caller does not have permission to list Documents under this branch, regardless of whether or not this branch exists, a `PERMISSION_DENIED` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.documents.list = (params) => this._makeRequest('v1alpha/{+parent}/documents', 'GET', params);

    /**
     * Creates a Document.
     * @param {string} params.documentId - Required. The ID to use for the Document, which becomes the final component of the Document.name. If the caller does not have permission to create the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all Documents with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.parent - (Required) Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.documents.create = (params) => this._makeRequest('v1alpha/{+parent}/documents', 'POST', params);

    /**
     * Updates a Document.
     * @param {boolean} params.allowMissing - If set to `true` and the Document is not found, a new Document is be created.
     * @param {string} params.name - (Required) Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     * @param {string} params.updateMask - Indicates which fields in the provided imported 'document' to update. If not set, by default updates all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.documents.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a Document.
     * @param {string} params.name - (Required) Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to delete the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the Document to delete does not exist, a `NOT_FOUND` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.documents.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items are created. Note: It is possible for a subset of the Documents to be successfully updated.
     * @param {string} params.parent - (Required) Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. Requires create/update permission.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.documents.import = (params) => this._makeRequest('v1alpha/{+parent}/documents:import', 'POST', params);

    /**
     * Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.
     * @param {string} params.parent - (Required) Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.documents.purge = (params) => this._makeRequest('v1alpha/{+parent}/documents:purge', 'POST', params);

    /**
     * Gets the parsed layout information for a Document.
     * @param {string} params.imageId - Optional. Specifies config for IMAGE_BYTES.
     * @param {string} params.name - (Required) Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Document does not exist, a `NOT_FOUND` error is returned.
     * @param {string} params.processedDocumentFormat - What format output should be. If unspecified, defaults to JSON.
     * @param {string} params.processedDocumentType - Required. What type of processing to return.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.documents.getProcessedDocument = (params) => this._makeRequest('v1alpha/{+name}:getProcessedDocument', 'GET', params);

    this.projects.locations.dataStores.branches.documents.chunks = {};

    /**
     * Gets a Document.
     * @param {string} params.name - (Required) Required. Full resource name of Chunk, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}/chunks/{chunk}`. If the caller does not have permission to access the Chunk, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Chunk does not exist, a `NOT_FOUND` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.documents.chunks.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Gets a list of Chunks.
     * @param {integer} params.pageSize - Maximum number of Chunks to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.pageToken - A page token ListChunksResponse.next_page_token, received from a previous ChunkService.ListChunks call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ChunkService.ListChunks must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.parent - (Required) Required. The parent document resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to list Chunks under this document, regardless of whether or not this document exists, a `PERMISSION_DENIED` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.branches.documents.chunks.list = (params) => this._makeRequest('v1alpha/{+parent}/chunks', 'GET', params);

    this.projects.locations.dataStores.schemas = {};

    /**
     * Gets a Schema.
     * @param {string} params.name - (Required) Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.schemas.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Gets a list of Schemas.
     * @param {integer} params.pageSize - The maximum number of Schemas to return. The service may return fewer than this value. If unspecified, at most 100 Schemas are returned. The maximum value is 1000; values above 1000 are set to 1000.
     * @param {string} params.pageToken - A page token, received from a previous SchemaService.ListSchemas call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SchemaService.ListSchemas must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.schemas.list = (params) => this._makeRequest('v1alpha/{+parent}/schemas', 'GET', params);

    /**
     * Creates a Schema.
     * @param {string} params.parent - (Required) Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`.
     * @param {string} params.schemaId - Required. The ID to use for the Schema, which becomes the final component of the Schema.name. This field should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.schemas.create = (params) => this._makeRequest('v1alpha/{+parent}/schemas', 'POST', params);

    /**
     * Updates a Schema.
     * @param {boolean} params.allowMissing - If set to true, and the Schema is not found, a new Schema is created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.schemas.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a Schema.
     * @param {string} params.name - (Required) Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.schemas.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.dataStores.sessions = {};

    /**
     * Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.
     * @param {string} params.parent - (Required) Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.sessions.create = (params) => this._makeRequest('v1alpha/{+parent}/sessions', 'POST', params);

    /**
     * Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Required. The resource name of the Session to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/sessions/{session_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.sessions.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.
     * @param {string} params.name - (Required) Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/engines/{engine}/sessions/*`
     * @param {string} params.updateMask - Indicates which fields in the provided Session to update. The following are NOT supported: * Session.name If not set or empty, all supported fields are updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.sessions.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Gets a Session.
     * @param {boolean} params.includeAnswerDetails - Optional. If set to true, the full session including all answer details will be returned.
     * @param {string} params.name - (Required) Required. The resource name of the Session to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/sessions/{session_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.sessions.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists all Sessions by their parent DataStore.
     * @param {string} params.filter - A comma-separated list of fields to filter by, in EBNF grammar. The supported fields are: * `user_pseudo_id` * `state` * `display_name` * `starred` * `is_pinned` * `labels` * `create_time` * `update_time` Examples: "user_pseudo_id = some_id" "display_name = \"some_name\"" "starred = true" "is_pinned=true AND (NOT labels:hidden)" "create_time > \"1970-01-01T12:00:00Z\""
     * @param {string} params.orderBy - A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `session_name` * `is_pinned` Example: * "update_time desc" * "create_time" * "is_pinned desc,update_time desc": list sessions by is_pinned first, then by update_time.
     * @param {integer} params.pageSize - Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListSessions` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.sessions.list = (params) => this._makeRequest('v1alpha/{+parent}/sessions', 'GET', params);

    this.projects.locations.dataStores.sessions.answers = {};

    /**
     * Gets a Answer.
     * @param {string} params.name - (Required) Required. The resource name of the Answer to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine_id}/sessions/{session_id}/answers/{answer_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.sessions.answers.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.dataStores.siteSearchEngine = {};

    /**
     * Upgrade from basic site search to advanced site search.
     * @param {string} params.siteSearchEngine - (Required) Required. Full resource name of the SiteSearchEngine, such as `projects/{project}/locations/{location}/dataStores/{data_store_id}/siteSearchEngine`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.siteSearchEngine.enableAdvancedSiteSearch = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:enableAdvancedSiteSearch', 'POST', params);

    /**
     * Downgrade from advanced site search to basic site search.
     * @param {string} params.siteSearchEngine - (Required) Required. Full resource name of the SiteSearchEngine, such as `projects/{project}/locations/{location}/dataStores/{data_store_id}/siteSearchEngine`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.siteSearchEngine.disableAdvancedSiteSearch = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:disableAdvancedSiteSearch', 'POST', params);

    /**
     * Request on-demand recrawl for a list of URIs.
     * @param {string} params.siteSearchEngine - (Required) Required. Full resource name of the SiteSearchEngine, such as `projects/*\/locations/*\/collections/*\/dataStores/*\/siteSearchEngine`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.siteSearchEngine.recrawlUris = (params) => this._makeRequest('v1alpha/{+siteSearchEngine}:recrawlUris', 'POST', params);

    this.projects.locations.dataStores.siteSearchEngine.targetSites = {};

    /**
     * Creates a TargetSite.
     * @param {string} params.parent - (Required) Required. Parent resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.siteSearchEngine.targetSites.create = (params) => this._makeRequest('v1alpha/{+parent}/targetSites', 'POST', params);

    /**
     * Creates TargetSite in a batch.
     * @param {string} params.parent - (Required) Required. The parent resource shared by all TargetSites being created. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. The parent field in the CreateBookRequest messages must either be empty or match this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.siteSearchEngine.targetSites.batchCreate = (params) => this._makeRequest('v1alpha/{+parent}/targetSites:batchCreate', 'POST', params);

    /**
     * Gets a TargetSite.
     * @param {string} params.name - (Required) Required. Full resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.siteSearchEngine.targetSites.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates a TargetSite.
     * @param {string} params.name - (Required) Output only. The fully qualified resource name of the target site. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}` The `target_site_id` is system-generated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.siteSearchEngine.targetSites.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a TargetSite.
     * @param {string} params.name - (Required) Required. Full resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.siteSearchEngine.targetSites.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Gets a list of TargetSites.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned.
     * @param {string} params.pageToken - A page token, received from a previous `ListTargetSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargetSites` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent site search engine resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. If the caller does not have permission to list TargetSites under this site search engine, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.siteSearchEngine.targetSites.list = (params) => this._makeRequest('v1alpha/{+parent}/targetSites', 'GET', params);

    this.projects.locations.dataStores.siteSearchEngine.sitemaps = {};

    /**
     * Creates a Sitemap.
     * @param {string} params.parent - (Required) Required. Parent resource name of the SiteSearchEngine, such as `projects/*\/locations/*\/collections/*\/dataStores/*\/siteSearchEngine`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.siteSearchEngine.sitemaps.create = (params) => this._makeRequest('v1alpha/{+parent}/sitemaps', 'POST', params);

    /**
     * Deletes a Sitemap.
     * @param {string} params.name - (Required) Required. Full resource name of Sitemap, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/sitemaps/{sitemap}`. If the caller does not have permission to access the Sitemap, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested Sitemap does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.siteSearchEngine.sitemaps.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Fetch Sitemaps in a DataStore.
     * @param {string} params.matcher.urisMatcher.uris - The Sitemap uris.
     * @param {string} params.parent - (Required) Required. Parent resource name of the SiteSearchEngine, such as `projects/*\/locations/*\/collections/*\/dataStores/*\/siteSearchEngine`.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.siteSearchEngine.sitemaps.fetch = (params) => this._makeRequest('v1alpha/{+parent}/sitemaps:fetch', 'GET', params);

    this.projects.locations.dataStores.userEvents = {};

    /**
     * Writes a single user event.
     * @param {string} params.parent - (Required) Required. The parent resource name. If the write user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the write user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`.
     * @param {boolean} params.writeAsync - If set to true, the user event is written asynchronously after validation, and the API responds without waiting for the write.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.userEvents.write = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:write', 'POST', params);

    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
     * @param {string} params.ets - The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     * @param {string} params.parent - (Required) Required. The parent resource name. If the collect user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the collect user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`.
     * @param {string} params.uri - The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for third-party requests.
     * @param {string} params.userEvent - Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.userEvents.collect = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:collect', 'GET', params);

    /**
     * Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.
     * @param {string} params.parent - (Required) Required. The resource name of the catalog under which the events are created. The format is `projects/{project}/locations/global/collections/{collection}/dataStores/{dataStore}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.userEvents.purge = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:purge', 'POST', params);

    /**
     * Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
     * @param {string} params.parent - (Required) Required. Parent DataStore resource name, of the form `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.userEvents.import = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:import', 'POST', params);

    this.projects.locations.dataStores.widgetConfigs = {};

    /**
     * Gets a WidgetConfig.
     * @param {boolean} params.acceptCache - Optional. Whether it's acceptable to load the widget config from cache. If set to true, recent changes on widget configs may take a few minutes to reflect on the end user's view. It's recommended to set to true for maturely developed widgets, as it improves widget performance. Set to false to see changes reflected in prod right away, if your widget is under development.
     * @param {boolean} params.getWidgetConfigRequestOption.turnOffCollectionComponents - Optional. Whether to turn off collection_components in WidgetConfig to reduce latency and data transmission.
     * @param {string} params.name - (Required) Required. Full WidgetConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.dataStores.widgetConfigs.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.evaluations = {};

    /**
     * Gets a Evaluation.
     * @param {string} params.name - (Required) Required. Full resource name of Evaluation, such as `projects/{project}/locations/{location}/evaluations/{evaluation}`. If the caller does not have permission to access the Evaluation, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested Evaluation does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Gets a list of Evaluations.
     * @param {integer} params.pageSize - Maximum number of Evaluations to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.pageToken - A page token ListEvaluationsResponse.next_page_token, received from a previous EvaluationService.ListEvaluations call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to EvaluationService.ListEvaluations must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.parent - (Required) Required. The parent location resource name, such as `projects/{project}/locations/{location}`. If the caller does not have permission to list Evaluations under this location, regardless of whether or not this location exists, a `PERMISSION_DENIED` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.list = (params) => this._makeRequest('v1alpha/{+parent}/evaluations', 'GET', params);

    /**
     * Creates a Evaluation. Upon creation, the evaluation will be automatically triggered and begin execution.
     * @param {string} params.parent - (Required) Required. The parent resource name, such as `projects/{project}/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.create = (params) => this._makeRequest('v1alpha/{+parent}/evaluations', 'POST', params);

    /**
     * Gets a list of results for a given a Evaluation.
     * @param {string} params.evaluation - (Required) Required. The evaluation resource name, such as `projects/{project}/locations/{location}/evaluations/{evaluation}`. If the caller does not have permission to list ListEvaluationResultsResponse.EvaluationResult under this evaluation, regardless of whether or not this evaluation set exists, a `PERMISSION_DENIED` error is returned.
     * @param {integer} params.pageSize - Maximum number of ListEvaluationResultsResponse.EvaluationResult to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.pageToken - A page token ListEvaluationResultsResponse.next_page_token, received from a previous EvaluationService.ListEvaluationResults call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to EvaluationService.ListEvaluationResults must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.listResults = (params) => this._makeRequest('v1alpha/{+evaluation}:listResults', 'GET', params);

    this.projects.locations.evaluations.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.groundingConfigs = {};

    /**
     * Performs a grounding check.
     * @param {string} params.groundingConfig - (Required) Required. The resource name of the grounding config, such as `projects/*\/locations/global/groundingConfigs/default_grounding_config`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.groundingConfigs.check = (params) => this._makeRequest('v1alpha/{+groundingConfig}:check', 'POST', params);

    this.projects.locations.identityMappingStores = {};

    /**
     * Creates a new Identity Mapping Store.
     * @param {string} params.cmekConfigName - Resource name of the CmekConfig to use for protecting this Identity Mapping Store.
     * @param {boolean} params.disableCmek - Identity Mapping Store without CMEK protections. If a default CmekConfig is set for the project, setting this field will override the default CmekConfig as well.
     * @param {string} params.identityMappingStoreId - Required. The ID of the Identity Mapping Store to create. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 63 characters.
     * @param {string} params.parent - (Required) Required. The parent collection resource name, such as `projects/{project}/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.identityMappingStores.create = (params) => this._makeRequest('v1alpha/{+parent}/identityMappingStores', 'POST', params);

    /**
     * Gets the Identity Mapping Store.
     * @param {string} params.name - (Required) Required. The name of the Identity Mapping Store to get. Format: `projects/{project}/locations/{location}/identityMappingStores/{identityMappingStore}`
     * @return {object} The API response object.
     */
    this.projects.locations.identityMappingStores.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Deletes the Identity Mapping Store.
     * @param {string} params.name - (Required) Required. The name of the Identity Mapping Store to delete. Format: `projects/{project}/locations/{location}/identityMappingStores/{identityMappingStore}`
     * @return {object} The API response object.
     */
    this.projects.locations.identityMappingStores.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Imports a list of Identity Mapping Entries to an Identity Mapping Store.
     * @param {string} params.identityMappingStore - (Required) Required. The name of the Identity Mapping Store to import Identity Mapping Entries to. Format: `projects/{project}/locations/{location}/identityMappingStores/{identityMappingStore}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.identityMappingStores.importIdentityMappings = (params) => this._makeRequest('v1alpha/{+identityMappingStore}:importIdentityMappings', 'POST', params);

    /**
     * Purges specified or all Identity Mapping Entries from an Identity Mapping Store.
     * @param {string} params.identityMappingStore - (Required) Required. The name of the Identity Mapping Store to purge Identity Mapping Entries from. Format: `projects/{project}/locations/{location}/identityMappingStores/{identityMappingStore}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.identityMappingStores.purgeIdentityMappings = (params) => this._makeRequest('v1alpha/{+identityMappingStore}:purgeIdentityMappings', 'POST', params);

    /**
     * Lists Identity Mappings in an Identity Mapping Store.
     * @param {string} params.identityMappingStore - (Required) Required. The name of the Identity Mapping Store to list Identity Mapping Entries in. Format: `projects/{project}/locations/{location}/identityMappingStores/{identityMappingStore}`
     * @param {integer} params.pageSize - Maximum number of IdentityMappings to return. If unspecified, defaults to 2000. The maximum allowed value is 10000. Values above 10000 will be coerced to 10000.
     * @param {string} params.pageToken - A page token, received from a previous `ListIdentityMappings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIdentityMappings` must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.projects.locations.identityMappingStores.listIdentityMappings = (params) => this._makeRequest('v1alpha/{+identityMappingStore}:listIdentityMappings', 'GET', params);

    /**
     * Lists all Identity Mapping Stores.
     * @param {integer} params.pageSize - Maximum number of IdentityMappingStores to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListIdentityMappingStores` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIdentityMappingStores` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent of the Identity Mapping Stores to list. Format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.identityMappingStores.list = (params) => this._makeRequest('v1alpha/{+parent}/identityMappingStores', 'GET', params);

    this.projects.locations.identityMappingStores.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.identityMappingStores.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.identityMappingStores.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.rankingConfigs = {};

    /**
     * Ranks a list of text records based on the given input query.
     * @param {string} params.rankingConfig - (Required) Required. The resource name of the rank service config, such as `projects/{project_num}/locations/{location}/rankingConfigs/default_ranking_config`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.rankingConfigs.rank = (params) => this._makeRequest('v1alpha/{+rankingConfig}:rank', 'POST', params);

    this.projects.locations.requirements = {};

    /**
     * Check a particular requirement.
     * @param {string} params.location - (Required) Required. Full resource name of the location. Format `projects/{project_number_or_id}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.requirements.checkRequirement = (params) => this._makeRequest('v1alpha/{+location}/requirements:checkRequirement', 'POST', params);

    this.projects.locations.sampleQuerySets = {};

    /**
     * Gets a SampleQuerySet.
     * @param {string} params.name - (Required) Required. Full resource name of SampleQuerySet, such as `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}`. If the caller does not have permission to access the SampleQuerySet, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested SampleQuerySet does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.sampleQuerySets.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Gets a list of SampleQuerySets.
     * @param {integer} params.pageSize - Maximum number of SampleQuerySets to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.pageToken - A page token ListSampleQuerySetsResponse.next_page_token, received from a previous SampleQuerySetService.ListSampleQuerySets call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SampleQuerySetService.ListSampleQuerySets must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.parent - (Required) Required. The parent location resource name, such as `projects/{project}/locations/{location}`. If the caller does not have permission to list SampleQuerySets under this location, regardless of whether or not this location exists, a `PERMISSION_DENIED` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.sampleQuerySets.list = (params) => this._makeRequest('v1alpha/{+parent}/sampleQuerySets', 'GET', params);

    /**
     * Creates a SampleQuerySet
     * @param {string} params.parent - (Required) Required. The parent resource name, such as `projects/{project}/locations/{location}`.
     * @param {string} params.sampleQuerySetId - Required. The ID to use for the SampleQuerySet, which will become the final component of the SampleQuerySet.name. If the caller does not have permission to create the SampleQuerySet, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all SampleQuerySets with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sampleQuerySets.create = (params) => this._makeRequest('v1alpha/{+parent}/sampleQuerySets', 'POST', params);

    /**
     * Updates a SampleQuerySet.
     * @param {string} params.name - (Required) Identifier. The full resource name of the SampleQuerySet, in the format of `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     * @param {string} params.updateMask - Indicates which fields in the provided imported 'sample query set' to update. If not set, will by default update all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sampleQuerySets.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a SampleQuerySet.
     * @param {string} params.name - (Required) Required. Full resource name of SampleQuerySet, such as `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}`. If the caller does not have permission to delete the SampleQuerySet, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the SampleQuerySet to delete does not exist, a `NOT_FOUND` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.sampleQuerySets.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.sampleQuerySets.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.sampleQuerySets.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.sampleQuerySets.sampleQueries = {};

    /**
     * Gets a SampleQuery.
     * @param {string} params.name - (Required) Required. Full resource name of SampleQuery, such as `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}/sampleQueries/{sample_query}`. If the caller does not have permission to access the SampleQuery, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested SampleQuery does not exist, a NOT_FOUND error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.sampleQuerySets.sampleQueries.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Gets a list of SampleQuerys.
     * @param {integer} params.pageSize - Maximum number of SampleQuerys to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.pageToken - A page token ListSampleQueriesResponse.next_page_token, received from a previous SampleQueryService.ListSampleQueries call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SampleQueryService.ListSampleQueries must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @param {string} params.parent - (Required) Required. The parent sample query set resource name, such as `projects/{project}/locations/{location}/sampleQuerySets/{sampleQuerySet}`. If the caller does not have permission to list SampleQuerys under this sample query set, regardless of whether or not this sample query set exists, a `PERMISSION_DENIED` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.sampleQuerySets.sampleQueries.list = (params) => this._makeRequest('v1alpha/{+parent}/sampleQueries', 'GET', params);

    /**
     * Creates a SampleQuery
     * @param {string} params.parent - (Required) Required. The parent resource name, such as `projects/{project}/locations/{location}/sampleQuerySets/{sampleQuerySet}`.
     * @param {string} params.sampleQueryId - Required. The ID to use for the SampleQuery, which will become the final component of the SampleQuery.name. If the caller does not have permission to create the SampleQuery, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all SampleQuerys with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an `INVALID_ARGUMENT` error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sampleQuerySets.sampleQueries.create = (params) => this._makeRequest('v1alpha/{+parent}/sampleQueries', 'POST', params);

    /**
     * Updates a SampleQuery.
     * @param {string} params.name - (Required) Identifier. The full resource name of the sample query, in the format of `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}/sampleQueries/{sample_query}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters.
     * @param {string} params.updateMask - Indicates which fields in the provided imported 'simple query' to update. If not set, will by default update all fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sampleQuerySets.sampleQueries.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a SampleQuery.
     * @param {string} params.name - (Required) Required. Full resource name of SampleQuery, such as `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}/sampleQueries/{sample_query}`. If the caller does not have permission to delete the SampleQuery, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the SampleQuery to delete does not exist, a `NOT_FOUND` error is returned.
     * @return {object} The API response object.
     */
    this.projects.locations.sampleQuerySets.sampleQueries.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Bulk import of multiple SampleQuerys. Sample queries that already exist may be deleted. Note: It is possible for a subset of the SampleQuerys to be successfully imported.
     * @param {string} params.parent - (Required) Required. The parent sample query set resource name, such as `projects/{project}/locations/{location}/sampleQuerySets/{sampleQuerySet}`. If the caller does not have permission to list SampleQuerys under this sample query set, regardless of whether or not this sample query set exists, a `PERMISSION_DENIED` error is returned.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sampleQuerySets.sampleQueries.import = (params) => this._makeRequest('v1alpha/{+parent}/sampleQueries:import', 'POST', params);

    this.projects.locations.userEvents = {};

    /**
     * Writes a single user event.
     * @param {string} params.parent - (Required) Required. The parent resource name. If the write user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the write user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`.
     * @param {boolean} params.writeAsync - If set to true, the user event is written asynchronously after validation, and the API responds without waiting for the write.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.userEvents.write = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:write', 'POST', params);

    /**
     * Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.
     * @param {string} params.ets - The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes.
     * @param {string} params.parent - (Required) Required. The parent resource name. If the collect user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the collect user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`.
     * @param {string} params.uri - The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for third-party requests.
     * @param {string} params.userEvent - Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters.
     * @return {object} The API response object.
     */
    this.projects.locations.userEvents.collect = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:collect', 'GET', params);

    /**
     * Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.
     * @param {string} params.parent - (Required) Required. Parent DataStore resource name, of the form `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.userEvents.import = (params) => this._makeRequest('v1alpha/{+parent}/userEvents:import', 'POST', params);

    this.projects.locations.userStores = {};

    /**
     * Updates the User License. This method is used for batch assign/unassign licenses to users.
     * @param {string} params.parent - (Required) Required. The parent UserStore resource name, format: `projects/{project}/locations/{location}/userStores/{user_store_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.userStores.batchUpdateUserLicenses = (params) => this._makeRequest('v1alpha/{+parent}:batchUpdateUserLicenses', 'POST', params);

    this.projects.locations.userStores.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.userStores.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.userStores.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.userStores.userLicenses = {};

    /**
     * Lists the User Licenses.
     * @param {string} params.filter - Optional. Filter for the list request. Supported fields: * `license_assignment_state` Examples: * `license_assignment_state = ASSIGNED` to list assigned user licenses. * `license_assignment_state = NO_LICENSE` to list not licensed users. * `license_assignment_state = NO_LICENSE_ATTEMPTED_LOGIN` to list users who attempted login but no license assigned. * `license_assignment_state != NO_LICENSE_ATTEMPTED_LOGIN` to filter out users who attempted login but no license assigned.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, defaults to 10. The maximum value is 50; values above 50 will be coerced to 50. If this field is negative, an INVALID_ARGUMENT error is returned.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListUserLicenses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLicenses` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent UserStore resource name, format: `projects/{project}/locations/{location}/userStores/{user_store_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.userStores.userLicenses.list = (params) => this._makeRequest('v1alpha/{+parent}/userLicenses', 'GET', params);

    this.projects.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);
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
