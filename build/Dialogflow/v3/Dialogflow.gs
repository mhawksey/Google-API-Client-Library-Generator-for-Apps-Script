
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
    this.projects.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations = {};

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
    this.projects.locations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/locations', 'GET', apiParams, clientConfig);

    /**
     * Gets information about a location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name for the location.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

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
    this.projects.locations.operations.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}/operations', 'GET', apiParams, clientConfig);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.securitySettings = {};

    /**
     * Create security settings in the specified location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The location to create an SecuritySettings for. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.securitySettings.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/securitySettings', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the specified SecuritySettings. The returned settings may be stale by up to 1 minute.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the settings. Format: `projects//locations//securitySettings/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.securitySettings.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified SecuritySettings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.securitySettings.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Returns the list of all security settings in the specified location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 20 and at most 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The location to list all security settings for. Format: `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.securitySettings.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/securitySettings', 'GET', apiParams, clientConfig);

    /**
     * Deletes the specified SecuritySettings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the SecuritySettings to delete. Format: `projects//locations//securitySettings/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.securitySettings.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents = {};

    /**
     * Returns the list of all agents in the specified location.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The location to list all agents for. Format: `projects//locations/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/agents', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the agent. Format: `projects//locations//agents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an agent in the specified location. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The location to create a agent for. Format: `projects//locations/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/agents', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified agent. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: `projects//locations//agents/`.
     * @param {string} apiParams.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the agent to delete. Format: `projects//locations//agents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Exports the specified agent to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the agent to export. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:export', 'POST', apiParams, clientConfig);

    /**
     * Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the agent to restore into. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:restore', 'POST', apiParams, clientConfig);

    /**
     * Validates the specified agent and creates or updates validation results. The agent in draft version is validated. Please call this API after the training is completed to get the complete validation results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The agent to validate. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:validate', 'POST', apiParams, clientConfig);

    /**
     * Gets the latest agent validation result. Agent validation is performed when ValidateAgent is called.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - If not specified, the agent's default language is used.
     * @param {string} apiParams.name - (Required) Required. The agent name. Format: `projects//locations//agents//validationResult`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.getValidationResult = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Gets the generative settings for the agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Required. Language code of the generative settings.
     * @param {string} apiParams.name - (Required) Required. Format: `projects//locations//agents//generativeSettings`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.getGenerativeSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the generative settings for the agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Format: `projects//locations//agents//generativeSettings`.
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.updateGenerativeSettings = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.agents.flows = {};

    /**
     * Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language of the following fields in `flow`: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.parent - (Required) Required. The agent to create a flow for. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/flows', 'POST', apiParams, clientConfig);

    /**
     * Deletes a specified flow.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - This field has no effect for flows with no incoming transitions. For flows with incoming transitions: * If `force` is set to false, an error will be returned with message indicating the incoming transitions. * If `force` is set to true, Dialogflow will remove the flow, as well as any transitions to the flow (i.e. Target flow in event handlers or Target flow in transition routes that point to this flow will be cleared).
     * @param {string} apiParams.name - (Required) Required. The name of the flow to delete. Format: `projects//locations//agents//flows/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns the list of all flows in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to list flows for. The following fields are language dependent: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent containing the flows. Format: `projects//locations//agents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/flows', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified flow.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to retrieve the flow for. The following fields are language dependent: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.name - (Required) Required. The name of the flow to get. Format: `projects//locations//agents//flows/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Updates the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language of the following fields in `flow`: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.name - (Required) The unique identifier of the flow. Format: `projects//locations//agents//flows/`.
     * @param {string} apiParams.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The flow to train. Format: `projects//locations//agents//flows/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.train = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:train', 'POST', apiParams, clientConfig);

    /**
     * Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The flow to validate. Format: `projects//locations//agents//flows/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.validate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:validate', 'POST', apiParams, clientConfig);

    /**
     * Gets the latest flow validation result. Flow validation is performed when ValidateFlow is called.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - If not specified, the agent's default language is used.
     * @param {string} apiParams.name - (Required) Required. The flow name. Format: `projects//locations//agents//flows//validationResult`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.getValidationResult = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent to import the flow into. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/flows:import', 'POST', apiParams, clientConfig);

    /**
     * Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the flow to export. Format: `projects//locations//agents//flows/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:export', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.flows.pages = {};

    /**
     * Returns the list of all pages in the specified flow.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to list pages for. The following fields are language dependent: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The flow to list all pages for. Format: `projects//locations//agents//flows/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.pages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/pages', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified page.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to retrieve the page for. The following fields are language dependent: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.name - (Required) Required. The name of the page. Format: `projects//locations//agents//flows//pages/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.pages.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a page in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language of the following fields in `page`: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.parent - (Required) Required. The flow to create a page for. Format: `projects//locations//agents//flows/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.pages.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/pages', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified page. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language of the following fields in `page`: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.name - (Required) The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`.
     * @param {string} apiParams.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.pages.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified page. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - This field has no effect for pages with no incoming transitions. For pages with incoming transitions: * If `force` is set to false, an error will be returned with message indicating the incoming transitions. * If `force` is set to true, Dialogflow will remove the page, as well as any transitions to the page (i.e. Target page in event handlers or Target page in transition routes that point to this page will be cleared).
     * @param {string} apiParams.name - (Required) Required. The name of the page to delete. Format: `projects//locations//agents//Flows//pages/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.pages.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.flows.transitionRouteGroups = {};

    /**
     * Returns the list of all transition route groups in the specified flow.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to list transition route groups for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The flow to list all transition route groups for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.transitionRouteGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/transitionRouteGroups', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified TransitionRouteGroup.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to retrieve the transition route group for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.name - (Required) Required. The name of the TransitionRouteGroup. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.transitionRouteGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.parent - (Required) Required. The flow to create an TransitionRouteGroup for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/` for agent-level groups.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.transitionRouteGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/transitionRouteGroups', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.name - (Required) The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/` .
     * @param {string} apiParams.updateMask - The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.transitionRouteGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - This field has no effect for transition route group that no page is using. If the transition route group is referenced by any page: * If `force` is set to false, an error will be returned with message indicating pages that reference the transition route group. * If `force` is set to true, Dialogflow will remove the transition route group, as well as any reference to it.
     * @param {string} apiParams.name - (Required) Required. The name of the TransitionRouteGroup to delete. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.transitionRouteGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.flows.versions = {};

    /**
     * Returns the list of all versions in the specified Flow.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 20 and at most 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The Flow to list all versions for. Format: `projects//locations//agents//flows/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/versions', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified Version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Version. Format: `projects//locations//agents//flows//versions/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The Flow to create an Version for. Format: `projects//locations//agents//flows/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/versions', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified Version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Format: projects//locations//agents//flows//versions/. Version ID is a self-increasing number generated by Dialogflow upon version creation.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields get updated. Currently only `description` and `display_name` can be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.versions.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified Version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Version to delete. Format: `projects//locations//agents//flows//versions/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The Version to be loaded to draft flow. Format: `projects//locations//agents//flows//versions/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.versions.load = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:load', 'POST', apiParams, clientConfig);

    /**
     * Compares the specified base version with target version.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.baseVersion - (Required) Required. Name of the base flow version to compare with the target version. Use version ID `0` to indicate the draft version of the specified flow. Format: `projects//locations//agents//flows//versions/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.flows.versions.compareVersions = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+baseVersion}:compareVersions', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.changelogs = {};

    /**
     * Returns the list of Changelogs.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter string. Supports filter by user_email, resource, type and create_time. Some examples: 1. By user email: user_email = "someone@google.com" 2. By resource name: resource = "projects/123/locations/global/agents/456/flows/789" 3. By resource display name: display_name = "my agent" 4. By action: action = "Create" 5. By type: type = "flows" 6. By create time. Currently predicates on `create_time` and `create_time_epoch_seconds` are supported: create_time_epoch_seconds > 1551790877 AND create_time <= 2017-01-15T01:30:15.01Z 7. Combination of above filters: resource = "projects/123/locations/global/agents/456/flows/789" AND user_email = "someone@google.com" AND create_time <= 2017-01-15T01:30:15.01Z
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent containing the changelogs. Format: `projects//locations//agents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.changelogs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/changelogs', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified Changelog.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the changelog to get. Format: `projects//locations//agents//changelogs/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.changelogs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.agents.entityTypes = {};

    /**
     * Retrieves the specified entity type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to retrieve the entity type for. The following fields are language dependent: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.name - (Required) Required. The name of the entity type. Format: `projects//locations//agents//entityTypes/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an entity type in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language of the following fields in `entity_type`: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.parent - (Required) Required. The agent to create a entity type for. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/entityTypes', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified entity type. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language of the following fields in `entity_type`: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.name - (Required) The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType. Format: `projects//locations//agents//entityTypes/`.
     * @param {string} apiParams.updateMask - The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified entity type. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - This field has no effect for entity type not being used. For entity types that are used by intents or pages: * If `force` is set to false, an error will be returned with message indicating the referencing resources. * If `force` is set to true, Dialogflow will remove the entity type, as well as any references to the entity type (i.e. Page parameter of the entity type will be changed to '@sys.any' and intent parameter of the entity type will be removed).
     * @param {string} apiParams.name - (Required) Required. The name of the entity type to delete. Format: `projects//locations//agents//entityTypes/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns the list of all entity types in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to list entity types for. The following fields are language dependent: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all entity types for. Format: `projects//locations//agents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/entityTypes', 'GET', apiParams, clientConfig);

    /**
     * Exports the selected entity types.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent agent to export entity types. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.entityTypes.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/entityTypes:export', 'POST', apiParams, clientConfig);

    /**
     * Imports the specified entitytypes into the agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent to import the entity types into. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.entityTypes.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/entityTypes:import', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.intents = {};

    /**
     * Returns the list of all intents in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.intentView - The resource view to apply to the returned intent.
     * @param {string} apiParams.languageCode - The language to list intents for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all intents for. Format: `projects//locations//agents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.intents.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/intents', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified intent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to retrieve the intent for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.name - (Required) Required. The name of the intent. Format: `projects//locations//agents//intents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.intents.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language of the following fields in `intent`: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.parent - (Required) Required. The agent to create an intent for. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.intents.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/intents', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language of the following fields in `intent`: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.name - (Required) The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`.
     * @param {string} apiParams.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.intents.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the intent to delete. Format: `projects//locations//agents//intents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.intents.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Imports the specified intents into the agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportIntentsMetadata - `response`: ImportIntentsResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent to import the intents into. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.intents.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/intents:import', 'POST', apiParams, clientConfig);

    /**
     * Exports the selected intents. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportIntentsMetadata - `response`: ExportIntentsResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The name of the parent agent to export intents. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.intents.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/intents:export', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.sessions = {};

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.sessions.detectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+session}:detectIntent', 'POST', apiParams, clientConfig);

    /**
     * Processes a natural language query and returns structured, actionable data as a result through server-side streaming. Server-side streaming allows Dialogflow to send [partial responses](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment#partial-response) earlier in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.sessions.serverStreamingDetectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+session}:serverStreamingDetectIntent', 'POST', apiParams, clientConfig);

    /**
     * Returns preliminary intent match results, doesn't change the session status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.sessions.matchIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+session}:matchIntent', 'POST', apiParams, clientConfig);

    /**
     * Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.sessions.fulfillIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+session}:fulfillIntent', 'POST', apiParams, clientConfig);

    /**
     * Updates the feedback received from the user for a single turn of the bot response.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session the feedback was sent to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.sessions.submitAnswerFeedback = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+session}:submitAnswerFeedback', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.sessions.entityTypes = {};

    /**
     * Returns the list of all session entity types in the specified session.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The session to list all session entity types from. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.sessions.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/entityTypes', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified session entity type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.sessions.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a session entity type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The session to create a session entity type for. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.sessions.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/entityTypes', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified session entity type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {string} apiParams.updateMask - The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.sessions.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified session entity type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the session entity type to delete. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.sessions.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.transitionRouteGroups = {};

    /**
     * Returns the list of all transition route groups in the specified flow.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to list transition route groups for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The flow to list all transition route groups for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.transitionRouteGroups.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/transitionRouteGroups', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified TransitionRouteGroup.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to retrieve the transition route group for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.name - (Required) Required. The name of the TransitionRouteGroup. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.transitionRouteGroups.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.parent - (Required) Required. The flow to create an TransitionRouteGroup for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/` for agent-level groups.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.transitionRouteGroups.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/transitionRouteGroups', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} apiParams.name - (Required) The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/` .
     * @param {string} apiParams.updateMask - The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.transitionRouteGroups.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - This field has no effect for transition route group that no page is using. If the transition route group is referenced by any page: * If `force` is set to false, an error will be returned with message indicating pages that reference the transition route group. * If `force` is set to true, Dialogflow will remove the transition route group, as well as any reference to it.
     * @param {string} apiParams.name - (Required) Required. The name of the TransitionRouteGroup to delete. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.transitionRouteGroups.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.testCases = {};

    /**
     * Fetches a list of test cases for a given agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 20. Note that when TestCaseView = FULL, the maximum page size allowed is 20. When TestCaseView = BASIC, the maximum page size allowed is 500.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all pages for. Format: `projects//locations//agents/`.
     * @param {string} apiParams.view - Specifies whether response should include all fields or just the metadata.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.testCases.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/testCases', 'GET', apiParams, clientConfig);

    /**
     * Batch deletes test cases.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent to delete test cases from. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.testCases.batchDelete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/testCases:batchDelete', 'POST', apiParams, clientConfig);

    /**
     * Gets a test case.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the testcase. Format: `projects//locations//agents//testCases/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.testCases.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a test case for the given agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent to create the test case for. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.testCases.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/testCases', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified test case.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents//testCases/`.
     * @param {string} apiParams.updateMask - Required. The mask to specify which fields should be updated. The `creationTime` and `lastTestResult` cannot be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.testCases.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Format of test case name to run: `projects//locations//agents//testCases/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.testCases.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:run', 'POST', apiParams, clientConfig);

    /**
     * Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. Agent name. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.testCases.batchRun = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/testCases:batchRun', 'POST', apiParams, clientConfig);

    /**
     * Calculates the test coverage for an agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.agent - (Required) Required. The agent to calculate coverage for. Format: `projects//locations//agents/`.
     * @param {string} apiParams.type - Required. The type of coverage requested.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.testCases.calculateCoverage = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+agent}/testCases:calculateCoverage', 'GET', apiParams, clientConfig);

    /**
     * Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent to import test cases to. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.testCases.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/testCases:import', 'POST', apiParams, clientConfig);

    /**
     * Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent where to export test cases from. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.testCases.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/testCases:export', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.testCases.results = {};

    /**
     * Fetches the list of run results for the given test case. A maximum of 100 results are kept for each test case.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The filter expression used to filter test case results. See [API Filtering](https://aip.dev/160). The expression is case insensitive. Only 'AND' is supported for logical operators. The supported syntax is listed below in detail: [AND ] ... [AND latest] The supported fields and operators are: field operator `environment` `=`, `IN` (Use value `draft` for draft environment) `test_time` `>`, `<` `latest` only returns the latest test result in all results for each test case. Examples: * "environment=draft AND latest" matches the latest test result for each test case in the draft environment. * "environment IN (e1,e2)" matches any test case results with an environment resource name of either "e1" or "e2". * "test_time > 1602540713" matches any test case results with test time later than a unix timestamp in seconds 1602540713.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The test case to list results for. Format: `projects//locations//agents//testCases/`. Specify a `-` as a wildcard for TestCase ID to list results across multiple test cases.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.testCases.results.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/results', 'GET', apiParams, clientConfig);

    /**
     * Gets a test case result.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the testcase. Format: `projects//locations//agents//testCases//results/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.testCases.results.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.agents.webhooks = {};

    /**
     * Returns the list of all webhooks in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all webhooks for. Format: `projects//locations//agents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.webhooks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/webhooks', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified webhook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the webhook. Format: `projects//locations//agents//webhooks/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.webhooks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a webhook in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent to create a webhook for. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.webhooks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/webhooks', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified webhook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`.
     * @param {string} apiParams.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.webhooks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified webhook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - This field has no effect for webhook not being used. For webhooks that are used by pages/flows/transition route groups: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the webhook, as well as any references to the webhook (i.e. Webhook and tagin fulfillments that point to this webhook will be removed).
     * @param {string} apiParams.name - (Required) Required. The name of the webhook to delete. Format: `projects//locations//agents//webhooks/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.webhooks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.environments = {};

    /**
     * Returns the list of all environments in the specified Agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 20 and at most 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The Agent to list all environments for. Format: `projects//locations//agents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/environments', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified Environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Environment. Format: `projects//locations//agents//environments/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The Agent to create an Environment for. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/environments', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the environment. Format: `projects//locations//agents//environments/`.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified Environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Environment to delete. Format: `projects//locations//agents//environments/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Looks up the history of the specified Environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the environment to look up the history for. Format: `projects//locations//agents//environments/`.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.lookupEnvironmentHistory = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:lookupEnvironmentHistory', 'GET', apiParams, clientConfig);

    /**
     * Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environment - (Required) Required. Format: `projects//locations//agents//environments/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.runContinuousTest = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+environment}:runContinuousTest', 'POST', apiParams, clientConfig);

    /**
     * Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.environment - (Required) Required. The environment to deploy the flow to. Format: `projects//locations//agents//environments/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.deployFlow = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+environment}:deployFlow', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.environments.deployments = {};

    /**
     * Returns the list of all deployments in the specified Environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 20 and at most 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The Environment to list all environments for. Format: `projects//locations//agents//environments/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.deployments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/deployments', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified Deployment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Deployment. Format: `projects//locations//agents//environments//deployments/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.deployments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.agents.environments.sessions = {};

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.sessions.detectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+session}:detectIntent', 'POST', apiParams, clientConfig);

    /**
     * Processes a natural language query and returns structured, actionable data as a result through server-side streaming. Server-side streaming allows Dialogflow to send [partial responses](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment#partial-response) earlier in a single request.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.sessions.serverStreamingDetectIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+session}:serverStreamingDetectIntent', 'POST', apiParams, clientConfig);

    /**
     * Returns preliminary intent match results, doesn't change the session status.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.sessions.matchIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+session}:matchIntent', 'POST', apiParams, clientConfig);

    /**
     * Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.sessions.fulfillIntent = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+session}:fulfillIntent', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.environments.sessions.entityTypes = {};

    /**
     * Returns the list of all session entity types in the specified session.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The session to list all session entity types from. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.sessions.entityTypes.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/entityTypes', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified session entity type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.sessions.entityTypes.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a session entity type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The session to create a session entity type for. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.sessions.entityTypes.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/entityTypes', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified session entity type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {string} apiParams.updateMask - The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.sessions.entityTypes.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified session entity type.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the session entity type to delete. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.sessions.entityTypes.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.environments.continuousTestResults = {};

    /**
     * Fetches a list of continuous test results for a given environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The environment to list results for. Format: `projects//locations//agents//environments/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.continuousTestResults.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/continuousTestResults', 'GET', apiParams, clientConfig);

    this.projects.locations.agents.environments.experiments = {};

    /**
     * Returns the list of all experiments in the specified Environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 20 and at most 100.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The Environment to list all environments for. Format: `projects//locations//agents//environments/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.experiments.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/experiments', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified Experiment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Environment. Format: `projects//locations//agents//environments//experiments/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.experiments.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates an Experiment in the specified Environment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The Agent to create an Environment for. Format: `projects//locations//agents//environments/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.experiments.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/experiments', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified Experiment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the experiment. Format: projects//locations//agents//environments//experiments/.
     * @param {string} apiParams.updateMask - Required. The mask to control which fields get updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.experiments.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified Experiment.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Environment to delete. Format: `projects//locations//agents//environments//experiments/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.experiments.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the experiment to start. Format: `projects//locations//agents//environments//experiments/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.experiments.start = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:start', 'POST', apiParams, clientConfig);

    /**
     * Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Resource name of the experiment to stop. Format: `projects//locations//agents//environments//experiments/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.environments.experiments.stop = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:stop', 'POST', apiParams, clientConfig);

    this.projects.locations.agents.generators = {};

    /**
     * Returns the list of all generators in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to list generators for.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list all generators for. Format: `projects//locations//agents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.generators.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/generators', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified generator.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to list generators for.
     * @param {string} apiParams.name - (Required) Required. The name of the generator. Format: `projects//locations//agents//generators/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.generators.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Creates a generator in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to create generators for the following fields: * `Generator.prompt_text.text` If not specified, the agent's default language is used.
     * @param {string} apiParams.parent - (Required) Required. The agent to create a generator for. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.generators.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/generators', 'POST', apiParams, clientConfig);

    /**
     * Update the specified generator.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - The language to list generators for.
     * @param {string} apiParams.name - (Required) The unique identifier of the generator. Must be set for the Generators.UpdateGenerator method. Generators.CreateGenerate populates the name automatically. Format: `projects//locations//agents//generators/`.
     * @param {string} apiParams.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.generators.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes the specified generators.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - This field has no effect for generators not being used. For generators that are used by pages/flows/transition route groups: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the generator, as well as any references to the generator (i.e. Generator) in fulfillments.
     * @param {string} apiParams.name - (Required) Required. The name of the generator to delete. Format: `projects//locations//agents//generators/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.generators.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.playbooks = {};

    /**
     * Creates a playbook in a specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent to create a playbook for. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/playbooks', 'POST', apiParams, clientConfig);

    /**
     * Deletes a specified playbook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the playbook to delete. Format: `projects//locations//agents//playbooks/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns a list of playbooks in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list playbooks from. Format: `projects//locations//agents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/playbooks', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified Playbook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the playbook. Format: `projects//locations//agents//playbooks/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Exports the specified playbook to a binary file. Note that resources (e.g. examples, tools) that the playbook references will also be exported.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the playbook to export. Format: `projects//locations//agents//playbooks/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.export = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:export', 'POST', apiParams, clientConfig);

    /**
     * Imports the specified playbook to the specified agent from a binary file.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent to import the playbook into. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.import = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/playbooks:import', 'POST', apiParams, clientConfig);

    /**
     * Updates the specified Playbook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The unique identifier of the playbook. Format: `projects//locations//agents//playbooks/`.
     * @param {string} apiParams.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.agents.playbooks.examples = {};

    /**
     * Creates an example in the specified playbook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The playbook to create an example for. Format: `projects//locations//agents//playbooks/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.examples.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/examples', 'POST', apiParams, clientConfig);

    /**
     * Deletes the specified example.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the example to delete. Format: `projects//locations//agents//playbooks//examples/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.examples.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Returns a list of examples in the specified playbook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.languageCode - Optional. The language to list examples for. If not specified, list all examples under the playbook. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The playbook to list the examples from. Format: `projects//locations//agents//playbooks/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.examples.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/examples', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified example.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the example. Format: `projects//locations//agents//playbooks//examples/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.examples.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the specified example.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The unique identifier of the playbook example. Format: `projects//locations//agents//playbooks//examples/`.
     * @param {string} apiParams.updateMask - Optional. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.examples.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    this.projects.locations.agents.playbooks.versions = {};

    /**
     * Creates a version for the specified Playbook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The playbook to create a version for. Format: `projects//locations//agents//playbooks/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/versions', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the specified version of the Playbook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the playbook version. Format: `projects//locations//agents//playbooks//versions/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified version of the Playbook and stores it as the current playbook draft, returning the playbook with resources updated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the playbook version. Format: `projects//locations//agents//playbooks//versions/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.versions.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:restore', 'POST', apiParams, clientConfig);

    /**
     * Lists versions for the specified Playbook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The playbook to list versions for. Format: `projects//locations//agents//playbooks/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/versions', 'GET', apiParams, clientConfig);

    /**
     * Deletes the specified version of the Playbook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the playbook version to delete. Format: `projects//locations//agents//playbooks//versions/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.playbooks.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.tools = {};

    /**
     * Creates a Tool in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The agent to create a Tool for. Format: `projects//locations//agents/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.tools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/tools', 'POST', apiParams, clientConfig);

    /**
     * Returns a list of Tools in the specified agent.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The agent to list the Tools from. Format: `projects//locations//agents/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.tools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/tools', 'GET', apiParams, clientConfig);

    /**
     * Retrieves the specified Tool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the Tool. Format: `projects//locations//agents//tools/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.tools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Update the specified Tool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The unique identifier of the Tool. Format: `projects//locations//agents//tools/`.
     * @param {string} apiParams.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.tools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Deletes a specified Tool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - This field has no effect for Tools not being used. For Tools that are used: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the tool, as well as any references to the tool.
     * @param {string} apiParams.name - (Required) Required. The name of the Tool to be deleted. Format: `projects//locations//agents//tools/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.tools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.agents.tools.versions = {};

    /**
     * List versions of the specified Tool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} apiParams.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} apiParams.parent - (Required) Required. The parent of the tool versions. Format: `projects//locations//agents//tools/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.tools.versions.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/versions', 'GET', apiParams, clientConfig);

    /**
     * Creates a version for the specified Tool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The tool to create a version for. Format: `projects//locations//agents//tools/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.tools.versions.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+parent}/versions', 'POST', apiParams, clientConfig);

    /**
     * Retrieves the specified version of the Tool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the tool version. Format: `projects//locations//agents//tools//versions/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.tools.versions.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes the specified version of the Tool.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.force - Optional. This field has no effect for Tools not being used. For Tools that are used: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the tool, as well as any references to the tool.
     * @param {string} apiParams.name - (Required) Required. The name of the tool version to delete. Format: `projects//locations//agents//tools//versions/`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.tools.versions.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Retrieves the specified version of the Tool and stores it as the current tool draft, returning the tool with resources updated.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the tool version. Format: `projects//locations//agents//tools//versions/`.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.agents.tools.versions.restore = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v3/{+name}:restore', 'POST', apiParams, clientConfig);
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
