# Discovery Engine API - Apps Script Client Library

Auto-generated client library for using the **Discovery Engine API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:33:17 GMT
- **Last Modified:** Mon, 28 Jul 2025 21:47:10 GMT
- **Created:** Sun, 20 Jul 2025 16:31:43 GMT



---

## API Reference

### `media`

#### `media.download()`

Downloads a file from the session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Session. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/sessions/{session}` |
| `params.fileId` | `string` | No | Required. The ID of the file to be downloaded. |
| `params.viewId` | `string` | No | Optional. The ID of the view to be downloaded. |

### `projects`

#### `projects.get()`

Gets a Project. Returns NOT_FOUND when the project is not yet created.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of a Project, such as `projects/{project_id_or_number}`. |

#### `projects.provision()`

Provisions the project resource. During the process, related systems will get prepared and initialized. Caller must read the [Terms for data use](https://cloud.google.com/retail/data-use-terms), and optionally specify in request to provide consent to that service terms.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of a Project, such as `projects/{project_id_or_number}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.reportConsentChange()`

Updates service terms for this project. This method can be used to retroactively accept the latest terms. Terms available for update:

* [Terms for data use](https://cloud.google.com/retail/data-use-terms)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Full resource name of a Project, such as `projects/{project_id_or_number}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations`

#### `projects.locations.updateAclConfig()`

Default ACL configuration for use in a location of a customer's project. Updates will only reflect to new data stores. Existing data stores will still use the old value.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the acl configuration. Format: `projects/{project}/locations/{location}/aclConfig`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.getAclConfig()`

Gets the AclConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of AclConfig, such as `projects/*/locations/*/aclConfig`. If the caller does not have permission to access the AclConfig, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. |

#### `projects.locations.updateCmekConfig()`

Provisions a CMEK key for use in a location of a customer's project. This method will also conduct location validation on the provided cmekConfig to make sure the key is valid and can be used in the selected location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CmekConfig of the form `projects/{project}/locations/{location}/cmekConfig` or `projects/{project}/locations/{location}/cmekConfigs/{cmek_config}`. |
| `params.setDefault` | `boolean` | No | Set the following CmekConfig as the default to be used for child resources if one is not specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.getCmekConfig()`

Gets the CmekConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of CmekConfig, such as `projects/*/locations/*/cmekConfig` or `projects/*/locations/*/cmekConfigs/*`. If the caller does not have permission to access the CmekConfig, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. |

#### `projects.locations.obtainCrawlRate()`

Obtains the time series data of organic or dedicated crawl rate for monitoring. When dedicated crawl rate is not set, it will return vertex AI's organic crawl rate time series. Organic crawl means Google automatically crawl the internet at its own convenience. When dedicated crawl rate is set, it will return vertex AI's dedicated crawl rate time series.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location resource where crawl rate management will be performed. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.setDedicatedCrawlRate()`

Sets the dedicated crawl rate for a crawl_rate_scope. If the dedicated crawl rate was not set, this will enable vertex AI's crawl bot to use the new dedicated crawl rate for crawling. If the dedicated crawl rate was set, vertex AI's crawl bot will try to update the rate to the new value. If the new value is too high, the crawl bot may crawl at a lower rate to avoid overloading the user's website.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location resource where crawl rate management will be performed. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.removeDedicatedCrawlRate()`

Removes the dedicated crawl rate for a craw_rate_scope. If the dedicated crawl rate was set, this will disable vertex AI's crawl bot from using the dedicated crawl rate for crawling. If the dedicated crawl rate was not set, this is a no-op.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location resource where crawl rate management will be performed. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.setUpDataConnector()`

Creates a Collection and sets up the DataConnector for it. To stop a DataConnector after setup, use the CollectionService.DeleteCollection method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of Collection, in the format of `projects/{project}/locations/{location}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.estimateDataSize()`

Estimates the data size to be used by a customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. Full resource name of the location, such as `projects/{project}/locations/{location}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.notebooks`

#### `projects.locations.notebooks.listRecentlyViewed()`

Lists the recently viewed notebooks. Needs a side channel with the user's EUC.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent branch resource name, such as `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of Notebooks to return. If unspecified, defaults to "200". The maximum allowed value is "500". If this field is negative, will use the default value. |
| `params.pageToken` | `string` | No | Optional. The page token, provide this to retrieve the subsequent page. |

### `projects.locations.notebooks.sources`

#### `projects.locations.notebooks.sources.batchCreate()`

Creates a list of Sources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where the sources will be created. Format: projects/{project}/locations/{location}/notebooks/{notebook} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.notebooks.sources.uploadFile()`

Uploads a file for Notebook LM to use. Creates a Source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where the sources will be created. Format: projects/{project}/locations/{location}/notebooks/{notebook} |
| `params.sourceId` | `string` | Yes | The source id of the associated file. If not set, a source id will be generated and a new tentative source will be created. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.podcasts`

### `projects.locations.podcasts.operations`

#### `projects.locations.podcasts.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.cmekConfigs`

#### `projects.locations.cmekConfigs.patch()`

Provisions a CMEK key for use in a location of a customer's project. This method will also conduct location validation on the provided cmekConfig to make sure the key is valid and can be used in the selected location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CmekConfig of the form `projects/{project}/locations/{location}/cmekConfig` or `projects/{project}/locations/{location}/cmekConfigs/{cmek_config}`. |
| `params.setDefault` | `boolean` | No | Set the following CmekConfig as the default to be used for child resources if one is not specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.cmekConfigs.get()`

Gets the CmekConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of CmekConfig, such as `projects/*/locations/*/cmekConfig` or `projects/*/locations/*/cmekConfigs/*`. If the caller does not have permission to access the CmekConfig, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. |

#### `projects.locations.cmekConfigs.list()`

Lists all the CmekConfigs with the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent location resource name, such as `projects/{project}/locations/{location}`. If the caller does not have permission to list CmekConfigs under this location, regardless of whether or not a CmekConfig exists, a PERMISSION_DENIED error is returned. |

#### `projects.locations.cmekConfigs.delete()`

De-provisions a CmekConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the CmekConfig to delete, such as `projects/{project}/locations/{location}/cmekConfigs/{cmek_config}`. |

### `projects.locations.collections`

#### `projects.locations.collections.get()`

Gets a Collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}`. |

#### `projects.locations.collections.list()`

Gets a list of Collections.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | The maximum number of Collections to return. The service may return fewer than this value. If unspecified, at most 100 Collections will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous CollectionService.ListCollections call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CollectionService.ListCollections must match the call that provided the page token. |
| `params.filter` | `string` | No | Filter returned collections by associated data connector data sources. For example: `filter = 'data_source:jira confluence'`. If the filter is empty, we return all collections under a project and location. |

#### `projects.locations.collections.patch()`

Updates a Collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the Collection. Format: `projects/{project}/locations/{location}/collections/{collection_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.delete()`

Deletes a Collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the Collection, in the format of `projects/{project}/locations/{location}/collections/{collection}`. |

#### `projects.locations.collections.getDataConnector()`

Gets the DataConnector. DataConnector is a singleton resource for each Collection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of DataConnector, such as `projects/{project}/locations/{location}/collections/{collection_id}/dataConnector`. If the caller does not have permission to access the DataConnector, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested DataConnector does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.collections.updateDataConnector()`

Updates a DataConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The full resource name of the Data Connector. Format: `projects/*/locations/*/collections/*/dataConnector`. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided DataConnector to update. Supported field paths include: - refresh_interval - params - auto_run_disabled - action_config - action_config.action_params - action_config.service_name - destination_configs - blocking_reasons - sync_mode - incremental_sync_disabled - incremental_refresh_interval Note: Support for these fields may vary depending on the connector type. For example, not all connectors support `destination_configs`. If an unsupported or unknown field path is provided, the request will return an INVALID_ARGUMENT error. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.collections.operations`

#### `projects.locations.collections.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.collections.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.collections.dataStores`

#### `projects.locations.collections.dataStores.completeQuery()`

Completes the specified user input with keyword suggestions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dataStore` | `string` | Yes | Required. The parent data store resource name for which the completion is performed, such as `projects/*/locations/global/collections/default_collection/dataStores/default_data_store`. |
| `params.query` | `string` | No | Required. The typeahead input used to fetch suggestions. Maximum length is 128 characters. |
| `params.queryModel` | `string` | No | Specifies the autocomplete data model. This overrides any model specified in the Configuration > Autocomplete section of the Cloud console. Currently supported values: * `document` - Using suggestions generated from user-imported documents. * `search-history` - Using suggestions generated from the past history of SearchService.Search API calls. Do not use it when there is no traffic for Search API. * `user-event` - Using suggestions generated from user-imported search events. * `document-completable` - Using suggestions taken directly from user-imported document fields marked as completable. Default values: * `document` is the default model for regular dataStores. * `search-history` is the default model for site search dataStores. |
| `params.userPseudoId` | `string` | No | A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. |
| `params.includeTailSuggestions` | `boolean` | No | Indicates if tail suggestions should be returned if there are no suggestions that match the full query. Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned. |

#### `projects.locations.collections.dataStores.create()`

Creates a DataStore. DataStore is for storing Documents. To serve these documents for Search, or Recommendation use case, an Engine needs to be created separately.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}`. |
| `params.cmekConfigName` | `string` | No | Resource name of the CmekConfig to use for protecting this DataStore. |
| `params.disableCmek` | `boolean` | No | DataStore without CMEK protections. If a default CmekConfig is set for the project, setting this field will override the default CmekConfig as well. |
| `params.dataStoreId` | `string` | No | Required. The ID to use for the DataStore, which will become the final component of the DataStore's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned. |
| `params.createAdvancedSiteSearch` | `boolean` | No | A boolean flag indicating whether user want to directly create an advanced data store for site search. If the data store is not configured as site search (GENERIC vertical and PUBLIC_WEBSITE content_config), this flag will be ignored. |
| `params.skipDefaultSchemaCreation` | `boolean` | No | A boolean flag indicating whether to skip the default schema creation for the data store. Only enable this flag if you are certain that the default schema is incompatible with your use case. If set to true, you must manually create a schema for the data store before any documents can be ingested. This flag cannot be specified if `data_store.starting_schema` is specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.get()`

Gets a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of DataStore, such as `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. If the caller does not have permission to access the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested DataStore does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.collections.dataStores.list()`

Lists all the DataStores associated with the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection_id}`. If the caller does not have permission to list DataStores under this location, regardless of whether or not this data store exists, a PERMISSION_DENIED error is returned. |
| `params.pageSize` | `integer` | No | Maximum number of DataStores to return. If unspecified, defaults to 10. The maximum allowed value is 50. Values above 50 will be coerced to 50. If this field is negative, an INVALID_ARGUMENT is returned. |
| `params.pageToken` | `string` | No | A page token ListDataStoresResponse.next_page_token, received from a previous DataStoreService.ListDataStores call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DataStoreService.ListDataStores must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned. |
| `params.filter` | `string` | No | Filter by solution type . For example: `filter = 'solution_type:SOLUTION_TYPE_SEARCH'` |

#### `projects.locations.collections.dataStores.delete()`

Deletes a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of DataStore, such as `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. If the caller does not have permission to delete the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the DataStore to delete does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.collections.dataStores.patch()`

Updates a DataStore

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The full resource name of the data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided DataStore to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.getDocumentProcessingConfig()`

Gets a DocumentProcessingConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full DocumentProcessingConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/documentProcessingConfig` |

#### `projects.locations.collections.dataStores.updateDocumentProcessingConfig()`

Updates the DocumentProcessingConfig. DocumentProcessingConfig is a singleon resource of DataStore. It's empty when DataStore is created. The first call to this method will set up DocumentProcessingConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The full resource name of the Document Processing Config. Format: `projects/*/locations/*/collections/*/dataStores/*/documentProcessingConfig`. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided DocumentProcessingConfig to update. The following are the only supported fields: * DocumentProcessingConfig.ocr_config If not set, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.trainCustomModel()`

Trains a custom model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dataStore` | `string` | Yes | Required. The resource name of the Data Store, such as `projects/*/locations/global/collections/default_collection/dataStores/default_data_store`. This field is used to identify the data store where to train the models. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.getSiteSearchEngine()`

Gets the SiteSearchEngine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of SiteSearchEngine, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. If the caller does not have permission to access the [SiteSearchEngine], regardless of whether or not it exists, a PERMISSION_DENIED error is returned. |

### `projects.locations.collections.dataStores.servingConfigs`

#### `projects.locations.collections.dataStores.servingConfigs.search()`

Performs a search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.servingConfigs.searchLite()`

Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.servingConfigs.answer()`

Answer query method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.servingConfigs.streamAnswer()`

Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.servingConfigs.recommend()`

Makes a recommendation, which requires a contextual user event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. Full resource name of a ServingConfig: `projects/*/locations/global/collections/*/engines/*/servingConfigs/*`, or `projects/*/locations/global/collections/*/dataStores/*/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID is used as the ID of the default serving config. For example, for Engine `projects/*/locations/global/collections/*/engines/my-engine`, you can use `projects/*/locations/global/collections/*/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.servingConfigs.patch()`

Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}/servingConfigs/{serving_config_id}` |
| `params.updateMask` | `string` | No | Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.servingConfigs.get()`

Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the ServingConfig to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config_id}` |

#### `projects.locations.collections.dataStores.servingConfigs.list()`

Lists all ServingConfigs linked to this dataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of the parent resource. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page. |

### `projects.locations.collections.dataStores.models`

### `projects.locations.collections.dataStores.models.operations`

#### `projects.locations.collections.dataStores.models.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.collections.dataStores.models.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.collections.dataStores.operations`

#### `projects.locations.collections.dataStores.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.collections.dataStores.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.collections.dataStores.completionConfig`

#### `projects.locations.collections.dataStores.completionConfig.completeQuery()`

Completes the user input with advanced keyword suggestions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.completionConfig` | `string` | Yes | Required. The completion_config of the parent dataStore or engine resource name for which the completion is performed, such as `projects/*/locations/global/collections/default_collection/dataStores/*/completionConfig` `projects/*/locations/global/collections/default_collection/engines/*/completionConfig`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.collections.dataStores.suggestionDenyListEntries`

#### `projects.locations.collections.dataStores.suggestionDenyListEntries.import()`

Imports all SuggestionDenyListEntry for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/*/locations/*/collections/*/dataStores/*. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.suggestionDenyListEntries.purge()`

Permanently deletes all SuggestionDenyListEntry for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/*/locations/*/collections/*/dataStores/*. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.collections.dataStores.completionSuggestions`

#### `projects.locations.collections.dataStores.completionSuggestions.import()`

Imports CompletionSuggestions for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to import customer autocomplete suggestions. Follows pattern `projects/*/locations/*/collections/*/dataStores/*` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.completionSuggestions.purge()`

Permanently deletes all CompletionSuggestions for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to purge completion suggestions. Follows pattern projects/*/locations/*/collections/*/dataStores/*. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.collections.dataStores.controls`

#### `projects.locations.collections.dataStores.controls.create()`

Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. |
| `params.controlId` | `string` | No | Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value must be within 1-63 characters. Valid characters are /a-z-_/. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.controls.delete()`

Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Control to delete. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/controls/{control_id}` |

#### `projects.locations.collections.dataStores.controls.patch()`

Updates a Control. Control action type cannot be changed. If the Control to update does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/*/locations/global/dataStore/*/controls/*` |
| `params.updateMask` | `string` | No | Optional. Indicates which fields in the provided Control to update. The following are NOT supported: * Control.name * Control.solution_type If not set or empty, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.controls.get()`

Gets a Control.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Control to get. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/controls/{control_id}` |

#### `projects.locations.collections.dataStores.controls.list()`

Lists all Controls by their parent DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListControls` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. Currently this field is unsupported. |

### `projects.locations.collections.dataStores.conversations`

#### `projects.locations.collections.dataStores.conversations.converse()`

Converses a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Conversation to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`. Use `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.conversations.create()`

Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.conversations.delete()`

Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Conversation to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}` |

#### `projects.locations.collections.dataStores.conversations.patch()`

Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/dataStore/*/conversations/*` or `projects/{project}/locations/global/collections/{collection}/engines/*/conversations/*`. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided Conversation to update. The following are NOT supported: * Conversation.name If not set or empty, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.conversations.get()`

Gets a Conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Conversation to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}` |

#### `projects.locations.collections.dataStores.conversations.list()`

Lists all Conversations by their parent DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.pageSize` | `integer` | No | Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id" |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time" |

### `projects.locations.collections.dataStores.branches`

#### `projects.locations.collections.dataStores.branches.batchGetDocumentsMetadata()`

Gets index freshness metadata for Documents. Supported for website search only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. |
| `params.matcher.urisMatcher.uris` | `string` | No | The exact URIs to match by. |
| `params.matcher.fhirMatcher.fhirResources` | `string` | No | Required. The FHIR resources to match by. Format: projects/{project}/locations/{location}/datasets/{dataset}/fhirStores/{fhir_store}/fhir/{resource_type}/{fhir_resource_id} |

### `projects.locations.collections.dataStores.branches.operations`

#### `projects.locations.collections.dataStores.branches.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.collections.dataStores.branches.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.collections.dataStores.branches.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.collections.dataStores.branches.documents`

#### `projects.locations.collections.dataStores.branches.documents.get()`

Gets a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Document does not exist, a `NOT_FOUND` error is returned. |

#### `projects.locations.collections.dataStores.branches.documents.list()`

Gets a list of Documents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. Use `default_branch` as the branch ID, to list documents under the default branch. If the caller does not have permission to list Documents under this branch, regardless of whether or not this branch exists, a `PERMISSION_DENIED` error is returned. |
| `params.pageSize` | `integer` | No | Maximum number of Documents to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 are set to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned. |
| `params.pageToken` | `string` | No | A page token ListDocumentsResponse.next_page_token, received from a previous DocumentService.ListDocuments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DocumentService.ListDocuments must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned. |

#### `projects.locations.collections.dataStores.branches.documents.create()`

Creates a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. |
| `params.documentId` | `string` | No | Required. The ID to use for the Document, which becomes the final component of the Document.name. If the caller does not have permission to create the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all Documents with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.branches.documents.patch()`

Updates a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.allowMissing` | `boolean` | No | If set to `true` and the Document is not found, a new Document is be created. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided imported 'document' to update. If not set, by default updates all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.branches.documents.delete()`

Deletes a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to delete the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the Document to delete does not exist, a `NOT_FOUND` error is returned. |

#### `projects.locations.collections.dataStores.branches.documents.import()`

Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items are created. Note: It is possible for a subset of the Documents to be successfully updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. Requires create/update permission. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.branches.documents.purge()`

Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.branches.documents.getProcessedDocument()`

Gets the parsed layout information for a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Document does not exist, a `NOT_FOUND` error is returned. |
| `params.processedDocumentType` | `string` | No | Required. What type of processing to return. |
| `params.processedDocumentFormat` | `string` | No | What format output should be. If unspecified, defaults to JSON. |
| `params.imageId` | `string` | No | Optional. Specifies config for IMAGE_BYTES. |

### `projects.locations.collections.dataStores.branches.documents.chunks`

#### `projects.locations.collections.dataStores.branches.documents.chunks.get()`

Gets a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Chunk, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}/chunks/{chunk}`. If the caller does not have permission to access the Chunk, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Chunk does not exist, a `NOT_FOUND` error is returned. |

#### `projects.locations.collections.dataStores.branches.documents.chunks.list()`

Gets a list of Chunks.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent document resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to list Chunks under this document, regardless of whether or not this document exists, a `PERMISSION_DENIED` error is returned. |
| `params.pageSize` | `integer` | No | Maximum number of Chunks to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned. |
| `params.pageToken` | `string` | No | A page token ListChunksResponse.next_page_token, received from a previous ChunkService.ListChunks call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ChunkService.ListChunks must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned. |

### `projects.locations.collections.dataStores.schemas`

#### `projects.locations.collections.dataStores.schemas.get()`

Gets a Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. |

#### `projects.locations.collections.dataStores.schemas.list()`

Gets a list of Schemas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. |
| `params.pageSize` | `integer` | No | The maximum number of Schemas to return. The service may return fewer than this value. If unspecified, at most 100 Schemas are returned. The maximum value is 1000; values above 1000 are set to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous SchemaService.ListSchemas call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SchemaService.ListSchemas must match the call that provided the page token. |

#### `projects.locations.collections.dataStores.schemas.create()`

Creates a Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. |
| `params.schemaId` | `string` | No | Required. The ID to use for the Schema, which becomes the final component of the Schema.name. This field should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.schemas.patch()`

Updates a Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.allowMissing` | `boolean` | No | If set to true, and the Schema is not found, a new Schema is created. In this situation, `update_mask` is ignored. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.schemas.delete()`

Deletes a Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. |

### `projects.locations.collections.dataStores.schemas.operations`

#### `projects.locations.collections.dataStores.schemas.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.collections.dataStores.schemas.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.collections.dataStores.customModels`

#### `projects.locations.collections.dataStores.customModels.list()`

Gets a list of all the custom models.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dataStore` | `string` | Yes | Required. The resource name of the parent Data Store, such as `projects/*/locations/global/collections/default_collection/dataStores/default_data_store`. This field is used to identify the data store where to fetch the models from. |

### `projects.locations.collections.dataStores.sessions`

#### `projects.locations.collections.dataStores.sessions.create()`

Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.sessions.delete()`

Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Session to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/sessions/{session_id}` |

#### `projects.locations.collections.dataStores.sessions.patch()`

Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/engines/{engine}/sessions/*` |
| `params.updateMask` | `string` | No | Indicates which fields in the provided Session to update. The following are NOT supported: * Session.name If not set or empty, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.sessions.get()`

Gets a Session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Session to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/sessions/{session_id}` |
| `params.includeAnswerDetails` | `boolean` | No | Optional. If set to true, the full session including all answer details will be returned. |

#### `projects.locations.collections.dataStores.sessions.list()`

Lists all Sessions by their parent DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.pageSize` | `integer` | No | Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSessions` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | A comma-separated list of fields to filter by, in EBNF grammar. The supported fields are: * `user_pseudo_id` * `state` * `display_name` * `starred` * `is_pinned` * `labels` * `create_time` * `update_time` Examples: * `user_pseudo_id = some_id` * `display_name = "some_name"` * `starred = true` * `is_pinned=true AND (NOT labels:hidden)` * `create_time > "1970-01-01T12:00:00Z"` |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `session_name` * `is_pinned` Example: * "update_time desc" * "create_time" * "is_pinned desc,update_time desc": list sessions by is_pinned first, then by update_time. |

### `projects.locations.collections.dataStores.sessions.answers`

#### `projects.locations.collections.dataStores.sessions.answers.get()`

Gets a Answer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Answer to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine_id}/sessions/{session_id}/answers/{answer_id}` |

### `projects.locations.collections.dataStores.siteSearchEngine`

#### `projects.locations.collections.dataStores.siteSearchEngine.enableAdvancedSiteSearch()`

Upgrade from basic site search to advanced site search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. Full resource name of the SiteSearchEngine, such as `projects/{project}/locations/{location}/dataStores/{data_store_id}/siteSearchEngine`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.disableAdvancedSiteSearch()`

Downgrade from advanced site search to basic site search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. Full resource name of the SiteSearchEngine, such as `projects/{project}/locations/{location}/dataStores/{data_store_id}/siteSearchEngine`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.recrawlUris()`

Request on-demand recrawl for a list of URIs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. Full resource name of the SiteSearchEngine, such as `projects/*/locations/*/collections/*/dataStores/*/siteSearchEngine`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.batchVerifyTargetSites()`

Verify target sites' ownership and validity. This API sends all the target sites under site search engine for verification.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource shared by all TargetSites being verified. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.fetchDomainVerificationStatus()`

Returns list of target sites with its domain verification status. This method can only be called under data store with BASIC_SITE_SEARCH state at the moment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. The site search engine resource under which we fetch all the domain verification status. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `FetchDomainVerificationStatus` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchDomainVerificationStatus` must match the call that provided the page token. |

#### `projects.locations.collections.dataStores.siteSearchEngine.setUriPatternDocumentData()`

Sets the URI Pattern to Document data mapping for an Advanced Site Search DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. Full resource name of the SiteSearchEngine, such as `projects/*/locations/*/collections/*/dataStores/*/siteSearchEngine`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.getUriPatternDocumentData()`

Gets the URI Pattern to Document data mapping for an Advanced Site Search DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. Full resource name of the SiteSearchEngine, such as `projects/*/locations/*/collections/*/dataStores/*/siteSearchEngine`. |

### `projects.locations.collections.dataStores.siteSearchEngine.operations`

#### `projects.locations.collections.dataStores.siteSearchEngine.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.collections.dataStores.siteSearchEngine.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.collections.dataStores.siteSearchEngine.targetSites`

#### `projects.locations.collections.dataStores.siteSearchEngine.targetSites.create()`

Creates a TargetSite.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.targetSites.batchCreate()`

Creates TargetSite in a batch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource shared by all TargetSites being created. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. The parent field in the CreateBookRequest messages must either be empty or match this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.targetSites.get()`

Gets a TargetSite.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.collections.dataStores.siteSearchEngine.targetSites.patch()`

Updates a TargetSite.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The fully qualified resource name of the target site. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}` The `target_site_id` is system-generated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.targetSites.delete()`

Deletes a TargetSite.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.collections.dataStores.siteSearchEngine.targetSites.list()`

Gets a list of TargetSites.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent site search engine resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. If the caller does not have permission to list TargetSites under this site search engine, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListTargetSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargetSites` must match the call that provided the page token. |

### `projects.locations.collections.dataStores.siteSearchEngine.targetSites.operations`

#### `projects.locations.collections.dataStores.siteSearchEngine.targetSites.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.collections.dataStores.siteSearchEngine.targetSites.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.collections.dataStores.siteSearchEngine.sitemaps`

#### `projects.locations.collections.dataStores.siteSearchEngine.sitemaps.create()`

Creates a Sitemap.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name of the SiteSearchEngine, such as `projects/*/locations/*/collections/*/dataStores/*/siteSearchEngine`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.sitemaps.delete()`

Deletes a Sitemap.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Sitemap, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/sitemaps/{sitemap}`. If the caller does not have permission to access the Sitemap, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested Sitemap does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.collections.dataStores.siteSearchEngine.sitemaps.fetch()`

Fetch Sitemaps in a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name of the SiteSearchEngine, such as `projects/*/locations/*/collections/*/dataStores/*/siteSearchEngine`. |
| `params.matcher.urisMatcher.uris` | `string` | No | The Sitemap uris. |

### `projects.locations.collections.dataStores.userEvents`

#### `projects.locations.collections.dataStores.userEvents.write()`

Writes a single user event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. If the write user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the write user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`. |
| `params.writeAsync` | `boolean` | No | If set to true, the user event is written asynchronously after validation, and the API responds without waiting for the write. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.userEvents.collect()`

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. If the collect user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the collect user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`. |
| `params.userEvent` | `string` | No | Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters. |
| `params.uri` | `string` | No | The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for third-party requests. |
| `params.ets` | `string` | No | The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes. |

#### `projects.locations.collections.dataStores.userEvents.purge()`

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the catalog under which the events are created. The format is `projects/{project}/locations/global/collections/{collection}/dataStores/{dataStore}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.userEvents.import()`

Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent DataStore resource name, of the form `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.collections.dataStores.widgetConfigs`

#### `projects.locations.collections.dataStores.widgetConfigs.get()`

Gets a WidgetConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full WidgetConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}` |
| `params.acceptCache` | `boolean` | No | Optional. Whether it's acceptable to load the widget config from cache. If set to true, recent changes on widget configs may take a few minutes to reflect on the end user's view. It's recommended to set to true for maturely developed widgets, as it improves widget performance. Set to false to see changes reflected in prod right away, if your widget is under development. |
| `params.getWidgetConfigRequestOption.turnOffCollectionComponents` | `boolean` | No | Optional. Whether to turn off collection_components in WidgetConfig to reduce latency and data transmission. |

### `projects.locations.collections.dataConnector`

#### `projects.locations.collections.dataConnector.startConnectorRun()`

Starts an immediate synchronization process for a DataConnector. Third Party Connector Users must specify which entities should be synced. FHIR Connectors must provide a timestamp to indicate the point in time from which data should be synced.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Connector name of the form projects/{project}/locations/{location}/collections/ {collection_id}/dataConnector |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataConnector.acquireAccessToken()`

Uses the per-user refresh token minted with AcquireAndStoreRefreshToken to generate and return a new access token and its details. Takes the access token from cache if available. Rotates the stored refresh token if needed. Uses the end user identity to return the user specific access token. Does *not* return the credentials configured by the administrator. Used by Agentspace action execution and Agentspace UI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the connector for which a token is queried. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataConnector.getConnectorSecret()`

Get the secret for the associated connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the associated data connector. |

### `projects.locations.collections.dataConnector.operations`

#### `projects.locations.collections.dataConnector.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.collections.dataConnector.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.collections.dataConnector.connectorRuns`

#### `projects.locations.collections.dataConnector.connectorRuns.list()`

Lists the ConnectorRuns of a DataConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent DataConnector resource name, such as `projects/{project}/locations/{location}/collections/{collection_id}/dataConnector`. If the caller does not have permission to list ConnectorRuns under this DataConnector, regardless of whether or not this DataConnector exists, a PERMISSION_DENIED error is returned. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer items than requested. If unspecified, defaults to 10. The maximum value is 50; values above 50 will be coerced to 50. If this field is negative, an INVALID_ARGUMENT error is returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListConnectorRuns` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectorRuns` must match the call that provided the page token. |

### `projects.locations.collections.engines`

#### `projects.locations.collections.engines.create()`

Creates a Engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}`. |
| `params.engineId` | `string` | No | Required. The ID to use for the Engine, which will become the final component of the Engine's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.delete()`

Deletes a Engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Engine, such as `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. If the caller does not have permission to delete the Engine, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Engine to delete does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.collections.engines.patch()`

Updates an Engine

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The fully qualified resource name of the engine. This field must be a UTF-8 encoded string with a length limit of 1024 characters. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` engine should be 1-63 characters, and valid characters are /a-z0-9*/. Otherwise, an INVALID_ARGUMENT error is returned. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided Engine to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.get()`

Gets a Engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Engine, such as `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. |

#### `projects.locations.collections.engines.list()`

Lists all the Engines associated with the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection_id}`. |
| `params.pageSize` | `integer` | No | Optional. Not supported. |
| `params.pageToken` | `string` | No | Optional. Not supported. |
| `params.filter` | `string` | No | Optional. Filter by solution type. For example: solution_type=SOLUTION_TYPE_SEARCH |

#### `projects.locations.collections.engines.pause()`

Pauses the training of an existing engine. Only applicable if SolutionType is SOLUTION_TYPE_RECOMMENDATION.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the engine to pause. Format: `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.resume()`

Resumes the training of an existing engine. Only applicable if SolutionType is SOLUTION_TYPE_RECOMMENDATION.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the engine to resume. Format: `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.tune()`

Tunes an existing engine. Only applicable if SolutionType is SOLUTION_TYPE_RECOMMENDATION.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the engine to tune. Format: `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.collections.engines.servingConfigs`

#### `projects.locations.collections.engines.servingConfigs.search()`

Performs a search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.servingConfigs.searchLite()`

Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.servingConfigs.answer()`

Answer query method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.servingConfigs.streamAnswer()`

Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.servingConfigs.recommend()`

Makes a recommendation, which requires a contextual user event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. Full resource name of a ServingConfig: `projects/*/locations/global/collections/*/engines/*/servingConfigs/*`, or `projects/*/locations/global/collections/*/dataStores/*/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID is used as the ID of the default serving config. For example, for Engine `projects/*/locations/global/collections/*/engines/my-engine`, you can use `projects/*/locations/global/collections/*/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.servingConfigs.patch()`

Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}/servingConfigs/{serving_config_id}` |
| `params.updateMask` | `string` | No | Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.servingConfigs.get()`

Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the ServingConfig to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config_id}` |

#### `projects.locations.collections.engines.servingConfigs.list()`

Lists all ServingConfigs linked to this dataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of the parent resource. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page. |

### `projects.locations.collections.engines.operations`

#### `projects.locations.collections.engines.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.collections.engines.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.collections.engines.analytics`

#### `projects.locations.collections.engines.analytics.exportMetrics()`

Exports metrics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.analytics` | `string` | Yes | Required. The analytics resource name under the engine where the metrics are created. The format is `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/analytics`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.collections.engines.assistants`

#### `projects.locations.collections.engines.assistants.streamAssist()`

Assists the user with a query in a streaming fashion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Assistant. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.assistants.patch()`

Updates an Assistant

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Resource name of the assistant. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` It must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.assistants.get()`

Gets an Assistant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of Assistant. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` |

### `projects.locations.collections.engines.completionConfig`

#### `projects.locations.collections.engines.completionConfig.completeQuery()`

Completes the user input with advanced keyword suggestions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.completionConfig` | `string` | Yes | Required. The completion_config of the parent dataStore or engine resource name for which the completion is performed, such as `projects/*/locations/global/collections/default_collection/dataStores/*/completionConfig` `projects/*/locations/global/collections/default_collection/engines/*/completionConfig`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.completionConfig.removeSuggestion()`

Removes the search history suggestion in an engine for a user. This will remove the suggestion from being returned in the AdvancedCompleteQueryResponse.recent_search_suggestions for this user. If the user searches the same suggestion again, the new history will override and suggest this suggestion again.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.completionConfig` | `string` | Yes | Required. The completion_config of the parent engine resource name for which the search history suggestion is to be removed, such as `projects/*/locations/global/collections/default_collection/engines/*/completionConfig`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.collections.engines.controls`

#### `projects.locations.collections.engines.controls.create()`

Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. |
| `params.controlId` | `string` | No | Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value must be within 1-63 characters. Valid characters are /a-z-_/. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.controls.delete()`

Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Control to delete. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/controls/{control_id}` |

#### `projects.locations.collections.engines.controls.patch()`

Updates a Control. Control action type cannot be changed. If the Control to update does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/*/locations/global/dataStore/*/controls/*` |
| `params.updateMask` | `string` | No | Optional. Indicates which fields in the provided Control to update. The following are NOT supported: * Control.name * Control.solution_type If not set or empty, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.controls.get()`

Gets a Control.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Control to get. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/controls/{control_id}` |

#### `projects.locations.collections.engines.controls.list()`

Lists all Controls by their parent DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListControls` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. Currently this field is unsupported. |

### `projects.locations.collections.engines.conversations`

#### `projects.locations.collections.engines.conversations.converse()`

Converses a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Conversation to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`. Use `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.conversations.create()`

Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.conversations.delete()`

Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Conversation to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}` |

#### `projects.locations.collections.engines.conversations.patch()`

Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/dataStore/*/conversations/*` or `projects/{project}/locations/global/collections/{collection}/engines/*/conversations/*`. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided Conversation to update. The following are NOT supported: * Conversation.name If not set or empty, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.conversations.get()`

Gets a Conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Conversation to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}` |

#### `projects.locations.collections.engines.conversations.list()`

Lists all Conversations by their parent DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.pageSize` | `integer` | No | Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id" |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time" |

### `projects.locations.collections.engines.sessions`

#### `projects.locations.collections.engines.sessions.create()`

Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.sessions.delete()`

Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Session to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/sessions/{session_id}` |

#### `projects.locations.collections.engines.sessions.patch()`

Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/engines/{engine}/sessions/*` |
| `params.updateMask` | `string` | No | Indicates which fields in the provided Session to update. The following are NOT supported: * Session.name If not set or empty, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.sessions.get()`

Gets a Session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Session to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/sessions/{session_id}` |
| `params.includeAnswerDetails` | `boolean` | No | Optional. If set to true, the full session including all answer details will be returned. |

#### `projects.locations.collections.engines.sessions.list()`

Lists all Sessions by their parent DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.pageSize` | `integer` | No | Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSessions` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | A comma-separated list of fields to filter by, in EBNF grammar. The supported fields are: * `user_pseudo_id` * `state` * `display_name` * `starred` * `is_pinned` * `labels` * `create_time` * `update_time` Examples: * `user_pseudo_id = some_id` * `display_name = "some_name"` * `starred = true` * `is_pinned=true AND (NOT labels:hidden)` * `create_time > "1970-01-01T12:00:00Z"` |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `session_name` * `is_pinned` Example: * "update_time desc" * "create_time" * "is_pinned desc,update_time desc": list sessions by is_pinned first, then by update_time. |

### `projects.locations.collections.engines.sessions.answers`

#### `projects.locations.collections.engines.sessions.answers.get()`

Gets a Answer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Answer to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine_id}/sessions/{session_id}/answers/{answer_id}` |

### `projects.locations.collections.engines.sessions.files`

#### `projects.locations.collections.engines.sessions.files.list()`

Lists metadata for all files in the current session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Session. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/sessions/{session}` Name of the session resource to which the file belong. |
| `params.filter` | `string` | No | Optional. The filter syntax consists of an expression language for constructing a predicate from one or more fields of the files being filtered. Filter expression is case-sensitive. Currently supported field names are: * upload_time * last_add_time * last_use_time * file_name * mime_type Some examples of filters would be: * "file_name = 'file_1'" * "file_name = 'file_1' AND mime_type = 'text/plain'" * "last_use_time > '2025-06-14T12:00:00Z'" For a full description of the filter format, please see https://google.aip.dev/160. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of files to return. The service may return fewer than this value. If unspecified, at most 100 files will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. If user specifies a value less than or equal to 0 - the request will be rejected with an INVALID_ARGUMENT error. |
| `params.pageToken` | `string` | No | Optional. A page token received from a previous `ListFiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListFiles` must match the call that provided the page token (except `page_size`, which may differ). |

### `projects.locations.collections.engines.widgetConfigs`

#### `projects.locations.collections.engines.widgetConfigs.get()`

Gets a WidgetConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full WidgetConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}` |
| `params.acceptCache` | `boolean` | No | Optional. Whether it's acceptable to load the widget config from cache. If set to true, recent changes on widget configs may take a few minutes to reflect on the end user's view. It's recommended to set to true for maturely developed widgets, as it improves widget performance. Set to false to see changes reflected in prod right away, if your widget is under development. |
| `params.getWidgetConfigRequestOption.turnOffCollectionComponents` | `boolean` | No | Optional. Whether to turn off collection_components in WidgetConfig to reduce latency and data transmission. |

### `projects.locations.dataStores`

#### `projects.locations.dataStores.completeQuery()`

Completes the specified user input with keyword suggestions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dataStore` | `string` | Yes | Required. The parent data store resource name for which the completion is performed, such as `projects/*/locations/global/collections/default_collection/dataStores/default_data_store`. |
| `params.query` | `string` | No | Required. The typeahead input used to fetch suggestions. Maximum length is 128 characters. |
| `params.queryModel` | `string` | No | Specifies the autocomplete data model. This overrides any model specified in the Configuration > Autocomplete section of the Cloud console. Currently supported values: * `document` - Using suggestions generated from user-imported documents. * `search-history` - Using suggestions generated from the past history of SearchService.Search API calls. Do not use it when there is no traffic for Search API. * `user-event` - Using suggestions generated from user-imported search events. * `document-completable` - Using suggestions taken directly from user-imported document fields marked as completable. Default values: * `document` is the default model for regular dataStores. * `search-history` is the default model for site search dataStores. |
| `params.userPseudoId` | `string` | No | A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. |
| `params.includeTailSuggestions` | `boolean` | No | Indicates if tail suggestions should be returned if there are no suggestions that match the full query. Even if set to true, if there are suggestions that match the full query, those are returned and no tail suggestions are returned. |

#### `projects.locations.dataStores.create()`

Creates a DataStore. DataStore is for storing Documents. To serve these documents for Search, or Recommendation use case, an Engine needs to be created separately.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}`. |
| `params.cmekConfigName` | `string` | No | Resource name of the CmekConfig to use for protecting this DataStore. |
| `params.disableCmek` | `boolean` | No | DataStore without CMEK protections. If a default CmekConfig is set for the project, setting this field will override the default CmekConfig as well. |
| `params.dataStoreId` | `string` | No | Required. The ID to use for the DataStore, which will become the final component of the DataStore's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned. |
| `params.createAdvancedSiteSearch` | `boolean` | No | A boolean flag indicating whether user want to directly create an advanced data store for site search. If the data store is not configured as site search (GENERIC vertical and PUBLIC_WEBSITE content_config), this flag will be ignored. |
| `params.skipDefaultSchemaCreation` | `boolean` | No | A boolean flag indicating whether to skip the default schema creation for the data store. Only enable this flag if you are certain that the default schema is incompatible with your use case. If set to true, you must manually create a schema for the data store before any documents can be ingested. This flag cannot be specified if `data_store.starting_schema` is specified. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.get()`

Gets a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of DataStore, such as `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. If the caller does not have permission to access the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested DataStore does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.dataStores.list()`

Lists all the DataStores associated with the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection_id}`. If the caller does not have permission to list DataStores under this location, regardless of whether or not this data store exists, a PERMISSION_DENIED error is returned. |
| `params.pageSize` | `integer` | No | Maximum number of DataStores to return. If unspecified, defaults to 10. The maximum allowed value is 50. Values above 50 will be coerced to 50. If this field is negative, an INVALID_ARGUMENT is returned. |
| `params.pageToken` | `string` | No | A page token ListDataStoresResponse.next_page_token, received from a previous DataStoreService.ListDataStores call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DataStoreService.ListDataStores must match the call that provided the page token. Otherwise, an INVALID_ARGUMENT error is returned. |
| `params.filter` | `string` | No | Filter by solution type . For example: `filter = 'solution_type:SOLUTION_TYPE_SEARCH'` |

#### `projects.locations.dataStores.delete()`

Deletes a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of DataStore, such as `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. If the caller does not have permission to delete the DataStore, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the DataStore to delete does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.dataStores.patch()`

Updates a DataStore

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The full resource name of the data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided DataStore to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.getDocumentProcessingConfig()`

Gets a DocumentProcessingConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full DocumentProcessingConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/documentProcessingConfig` |

#### `projects.locations.dataStores.updateDocumentProcessingConfig()`

Updates the DocumentProcessingConfig. DocumentProcessingConfig is a singleon resource of DataStore. It's empty when DataStore is created. The first call to this method will set up DocumentProcessingConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The full resource name of the Document Processing Config. Format: `projects/*/locations/*/collections/*/dataStores/*/documentProcessingConfig`. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided DocumentProcessingConfig to update. The following are the only supported fields: * DocumentProcessingConfig.ocr_config If not set, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.getSiteSearchEngine()`

Gets the SiteSearchEngine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of SiteSearchEngine, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. If the caller does not have permission to access the [SiteSearchEngine], regardless of whether or not it exists, a PERMISSION_DENIED error is returned. |

### `projects.locations.dataStores.servingConfigs`

#### `projects.locations.dataStores.servingConfigs.search()`

Performs a search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.servingConfigs.searchLite()`

Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.servingConfigs.answer()`

Answer query method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.servingConfigs.streamAnswer()`

Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.servingConfigs.recommend()`

Makes a recommendation, which requires a contextual user event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. Full resource name of a ServingConfig: `projects/*/locations/global/collections/*/engines/*/servingConfigs/*`, or `projects/*/locations/global/collections/*/dataStores/*/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID is used as the ID of the default serving config. For example, for Engine `projects/*/locations/global/collections/*/engines/my-engine`, you can use `projects/*/locations/global/collections/*/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.servingConfigs.patch()`

Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}/servingConfigs/{serving_config_id}` |
| `params.updateMask` | `string` | No | Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.servingConfigs.get()`

Gets a ServingConfig. Returns a NotFound error if the ServingConfig does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the ServingConfig to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/servingConfigs/{serving_config_id}` |

#### `projects.locations.dataStores.servingConfigs.list()`

Lists all ServingConfigs linked to this dataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of the parent resource. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. If unspecified, defaults to 100. If a value greater than 100 is provided, at most 100 results are returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListServingConfigs` call. Provide this to retrieve the subsequent page. |

### `projects.locations.dataStores.models`

### `projects.locations.dataStores.models.operations`

#### `projects.locations.dataStores.models.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.dataStores.models.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.dataStores.operations`

#### `projects.locations.dataStores.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.dataStores.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.dataStores.completionConfig`

#### `projects.locations.dataStores.completionConfig.completeQuery()`

Completes the user input with advanced keyword suggestions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.completionConfig` | `string` | Yes | Required. The completion_config of the parent dataStore or engine resource name for which the completion is performed, such as `projects/*/locations/global/collections/default_collection/dataStores/*/completionConfig` `projects/*/locations/global/collections/default_collection/engines/*/completionConfig`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.dataStores.suggestionDenyListEntries`

#### `projects.locations.dataStores.suggestionDenyListEntries.import()`

Imports all SuggestionDenyListEntry for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/*/locations/*/collections/*/dataStores/*. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.suggestionDenyListEntries.purge()`

Permanently deletes all SuggestionDenyListEntry for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/*/locations/*/collections/*/dataStores/*. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.dataStores.completionSuggestions`

#### `projects.locations.dataStores.completionSuggestions.import()`

Imports CompletionSuggestions for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to import customer autocomplete suggestions. Follows pattern `projects/*/locations/*/collections/*/dataStores/*` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.completionSuggestions.purge()`

Permanently deletes all CompletionSuggestions for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to purge completion suggestions. Follows pattern projects/*/locations/*/collections/*/dataStores/*. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.dataStores.controls`

#### `projects.locations.dataStores.controls.create()`

Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. |
| `params.controlId` | `string` | No | Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value must be within 1-63 characters. Valid characters are /a-z-_/. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.controls.delete()`

Deletes a Control. If the Control to delete does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Control to delete. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/controls/{control_id}` |

#### `projects.locations.dataStores.controls.patch()`

Updates a Control. Control action type cannot be changed. If the Control to update does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/*/locations/global/dataStore/*/controls/*` |
| `params.updateMask` | `string` | No | Optional. Indicates which fields in the provided Control to update. The following are NOT supported: * Control.name * Control.solution_type If not set or empty, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.controls.get()`

Gets a Control.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Control to get. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/controls/{control_id}` |

#### `projects.locations.dataStores.controls.list()`

Lists all Controls by their parent DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListControls` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | Optional. A filter to apply on the list results. Supported features: * List all the products under the parent branch if filter is unset. Currently this field is unsupported. |

### `projects.locations.dataStores.conversations`

#### `projects.locations.dataStores.conversations.converse()`

Converses a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Conversation to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}`. Use `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/-` to activate auto session mode, which automatically creates a new conversation inside a ConverseConversation session. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.conversations.create()`

Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.conversations.delete()`

Deletes a Conversation. If the Conversation to delete does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Conversation to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}` |

#### `projects.locations.dataStores.conversations.patch()`

Updates a Conversation. Conversation action type cannot be changed. If the Conversation to update does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/dataStore/*/conversations/*` or `projects/{project}/locations/global/collections/{collection}/engines/*/conversations/*`. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided Conversation to update. The following are NOT supported: * Conversation.name If not set or empty, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.conversations.get()`

Gets a Conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Conversation to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/conversations/{conversation_id}` |

#### `projects.locations.dataStores.conversations.list()`

Lists all Conversations by their parent DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.pageSize` | `integer` | No | Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListConversations` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | A filter to apply on the list results. The supported features are: user_pseudo_id, state. Example: "user_pseudo_id = some_id" |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `conversation_name` Example: "update_time desc" "create_time" |

### `projects.locations.dataStores.branches`

#### `projects.locations.dataStores.branches.batchGetDocumentsMetadata()`

Gets index freshness metadata for Documents. Supported for website search only.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. |
| `params.matcher.urisMatcher.uris` | `string` | No | The exact URIs to match by. |
| `params.matcher.fhirMatcher.fhirResources` | `string` | No | Required. The FHIR resources to match by. Format: projects/{project}/locations/{location}/datasets/{dataset}/fhirStores/{fhir_store}/fhir/{resource_type}/{fhir_resource_id} |

### `projects.locations.dataStores.branches.operations`

#### `projects.locations.dataStores.branches.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.dataStores.branches.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.dataStores.branches.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.dataStores.branches.documents`

#### `projects.locations.dataStores.branches.documents.get()`

Gets a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Document does not exist, a `NOT_FOUND` error is returned. |

#### `projects.locations.dataStores.branches.documents.list()`

Gets a list of Documents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. Use `default_branch` as the branch ID, to list documents under the default branch. If the caller does not have permission to list Documents under this branch, regardless of whether or not this branch exists, a `PERMISSION_DENIED` error is returned. |
| `params.pageSize` | `integer` | No | Maximum number of Documents to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 are set to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned. |
| `params.pageToken` | `string` | No | A page token ListDocumentsResponse.next_page_token, received from a previous DocumentService.ListDocuments call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to DocumentService.ListDocuments must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned. |

#### `projects.locations.dataStores.branches.documents.create()`

Creates a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. |
| `params.documentId` | `string` | No | Required. The ID to use for the Document, which becomes the final component of the Document.name. If the caller does not have permission to create the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all Documents with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.branches.documents.patch()`

Updates a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.allowMissing` | `boolean` | No | If set to `true` and the Document is not found, a new Document is be created. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided imported 'document' to update. If not set, by default updates all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.branches.documents.delete()`

Deletes a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to delete the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the Document to delete does not exist, a `NOT_FOUND` error is returned. |

#### `projects.locations.dataStores.branches.documents.import()`

Bulk import of multiple Documents. Request processing may be synchronous. Non-existing items are created. Note: It is possible for a subset of the Documents to be successfully updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent branch resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. Requires create/update permission. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.branches.documents.purge()`

Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.branches.documents.getProcessedDocument()`

Gets the parsed layout information for a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Document, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to access the Document, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Document does not exist, a `NOT_FOUND` error is returned. |
| `params.processedDocumentType` | `string` | No | Required. What type of processing to return. |
| `params.processedDocumentFormat` | `string` | No | What format output should be. If unspecified, defaults to JSON. |
| `params.imageId` | `string` | No | Optional. Specifies config for IMAGE_BYTES. |

### `projects.locations.dataStores.branches.documents.chunks`

#### `projects.locations.dataStores.branches.documents.chunks.get()`

Gets a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Chunk, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}/chunks/{chunk}`. If the caller does not have permission to access the Chunk, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the requested Chunk does not exist, a `NOT_FOUND` error is returned. |

#### `projects.locations.dataStores.branches.documents.chunks.list()`

Gets a list of Chunks.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent document resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document}`. If the caller does not have permission to list Chunks under this document, regardless of whether or not this document exists, a `PERMISSION_DENIED` error is returned. |
| `params.pageSize` | `integer` | No | Maximum number of Chunks to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned. |
| `params.pageToken` | `string` | No | A page token ListChunksResponse.next_page_token, received from a previous ChunkService.ListChunks call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ChunkService.ListChunks must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned. |

### `projects.locations.dataStores.schemas`

#### `projects.locations.dataStores.schemas.get()`

Gets a Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. |

#### `projects.locations.dataStores.schemas.list()`

Gets a list of Schemas.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. |
| `params.pageSize` | `integer` | No | The maximum number of Schemas to return. The service may return fewer than this value. If unspecified, at most 100 Schemas are returned. The maximum value is 1000; values above 1000 are set to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous SchemaService.ListSchemas call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SchemaService.ListSchemas must match the call that provided the page token. |

#### `projects.locations.dataStores.schemas.create()`

Creates a Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. |
| `params.schemaId` | `string` | No | Required. The ID to use for the Schema, which becomes the final component of the Schema.name. This field should conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.schemas.patch()`

Updates a Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.allowMissing` | `boolean` | No | If set to true, and the Schema is not found, a new Schema is created. In this situation, `update_mask` is ignored. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.schemas.delete()`

Deletes a Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. |

### `projects.locations.dataStores.sessions`

#### `projects.locations.dataStores.sessions.create()`

Creates a Session. If the Session to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.sessions.delete()`

Deletes a Session. If the Session to delete does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Session to delete. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/sessions/{session_id}` |

#### `projects.locations.dataStores.sessions.patch()`

Updates a Session. Session action type cannot be changed. If the Session to update does not exist, a NOT_FOUND error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/{project}/locations/global/collections/{collection}/engines/{engine}/sessions/*` |
| `params.updateMask` | `string` | No | Indicates which fields in the provided Session to update. The following are NOT supported: * Session.name If not set or empty, all supported fields are updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.sessions.get()`

Gets a Session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Session to get. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}/sessions/{session_id}` |
| `params.includeAnswerDetails` | `boolean` | No | Optional. If set to true, the full session including all answer details will be returned. |

#### `projects.locations.dataStores.sessions.list()`

Lists all Sessions by their parent DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The data store resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.pageSize` | `integer` | No | Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListSessions` call. Provide this to retrieve the subsequent page. |
| `params.filter` | `string` | No | A comma-separated list of fields to filter by, in EBNF grammar. The supported fields are: * `user_pseudo_id` * `state` * `display_name` * `starred` * `is_pinned` * `labels` * `create_time` * `update_time` Examples: * `user_pseudo_id = some_id` * `display_name = "some_name"` * `starred = true` * `is_pinned=true AND (NOT labels:hidden)` * `create_time > "1970-01-01T12:00:00Z"` |
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `session_name` * `is_pinned` Example: * "update_time desc" * "create_time" * "is_pinned desc,update_time desc": list sessions by is_pinned first, then by update_time. |

### `projects.locations.dataStores.sessions.answers`

#### `projects.locations.dataStores.sessions.answers.get()`

Gets a Answer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Answer to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine_id}/sessions/{session_id}/answers/{answer_id}` |

### `projects.locations.dataStores.siteSearchEngine`

#### `projects.locations.dataStores.siteSearchEngine.enableAdvancedSiteSearch()`

Upgrade from basic site search to advanced site search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. Full resource name of the SiteSearchEngine, such as `projects/{project}/locations/{location}/dataStores/{data_store_id}/siteSearchEngine`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.siteSearchEngine.disableAdvancedSiteSearch()`

Downgrade from advanced site search to basic site search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. Full resource name of the SiteSearchEngine, such as `projects/{project}/locations/{location}/dataStores/{data_store_id}/siteSearchEngine`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.siteSearchEngine.recrawlUris()`

Request on-demand recrawl for a list of URIs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. Full resource name of the SiteSearchEngine, such as `projects/*/locations/*/collections/*/dataStores/*/siteSearchEngine`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.dataStores.siteSearchEngine.targetSites`

#### `projects.locations.dataStores.siteSearchEngine.targetSites.create()`

Creates a TargetSite.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.siteSearchEngine.targetSites.batchCreate()`

Creates TargetSite in a batch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource shared by all TargetSites being created. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. The parent field in the CreateBookRequest messages must either be empty or match this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.siteSearchEngine.targetSites.get()`

Gets a TargetSite.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.dataStores.siteSearchEngine.targetSites.patch()`

Updates a TargetSite.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The fully qualified resource name of the target site. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}` The `target_site_id` is system-generated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.siteSearchEngine.targetSites.delete()`

Deletes a TargetSite.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/targetSites/{target_site}`. If the caller does not have permission to access the TargetSite, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested TargetSite does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.dataStores.siteSearchEngine.targetSites.list()`

Gets a list of TargetSites.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent site search engine resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. If the caller does not have permission to list TargetSites under this site search engine, regardless of whether or not this branch exists, a PERMISSION_DENIED error is returned. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. The maximum value is 1000; values above 1000 will be coerced to 1000. If this field is negative, an INVALID_ARGUMENT error is returned. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListTargetSites` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTargetSites` must match the call that provided the page token. |

### `projects.locations.dataStores.siteSearchEngine.sitemaps`

#### `projects.locations.dataStores.siteSearchEngine.sitemaps.create()`

Creates a Sitemap.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name of the SiteSearchEngine, such as `projects/*/locations/*/collections/*/dataStores/*/siteSearchEngine`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.siteSearchEngine.sitemaps.delete()`

Deletes a Sitemap.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Sitemap, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine/sitemaps/{sitemap}`. If the caller does not have permission to access the Sitemap, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested Sitemap does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.dataStores.siteSearchEngine.sitemaps.fetch()`

Fetch Sitemaps in a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name of the SiteSearchEngine, such as `projects/*/locations/*/collections/*/dataStores/*/siteSearchEngine`. |
| `params.matcher.urisMatcher.uris` | `string` | No | The Sitemap uris. |

### `projects.locations.dataStores.userEvents`

#### `projects.locations.dataStores.userEvents.write()`

Writes a single user event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. If the write user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the write user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`. |
| `params.writeAsync` | `boolean` | No | If set to true, the user event is written asynchronously after validation, and the API responds without waiting for the write. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.userEvents.collect()`

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. If the collect user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the collect user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`. |
| `params.userEvent` | `string` | No | Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters. |
| `params.uri` | `string` | No | The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for third-party requests. |
| `params.ets` | `string` | No | The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes. |

#### `projects.locations.dataStores.userEvents.purge()`

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the catalog under which the events are created. The format is `projects/{project}/locations/global/collections/{collection}/dataStores/{dataStore}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.userEvents.import()`

Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent DataStore resource name, of the form `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.dataStores.widgetConfigs`

#### `projects.locations.dataStores.widgetConfigs.get()`

Gets a WidgetConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full WidgetConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}` |
| `params.acceptCache` | `boolean` | No | Optional. Whether it's acceptable to load the widget config from cache. If set to true, recent changes on widget configs may take a few minutes to reflect on the end user's view. It's recommended to set to true for maturely developed widgets, as it improves widget performance. Set to false to see changes reflected in prod right away, if your widget is under development. |
| `params.getWidgetConfigRequestOption.turnOffCollectionComponents` | `boolean` | No | Optional. Whether to turn off collection_components in WidgetConfig to reduce latency and data transmission. |

### `projects.locations.evaluations`

#### `projects.locations.evaluations.get()`

Gets a Evaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Evaluation, such as `projects/{project}/locations/{location}/evaluations/{evaluation}`. If the caller does not have permission to access the Evaluation, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested Evaluation does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.evaluations.list()`

Gets a list of Evaluations.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent location resource name, such as `projects/{project}/locations/{location}`. If the caller does not have permission to list Evaluations under this location, regardless of whether or not this location exists, a `PERMISSION_DENIED` error is returned. |
| `params.pageSize` | `integer` | No | Maximum number of Evaluations to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned. |
| `params.pageToken` | `string` | No | A page token ListEvaluationsResponse.next_page_token, received from a previous EvaluationService.ListEvaluations call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to EvaluationService.ListEvaluations must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned. |

#### `projects.locations.evaluations.create()`

Creates a Evaluation. Upon creation, the evaluation will be automatically triggered and begin execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.evaluations.listResults()`

Gets a list of results for a given a Evaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.evaluation` | `string` | Yes | Required. The evaluation resource name, such as `projects/{project}/locations/{location}/evaluations/{evaluation}`. If the caller does not have permission to list ListEvaluationResultsResponse.EvaluationResult under this evaluation, regardless of whether or not this evaluation set exists, a `PERMISSION_DENIED` error is returned. |
| `params.pageSize` | `integer` | No | Maximum number of ListEvaluationResultsResponse.EvaluationResult to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned. |
| `params.pageToken` | `string` | No | A page token ListEvaluationResultsResponse.next_page_token, received from a previous EvaluationService.ListEvaluationResults call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to EvaluationService.ListEvaluationResults must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned. |

### `projects.locations.evaluations.operations`

#### `projects.locations.evaluations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.groundingConfigs`

#### `projects.locations.groundingConfigs.check()`

Performs a grounding check.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groundingConfig` | `string` | Yes | Required. The resource name of the grounding config, such as `projects/*/locations/global/groundingConfigs/default_grounding_config`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.identityMappingStores`

#### `projects.locations.identityMappingStores.create()`

Creates a new Identity Mapping Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection resource name, such as `projects/{project}/locations/{location}`. |
| `params.cmekConfigName` | `string` | No | Resource name of the CmekConfig to use for protecting this Identity Mapping Store. |
| `params.disableCmek` | `boolean` | No | Identity Mapping Store without CMEK protections. If a default CmekConfig is set for the project, setting this field will override the default CmekConfig as well. |
| `params.identityMappingStoreId` | `string` | No | Required. The ID of the Identity Mapping Store to create. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 63 characters. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.identityMappingStores.get()`

Gets the Identity Mapping Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Identity Mapping Store to get. Format: `projects/{project}/locations/{location}/identityMappingStores/{identityMappingStore}` |

#### `projects.locations.identityMappingStores.delete()`

Deletes the Identity Mapping Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Identity Mapping Store to delete. Format: `projects/{project}/locations/{location}/identityMappingStores/{identityMappingStore}` |

#### `projects.locations.identityMappingStores.importIdentityMappings()`

Imports a list of Identity Mapping Entries to an Identity Mapping Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.identityMappingStore` | `string` | Yes | Required. The name of the Identity Mapping Store to import Identity Mapping Entries to. Format: `projects/{project}/locations/{location}/identityMappingStores/{identityMappingStore}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.identityMappingStores.purgeIdentityMappings()`

Purges specified or all Identity Mapping Entries from an Identity Mapping Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.identityMappingStore` | `string` | Yes | Required. The name of the Identity Mapping Store to purge Identity Mapping Entries from. Format: `projects/{project}/locations/{location}/identityMappingStores/{identityMappingStore}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.identityMappingStores.listIdentityMappings()`

Lists Identity Mappings in an Identity Mapping Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.identityMappingStore` | `string` | Yes | Required. The name of the Identity Mapping Store to list Identity Mapping Entries in. Format: `projects/{project}/locations/{location}/identityMappingStores/{identityMappingStore}` |
| `params.pageSize` | `integer` | No | Maximum number of IdentityMappings to return. If unspecified, defaults to 2000. The maximum allowed value is 10000. Values above 10000 will be coerced to 10000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListIdentityMappings` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIdentityMappings` must match the call that provided the page token. |

#### `projects.locations.identityMappingStores.list()`

Lists all Identity Mapping Stores.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the Identity Mapping Stores to list. Format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Maximum number of IdentityMappingStores to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListIdentityMappingStores` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListIdentityMappingStores` must match the call that provided the page token. |

### `projects.locations.identityMappingStores.operations`

#### `projects.locations.identityMappingStores.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.identityMappingStores.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.rankingConfigs`

#### `projects.locations.rankingConfigs.rank()`

Ranks a list of text records based on the given input query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.rankingConfig` | `string` | Yes | Required. The resource name of the rank service config, such as `projects/{project_num}/locations/{location}/rankingConfigs/default_ranking_config`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.requirements`

#### `projects.locations.requirements.checkRequirement()`

Check a particular requirement.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. Full resource name of the location. Format `projects/{project_number_or_id}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.sampleQuerySets`

#### `projects.locations.sampleQuerySets.get()`

Gets a SampleQuerySet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of SampleQuerySet, such as `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}`. If the caller does not have permission to access the SampleQuerySet, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested SampleQuerySet does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.sampleQuerySets.list()`

Gets a list of SampleQuerySets.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent location resource name, such as `projects/{project}/locations/{location}`. If the caller does not have permission to list SampleQuerySets under this location, regardless of whether or not this location exists, a `PERMISSION_DENIED` error is returned. |
| `params.pageSize` | `integer` | No | Maximum number of SampleQuerySets to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned. |
| `params.pageToken` | `string` | No | A page token ListSampleQuerySetsResponse.next_page_token, received from a previous SampleQuerySetService.ListSampleQuerySets call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SampleQuerySetService.ListSampleQuerySets must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned. |

#### `projects.locations.sampleQuerySets.create()`

Creates a SampleQuerySet

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}`. |
| `params.sampleQuerySetId` | `string` | No | Required. The ID to use for the SampleQuerySet, which will become the final component of the SampleQuerySet.name. If the caller does not have permission to create the SampleQuerySet, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all SampleQuerySets with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sampleQuerySets.patch()`

Updates a SampleQuerySet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The full resource name of the SampleQuerySet, in the format of `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided imported 'sample query set' to update. If not set, will by default update all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sampleQuerySets.delete()`

Deletes a SampleQuerySet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of SampleQuerySet, such as `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}`. If the caller does not have permission to delete the SampleQuerySet, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the SampleQuerySet to delete does not exist, a `NOT_FOUND` error is returned. |

### `projects.locations.sampleQuerySets.operations`

#### `projects.locations.sampleQuerySets.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.sampleQuerySets.sampleQueries`

#### `projects.locations.sampleQuerySets.sampleQueries.get()`

Gets a SampleQuery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of SampleQuery, such as `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}/sampleQueries/{sample_query}`. If the caller does not have permission to access the SampleQuery, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested SampleQuery does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.sampleQuerySets.sampleQueries.list()`

Gets a list of SampleQuerys.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent sample query set resource name, such as `projects/{project}/locations/{location}/sampleQuerySets/{sampleQuerySet}`. If the caller does not have permission to list SampleQuerys under this sample query set, regardless of whether or not this sample query set exists, a `PERMISSION_DENIED` error is returned. |
| `params.pageSize` | `integer` | No | Maximum number of SampleQuerys to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned. |
| `params.pageToken` | `string` | No | A page token ListSampleQueriesResponse.next_page_token, received from a previous SampleQueryService.ListSampleQueries call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to SampleQueryService.ListSampleQueries must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned. |

#### `projects.locations.sampleQuerySets.sampleQueries.create()`

Creates a SampleQuery

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}/sampleQuerySets/{sampleQuerySet}`. |
| `params.sampleQueryId` | `string` | No | Required. The ID to use for the SampleQuery, which will become the final component of the SampleQuery.name. If the caller does not have permission to create the SampleQuery, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. This field must be unique among all SampleQuerys with the same parent. Otherwise, an `ALREADY_EXISTS` error is returned. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sampleQuerySets.sampleQueries.patch()`

Updates a SampleQuery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The full resource name of the sample query, in the format of `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}/sampleQueries/{sample_query}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided imported 'simple query' to update. If not set, will by default update all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sampleQuerySets.sampleQueries.delete()`

Deletes a SampleQuery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of SampleQuery, such as `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}/sampleQueries/{sample_query}`. If the caller does not have permission to delete the SampleQuery, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the SampleQuery to delete does not exist, a `NOT_FOUND` error is returned. |

#### `projects.locations.sampleQuerySets.sampleQueries.import()`

Bulk import of multiple SampleQuerys. Sample queries that already exist may be deleted. Note: It is possible for a subset of the SampleQuerys to be successfully imported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent sample query set resource name, such as `projects/{project}/locations/{location}/sampleQuerySets/{sampleQuerySet}`. If the caller does not have permission to list SampleQuerys under this sample query set, regardless of whether or not this sample query set exists, a `PERMISSION_DENIED` error is returned. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.userEvents`

#### `projects.locations.userEvents.write()`

Writes a single user event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. If the write user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the write user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`. |
| `params.writeAsync` | `boolean` | No | If set to true, the user event is written asynchronously after validation, and the API responds without waiting for the write. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.userEvents.collect()`

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a third-party domain. This method is used only by the Discovery Engine API JavaScript pixel and Google Tag Manager. Users should not call this method directly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. If the collect user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the collect user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`. |
| `params.userEvent` | `string` | No | Required. URL encoded UserEvent proto with a length limit of 2,000,000 characters. |
| `params.uri` | `string` | No | The URL including cgi-parameters but excluding the hash fragment with a length limit of 5,000 characters. This is often more useful than the referer URL, because many browsers only send the domain for third-party requests. |
| `params.ets` | `string` | No | The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes. |

#### `projects.locations.userEvents.import()`

Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent DataStore resource name, of the form `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.userStores`

#### `projects.locations.userStores.batchUpdateUserLicenses()`

Updates the User License. This method is used for batch assign/unassign licenses to users.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent UserStore resource name, format: `projects/{project}/locations/{location}/userStores/{user_store_id}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.userStores.operations`

#### `projects.locations.userStores.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.userStores.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.userStores.userLicenses`

#### `projects.locations.userStores.userLicenses.list()`

Lists the User Licenses.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent UserStore resource name, format: `projects/{project}/locations/{location}/userStores/{user_store_id}`. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, defaults to 10. The maximum value is 50; values above 50 will be coerced to 50. If this field is negative, an INVALID_ARGUMENT error is returned. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListUserLicenses` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListUserLicenses` must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Filter for the list request. Supported fields: * `license_assignment_state` Examples: * `license_assignment_state = ASSIGNED` to list assigned user licenses. * `license_assignment_state = NO_LICENSE` to list not licensed users. * `license_assignment_state = NO_LICENSE_ATTEMPTED_LOGIN` to list users who attempted login but no license assigned. * `license_assignment_state != NO_LICENSE_ATTEMPTED_LOGIN` to filter out users who attempted login but no license assigned. |

### `projects.operations`

#### `projects.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |