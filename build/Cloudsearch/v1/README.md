# Cloud Search API - Apps Script Client Library

Auto-generated client library for using the **Cloud Search API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:25:36 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:13:43 GMT
- **Created:** Sun, 20 Jul 2025 16:22:40 GMT



---

## API Reference

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `operations.lro`

#### `operations.lro.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

### `debug`

### `debug.datasources`

### `debug.datasources.items`

#### `debug.datasources.items.checkAccess()`

Checks whether an item is accessible by specified principal. Principal must be a user; groups and domain values aren't supported. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Item name, format: datasources/{source_id}/items/{item_id} |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `debug.datasources.items.searchByViewUrl()`

Fetches the item whose viewUrl exactly matches that of the URL provided in the request. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Source name, format: datasources/{source_id} |
| `params.requestBody` | `object` | Yes | The request body. |

### `debug.datasources.items.unmappedids`

#### `debug.datasources.items.unmappedids.list()`

List all unmapped identities for a specific item. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the item, in the following format: datasources/{source_id}/items/{ID} |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |
| `params.pageSize` | `integer` | No | Maximum number of items to fetch in a request. Defaults to 100. |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

### `debug.identitysources`

### `debug.identitysources.unmappedids`

#### `debug.identitysources.unmappedids.list()`

Lists unmapped user identities for an identity source. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the identity source, in the following format: identitysources/{source_id} |
| `params.resolutionStatusCode` | `string` | No | Limit users selection to this status. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |
| `params.pageSize` | `integer` | No | Maximum number of items to fetch in a request. Defaults to 100. |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

### `debug.identitysources.items`

#### `debug.identitysources.items.listForunmappedidentity()`

Lists names of items associated with an unmapped identity. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the identity source, in the following format: identitysources/{source_id}} |
| `params.userResourceName` | `string` | No |  |
| `params.groupResourceName` | `string` | No |  |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |
| `params.pageSize` | `integer` | No | Maximum number of items to fetch in a request. Defaults to 100. |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

### `settings`

#### `settings.getCustomer()`

Get customer settings. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|

#### `settings.updateCustomer()`

Update customer settings. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Update mask to control which fields get updated. If you specify a field in the update_mask but don't specify its value here, that field will be cleared. If the mask is not present or empty, all fields will be updated. Currently supported field paths: vpc_settings and audit_logging_settings |
| `params.requestBody` | `object` | Yes | The request body. |

### `settings.searchapplications`

#### `settings.searchapplications.list()`

Lists all search applications. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. The default value is 10 |
| `params.pageSize` | `integer` | No | The maximum number of items to return. |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

#### `settings.searchapplications.get()`

Gets the specified search application. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the search application. Format: searchapplications/{application_id}. |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

#### `settings.searchapplications.create()`

Creates a search application. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `settings.searchapplications.update()`

Updates a search application. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the Search Application. Format: searchapplications/{application_id}. |
| `params.updateMask` | `string` | No | Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `settings.searchapplications.patch()`

Updates a search application. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the Search Application. Format: searchapplications/{application_id}. |
| `params.updateMask` | `string` | No | Only applies to [`settings.searchapplications.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.searchapplications/patch). Update mask to control which fields to update. Example field paths: `search_application.name`, `search_application.displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the `search_application`, then that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `settings.searchapplications.delete()`

Deletes a search application. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the search application to be deleted. Format: applications/{application_id}. |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

#### `settings.searchapplications.reset()`

Resets a search application to default settings. This will return an empty response. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the search application to be reset. Format: applications/{application_id}. |
| `params.requestBody` | `object` | Yes | The request body. |

### `settings.datasources`

#### `settings.datasources.create()`

Creates a datasource. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `settings.datasources.delete()`

Deletes a datasource. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the datasource. Format: datasources/{source_id}. |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

#### `settings.datasources.get()`

Gets a datasource. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the datasource resource. Format: datasources/{source_id}. |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

#### `settings.datasources.update()`

Updates a datasource. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `settings.datasources.patch()`

Updates a datasource. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the datasource resource. Format: datasources/{source_id}. The name is ignored when creating a datasource. |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |
| `params.updateMask` | `string` | No | Only applies to [`settings.datasources.patch`](https://developers.google.com/cloud-search/docs/reference/rest/v1/settings.datasources/patch). Update mask to control which fields to update. Example field paths: `name`, `displayName`. * If `update_mask` is non-empty, then only the fields specified in the `update_mask` are updated. * If you specify a field in the `update_mask`, but don't specify its value in the source, that field is cleared. * If the `update_mask` is not present or empty or has the value `*`, then all fields are updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `settings.datasources.list()`

Lists datasources. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Starting index of the results. |
| `params.pageSize` | `integer` | No | Maximum number of datasources to fetch in a request. The max value is 1000. The default value is 1000. |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

### `v1`

#### `v1.initializeCustomer()`

Enables `third party` support in Google Cloud Search. **Note:** This API requires an admin account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `indexing`

### `indexing.datasources`

#### `indexing.datasources.updateSchema()`

Updates the schema of a data source. This method does not perform incremental updates to the schema. Instead, this method updates the schema by overwriting the entire schema. **Note:** This API requires an admin or service account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the data source to update Schema. Format: datasources/{source_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `indexing.datasources.getSchema()`

Gets the schema of a data source. **Note:** This API requires an admin or service account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the data source to get Schema. Format: datasources/{source_id} |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

#### `indexing.datasources.deleteSchema()`

Deletes the schema of a data source. **Note:** This API requires an admin or service account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the data source to delete Schema. Format: datasources/{source_id} |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

### `indexing.datasources.items`

#### `indexing.datasources.items.delete()`

Deletes Item resource for the specified resource name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the item to delete. Format: datasources/{source_id}/items/{item_id} |
| `params.version` | `string` | No | Required. The incremented version of the item to delete from the index. The indexing system stores the version from the datasource as a byte string and compares the Item version in the index to the version of the queued Item using lexical ordering. Cloud Search Indexing won't delete any queued item with a version value that is less than or equal to the version of the currently indexed item. The maximum length for this field is 1024 bytes. For information on how item version affects the deletion process, refer to [Handle revisions after manual deletes](https://developers.google.com/cloud-search/docs/guides/operations). |
| `params.connectorName` | `string` | No | The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} |
| `params.mode` | `string` | No | Required. The RequestMode for this request. |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

#### `indexing.datasources.items.get()`

Gets Item resource by item name. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the item to get info. Format: datasources/{source_id}/items/{item_id} |
| `params.connectorName` | `string` | No | The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

#### `indexing.datasources.items.list()`

Lists all or a subset of Item resources. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the Data Source to list Items. Format: datasources/{source_id} |
| `params.connectorName` | `string` | No | The name of connector making this call. Format: datasources/{source_id}/connectors/{ID} |
| `params.brief` | `boolean` | No | When set to true, the indexing system only populates the following fields: name, version, queue. metadata.hash, metadata.title, metadata.sourceRepositoryURL, metadata.objectType, metadata.createTime, metadata.updateTime, metadata.contentLanguage, metadata.mimeType, structured_data.hash, content.hash, itemType, itemStatus.code, itemStatus.processingError.code, itemStatus.repositoryError.type, If this value is false, then all the fields are populated in Item. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous List request, if any. |
| `params.pageSize` | `integer` | No | Maximum number of items to fetch in a request. The max value is 1000 when brief is true. The max value is 10 if brief is false. The default value is 10 |
| `params.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |

#### `indexing.datasources.items.index()`

Updates Item ACL, metadata, and content. It will insert the Item if it does not exist. This method does not support partial updates. Fields with no provided values are cleared out in the Cloud Search index. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the Item. Format: datasources/{source_id}/items/{item_id} This is a required field. The maximum length is 1536 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `indexing.datasources.items.upload()`

Creates an upload session for uploading item content. For items smaller than 100 KB, it's easier to embed the content inline within an index request. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the Item to start a resumable upload. Format: datasources/{source_id}/items/{item_id}. The maximum length is 1536 bytes. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `indexing.datasources.items.poll()`

Polls for unreserved items from the indexing queue and marks a set as reserved, starting with items that have the oldest timestamp from the highest priority ItemStatus. The priority order is as follows: ERROR MODIFIED NEW_ITEM ACCEPTED Reserving items ensures that polling from other threads cannot create overlapping sets. After handling the reserved items, the client should put items back into the unreserved state, either by calling index, or by calling push with the type REQUEUE. Items automatically become available (unreserved) after 4 hours even if no update or push method is called. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the Data Source to poll items. Format: datasources/{source_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `indexing.datasources.items.push()`

Pushes an item onto a queue for later polling and updating. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the item to push into the indexing queue. Format: datasources/{source_id}/items/{ID} This is a required field. The maximum length is 1536 characters. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `indexing.datasources.items.unreserve()`

Unreserves all items from a queue, making them all eligible to be polled. This method is useful for resetting the indexing queue after a connector has been restarted. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the Data Source to unreserve all items. Format: datasources/{source_id} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `indexing.datasources.items.deleteQueueItems()`

Deletes all items in a queue. This method is useful for deleting stale items. This API requires an admin or service account to execute. The service account used is the one whitelisted in the corresponding data source.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the Data Source to delete items in a queue. Format: datasources/{source_id} |
| `params.requestBody` | `object` | Yes | The request body. |

### `query`

#### `query.suggest()`

Provides suggestions for autocompleting the query. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `query.search()`

The Cloud Search Query API provides the search method, which returns the most relevant results from a user query. The results can come from Google Workspace apps, such as Gmail or Google Drive, or they can come from data that you have indexed from a third party. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `query.removeActivity()`

Provides functionality to remove logged activity for a user. Currently to be used only for Chat 1p clients **Note:** This API requires a standard end user account to execute. A service account can't perform Remove Activity requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

#### `query.debugSearch()`

Returns Debug information for Cloud Search Query API provides the search method. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestBody` | `object` | Yes | The request body. |

### `query.sources`

#### `query.sources.list()`

Returns list of sources that user can use for Search and Suggest APIs. **Note:** This API requires a standard end user account to execute. A service account can't perform Query API requests directly; to use a service account to perform queries, set up [Google Workspace domain-wide delegation of authority](https://developers.google.com/cloud-search/docs/guides/delegation/).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestOptions.languageCode` | `string` | No | The BCP-47 language code, such as "en-US" or "sr-Latn". For more information, see http://www.unicode.org/reports/tr35/#Unicode_locale_identifier. For translations. Set this field using the language set in browser or for the page. In the event that the user's language preference is known, set this field to the known user language. When specified, the documents in search results are biased towards the specified language. The Suggest API uses this field as a hint to make better third-party autocomplete predictions. |
| `params.requestOptions.debugOptions.enableDebugging` | `boolean` | No | If you are asked by Google to help with debugging, set this field. Otherwise, ignore this field. |
| `params.requestOptions.timeZone` | `string` | No | Current user's time zone id, such as "America/Los_Angeles" or "Australia/Sydney". These IDs are defined by [Unicode Common Locale Data Repository (CLDR)](http://cldr.unicode.org/) project, and currently available in the file [timezone.xml](http://unicode.org/repos/cldr/trunk/common/bcp47/timezone.xml). This field is used to correctly interpret date and time queries. If this field is not specified, the default time zone (UTC) is used. |
| `params.requestOptions.searchApplicationId` | `string` | No | The ID generated when you create a search application using the [admin console](https://support.google.com/a/answer/9043922). |
| `params.pageToken` | `string` | No | Number of sources to return in the response. |

### `stats`

#### `stats.getIndex()`

Gets indexed item statistics aggreggated across all data sources. This API only returns statistics for previous dates; it doesn't return statistics for the current day. **Note:** This API requires a standard end user account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fromDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.fromDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.fromDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |
| `params.toDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.toDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.toDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |

#### `stats.getQuery()`

Get the query statistics for customer. **Note:** This API requires a standard end user account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fromDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.fromDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.fromDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |
| `params.toDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.toDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.toDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |

#### `stats.getUser()`

Get the users statistics for customer. **Note:** This API requires a standard end user account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fromDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.fromDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.fromDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |
| `params.toDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.toDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.toDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |

#### `stats.getSession()`

Get the # of search sessions, % of successful sessions with a click query statistics for customer. **Note:** This API requires a standard end user account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.fromDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.fromDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.fromDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |
| `params.toDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.toDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.toDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |

#### `stats.getSearchapplication()`

Get search application stats for customer. **Note:** This API requires a standard end user account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.startDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.startDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.startDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |
| `params.endDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.endDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.endDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |

### `stats.index`

### `stats.index.datasources`

#### `stats.index.datasources.get()`

Gets indexed item statistics for a single data source. **Note:** This API requires a standard end user account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource id of the data source to retrieve statistics for, in the following format: "datasources/{source_id}" |
| `params.fromDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.fromDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.fromDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |
| `params.toDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.toDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.toDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |

### `stats.query`

### `stats.query.searchapplications`

#### `stats.query.searchapplications.get()`

Get the query statistics for search application. **Note:** This API requires a standard end user account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource id of the search application query stats, in the following format: searchapplications/{application_id} |
| `params.fromDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.fromDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.fromDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |
| `params.toDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.toDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.toDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |

### `stats.user`

### `stats.user.searchapplications`

#### `stats.user.searchapplications.get()`

Get the users statistics for search application. **Note:** This API requires a standard end user account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource id of the search application session stats, in the following format: searchapplications/{application_id} |
| `params.fromDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.fromDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.fromDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |
| `params.toDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.toDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.toDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |

### `stats.session`

### `stats.session.searchapplications`

#### `stats.session.searchapplications.get()`

Get the # of search sessions, % of successful sessions with a click query statistics for search application. **Note:** This API requires a standard end user account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource id of the search application session stats, in the following format: searchapplications/{application_id} |
| `params.fromDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.fromDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.fromDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |
| `params.toDate.year` | `integer` | No | Year of date. Must be from 1 to 9999. |
| `params.toDate.month` | `integer` | No | Month of date. Must be from 1 to 12. |
| `params.toDate.day` | `integer` | No | Day of month. Must be from 1 to 31 and valid for the year and month. |

### `media`

#### `media.upload()`

Uploads media for indexing. The upload endpoint supports direct and resumable upload protocols and is intended for large items that can not be [inlined during index requests](https://developers.google.com/cloud-search/docs/reference/rest/v1/indexing.datasources.items#itemcontent). To index large content: 1. Call indexing.datasources.items.upload with the item name to begin an upload session and retrieve the UploadItemRef. 1. Call media.upload to upload the content, as a streaming request, using the same resource name from the UploadItemRef from step 1. 1. Call indexing.datasources.items.index to index the item. Populate the [ItemContent](/cloud-search/docs/reference/rest/v1/indexing.datasources.items#ItemContent) with the UploadItemRef from step 1. For additional information, see [Create a content connector using the REST API](https://developers.google.com/cloud-search/docs/guides/content-connector#rest). **Note:** This API requires a service account to execute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | Name of the media that is being downloaded. See ReadRequest.resource_name. |
| `params.requestBody` | `object` | Yes | The request body. |