# Recommendations AI (Beta) - Apps Script Client Library

Auto-generated client library for using the **Recommendations AI (Beta) (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 16:18:51 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:45:32 GMT
- **Created:** Sun, 20 Jul 2025 16:52:17 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.catalogs`

#### `projects.locations.catalogs.list()`

Lists all the catalog configurations associated with the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The account resource name with an associated location. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return. If unspecified, defaults to 50. Max allowed value is 1000. |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListCatalogs` call. Provide this to retrieve the subsequent page. |

#### `projects.locations.catalogs.patch()`

Updates the catalog configuration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The fully qualified resource name of the catalog. |
| `params.updateMask` | `string` | No | Optional. Indicates which fields in the provided 'catalog' to update. If not set, will only update the catalog_item_level_config field. Currently only fields that can be updated are catalog_item_level_config. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.catalogs.operations`

#### `projects.locations.catalogs.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.catalogs.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.catalogs.eventStores`

### `projects.locations.catalogs.eventStores.operations`

#### `projects.locations.catalogs.eventStores.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.filter` | `string` | No | The standard list filter. |
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |

#### `projects.locations.catalogs.eventStores.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

### `projects.locations.catalogs.eventStores.predictionApiKeyRegistrations`

#### `projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.create()`

Register an API key for use with predict method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource path. `projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.list()`

List the registered apiKeys for use with predict method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent placement resource name such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return per page. If unset, the service will choose a reasonable default. |
| `params.pageToken` | `string` | No | Optional. The previous `ListPredictionApiKeyRegistration.nextPageToken`. |

#### `projects.locations.catalogs.eventStores.predictionApiKeyRegistrations.delete()`

Unregister an apiKey from using for predict method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The API key to unregister including full resource path. `projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/predictionApiKeyRegistrations/` |

### `projects.locations.catalogs.eventStores.placements`

#### `projects.locations.catalogs.eventStores.placements.predict()`

Makes a recommendation prediction. If using API Key based authentication, the API Key must be registered using the PredictionApiKeyRegistry service. [Learn more](https://cloud.google.com/recommendations-ai/docs/setting-up#register-key).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.catalogs.eventStores.userEvents`

#### `projects.locations.catalogs.eventStores.userEvents.write()`

Writes a single user event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent eventStore resource name, such as "projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store". |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.catalogs.eventStores.userEvents.collect()`

Writes a single user event from the browser. This uses a GET request to due to browser restriction of POST-ing to a 3rd party domain. This method is used only by the Recommendations AI JavaScript pixel. Users should not call this method directly.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent eventStore name, such as `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store`. |
| `params.userEvent` | `string` | No | Required. URL encoded UserEvent proto. |
| `params.uri` | `string` | No | Optional. The url including cgi-parameters but excluding the hash fragment. The URL must be truncated to 1.5K bytes to conservatively be under the 2K bytes. This is often more useful than the referer url, because many browsers only send the domain for 3rd party requests. |
| `params.ets` | `string` | No | Optional. The event timestamp in milliseconds. This prevents browser caching of otherwise identical get requests. The name is abbreviated to reduce the payload bytes. |

#### `projects.locations.catalogs.eventStores.userEvents.list()`

Gets a list of user events within a time range, with potential filtering. The method does not list unjoined user events. Unjoined user event definition: when a user event is ingested from Recommendations AI User Event APIs, the catalog item included in the user event is connected with the current catalog. If a catalog item of the ingested event is not in the current catalog, it could lead to degraded model quality. This is called an unjoined event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent eventStore resource name, such as `projects/*/locations/*/catalogs/default_catalog/eventStores/default_event_store`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default. |
| `params.pageToken` | `string` | No | Optional. The previous ListUserEventsResponse.next_page_token. |
| `params.filter` | `string` | No | Optional. Filtering expression to specify restrictions over returned events. This is a sequence of terms, where each term applies some kind of a restriction to the returned user events. Use this expression to restrict results to a specific time range, or filter events by eventType. eg: eventTime > "2012-04-23T18:25:43.511Z" eventsMissingCatalogItems eventTime<"2012-04-23T18:25:43.511Z" eventType=search We expect only 3 types of fields: * eventTime: this can be specified a maximum of 2 times, once with a less than operator and once with a greater than operator. The eventTime restrict should result in one contiguous valid eventTime range. * eventType: only 1 eventType restriction can be specified. * eventsMissingCatalogItems: specififying this will restrict results to events for which catalog items were not found in the catalog. The default behavior is to return only those events for which catalog items were found. Some examples of valid filters expressions: * Example 1: eventTime > "2012-04-23T18:25:43.511Z" eventTime < "2012-04-23T18:30:43.511Z" * Example 2: eventTime > "2012-04-23T18:25:43.511Z" eventType = detail-page-view * Example 3: eventsMissingCatalogItems eventType = search eventTime < "2018-04-23T18:30:43.511Z" * Example 4: eventTime > "2012-04-23T18:25:43.511Z" * Example 5: eventType = search * Example 6: eventsMissingCatalogItems |

#### `projects.locations.catalogs.eventStores.userEvents.purge()`

Deletes permanently all user events specified by the filter provided. Depending on the number of events specified by the filter, this operation could take hours or days to complete. To test a filter, use the list command first.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The resource name of the event_store under which the events are created. The format is `projects/${projectId}/locations/global/catalogs/${catalogId}/eventStores/${eventStoreId}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.catalogs.eventStores.userEvents.import()`

Bulk import of User events. Request processing might be synchronous. Events that already exist are skipped. Use this method for backfilling historical user events. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully inserted. Operation.metadata is of type ImportMetadata.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. `projects/1234/locations/global/catalogs/default_catalog/eventStores/default_event_store` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.catalogs.eventStores.userEvents.rejoin()`

Triggers a user event rejoin operation with latest catalog data. Events will not be annotated with detailed catalog information if catalog item is missing at the time the user event is ingested, and these events are stored as unjoined events with a limited usage on training and serving. This API can be used to trigger a 'join' operation on specified events with latest version of catalog items. It can also be used to correct events joined with wrong catalog items.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Full resource name of user event, such as `projects/*/locations/*/catalogs/default_catalog/eventStores/default_event_store`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.catalogs.catalogItems`

#### `projects.locations.catalogs.catalogItems.create()`

Creates a catalog item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.catalogs.catalogItems.get()`

Gets a specific catalog item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of catalog item, such as `projects/*/locations/global/catalogs/default_catalog/catalogitems/some_catalog_item_id`. |

#### `projects.locations.catalogs.catalogItems.list()`

Gets a list of catalog items.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent catalog resource name, such as `projects/*/locations/global/catalogs/default_catalog`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of results to return per page. If zero, the service will choose a reasonable default. |
| `params.pageToken` | `string` | No | Optional. The previous ListCatalogItemsResponse.next_page_token. |
| `params.filter` | `string` | No | Optional. Use of this field is not supported by version v1beta1. |

#### `projects.locations.catalogs.catalogItems.patch()`

Updates a catalog item. Partial updating is supported. Non-existing items will be created.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of catalog item, such as `projects/*/locations/global/catalogs/default_catalog/catalogItems/some_catalog_item_id`. |
| `params.updateMask` | `string` | No | Optional. Indicates which fields in the provided 'item' to update. If not set, will by default update all fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.catalogs.catalogItems.delete()`

Deletes a catalog item.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Full resource name of catalog item, such as `projects/*/locations/global/catalogs/default_catalog/catalogItems/some_catalog_item_id`. |

#### `projects.locations.catalogs.catalogItems.import()`

Bulk import of multiple catalog items. Request processing may be synchronous. No partial updating supported. Non-existing items will be created. Operation.response is of type ImportResponse. Note that it is possible for a subset of the items to be successfully updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. `projects/1234/locations/global/catalogs/default_catalog` If no updateMask is specified, requires catalogItems.create permission. If updateMask is specified, requires catalogItems.update permission. |
| `params.resource` | `object` | Yes | The request body. |