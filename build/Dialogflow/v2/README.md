# Dialogflow API - Apps Script Client Library

Auto-generated client library for using the **Dialogflow API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:12:59 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:12:59 GMT
- **Created:** Sun, 20 Jul 2025 16:31:31 GMT



---

## API Reference

### `projects`

#### `projects.getAgent()`

Retrieves the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent to fetch is associated with. Format: `projects/`. |

#### `projects.setAgent()`

Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project of this agent. Format: `projects/`. |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.deleteAgent()`

Deletes the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent to delete is associated with. Format: `projects/`. |

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

#### `projects.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.locations`

#### `projects.locations.getAgent()`

Retrieves the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent to fetch is associated with. Format: `projects/`. |

#### `projects.locations.setAgent()`

Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project of this agent. Format: `projects/`. |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.deleteAgent()`

Deletes the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent to delete is associated with. Format: `projects/`. |

#### `projects.locations.getEncryptionSpec()`

Gets location-level encryption key specification.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the encryption spec resource to get. |

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

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

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |

### `projects.locations.agent`

#### `projects.locations.agent.search()`

Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to list agents from. Format: `projects/`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agent.train()`

Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent to train is associated with. Format: `projects/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.export()`

Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent to export is associated with. Format: `projects/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.import()`

Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent to import is associated with. Format: `projects/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.restore()`

Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent to restore is associated with. Format: `projects/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.getValidationResult()`

Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent is associated with. Format: `projects/`. |
| `params.languageCode` | `string` | No | Optional. The language for which you want a validation result. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |

#### `projects.locations.agent.getFulfillment()`

Retrieves the fulfillment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the fulfillment. Format: `projects//agent/fulfillment`. |

#### `projects.locations.agent.updateFulfillment()`

Updates the fulfillment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique identifier of the fulfillment. Supported formats: - `projects//agent/fulfillment` - `projects//locations//agent/fulfillment` This field is not used for Fulfillment in an Environment. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.agent.sessions`

#### `projects.locations.agent.sessions.deleteContexts()`

Deletes all active contexts in the specified session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the session to delete all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

#### `projects.locations.agent.sessions.detectIntent()`

Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session this query is sent to. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment (`Environment ID` might be referred to as environment name at some places). If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions). |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.agent.sessions.contexts`

#### `projects.locations.agent.sessions.contexts.list()`

Returns the list of all contexts in the specified session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to list all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.agent.sessions.contexts.get()`

Retrieves the specified context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the context. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

#### `projects.locations.agent.sessions.contexts.create()`

Creates a context. If the specified context already exists, overrides the context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to create a context for. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.sessions.contexts.patch()`

Updates the specified context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size` |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.sessions.contexts.delete()`

Deletes the specified context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the context to delete. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

### `projects.locations.agent.sessions.entityTypes`

#### `projects.locations.agent.sessions.entityTypes.list()`

Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to list all session entity types from. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.agent.sessions.entityTypes.get()`

Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session entity type. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

#### `projects.locations.agent.sessions.entityTypes.create()`

Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to create a session entity type for. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.sessions.entityTypes.patch()`

Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented. |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.sessions.entityTypes.delete()`

Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entity type to delete. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

### `projects.locations.agent.intents`

#### `projects.locations.agent.intents.list()`

Returns the list of all intents in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all intents from. Format: `projects//agent` or `projects//locations//agent`. Alternatively, you can specify the environment to list intents for. Format: `projects//agent/environments/` or `projects//locations//agent/environments/`. Note: training phrases of the intents will not be returned for non-draft environment. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.intentView` | `string` | No | Optional. The resource view to apply to the returned intent. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.agent.intents.get()`

Retrieves the specified intent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the intent. Format: `projects//agent/intents/`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.intentView` | `string` | No | Optional. The resource view to apply to the returned intent. |

#### `projects.locations.agent.intents.create()`

Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create a intent for. Format: `projects//agent`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.intentView` | `string` | No | Optional. The resource view to apply to the returned intent. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.intents.patch()`

Updates the specified intent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects//agent/intents/`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.intentView` | `string` | No | Optional. The resource view to apply to the returned intent. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.intents.delete()`

Deletes the specified intent and its direct or indirect followup intents. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the intent to delete. If this intent has direct or indirect followup intents, we also delete them. Format: `projects//agent/intents/`. |

#### `projects.locations.agent.intents.batchUpdate()`

Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the agent to update or create intents in. Format: `projects//agent`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.intents.batchDelete()`

Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the agent to delete all entities types for. Format: `projects//agent`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.agent.entityTypes`

#### `projects.locations.agent.entityTypes.list()`

Returns the list of all entity types in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all entity types from. Format: `projects//agent`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.agent.entityTypes.get()`

Retrieves the specified entity type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entity type. Format: `projects//agent/entityTypes/`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |

#### `projects.locations.agent.entityTypes.create()`

Creates an entity type in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create a entity type for. Format: `projects//agent`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.entityTypes.patch()`

Updates the specified entity type. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects//agent/entityTypes/`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.entityTypes.delete()`

Deletes the specified entity type. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entity type to delete. Format: `projects//agent/entityTypes/`. |

#### `projects.locations.agent.entityTypes.batchUpdate()`

Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the agent to update or create entity types in. Format: `projects//agent`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.entityTypes.batchDelete()`

Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the agent to delete all entities types for. Format: `projects//agent`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.agent.entityTypes.entities`

#### `projects.locations.agent.entityTypes.entities.batchCreate()`

Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the entity type to create entities in. Format: `projects//agent/entityTypes/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.entityTypes.entities.batchUpdate()`

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). 

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the entity type to update or create entities in. Format: `projects//agent/entityTypes/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.entityTypes.entities.batchDelete()`

Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the entity type to delete entries for. Format: `projects//agent/entityTypes/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.agent.environments`

#### `projects.locations.agent.environments.list()`

Returns the list of all non-default environments of the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all environments from. Format: - `projects//agent` - `projects//locations//agent` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.agent.environments.get()`

Retrieves the specified agent environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the environment. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`. |

#### `projects.locations.agent.environments.create()`

Creates an agent environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create an environment for. Supported formats: - `projects//agent` - `projects//locations//agent` |
| `params.environmentId` | `string` | No | Required. The unique id of the new environment. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.environments.patch()`

Updates the specified agent environment. This method allows you to deploy new agent versions into the environment. When an environment is pointed to a new agent version by setting `environment.agent_version`, the environment is temporarily set to the `LOADING` state. During that time, the environment continues serving the previous version of the agent. After the new agent version is done loading, the environment is set back to the `RUNNING` state. You can use "-" as Environment ID in environment name to update an agent version in the default environment. WARNING: this will negate all recent changes to the draft agent and can't be undone. You may want to save the draft agent to a version before calling this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The unique identifier of this agent environment. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields get updated. |
| `params.allowLoadToDraftAndDiscardChanges` | `boolean` | No | Optional. This field is used to prevent accidental overwrite of the default environment, which is an operation that cannot be undone. To confirm that the caller desires this overwrite, this field must be explicitly set to true when updating the default environment (environment ID = `-`). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.environments.delete()`

Deletes the specified agent environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the environment to delete. / Format: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`. |

#### `projects.locations.agent.environments.getHistory()`

Gets the history of the specified environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the environment to retrieve history for. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

### `projects.locations.agent.environments.users`

### `projects.locations.agent.environments.users.sessions`

#### `projects.locations.agent.environments.users.sessions.deleteContexts()`

Deletes all active contexts in the specified session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the session to delete all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

#### `projects.locations.agent.environments.users.sessions.detectIntent()`

Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session this query is sent to. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment (`Environment ID` might be referred to as environment name at some places). If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions). |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.agent.environments.users.sessions.contexts`

#### `projects.locations.agent.environments.users.sessions.contexts.list()`

Returns the list of all contexts in the specified session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to list all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.agent.environments.users.sessions.contexts.get()`

Retrieves the specified context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the context. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

#### `projects.locations.agent.environments.users.sessions.contexts.create()`

Creates a context. If the specified context already exists, overrides the context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to create a context for. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.environments.users.sessions.contexts.patch()`

Updates the specified context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size` |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.environments.users.sessions.contexts.delete()`

Deletes the specified context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the context to delete. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

### `projects.locations.agent.environments.users.sessions.entityTypes`

#### `projects.locations.agent.environments.users.sessions.entityTypes.list()`

Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to list all session entity types from. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.agent.environments.users.sessions.entityTypes.get()`

Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session entity type. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

#### `projects.locations.agent.environments.users.sessions.entityTypes.create()`

Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to create a session entity type for. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.environments.users.sessions.entityTypes.patch()`

Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented. |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.environments.users.sessions.entityTypes.delete()`

Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entity type to delete. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

### `projects.locations.agent.environments.intents`

#### `projects.locations.agent.environments.intents.list()`

Returns the list of all intents in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all intents from. Format: `projects//agent` or `projects//locations//agent`. Alternatively, you can specify the environment to list intents for. Format: `projects//agent/environments/` or `projects//locations//agent/environments/`. Note: training phrases of the intents will not be returned for non-draft environment. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.intentView` | `string` | No | Optional. The resource view to apply to the returned intent. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

### `projects.locations.agent.versions`

#### `projects.locations.agent.versions.list()`

Returns the list of all versions of the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all versions from. Supported formats: - `projects//agent` - `projects//locations//agent` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.agent.versions.get()`

Retrieves the specified agent version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/` |

#### `projects.locations.agent.versions.create()`

Creates an agent version. The new version points to the agent instance in the "default" environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create a version for. Supported formats: - `projects//agent` - `projects//locations//agent` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.versions.patch()`

Updates the specified agent version. Note that this method does not allow you to update the state of the agent the given version points to. It allows you to update only mutable properties of the version resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The unique identifier of this agent version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/` |
| `params.updateMask` | `string` | No | Required. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.agent.versions.delete()`

Delete the specified agent version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the version to delete. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/` |

### `projects.locations.generators`

#### `projects.locations.generators.create()`

Creates a generator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project/location to create generator for. Format: `projects//locations/` |
| `params.generatorId` | `string` | No | Optional. The ID to use for the generator, which will become the final component of the generator's resource name. The generator ID must be compliant with the regression formula `a-zA-Z*` with the characters length in range of [3,64]. If the field is not provided, an Id will be auto-generated. If the field is provided, the caller is responsible for 1. the uniqueness of the ID, otherwise the request will be rejected. 2. the consistency for whether to use custom ID or not under a project to better ensure uniqueness. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.generators.get()`

Retrieves a generator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The generator resource name to retrieve. Format: `projects//locations//generators/` |

#### `projects.locations.generators.list()`

Lists generators.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project/location to list generators for. Format: `projects//locations/` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of conversation models to return in a single page. Default to 10. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.generators.delete()`

Deletes a generator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The generator resource name to delete. Format: `projects//locations//generators/` |

#### `projects.locations.generators.patch()`

Updates a generator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. Identifier. The resource name of the generator. Format: `projects//locations//generators/` |
| `params.updateMask` | `string` | No | Optional. The list of fields to update. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.answerRecords`

#### `projects.locations.answerRecords.list()`

Returns the list of all answer records in the specified project in reverse chronological order.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to list all answer records for in reverse chronological order. Format: `projects//locations/`. |
| `params.filter` | `string` | No | Optional. Filters to restrict results to specific answer records. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * conversation_id with equals(=) operator Examples: * `conversation_id=bar` matches answer records in the `projects/foo/locations/global/conversations/bar` conversation (assuming the parent is `projects/foo/locations/global`). For more information about filtering, see [API Filtering](https://aip.dev/160). |
| `params.pageSize` | `integer` | No | Optional. The maximum number of records to return in a single page. The server may return fewer records than this. If unspecified, we use 10. The maximum is 100. |
| `params.pageToken` | `string` | No | Optional. The ListAnswerRecordsResponse.next_page_token value returned from a previous list request used to continue listing on the next page. |

#### `projects.locations.answerRecords.patch()`

Updates the specified answer record.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of this answer record. Format: `projects//locations//answerRecords/`. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.conversationDatasets`

#### `projects.locations.conversationDatasets.create()`

Creates a new conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationDatasetOperationMetadata - `response`: ConversationDataset

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to create conversation dataset for. Format: `projects//locations/` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversationDatasets.get()`

Retrieves the specified conversation dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation dataset to retrieve. Format: `projects//locations//conversationDatasets/` |

#### `projects.locations.conversationDatasets.list()`

Returns the list of all conversation datasets in the specified project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location name to list all conversation datasets for. Format: `projects//locations/` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of conversation datasets to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.conversationDatasets.delete()`

Deletes the specified conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeleteConversationDatasetOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation dataset to delete. Format: `projects//locations//conversationDatasets/` |

#### `projects.locations.conversationDatasets.importConversationData()`

Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Dataset resource name. Format: `projects//locations//conversationDatasets/` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.conversationProfiles`

#### `projects.locations.conversationProfiles.list()`

Returns the list of all conversation profiles in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to list all conversation profiles from. Format: `projects//locations/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.conversationProfiles.get()`

Retrieves the specified conversation profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/`. |

#### `projects.locations.conversationProfiles.create()`

Creates a conversation profile in the specified project. ConversationProfile.create_time and ConversationProfile.update_time aren't populated in the response. You can retrieve them via GetConversationProfile API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to create a conversation profile for. Format: `projects//locations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversationProfiles.patch()`

Updates the specified conversation profile. ConversationProfile.create_time and ConversationProfile.update_time aren't populated in the response. You can retrieve them via GetConversationProfile API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of this conversation profile. Format: `projects//locations//conversationProfiles/`. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversationProfiles.delete()`

Deletes the specified conversation profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the conversation profile to delete. Format: `projects//locations//conversationProfiles/`. |

#### `projects.locations.conversationProfiles.setSuggestionFeatureConfig()`

Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversationProfile` | `string` | Yes | Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects//locations//conversationProfiles/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversationProfiles.clearSuggestionFeatureConfig()`

Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversationProfile` | `string` | Yes | Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects//locations//conversationProfiles/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.conversations`

#### `projects.locations.conversations.create()`

Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource identifier of the project creating the conversation. Format: `projects//locations/`. |
| `params.conversationId` | `string` | No | Optional. Identifier of the conversation. Generally it's auto generated by Google. Only set it if you cannot wait for the response to return a auto-generated one to you. The conversation ID must be compliant with the regression formula `a-zA-Z*` with the characters length in range of [3,64]. If the field is provided, the caller is responsible for 1. the uniqueness of the ID, otherwise the request will be rejected. 2. the consistency for whether to use custom ID or not under a project to better ensure uniqueness. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.list()`

Returns the list of all conversations in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project from which to list all conversation. Format: `projects//locations/`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |
| `params.filter` | `string` | No | Optional. A filter expression that filters conversations listed in the response. Only `lifecycle_state` can be filtered on in this way. For example, the following expression only returns `COMPLETED` conversations: `lifecycle_state = "COMPLETED"` For more information about filtering, see [API Filtering](https://aip.dev/160). |

#### `projects.locations.conversations.get()`

Retrieves the specific conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the conversation. Format: `projects//locations//conversations/`. |

#### `projects.locations.conversations.complete()`

Completes the specified conversation. Finished conversations are purged from the database after 30 days.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource identifier of the conversation to close. Format: `projects//locations//conversations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.ingestContextReferences()`

Data ingestion API. Ingests context references for an existing conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes | Required. Resource identifier of the conversation to ingest context information for. Format: `projects//locations//conversations/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.conversations.participants`

#### `projects.locations.conversations.participants.create()`

Creates a new participant in a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource identifier of the conversation adding the participant. Format: `projects//locations//conversations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.participants.get()`

Retrieves a conversation participant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the participant. Format: `projects//locations//conversations//participants/`. |

#### `projects.locations.conversations.participants.list()`

Returns the list of all participants in the specified conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The conversation to list all participants from. Format: `projects//locations//conversations/`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.conversations.participants.patch()`

Updates the specified participant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. The unique identifier of this participant. Format: `projects//locations//conversations//participants/`. |
| `params.updateMask` | `string` | No | Required. The mask to specify which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.participants.analyzeContent()`

Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.participant` | `string` | Yes | Required. The name of the participant this text comes from. Format: `projects//locations//conversations//participants/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.conversations.participants.suggestions`

#### `projects.locations.conversations.participants.suggestions.suggestArticles()`

Gets suggested articles for a participant based on specific historical messages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.participants.suggestions.suggestFaqAnswers()`

Gets suggested faq answers for a participant based on specific historical messages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.participants.suggestions.suggestSmartReplies()`

Gets smart replies for a participant based on specific historical messages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.participants.suggestions.suggestKnowledgeAssist()`

Gets knowledge assist suggestions based on historical messages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the participant to fetch suggestions for. Format: `projects//locations//conversations//participants/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.conversations.messages`

#### `projects.locations.conversations.messages.list()`

Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the conversation to list messages for. Format: `projects//locations//conversations/` |
| `params.filter` | `string` | No | Optional. Filter on message fields. Currently predicates on `create_time` and `create_time_epoch_microseconds` are supported. `create_time` only support milliseconds accuracy. E.g., `create_time_epoch_microseconds > 1551790877964485` or `create_time > 2017-01-15T01:30:15.01Z`. For more information about filtering, see [API Filtering](https://aip.dev/160). |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

### `projects.locations.conversations.suggestions`

#### `projects.locations.conversations.suggestions.suggestConversationSummary()`

Suggests summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes | Required. The conversation to fetch suggestion for. Format: `projects//locations//conversations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.suggestions.searchKnowledge()`

Get answers for the given query based on knowledge documents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes | Optional. The conversation (between human agent and end user) where the search request is triggered. Format: `projects//locations//conversations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversations.suggestions.generate()`

Generates all the suggestions using generators configured in the conversation profile. A generator is used only if its trigger event is matched.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes | Required. The conversation for which the suggestions are generated. Format: `projects//locations//conversations/`. The conversation must be created with a conversation profile which has generators configured in it to be able to get suggestions. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.suggestions`

#### `projects.locations.suggestions.generateStatelessSummary()`

Generates and returns a summary for a conversation that does not have a resource created for it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to charge for the Summary's generation. Format: `projects//locations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.suggestions.searchKnowledge()`

Get answers for the given query based on knowledge documents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource contains the conversation profile Format: 'projects/' or `projects//locations/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.statelessSuggestion`

#### `projects.locations.statelessSuggestion.generate()`

Generates and returns a suggestion for a conversation that does not have a resource created for it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to charge for the Suggestion's generation. Format: `projects//locations/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.conversationModels`

#### `projects.locations.conversationModels.create()`

Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The project to create conversation model for. Format: `projects/` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversationModels.get()`

Gets conversation model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation model to retrieve. Format: `projects//conversationModels/` |

#### `projects.locations.conversationModels.list()`

Lists conversation models.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to list all conversation models for. Format: `projects/` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of conversation models to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.conversationModels.delete()`

Deletes a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeleteConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation model to delete. Format: `projects//conversationModels/` |

#### `projects.locations.conversationModels.deploy()`

Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation model to deploy. Format: `projects//conversationModels/` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.conversationModels.undeploy()`

Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation model to undeploy. Format: `projects//conversationModels/` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.conversationModels.evaluations`

#### `projects.locations.conversationModels.evaluations.get()`

Gets an evaluation of conversation model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation model evaluation resource name. Format: `projects//conversationModels//evaluations/` |

#### `projects.locations.conversationModels.evaluations.list()`

Lists evaluations of a conversation model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The conversation model resource name. Format: `projects//conversationModels/` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of evaluations to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.conversationModels.evaluations.create()`

Creates evaluation of a conversation model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The conversation model resource name. Format: `projects//locations//conversationModels/` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.encryptionSpec`

#### `projects.locations.encryptionSpec.initialize()`

Initializes a location-level encryption key specification. An error will be thrown if the location has resources already created before the initialization. Once the encryption specification is initialized at a location, it is immutable and all newly created resources under the location will be encrypted with the existing specification.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the encryption key specification resource. Format: projects/{project}/locations/{location}/encryptionSpec |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.knowledgeBases`

#### `projects.locations.knowledgeBases.list()`

Returns the list of all knowledge bases of the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to list of knowledge bases for. Format: `projects//locations/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 10 and at most 100. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |
| `params.filter` | `string` | No | The filter expression used to filter knowledge bases returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * display_name with has(:) operator * language_code with equals(=) operator Examples: * 'language_code=en-us' matches knowledge bases with en-us language code. * 'display_name:articles' matches knowledge bases whose display name contains "articles". * 'display_name:"Best Articles"' matches knowledge bases whose display name contains "Best Articles". * 'language_code=en-gb AND display_name=articles' matches all knowledge bases whose display name contains "articles" and whose language code is "en-gb". Note: An empty filter string (i.e. "") is a no-op and will result in no filtering. For more information about filtering, see [API Filtering](https://aip.dev/160). |

#### `projects.locations.knowledgeBases.get()`

Retrieves the specified knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the knowledge base to retrieve. Format `projects//locations//knowledgeBases/`. |

#### `projects.locations.knowledgeBases.create()`

Creates a knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to create a knowledge base for. Format: `projects//locations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.knowledgeBases.delete()`

Deletes the specified knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the knowledge base to delete. Format: `projects//locations//knowledgeBases/`. |
| `params.force` | `boolean` | No | Optional. Force deletes the knowledge base. When set to true, any documents in the knowledge base are also deleted. |

#### `projects.locations.knowledgeBases.patch()`

Updates the specified knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The knowledge base resource name. The name must be empty when creating a knowledge base. Format: `projects//locations//knowledgeBases/`. |
| `params.updateMask` | `string` | No | Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.knowledgeBases.documents`

#### `projects.locations.knowledgeBases.documents.list()`

Returns the list of all documents of the knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The knowledge base to list all documents for. Format: `projects//locations//knowledgeBases/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 10 and at most 100. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |
| `params.filter` | `string` | No | The filter expression used to filter documents returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * knowledge_types with has(:) operator * display_name with has(:) operator * state with equals(=) operator Examples: * "knowledge_types:FAQ" matches documents with FAQ knowledge type. * "display_name:customer" matches documents whose display name contains "customer". * "state=ACTIVE" matches documents with ACTIVE state. * "knowledge_types:FAQ AND state=ACTIVE" matches all active FAQ documents. For more information about filtering, see [API Filtering](https://aip.dev/160). |

#### `projects.locations.knowledgeBases.documents.get()`

Retrieves the specified document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to retrieve. Format `projects//locations//knowledgeBases//documents/`. |

#### `projects.locations.knowledgeBases.documents.create()`

Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The knowledge base to create a document for. Format: `projects//locations//knowledgeBases/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.knowledgeBases.documents.import()`

Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The knowledge base to import documents into. Format: `projects//locations//knowledgeBases/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.knowledgeBases.documents.delete()`

Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to delete. Format: `projects//locations//knowledgeBases//documents/`. |

#### `projects.locations.knowledgeBases.documents.patch()`

Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. The document resource name. The name must be empty when creating a document. Format: `projects//locations//knowledgeBases//documents/`. |
| `params.updateMask` | `string` | No | Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.knowledgeBases.documents.reload()`

Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to reload. Format: `projects//locations//knowledgeBases//documents/` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.knowledgeBases.documents.export()`

Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to export. Format: `projects//locations//knowledgeBases//documents/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.sipTrunks`

#### `projects.locations.sipTrunks.create()`

Creates a SipTrunk for a specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location to create a SIP trunk for. Format: `projects//locations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.sipTrunks.delete()`

Deletes a specified SipTrunk.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SIP trunk to delete. Format: `projects//locations//sipTrunks/`. |

#### `projects.locations.sipTrunks.list()`

Returns a list of SipTrunks in the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location to list SIP trunks from. Format: `projects//locations/`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.sipTrunks.get()`

Retrieves the specified SipTrunk.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SIP trunk to delete. Format: `projects//locations//sipTrunks/`. |

#### `projects.locations.sipTrunks.patch()`

Updates the specified SipTrunk.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The unique identifier of the SIP trunk. Format: `projects//locations//sipTrunks/`. |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.agent`

#### `projects.agent.search()`

Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to list agents from. Format: `projects/`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.agent.train()`

Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent to train is associated with. Format: `projects/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.export()`

Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent to export is associated with. Format: `projects/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.import()`

Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent to import is associated with. Format: `projects/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.restore()`

Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent to restore is associated with. Format: `projects/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.getValidationResult()`

Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project that the agent is associated with. Format: `projects/`. |
| `params.languageCode` | `string` | No | Optional. The language for which you want a validation result. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |

#### `projects.agent.getFulfillment()`

Retrieves the fulfillment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the fulfillment. Format: `projects//agent/fulfillment`. |

#### `projects.agent.updateFulfillment()`

Updates the fulfillment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique identifier of the fulfillment. Supported formats: - `projects//agent/fulfillment` - `projects//locations//agent/fulfillment` This field is not used for Fulfillment in an Environment. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.agent.sessions`

#### `projects.agent.sessions.deleteContexts()`

Deletes all active contexts in the specified session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the session to delete all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

#### `projects.agent.sessions.detectIntent()`

Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session this query is sent to. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment (`Environment ID` might be referred to as environment name at some places). If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions). |
| `params.resource` | `object` | Yes | The request body. |

### `projects.agent.sessions.contexts`

#### `projects.agent.sessions.contexts.list()`

Returns the list of all contexts in the specified session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to list all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.agent.sessions.contexts.get()`

Retrieves the specified context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the context. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

#### `projects.agent.sessions.contexts.create()`

Creates a context. If the specified context already exists, overrides the context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to create a context for. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.sessions.contexts.patch()`

Updates the specified context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size` |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.sessions.contexts.delete()`

Deletes the specified context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the context to delete. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

### `projects.agent.sessions.entityTypes`

#### `projects.agent.sessions.entityTypes.list()`

Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to list all session entity types from. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.agent.sessions.entityTypes.get()`

Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session entity type. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

#### `projects.agent.sessions.entityTypes.create()`

Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to create a session entity type for. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.sessions.entityTypes.patch()`

Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented. |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.sessions.entityTypes.delete()`

Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entity type to delete. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

### `projects.agent.intents`

#### `projects.agent.intents.list()`

Returns the list of all intents in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all intents from. Format: `projects//agent` or `projects//locations//agent`. Alternatively, you can specify the environment to list intents for. Format: `projects//agent/environments/` or `projects//locations//agent/environments/`. Note: training phrases of the intents will not be returned for non-draft environment. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.intentView` | `string` | No | Optional. The resource view to apply to the returned intent. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.agent.intents.get()`

Retrieves the specified intent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the intent. Format: `projects//agent/intents/`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.intentView` | `string` | No | Optional. The resource view to apply to the returned intent. |

#### `projects.agent.intents.create()`

Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create a intent for. Format: `projects//agent`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.intentView` | `string` | No | Optional. The resource view to apply to the returned intent. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.intents.patch()`

Updates the specified intent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects//agent/intents/`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.intentView` | `string` | No | Optional. The resource view to apply to the returned intent. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.intents.delete()`

Deletes the specified intent and its direct or indirect followup intents. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the intent to delete. If this intent has direct or indirect followup intents, we also delete them. Format: `projects//agent/intents/`. |

#### `projects.agent.intents.batchUpdate()`

Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the agent to update or create intents in. Format: `projects//agent`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.intents.batchDelete()`

Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the agent to delete all entities types for. Format: `projects//agent`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.agent.entityTypes`

#### `projects.agent.entityTypes.list()`

Returns the list of all entity types in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all entity types from. Format: `projects//agent`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.agent.entityTypes.get()`

Retrieves the specified entity type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entity type. Format: `projects//agent/entityTypes/`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |

#### `projects.agent.entityTypes.create()`

Creates an entity type in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create a entity type for. Format: `projects//agent`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.entityTypes.patch()`

Updates the specified entity type. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects//agent/entityTypes/`. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.entityTypes.delete()`

Deletes the specified entity type. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entity type to delete. Format: `projects//agent/entityTypes/`. |

#### `projects.agent.entityTypes.batchUpdate()`

Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the agent to update or create entity types in. Format: `projects//agent`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.entityTypes.batchDelete()`

Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the agent to delete all entities types for. Format: `projects//agent`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.agent.entityTypes.entities`

#### `projects.agent.entityTypes.entities.batchCreate()`

Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the entity type to create entities in. Format: `projects//agent/entityTypes/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.entityTypes.entities.batchUpdate()`

Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). 

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the entity type to update or create entities in. Format: `projects//agent/entityTypes/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.entityTypes.entities.batchDelete()`

Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the entity type to delete entries for. Format: `projects//agent/entityTypes/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.agent.environments`

#### `projects.agent.environments.list()`

Returns the list of all non-default environments of the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all environments from. Format: - `projects//agent` - `projects//locations//agent` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.agent.environments.get()`

Retrieves the specified agent environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the environment. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`. |

#### `projects.agent.environments.create()`

Creates an agent environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create an environment for. Supported formats: - `projects//agent` - `projects//locations//agent` |
| `params.environmentId` | `string` | No | Required. The unique id of the new environment. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.environments.patch()`

Updates the specified agent environment. This method allows you to deploy new agent versions into the environment. When an environment is pointed to a new agent version by setting `environment.agent_version`, the environment is temporarily set to the `LOADING` state. During that time, the environment continues serving the previous version of the agent. After the new agent version is done loading, the environment is set back to the `RUNNING` state. You can use "-" as Environment ID in environment name to update an agent version in the default environment. WARNING: this will negate all recent changes to the draft agent and can't be undone. You may want to save the draft agent to a version before calling this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The unique identifier of this agent environment. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields get updated. |
| `params.allowLoadToDraftAndDiscardChanges` | `boolean` | No | Optional. This field is used to prevent accidental overwrite of the default environment, which is an operation that cannot be undone. To confirm that the caller desires this overwrite, this field must be explicitly set to true when updating the default environment (environment ID = `-`). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.environments.delete()`

Deletes the specified agent environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the environment to delete. / Format: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`. |

#### `projects.agent.environments.getHistory()`

Gets the history of the specified environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the environment to retrieve history for. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

### `projects.agent.environments.users`

### `projects.agent.environments.users.sessions`

#### `projects.agent.environments.users.sessions.deleteContexts()`

Deletes all active contexts in the specified session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the session to delete all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

#### `projects.agent.environments.users.sessions.detectIntent()`

Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session this query is sent to. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment (`Environment ID` might be referred to as environment name at some places). If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions). |
| `params.resource` | `object` | Yes | The request body. |

### `projects.agent.environments.users.sessions.contexts`

#### `projects.agent.environments.users.sessions.contexts.list()`

Returns the list of all contexts in the specified session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to list all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.agent.environments.users.sessions.contexts.get()`

Retrieves the specified context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the context. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

#### `projects.agent.environments.users.sessions.contexts.create()`

Creates a context. If the specified context already exists, overrides the context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to create a context for. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.environments.users.sessions.contexts.patch()`

Updates the specified context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size` |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.environments.users.sessions.contexts.delete()`

Deletes the specified context.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the context to delete. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

### `projects.agent.environments.users.sessions.entityTypes`

#### `projects.agent.environments.users.sessions.entityTypes.list()`

Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to list all session entity types from. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.agent.environments.users.sessions.entityTypes.get()`

Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session entity type. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

#### `projects.agent.environments.users.sessions.entityTypes.create()`

Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to create a session entity type for. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.environments.users.sessions.entityTypes.patch()`

Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented. |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.environments.users.sessions.entityTypes.delete()`

Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entity type to delete. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. |

### `projects.agent.environments.intents`

#### `projects.agent.environments.intents.list()`

Returns the list of all intents in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all intents from. Format: `projects//agent` or `projects//locations//agent`. Alternatively, you can specify the environment to list intents for. Format: `projects//agent/environments/` or `projects//locations//agent/environments/`. Note: training phrases of the intents will not be returned for non-draft environment. |
| `params.languageCode` | `string` | No | Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity). |
| `params.intentView` | `string` | No | Optional. The resource view to apply to the returned intent. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

### `projects.agent.knowledgeBases`

#### `projects.agent.knowledgeBases.list()`

Returns the list of all knowledge bases of the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to list of knowledge bases for. Format: `projects//locations/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 10 and at most 100. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |
| `params.filter` | `string` | No | The filter expression used to filter knowledge bases returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * display_name with has(:) operator * language_code with equals(=) operator Examples: * 'language_code=en-us' matches knowledge bases with en-us language code. * 'display_name:articles' matches knowledge bases whose display name contains "articles". * 'display_name:"Best Articles"' matches knowledge bases whose display name contains "Best Articles". * 'language_code=en-gb AND display_name=articles' matches all knowledge bases whose display name contains "articles" and whose language code is "en-gb". Note: An empty filter string (i.e. "") is a no-op and will result in no filtering. For more information about filtering, see [API Filtering](https://aip.dev/160). |

#### `projects.agent.knowledgeBases.get()`

Retrieves the specified knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the knowledge base to retrieve. Format `projects//locations//knowledgeBases/`. |

#### `projects.agent.knowledgeBases.create()`

Creates a knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to create a knowledge base for. Format: `projects//locations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.knowledgeBases.delete()`

Deletes the specified knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the knowledge base to delete. Format: `projects//locations//knowledgeBases/`. |
| `params.force` | `boolean` | No | Optional. Force deletes the knowledge base. When set to true, any documents in the knowledge base are also deleted. |

#### `projects.agent.knowledgeBases.patch()`

Updates the specified knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The knowledge base resource name. The name must be empty when creating a knowledge base. Format: `projects//locations//knowledgeBases/`. |
| `params.updateMask` | `string` | No | Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.agent.knowledgeBases.documents`

#### `projects.agent.knowledgeBases.documents.list()`

Returns the list of all documents of the knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The knowledge base to list all documents for. Format: `projects//locations//knowledgeBases/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 10 and at most 100. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |
| `params.filter` | `string` | No | The filter expression used to filter documents returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * knowledge_types with has(:) operator * display_name with has(:) operator * state with equals(=) operator Examples: * "knowledge_types:FAQ" matches documents with FAQ knowledge type. * "display_name:customer" matches documents whose display name contains "customer". * "state=ACTIVE" matches documents with ACTIVE state. * "knowledge_types:FAQ AND state=ACTIVE" matches all active FAQ documents. For more information about filtering, see [API Filtering](https://aip.dev/160). |

#### `projects.agent.knowledgeBases.documents.get()`

Retrieves the specified document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to retrieve. Format `projects//locations//knowledgeBases//documents/`. |

#### `projects.agent.knowledgeBases.documents.create()`

Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The knowledge base to create a document for. Format: `projects//locations//knowledgeBases/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.knowledgeBases.documents.delete()`

Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to delete. Format: `projects//locations//knowledgeBases//documents/`. |

#### `projects.agent.knowledgeBases.documents.patch()`

Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. The document resource name. The name must be empty when creating a document. Format: `projects//locations//knowledgeBases//documents/`. |
| `params.updateMask` | `string` | No | Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.knowledgeBases.documents.reload()`

Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to reload. Format: `projects//locations//knowledgeBases//documents/` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.agent.versions`

#### `projects.agent.versions.list()`

Returns the list of all versions of the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all versions from. Supported formats: - `projects//agent` - `projects//locations//agent` |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.agent.versions.get()`

Retrieves the specified agent version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/` |

#### `projects.agent.versions.create()`

Creates an agent version. The new version points to the agent instance in the "default" environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create a version for. Supported formats: - `projects//agent` - `projects//locations//agent` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.versions.patch()`

Updates the specified agent version. Note that this method does not allow you to update the state of the agent the given version points to. It allows you to update only mutable properties of the version resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The unique identifier of this agent version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/` |
| `params.updateMask` | `string` | No | Required. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.agent.versions.delete()`

Delete the specified agent version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the version to delete. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/` |

### `projects.generators`

#### `projects.generators.create()`

Creates a generator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project/location to create generator for. Format: `projects//locations/` |
| `params.generatorId` | `string` | No | Optional. The ID to use for the generator, which will become the final component of the generator's resource name. The generator ID must be compliant with the regression formula `a-zA-Z*` with the characters length in range of [3,64]. If the field is not provided, an Id will be auto-generated. If the field is provided, the caller is responsible for 1. the uniqueness of the ID, otherwise the request will be rejected. 2. the consistency for whether to use custom ID or not under a project to better ensure uniqueness. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.generators.list()`

Lists generators.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project/location to list generators for. Format: `projects//locations/` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of conversation models to return in a single page. Default to 10. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

### `projects.answerRecords`

#### `projects.answerRecords.list()`

Returns the list of all answer records in the specified project in reverse chronological order.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to list all answer records for in reverse chronological order. Format: `projects//locations/`. |
| `params.filter` | `string` | No | Optional. Filters to restrict results to specific answer records. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * conversation_id with equals(=) operator Examples: * `conversation_id=bar` matches answer records in the `projects/foo/locations/global/conversations/bar` conversation (assuming the parent is `projects/foo/locations/global`). For more information about filtering, see [API Filtering](https://aip.dev/160). |
| `params.pageSize` | `integer` | No | Optional. The maximum number of records to return in a single page. The server may return fewer records than this. If unspecified, we use 10. The maximum is 100. |
| `params.pageToken` | `string` | No | Optional. The ListAnswerRecordsResponse.next_page_token value returned from a previous list request used to continue listing on the next page. |

#### `projects.answerRecords.patch()`

Updates the specified answer record.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of this answer record. Format: `projects//locations//answerRecords/`. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields get updated. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.conversationDatasets`

#### `projects.conversationDatasets.get()`

Retrieves the specified conversation dataset.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation dataset to retrieve. Format: `projects//locations//conversationDatasets/` |

#### `projects.conversationDatasets.list()`

Returns the list of all conversation datasets in the specified project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project and location name to list all conversation datasets for. Format: `projects//locations/` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of conversation datasets to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.conversationDatasets.importConversationData()`

Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Dataset resource name. Format: `projects//locations//conversationDatasets/` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.conversationProfiles`

#### `projects.conversationProfiles.list()`

Returns the list of all conversation profiles in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to list all conversation profiles from. Format: `projects//locations/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.conversationProfiles.get()`

Retrieves the specified conversation profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/`. |

#### `projects.conversationProfiles.create()`

Creates a conversation profile in the specified project. ConversationProfile.create_time and ConversationProfile.update_time aren't populated in the response. You can retrieve them via GetConversationProfile API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to create a conversation profile for. Format: `projects//locations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversationProfiles.patch()`

Updates the specified conversation profile. ConversationProfile.create_time and ConversationProfile.update_time aren't populated in the response. You can retrieve them via GetConversationProfile API.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of this conversation profile. Format: `projects//locations//conversationProfiles/`. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversationProfiles.delete()`

Deletes the specified conversation profile.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the conversation profile to delete. Format: `projects//locations//conversationProfiles/`. |

#### `projects.conversationProfiles.setSuggestionFeatureConfig()`

Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversationProfile` | `string` | Yes | Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects//locations//conversationProfiles/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversationProfiles.clearSuggestionFeatureConfig()`

Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversationProfile` | `string` | Yes | Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects//locations//conversationProfiles/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.conversations`

#### `projects.conversations.create()`

Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource identifier of the project creating the conversation. Format: `projects//locations/`. |
| `params.conversationId` | `string` | No | Optional. Identifier of the conversation. Generally it's auto generated by Google. Only set it if you cannot wait for the response to return a auto-generated one to you. The conversation ID must be compliant with the regression formula `a-zA-Z*` with the characters length in range of [3,64]. If the field is provided, the caller is responsible for 1. the uniqueness of the ID, otherwise the request will be rejected. 2. the consistency for whether to use custom ID or not under a project to better ensure uniqueness. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversations.list()`

Returns the list of all conversations in the specified project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project from which to list all conversation. Format: `projects//locations/`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |
| `params.filter` | `string` | No | Optional. A filter expression that filters conversations listed in the response. Only `lifecycle_state` can be filtered on in this way. For example, the following expression only returns `COMPLETED` conversations: `lifecycle_state = "COMPLETED"` For more information about filtering, see [API Filtering](https://aip.dev/160). |

#### `projects.conversations.get()`

Retrieves the specific conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the conversation. Format: `projects//locations//conversations/`. |

#### `projects.conversations.complete()`

Completes the specified conversation. Finished conversations are purged from the database after 30 days.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource identifier of the conversation to close. Format: `projects//locations//conversations/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.conversations.participants`

#### `projects.conversations.participants.create()`

Creates a new participant in a conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Resource identifier of the conversation adding the participant. Format: `projects//locations//conversations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversations.participants.get()`

Retrieves a conversation participant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the participant. Format: `projects//locations//conversations//participants/`. |

#### `projects.conversations.participants.list()`

Returns the list of all participants in the specified conversation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The conversation to list all participants from. Format: `projects//locations//conversations/`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.conversations.participants.patch()`

Updates the specified participant.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. The unique identifier of this participant. Format: `projects//locations//conversations//participants/`. |
| `params.updateMask` | `string` | No | Required. The mask to specify which fields to update. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversations.participants.analyzeContent()`

Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.participant` | `string` | Yes | Required. The name of the participant this text comes from. Format: `projects//locations//conversations//participants/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.conversations.participants.suggestions`

#### `projects.conversations.participants.suggestions.suggestArticles()`

Gets suggested articles for a participant based on specific historical messages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversations.participants.suggestions.suggestFaqAnswers()`

Gets suggested faq answers for a participant based on specific historical messages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversations.participants.suggestions.suggestSmartReplies()`

Gets smart replies for a participant based on specific historical messages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversations.participants.suggestions.suggestKnowledgeAssist()`

Gets knowledge assist suggestions based on historical messages.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the participant to fetch suggestions for. Format: `projects//locations//conversations//participants/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.conversations.messages`

#### `projects.conversations.messages.list()`

Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the conversation to list messages for. Format: `projects//locations//conversations/` |
| `params.filter` | `string` | No | Optional. Filter on message fields. Currently predicates on `create_time` and `create_time_epoch_microseconds` are supported. `create_time` only support milliseconds accuracy. E.g., `create_time_epoch_microseconds > 1551790877964485` or `create_time > 2017-01-15T01:30:15.01Z`. For more information about filtering, see [API Filtering](https://aip.dev/160). |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

### `projects.conversations.suggestions`

#### `projects.conversations.suggestions.suggestConversationSummary()`

Suggests summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes | Required. The conversation to fetch suggestion for. Format: `projects//locations//conversations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversations.suggestions.searchKnowledge()`

Get answers for the given query based on knowledge documents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes | Optional. The conversation (between human agent and end user) where the search request is triggered. Format: `projects//locations//conversations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversations.suggestions.generate()`

Generates all the suggestions using generators configured in the conversation profile. A generator is used only if its trigger event is matched.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.conversation` | `string` | Yes | Required. The conversation for which the suggestions are generated. Format: `projects//locations//conversations/`. The conversation must be created with a conversation profile which has generators configured in it to be able to get suggestions. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.suggestions`

#### `projects.suggestions.generateStatelessSummary()`

Generates and returns a summary for a conversation that does not have a resource created for it.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource to charge for the Summary's generation. Format: `projects//locations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.suggestions.searchKnowledge()`

Get answers for the given query based on knowledge documents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource contains the conversation profile Format: 'projects/' or `projects//locations/`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.conversationModels`

#### `projects.conversationModels.create()`

Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The project to create conversation model for. Format: `projects/` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversationModels.get()`

Gets conversation model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation model to retrieve. Format: `projects//conversationModels/` |

#### `projects.conversationModels.list()`

Lists conversation models.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to list all conversation models for. Format: `projects/` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of conversation models to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.conversationModels.delete()`

Deletes a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeleteConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation model to delete. Format: `projects//conversationModels/` |

#### `projects.conversationModels.deploy()`

Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation model to deploy. Format: `projects//conversationModels/` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.conversationModels.undeploy()`

Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation model to undeploy. Format: `projects//conversationModels/` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.conversationModels.evaluations`

#### `projects.conversationModels.evaluations.get()`

Gets an evaluation of conversation model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The conversation model evaluation resource name. Format: `projects//conversationModels//evaluations/` |

#### `projects.conversationModels.evaluations.list()`

Lists evaluations of a conversation model.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The conversation model resource name. Format: `projects//conversationModels/` |
| `params.pageSize` | `integer` | No | Optional. Maximum number of evaluations to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

### `projects.knowledgeBases`

#### `projects.knowledgeBases.list()`

Returns the list of all knowledge bases of the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to list of knowledge bases for. Format: `projects//locations/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 10 and at most 100. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |
| `params.filter` | `string` | No | The filter expression used to filter knowledge bases returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * display_name with has(:) operator * language_code with equals(=) operator Examples: * 'language_code=en-us' matches knowledge bases with en-us language code. * 'display_name:articles' matches knowledge bases whose display name contains "articles". * 'display_name:"Best Articles"' matches knowledge bases whose display name contains "Best Articles". * 'language_code=en-gb AND display_name=articles' matches all knowledge bases whose display name contains "articles" and whose language code is "en-gb". Note: An empty filter string (i.e. "") is a no-op and will result in no filtering. For more information about filtering, see [API Filtering](https://aip.dev/160). |

#### `projects.knowledgeBases.get()`

Retrieves the specified knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the knowledge base to retrieve. Format `projects//locations//knowledgeBases/`. |

#### `projects.knowledgeBases.create()`

Creates a knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project to create a knowledge base for. Format: `projects//locations/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.knowledgeBases.delete()`

Deletes the specified knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the knowledge base to delete. Format: `projects//locations//knowledgeBases/`. |
| `params.force` | `boolean` | No | Optional. Force deletes the knowledge base. When set to true, any documents in the knowledge base are also deleted. |

#### `projects.knowledgeBases.patch()`

Updates the specified knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The knowledge base resource name. The name must be empty when creating a knowledge base. Format: `projects//locations//knowledgeBases/`. |
| `params.updateMask` | `string` | No | Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.knowledgeBases.documents`

#### `projects.knowledgeBases.documents.list()`

Returns the list of all documents of the knowledge base.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The knowledge base to list all documents for. Format: `projects//locations//knowledgeBases/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 10 and at most 100. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |
| `params.filter` | `string` | No | The filter expression used to filter documents returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * knowledge_types with has(:) operator * display_name with has(:) operator * state with equals(=) operator Examples: * "knowledge_types:FAQ" matches documents with FAQ knowledge type. * "display_name:customer" matches documents whose display name contains "customer". * "state=ACTIVE" matches documents with ACTIVE state. * "knowledge_types:FAQ AND state=ACTIVE" matches all active FAQ documents. For more information about filtering, see [API Filtering](https://aip.dev/160). |

#### `projects.knowledgeBases.documents.get()`

Retrieves the specified document.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to retrieve. Format `projects//locations//knowledgeBases//documents/`. |

#### `projects.knowledgeBases.documents.create()`

Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The knowledge base to create a document for. Format: `projects//locations//knowledgeBases/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.knowledgeBases.documents.import()`

Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The knowledge base to import documents into. Format: `projects//locations//knowledgeBases/`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.knowledgeBases.documents.delete()`

Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to delete. Format: `projects//locations//knowledgeBases//documents/`. |

#### `projects.knowledgeBases.documents.patch()`

Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. The document resource name. The name must be empty when creating a document. Format: `projects//locations//knowledgeBases//documents/`. |
| `params.updateMask` | `string` | No | Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.knowledgeBases.documents.reload()`

Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to reload. Format: `projects//locations//knowledgeBases//documents/` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.knowledgeBases.documents.export()`

Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the document to export. Format: `projects//locations//knowledgeBases//documents/`. |
| `params.resource` | `object` | Yes | The request body. |