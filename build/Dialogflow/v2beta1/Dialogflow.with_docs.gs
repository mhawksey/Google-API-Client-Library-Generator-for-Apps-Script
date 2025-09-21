
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dialogflow.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    /**
     * Retrieves the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent to fetch is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.getAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent', 'GET', apiParams, clientConfig);

    /**
     * Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project of this agent. Format: `projects/` or `projects//locations/`
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.setAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent to delete is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.deleteAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent', 'DELETE', apiParams, clientConfig);

    this.projects.operations = {};

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
    this.projects.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.agent = {};

    /**
     * Retrieves the fulfillment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the fulfillment. Supported formats: - `projects//agent/fulfillment` - `projects//locations//agent/fulfillment`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.getFulfillment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the fulfillment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of the fulfillment. Supported formats: - `projects//agent/fulfillment` - `projects//locations//agent/fulfillment` This field is not used for Fulfillment in an Environment.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.updateFulfillment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project to list agents from. Format: `projects/` or `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:search', 'GET', apiParams, clientConfig);

    /**
     * Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent to train is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.train = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:train', 'POST', apiParams, clientConfig);

    /**
     * Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent to export is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:export', 'POST', apiParams, clientConfig);

    /**
     * Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent to import is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:import', 'POST', apiParams, clientConfig);

    /**
     * Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent to restore is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:restore', 'POST', apiParams, clientConfig);

    /**
     * Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The language for which you want a validation result. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.getValidationResult = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent/validationResult', 'GET', apiParams, clientConfig);

    this.projects.agent.environments = {};

    /**
     * Returns the list of all non-draft environments of the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all environments from. Format: - `projects//agent` - `projects//locations//agent`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/environments', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified agent environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the environment. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an agent environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environmentId - Required. The unique id of the new environment.
     * @param {string} apiParams.parent - (Required) Required. The agent to create an environment for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/environments', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified agent environment. This method allows you to deploy new agent versions into the environment. When an environment is pointed to a new agent version by setting `environment.agent_version`, the environment is temporarily set to the `LOADING` state. During that time, the environment keeps on serving the previous version of the agent. After the new agent version is done loading, the environment is set back to the `RUNNING` state. You can use "-" as Environment ID in environment name to update version in "draft" environment. WARNING: this will negate all recent changes to draft and can't be undone. You may want to save the draft to a version before calling this function.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowLoadToDraftAndDiscardChanges - Optional. This field is used to prevent accidental overwrite of the draft environment, which is an operation that cannot be undone. To confirm that the caller desires this overwrite, this field must be explicitly set to true when updating the draft environment (environment ID = `-`).
     * @param {string} apiParams.name - (Required) Output only. The unique identifier of this agent environment. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/`
     * @param {string} apiParams.updateMask - Required. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified agent environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the environment to delete. / Format: - `projects//agent/environments/` - `projects//locations//agent/environments/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the history of the specified environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The name of the environment to retrieve history for. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.getHistory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/history', 'GET', apiParams, clientConfig);

    this.projects.agent.environments.users = {};

    this.projects.agent.environments.users.sessions = {};

    /**
     * Deletes all active contexts in the specified session.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the session to delete all contexts from. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.users.sessions.deleteContexts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'DELETE', apiParams, clientConfig);

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session this query is sent to. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment (`Environment ID` might be referred to as environment name at some places). If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.users.sessions.detectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+session}:detectIntent', 'POST', apiParams, clientConfig);

    this.projects.agent.environments.users.sessions.contexts = {};

    /**
     * Returns the list of all contexts in the specified session.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The session to list all contexts from. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.users.sessions.contexts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.users.sessions.contexts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a context. If the specified context already exists, overrides the context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The session to create a context for. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.users.sessions.contexts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.users.sessions.contexts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the context to delete. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.users.sessions.contexts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.agent.environments.users.sessions.entityTypes = {};

    /**
     * Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The session to list all session entity types from. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.users.sessions.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.users.sessions.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The session to create a session entity type for. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.users.sessions.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of this session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.users.sessions.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the entity type to delete. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.users.sessions.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.agent.environments.intents = {};

    /**
     * Returns the list of all intents in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all intents from. Format: `projects//agent` or `projects//locations//agent`. Alternatively, you can specify the environment to list intents for. Format: `projects//agent/environments/` or `projects//locations//agent/environments/`. Note: training phrases of the intents will not be returned for non-draft environment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.environments.intents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents', 'GET', apiParams, clientConfig);

    this.projects.agent.sessions = {};

    /**
     * Deletes all active contexts in the specified session.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the session to delete all contexts from. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.sessions.deleteContexts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'DELETE', apiParams, clientConfig);

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session this query is sent to. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment (`Environment ID` might be referred to as environment name at some places). If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.sessions.detectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+session}:detectIntent', 'POST', apiParams, clientConfig);

    this.projects.agent.sessions.contexts = {};

    /**
     * Returns the list of all contexts in the specified session.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The session to list all contexts from. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.sessions.contexts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.sessions.contexts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a context. If the specified context already exists, overrides the context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The session to create a context for. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.sessions.contexts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.sessions.contexts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the context to delete. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.sessions.contexts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.agent.sessions.entityTypes = {};

    /**
     * Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The session to list all session entity types from. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.sessions.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.sessions.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The session to create a session entity type for. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.sessions.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of this session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.sessions.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the entity type to delete. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.sessions.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.agent.intents = {};

    /**
     * Returns the list of all intents in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all intents from. Format: `projects//agent` or `projects//locations//agent`. Alternatively, you can specify the environment to list intents for. Format: `projects//agent/environments/` or `projects//locations//agent/environments/`. Note: training phrases of the intents will not be returned for non-draft environment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.intents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified intent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} apiParams.name - (Required) Required. The name of the intent. Supported formats: - `projects//agent/intents/` - `projects//locations//agent/intents/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.intents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} apiParams.parent - (Required) Required. The agent to create a intent for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.intents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified intent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} apiParams.name - (Required) Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Supported formats: - `projects//agent/intents/` - `projects//locations//agent/intents/`
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.intents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified intent and its direct or indirect followup intents. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the intent to delete. If this intent has direct or indirect followup intents, we also delete them. Supported formats: - `projects//agent/intents/` - `projects//locations//agent/intents/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.intents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the agent to update or create intents in. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.intents.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the agent to delete all entities types for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.intents.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.agent.entityTypes = {};

    /**
     * Returns the list of all entity types in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all entity types from. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified entity type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} apiParams.name - (Required) Required. The name of the entity type. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an entity type in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} apiParams.parent - (Required) Required. The agent to create a entity type for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified entity type. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} apiParams.name - (Required) The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified entity type. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the entity type to delete. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the agent to update or create entity types in. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.entityTypes.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the agent to delete all entities types for. Supported formats: - `projects//agent`, - `projects//locations//agent`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.entityTypes.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.agent.entityTypes.entities = {};

    /**
     * Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the entity type to create entities in. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.entityTypes.entities.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entities:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the entity type to update or create entities in. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.entityTypes.entities.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entities:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the entity type to delete entries for. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.entityTypes.entities.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entities:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.agent.knowledgeBases = {};

    /**
     * Returns the list of all knowledge bases of the specified agent. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression used to filter knowledge bases returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * display_name with has(:) operator * language_code with equals(=) operator Examples: * 'language_code=en-us' matches knowledge bases with en-us language code. * 'display_name:articles' matches knowledge bases whose display name contains "articles". * 'display_name:"Best Articles"' matches knowledge bases whose display name contains "Best Articles". * 'language_code=en-gb AND display_name=articles' matches all knowledge bases whose display name contains "articles" and whose language code is "en-gb". Note: An empty filter string (i.e. "") is a no-op and will result in no filtering. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project to list of knowledge bases for. Format: `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.knowledgeBases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the knowledge base to retrieve. Format `projects//locations//knowledgeBases/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.knowledgeBases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project to create a knowledge base for. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.knowledgeBases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. Force deletes the knowledge base. When set to true, any documents in the knowledge base are also deleted.
     * @param {string} apiParams.name - (Required) Required. The name of the knowledge base to delete. Format: `projects//locations//knowledgeBases/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.knowledgeBases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates the specified knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The knowledge base resource name. The name must be empty when creating a knowledge base. Format: `projects//locations//knowledgeBases/`.
     * @param {string} apiParams.updateMask - Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.knowledgeBases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.agent.knowledgeBases.documents = {};

    /**
     * Returns the list of all documents of the knowledge base. Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression used to filter documents returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * knowledge_types with has(:) operator * display_name with has(:) operator * state with equals(=) operator Examples: * "knowledge_types:FAQ" matches documents with FAQ knowledge type. * "display_name:customer" matches documents whose display name contains "customer". * "state=ACTIVE" matches documents with ACTIVE state. * "knowledge_types:FAQ AND state=ACTIVE" matches all active FAQ documents. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The knowledge base to list all documents for. Format: `projects//locations//knowledgeBases/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.knowledgeBases.documents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified document. Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to retrieve. Format `projects//locations//knowledgeBases//documents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.knowledgeBases.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.importGcsCustomMetadata - Whether to import custom metadata from Google Cloud Storage. Only valid when the document source is Google Cloud Storage URI.
     * @param {string} apiParams.parent - (Required) Required. The knowledge base to create a document for. Format: `projects//locations//knowledgeBases/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.knowledgeBases.documents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to delete. Format: `projects//locations//knowledgeBases//documents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.knowledgeBases.documents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Optional. The document resource name. The name must be empty when creating a document. Format: `projects//locations//knowledgeBases//documents/`.
     * @param {string} apiParams.updateMask - Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.knowledgeBases.documents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. Note: If the document source is Google Cloud Storage URI, its metadata will be replaced with the custom metadata from Google Cloud Storage if the `import_gcs_custom_metadata` field is set to true in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to reload. Format: `projects//locations//knowledgeBases//documents/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.knowledgeBases.documents.reload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:reload', 'POST', apiParams, clientConfig);

    this.projects.agent.versions = {};

    /**
     * Returns the list of all versions of the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all versions from. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/versions', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified agent version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an agent version. The new version points to the agent instance in the "default" environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent to create a version for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/versions', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified agent version. Note that this method does not allow you to update the state of the agent the given version points to. It allows you to update only mutable properties of the version resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The unique identifier of this agent version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     * @param {string} apiParams.updateMask - Required. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete the specified agent version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the version to delete. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.agent.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations = {};

    /**
     * Retrieves the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent to fetch is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.getAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent', 'GET', apiParams, clientConfig);

    /**
     * Creates/updates the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project of this agent. Format: `projects/` or `projects//locations/`
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.setAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent to delete is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.deleteAgent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent', 'DELETE', apiParams, clientConfig);

    /**
     * Gets location-level encryption key specification.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the encryption spec resource to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.getEncryptionSpec = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists information about the supported locations for this service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} apiParams.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} apiParams.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} apiParams.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} apiParams.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};

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
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.agent = {};

    /**
     * Retrieves the fulfillment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the fulfillment. Supported formats: - `projects//agent/fulfillment` - `projects//locations//agent/fulfillment`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.getFulfillment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the fulfillment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of the fulfillment. Supported formats: - `projects//agent/fulfillment` - `projects//locations//agent/fulfillment` This field is not used for Fulfillment in an Environment.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.updateFulfillment = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Returns the list of agents. Since there is at most one conversational agent per project, this method is useful primarily for listing all agents across projects the caller has access to. One can achieve that with a wildcard project collection id "-". Refer to [List Sub-Collections](https://cloud.google.com/apis/design/design_patterns#list_sub-collections).
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project to list agents from. Format: `projects/` or `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.search = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:search', 'GET', apiParams, clientConfig);

    /**
     * Trains the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent to train is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.train = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:train', 'POST', apiParams, clientConfig);

    /**
     * Exports the specified agent to a ZIP file. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent to export is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:export', 'POST', apiParams, clientConfig);

    /**
     * Imports the specified agent from a ZIP file. Uploads new intents and entity types without deleting the existing ones. Intents and entity types with the same name are replaced with the new versions from ImportAgentRequest. After the import, the imported draft agent will be trained automatically (unless disabled in agent settings). However, once the import is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when importing is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent to import is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:import', 'POST', apiParams, clientConfig);

    /**
     * Restores the specified agent from a ZIP file. Replaces the current agent version with a new one. All the intents and entity types in the older version are deleted. After the restore, the restored draft agent will be trained automatically (unless disabled in agent settings). However, once the restore is done, training may not be completed yet. Please call TrainAgent and wait for the operation it returns in order to train explicitly. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) The operation only tracks when restoring is complete, not when it is done training. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent to restore is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent:restore', 'POST', apiParams, clientConfig);

    /**
     * Gets agent validation result. Agent validation is performed during training time and is updated automatically when training is completed.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The language for which you want a validation result. If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.parent - (Required) Required. The project that the agent is associated with. Format: `projects/` or `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.getValidationResult = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/agent/validationResult', 'GET', apiParams, clientConfig);

    this.projects.locations.agent.environments = {};

    /**
     * Returns the list of all non-draft environments of the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all environments from. Format: - `projects//agent` - `projects//locations//agent`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/environments', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified agent environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the environment. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an agent environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environmentId - Required. The unique id of the new environment.
     * @param {string} apiParams.parent - (Required) Required. The agent to create an environment for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/environments', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified agent environment. This method allows you to deploy new agent versions into the environment. When an environment is pointed to a new agent version by setting `environment.agent_version`, the environment is temporarily set to the `LOADING` state. During that time, the environment keeps on serving the previous version of the agent. After the new agent version is done loading, the environment is set back to the `RUNNING` state. You can use "-" as Environment ID in environment name to update version in "draft" environment. WARNING: this will negate all recent changes to draft and can't be undone. You may want to save the draft to a version before calling this function.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowLoadToDraftAndDiscardChanges - Optional. This field is used to prevent accidental overwrite of the draft environment, which is an operation that cannot be undone. To confirm that the caller desires this overwrite, this field must be explicitly set to true when updating the draft environment (environment ID = `-`).
     * @param {string} apiParams.name - (Required) Output only. The unique identifier of this agent environment. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/`
     * @param {string} apiParams.updateMask - Required. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified agent environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the environment to delete. / Format: - `projects//agent/environments/` - `projects//locations//agent/environments/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Gets the history of the specified environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The name of the environment to retrieve history for. Supported formats: - `projects//agent/environments/` - `projects//locations//agent/environments/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.getHistory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/history', 'GET', apiParams, clientConfig);

    this.projects.locations.agent.environments.users = {};

    this.projects.locations.agent.environments.users.sessions = {};

    /**
     * Deletes all active contexts in the specified session.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the session to delete all contexts from. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.users.sessions.deleteContexts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'DELETE', apiParams, clientConfig);

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session this query is sent to. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment (`Environment ID` might be referred to as environment name at some places). If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.users.sessions.detectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+session}:detectIntent', 'POST', apiParams, clientConfig);

    this.projects.locations.agent.environments.users.sessions.contexts = {};

    /**
     * Returns the list of all contexts in the specified session.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The session to list all contexts from. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.users.sessions.contexts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.users.sessions.contexts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a context. If the specified context already exists, overrides the context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The session to create a context for. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.users.sessions.contexts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.users.sessions.contexts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the context to delete. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.users.sessions.contexts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agent.environments.users.sessions.entityTypes = {};

    /**
     * Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The session to list all session entity types from. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.users.sessions.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.users.sessions.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The session to create a session entity type for. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.users.sessions.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of this session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.users.sessions.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the entity type to delete. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.users.sessions.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agent.environments.intents = {};

    /**
     * Returns the list of all intents in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all intents from. Format: `projects//agent` or `projects//locations//agent`. Alternatively, you can specify the environment to list intents for. Format: `projects//agent/environments/` or `projects//locations//agent/environments/`. Note: training phrases of the intents will not be returned for non-draft environment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.environments.intents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents', 'GET', apiParams, clientConfig);

    this.projects.locations.agent.sessions = {};

    /**
     * Deletes all active contexts in the specified session.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the session to delete all contexts from. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.sessions.deleteContexts = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'DELETE', apiParams, clientConfig);

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause contexts and session entity types to be updated, which in turn might affect results of future queries. If you might use [Agent Assist](https://cloud.google.com/dialogflow/docs/#aa) or other CCAI products now or in the future, consider using AnalyzeContent instead of `DetectIntent`. `AnalyzeContent` has additional functionality for Agent Assist and other CCAI products. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session this query is sent to. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment (`Environment ID` might be referred to as environment name at some places). If `User ID` is not specified, we are using "-". It's up to the API caller to choose an appropriate `Session ID` and `User Id`. They can be a random number or some type of user and session identifiers (preferably hashed). The length of the `Session ID` and `User ID` must not exceed 36 characters. For more information, see the [API interactions guide](https://cloud.google.com/dialogflow/docs/api-overview). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.sessions.detectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+session}:detectIntent', 'POST', apiParams, clientConfig);

    this.projects.locations.agent.sessions.contexts = {};

    /**
     * Returns the list of all contexts in the specified session.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The session to list all contexts from. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.sessions.contexts.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.sessions.contexts.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a context. If the specified context already exists, overrides the context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The session to create a context for. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.sessions.contexts.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/contexts', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of the context. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, The `Context ID` is always converted to lowercase, may only contain characters in `a-zA-Z0-9_-%` and may be at most 250 bytes long. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. The following context names are reserved for internal use by Dialogflow. You should not use these contexts or create contexts with these names: * `__system_counters__` * `*_id_dialog_context` * `*_dialog_params_size`
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.sessions.contexts.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified context.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the context to delete. Supported formats: - `projects//agent/sessions//contexts/`, - `projects//locations//agent/sessions//contexts/`, - `projects//agent/environments//users//sessions//contexts/`, - `projects//locations//agent/environments//users//sessions//contexts/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.sessions.contexts.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agent.sessions.entityTypes = {};

    /**
     * Returns the list of all session entity types in the specified session. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The session to list all session entity types from. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.sessions.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.sessions.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a session entity type. If the specified session entity type already exists, overrides the session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The session to create a session entity type for. Supported formats: - `projects//agent/sessions/, - `projects//locations//agent/sessions/`, - `projects//agent/environments//users//sessions/`, - `projects//locations//agent/environments//users//sessions/`, If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.sessions.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of this session entity type. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user. `` must be the display name of an existing entity type in the same agent that will be overridden or supplemented.
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.sessions.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified session entity type. This method doesn't work with Google Assistant integration. Contact Dialogflow support if you need to use session entities with Google Assistant integration.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the entity type to delete. Supported formats: - `projects//agent/sessions//entityTypes/` - `projects//locations//agent/sessions//entityTypes/` - `projects//agent/environments//users//sessions//entityTypes/` - `projects//locations//agent/environments/ /users//sessions//entityTypes/` If `Location ID` is not specified we assume default 'us' location. If `Environment ID` is not specified, we assume default 'draft' environment. If `User ID` is not specified, we assume default '-' user.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.sessions.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agent.intents = {};

    /**
     * Returns the list of all intents in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all intents from. Format: `projects//agent` or `projects//locations//agent`. Alternatively, you can specify the environment to list intents for. Format: `projects//agent/environments/` or `projects//locations//agent/environments/`. Note: training phrases of the intents will not be returned for non-draft environment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.intents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified intent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} apiParams.name - (Required) Required. The name of the intent. Supported formats: - `projects//agent/intents/` - `projects//locations//agent/intents/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.intents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an intent in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} apiParams.parent - (Required) Required. The agent to create a intent for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.intents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified intent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.intentView - Optional. The resource view to apply to the returned intent.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} apiParams.name - (Required) Optional. The unique identifier of this intent. Required for Intents.UpdateIntent and Intents.BatchUpdateIntents methods. Supported formats: - `projects//agent/intents/` - `projects//locations//agent/intents/`
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.intents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified intent and its direct or indirect followup intents. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the intent to delete. If this intent has direct or indirect followup intents, we also delete them. Supported formats: - `projects//agent/intents/` - `projects//locations//agent/intents/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.intents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates/Creates multiple intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateIntentsResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the agent to update or create intents in. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.intents.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes intents in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the agent to delete all entities types for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.intents.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/intents:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.locations.agent.entityTypes = {};

    /**
     * Returns the list of all entity types in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all entity types from. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified entity type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} apiParams.name - (Required) Required. The name of the entity type. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an entity type in the specified agent. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} apiParams.parent - (Required) Required. The agent to create a entity type for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified entity type. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).
     * @param {string} apiParams.name - (Required) The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType and EntityTypes.BatchUpdateEntityTypes methods. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified entity type. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the entity type to delete. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates/Creates multiple entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: BatchUpdateEntityTypesResponse Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the agent to update or create entity types in. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.entityTypes.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes entity types in the specified agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the agent to delete all entities types for. Supported formats: - `projects//agent`, - `projects//locations//agent`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.entityTypes.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entityTypes:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.locations.agent.entityTypes.entities = {};

    /**
     * Creates multiple new entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the entity type to create entities in. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.entityTypes.entities.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entities:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Updates or creates multiple entities in the specified entity type. This method does not affect entities in the entity type that aren't explicitly specified in the request. Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training). This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the entity type to update or create entities in. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.entityTypes.entities.batchUpdate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entities:batchUpdate', 'POST', apiParams, clientConfig);

    /**
     * Deletes entities in the specified entity type. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train an agent prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/es/docs/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the entity type to delete entries for. Supported formats: - `projects//agent/entityTypes/` - `projects//locations//agent/entityTypes/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.entityTypes.entities.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/entities:batchDelete', 'POST', apiParams, clientConfig);

    this.projects.locations.agent.versions = {};

    /**
     * Returns the list of all versions of the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all versions from. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/versions', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified agent version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an agent version. The new version points to the agent instance in the "default" environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent to create a version for. Supported formats: - `projects//agent` - `projects//locations//agent`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/versions', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified agent version. Note that this method does not allow you to update the state of the agent the given version points to. It allows you to update only mutable properties of the version resource.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The unique identifier of this agent version. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     * @param {string} apiParams.updateMask - Required. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Delete the specified agent version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the version to delete. Supported formats: - `projects//agent/versions/` - `projects//locations//agent/versions/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agent.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.generators = {};

    /**
     * Creates a generator.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.generatorId - Optional. The ID to use for the generator, which will become the final component of the generator's resource name. The generator ID must be compliant with the regression formula `a-zA-Z*` with the characters length in range of [3,64]. If the field is not provided, an Id will be auto-generated. If the field is provided, the caller is responsible for 1. the uniqueness of the ID, otherwise the request will be rejected. 2. the consistency for whether to use custom ID or not under a project to better ensure uniqueness.
     * @param {string} apiParams.parent - (Required) Required. The project/location to create generator for. Format: `projects//locations/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.generators.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/generators', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a generator.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The generator resource name to retrieve. Format: `projects//locations/`/generators/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.generators.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists generators.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of conversation models to return in a single page. Default to 10.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project/location to list generators for. Format: `projects//locations/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.generators.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/generators', 'GET', apiParams, clientConfig);

    /**
     * Deletes a generator.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The generator resource name to delete. Format: `projects//locations//generators/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.generators.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a generator.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. Identifier. The resource name of the generator. Format: `projects//locations//generators/`
     * @param {string} apiParams.updateMask - Optional. The list of fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.generators.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.answerRecords = {};

    /**
     * Deprecated. Retrieves a specific answer record.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the answer record to retrieve. Format: `projects//locations//answerRecords/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.answerRecords.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns the list of all answer records in the specified project in reverse chronological order.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filters to restrict results to specific answer records. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * conversation_id with equals(=) operator Examples: * "conversation_id=bar" matches answer records in the projects/foo/locations/global/conversations/bar conversation (assuming the parent is projects/foo/locations/global). For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of records to return in a single page. The server may return fewer records than this. If unspecified, we use 10. The maximum is 100.
     * @param {string} apiParams.pageToken - Optional. The ListAnswerRecordsResponse.next_page_token value returned from a previous list request used to continue listing on the next page.
     * @param {string} apiParams.parent - (Required) Required. The project to list all answer records for in reverse chronological order. Format: `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.answerRecords.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/answerRecords', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified answer record.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The unique identifier of this answer record. Required for AnswerRecords.UpdateAnswerRecord method. Format: `projects//locations//answerRecords/`.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.answerRecords.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.conversationProfiles = {};

    /**
     * Returns the list of all conversation profiles in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project to list all conversation profiles from. Format: `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversationProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversationProfiles', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified conversation profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversationProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project to create a conversation profile for. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversationProfiles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversationProfiles', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified conversation profile. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The unique identifier of this conversation profile. Format: `projects//locations//conversationProfiles/`.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversationProfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified conversation profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the conversation profile to delete. Format: `projects//locations//conversationProfiles/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversationProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversationProfile - (Required) Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects//locations//conversationProfiles/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversationProfiles.setSuggestionFeatureConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversationProfile}:setSuggestionFeatureConfig', 'POST', apiParams, clientConfig);

    /**
     * Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversationProfile - (Required) Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects//locations//conversationProfiles/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversationProfiles.clearSuggestionFeatureConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversationProfile}:clearSuggestionFeatureConfig', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations = {};

    /**
     * Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversationId - Optional. Identifier of the conversation. Generally it's auto generated by Google. Only set it if you cannot wait for the response to return a auto-generated one to you. The conversation ID must be compliant with the regression formula `a-zA-Z*` with the characters length in range of [3,64]. If the field is provided, the caller is responsible for 1. the uniqueness of the ID, otherwise the request will be rejected. 2. the consistency for whether to use custom ID or not under a project to better ensure uniqueness.
     * @param {string} apiParams.parent - (Required) Required. Resource identifier of the project creating the conversation. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversations', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of all conversations in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter expression that filters conversations listed in the response. Only `lifecycle_state` can be filtered on in this way. For example, the following expression only returns `COMPLETED` conversations: `lifecycle_state = "COMPLETED"` For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project from which to list all conversation. Format: `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversations', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specific conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the conversation. Format: `projects//locations//conversations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Completes the specified conversation. Finished conversations are purged from the database after 30 days.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource identifier of the conversation to close. Format: `projects//locations//conversations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.complete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:complete', 'POST', apiParams, clientConfig);

    /**
     * Data ingestion API. Ingests context references for an existing conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversation - (Required) Required. Resource identifier of the conversation to ingest context information for. Format: `projects//locations//conversations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.ingestContextReferences = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}:ingestContextReferences', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations.participants = {};

    /**
     * Creates a new participant in a conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource identifier of the conversation adding the participant. Format: `projects//locations//conversations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.participants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/participants', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a conversation participant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the participant. Format: `projects//locations//conversations//participants/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.participants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns the list of all participants in the specified conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The conversation to list all participants from. Format: `projects//locations//conversations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.participants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/participants', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified participant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Optional. The unique identifier of this participant. Format: `projects//locations//conversations//participants/`.
     * @param {string} apiParams.updateMask - Required. The mask to specify which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.participants.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.participant - (Required) Required. The name of the participant this text comes from. Format: `projects//locations//conversations//participants/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.participants.analyzeContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+participant}:analyzeContent', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations.participants.suggestions = {};

    /**
     * Gets suggested articles for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.participants.suggestions.suggestArticles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestArticles', 'POST', apiParams, clientConfig);

    /**
     * Gets suggested faq answers for a participant based on specific historical messages.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.participants.suggestions.suggestFaqAnswers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestFaqAnswers', 'POST', apiParams, clientConfig);

    /**
     * Gets smart replies for a participant based on specific historical messages.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.participants.suggestions.suggestSmartReplies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestSmartReplies', 'POST', apiParams, clientConfig);

    /**
     * Gets knowledge assist suggestions based on historical messages.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the participant to fetch suggestions for. Format: `projects//locations//conversations//participants/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.participants.suggestions.suggestKnowledgeAssist = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestKnowledgeAssist', 'POST', apiParams, clientConfig);

    this.projects.locations.conversations.messages = {};

    /**
     * Batch ingests messages to conversation. Customers can use this RPC to ingest historical messages to conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource identifier of the conversation to create message. Format: `projects//locations//conversations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.messages.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/messages:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter on message fields. Currently predicates on `create_time` and `create_time_epoch_microseconds` are supported. `create_time` only support milliseconds accuracy. E.g., `create_time_epoch_microseconds > 1551790877964485` or `create_time > "2017-01-15T01:30:15.01Z"`. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The name of the conversation to list messages for. Format: `projects//locations//conversations/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/messages', 'GET', apiParams, clientConfig);

    this.projects.locations.conversations.suggestions = {};

    /**
     * Suggest summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversation - (Required) Required. The conversation to fetch suggestion for. Format: `projects//locations//conversations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.suggestions.suggestConversationSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}/suggestions:suggestConversationSummary', 'POST', apiParams, clientConfig);

    /**
     * Get answers for the given query based on knowledge documents.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversation - (Required) Optional. The conversation (between human agent and end user) where the search request is triggered. Format: `projects//locations//conversations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.suggestions.searchKnowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}/suggestions:searchKnowledge', 'POST', apiParams, clientConfig);

    /**
     * Generates all the suggestions using generators configured in the conversation profile. A generator is used only if its trigger event is matched.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversation - (Required) Required. The conversation for which the suggestions are generated. Format: `projects//locations//conversations/`. The conversation must be created with a conversation profile which has generators configured in it to be able to get suggestions.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.conversations.suggestions.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}/suggestions:generate', 'POST', apiParams, clientConfig);

    this.projects.locations.suggestions = {};

    /**
     * Generates and returns a summary for a conversation that does not have a resource created for it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to charge for the Summary's generation. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.suggestions.generateStatelessSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:generateStatelessSummary', 'POST', apiParams, clientConfig);

    /**
     * Get answers for the given query based on knowledge documents.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource contains the conversation profile Format: 'projects/' or `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.suggestions.searchKnowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:searchKnowledge', 'POST', apiParams, clientConfig);

    this.projects.locations.statelessSuggestion = {};

    /**
     * Generates and returns a suggestion for a conversation that does not have a resource created for it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to charge for the Suggestion's generation. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.statelessSuggestion.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/statelessSuggestion:generate', 'POST', apiParams, clientConfig);

    this.projects.locations.encryptionSpec = {};

    /**
     * Initializes a location-level encryption key specification. An error will be thrown if the location has resources already created before the initialization. Once the encryption specification is initialized at a location, it is immutable and all newly created resources under the location will be encrypted with the existing specification.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Immutable. The resource name of the encryption key specification resource. Format: projects/{project}/locations/{location}/encryptionSpec
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.encryptionSpec.initialize = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:initialize', 'POST', apiParams, clientConfig);

    this.projects.locations.knowledgeBases = {};

    /**
     * Returns the list of all knowledge bases of the specified agent. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression used to filter knowledge bases returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * display_name with has(:) operator * language_code with equals(=) operator Examples: * 'language_code=en-us' matches knowledge bases with en-us language code. * 'display_name:articles' matches knowledge bases whose display name contains "articles". * 'display_name:"Best Articles"' matches knowledge bases whose display name contains "Best Articles". * 'language_code=en-gb AND display_name=articles' matches all knowledge bases whose display name contains "articles" and whose language code is "en-gb". Note: An empty filter string (i.e. "") is a no-op and will result in no filtering. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project to list of knowledge bases for. Format: `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.knowledgeBases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the knowledge base to retrieve. Format `projects//locations//knowledgeBases/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.knowledgeBases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project to create a knowledge base for. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.knowledgeBases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. Force deletes the knowledge base. When set to true, any documents in the knowledge base are also deleted.
     * @param {string} apiParams.name - (Required) Required. The name of the knowledge base to delete. Format: `projects//locations//knowledgeBases/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.knowledgeBases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates the specified knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The knowledge base resource name. The name must be empty when creating a knowledge base. Format: `projects//locations//knowledgeBases/`.
     * @param {string} apiParams.updateMask - Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.knowledgeBases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.knowledgeBases.documents = {};

    /**
     * Returns the list of all documents of the knowledge base. Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression used to filter documents returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * knowledge_types with has(:) operator * display_name with has(:) operator * state with equals(=) operator Examples: * "knowledge_types:FAQ" matches documents with FAQ knowledge type. * "display_name:customer" matches documents whose display name contains "customer". * "state=ACTIVE" matches documents with ACTIVE state. * "knowledge_types:FAQ AND state=ACTIVE" matches all active FAQ documents. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The knowledge base to list all documents for. Format: `projects//locations//knowledgeBases/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.knowledgeBases.documents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified document. Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to retrieve. Format `projects//locations//knowledgeBases//documents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.knowledgeBases.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.importGcsCustomMetadata - Whether to import custom metadata from Google Cloud Storage. Only valid when the document source is Google Cloud Storage URI.
     * @param {string} apiParams.parent - (Required) Required. The knowledge base to create a document for. Format: `projects//locations//knowledgeBases/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.knowledgeBases.documents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents', 'POST', apiParams, clientConfig);

    /**
     * Create documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The knowledge base to import documents into. Format: `projects//locations//knowledgeBases/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.knowledgeBases.documents.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents:import', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to delete. Format: `projects//locations//knowledgeBases//documents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.knowledgeBases.documents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Optional. The document resource name. The name must be empty when creating a document. Format: `projects//locations//knowledgeBases//documents/`.
     * @param {string} apiParams.updateMask - Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.knowledgeBases.documents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. Note: If the document source is Google Cloud Storage URI, its metadata will be replaced with the custom metadata from Google Cloud Storage if the `import_gcs_custom_metadata` field is set to true in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to reload. Format: `projects//locations//knowledgeBases//documents/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.knowledgeBases.documents.reload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:reload', 'POST', apiParams, clientConfig);

    this.projects.locations.phoneNumbers = {};

    /**
     * Returns the list of all phone numbers in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. The default value is 100. The maximum value is 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project to list all `PhoneNumber` resources from. Format: `projects/`. Format: `projects//locations/`.
     * @param {boolean} apiParams.showDeleted - Optional. Controls whether `PhoneNumber` resources in the DELETE_REQUESTED state should be returned. Defaults to false.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.phoneNumbers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/phoneNumbers', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified `PhoneNumber`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Optional. The unique identifier of this phone number. Required for PhoneNumbers.UpdatePhoneNumber method. Format: `projects//phoneNumbers/`. Format: `projects//locations//phoneNumbers/`.
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.phoneNumbers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Requests deletion of a `PhoneNumber`. The `PhoneNumber` is moved into the DELETE_REQUESTED state immediately, and is deleted approximately 30 days later. This method may only be called on a `PhoneNumber` in the ACTIVE state.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of the `PhoneNumber` to delete. Format: `projects//phoneNumbers/`. Format: `projects//locations//phoneNumbers/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.phoneNumbers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Cancels the deletion request for a `PhoneNumber`. This method may only be called on a `PhoneNumber` in the DELETE_REQUESTED state.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of the `PhoneNumber` to delete. Format: `projects//phoneNumbers/`. Format: `projects//locations//phoneNumbers/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.phoneNumbers.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:undelete', 'POST', apiParams, clientConfig);

    this.projects.locations.sipTrunks = {};

    /**
     * Creates a SipTrunk for a specified location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The location to create a SIP trunk for. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sipTrunks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/sipTrunks', 'POST', apiParams, clientConfig);

    /**
     * Deletes a specified SipTrunk.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SIP trunk to delete. Format: `projects//locations//sipTrunks/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sipTrunks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns a list of SipTrunks in the specified location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The location to list SIP trunks from. Format: `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sipTrunks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/sipTrunks', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified SipTrunk.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SIP trunk to delete. Format: `projects//locations//sipTrunks/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sipTrunks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified SipTrunk.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Identifier. The unique identifier of the SIP trunk. Format: `projects//locations//sipTrunks/`.
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.sipTrunks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.generators = {};

    /**
     * Creates a generator.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.generatorId - Optional. The ID to use for the generator, which will become the final component of the generator's resource name. The generator ID must be compliant with the regression formula `a-zA-Z*` with the characters length in range of [3,64]. If the field is not provided, an Id will be auto-generated. If the field is provided, the caller is responsible for 1. the uniqueness of the ID, otherwise the request will be rejected. 2. the consistency for whether to use custom ID or not under a project to better ensure uniqueness.
     * @param {string} apiParams.parent - (Required) Required. The project/location to create generator for. Format: `projects//locations/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.generators.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/generators', 'POST', apiParams, clientConfig);

    /**
     * Lists generators.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. Maximum number of conversation models to return in a single page. Default to 10.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project/location to list generators for. Format: `projects//locations/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.generators.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/generators', 'GET', apiParams, clientConfig);

    this.projects.answerRecords = {};

    /**
     * Deprecated. Retrieves a specific answer record.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the answer record to retrieve. Format: `projects//locations//answerRecords/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.answerRecords.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns the list of all answer records in the specified project in reverse chronological order.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filters to restrict results to specific answer records. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * conversation_id with equals(=) operator Examples: * "conversation_id=bar" matches answer records in the projects/foo/locations/global/conversations/bar conversation (assuming the parent is projects/foo/locations/global). For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of records to return in a single page. The server may return fewer records than this. If unspecified, we use 10. The maximum is 100.
     * @param {string} apiParams.pageToken - Optional. The ListAnswerRecordsResponse.next_page_token value returned from a previous list request used to continue listing on the next page.
     * @param {string} apiParams.parent - (Required) Required. The project to list all answer records for in reverse chronological order. Format: `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.answerRecords.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/answerRecords', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified answer record.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The unique identifier of this answer record. Required for AnswerRecords.UpdateAnswerRecord method. Format: `projects//locations//answerRecords/`.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.answerRecords.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.conversationProfiles = {};

    /**
     * Returns the list of all conversation profiles in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project to list all conversation profiles from. Format: `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversationProfiles.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversationProfiles', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified conversation profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The resource name of the conversation profile. Format: `projects//locations//conversationProfiles/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversationProfiles.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a conversation profile in the specified project. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project to create a conversation profile for. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversationProfiles.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversationProfiles', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified conversation profile. ConversationProfile.CreateTime and ConversationProfile.UpdateTime aren't populated in the response. You can retrieve them via GetConversationProfile API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The unique identifier of this conversation profile. Format: `projects//locations//conversationProfiles/`.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversationProfiles.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified conversation profile.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the conversation profile to delete. Format: `projects//locations//conversationProfiles/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversationProfiles.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Adds or updates a suggestion feature in a conversation profile. If the conversation profile contains the type of suggestion feature for the participant role, it will update it. Otherwise it will insert the suggestion feature. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: SetSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile If a long running operation to add or update suggestion feature config for the same conversation profile, participant role and suggestion feature type exists, please cancel the existing long running operation before sending such request, otherwise the request will be rejected.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversationProfile - (Required) Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects//locations//conversationProfiles/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversationProfiles.setSuggestionFeatureConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversationProfile}:setSuggestionFeatureConfig', 'POST', apiParams, clientConfig);

    /**
     * Clears a suggestion feature from a conversation profile for the given participant role. This method is a [long-running operation](https://cloud.google.com/dialogflow/es/docs/how/long-running-operations). The returned `Operation` type has the following method-specific fields: - `metadata`: ClearSuggestionFeatureConfigOperationMetadata - `response`: ConversationProfile
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversationProfile - (Required) Required. The Conversation Profile to add or update the suggestion feature config. Format: `projects//locations//conversationProfiles/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversationProfiles.clearSuggestionFeatureConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversationProfile}:clearSuggestionFeatureConfig', 'POST', apiParams, clientConfig);

    this.projects.conversations = {};

    /**
     * Creates a new conversation. Conversations are auto-completed after 24 hours. Conversation Lifecycle: There are two stages during a conversation: Automated Agent Stage and Assist Stage. For Automated Agent Stage, there will be a dialogflow agent responding to user queries. For Assist Stage, there's no dialogflow agent responding to user queries. But we will provide suggestions which are generated from conversation. If Conversation.conversation_profile is configured for a dialogflow agent, conversation will start from `Automated Agent Stage`, otherwise, it will start from `Assist Stage`. And during `Automated Agent Stage`, once an Intent with Intent.live_agent_handoff is triggered, conversation will transfer to Assist Stage.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversationId - Optional. Identifier of the conversation. Generally it's auto generated by Google. Only set it if you cannot wait for the response to return a auto-generated one to you. The conversation ID must be compliant with the regression formula `a-zA-Z*` with the characters length in range of [3,64]. If the field is provided, the caller is responsible for 1. the uniqueness of the ID, otherwise the request will be rejected. 2. the consistency for whether to use custom ID or not under a project to better ensure uniqueness.
     * @param {string} apiParams.parent - (Required) Required. Resource identifier of the project creating the conversation. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversations', 'POST', apiParams, clientConfig);

    /**
     * Returns the list of all conversations in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. A filter expression that filters conversations listed in the response. Only `lifecycle_state` can be filtered on in this way. For example, the following expression only returns `COMPLETED` conversations: `lifecycle_state = "COMPLETED"` For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project from which to list all conversation. Format: `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/conversations', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specific conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the conversation. Format: `projects//locations//conversations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Completes the specified conversation. Finished conversations are purged from the database after 30 days.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource identifier of the conversation to close. Format: `projects//locations//conversations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.complete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:complete', 'POST', apiParams, clientConfig);

    this.projects.conversations.participants = {};

    /**
     * Creates a new participant in a conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource identifier of the conversation adding the participant. Format: `projects//locations//conversations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.participants.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/participants', 'POST', apiParams, clientConfig);

    /**
     * Retrieves a conversation participant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the participant. Format: `projects//locations//conversations//participants/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.participants.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Returns the list of all participants in the specified conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The conversation to list all participants from. Format: `projects//locations//conversations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.participants.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/participants', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified participant.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Optional. The unique identifier of this participant. Format: `projects//locations//conversations//participants/`.
     * @param {string} apiParams.updateMask - Required. The mask to specify which fields to update.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.participants.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Adds a text (chat, for example), or audio (phone recording, for example) message from a participant into the conversation. Note: Always use agent versions for production traffic sent to virtual agents. See [Versions and environments](https://cloud.google.com/dialogflow/es/docs/agents-versions).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.participant - (Required) Required. The name of the participant this text comes from. Format: `projects//locations//conversations//participants/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.participants.analyzeContent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+participant}:analyzeContent', 'POST', apiParams, clientConfig);

    this.projects.conversations.participants.suggestions = {};

    /**
     * Gets suggested articles for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.participants.suggestions.suggestArticles = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestArticles', 'POST', apiParams, clientConfig);

    /**
     * Gets suggested faq answers for a participant based on specific historical messages.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.participants.suggestions.suggestFaqAnswers = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestFaqAnswers', 'POST', apiParams, clientConfig);

    /**
     * Gets smart replies for a participant based on specific historical messages.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.participants.suggestions.suggestSmartReplies = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestSmartReplies', 'POST', apiParams, clientConfig);

    /**
     * Gets knowledge assist suggestions based on historical messages.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the participant to fetch suggestions for. Format: `projects//locations//conversations//participants/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.participants.suggestions.suggestKnowledgeAssist = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:suggestKnowledgeAssist', 'POST', apiParams, clientConfig);

    /**
     * Deprecated: Use inline suggestion, event based suggestion or Suggestion* API instead. See HumanAgentAssistantConfig.name for more details. Removal Date: 2020-09-01. Retrieves suggestions for live agents. This method should be used by human agent client software to fetch auto generated suggestions in real-time, while the conversation with an end user is in progress. The functionality is implemented in terms of the [list pagination](https://cloud.google.com/apis/design/design_patterns#list_pagination) design pattern. The client app should use the `next_page_token` field to fetch the next batch of suggestions. `suggestions` are sorted by `create_time` in descending order. To fetch latest suggestion, just set `page_size` to 1. To fetch new suggestions without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter on suggestions fields. Currently predicates on `create_time` and `create_time_epoch_microseconds` are supported. `create_time` only support milliseconds accuracy. E.g., `create_time_epoch_microseconds > 1551790877964485` or `create_time > "2017-01-15T01:30:15.01Z"` For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. The default value is 100; the maximum value is 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The name of the participant to fetch suggestions for. Format: `projects//locations//conversations//participants/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.participants.suggestions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions', 'GET', apiParams, clientConfig);

    /**
     * Deprecated. use SuggestArticles and SuggestFaqAnswers instead. Gets suggestions for a participant based on specific historical messages. Note that ListSuggestions will only list the auto-generated suggestions, while CompileSuggestion will try to compile suggestion based on the provided conversation context in the real time.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the participant to fetch suggestion for. Format: `projects//locations//conversations//participants/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.participants.suggestions.compile = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:compile', 'POST', apiParams, clientConfig);

    this.projects.conversations.messages = {};

    /**
     * Batch ingests messages to conversation. Customers can use this RPC to ingest historical messages to conversation.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Resource identifier of the conversation to create message. Format: `projects//locations//conversations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.messages.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/messages:batchCreate', 'POST', apiParams, clientConfig);

    /**
     * Lists messages that belong to a given conversation. `messages` are ordered by `create_time` in descending order. To fetch updates without duplication, send request with filter `create_time_epoch_microseconds > [first item's create_time of previous request]` and empty page_token.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - Optional. Filter on message fields. Currently predicates on `create_time` and `create_time_epoch_microseconds` are supported. `create_time` only support milliseconds accuracy. E.g., `create_time_epoch_microseconds > 1551790877964485` or `create_time > "2017-01-15T01:30:15.01Z"`. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The name of the conversation to list messages for. Format: `projects//locations//conversations/`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/messages', 'GET', apiParams, clientConfig);

    this.projects.conversations.suggestions = {};

    /**
     * Suggest summary for a conversation based on specific historical messages. The range of the messages to be used for summary can be specified in the request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversation - (Required) Required. The conversation to fetch suggestion for. Format: `projects//locations//conversations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.suggestions.suggestConversationSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}/suggestions:suggestConversationSummary', 'POST', apiParams, clientConfig);

    /**
     * Get answers for the given query based on knowledge documents.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversation - (Required) Optional. The conversation (between human agent and end user) where the search request is triggered. Format: `projects//locations//conversations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.suggestions.searchKnowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}/suggestions:searchKnowledge', 'POST', apiParams, clientConfig);

    /**
     * Generates all the suggestions using generators configured in the conversation profile. A generator is used only if its trigger event is matched.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.conversation - (Required) Required. The conversation for which the suggestions are generated. Format: `projects//locations//conversations/`. The conversation must be created with a conversation profile which has generators configured in it to be able to get suggestions.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.conversations.suggestions.generate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+conversation}/suggestions:generate', 'POST', apiParams, clientConfig);

    this.projects.suggestions = {};

    /**
     * Generates and returns a summary for a conversation that does not have a resource created for it.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource to charge for the Summary's generation. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.suggestions.generateStatelessSummary = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:generateStatelessSummary', 'POST', apiParams, clientConfig);

    /**
     * Get answers for the given query based on knowledge documents.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource contains the conversation profile Format: 'projects/' or `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.suggestions.searchKnowledge = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/suggestions:searchKnowledge', 'POST', apiParams, clientConfig);

    this.projects.knowledgeBases = {};

    /**
     * Returns the list of all knowledge bases of the specified agent. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression used to filter knowledge bases returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * display_name with has(:) operator * language_code with equals(=) operator Examples: * 'language_code=en-us' matches knowledge bases with en-us language code. * 'display_name:articles' matches knowledge bases whose display name contains "articles". * 'display_name:"Best Articles"' matches knowledge bases whose display name contains "Best Articles". * 'language_code=en-gb AND display_name=articles' matches all knowledge bases whose display name contains "articles" and whose language code is "en-gb". Note: An empty filter string (i.e. "") is a no-op and will result in no filtering. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project to list of knowledge bases for. Format: `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.knowledgeBases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the knowledge base to retrieve. Format `projects//locations//knowledgeBases/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.knowledgeBases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The project to create a knowledge base for. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.knowledgeBases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/knowledgeBases', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. Force deletes the knowledge base. When set to true, any documents in the knowledge base are also deleted.
     * @param {string} apiParams.name - (Required) Required. The name of the knowledge base to delete. Format: `projects//locations//knowledgeBases/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.knowledgeBases.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates the specified knowledge base. Note: The `projects.agent.knowledgeBases` resource is deprecated; only use `projects.knowledgeBases`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The knowledge base resource name. The name must be empty when creating a knowledge base. Format: `projects//locations//knowledgeBases/`.
     * @param {string} apiParams.updateMask - Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.knowledgeBases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.knowledgeBases.documents = {};

    /**
     * Returns the list of all documents of the knowledge base. Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression used to filter documents returned by the list method. The expression has the following syntax: [AND ] ... The following fields and operators are supported: * knowledge_types with has(:) operator * display_name with has(:) operator * state with equals(=) operator Examples: * "knowledge_types:FAQ" matches documents with FAQ knowledge type. * "display_name:customer" matches documents whose display name contains "customer". * "state=ACTIVE" matches documents with ACTIVE state. * "knowledge_types:FAQ AND state=ACTIVE" matches all active FAQ documents. For more information about filtering, see [API Filtering](https://aip.dev/160).
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 10 and at most 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The knowledge base to list all documents for. Format: `projects//locations//knowledgeBases/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.knowledgeBases.documents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified document. Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to retrieve. Format `projects//locations//knowledgeBases//documents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.knowledgeBases.documents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a new document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.importGcsCustomMetadata - Whether to import custom metadata from Google Cloud Storage. Only valid when the document source is Google Cloud Storage URI.
     * @param {string} apiParams.parent - (Required) Required. The knowledge base to create a document for. Format: `projects//locations//knowledgeBases/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.knowledgeBases.documents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents', 'POST', apiParams, clientConfig);

    /**
     * Create documents by importing data from external sources. Dialogflow supports up to 350 documents in each request. If you try to import more, Dialogflow will return an error. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: ImportDocumentsResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The knowledge base to import documents into. Format: `projects//locations//knowledgeBases/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.knowledgeBases.documents.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/documents:import', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to delete. Format: `projects//locations//knowledgeBases//documents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.knowledgeBases.documents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates the specified document. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Optional. The document resource name. The name must be empty when creating a document. Format: `projects//locations//knowledgeBases//documents/`.
     * @param {string} apiParams.updateMask - Optional. Not specified means `update all`. Currently, only `display_name` can be updated, an InvalidArgument will be returned for attempting to update other fields.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.knowledgeBases.documents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Reloads the specified document from its specified source, content_uri or content. The previously loaded content of the document will be deleted. Note: Even when the content of the document has not changed, there still may be side effects because of internal implementation changes. Note: If the document source is Google Cloud Storage URI, its metadata will be replaced with the custom metadata from Google Cloud Storage if the `import_gcs_custom_metadata` field is set to true in the request. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: KnowledgeOperationMetadata - `response`: Document Note: The `projects.agent.knowledgeBases.documents` resource is deprecated; only use `projects.knowledgeBases.documents`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the document to reload. Format: `projects//locations//knowledgeBases//documents/`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.knowledgeBases.documents.reload = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:reload', 'POST', apiParams, clientConfig);

    this.projects.phoneNumbers = {};

    /**
     * Returns the list of all phone numbers in the specified project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. The default value is 100. The maximum value is 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The project to list all `PhoneNumber` resources from. Format: `projects/`. Format: `projects//locations/`.
     * @param {boolean} apiParams.showDeleted - Optional. Controls whether `PhoneNumber` resources in the DELETE_REQUESTED state should be returned. Defaults to false.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.phoneNumbers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+parent}/phoneNumbers', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified `PhoneNumber`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Optional. The unique identifier of this phone number. Required for PhoneNumbers.UpdatePhoneNumber method. Format: `projects//phoneNumbers/`. Format: `projects//locations//phoneNumbers/`.
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.phoneNumbers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Requests deletion of a `PhoneNumber`. The `PhoneNumber` is moved into the DELETE_REQUESTED state immediately, and is deleted approximately 30 days later. This method may only be called on a `PhoneNumber` in the ACTIVE state.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of the `PhoneNumber` to delete. Format: `projects//phoneNumbers/`. Format: `projects//locations//phoneNumbers/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.phoneNumbers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Cancels the deletion request for a `PhoneNumber`. This method may only be called on a `PhoneNumber` in the DELETE_REQUESTED state.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of the `PhoneNumber` to delete. Format: `projects//phoneNumbers/`. Format: `projects//locations//phoneNumbers/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.phoneNumbers.undelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v2beta1/{+name}:undelete', 'POST', apiParams, clientConfig);
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
