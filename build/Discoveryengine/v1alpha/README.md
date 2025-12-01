# Discovery Engine API - Apps Script Client Library

Auto-generated client library for using the **Discovery Engine API (version: v1alpha)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 01 Dec 2025 00:43:50 GMT
- **Last Modified:** Mon, 01 Dec 2025 00:43:50 GMT
- **Created:** Sun, 20 Jul 2025 16:31:43 GMT



---

## API Reference

### `billingAccounts`

### `billingAccounts.billingAccountLicenseConfigs`

#### `billingAccounts.billingAccountLicenseConfigs.distributeLicenseConfig()`

Distributes a LicenseConfig from billing account level to project level.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.billingAccountLicenseConfig` | `string` | Yes | Required. Full resource name of BillingAccountLicenseConfig. Format: `billingAccounts/{billing_account}/billingAccountLicenseConfigs/{billing_account_license_config_id}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `billingAccounts.billingAccountLicenseConfigs.retractLicenseConfig()`

This method is called from the billing account side to retract the LicenseConfig from the given project back to the billing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.billingAccountLicenseConfig` | `string` | Yes | Required. Full resource name of BillingAccountLicenseConfig. Format: `billingAccounts/{billing_account}/billingAccountLicenseConfigs/{billing_account_license_config_id}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `billingAccounts.billingAccountLicenseConfigs.list()`

Lists all BillingAccountLicenseConfigs for a given billing account.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Format: `billingAccounts/{billing_account}`. |
| `params.pageSize` | `integer` | No | Optional. Not supported. |
| `params.pageToken` | `string` | No | Optional. Not supported. |

#### `billingAccounts.billingAccountLicenseConfigs.get()`

Gets a BillingAccountLicenseConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of BillingAccountLicenseConfig. Format: `billingAccounts/{billing_account}/billingAccountLicenseConfigs/{billing_account_license_config_id}`. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.reportConsentChange()`

Updates service terms for this project. This method can be used to retroactively accept the latest terms. Terms available for update:

* [Terms for data use](https://cloud.google.com/retail/data-use-terms)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. Full resource name of a Project, such as `projects/{project_id_or_number}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.patch()`

Updates the editable settings of a Discovery Engine Project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Full resource name of the project, for example `projects/{project}`. Note that when making requests, project number and project id are both acceptable, but the server will always respond in project number. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. Supported fields: * `customer_provided_config` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations`

#### `projects.locations.updateAclConfig()`

Default ACL configuration for use in a location of a customer's project. Updates will only reflect to new data stores. Existing data stores will still use the old value.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the acl configuration. Format: `projects/{project}/locations/{location}/aclConfig`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.setDedicatedCrawlRate()`

Sets the dedicated crawl rate for a crawl_rate_scope. If the dedicated crawl rate was not set, this will enable vertex AI's crawl bot to use the new dedicated crawl rate for crawling. If the dedicated crawl rate was set, vertex AI's crawl bot will try to update the rate to the new value. If the new value is too high, the crawl bot may crawl at a lower rate to avoid overloading the user's website.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location resource where crawl rate management will be performed. Format: `projects/{project}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.removeDedicatedCrawlRate()`

Removes the dedicated crawl rate for a craw_rate_scope. If the dedicated crawl rate was set, this will disable vertex AI's crawl bot from using the dedicated crawl rate for crawling. If the dedicated crawl rate was not set, this is a no-op.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location resource where crawl rate management will be performed. Format: `projects/{project}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.setUpDataConnector()`

Creates a Collection and sets up the DataConnector for it. To stop a DataConnector after setup, use the CollectionService.DeleteCollection method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of Collection, in the format of `projects/{project}/locations/{location}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.setUpDataConnectorV2()`

Creates a Collection and sets up the DataConnector for it. To stop a DataConnector after setup, use the CollectionService.DeleteCollection method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of Collection, in the format of `projects/{project}/locations/{location}`. |
| `params.collectionId` | `string` | No | Required. The ID to use for the Collection, which will become the final component of the Collection's resource name. A new Collection is created as part of the DataConnector setup. DataConnector is a singleton resource under Collection, managing all DataStores of the Collection. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) standard with a length limit of 63 characters. Otherwise, an INVALID_ARGUMENT error is returned. |
| `params.collectionDisplayName` | `string` | No | Required. The display name of the Collection. Should be human readable, used to display collections in the Console Dashboard. UTF-8 encoded string with limit of 1024 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.estimateDataSize()`

Estimates the data size to be used by a customer.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. Full resource name of the location, such as `projects/{project}/locations/{location}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.queryConfigurablePricingUsageStats()`

Queries configurable pricing usage stats for a project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.project` | `string` | Yes | Required. The project to query usage stats for. Format: projects/{project} |
| `params.location` | `string` | Yes | Required. The location to query usage stats for. |
| `params.timeRange.startDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.timeRange.startDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.timeRange.startDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.timeRange.endDate.year` | `integer` | No | Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year. |
| `params.timeRange.endDate.month` | `integer` | No | Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day. |
| `params.timeRange.endDate.day` | `integer` | No | Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant. |
| `params.metricTypes` | `string` | No | Optional. The metric types to return usage for. |

### `projects.locations.notebooks`

#### `projects.locations.notebooks.create()`

Creates a notebook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.notebooks.get()`

Gets a notebook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Notebook, such as `projects/{project}/locations/{location}/notebooks/{notebook_id}`. |

#### `projects.locations.notebooks.listRecentlyViewed()`

Lists the notebooks ordered by last view time.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent branch resource name, such as `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of Notebooks to return. If unspecified, defaults to "500". The maximum allowed value is "500". If this field is negative, will use the default value. |
| `params.pageToken` | `string` | No | Optional. The page token, provide this to retrieve the subsequent page. |

#### `projects.locations.notebooks.batchDelete()`

Batch deletes Notebooks.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent branch resource name, such as `projects/{project}/locations/{location}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.notebooks.share()`

Shares a notebook to other accounts.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of Notebook, such as `projects/{project}/locations/{location}/notebooks/{notebook_id}`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.notebooks.audioOverviews`

#### `projects.locations.notebooks.audioOverviews.create()`

Generates a new audio overview.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this notebook will be created. Format: projects/{project}/locations/{location}/notebooks/{notebook} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.notebooks.audioOverviews.delete()`

Deletes an audio overview.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the AudioOverview, such as `projects/{project}/locations/{location}/notebooks/{notebook}/audioOverviews/{audio_overview_id}`. |

### `projects.locations.notebooks.sources`

#### `projects.locations.notebooks.sources.batchCreate()`

Creates a list of Sources.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where the sources will be created. Format: projects/{project}/locations/{location}/notebooks/{notebook} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.notebooks.sources.get()`

Gets a Source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name for source Format: projects/{project}/locations/{location}/notebooks/{notebook}/sources/{source} |

#### `projects.locations.notebooks.sources.batchDelete()`

Deletes multiple sources

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where the sources will be deleted. Format: projects/{project}/locations/{location}/notebooks/{notebook} |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.groundingConfigs`

#### `projects.locations.groundingConfigs.check()`

Performs a grounding check.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.groundingConfig` | `string` | Yes | Required. The resource name of the grounding config, such as `projects/*/locations/global/groundingConfigs/default_grounding_config`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.operations`

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

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

### `projects.locations.authorizations`

#### `projects.locations.authorizations.create()`

Creates an Authorization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}` |
| `params.authorizationId` | `string` | No | Required. The ID to use for the authorization, which will become the final component of the resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) with a length limit of 63 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authorizations.delete()`

Deletes an Authorization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of Authorization. Format: `projects/{project}/locations/{location}/authorizations/{authorization}` If the caller does not have permission to delete the authorization, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the authorization to delete does not exist, a `NOT_FOUND` error is returned. |

#### `projects.locations.authorizations.patch()`

Updates an Authorization

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of the authorization. Format: `projects/{project}/locations/{location}/authorizations/{authorization}` It must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.authorizations.get()`

Gets an Authorization.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of Authorization. Format: `projects/{project}/locations/{location}/authorizations/{authorization}` |

#### `projects.locations.authorizations.list()`

Lists all Authorizations under an Engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | Maximum number of Authorizations to return. If unspecified, defaults to 100. The maximum allowed value is 1000; anything above that will be coerced down to 1000. |
| `params.pageToken` | `string` | No | A page token ListAuthorizationsResponse.next_page_token, received from a previous AuthorizationService.ListAuthorizations call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAuthorizations must match the call that provided the page token. |

### `projects.locations.cmekConfigs`

#### `projects.locations.cmekConfigs.patch()`

Provisions a CMEK key for use in a location of a customer's project. This method will also conduct location validation on the provided cmekConfig to make sure the key is valid and can be used in the selected location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the CmekConfig of the form `projects/{project}/locations/{location}/cmekConfig` or `projects/{project}/locations/{location}/cmekConfigs/{cmek_config}`. |
| `params.setDefault` | `boolean` | No | Set the following CmekConfig as the default to be used for child resources if one is not specified. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.collections.operations`

#### `projects.locations.collections.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

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
| `params.userPseudoId` | `string` | No | Optional. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. |
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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.trainCustomModel()`

Trains a custom model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dataStore` | `string` | Yes | Required. The resource name of the Data Store, such as `projects/*/locations/global/collections/default_collection/dataStores/default_data_store`. This field is used to identify the data store where to train the models. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.servingConfigs.searchLite()`

Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.servingConfigs.answer()`

Answer query method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.servingConfigs.streamAnswer()`

Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.servingConfigs.recommend()`

Makes a recommendation, which requires a contextual user event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. Full resource name of a ServingConfig: `projects/*/locations/global/collections/*/engines/*/servingConfigs/*`, or `projects/*/locations/global/collections/*/dataStores/*/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID is used as the ID of the default serving config. For example, for Engine `projects/*/locations/global/collections/*/engines/my-engine`, you can use `projects/*/locations/global/collections/*/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.servingConfigs.patch()`

Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}/servingConfigs/{serving_config_id}` |
| `params.updateMask` | `string` | No | Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

#### `projects.locations.collections.dataStores.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.collections.dataStores.branches`

#### `projects.locations.collections.dataStores.branches.list()`

Lists all Branchs under the specified parent DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name. |
| `params.view` | `string` | No | The view to apply to the returned Branch. Defaults to Branch.BranchView.BASIC if unspecified. |

#### `projects.locations.collections.dataStores.branches.get()`

Retrieves a Branch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the branch to retrieve. Format: `projects/*/locations/global/dataStores/default_data_store/branches/some_branch_id`. "default_branch" can be used as a special branch_id, it returns the default branch that has been set for the document. |
| `params.view` | `string` | No | The view to apply to the returned Branch. Defaults to Branch.BranchView.BASIC if unspecified. |

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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.branches.documents.patch()`

Updates a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.allowMissing` | `boolean` | No | If set to `true` and the Document is not found, a new Document is be created. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided imported 'document' to update. If not set, by default updates all fields. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.branches.documents.purge()`

Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. |
| `params.requestBody` | `object` | Yes | The request body. |

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

### `projects.locations.collections.dataStores.completionConfig`

#### `projects.locations.collections.dataStores.completionConfig.completeQuery()`

Completes the user input with advanced keyword suggestions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.completionConfig` | `string` | Yes | Required. The completion_config of the parent dataStore or engine resource name for which the completion is performed, such as `projects/*/locations/global/collections/default_collection/dataStores/*/completionConfig` `projects/*/locations/global/collections/default_collection/engines/*/completionConfig`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.collections.dataStores.suggestionDenyListEntries`

#### `projects.locations.collections.dataStores.suggestionDenyListEntries.import()`

Imports all SuggestionDenyListEntry for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/*/locations/*/collections/*/dataStores/*. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.suggestionDenyListEntries.purge()`

Permanently deletes all SuggestionDenyListEntry for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/*/locations/*/collections/*/dataStores/*. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.collections.dataStores.completionSuggestions`

#### `projects.locations.collections.dataStores.completionSuggestions.import()`

Imports CompletionSuggestions for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to import customer autocomplete suggestions. Follows pattern `projects/*/locations/*/collections/*/dataStores/*` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.completionSuggestions.purge()`

Permanently deletes all CompletionSuggestions for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to purge completion suggestions. Follows pattern projects/*/locations/*/collections/*/dataStores/*. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.collections.dataStores.controls`

#### `projects.locations.collections.dataStores.controls.create()`

Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. |
| `params.controlId` | `string` | No | Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value must be within 1-63 characters. Valid characters are /a-z-_/. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.conversations.create()`

Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.schemas.patch()`

Updates a Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.allowMissing` | `boolean` | No | If set to true, and the Schema is not found, a new Schema is created. In this situation, `update_mask` is ignored. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `session_name` * `is_pinned` Example: * `update_time desc` * `create_time` * `is_pinned desc,update_time desc`: list sessions by is_pinned first, then by update_time. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.disableAdvancedSiteSearch()`

Downgrade from advanced site search to basic site search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. Full resource name of the SiteSearchEngine, such as `projects/{project}/locations/{location}/dataStores/{data_store_id}/siteSearchEngine`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.recrawlUris()`

Request on-demand recrawl for a list of URIs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. Full resource name of the SiteSearchEngine, such as `projects/*/locations/*/collections/*/dataStores/*/siteSearchEngine`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.batchVerifyTargetSites()`

Verify target sites' ownership and validity. This API sends all the target sites under site search engine for verification.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource shared by all TargetSites being verified. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.siteSearchEngine.targetSites.batchCreate()`

Creates TargetSite in a batch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource shared by all TargetSites being created. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. The parent field in the CreateBookRequest messages must either be empty or match this field. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataStores.userEvents.import()`

Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent DataStore resource name, of the form `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.collections.dataStores.widgetConfigs`

#### `projects.locations.collections.dataStores.widgetConfigs.get()`

Gets a WidgetConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full WidgetConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}` |
| `params.acceptCache` | `boolean` | No | Optional. Whether it's acceptable to load the widget config from cache. If set to true, recent changes on widget configs may take a few minutes to reflect on the end user's view. It's recommended to set to true for maturely developed widgets, as it improves widget performance. Set to false to see changes reflected in prod right away, if your widget is under development. |
| `params.getWidgetConfigRequestOption.turnOffCollectionComponents` | `boolean` | No | Optional. Whether to turn off collection_components in WidgetConfig to reduce latency and data transmission. |

#### `projects.locations.collections.dataStores.widgetConfigs.patch()`

Update a WidgetConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the widget config. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided WidgetConfig to update. The following are the only supported fields: * WidgetConfig.enable_autocomplete If not set, all supported fields are updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.collections.dataConnector`

#### `projects.locations.collections.dataConnector.startConnectorRun()`

Starts an immediate synchronization process for a DataConnector. Third Party Connector Users must specify which entities should be synced. FHIR Connectors must provide a timestamp to indicate the point in time from which data should be synced.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Connector name of the form projects/{project}/locations/{location}/collections/ {collection_id}/dataConnector |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.dataConnector.checkRefreshToken()`

Deprecated: Checks the existence of a refresh token for the EUC user for a given connection and returns its details. Use AcquireAccessToken instead and then check the validity of the returned token by asking the 3rd party system. There's no way to know for sure if a refresh token is valid without asking the 3rd party system.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the connector for which a token is queried. |

#### `projects.locations.collections.dataConnector.acquireAccessToken()`

Uses the per-user refresh token minted with AcquireAndStoreRefreshToken to generate and return a new access token and its details. Takes the access token from cache if available. Rotates the stored refresh token if needed. Uses the end user identity to return the user specific access token. Does *not* return the credentials configured by the administrator. Used by action execution and UI.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the connector for which a token is queried. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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

#### `projects.locations.collections.engines.getWorkspaceSettings()`

Get Workspace settings for the end user.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full Engine resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}` |

#### `projects.locations.collections.engines.pause()`

Pauses the training of an existing engine. Only applicable if SolutionType is SOLUTION_TYPE_RECOMMENDATION.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the engine to pause. Format: `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.resume()`

Resumes the training of an existing engine. Only applicable if SolutionType is SOLUTION_TYPE_RECOMMENDATION.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the engine to resume. Format: `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.tune()`

Tunes an existing engine. Only applicable if SolutionType is SOLUTION_TYPE_RECOMMENDATION.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the engine to tune. Format: `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.collections.engines.servingConfigs`

#### `projects.locations.collections.engines.servingConfigs.search()`

Performs a search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.servingConfigs.searchLite()`

Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.servingConfigs.answer()`

Answer query method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.servingConfigs.streamAnswer()`

Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.servingConfigs.recommend()`

Makes a recommendation, which requires a contextual user event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. Full resource name of a ServingConfig: `projects/*/locations/global/collections/*/engines/*/servingConfigs/*`, or `projects/*/locations/global/collections/*/dataStores/*/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID is used as the ID of the default serving config. For example, for Engine `projects/*/locations/global/collections/*/engines/my-engine`, you can use `projects/*/locations/global/collections/*/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.servingConfigs.patch()`

Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}/servingConfigs/{serving_config_id}` |
| `params.updateMask` | `string` | No | Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

#### `projects.locations.collections.engines.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.collections.engines.assistants`

#### `projects.locations.collections.engines.assistants.listAvailableAgentViews()`

Lists the data for displaying the Agents under an Assistant which are available to the caller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` |
| `params.agentOrigin` | `string` | No | Optional. The origin of the Agent. |
| `params.sortBy` | `string` | No | Optional. The field to sort by. Can have the following values: - display-name: The display name of the agent. - description: The description of the agent. - create-time: The creation time of the agent. - state: The state of the agent. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of AgentViewss to return. If unspecified, defaults to 100. The maximum allowed value is 1000; anything above that will be coerced down to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token ListAvailableAgentViewsResponse.next_page_token, received from a previous AgentService.ListAvailableAgentViews call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAvailableAgentViews must match the call that provided the page token. |
| `params.languageCode` | `string` | No | Optional. The UI language currently shown to the user. Specifying this field request that the texts in the AgentViews in the response should be translated to this language. |
| `params.maxSuggestedPrompts` | `integer` | No | Optional. The maximum number of suggested prompts to return per agent. |
| `params.filter` | `string` | No | Optional. The filter syntax consists of an expression language for constructing a predicate from one or more fields of the files being filtered. Filter expression is case-sensitive. Allowed fields are: * `display_name` * `state` Some examples of filters would be: * `display_name = 'agent_1'` * `display_name = 'agent_1' AND state = ENABLED` For a full description of the filter format, please see https://google.aip.dev/160. |

#### `projects.locations.collections.engines.assistants.streamAssist()`

Assists the user with a query in a streaming fashion.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the Assistant. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.assistants.create()`

Creates an Assistant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` |
| `params.assistantId` | `string` | No | Required. The ID to use for the Assistant, which will become the final component of the Assistant's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) with a length limit of 63 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.assistants.delete()`

Deletes an Assistant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of Assistant. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` If the caller does not have permission to delete the Assistant, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the Assistant to delete does not exist, a NOT_FOUND error is returned. |

#### `projects.locations.collections.engines.assistants.patch()`

Updates an Assistant

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Resource name of the assistant. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` It must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.assistants.get()`

Gets an Assistant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of Assistant. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` |

#### `projects.locations.collections.engines.assistants.list()`

Lists all Assistants under an Engine.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}` |
| `params.pageSize` | `integer` | No | Maximum number of Assistants to return. If unspecified, defaults to 100. The maximum allowed value is 1000; anything above that will be coerced down to 1000. |
| `params.pageToken` | `string` | No | A page token ListAssistantsResponse.next_page_token, received from a previous AssistantService.ListAssistants call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAssistants must match the call that provided the page token. |

### `projects.locations.collections.engines.assistants.agents`

#### `projects.locations.collections.engines.assistants.agents.create()`

Creates an Agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.assistants.agents.delete()`

Deletes an Agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of Agent. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}/agents/{agent}` If the caller does not have permission to delete the agent, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the agent to delete does not exist, a `NOT_FOUND` error is returned. |

#### `projects.locations.collections.engines.assistants.agents.patch()`

Updates an Agent

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Resource name of the agent. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}/agents/{agent}` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.assistants.agents.get()`

Gets an Agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of Agent. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}/agents/{agent}` |

#### `projects.locations.collections.engines.assistants.agents.list()`

Lists all Agents under an Assistant which were created by the caller.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of Agents to return. If unspecified, defaults to 100. The maximum allowed value is 1000; anything above that will be coerced down to 1000. |
| `params.pageToken` | `string` | No | Optional. A page token ListAgentsResponse.next_page_token, received from a previous AgentService.ListAgents call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ListAgents must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `is_pinned` Example: * "update_time desc" * "is_pinned desc,update_time desc": list agents by is_pinned first, then by update_time. |

#### `projects.locations.collections.engines.assistants.agents.getIamPolicy()`

Gets the access control policy for an agent resource. A `NOT_FOUND` error is returned if the resource does not exist. An empty policy is returned if the resource exists but does not have a policy set on it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.collections.engines.assistants.agents.setIamPolicy()`

Sets the access control policy for an agent resource. A `NOT_FOUND` error is returned if the resource does not exist. Policy can only contain `roles/discoveryengine.agentUser`, `roles/discoveryengine.agentViewer` and `roles/discoveryengine.agentEditor` roles.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.assistants.agents.enableAgent()`

Enables an Agent. The `state` of the Agent becomes `ENABLED`. Can be called on an Agent in the state `DISABLED` or 'SUSPENDED', otherwise it returns an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Agent to enable. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}/agents/{agent}` |

#### `projects.locations.collections.engines.assistants.agents.disableAgent()`

Disables an Agent. The `state` of the Agent becomes `DISABLED`. Can be called on an Agent in the state `ENABLED` or`SUSPENDED`, otherwise it returns an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Agent to disable. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}/agents/{agent}` |

#### `projects.locations.collections.engines.assistants.agents.suspendAgent()`

Suspends an Agent. It is still available for viewing but not for use. The `state` of the Agent becomes `SUSPENDED`. Can be called on an Agent in the state `ENABLED`, otherwise it returns an error.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Agent to suspend. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}/agents/{agent}` |
| `params.suspensionReason` | `string` | No | Required. The reason for suspending the Agent. This will be shown to the users of the Agent. |

#### `projects.locations.collections.engines.assistants.agents.getAgentView()`

Returns a AgentView for a given Agent, which contains additional information about the Agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Agent to get. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}/agents/{agent}` |
| `params.languageCode` | `string` | No | Optional. The UI language currently shown to the user. Specifying this field request that the texts in the AgentView in the response should be translated to this language. |
| `params.maxSuggestedPrompts` | `integer` | No | Optional. The maximum number of suggested prompts to return per agent. |

### `projects.locations.collections.engines.assistants.agents.operations`

#### `projects.locations.collections.engines.assistants.agents.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.collections.engines.assistants.agents.files`

#### `projects.locations.collections.engines.assistants.agents.files.import()`

Imports a file to an Agent. Currently only No-Code agents are supported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the Agent. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}/agents/{agent}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.collections.engines.assistants.cannedQueries`

#### `projects.locations.collections.engines.assistants.cannedQueries.create()`

Creates a CannedQuery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` |
| `params.cannedQueryId` | `string` | No | Required. The ID to use for the canned query, which will become the final component of the canned query's resource name. This field must conform to [RFC-1034](https://tools.ietf.org/html/rfc1034) with a length limit of 63 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.assistants.cannedQueries.delete()`

Deletes a CannedQuery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of CannedQuery. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}/cannedQueries/{canned_query}` If the caller does not have permission to delete the canned query, regardless of whether or not it exists, a `PERMISSION_DENIED` error is returned. If the canned query to delete does not exist, a `NOT_FOUND` error is returned. |

#### `projects.locations.collections.engines.assistants.cannedQueries.patch()`

Updates a CannedQuery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Resource name of the canned query. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}/cannedQueries/{canned_query}` It must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.assistants.cannedQueries.get()`

Gets a CannedQuery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of CannedQuery. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}/cannedQueries/{canned_query}` |

#### `projects.locations.collections.engines.assistants.cannedQueries.list()`

Lists all CannedQuerys under an Assistant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. Format: `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/assistants/{assistant}` |
| `params.filter` | `string` | No | Optional. The filter expression. Supported fields: * `enabled` * `google_defined` Examples: * `enabled=true` * `google_defined=true` * `enabled=true AND google_defined=true` |
| `params.pageSize` | `integer` | No | Maximum number of canned queries to return. If unspecified, defaults to 100. The maximum allowed value is 1000; anything above that will be coerced down to 1000. |
| `params.pageToken` | `string` | No | A page token received from a previous CannedQueryService.ListCannedQueries call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to CannedQueryService.ListCannedQueries must match the call that provided the page token. |

### `projects.locations.collections.engines.analytics`

#### `projects.locations.collections.engines.analytics.exportMetrics()`

Exports metrics.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.analytics` | `string` | Yes | Required. The analytics resource name under the engine where the metrics are created. The format is `projects/{project}/locations/{location}/collections/{collection}/engines/{engine}/analytics`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.collections.engines.completionConfig`

#### `projects.locations.collections.engines.completionConfig.completeQuery()`

Completes the user input with advanced keyword suggestions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.completionConfig` | `string` | Yes | Required. The completion_config of the parent dataStore or engine resource name for which the completion is performed, such as `projects/*/locations/global/collections/default_collection/dataStores/*/completionConfig` `projects/*/locations/global/collections/default_collection/engines/*/completionConfig`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.completionConfig.removeSuggestion()`

Removes the search history suggestion in an engine for a user. This will remove the suggestion from being returned in the AdvancedCompleteQueryResponse.recent_search_suggestions for this user. If the user searches the same suggestion again, the new history will override and suggest this suggestion again.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.completionConfig` | `string` | Yes | Required. The completion_config of the parent engine resource name for which the search history suggestion is to be removed, such as `projects/*/locations/global/collections/default_collection/engines/*/completionConfig`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.collections.engines.controls`

#### `projects.locations.collections.engines.controls.create()`

Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. |
| `params.controlId` | `string` | No | Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value must be within 1-63 characters. Valid characters are /a-z-_/. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.collections.engines.conversations.create()`

Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `session_name` * `is_pinned` Example: * `update_time desc` * `create_time` * `is_pinned desc,update_time desc`: list sessions by is_pinned first, then by update_time. |

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
| `params.orderBy` | `string` | No | Optional. Specifies the order in which files are returned. The value is a comma-separated string of fields to sort by. For ascending order - just the field name is used. For descending order - the field name is suffixed with ` desc`. Sorting is stable and applied sequentially according to the order of fields provided in the string. Supported fields for ordering: * `upload_time`: The time the file was uploaded. * `file_name`: The name of the file. * `mime_type`: The MIME type of the file. * `session_name`: The name of the session the file belongs to. Default Behavior: If the `order_by` field is not specified, files will be returned sorted by creation time in descending order. Examples: 1. Sort by file name in ascending order: `file_name` 2. Sort by upload time in descending order: `upload_time desc` 3. Sort by file name (ascending), then by content type (MIME type) (descending), and finally by upload time (ascending): `file_name, mime_type desc, upload_time` |

### `projects.locations.collections.engines.widgetConfigs`

#### `projects.locations.collections.engines.widgetConfigs.get()`

Gets a WidgetConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full WidgetConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}` |
| `params.acceptCache` | `boolean` | No | Optional. Whether it's acceptable to load the widget config from cache. If set to true, recent changes on widget configs may take a few minutes to reflect on the end user's view. It's recommended to set to true for maturely developed widgets, as it improves widget performance. Set to false to see changes reflected in prod right away, if your widget is under development. |
| `params.getWidgetConfigRequestOption.turnOffCollectionComponents` | `boolean` | No | Optional. Whether to turn off collection_components in WidgetConfig to reduce latency and data transmission. |

#### `projects.locations.collections.engines.widgetConfigs.patch()`

Update a WidgetConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the widget config. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided WidgetConfig to update. The following are the only supported fields: * WidgetConfig.enable_autocomplete If not set, all supported fields are updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.dataStores`

#### `projects.locations.dataStores.completeQuery()`

Completes the specified user input with keyword suggestions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.dataStore` | `string` | Yes | Required. The parent data store resource name for which the completion is performed, such as `projects/*/locations/global/collections/default_collection/dataStores/default_data_store`. |
| `params.query` | `string` | No | Required. The typeahead input used to fetch suggestions. Maximum length is 128 characters. |
| `params.queryModel` | `string` | No | Specifies the autocomplete data model. This overrides any model specified in the Configuration > Autocomplete section of the Cloud console. Currently supported values: * `document` - Using suggestions generated from user-imported documents. * `search-history` - Using suggestions generated from the past history of SearchService.Search API calls. Do not use it when there is no traffic for Search API. * `user-event` - Using suggestions generated from user-imported search events. * `document-completable` - Using suggestions taken directly from user-imported document fields marked as completable. Default values: * `document` is the default model for regular dataStores. * `search-history` is the default model for site search dataStores. |
| `params.userPseudoId` | `string` | No | Optional. A unique identifier for tracking visitors. For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor logs in or out of the website. This field should NOT have a fixed value such as `unknown_visitor`. This should be the same identifier as UserEvent.user_pseudo_id and SearchRequest.user_pseudo_id. The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an `INVALID_ARGUMENT` error is returned. |
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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.servingConfigs.searchLite()`

Performs a search. Similar to the SearchService.Search method, but a lite version that allows API key for authentication, where OAuth and IAM checks are not required. Only public website search is supported by this method. If data stores and engines not associated with public website search are specified, a `FAILED_PRECONDITION` error is returned. This method can be used for easy onboarding without having to implement an authentication backend. However, it is strongly recommended to use SearchService.Search instead with required OAuth and IAM checks to provide better data security.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/default_data_store/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.servingConfigs.answer()`

Answer query method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.servingConfigs.streamAnswer()`

Answer query method (streaming). It takes one AnswerQueryRequest and returns multiple AnswerQueryResponse messages in a stream.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. The resource name of the Search serving config, such as `projects/*/locations/global/collections/default_collection/engines/*/servingConfigs/default_serving_config`, or `projects/*/locations/global/collections/default_collection/dataStores/*/servingConfigs/default_serving_config`. This field is used to identify the serving configuration name, set of models used to make the search. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.servingConfigs.recommend()`

Makes a recommendation, which requires a contextual user event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.servingConfig` | `string` | Yes | Required. Full resource name of a ServingConfig: `projects/*/locations/global/collections/*/engines/*/servingConfigs/*`, or `projects/*/locations/global/collections/*/dataStores/*/servingConfigs/*` One default serving config is created along with your recommendation engine creation. The engine ID is used as the ID of the default serving config. For example, for Engine `projects/*/locations/global/collections/*/engines/my-engine`, you can use `projects/*/locations/global/collections/*/engines/my-engine/servingConfigs/my-engine` for your RecommendationService.Recommend requests. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.servingConfigs.patch()`

Updates a ServingConfig. Returns a NOT_FOUND error if the ServingConfig does not exist.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Fully qualified name `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}/servingConfigs/{serving_config_id}` |
| `params.updateMask` | `string` | No | Indicates which fields in the provided ServingConfig to update. The following are NOT supported: * ServingConfig.name If not set, all supported fields are updated. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

#### `projects.locations.dataStores.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.dataStores.branches`

#### `projects.locations.dataStores.branches.list()`

Lists all Branchs under the specified parent DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name. |
| `params.view` | `string` | No | The view to apply to the returned Branch. Defaults to Branch.BranchView.BASIC if unspecified. |

#### `projects.locations.dataStores.branches.get()`

Retrieves a Branch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the branch to retrieve. Format: `projects/*/locations/global/dataStores/default_data_store/branches/some_branch_id`. "default_branch" can be used as a special branch_id, it returns the default branch that has been set for the document. |
| `params.view` | `string` | No | The view to apply to the returned Branch. Defaults to Branch.BranchView.BASIC if unspecified. |

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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.branches.documents.patch()`

Updates a Document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the document. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}/documents/{document_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.allowMissing` | `boolean` | No | If set to `true` and the Document is not found, a new Document is be created. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided imported 'document' to update. If not set, by default updates all fields. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.branches.documents.purge()`

Permanently deletes all selected Documents in a branch. This process is asynchronous. Depending on the number of Documents to be deleted, this operation can take hours to complete. Before the delete operation completes, some Documents might still be returned by DocumentService.GetDocument or DocumentService.ListDocuments. To get a list of the Documents to be deleted, set PurgeDocumentsRequest.force to false.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/branches/{branch}`. |
| `params.requestBody` | `object` | Yes | The request body. |

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

### `projects.locations.dataStores.completionConfig`

#### `projects.locations.dataStores.completionConfig.completeQuery()`

Completes the user input with advanced keyword suggestions.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.completionConfig` | `string` | Yes | Required. The completion_config of the parent dataStore or engine resource name for which the completion is performed, such as `projects/*/locations/global/collections/default_collection/dataStores/*/completionConfig` `projects/*/locations/global/collections/default_collection/engines/*/completionConfig`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.dataStores.suggestionDenyListEntries`

#### `projects.locations.dataStores.suggestionDenyListEntries.import()`

Imports all SuggestionDenyListEntry for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/*/locations/*/collections/*/dataStores/*. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.suggestionDenyListEntries.purge()`

Permanently deletes all SuggestionDenyListEntry for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to import denylist entries. Follows pattern projects/*/locations/*/collections/*/dataStores/*. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.dataStores.completionSuggestions`

#### `projects.locations.dataStores.completionSuggestions.import()`

Imports CompletionSuggestions for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to import customer autocomplete suggestions. Follows pattern `projects/*/locations/*/collections/*/dataStores/*` |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.completionSuggestions.purge()`

Permanently deletes all CompletionSuggestions for a DataStore.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent data store resource name for which to purge completion suggestions. Follows pattern projects/*/locations/*/collections/*/dataStores/*. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.dataStores.controls`

#### `projects.locations.dataStores.controls.create()`

Creates a Control. By default 1000 controls are allowed for a data store. A request can be submitted to adjust this limit. If the Control to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}` or `projects/{project}/locations/{location}/collections/{collection_id}/engines/{engine_id}`. |
| `params.controlId` | `string` | No | Required. The ID to use for the Control, which will become the final component of the Control's resource name. This value must be within 1-63 characters. Valid characters are /a-z-_/. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.conversations.create()`

Creates a Conversation. If the Conversation to create already exists, an ALREADY_EXISTS error is returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of parent data store. Format: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store_id}` |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.schemas.patch()`

Updates a Schema.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the schema, in the format of `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/schemas/{schema}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.allowMissing` | `boolean` | No | If set to true, and the Schema is not found, a new Schema is created. In this situation, `update_mask` is ignored. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.orderBy` | `string` | No | A comma-separated list of fields to order by, sorted in ascending order. Use "desc" after a field name for descending. Supported fields: * `update_time` * `create_time` * `session_name` * `is_pinned` Example: * `update_time desc` * `create_time` * `is_pinned desc,update_time desc`: list sessions by is_pinned first, then by update_time. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.siteSearchEngine.disableAdvancedSiteSearch()`

Downgrade from advanced site search to basic site search.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. Full resource name of the SiteSearchEngine, such as `projects/{project}/locations/{location}/dataStores/{data_store_id}/siteSearchEngine`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.siteSearchEngine.recrawlUris()`

Request on-demand recrawl for a list of URIs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.siteSearchEngine` | `string` | Yes | Required. Full resource name of the SiteSearchEngine, such as `projects/*/locations/*/collections/*/dataStores/*/siteSearchEngine`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.dataStores.siteSearchEngine.targetSites`

#### `projects.locations.dataStores.siteSearchEngine.targetSites.create()`

Creates a TargetSite.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name of TargetSite, such as `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.siteSearchEngine.targetSites.batchCreate()`

Creates TargetSite in a batch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource shared by all TargetSites being created. `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}/siteSearchEngine`. The parent field in the CreateBookRequest messages must either be empty or match this field. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.dataStores.userEvents.import()`

Bulk import of user events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent DataStore resource name, of the form `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}` |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.dataStores.widgetConfigs`

#### `projects.locations.dataStores.widgetConfigs.get()`

Gets a WidgetConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full WidgetConfig resource name. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}` |
| `params.acceptCache` | `boolean` | No | Optional. Whether it's acceptable to load the widget config from cache. If set to true, recent changes on widget configs may take a few minutes to reflect on the end user's view. It's recommended to set to true for maturely developed widgets, as it improves widget performance. Set to false to see changes reflected in prod right away, if your widget is under development. |
| `params.getWidgetConfigRequestOption.turnOffCollectionComponents` | `boolean` | No | Optional. Whether to turn off collection_components in WidgetConfig to reduce latency and data transmission. |

#### `projects.locations.dataStores.widgetConfigs.patch()`

Update a WidgetConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the widget config. Format: `projects/{project}/locations/{location}/collections/{collection_id}/dataStores/{data_store_id}/widgetConfigs/{widget_config_id}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided WidgetConfig to update. The following are the only supported fields: * WidgetConfig.enable_autocomplete If not set, all supported fields are updated. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.pageSize` | `integer` | No | Optional. Maximum number of Evaluations to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned. |
| `params.pageToken` | `string` | No | Optional. A page token ListEvaluationsResponse.next_page_token, received from a previous EvaluationService.ListEvaluations call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to EvaluationService.ListEvaluations must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned. |

#### `projects.locations.evaluations.create()`

Creates a Evaluation. Upon creation, the evaluation will be automatically triggered and begin execution.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.evaluations.listResults()`

Gets a list of results for a given a Evaluation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.evaluation` | `string` | Yes | Required. The evaluation resource name, such as `projects/{project}/locations/{location}/evaluations/{evaluation}`. If the caller does not have permission to list ListEvaluationResultsResponse.EvaluationResult under this evaluation, regardless of whether or not this evaluation set exists, a `PERMISSION_DENIED` error is returned. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of ListEvaluationResultsResponse.EvaluationResult to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000. If this field is negative, an `INVALID_ARGUMENT` error is returned. |
| `params.pageToken` | `string` | No | Optional. A page token ListEvaluationResultsResponse.next_page_token, received from a previous EvaluationService.ListEvaluationResults call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to EvaluationService.ListEvaluationResults must match the call that provided the page token. Otherwise, an `INVALID_ARGUMENT` error is returned. |

### `projects.locations.evaluations.operations`

#### `projects.locations.evaluations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.identityMappingStores`

#### `projects.locations.identityMappingStores.create()`

Creates a new Identity Mapping Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection resource name, such as `projects/{project}/locations/{location}`. |
| `params.cmekConfigName` | `string` | No | Resource name of the CmekConfig to use for protecting this Identity Mapping Store. |
| `params.disableCmek` | `boolean` | No | Identity Mapping Store without CMEK protections. If a default CmekConfig is set for the project, setting this field will override the default CmekConfig as well. |
| `params.identityMappingStoreId` | `string` | No | Required. The ID of the Identity Mapping Store to create. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 63 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.identityMappingStores.purgeIdentityMappings()`

Purges specified or all Identity Mapping Entries from an Identity Mapping Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.identityMappingStore` | `string` | Yes | Required. The name of the Identity Mapping Store to purge Identity Mapping Entries from. Format: `projects/{project}/locations/{location}/identityMappingStores/{identityMappingStore}` |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

#### `projects.locations.identityMappingStores.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.licenseConfigs`

#### `projects.locations.licenseConfigs.create()`

Creates a LicenseConfig

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name, such as `projects/{project}/locations/{location}`. |
| `params.licenseConfigId` | `string` | No | Optional. The ID to use for the LicenseConfig, which will become the final component of the LicenseConfig's resource name. We are using the tier (product edition) name as the license config id such as `search` or `search_and_assistant`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.licenseConfigs.patch()`

Updates the LicenseConfig

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. Identifier. The fully qualified resource name of the license config. Format: `projects/{project}/locations/{location}/licenseConfigs/{license_config}` |
| `params.updateMask` | `string` | No | Optional. Indicates which fields in the provided LicenseConfig to update. If an unsupported or unknown field is provided, an INVALID_ARGUMENT error is returned. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.licenseConfigs.get()`

Gets a LicenseConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of LicenseConfig, such as `projects/{project}/locations/{location}/licenseConfigs/*`. If the caller does not have permission to access the LicenseConfig, regardless of whether or not it exists, a PERMISSION_DENIED error is returned. If the requested LicenseConfig does not exist, a NOT_FOUND error is returned. |

### `projects.locations.rankingConfigs`

#### `projects.locations.rankingConfigs.rank()`

Ranks a list of text records based on the given input query.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.rankingConfig` | `string` | Yes | Required. The resource name of the rank service config, such as `projects/{project_num}/locations/{location}/rankingConfigs/default_ranking_config`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.requirements`

#### `projects.locations.requirements.checkRequirement()`

Check a particular requirement.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. Full resource name of the location. Format `projects/{project_number_or_id}/locations/{location}` |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.sampleQuerySets.patch()`

Updates a SampleQuerySet.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The full resource name of the SampleQuerySet, in the format of `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided imported 'sample query set' to update. If not set, will by default update all fields. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.sampleQuerySets.sampleQueries.patch()`

Updates a SampleQuery.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The full resource name of the sample query, in the format of `projects/{project}/locations/{location}/sampleQuerySets/{sample_query_set}/sampleQueries/{sample_query}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | Indicates which fields in the provided imported 'simple query' to update. If not set, will by default update all fields. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.userEvents`

#### `projects.locations.userEvents.write()`

Writes a single user event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource name. If the write user event action is applied in DataStore level, the format is: `projects/{project}/locations/{location}/collections/{collection}/dataStores/{data_store}`. If the write user event action is applied in Location level, for example, the event with Document across multiple DataStore, the format is: `projects/{project}/locations/{location}`. |
| `params.writeAsync` | `boolean` | No | If set to true, the user event is written asynchronously after validation, and the API responds without waiting for the write. |
| `params.requestBody` | `object` | Yes | The request body. |

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
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.userStores`

#### `projects.locations.userStores.batchUpdateUserLicenses()`

Updates the User License. This method is used for batch assign/unassign licenses to users.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent UserStore resource name, format: `projects/{project}/locations/{location}/userStores/{user_store_id}`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.userStores.create()`

Creates a new User Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent collection resource name, such as `projects/{project}/locations/{location}`. |
| `params.userStoreId` | `string` | No | Required. The ID of the User Store to create. The ID must contain only letters (a-z, A-Z), numbers (0-9), underscores (_), and hyphens (-). The maximum length is 63 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.userStores.get()`

Gets the User Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the User Store to get. Format: `projects/{project}/locations/{location}/userStores/{user_store_id}` |

#### `projects.locations.userStores.patch()`

Updates the User Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The full resource name of the User Store, in the format of `projects/{project}/locations/{location}/userStores/{user_store}`. This field must be a UTF-8 encoded string with a length limit of 1024 characters. |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.userStores.delete()`

Deletes the User Store.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the User Store to delete. Format: `projects/{project}/locations/{location}/userStores/{user_store_id}` |

### `projects.locations.userStores.operations`

#### `projects.locations.userStores.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

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
| `params.orderBy` | `string` | No | Optional. The order in which the UserLicenses are listed. The value must be a comma-separated list of fields. Default sorting order is ascending. To specify descending order for a field, append a " desc" suffix. Redundant space characters in the syntax are insignificant. Supported fields: * `license_assignment_state` * `user_principal` * `user_profile` * `last_login_date` * `update_time` If not set, the default ordering is by `user_principal`. Examples: * `user_principal desc` to order by `user_principal` in descending order. * `license_assignment_state` to order by `license_assignment_state` in ascending order. * `last_login_date desc` to order by `last_login_date` in descending order. * `update_time desc` to order by `update_time` in descending order. * `last_login_date desc, user_principal` to order by `last_login_date` in descending order and then by `user_principal` in ascending order. |

### `projects.locations.userStores.licenseConfigsUsageStats`

#### `projects.locations.userStores.licenseConfigsUsageStats.list()`

Lists all the LicenseConfigUsageStatss associated with the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent branch resource name, such as `projects/{project}/locations/{location}/userStores/{user_store_id}`. |

### `projects.operations`

#### `projects.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |

#### `projects.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |