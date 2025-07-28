# Connectors API - Apps Script Client Library

Auto-generated client library for using the **Connectors API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 27 Jul 2025 15:56:58 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:24:41 GMT
- **Created:** Sun, 20 Jul 2025 16:23:50 GMT



---

## API Reference

### `projects`

### `projects.locations`

### `projects.locations.connections`

#### `projects.locations.connections.checkStatus()`

Reports the status of the connection. Note that when the connection is in a state that is not ACTIVE, the implementation of this RPC method must return a Status with the corresponding State instead of returning a gRPC status code that is not "OK", which indicates that ConnectionStatus itself, not the connection, failed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.connections.checkReadiness()`

Reports readiness status of the connector. Similar logic to GetStatus but modified for kubernetes health check to understand.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |

#### `projects.locations.connections.exchangeAuthCode()`

ExchangeAuthCode exchanges the OAuth authorization code (and other necessary data) for an access token (and associated credentials).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.refreshAccessToken()`

RefreshAccessToken exchanges the OAuth refresh token (and other necessary data) for a new access token (and new associated credentials).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.executeSqlQuery()`

Executes a SQL statement specified in the body of the request. An example of this SQL statement in the case of Salesforce connector would be 'select

* from Account a, Order o where a.Id = o.AccountId'.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.connection` | `string` | Yes | Required. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection} |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.connections.actions`

#### `projects.locations.connections.actions.execute()`

Executes an action with the name specified in the request. The input parameters for executing the action are passed through the body of the ExecuteAction request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}/actions/{action} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.actions.list()`

Gets the schema of all the actions supported by the connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection} |
| `params.pageSize` | `integer` | No | Number of Actions to return. Defaults to 25. |
| `params.pageToken` | `string` | No | Page token, return from a previous ListActions call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of actions. |
| `params.view` | `string` | No | Specifies which fields of the Action are returned in the response. |

#### `projects.locations.connections.actions.get()`

Gets the schema of the given action.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the Action. Format: projects/{project}/locations/{location}/connections/{connection}/actions/{action} |
| `params.view` | `string` | No | Specified view of the action schema. |

### `projects.locations.connections.entityTypes`

#### `projects.locations.connections.entityTypes.get()`

Gets metadata of given entity type

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{entityType} |
| `params.view` | `string` | No | Specifies view for entity type schema. |

#### `projects.locations.connections.entityTypes.list()`

Lists metadata related to all entity types present in the external system.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection} |
| `params.pageSize` | `integer` | No | Number of entity types to return. Defaults to 25. |
| `params.pageToken` | `string` | No | Page token, return from a previous ListEntityTypes call, that can be used retrieve the next page of content. If unspecified, the request returns the first page of entity types. |
| `params.view` | `string` | No | Specifies which fields of the Entity Type are returned in the response. |

### `projects.locations.connections.entityTypes.entities`

#### `projects.locations.connections.entityTypes.entities.list()`

Lists entity rows of a particular entity type contained in the request. Note: 1. Currently, only max of one 'sort_by' column is supported. 2. If no 'sort_by' column is provided, the primary key of the table is used. If zero or more than one primary key is available, we default to the unpaginated list entities logic which only returns the first page. 3. The values of the 'sort_by' columns must uniquely identify an entity row, otherwise undefined behaviors may be observed during pagination. 4. Since transactions are not supported, any updates, inserts or deletes during pagination can lead to stale data being returned or other unexpected behaviors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type} |
| `params.pageSize` | `integer` | No | Number of entity rows to return. Defaults page size = 25. Max page size = 200. |
| `params.pageToken` | `string` | No | Page token value if available from a previous request. |
| `params.sortBy` | `string` | No | List of 'sort_by' columns to use when returning the results. |
| `params.sortOrder` | `string` | No | List of 'sort_order' columns to use when returning the results. |
| `params.conditions` | `string` | No | Conditions to be used when listing entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. |

#### `projects.locations.connections.entityTypes.entities.get()`

Gets a single entity row matching the entity type and entity id specified in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id} |

#### `projects.locations.connections.entityTypes.entities.create()`

Creates a new entity row of the specified entity type in the external system. The field values for creating the row are contained in the body of the request. The response message contains a `Entity` message object returned as a response by the external system.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.entityTypes.entities.patch()`

Updates an existing entity row matching the entity type and entity id specified in the request. The fields in the entity row that need to be modified are contained in the body of the request. All unspecified fields are left unchanged. The response message contains a `Entity` message object returned as a response by the external system.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Resource name of the Entity. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id} |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.entityTypes.entities.updateEntitiesWithConditions()`

Updates entities based on conditions specified in the request and not on entity id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.entityType` | `string` | Yes | Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type} |
| `params.conditions` | `string` | No | Required. Conditions to be used when updating entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.connections.entityTypes.entities.delete()`

Deletes an existing entity row matching the entity type and entity id specified in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type}/entities/{id} |

#### `projects.locations.connections.entityTypes.entities.deleteEntitiesWithConditions()`

Deletes entities based on conditions specified in the request and not on entity id.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.entityType` | `string` | Yes | Required. Resource name of the Entity Type. Format: projects/{project}/locations/{location}/connections/{connection}/entityTypes/{type} |
| `params.conditions` | `string` | No | Required. Conditions to be used when deleting entities. From a proto standpoint, There are no restrictions on what can be passed using this field. The connector documentation should have information about what format of filters/conditions are supported. Note: If this conditions field is left empty, an exception is thrown. We don't want to consider 'empty conditions' to be a match-all case. Connector developers can determine and document what a match-all case constraint would be. |