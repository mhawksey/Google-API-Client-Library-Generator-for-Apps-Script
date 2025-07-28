
/**
 * Google Apps Script client library for the Dialogflow API
 * Documentation URL: https://cloud.google.com/dialogflow/
 * @class
 */
class Dialogflow {
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
    this._rootUrl = 'https://dialogflow.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Retrieves the specified agent.
     * @param {string} params.parent - (Required) Required. The project that the agent to fetch is associated with. Format: `projects/`.
     * @return {object} The API response object.
     */
    this.projects.getAgent = (params) => this._makeRequest('v2/{+parent}/agent', 'GET', params);

    /**
     * Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The project of this agent. Format: `projects/`.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.setAgent = (params) => this._makeRequest('v2/{+parent}/agent', 'POST', params);

    /**
     * Deletes the specified agent.
     * @param {string} params.parent - (Required) Required. The project that the agent to delete is associated with. Format: `projects/`.
     * @return {object} The API response object.
     */
    this.projects.deleteAgent = (params) => this._makeRequest('v2/{+parent}/agent', 'DELETE', params);

    this.projects.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.projects.locations = {};

    /**
     * Retrieves the specified agent.
     * @param {string} params.parent - (Required) Required. The project that the agent to fetch is associated with. Format: `projects/`.
     * @return {object} The API response object.
     */
    this.projects.locations.getAgent = (params) => this._makeRequest('v2/{+parent}/agent', 'GET', params);

    /**
     * Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The project of this agent. Format: `projects/`.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.setAgent = (params) => this._makeRequest('v2/{+parent}/agent', 'POST', params);

    /**
     * Deletes the specified agent.
     * @param {string} params.parent - (Required) Required. The project that the agent to delete is associated with. Format: `projects/`.
     * @return {object} The API response object.
     */
    this.projects.locations.deleteAgent = (params) => this._makeRequest('v2/{+parent}/agent', 'DELETE', params);

    /**
     * Gets location-level encryption key specification.
     * @param {string} params.name - (Required) Required. The name of the encryption spec resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.getEncryptionSpec = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.projects.locations.agent = {};

    /**
     * Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project to list agents from. Format: `projects/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.search = (params) => this._makeRequest('v2/{+parent}/agent:search', 'GET', params);

    /**
     * Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The project that the agent to train is associated with. Format: `projects/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.train = (params) => this._makeRequest('v2/{+parent}/agent:train', 'POST', params);

    /**
     * Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
     * @param {string} params.parent - (Required) Required. The project that the agent to export is associated with. Format: `projects/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.export = (params) => this._makeRequest('v2/{+parent}/agent:export', 'POST', params);

    /**
     * Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The project that the agent to import is associated with. Format: `projects/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.import = (params) => this._makeRequest('v2/{+parent}/agent:import', 'POST', params);

    /**
     * Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The project that the agent to restore is associated with. Format: `projects/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.restore = (params) => this._makeRequest('v2/{+parent}/agent:restore', 'POST', params);

    /**
     * Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
     * @param {string} params.languageCode - Optional. The language for which you want a validation result. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.parent - (Required) Required. The project that the agent is associated with. Format: `projects/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.getValidationResult = (params) => this._makeRequest('v2/{+parent}/agent/validationResult', 'GET', params);

    /**
     * Retrieves the fulfillment.
     * @param {string} params.name - (Required) Required. The name of the fulfillment. Format: `projects//agent/fulfillment`.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.getFulfillment = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Updates the fulfillment.
     * @param {string} params.name - (Required) Required. The unique identifier of the fulfillment. Supported formats: - `projects//agent/fulfillment` - `projects//locations//agent/fulfillment` This field is not used for Fulfillment in an Environment.
     * @param {string} params.updateMask - Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.updateFulfillment = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.locations.agent.sessions = {};

    /**
     * Deletes all active contexts in the specified session.
     * @param {string} params.parent - (Required) Required. The name of the session to delete all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.sessions.deleteContexts = (params) => this._makeRequest('v2/{+parent}/contexts', 'DELETE', params);

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {string} params.session - (Required) Required. The name of the session this query is sent to. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment (`Environment ID` might be referred to as environment name at some places). If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.sessions.detectIntent = (params) => this._makeRequest('v2/{+session}:detectIntent', 'POST', params);

    this.projects.locations.agent.sessions.contexts = {};

    /**
     * Returns the list of all contexts in the specified session.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The session to list all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.sessions.contexts.list = (params) => this._makeRequest('v2/{+parent}/contexts', 'GET', params);

    /**
     * Retrieves the specified context.
     * @param {string} params.name - (Required) Required. The name of the context. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.sessions.contexts.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a context. If the specified context already exists, overrides the context.
     * @param {string} params.parent - (Required) Required. The session to create a context for. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.sessions.contexts.create = (params) => this._makeRequest('v2/{+parent}/contexts', 'POST', params);

    /**
     * Updates the specified context.
     * @param {string} params.name - (Required) Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.sessions.contexts.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified context.
     * @param {string} params.name - (Required) Required. The name of the context to delete. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.sessions.contexts.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.agent.sessions.entityTypes = {};

    /**
     * Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The session to list all session entity types from. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.sessions.entityTypes.list = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'GET', params);

    /**
     * Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.name - (Required) Required. The name of the session entity type. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.sessions.entityTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.parent - (Required) Required. The session to create a session entity type for. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.sessions.entityTypes.create = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'POST', params);

    /**
     * Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.name - (Required) Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.sessions.entityTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.name - (Required) Required. The name of the entity type to delete. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.sessions.entityTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.agent.intents = {};

    /**
     * Returns the list of all intents in the specified agent.
     * @param {string} params.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all intents from. Format: `projects//agent` or `projects//locations//agent`. Alternatively, you can specify the environment to list intents for. Format: `projects//agent/environments/` or `projects//locations//agent/environments/`. Note: training phrases of the intents will not be returned for non-draft environment.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.intents.list = (params) => this._makeRequest('v2/{+parent}/intents', 'GET', params);

    /**
     * Retrieves the specified intent.
     * @param {string} params.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} params.name - (Required) Required. The name of the intent. Format: `projects//agent/intents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.intents.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} params.parent - (Required) Required. The agent to create a intent for. Format: `projects//agent`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.intents.create = (params) => this._makeRequest('v2/{+parent}/intents', 'POST', params);

    /**
     * Updates the specified intent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} params.name - (Required) Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects//agent/intents/`.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.intents.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified intent and its direct or indirect followup intents. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.name - (Required) Required. The name of the intent to delete. If this intent has direct or indirect followup intents, we also delete them. Format: `projects//agent/intents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.intents.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the agent to update or create intents in. Format: `projects//agent`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.intents.batchUpdate = (params) => this._makeRequest('v2/{+parent}/intents:batchUpdate', 'POST', params);

    /**
     * Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the agent to delete all entities types for. Format: `projects//agent`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.intents.batchDelete = (params) => this._makeRequest('v2/{+parent}/intents:batchDelete', 'POST', params);

    this.projects.locations.agent.entityTypes = {};

    /**
     * Returns the list of all entity types in the specified agent.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all entity types from. Format: `projects//agent`.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.entityTypes.list = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'GET', params);

    /**
     * Retrieves the specified entity type.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} params.name - (Required) Required. The name of the entity type. Format: `projects//agent/entityTypes/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.entityTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates an entity type in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} params.parent - (Required) Required. The agent to create a entity type for. Format: `projects//agent`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.entityTypes.create = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'POST', params);

    /**
     * Updates the specified entity type. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} params.name - (Required) The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects//agent/entityTypes/`.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.entityTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified entity type. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.name - (Required) Required. The name of the entity type to delete. Format: `projects//agent/entityTypes/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.entityTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the agent to update or create entity types in. Format: `projects//agent`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.entityTypes.batchUpdate = (params) => this._makeRequest('v2/{+parent}/entityTypes:batchUpdate', 'POST', params);

    /**
     * Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the agent to delete all entities types for. Format: `projects//agent`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.entityTypes.batchDelete = (params) => this._makeRequest('v2/{+parent}/entityTypes:batchDelete', 'POST', params);

    this.projects.locations.agent.entityTypes.entities = {};

    /**
     * Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the entity type to create entities in. Format: `projects//agent/entityTypes/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.entityTypes.entities.batchCreate = (params) => this._makeRequest('v2/{+parent}/entities:batchCreate', 'POST', params);

    /**
     * Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the entity type to update or create entities in. Format: `projects//agent/entityTypes/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.entityTypes.entities.batchUpdate = (params) => this._makeRequest('v2/{+parent}/entities:batchUpdate', 'POST', params);

    /**
     * Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the entity type to delete entries for. Format: `projects//agent/entityTypes/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.entityTypes.entities.batchDelete = (params) => this._makeRequest('v2/{+parent}/entities:batchDelete', 'POST', params);

    this.projects.locations.agent.environments = {};

    /**
     * Returns the list of all non-default environments of the specified agent.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all environments from. Format: - `projects//agent` - `projects//locations//agent`
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.list = (params) => this._makeRequest('v2/{+parent}/environments', 'GET', params);

    /**
     * Retrieves the specified agent environment.
     * @param {string} params.name - (Required) Required. The name of the environment. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates an agent environment.
     * @param {string} params.environmentId - Required. The unique id of the new environment.
     * @param {string} params.parent - (Required) Required. The agent to create an environment for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.create = (params) => this._makeRequest('v2/{+parent}/environments', 'POST', params);

    /**
     * Updates the specified agent environment. This method allows you to deploy new agent versions into the environment. When an environment is pointed to a new agent version by setting `environment.agent_version`, the environment is temporarily set to the `LOADING` state. During that time, the environment continues serving the previous version of the agent. After the new agent version is done loading, the environment is set back to the `RUNNING` state. You can use "-" as Environment ID in environment name to update an agent version in the default environment. WARNING: this will negate all recent changes to the draft agent and can't be undone. You may want to save the draft agent to a version before calling this method.
     * @param {boolean} params.allowLoadToDraftAndDiscardChanges - Optional. This field is used to prevent accidental overwrite of the default environment, which is an operation that cannot be undone. To confirm that the caller desires this overwrite, this field must be explicitly set to true when updating the default environment (environment ID = `-`).
     * @param {string} params.name - (Required) Output only. The unique identifier of this agent environment. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`.
     * @param {string} params.updateMask - Required. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified agent environment.
     * @param {string} params.name - (Required) Required. The name of the environment to delete. / Format: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Gets the history of the specified environment.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The name of the environment to retrieve history for. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.getHistory = (params) => this._makeRequest('v2/{+parent}/history', 'GET', params);

    this.projects.locations.agent.environments.users = {};

    this.projects.locations.agent.environments.users.sessions = {};

    /**
     * Deletes all active contexts in the specified session.
     * @param {string} params.parent - (Required) Required. The name of the session to delete all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.users.sessions.deleteContexts = (params) => this._makeRequest('v2/{+parent}/contexts', 'DELETE', params);

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {string} params.session - (Required) Required. The name of the session this query is sent to. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment (`Environment ID` might be referred to as environment name at some places). If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.users.sessions.detectIntent = (params) => this._makeRequest('v2/{+session}:detectIntent', 'POST', params);

    this.projects.locations.agent.environments.users.sessions.contexts = {};

    /**
     * Returns the list of all contexts in the specified session.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The session to list all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.users.sessions.contexts.list = (params) => this._makeRequest('v2/{+parent}/contexts', 'GET', params);

    /**
     * Retrieves the specified context.
     * @param {string} params.name - (Required) Required. The name of the context. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.users.sessions.contexts.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a context. If the specified context already exists, overrides the context.
     * @param {string} params.parent - (Required) Required. The session to create a context for. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.users.sessions.contexts.create = (params) => this._makeRequest('v2/{+parent}/contexts', 'POST', params);

    /**
     * Updates the specified context.
     * @param {string} params.name - (Required) Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.users.sessions.contexts.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified context.
     * @param {string} params.name - (Required) Required. The name of the context to delete. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.users.sessions.contexts.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.agent.environments.users.sessions.entityTypes = {};

    /**
     * Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The session to list all session entity types from. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.users.sessions.entityTypes.list = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'GET', params);

    /**
     * Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.name - (Required) Required. The name of the session entity type. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.users.sessions.entityTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.parent - (Required) Required. The session to create a session entity type for. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.users.sessions.entityTypes.create = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'POST', params);

    /**
     * Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.name - (Required) Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.users.sessions.entityTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.name - (Required) Required. The name of the entity type to delete. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.users.sessions.entityTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.agent.environments.intents = {};

    /**
     * Returns the list of all intents in the specified agent.
     * @param {string} params.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all intents from. Format: `projects//agent` or `projects//locations//agent`. Alternatively, you can specify the environment to list intents for. Format: `projects//agent/environments/` or `projects//locations//agent/environments/`. Note: training phrases of the intents will not be returned for non-draft environment.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.environments.intents.list = (params) => this._makeRequest('v2/{+parent}/intents', 'GET', params);

    this.projects.locations.agent.versions = {};

    /**
     * Returns the list of all versions of the specified agent.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all versions from. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @return {object} The API response object.
     */
    this.projects.locations.agent.versions.list = (params) => this._makeRequest('v2/{+parent}/versions', 'GET', params);

    /**
     * Retrieves the specified agent version.
     * @param {string} params.name - (Required) Required. The name of the version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     * @return {object} The API response object.
     */
    this.projects.locations.agent.versions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates an agent version. The new version points to the agent instance in the "default" environment.
     * @param {string} params.parent - (Required) Required. The agent to create a version for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.versions.create = (params) => this._makeRequest('v2/{+parent}/versions', 'POST', params);

    /**
     * Updates the specified agent version. Note that this method does not allow you to update the state of the agent the given version points to. It allows you to update only mutable properties of the version resource.
     * @param {string} params.name - (Required) Output only. The unique identifier of this agent version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     * @param {string} params.updateMask - Required. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agent.versions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Delete the specified agent version.
     * @param {string} params.name - (Required) Required. The name of the version to delete. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     * @return {object} The API response object.
     */
    this.projects.locations.agent.versions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.generators = {};

    /**
     * Creates a generator.
     * @param {string} params.generatorId - Optional. The ID to use for the generator, which will become the final component of the generator's resource name. The generator ID must be compliant with the regression formula `a-zA-Z*` with the characters length in range of [3,64]. If the field is not provided, an Id will be auto-generated. If the field is provided, the caller is responsible for 1. the uniqueness of the ID, otherwise the request will be rejected. 2. the consistency for whether to use custom ID or not under a project to better ensure uniqueness.
     * @param {string} params.parent - (Required) Required. The project/location to create generator for. Format: `projects//locations/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.generators.create = (params) => this._makeRequest('v2/{+parent}/generators', 'POST', params);

    /**
     * Retrieves a generator.
     * @param {string} params.name - (Required) Required. The generator resource name to retrieve. Format: `projects//locations//generators/`
     * @return {object} The API response object.
     */
    this.projects.locations.generators.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists generators.
     * @param {integer} params.pageSize - Optional. Maximum number of conversation models to return in a single page. Default to 10.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project/location to list generators for. Format: `projects//locations/`
     * @return {object} The API response object.
     */
    this.projects.locations.generators.list = (params) => this._makeRequest('v2/{+parent}/generators', 'GET', params);

    /**
     * Deletes a generator.
     * @param {string} params.name - (Required) Required. The generator resource name to delete. Format: `projects//locations//generators/`
     * @return {object} The API response object.
     */
    this.projects.locations.generators.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates a generator.
     * @param {string} params.name - (Required) Output only. Identifier. The resource name of the generator. Format: `projects//locations//generators/`
     * @param {string} params.updateMask - Optional. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.generators.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.locations.answerRecords = {};

    /**
     * Returns the list of all answer records in the specified project in reverse chronological order.
     * @param {string} params.filter - Optional. Filters to restrict results to specific answer records. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * conversation_id with equals(=) operator Examples: * `conversation_id=bar` matches answer records in the `projects/foo/locations/global/conversations/bar` conversation (assuming the parent is `projects/foo/locations/global`). For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} params.pageSize - Optional. The maximum number of records to return in a single page. The server may return fewer records than this. If unspecified, we use 10. The maximum is 100.
     * @param {string} params.pageToken - Optional. The ListAnswerRecordsResponse.next_page_token value returned from a previous list request used to continue listing on the next page.
     * @param {string} params.parent - (Required) Required. The project to list all answer records for in reverse chronological order. Format: `projects//locations/`.
     * @return {object} The API response object.
     */
    this.projects.locations.answerRecords.list = (params) => this._makeRequest('v2/{+parent}/answerRecords', 'GET', params);

    /**
     * Updates the specified answer record.
     * @param {string} params.name - (Required) The unique identifier of this answer record. Format: `projects//locations//answerRecords/`.
     * @param {string} params.updateMask - Required. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.answerRecords.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.locations.conversationDatasets = {};

    /**
     * Creates a new conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationDatasetOperationMetadata - `response`: ConversationDataset
     * @param {string} params.parent - (Required) Required. The project to create conversation dataset for. Format: `projects//locations/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationDatasets.create = (params) => this._makeRequest('v2/{+parent}/conversationDatasets', 'POST', params);

    /**
     * Retrieves the specified conversation dataset.
     * @param {string} params.name - (Required) Required. The conversation dataset to retrieve. Format: `projects//locations//conversationDatasets/`
     * @return {object} The API response object.
     */
    this.projects.locations.conversationDatasets.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Returns the list of all conversation datasets in the specified project and location.
     * @param {integer} params.pageSize - Optional. Maximum number of conversation datasets to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project and location name to list all conversation datasets for. Format: `projects//locations/`
     * @return {object} The API response object.
     */
    this.projects.locations.conversationDatasets.list = (params) => this._makeRequest('v2/{+parent}/conversationDatasets', 'GET', params);

    /**
     * Deletes the specified conversation dataset. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeleteConversationDatasetOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {string} params.name - (Required) Required. The conversation dataset to delete. Format: `projects//locations//conversationDatasets/`
     * @return {object} The API response object.
     */
    this.projects.locations.conversationDatasets.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse
     * @param {string} params.name - (Required) Required. Dataset resource name. Format: `projects//locations//conversationDatasets/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationDatasets.importConversationData = (params) => this._makeRequest('v2/{+name}:importConversationData', 'POST', params);

    this.projects.locations.conversationProfiles = {};

    /**
     * Returns the list of all conversation profiles in the specified project.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project to list all conversation profiles from. Format: `projects//locations/`.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationProfiles.list = (params) => this._makeRequest('v2/{+parent}/conversationProfiles', 'GET', params);

    /**
     * Retrieves the specified conversation profile.
     * @param {string} params.name - (Required) Required. The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/`.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a conversation profile in the specified project. ConversationProfile.create_time and ConversationProfile.update_time aren't populated in the response. You can retrieve them via GetConversationProfile API.
     * @param {string} params.parent - (Required) Required. The project to create a conversation profile for. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationProfiles.create = (params) => this._makeRequest('v2/{+parent}/conversationProfiles', 'POST', params);

    /**
     * Updates the specified conversation profile. ConversationProfile.create_time and ConversationProfile.update_time aren't populated in the response. You can retrieve them via GetConversationProfile API.
     * @param {string} params.name - (Required) The unique identifier of this conversation profile. Format: `projects//locations//conversationProfiles/`.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationProfiles.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified conversation profile.
     * @param {string} params.name - (Required) Required. The name of the conversation profile to delete. Format: `projects//locations//conversationProfiles/`.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationProfiles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
     * @param {string} params.conversationProfile - (Required) Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects//locations//conversationProfiles/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationProfiles.setSuggestionFeatureConfig = (params) => this._makeRequest('v2/{+conversationProfile}:setSuggestionFeatureConfig', 'POST', params);

    /**
     * Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
     * @param {string} params.conversationProfile - (Required) Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects//locations//conversationProfiles/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationProfiles.clearSuggestionFeatureConfig = (params) => this._makeRequest('v2/{+conversationProfile}:clearSuggestionFeatureConfig', 'POST', params);

    this.projects.locations.conversations = {};

    /**
     * Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
     * @param {string} params.conversationId - Optional. Identifier of the conversation. Generally it's auto generated by Google. Only set it if you cannot wait for the response to return a auto-generated one to you. The conversation ID must be compliant with the regression formula `a-zA-Z*` with the characters length in range of [3,64]. If the field is provided, the caller is responsible for 1. the uniqueness of the ID, otherwise the request will be rejected. 2. the consistency for whether to use custom ID or not under a project to better ensure uniqueness.
     * @param {string} params.parent - (Required) Required. Resource identifier of the project creating the conversation. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.create = (params) => this._makeRequest('v2/{+parent}/conversations', 'POST', params);

    /**
     * Returns the list of all conversations in the specified project.
     * @param {string} params.filter - Optional. A filter expression that filters conversations listed in the response. Only `lifecycle_state` can be filtered on in this way. For example, the following expression only returns `COMPLETED` conversations: `lifecycle_state = "COMPLETED"` For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project from which to list all conversation. Format: `projects//locations/`.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.list = (params) => this._makeRequest('v2/{+parent}/conversations', 'GET', params);

    /**
     * Retrieves the specific conversation.
     * @param {string} params.name - (Required) Required. The name of the conversation. Format: `projects//locations//conversations/`.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Completes the specified conversation. Finished conversations are purged from the database after 30 days.
     * @param {string} params.name - (Required) Required. Resource identifier of the conversation to close. Format: `projects//locations//conversations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.complete = (params) => this._makeRequest('v2/{+name}:complete', 'POST', params);

    /**
     * Data ingestion API. Ingests context references for an existing conversation.
     * @param {string} params.conversation - (Required) Required. Resource identifier of the conversation to ingest context information for. Format: `projects//locations//conversations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.ingestContextReferences = (params) => this._makeRequest('v2/{+conversation}:ingestContextReferences', 'POST', params);

    this.projects.locations.conversations.participants = {};

    /**
     * Creates a new participant in a conversation.
     * @param {string} params.parent - (Required) Required. Resource identifier of the conversation adding the participant. Format: `projects//locations//conversations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.participants.create = (params) => this._makeRequest('v2/{+parent}/participants', 'POST', params);

    /**
     * Retrieves a conversation participant.
     * @param {string} params.name - (Required) Required. The name of the participant. Format: `projects//locations//conversations//participants/`.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.participants.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Returns the list of all participants in the specified conversation.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The conversation to list all participants from. Format: `projects//locations//conversations/`.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.participants.list = (params) => this._makeRequest('v2/{+parent}/participants', 'GET', params);

    /**
     * Updates the specified participant.
     * @param {string} params.name - (Required) Optional. The unique identifier of this participant. Format: `projects//locations//conversations//participants/`.
     * @param {string} params.updateMask - Required. The mask to specify which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.participants.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {string} params.participant - (Required) Required. The name of the participant this text comes from. Format: `projects//locations//conversations//participants/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.participants.analyzeContent = (params) => this._makeRequest('v2/{+participant}:analyzeContent', 'POST', params);

    this.projects.locations.conversations.participants.suggestions = {};

    /**
     * Gets suggested articles for a participant based on specific historical messages.
     * @param {string} params.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.participants.suggestions.suggestArticles = (params) => this._makeRequest('v2/{+parent}/suggestions:suggestArticles', 'POST', params);

    /**
     * Gets suggested faq answers for a participant based on specific historical messages.
     * @param {string} params.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.participants.suggestions.suggestFaqAnswers = (params) => this._makeRequest('v2/{+parent}/suggestions:suggestFaqAnswers', 'POST', params);

    /**
     * Gets smart replies for a participant based on specific historical messages.
     * @param {string} params.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.participants.suggestions.suggestSmartReplies = (params) => this._makeRequest('v2/{+parent}/suggestions:suggestSmartReplies', 'POST', params);

    /**
     * Gets knowledge assist suggestions based on historical messages.
     * @param {string} params.parent - (Required) Required. The name of the participant to fetch suggestions for. Format: `projects//locations//conversations//participants/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.participants.suggestions.suggestKnowledgeAssist = (params) => this._makeRequest('v2/{+parent}/suggestions:suggestKnowledgeAssist', 'POST', params);

    this.projects.locations.conversations.messages = {};

    /**
     * Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
     * @param {string} params.filter - Optional. Filter on message fields. Currently predicates on `create_time` and `create_time_epoch_microseconds` are supported. `create_time` only support milliseconds accuracy. E.g., `create_time_epoch_microseconds > 1551790877964485` or `create_time > 2017-01-15T01:30:15.01Z`. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The name of the conversation to list messages for. Format: `projects//locations//conversations/`
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.messages.list = (params) => this._makeRequest('v2/{+parent}/messages', 'GET', params);

    this.projects.locations.conversations.suggestions = {};

    /**
     * Suggests summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.
     * @param {string} params.conversation - (Required) Required. The conversation to fetch suggestion for. Format: `projects//locations//conversations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.suggestions.suggestConversationSummary = (params) => this._makeRequest('v2/{+conversation}/suggestions:suggestConversationSummary', 'POST', params);

    /**
     * Get answers for the given query based on knowledge documents.
     * @param {string} params.conversation - (Required) Optional. The conversation (between human agent and end user) where the search request is triggered. Format: `projects//locations//conversations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.suggestions.searchKnowledge = (params) => this._makeRequest('v2/{+conversation}/suggestions:searchKnowledge', 'POST', params);

    /**
     * Generates all the suggestions using generators configured in the conversation profile. A generator is used only if its trigger event is matched.
     * @param {string} params.conversation - (Required) Required. The conversation for which the suggestions are generated. Format: `projects//locations//conversations/`. The conversation must be created with a conversation profile which has generators configured in it to be able to get suggestions.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversations.suggestions.generate = (params) => this._makeRequest('v2/{+conversation}/suggestions:generate', 'POST', params);

    this.projects.locations.suggestions = {};

    /**
     * Generates and returns a summary for a conversation that does not have a resource created for it.
     * @param {string} params.parent - (Required) Required. The parent resource to charge for the Summary's generation. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.suggestions.generateStatelessSummary = (params) => this._makeRequest('v2/{+parent}/suggestions:generateStatelessSummary', 'POST', params);

    /**
     * Get answers for the given query based on knowledge documents.
     * @param {string} params.parent - (Required) Required. The parent resource contains the conversation profile Format: 'projects/' or `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.suggestions.searchKnowledge = (params) => this._makeRequest('v2/{+parent}/suggestions:searchKnowledge', 'POST', params);

    this.projects.locations.statelessSuggestion = {};

    /**
     * Generates and returns a suggestion for a conversation that does not have a resource created for it.
     * @param {string} params.parent - (Required) Required. The parent resource to charge for the Suggestion's generation. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.statelessSuggestion.generate = (params) => this._makeRequest('v2/{+parent}/statelessSuggestion:generate', 'POST', params);

    this.projects.locations.conversationModels = {};

    /**
     * Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel
     * @param {string} params.parent - (Required) The project to create conversation model for. Format: `projects/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationModels.create = (params) => this._makeRequest('v2/{+parent}/conversationModels', 'POST', params);

    /**
     * Gets conversation model.
     * @param {string} params.name - (Required) Required. The conversation model to retrieve. Format: `projects//conversationModels/`
     * @return {object} The API response object.
     */
    this.projects.locations.conversationModels.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists conversation models.
     * @param {integer} params.pageSize - Optional. Maximum number of conversation models to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project to list all conversation models for. Format: `projects/`
     * @return {object} The API response object.
     */
    this.projects.locations.conversationModels.list = (params) => this._makeRequest('v2/{+parent}/conversationModels', 'GET', params);

    /**
     * Deletes a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeleteConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {string} params.name - (Required) Required. The conversation model to delete. Format: `projects//conversationModels/`
     * @return {object} The API response object.
     */
    this.projects.locations.conversationModels.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {string} params.name - (Required) Required. The conversation model to deploy. Format: `projects//conversationModels/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationModels.deploy = (params) => this._makeRequest('v2/{+name}:deploy', 'POST', params);

    /**
     * Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {string} params.name - (Required) Required. The conversation model to undeploy. Format: `projects//conversationModels/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationModels.undeploy = (params) => this._makeRequest('v2/{+name}:undeploy', 'POST', params);

    this.projects.locations.conversationModels.evaluations = {};

    /**
     * Gets an evaluation of conversation model.
     * @param {string} params.name - (Required) Required. The conversation model evaluation resource name. Format: `projects//conversationModels//evaluations/`
     * @return {object} The API response object.
     */
    this.projects.locations.conversationModels.evaluations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists evaluations of a conversation model.
     * @param {integer} params.pageSize - Optional. Maximum number of evaluations to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The conversation model resource name. Format: `projects//conversationModels/`
     * @return {object} The API response object.
     */
    this.projects.locations.conversationModels.evaluations.list = (params) => this._makeRequest('v2/{+parent}/evaluations', 'GET', params);

    /**
     * Creates evaluation of a conversation model.
     * @param {string} params.parent - (Required) Required. The conversation model resource name. Format: `projects//locations//conversationModels/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.conversationModels.evaluations.create = (params) => this._makeRequest('v2/{+parent}/evaluations', 'POST', params);

    this.projects.locations.encryptionSpec = {};

    /**
     * Initializes a location-level encryption key specification. An error will be thrown if the location has resources already created before the initialization. Once the encryption specification is initialized at a location, it is immutable and all newly created resources under the location will be encrypted with the existing specification.
     * @param {string} params.name - (Required) Immutable. The resource name of the encryption key specification resource. Format: projects/{project}/locations/{location}/encryptionSpec
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.encryptionSpec.initialize = (params) => this._makeRequest('v2/{+name}:initialize', 'POST', params);

    this.projects.locations.knowledgeBases = {};

    /**
     * Returns the list of all knowledge bases of the specified agent.
     * @param {string} params.filter - The filter expression used to filter knowledge bases returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * display_name with has(:) operator * language_code with equals(=) operator Examples: * 'language_code=en-us' matches knowledge bases with en-us language code. * 'display_name:articles' matches knowledge bases whose display name contains "articles". * 'display_name:"Best Articles"' matches knowledge bases whose display name contains "Best Articles". * 'language_code=en-gb AND display_name=articles' matches all knowledge bases whose display name contains "articles" and whose language code is "en-gb". Note: An empty filter string (i.e. "") is a no-op and will result in no filtering. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project to list of knowledge bases for. Format: `projects//locations/`.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.list = (params) => this._makeRequest('v2/{+parent}/knowledgeBases', 'GET', params);

    /**
     * Retrieves the specified knowledge base.
     * @param {string} params.name - (Required) Required. The name of the knowledge base to retrieve. Format `projects//locations//knowledgeBases/`.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a knowledge base.
     * @param {string} params.parent - (Required) Required. The project to create a knowledge base for. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.create = (params) => this._makeRequest('v2/{+parent}/knowledgeBases', 'POST', params);

    /**
     * Deletes the specified knowledge base.
     * @param {boolean} params.force - Optional. Force deletes the knowledge base. When set to true, any documents in the knowledge base are also deleted.
     * @param {string} params.name - (Required) Required. The name of the knowledge base to delete. Format: `projects//locations//knowledgeBases/`.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates the specified knowledge base.
     * @param {string} params.name - (Required) The knowledge base resource name. The name must be empty when creating a knowledge base. Format: `projects//locations//knowledgeBases/`.
     * @param {string} params.updateMask - Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.locations.knowledgeBases.documents = {};

    /**
     * Returns the list of all documents of the knowledge base.
     * @param {string} params.filter - The filter expression used to filter documents returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * knowledge_types with has(:) operator * display_name with has(:) operator * state with equals(=) operator Examples: * "knowledge_types:FAQ" matches documents with FAQ knowledge type. * "display_name:customer" matches documents whose display name contains "customer". * "state=ACTIVE" matches documents with ACTIVE state. * "knowledge_types:FAQ AND state=ACTIVE" matches all active FAQ documents. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The knowledge base to list all documents for. Format: `projects//locations//knowledgeBases/`.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.documents.list = (params) => this._makeRequest('v2/{+parent}/documents', 'GET', params);

    /**
     * Retrieves the specified document.
     * @param {string} params.name - (Required) Required. The name of the document to retrieve. Format `projects//locations//knowledgeBases//documents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.documents.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
     * @param {string} params.parent - (Required) Required. The knowledge base to create a document for. Format: `projects//locations//knowledgeBases/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.documents.create = (params) => this._makeRequest('v2/{+parent}/documents', 'POST', params);

    /**
     * Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
     * @param {string} params.parent - (Required) Required. The knowledge base to import documents into. Format: `projects//locations//knowledgeBases/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.documents.import = (params) => this._makeRequest('v2/{+parent}/documents:import', 'POST', params);

    /**
     * Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {string} params.name - (Required) Required. The name of the document to delete. Format: `projects//locations//knowledgeBases//documents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.documents.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
     * @param {string} params.name - (Required) Optional. The document resource name. The name must be empty when creating a document. Format: `projects//locations//knowledgeBases//documents/`.
     * @param {string} params.updateMask - Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.documents.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {string} params.name - (Required) Required. The name of the document to reload. Format: `projects//locations//knowledgeBases//documents/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.documents.reload = (params) => this._makeRequest('v2/{+name}:reload', 'POST', params);

    /**
     * Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
     * @param {string} params.name - (Required) Required. The name of the document to export. Format: `projects//locations//knowledgeBases//documents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.knowledgeBases.documents.export = (params) => this._makeRequest('v2/{+name}:export', 'POST', params);

    this.projects.locations.sipTrunks = {};

    /**
     * Creates a SipTrunk for a specified location.
     * @param {string} params.parent - (Required) Required. The location to create a SIP trunk for. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sipTrunks.create = (params) => this._makeRequest('v2/{+parent}/sipTrunks', 'POST', params);

    /**
     * Deletes a specified SipTrunk.
     * @param {string} params.name - (Required) Required. The name of the SIP trunk to delete. Format: `projects//locations//sipTrunks/`.
     * @return {object} The API response object.
     */
    this.projects.locations.sipTrunks.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Returns a list of SipTrunks in the specified location.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The location to list SIP trunks from. Format: `projects//locations/`.
     * @return {object} The API response object.
     */
    this.projects.locations.sipTrunks.list = (params) => this._makeRequest('v2/{+parent}/sipTrunks', 'GET', params);

    /**
     * Retrieves the specified SipTrunk.
     * @param {string} params.name - (Required) Required. The name of the SIP trunk to delete. Format: `projects//locations//sipTrunks/`.
     * @return {object} The API response object.
     */
    this.projects.locations.sipTrunks.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Updates the specified SipTrunk.
     * @param {string} params.name - (Required) Identifier. The unique identifier of the SIP trunk. Format: `projects//locations//sipTrunks/`.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.sipTrunks.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.agent = {};

    /**
     * Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project to list agents from. Format: `projects/`.
     * @return {object} The API response object.
     */
    this.projects.agent.search = (params) => this._makeRequest('v2/{+parent}/agent:search', 'GET', params);

    /**
     * Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The project that the agent to train is associated with. Format: `projects/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.train = (params) => this._makeRequest('v2/{+parent}/agent:train', 'POST', params);

    /**
     * Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
     * @param {string} params.parent - (Required) Required. The project that the agent to export is associated with. Format: `projects/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.export = (params) => this._makeRequest('v2/{+parent}/agent:export', 'POST', params);

    /**
     * Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The project that the agent to import is associated with. Format: `projects/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.import = (params) => this._makeRequest('v2/{+parent}/agent:import', 'POST', params);

    /**
     * Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The project that the agent to restore is associated with. Format: `projects/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.restore = (params) => this._makeRequest('v2/{+parent}/agent:restore', 'POST', params);

    /**
     * Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
     * @param {string} params.languageCode - Optional. The language for which you want a validation result. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.parent - (Required) Required. The project that the agent is associated with. Format: `projects/`.
     * @return {object} The API response object.
     */
    this.projects.agent.getValidationResult = (params) => this._makeRequest('v2/{+parent}/agent/validationResult', 'GET', params);

    /**
     * Retrieves the fulfillment.
     * @param {string} params.name - (Required) Required. The name of the fulfillment. Format: `projects//agent/fulfillment`.
     * @return {object} The API response object.
     */
    this.projects.agent.getFulfillment = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Updates the fulfillment.
     * @param {string} params.name - (Required) Required. The unique identifier of the fulfillment. Supported formats: - `projects//agent/fulfillment` - `projects//locations//agent/fulfillment` This field is not used for Fulfillment in an Environment.
     * @param {string} params.updateMask - Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.updateFulfillment = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.agent.sessions = {};

    /**
     * Deletes all active contexts in the specified session.
     * @param {string} params.parent - (Required) Required. The name of the session to delete all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.sessions.deleteContexts = (params) => this._makeRequest('v2/{+parent}/contexts', 'DELETE', params);

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {string} params.session - (Required) Required. The name of the session this query is sent to. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment (`Environment ID` might be referred to as environment name at some places). If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.sessions.detectIntent = (params) => this._makeRequest('v2/{+session}:detectIntent', 'POST', params);

    this.projects.agent.sessions.contexts = {};

    /**
     * Returns the list of all contexts in the specified session.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The session to list all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.sessions.contexts.list = (params) => this._makeRequest('v2/{+parent}/contexts', 'GET', params);

    /**
     * Retrieves the specified context.
     * @param {string} params.name - (Required) Required. The name of the context. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.sessions.contexts.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a context. If the specified context already exists, overrides the context.
     * @param {string} params.parent - (Required) Required. The session to create a context for. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.sessions.contexts.create = (params) => this._makeRequest('v2/{+parent}/contexts', 'POST', params);

    /**
     * Updates the specified context.
     * @param {string} params.name - (Required) Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.sessions.contexts.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified context.
     * @param {string} params.name - (Required) Required. The name of the context to delete. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.sessions.contexts.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.agent.sessions.entityTypes = {};

    /**
     * Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The session to list all session entity types from. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.sessions.entityTypes.list = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'GET', params);

    /**
     * Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.name - (Required) Required. The name of the session entity type. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.sessions.entityTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.parent - (Required) Required. The session to create a session entity type for. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.sessions.entityTypes.create = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'POST', params);

    /**
     * Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.name - (Required) Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.sessions.entityTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.name - (Required) Required. The name of the entity type to delete. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.sessions.entityTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.agent.intents = {};

    /**
     * Returns the list of all intents in the specified agent.
     * @param {string} params.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all intents from. Format: `projects//agent` or `projects//locations//agent`. Alternatively, you can specify the environment to list intents for. Format: `projects//agent/environments/` or `projects//locations//agent/environments/`. Note: training phrases of the intents will not be returned for non-draft environment.
     * @return {object} The API response object.
     */
    this.projects.agent.intents.list = (params) => this._makeRequest('v2/{+parent}/intents', 'GET', params);

    /**
     * Retrieves the specified intent.
     * @param {string} params.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} params.name - (Required) Required. The name of the intent. Format: `projects//agent/intents/`.
     * @return {object} The API response object.
     */
    this.projects.agent.intents.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} params.parent - (Required) Required. The agent to create a intent for. Format: `projects//agent`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.intents.create = (params) => this._makeRequest('v2/{+parent}/intents', 'POST', params);

    /**
     * Updates the specified intent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} params.name - (Required) Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Format: `projects//agent/intents/`.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.intents.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified intent and its direct or indirect followup intents. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.name - (Required) Required. The name of the intent to delete. If this intent has direct or indirect followup intents, we also delete them. Format: `projects//agent/intents/`.
     * @return {object} The API response object.
     */
    this.projects.agent.intents.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the agent to update or create intents in. Format: `projects//agent`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.intents.batchUpdate = (params) => this._makeRequest('v2/{+parent}/intents:batchUpdate', 'POST', params);

    /**
     * Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the agent to delete all entities types for. Format: `projects//agent`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.intents.batchDelete = (params) => this._makeRequest('v2/{+parent}/intents:batchDelete', 'POST', params);

    this.projects.agent.entityTypes = {};

    /**
     * Returns the list of all entity types in the specified agent.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all entity types from. Format: `projects//agent`.
     * @return {object} The API response object.
     */
    this.projects.agent.entityTypes.list = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'GET', params);

    /**
     * Retrieves the specified entity type.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} params.name - (Required) Required. The name of the entity type. Format: `projects//agent/entityTypes/`.
     * @return {object} The API response object.
     */
    this.projects.agent.entityTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates an entity type in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} params.parent - (Required) Required. The agent to create a entity type for. Format: `projects//agent`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.entityTypes.create = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'POST', params);

    /**
     * Updates the specified entity type. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} params.name - (Required) The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Format: `projects//agent/entityTypes/`.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.entityTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified entity type. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.name - (Required) Required. The name of the entity type to delete. Format: `projects//agent/entityTypes/`.
     * @return {object} The API response object.
     */
    this.projects.agent.entityTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the agent to update or create entity types in. Format: `projects//agent`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.entityTypes.batchUpdate = (params) => this._makeRequest('v2/{+parent}/entityTypes:batchUpdate', 'POST', params);

    /**
     * Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the agent to delete all entities types for. Format: `projects//agent`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.entityTypes.batchDelete = (params) => this._makeRequest('v2/{+parent}/entityTypes:batchDelete', 'POST', params);

    this.projects.agent.entityTypes.entities = {};

    /**
     * Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the entity type to create entities in. Format: `projects//agent/entityTypes/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.entityTypes.entities.batchCreate = (params) => this._makeRequest('v2/{+parent}/entities:batchCreate', 'POST', params);

    /**
     * Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the entity type to update or create entities in. Format: `projects//agent/entityTypes/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.entityTypes.entities.batchUpdate = (params) => this._makeRequest('v2/{+parent}/entities:batchUpdate', 'POST', params);

    /**
     * Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {string} params.parent - (Required) Required. The name of the entity type to delete entries for. Format: `projects//agent/entityTypes/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.entityTypes.entities.batchDelete = (params) => this._makeRequest('v2/{+parent}/entities:batchDelete', 'POST', params);

    this.projects.agent.environments = {};

    /**
     * Returns the list of all non-default environments of the specified agent.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all environments from. Format: - `projects//agent` - `projects//locations//agent`
     * @return {object} The API response object.
     */
    this.projects.agent.environments.list = (params) => this._makeRequest('v2/{+parent}/environments', 'GET', params);

    /**
     * Retrieves the specified agent environment.
     * @param {string} params.name - (Required) Required. The name of the environment. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates an agent environment.
     * @param {string} params.environmentId - Required. The unique id of the new environment.
     * @param {string} params.parent - (Required) Required. The agent to create an environment for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.create = (params) => this._makeRequest('v2/{+parent}/environments', 'POST', params);

    /**
     * Updates the specified agent environment. This method allows you to deploy new agent versions into the environment. When an environment is pointed to a new agent version by setting `environment.agent_version`, the environment is temporarily set to the `LOADING` state. During that time, the environment continues serving the previous version of the agent. After the new agent version is done loading, the environment is set back to the `RUNNING` state. You can use "-" as Environment ID in environment name to update an agent version in the default environment. WARNING: this will negate all recent changes to the draft agent and can't be undone. You may want to save the draft agent to a version before calling this method.
     * @param {boolean} params.allowLoadToDraftAndDiscardChanges - Optional. This field is used to prevent accidental overwrite of the default environment, which is an operation that cannot be undone. To confirm that the caller desires this overwrite, this field must be explicitly set to true when updating the default environment (environment ID = `-`).
     * @param {string} params.name - (Required) Output only. The unique identifier of this agent environment. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`.
     * @param {string} params.updateMask - Required. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified agent environment.
     * @param {string} params.name - (Required) Required. The name of the environment to delete. / Format: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Gets the history of the specified environment.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The name of the environment to retrieve history for. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/` The environment ID for the default environment is `-`.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.getHistory = (params) => this._makeRequest('v2/{+parent}/history', 'GET', params);

    this.projects.agent.environments.users = {};

    this.projects.agent.environments.users.sessions = {};

    /**
     * Deletes all active contexts in the specified session.
     * @param {string} params.parent - (Required) Required. The name of the session to delete all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.users.sessions.deleteContexts = (params) => this._makeRequest('v2/{+parent}/contexts', 'DELETE', params);

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {string} params.session - (Required) Required. The name of the session this query is sent to. Format: `projects//agent/sessions/`, or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment (`Environment ID` might be referred to as environment name at some places). If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.users.sessions.detectIntent = (params) => this._makeRequest('v2/{+session}:detectIntent', 'POST', params);

    this.projects.agent.environments.users.sessions.contexts = {};

    /**
     * Returns the list of all contexts in the specified session.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The session to list all contexts from. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.users.sessions.contexts.list = (params) => this._makeRequest('v2/{+parent}/contexts', 'GET', params);

    /**
     * Retrieves the specified context.
     * @param {string} params.name - (Required) Required. The name of the context. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.users.sessions.contexts.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a context. If the specified context already exists, overrides the context.
     * @param {string} params.parent - (Required) Required. The session to create a context for. Format: `projects//agent/sessions/` or `projects//agent/environments//users//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.users.sessions.contexts.create = (params) => this._makeRequest('v2/{+parent}/contexts', 'POST', params);

    /**
     * Updates the specified context.
     * @param {string} params.name - (Required) Required. The unique identifier of the context. Format: `projects//agent/sessions//contexts/`, or `projects//agent/environments//users//sessions//contexts/`. The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.users.sessions.contexts.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified context.
     * @param {string} params.name - (Required) Required. The name of the context to delete. Format: `projects//agent/sessions//contexts/` or `projects//agent/environments//users//sessions//contexts/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.users.sessions.contexts.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.agent.environments.users.sessions.entityTypes = {};

    /**
     * Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The session to list all session entity types from. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.users.sessions.entityTypes.list = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'GET', params);

    /**
     * Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.name - (Required) Required. The name of the session entity type. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.users.sessions.entityTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.parent - (Required) Required. The session to create a session entity type for. Format: `projects//agent/sessions/` or `projects//agent/environments//users// sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.users.sessions.entityTypes.create = (params) => this._makeRequest('v2/{+parent}/entityTypes', 'POST', params);

    /**
     * Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.name - (Required) Required. The unique identifier of this session entity type. Format: `projects//agent/sessions//entityTypes/`, or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.users.sessions.entityTypes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {string} params.name - (Required) Required. The name of the entity type to delete. Format: `projects//agent/sessions//entityTypes/` or `projects//agent/environments//users//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.users.sessions.entityTypes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.agent.environments.intents = {};

    /**
     * Returns the list of all intents in the specified agent.
     * @param {string} params.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} params.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all intents from. Format: `projects//agent` or `projects//locations//agent`. Alternatively, you can specify the environment to list intents for. Format: `projects//agent/environments/` or `projects//locations//agent/environments/`. Note: training phrases of the intents will not be returned for non-draft environment.
     * @return {object} The API response object.
     */
    this.projects.agent.environments.intents.list = (params) => this._makeRequest('v2/{+parent}/intents', 'GET', params);

    this.projects.agent.knowledgeBases = {};

    /**
     * Returns the list of all knowledge bases of the specified agent.
     * @param {string} params.filter - The filter expression used to filter knowledge bases returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * display_name with has(:) operator * language_code with equals(=) operator Examples: * 'language_code=en-us' matches knowledge bases with en-us language code. * 'display_name:articles' matches knowledge bases whose display name contains "articles". * 'display_name:"Best Articles"' matches knowledge bases whose display name contains "Best Articles". * 'language_code=en-gb AND display_name=articles' matches all knowledge bases whose display name contains "articles" and whose language code is "en-gb". Note: An empty filter string (i.e. "") is a no-op and will result in no filtering. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project to list of knowledge bases for. Format: `projects//locations/`.
     * @return {object} The API response object.
     */
    this.projects.agent.knowledgeBases.list = (params) => this._makeRequest('v2/{+parent}/knowledgeBases', 'GET', params);

    /**
     * Retrieves the specified knowledge base.
     * @param {string} params.name - (Required) Required. The name of the knowledge base to retrieve. Format `projects//locations//knowledgeBases/`.
     * @return {object} The API response object.
     */
    this.projects.agent.knowledgeBases.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a knowledge base.
     * @param {string} params.parent - (Required) Required. The project to create a knowledge base for. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.knowledgeBases.create = (params) => this._makeRequest('v2/{+parent}/knowledgeBases', 'POST', params);

    /**
     * Deletes the specified knowledge base.
     * @param {boolean} params.force - Optional. Force deletes the knowledge base. When set to true, any documents in the knowledge base are also deleted.
     * @param {string} params.name - (Required) Required. The name of the knowledge base to delete. Format: `projects//locations//knowledgeBases/`.
     * @return {object} The API response object.
     */
    this.projects.agent.knowledgeBases.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates the specified knowledge base.
     * @param {string} params.name - (Required) The knowledge base resource name. The name must be empty when creating a knowledge base. Format: `projects//locations//knowledgeBases/`.
     * @param {string} params.updateMask - Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.knowledgeBases.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.agent.knowledgeBases.documents = {};

    /**
     * Returns the list of all documents of the knowledge base.
     * @param {string} params.filter - The filter expression used to filter documents returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * knowledge_types with has(:) operator * display_name with has(:) operator * state with equals(=) operator Examples: * "knowledge_types:FAQ" matches documents with FAQ knowledge type. * "display_name:customer" matches documents whose display name contains "customer". * "state=ACTIVE" matches documents with ACTIVE state. * "knowledge_types:FAQ AND state=ACTIVE" matches all active FAQ documents. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The knowledge base to list all documents for. Format: `projects//locations//knowledgeBases/`.
     * @return {object} The API response object.
     */
    this.projects.agent.knowledgeBases.documents.list = (params) => this._makeRequest('v2/{+parent}/documents', 'GET', params);

    /**
     * Retrieves the specified document.
     * @param {string} params.name - (Required) Required. The name of the document to retrieve. Format `projects//locations//knowledgeBases//documents/`.
     * @return {object} The API response object.
     */
    this.projects.agent.knowledgeBases.documents.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
     * @param {string} params.parent - (Required) Required. The knowledge base to create a document for. Format: `projects//locations//knowledgeBases/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.knowledgeBases.documents.create = (params) => this._makeRequest('v2/{+parent}/documents', 'POST', params);

    /**
     * Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {string} params.name - (Required) Required. The name of the document to delete. Format: `projects//locations//knowledgeBases//documents/`.
     * @return {object} The API response object.
     */
    this.projects.agent.knowledgeBases.documents.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
     * @param {string} params.name - (Required) Optional. The document resource name. The name must be empty when creating a document. Format: `projects//locations//knowledgeBases//documents/`.
     * @param {string} params.updateMask - Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.knowledgeBases.documents.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {string} params.name - (Required) Required. The name of the document to reload. Format: `projects//locations//knowledgeBases//documents/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.knowledgeBases.documents.reload = (params) => this._makeRequest('v2/{+name}:reload', 'POST', params);

    this.projects.agent.versions = {};

    /**
     * Returns the list of all versions of the specified agent.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all versions from. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @return {object} The API response object.
     */
    this.projects.agent.versions.list = (params) => this._makeRequest('v2/{+parent}/versions', 'GET', params);

    /**
     * Retrieves the specified agent version.
     * @param {string} params.name - (Required) Required. The name of the version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     * @return {object} The API response object.
     */
    this.projects.agent.versions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates an agent version. The new version points to the agent instance in the "default" environment.
     * @param {string} params.parent - (Required) Required. The agent to create a version for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.versions.create = (params) => this._makeRequest('v2/{+parent}/versions', 'POST', params);

    /**
     * Updates the specified agent version. Note that this method does not allow you to update the state of the agent the given version points to. It allows you to update only mutable properties of the version resource.
     * @param {string} params.name - (Required) Output only. The unique identifier of this agent version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     * @param {string} params.updateMask - Required. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agent.versions.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Delete the specified agent version.
     * @param {string} params.name - (Required) Required. The name of the version to delete. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     * @return {object} The API response object.
     */
    this.projects.agent.versions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.generators = {};

    /**
     * Creates a generator.
     * @param {string} params.generatorId - Optional. The ID to use for the generator, which will become the final component of the generator's resource name. The generator ID must be compliant with the regression formula `a-zA-Z*` with the characters length in range of [3,64]. If the field is not provided, an Id will be auto-generated. If the field is provided, the caller is responsible for 1. the uniqueness of the ID, otherwise the request will be rejected. 2. the consistency for whether to use custom ID or not under a project to better ensure uniqueness.
     * @param {string} params.parent - (Required) Required. The project/location to create generator for. Format: `projects//locations/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.generators.create = (params) => this._makeRequest('v2/{+parent}/generators', 'POST', params);

    /**
     * Lists generators.
     * @param {integer} params.pageSize - Optional. Maximum number of conversation models to return in a single page. Default to 10.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project/location to list generators for. Format: `projects//locations/`
     * @return {object} The API response object.
     */
    this.projects.generators.list = (params) => this._makeRequest('v2/{+parent}/generators', 'GET', params);

    this.projects.answerRecords = {};

    /**
     * Returns the list of all answer records in the specified project in reverse chronological order.
     * @param {string} params.filter - Optional. Filters to restrict results to specific answer records. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * conversation_id with equals(=) operator Examples: * `conversation_id=bar` matches answer records in the `projects/foo/locations/global/conversations/bar` conversation (assuming the parent is `projects/foo/locations/global`). For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} params.pageSize - Optional. The maximum number of records to return in a single page. The server may return fewer records than this. If unspecified, we use 10. The maximum is 100.
     * @param {string} params.pageToken - Optional. The ListAnswerRecordsResponse.next_page_token value returned from a previous list request used to continue listing on the next page.
     * @param {string} params.parent - (Required) Required. The project to list all answer records for in reverse chronological order. Format: `projects//locations/`.
     * @return {object} The API response object.
     */
    this.projects.answerRecords.list = (params) => this._makeRequest('v2/{+parent}/answerRecords', 'GET', params);

    /**
     * Updates the specified answer record.
     * @param {string} params.name - (Required) The unique identifier of this answer record. Format: `projects//locations//answerRecords/`.
     * @param {string} params.updateMask - Required. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.answerRecords.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.conversationDatasets = {};

    /**
     * Retrieves the specified conversation dataset.
     * @param {string} params.name - (Required) Required. The conversation dataset to retrieve. Format: `projects//locations//conversationDatasets/`
     * @return {object} The API response object.
     */
    this.projects.conversationDatasets.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Returns the list of all conversation datasets in the specified project and location.
     * @param {integer} params.pageSize - Optional. Maximum number of conversation datasets to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project and location name to list all conversation datasets for. Format: `projects//locations/`
     * @return {object} The API response object.
     */
    this.projects.conversationDatasets.list = (params) => this._makeRequest('v2/{+parent}/conversationDatasets', 'GET', params);

    /**
     * Import data into the specified conversation dataset. Note that it is not allowed to import data to a conversation dataset that already has data in it. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportConversationDataOperationMetadata - `response`: ImportConversationDataOperationResponse
     * @param {string} params.name - (Required) Required. Dataset resource name. Format: `projects//locations//conversationDatasets/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversationDatasets.importConversationData = (params) => this._makeRequest('v2/{+name}:importConversationData', 'POST', params);

    this.projects.conversationProfiles = {};

    /**
     * Returns the list of all conversation profiles in the specified project.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project to list all conversation profiles from. Format: `projects//locations/`.
     * @return {object} The API response object.
     */
    this.projects.conversationProfiles.list = (params) => this._makeRequest('v2/{+parent}/conversationProfiles', 'GET', params);

    /**
     * Retrieves the specified conversation profile.
     * @param {string} params.name - (Required) Required. The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/`.
     * @return {object} The API response object.
     */
    this.projects.conversationProfiles.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a conversation profile in the specified project. ConversationProfile.create_time and ConversationProfile.update_time aren't populated in the response. You can retrieve them via GetConversationProfile API.
     * @param {string} params.parent - (Required) Required. The project to create a conversation profile for. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversationProfiles.create = (params) => this._makeRequest('v2/{+parent}/conversationProfiles', 'POST', params);

    /**
     * Updates the specified conversation profile. ConversationProfile.create_time and ConversationProfile.update_time aren't populated in the response. You can retrieve them via GetConversationProfile API.
     * @param {string} params.name - (Required) The unique identifier of this conversation profile. Format: `projects//locations//conversationProfiles/`.
     * @param {string} params.updateMask - Required. The mask to control which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversationProfiles.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes the specified conversation profile.
     * @param {string} params.name - (Required) Required. The name of the conversation profile to delete. Format: `projects//locations//conversationProfiles/`.
     * @return {object} The API response object.
     */
    this.projects.conversationProfiles.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
     * @param {string} params.conversationProfile - (Required) Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects//locations//conversationProfiles/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversationProfiles.setSuggestionFeatureConfig = (params) => this._makeRequest('v2/{+conversationProfile}:setSuggestionFeatureConfig', 'POST', params);

    /**
     * Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
     * @param {string} params.conversationProfile - (Required) Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects//locations//conversationProfiles/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversationProfiles.clearSuggestionFeatureConfig = (params) => this._makeRequest('v2/{+conversationProfile}:clearSuggestionFeatureConfig', 'POST', params);

    this.projects.conversations = {};

    /**
     * Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
     * @param {string} params.conversationId - Optional. Identifier of the conversation. Generally it's auto generated by Google. Only set it if you cannot wait for the response to return a auto-generated one to you. The conversation ID must be compliant with the regression formula `a-zA-Z*` with the characters length in range of [3,64]. If the field is provided, the caller is responsible for 1. the uniqueness of the ID, otherwise the request will be rejected. 2. the consistency for whether to use custom ID or not under a project to better ensure uniqueness.
     * @param {string} params.parent - (Required) Required. Resource identifier of the project creating the conversation. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversations.create = (params) => this._makeRequest('v2/{+parent}/conversations', 'POST', params);

    /**
     * Returns the list of all conversations in the specified project.
     * @param {string} params.filter - Optional. A filter expression that filters conversations listed in the response. Only `lifecycle_state` can be filtered on in this way. For example, the following expression only returns `COMPLETED` conversations: `lifecycle_state = "COMPLETED"` For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project from which to list all conversation. Format: `projects//locations/`.
     * @return {object} The API response object.
     */
    this.projects.conversations.list = (params) => this._makeRequest('v2/{+parent}/conversations', 'GET', params);

    /**
     * Retrieves the specific conversation.
     * @param {string} params.name - (Required) Required. The name of the conversation. Format: `projects//locations//conversations/`.
     * @return {object} The API response object.
     */
    this.projects.conversations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Completes the specified conversation. Finished conversations are purged from the database after 30 days.
     * @param {string} params.name - (Required) Required. Resource identifier of the conversation to close. Format: `projects//locations//conversations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversations.complete = (params) => this._makeRequest('v2/{+name}:complete', 'POST', params);

    this.projects.conversations.participants = {};

    /**
     * Creates a new participant in a conversation.
     * @param {string} params.parent - (Required) Required. Resource identifier of the conversation adding the participant. Format: `projects//locations//conversations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversations.participants.create = (params) => this._makeRequest('v2/{+parent}/participants', 'POST', params);

    /**
     * Retrieves a conversation participant.
     * @param {string} params.name - (Required) Required. The name of the participant. Format: `projects//locations//conversations//participants/`.
     * @return {object} The API response object.
     */
    this.projects.conversations.participants.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Returns the list of all participants in the specified conversation.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The conversation to list all participants from. Format: `projects//locations//conversations/`.
     * @return {object} The API response object.
     */
    this.projects.conversations.participants.list = (params) => this._makeRequest('v2/{+parent}/participants', 'GET', params);

    /**
     * Updates the specified participant.
     * @param {string} params.name - (Required) Optional. The unique identifier of this participant. Format: `projects//locations//conversations//participants/`.
     * @param {string} params.updateMask - Required. The mask to specify which fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversations.participants.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {string} params.participant - (Required) Required. The name of the participant this text comes from. Format: `projects//locations//conversations//participants/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversations.participants.analyzeContent = (params) => this._makeRequest('v2/{+participant}:analyzeContent', 'POST', params);

    this.projects.conversations.participants.suggestions = {};

    /**
     * Gets suggested articles for a participant based on specific historical messages.
     * @param {string} params.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversations.participants.suggestions.suggestArticles = (params) => this._makeRequest('v2/{+parent}/suggestions:suggestArticles', 'POST', params);

    /**
     * Gets suggested faq answers for a participant based on specific historical messages.
     * @param {string} params.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversations.participants.suggestions.suggestFaqAnswers = (params) => this._makeRequest('v2/{+parent}/suggestions:suggestFaqAnswers', 'POST', params);

    /**
     * Gets smart replies for a participant based on specific historical messages.
     * @param {string} params.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversations.participants.suggestions.suggestSmartReplies = (params) => this._makeRequest('v2/{+parent}/suggestions:suggestSmartReplies', 'POST', params);

    /**
     * Gets knowledge assist suggestions based on historical messages.
     * @param {string} params.parent - (Required) Required. The name of the participant to fetch suggestions for. Format: `projects//locations//conversations//participants/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversations.participants.suggestions.suggestKnowledgeAssist = (params) => this._makeRequest('v2/{+parent}/suggestions:suggestKnowledgeAssist', 'POST', params);

    this.projects.conversations.messages = {};

    /**
     * Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
     * @param {string} params.filter - Optional. Filter on message fields. Currently predicates on `create_time` and `create_time_epoch_microseconds` are supported. `create_time` only support milliseconds accuracy. E.g., `create_time_epoch_microseconds > 1551790877964485` or `create_time > 2017-01-15T01:30:15.01Z`. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The name of the conversation to list messages for. Format: `projects//locations//conversations/`
     * @return {object} The API response object.
     */
    this.projects.conversations.messages.list = (params) => this._makeRequest('v2/{+parent}/messages', 'GET', params);

    this.projects.conversations.suggestions = {};

    /**
     * Suggests summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.
     * @param {string} params.conversation - (Required) Required. The conversation to fetch suggestion for. Format: `projects//locations//conversations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversations.suggestions.suggestConversationSummary = (params) => this._makeRequest('v2/{+conversation}/suggestions:suggestConversationSummary', 'POST', params);

    /**
     * Get answers for the given query based on knowledge documents.
     * @param {string} params.conversation - (Required) Optional. The conversation (between human agent and end user) where the search request is triggered. Format: `projects//locations//conversations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversations.suggestions.searchKnowledge = (params) => this._makeRequest('v2/{+conversation}/suggestions:searchKnowledge', 'POST', params);

    /**
     * Generates all the suggestions using generators configured in the conversation profile. A generator is used only if its trigger event is matched.
     * @param {string} params.conversation - (Required) Required. The conversation for which the suggestions are generated. Format: `projects//locations//conversations/`. The conversation must be created with a conversation profile which has generators configured in it to be able to get suggestions.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversations.suggestions.generate = (params) => this._makeRequest('v2/{+conversation}/suggestions:generate', 'POST', params);

    this.projects.suggestions = {};

    /**
     * Generates and returns a summary for a conversation that does not have a resource created for it.
     * @param {string} params.parent - (Required) Required. The parent resource to charge for the Summary's generation. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.suggestions.generateStatelessSummary = (params) => this._makeRequest('v2/{+parent}/suggestions:generateStatelessSummary', 'POST', params);

    /**
     * Get answers for the given query based on knowledge documents.
     * @param {string} params.parent - (Required) Required. The parent resource contains the conversation profile Format: 'projects/' or `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.suggestions.searchKnowledge = (params) => this._makeRequest('v2/{+parent}/suggestions:searchKnowledge', 'POST', params);

    this.projects.conversationModels = {};

    /**
     * Creates a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateConversationModelOperationMetadata - `response`: ConversationModel
     * @param {string} params.parent - (Required) The project to create conversation model for. Format: `projects/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversationModels.create = (params) => this._makeRequest('v2/{+parent}/conversationModels', 'POST', params);

    /**
     * Gets conversation model.
     * @param {string} params.name - (Required) Required. The conversation model to retrieve. Format: `projects//conversationModels/`
     * @return {object} The API response object.
     */
    this.projects.conversationModels.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists conversation models.
     * @param {integer} params.pageSize - Optional. Maximum number of conversation models to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project to list all conversation models for. Format: `projects/`
     * @return {object} The API response object.
     */
    this.projects.conversationModels.list = (params) => this._makeRequest('v2/{+parent}/conversationModels', 'GET', params);

    /**
     * Deletes a model. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeleteConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {string} params.name - (Required) Required. The conversation model to delete. Format: `projects//conversationModels/`
     * @return {object} The API response object.
     */
    this.projects.conversationModels.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Deploys a model. If a model is already deployed, deploying it has no effect. A model can only serve prediction requests after it gets deployed. For article suggestion, custom model will not be used unless it is deployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {string} params.name - (Required) Required. The conversation model to deploy. Format: `projects//conversationModels/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversationModels.deploy = (params) => this._makeRequest('v2/{+name}:deploy', 'POST', params);

    /**
     * Undeploys a model. If the model is not deployed this method has no effect. If the model is currently being used: - For article suggestion, article suggestion will fallback to the default model if model is undeployed. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: UndeployConversationModelOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {string} params.name - (Required) Required. The conversation model to undeploy. Format: `projects//conversationModels/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.conversationModels.undeploy = (params) => this._makeRequest('v2/{+name}:undeploy', 'POST', params);

    this.projects.conversationModels.evaluations = {};

    /**
     * Gets an evaluation of conversation model.
     * @param {string} params.name - (Required) Required. The conversation model evaluation resource name. Format: `projects//conversationModels//evaluations/`
     * @return {object} The API response object.
     */
    this.projects.conversationModels.evaluations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists evaluations of a conversation model.
     * @param {integer} params.pageSize - Optional. Maximum number of evaluations to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The conversation model resource name. Format: `projects//conversationModels/`
     * @return {object} The API response object.
     */
    this.projects.conversationModels.evaluations.list = (params) => this._makeRequest('v2/{+parent}/evaluations', 'GET', params);

    this.projects.knowledgeBases = {};

    /**
     * Returns the list of all knowledge bases of the specified agent.
     * @param {string} params.filter - The filter expression used to filter knowledge bases returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * display_name with has(:) operator * language_code with equals(=) operator Examples: * 'language_code=en-us' matches knowledge bases with en-us language code. * 'display_name:articles' matches knowledge bases whose display name contains "articles". * 'display_name:"Best Articles"' matches knowledge bases whose display name contains "Best Articles". * 'language_code=en-gb AND display_name=articles' matches all knowledge bases whose display name contains "articles" and whose language code is "en-gb". Note: An empty filter string (i.e. "") is a no-op and will result in no filtering. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The project to list of knowledge bases for. Format: `projects//locations/`.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.list = (params) => this._makeRequest('v2/{+parent}/knowledgeBases', 'GET', params);

    /**
     * Retrieves the specified knowledge base.
     * @param {string} params.name - (Required) Required. The name of the knowledge base to retrieve. Format `projects//locations//knowledgeBases/`.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a knowledge base.
     * @param {string} params.parent - (Required) Required. The project to create a knowledge base for. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.create = (params) => this._makeRequest('v2/{+parent}/knowledgeBases', 'POST', params);

    /**
     * Deletes the specified knowledge base.
     * @param {boolean} params.force - Optional. Force deletes the knowledge base. When set to true, any documents in the knowledge base are also deleted.
     * @param {string} params.name - (Required) Required. The name of the knowledge base to delete. Format: `projects//locations//knowledgeBases/`.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates the specified knowledge base.
     * @param {string} params.name - (Required) The knowledge base resource name. The name must be empty when creating a knowledge base. Format: `projects//locations//knowledgeBases/`.
     * @param {string} params.updateMask - Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    this.projects.knowledgeBases.documents = {};

    /**
     * Returns the list of all documents of the knowledge base.
     * @param {string} params.filter - The filter expression used to filter documents returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * knowledge_types with has(:) operator * display_name with has(:) operator * state with equals(=) operator Examples: * "knowledge_types:FAQ" matches documents with FAQ knowledge type. * "display_name:customer" matches documents whose display name contains "customer". * "state=ACTIVE" matches documents with ACTIVE state. * "knowledge_types:FAQ AND state=ACTIVE" matches all active FAQ documents. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The knowledge base to list all documents for. Format: `projects//locations//knowledgeBases/`.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.documents.list = (params) => this._makeRequest('v2/{+parent}/documents', 'GET', params);

    /**
     * Retrieves the specified document.
     * @param {string} params.name - (Required) Required. The name of the document to retrieve. Format `projects//locations//knowledgeBases//documents/`.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.documents.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
     * @param {string} params.parent - (Required) Required. The knowledge base to create a document for. Format: `projects//locations//knowledgeBases/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.documents.create = (params) => this._makeRequest('v2/{+parent}/documents', 'POST', params);

    /**
     * Creates documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
     * @param {string} params.parent - (Required) Required. The knowledge base to import documents into. Format: `projects//locations//knowledgeBases/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.documents.import = (params) => this._makeRequest('v2/{+parent}/documents:import', 'POST', params);

    /**
     * Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {string} params.name - (Required) Required. The name of the document to delete. Format: `projects//locations//knowledgeBases//documents/`.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.documents.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
     * @param {string} params.name - (Required) Optional. The document resource name. The name must be empty when creating a document. Format: `projects//locations//knowledgeBases//documents/`.
     * @param {string} params.updateMask - Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.documents.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {string} params.name - (Required) Required. The name of the document to reload. Format: `projects//locations//knowledgeBases//documents/`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.documents.reload = (params) => this._makeRequest('v2/{+name}:reload', 'POST', params);

    /**
     * Exports a smart messaging candidate document into the specified destination. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document
     * @param {string} params.name - (Required) Required. The name of the document to export. Format: `projects//locations//knowledgeBases//documents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.knowledgeBases.documents.export = (params) => this._makeRequest('v2/{+name}:export', 'POST', params);
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
