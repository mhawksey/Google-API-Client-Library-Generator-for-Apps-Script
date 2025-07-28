
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

    this.projects.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.operations.list = (params) => this._makeRequest('v3/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.operations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.operations.cancel = (params) => this._makeRequest('v3/{+name}:cancel', 'POST', params);

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v3/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v3/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v3/{+name}:cancel', 'POST', params);

    this.projects.locations.securitySettings = {};

    /**
     * Create security settings in the specified location.
     * @param {string} params.parent - (Required) Required. The location to create an SecuritySettings for. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.securitySettings.create = (params) => this._makeRequest('v3/{+parent}/securitySettings', 'POST', params);

    /**
     * Retrieves the specified SecuritySettings. The returned settings may be stale by up to 1 minute.
     * @param {string} params.name - (Required) Required. Resource name of the settings. Format: `projects//locations//securitySettings/`.
     * @return {object} The API response object.
     */
    this.projects.locations.securitySettings.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Updates the specified SecuritySettings.
     * @param {string} params.name - (Required) Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`.
     * @param {string} params.updateMask - Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.securitySettings.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Returns the list of all security settings in the specified location.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 20 and at most 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The location to list all security settings for. Format: `projects//locations/`.
     * @return {object} The API response object.
     */
    this.projects.locations.securitySettings.list = (params) => this._makeRequest('v3/{+parent}/securitySettings', 'GET', params);

    /**
     * Deletes the specified SecuritySettings.
     * @param {string} params.name - (Required) Required. The name of the SecuritySettings to delete. Format: `projects//locations//securitySettings/`.
     * @return {object} The API response object.
     */
    this.projects.locations.securitySettings.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents = {};

    /**
     * Returns the list of all agents in the specified location.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The location to list all agents for. Format: `projects//locations/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.list = (params) => this._makeRequest('v3/{+parent}/agents', 'GET', params);

    /**
     * Retrieves the specified agent.
     * @param {string} params.name - (Required) Required. The name of the agent. Format: `projects//locations//agents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates an agent in the specified location. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.parent - (Required) Required. The location to create a agent for. Format: `projects//locations/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.create = (params) => this._makeRequest('v3/{+parent}/agents', 'POST', params);

    /**
     * Updates the specified agent. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.name - (Required) The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: `projects//locations//agents/`.
     * @param {string} params.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified agent.
     * @param {string} params.name - (Required) Required. The name of the agent to delete. Format: `projects//locations//agents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Exports the specified agent to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse
     * @param {string} params.name - (Required) Required. The name of the agent to export. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.export = (params) => this._makeRequest('v3/{+name}:export', 'POST', params);

    /**
     * Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.name - (Required) Required. The name of the agent to restore into. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.restore = (params) => this._makeRequest('v3/{+name}:restore', 'POST', params);

    /**
     * Validates the specified agent and creates or updates validation results. The agent in draft version is validated. Please call this API after the training is completed to get the complete validation results.
     * @param {string} params.name - (Required) Required. The agent to validate. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.validate = (params) => this._makeRequest('v3/{+name}:validate', 'POST', params);

    /**
     * Gets the latest agent validation result. Agent validation is performed when ValidateAgent is called.
     * @param {string} params.languageCode - If not specified, the agent's default language is used.
     * @param {string} params.name - (Required) Required. The agent name. Format: `projects//locations//agents//validationResult`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.getValidationResult = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Gets the generative settings for the agent.
     * @param {string} params.languageCode - Required. Language code of the generative settings.
     * @param {string} params.name - (Required) Required. Format: `projects//locations//agents//generativeSettings`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.getGenerativeSettings = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Updates the generative settings for the agent.
     * @param {string} params.name - (Required) Format: `projects//locations//agents//generativeSettings`.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.updateGenerativeSettings = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    this.projects.locations.agents.flows = {};

    /**
     * Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.languageCode - The language of the following fields in `flow`: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.parent - (Required) Required. The agent to create a flow for. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.create = (params) => this._makeRequest('v3/{+parent}/flows', 'POST', params);

    /**
     * Deletes a specified flow.
     * @param {boolean} params.force - This field has no effect for flows with no incoming transitions. For flows with incoming transitions: * If `force` is set to false, an error will be returned with message indicating the incoming transitions. * If `force` is set to true, Dialogflow will remove the flow, as well as any transitions to the flow (i.e. Target flow in event handlers or Target flow in transition routes that point to this flow will be cleared).
     * @param {string} params.name - (Required) Required. The name of the flow to delete. Format: `projects//locations//agents//flows/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Returns the list of all flows in the specified agent.
     * @param {string} params.languageCode - The language to list flows for. The following fields are language dependent: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent containing the flows. Format: `projects//locations//agents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.list = (params) => this._makeRequest('v3/{+parent}/flows', 'GET', params);

    /**
     * Retrieves the specified flow.
     * @param {string} params.languageCode - The language to retrieve the flow for. The following fields are language dependent: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name - (Required) Required. The name of the flow to get. Format: `projects//locations//agents//flows/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Updates the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.languageCode - The language of the following fields in `flow`: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name - (Required) The unique identifier of the flow. Format: `projects//locations//agents//flows/`.
     * @param {string} params.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.name - (Required) Required. The flow to train. Format: `projects//locations//agents//flows/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.train = (params) => this._makeRequest('v3/{+name}:train', 'POST', params);

    /**
     * Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.
     * @param {string} params.name - (Required) Required. The flow to validate. Format: `projects//locations//agents//flows/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.validate = (params) => this._makeRequest('v3/{+name}:validate', 'POST', params);

    /**
     * Gets the latest flow validation result. Flow validation is performed when ValidateFlow is called.
     * @param {string} params.languageCode - If not specified, the agent's default language is used.
     * @param {string} params.name - (Required) Required. The flow name. Format: `projects//locations//agents//flows//validationResult`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.getValidationResult = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.parent - (Required) Required. The agent to import the flow into. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.import = (params) => this._makeRequest('v3/{+parent}/flows:import', 'POST', params);

    /**
     * Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.
     * @param {string} params.name - (Required) Required. The name of the flow to export. Format: `projects//locations//agents//flows/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.export = (params) => this._makeRequest('v3/{+name}:export', 'POST', params);

    this.projects.locations.agents.flows.pages = {};

    /**
     * Returns the list of all pages in the specified flow.
     * @param {string} params.languageCode - The language to list pages for. The following fields are language dependent: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The flow to list all pages for. Format: `projects//locations//agents//flows/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.pages.list = (params) => this._makeRequest('v3/{+parent}/pages', 'GET', params);

    /**
     * Retrieves the specified page.
     * @param {string} params.languageCode - The language to retrieve the page for. The following fields are language dependent: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name - (Required) Required. The name of the page. Format: `projects//locations//agents//flows//pages/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.pages.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates a page in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.languageCode - The language of the following fields in `page`: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.parent - (Required) Required. The flow to create a page for. Format: `projects//locations//agents//flows/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.pages.create = (params) => this._makeRequest('v3/{+parent}/pages', 'POST', params);

    /**
     * Updates the specified page. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.languageCode - The language of the following fields in `page`: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name - (Required) The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`.
     * @param {string} params.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.pages.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified page. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {boolean} params.force - This field has no effect for pages with no incoming transitions. For pages with incoming transitions: * If `force` is set to false, an error will be returned with message indicating the incoming transitions. * If `force` is set to true, Dialogflow will remove the page, as well as any transitions to the page (i.e. Target page in event handlers or Target page in transition routes that point to this page will be cleared).
     * @param {string} params.name - (Required) Required. The name of the page to delete. Format: `projects//locations//agents//Flows//pages/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.pages.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.flows.transitionRouteGroups = {};

    /**
     * Returns the list of all transition route groups in the specified flow.
     * @param {string} params.languageCode - The language to list transition route groups for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The flow to list all transition route groups for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.transitionRouteGroups.list = (params) => this._makeRequest('v3/{+parent}/transitionRouteGroups', 'GET', params);

    /**
     * Retrieves the specified TransitionRouteGroup.
     * @param {string} params.languageCode - The language to retrieve the transition route group for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name - (Required) Required. The name of the TransitionRouteGroup. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.transitionRouteGroups.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.languageCode - The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.parent - (Required) Required. The flow to create an TransitionRouteGroup for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/` for agent-level groups.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.transitionRouteGroups.create = (params) => this._makeRequest('v3/{+parent}/transitionRouteGroups', 'POST', params);

    /**
     * Updates the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.languageCode - The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name - (Required) The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/` .
     * @param {string} params.updateMask - The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.transitionRouteGroups.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {boolean} params.force - This field has no effect for transition route group that no page is using. If the transition route group is referenced by any page: * If `force` is set to false, an error will be returned with message indicating pages that reference the transition route group. * If `force` is set to true, Dialogflow will remove the transition route group, as well as any reference to it.
     * @param {string} params.name - (Required) Required. The name of the TransitionRouteGroup to delete. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.transitionRouteGroups.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.flows.versions = {};

    /**
     * Returns the list of all versions in the specified Flow.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 20 and at most 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The Flow to list all versions for. Format: `projects//locations//agents//flows/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.versions.list = (params) => this._makeRequest('v3/{+parent}/versions', 'GET', params);

    /**
     * Retrieves the specified Version.
     * @param {string} params.name - (Required) Required. The name of the Version. Format: `projects//locations//agents//flows//versions/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.versions.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version
     * @param {string} params.parent - (Required) Required. The Flow to create an Version for. Format: `projects//locations//agents//flows/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.versions.create = (params) => this._makeRequest('v3/{+parent}/versions', 'POST', params);

    /**
     * Updates the specified Version.
     * @param {string} params.name - (Required) Format: projects//locations//agents//flows//versions/. Version ID is a self-increasing number generated by Dialogflow upon version creation.
     * @param {string} params.updateMask - Required. The mask to control which fields get updated. Currently only `description` and `display_name` can be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.versions.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified Version.
     * @param {string} params.name - (Required) Required. The name of the Version to delete. Format: `projects//locations//agents//flows//versions/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.versions.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)
     * @param {string} params.name - (Required) Required. The Version to be loaded to draft flow. Format: `projects//locations//agents//flows//versions/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.versions.load = (params) => this._makeRequest('v3/{+name}:load', 'POST', params);

    /**
     * Compares the specified base version with target version.
     * @param {string} params.baseVersion - (Required) Required. Name of the base flow version to compare with the target version. Use version ID `0` to indicate the draft version of the specified flow. Format: `projects//locations//agents//flows//versions/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.flows.versions.compareVersions = (params) => this._makeRequest('v3/{+baseVersion}:compareVersions', 'POST', params);

    this.projects.locations.agents.changelogs = {};

    /**
     * Returns the list of Changelogs.
     * @param {string} params.filter - The filter string. Supports filter by user_email, resource, type and create_time. Some examples: 1. By user email: user_email = "someone@google.com" 2. By resource name: resource = "projects/123/locations/global/agents/456/flows/789" 3. By resource display name: display_name = "my agent" 4. By action: action = "Create" 5. By type: type = "flows" 6. By create time. Currently predicates on `create_time` and `create_time_epoch_seconds` are supported: create_time_epoch_seconds > 1551790877 AND create_time <= 2017-01-15T01:30:15.01Z 7. Combination of above filters: resource = "projects/123/locations/global/agents/456/flows/789" AND user_email = "someone@google.com" AND create_time <= 2017-01-15T01:30:15.01Z
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent containing the changelogs. Format: `projects//locations//agents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.changelogs.list = (params) => this._makeRequest('v3/{+parent}/changelogs', 'GET', params);

    /**
     * Retrieves the specified Changelog.
     * @param {string} params.name - (Required) Required. The name of the changelog to get. Format: `projects//locations//agents//changelogs/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.changelogs.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.projects.locations.agents.entityTypes = {};

    /**
     * Retrieves the specified entity type.
     * @param {string} params.languageCode - The language to retrieve the entity type for. The following fields are language dependent: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name - (Required) Required. The name of the entity type. Format: `projects//locations//agents//entityTypes/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.entityTypes.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates an entity type in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.languageCode - The language of the following fields in `entity_type`: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.parent - (Required) Required. The agent to create a entity type for. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.entityTypes.create = (params) => this._makeRequest('v3/{+parent}/entityTypes', 'POST', params);

    /**
     * Updates the specified entity type. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.languageCode - The language of the following fields in `entity_type`: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name - (Required) The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType. Format: `projects//locations//agents//entityTypes/`.
     * @param {string} params.updateMask - The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.entityTypes.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified entity type. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {boolean} params.force - This field has no effect for entity type not being used. For entity types that are used by intents or pages: * If `force` is set to false, an error will be returned with message indicating the referencing resources. * If `force` is set to true, Dialogflow will remove the entity type, as well as any references to the entity type (i.e. Page parameter of the entity type will be changed to '@sys.any' and intent parameter of the entity type will be removed).
     * @param {string} params.name - (Required) Required. The name of the entity type to delete. Format: `projects//locations//agents//entityTypes/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.entityTypes.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Returns the list of all entity types in the specified agent.
     * @param {string} params.languageCode - The language to list entity types for. The following fields are language dependent: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all entity types for. Format: `projects//locations//agents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.entityTypes.list = (params) => this._makeRequest('v3/{+parent}/entityTypes', 'GET', params);

    /**
     * Exports the selected entity types.
     * @param {string} params.parent - (Required) Required. The name of the parent agent to export entity types. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.entityTypes.export = (params) => this._makeRequest('v3/{+parent}/entityTypes:export', 'POST', params);

    /**
     * Imports the specified entitytypes into the agent.
     * @param {string} params.parent - (Required) Required. The agent to import the entity types into. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.entityTypes.import = (params) => this._makeRequest('v3/{+parent}/entityTypes:import', 'POST', params);

    this.projects.locations.agents.intents = {};

    /**
     * Returns the list of all intents in the specified agent.
     * @param {string} params.intentView - The resource view to apply to the returned intent.
     * @param {string} params.languageCode - The language to list intents for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all intents for. Format: `projects//locations//agents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.intents.list = (params) => this._makeRequest('v3/{+parent}/intents', 'GET', params);

    /**
     * Retrieves the specified intent.
     * @param {string} params.languageCode - The language to retrieve the intent for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name - (Required) Required. The name of the intent. Format: `projects//locations//agents//intents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.intents.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.languageCode - The language of the following fields in `intent`: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.parent - (Required) Required. The agent to create an intent for. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.intents.create = (params) => this._makeRequest('v3/{+parent}/intents', 'POST', params);

    /**
     * Updates the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.languageCode - The language of the following fields in `intent`: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name - (Required) The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`.
     * @param {string} params.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.intents.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.name - (Required) Required. The name of the intent to delete. Format: `projects//locations//agents//intents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.intents.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Imports the specified intents into the agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportIntentsMetadata - `response`: ImportIntentsResponse
     * @param {string} params.parent - (Required) Required. The agent to import the intents into. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.intents.import = (params) => this._makeRequest('v3/{+parent}/intents:import', 'POST', params);

    /**
     * Exports the selected intents. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportIntentsMetadata - `response`: ExportIntentsResponse
     * @param {string} params.parent - (Required) Required. The name of the parent agent to export intents. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.intents.export = (params) => this._makeRequest('v3/{+parent}/intents:export', 'POST', params);

    this.projects.locations.agents.sessions = {};

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     * @param {string} params.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.sessions.detectIntent = (params) => this._makeRequest('v3/{+session}:detectIntent', 'POST', params);

    /**
     * Processes a natural language query and returns structured, actionable data as a result through server-side streaming. Server-side streaming allows Dialogflow to send [partial responses](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment#partial-response) earlier in a single request.
     * @param {string} params.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.sessions.serverStreamingDetectIntent = (params) => this._makeRequest('v3/{+session}:serverStreamingDetectIntent', 'POST', params);

    /**
     * Returns preliminary intent match results, doesn't change the session status.
     * @param {string} params.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.sessions.matchIntent = (params) => this._makeRequest('v3/{+session}:matchIntent', 'POST', params);

    /**
     * Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
     * @param {string} params.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.sessions.fulfillIntent = (params) => this._makeRequest('v3/{+session}:fulfillIntent', 'POST', params);

    /**
     * Updates the feedback received from the user for a single turn of the bot response.
     * @param {string} params.session - (Required) Required. The name of the session the feedback was sent to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.sessions.submitAnswerFeedback = (params) => this._makeRequest('v3/{+session}:submitAnswerFeedback', 'POST', params);

    this.projects.locations.agents.sessions.entityTypes = {};

    /**
     * Returns the list of all session entity types in the specified session.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The session to list all session entity types from. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.sessions.entityTypes.list = (params) => this._makeRequest('v3/{+parent}/entityTypes', 'GET', params);

    /**
     * Retrieves the specified session entity type.
     * @param {string} params.name - (Required) Required. The name of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.sessions.entityTypes.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates a session entity type.
     * @param {string} params.parent - (Required) Required. The session to create a session entity type for. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.sessions.entityTypes.create = (params) => this._makeRequest('v3/{+parent}/entityTypes', 'POST', params);

    /**
     * Updates the specified session entity type.
     * @param {string} params.name - (Required) Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {string} params.updateMask - The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.sessions.entityTypes.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified session entity type.
     * @param {string} params.name - (Required) Required. The name of the session entity type to delete. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.sessions.entityTypes.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.transitionRouteGroups = {};

    /**
     * Returns the list of all transition route groups in the specified flow.
     * @param {string} params.languageCode - The language to list transition route groups for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The flow to list all transition route groups for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.transitionRouteGroups.list = (params) => this._makeRequest('v3/{+parent}/transitionRouteGroups', 'GET', params);

    /**
     * Retrieves the specified TransitionRouteGroup.
     * @param {string} params.languageCode - The language to retrieve the transition route group for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name - (Required) Required. The name of the TransitionRouteGroup. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.transitionRouteGroups.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.languageCode - The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.parent - (Required) Required. The flow to create an TransitionRouteGroup for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/` for agent-level groups.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.transitionRouteGroups.create = (params) => this._makeRequest('v3/{+parent}/transitionRouteGroups', 'POST', params);

    /**
     * Updates the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {string} params.languageCode - The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used.
     * @param {string} params.name - (Required) The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/` .
     * @param {string} params.updateMask - The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.transitionRouteGroups.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).
     * @param {boolean} params.force - This field has no effect for transition route group that no page is using. If the transition route group is referenced by any page: * If `force` is set to false, an error will be returned with message indicating pages that reference the transition route group. * If `force` is set to true, Dialogflow will remove the transition route group, as well as any reference to it.
     * @param {string} params.name - (Required) Required. The name of the TransitionRouteGroup to delete. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.transitionRouteGroups.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.testCases = {};

    /**
     * Fetches a list of test cases for a given agent.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 20. Note that when TestCaseView = FULL, the maximum page size allowed is 20. When TestCaseView = BASIC, the maximum page size allowed is 500.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all pages for. Format: `projects//locations//agents/`.
     * @param {string} params.view - Specifies whether response should include all fields or just the metadata.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.testCases.list = (params) => this._makeRequest('v3/{+parent}/testCases', 'GET', params);

    /**
     * Batch deletes test cases.
     * @param {string} params.parent - (Required) Required. The agent to delete test cases from. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.testCases.batchDelete = (params) => this._makeRequest('v3/{+parent}/testCases:batchDelete', 'POST', params);

    /**
     * Gets a test case.
     * @param {string} params.name - (Required) Required. The name of the testcase. Format: `projects//locations//agents//testCases/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.testCases.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates a test case for the given agent.
     * @param {string} params.parent - (Required) Required. The agent to create the test case for. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.testCases.create = (params) => this._makeRequest('v3/{+parent}/testCases', 'POST', params);

    /**
     * Updates the specified test case.
     * @param {string} params.name - (Required) The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents//testCases/`.
     * @param {string} params.updateMask - Required. The mask to specify which fields should be updated. The `creationTime` and `lastTestResult` cannot be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.testCases.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse
     * @param {string} params.name - (Required) Required. Format of test case name to run: `projects//locations//agents//testCases/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.testCases.run = (params) => this._makeRequest('v3/{+name}:run', 'POST', params);

    /**
     * Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse
     * @param {string} params.parent - (Required) Required. Agent name. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.testCases.batchRun = (params) => this._makeRequest('v3/{+parent}/testCases:batchRun', 'POST', params);

    /**
     * Calculates the test coverage for an agent.
     * @param {string} params.agent - (Required) Required. The agent to calculate coverage for. Format: `projects//locations//agents/`.
     * @param {string} params.type - Required. The type of coverage requested.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.testCases.calculateCoverage = (params) => this._makeRequest('v3/{+agent}/testCases:calculateCoverage', 'GET', params);

    /**
     * Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse
     * @param {string} params.parent - (Required) Required. The agent to import test cases to. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.testCases.import = (params) => this._makeRequest('v3/{+parent}/testCases:import', 'POST', params);

    /**
     * Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse
     * @param {string} params.parent - (Required) Required. The agent where to export test cases from. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.testCases.export = (params) => this._makeRequest('v3/{+parent}/testCases:export', 'POST', params);

    this.projects.locations.agents.testCases.results = {};

    /**
     * Fetches the list of run results for the given test case. A maximum of 100 results are kept for each test case.
     * @param {string} params.filter - The filter expression used to filter test case results. See [API Filtering](https://aip.dev/160). The expression is case insensitive. Only 'AND' is supported for logical operators. The supported syntax is listed below in detail: [AND ] ... [AND latest] The supported fields and operators are: field operator `environment` `=`, `IN` (Use value `draft` for draft environment) `test_time` `>`, `<` `latest` only returns the latest test result in all results for each test case. Examples: * "environment=draft AND latest" matches the latest test result for each test case in the draft environment. * "environment IN (e1,e2)" matches any test case results with an environment resource name of either "e1" or "e2". * "test_time > 1602540713" matches any test case results with test time later than a unix timestamp in seconds 1602540713.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The test case to list results for. Format: `projects//locations//agents//testCases/`. Specify a `-` as a wildcard for TestCase ID to list results across multiple test cases.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.testCases.results.list = (params) => this._makeRequest('v3/{+parent}/results', 'GET', params);

    /**
     * Gets a test case result.
     * @param {string} params.name - (Required) Required. The name of the testcase. Format: `projects//locations//agents//testCases//results/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.testCases.results.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.projects.locations.agents.webhooks = {};

    /**
     * Returns the list of all webhooks in the specified agent.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all webhooks for. Format: `projects//locations//agents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.webhooks.list = (params) => this._makeRequest('v3/{+parent}/webhooks', 'GET', params);

    /**
     * Retrieves the specified webhook.
     * @param {string} params.name - (Required) Required. The name of the webhook. Format: `projects//locations//agents//webhooks/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.webhooks.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates a webhook in the specified agent.
     * @param {string} params.parent - (Required) Required. The agent to create a webhook for. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.webhooks.create = (params) => this._makeRequest('v3/{+parent}/webhooks', 'POST', params);

    /**
     * Updates the specified webhook.
     * @param {string} params.name - (Required) The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`.
     * @param {string} params.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.webhooks.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified webhook.
     * @param {boolean} params.force - This field has no effect for webhook not being used. For webhooks that are used by pages/flows/transition route groups: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the webhook, as well as any references to the webhook (i.e. Webhook and tagin fulfillments that point to this webhook will be removed).
     * @param {string} params.name - (Required) Required. The name of the webhook to delete. Format: `projects//locations//agents//webhooks/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.webhooks.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.environments = {};

    /**
     * Returns the list of all environments in the specified Agent.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 20 and at most 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The Agent to list all environments for. Format: `projects//locations//agents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.list = (params) => this._makeRequest('v3/{+parent}/environments', 'GET', params);

    /**
     * Retrieves the specified Environment.
     * @param {string} params.name - (Required) Required. The name of the Environment. Format: `projects//locations//agents//environments/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
     * @param {string} params.parent - (Required) Required. The Agent to create an Environment for. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.create = (params) => this._makeRequest('v3/{+parent}/environments', 'POST', params);

    /**
     * Updates the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment
     * @param {string} params.name - (Required) The name of the environment. Format: `projects//locations//agents//environments/`.
     * @param {string} params.updateMask - Required. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified Environment.
     * @param {string} params.name - (Required) Required. The name of the Environment to delete. Format: `projects//locations//agents//environments/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Looks up the history of the specified Environment.
     * @param {string} params.name - (Required) Required. Resource name of the environment to look up the history for. Format: `projects//locations//agents//environments/`.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.lookupEnvironmentHistory = (params) => this._makeRequest('v3/{+name}:lookupEnvironmentHistory', 'GET', params);

    /**
     * Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse
     * @param {string} params.environment - (Required) Required. Format: `projects//locations//agents//environments/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.runContinuousTest = (params) => this._makeRequest('v3/{+environment}:runContinuousTest', 'POST', params);

    /**
     * Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse
     * @param {string} params.environment - (Required) Required. The environment to deploy the flow to. Format: `projects//locations//agents//environments/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.deployFlow = (params) => this._makeRequest('v3/{+environment}:deployFlow', 'POST', params);

    this.projects.locations.agents.environments.deployments = {};

    /**
     * Returns the list of all deployments in the specified Environment.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 20 and at most 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The Environment to list all environments for. Format: `projects//locations//agents//environments/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.deployments.list = (params) => this._makeRequest('v3/{+parent}/deployments', 'GET', params);

    /**
     * Retrieves the specified Deployment.
     * @param {string} params.name - (Required) Required. The name of the Deployment. Format: `projects//locations//agents//environments//deployments/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.deployments.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    this.projects.locations.agents.environments.sessions = {};

    /**
     * Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     * @param {string} params.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.sessions.detectIntent = (params) => this._makeRequest('v3/{+session}:detectIntent', 'POST', params);

    /**
     * Processes a natural language query and returns structured, actionable data as a result through server-side streaming. Server-side streaming allows Dialogflow to send [partial responses](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment#partial-response) earlier in a single request.
     * @param {string} params.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.sessions.serverStreamingDetectIntent = (params) => this._makeRequest('v3/{+session}:serverStreamingDetectIntent', 'POST', params);

    /**
     * Returns preliminary intent match results, doesn't change the session status.
     * @param {string} params.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.sessions.matchIntent = (params) => this._makeRequest('v3/{+session}:matchIntent', 'POST', params);

    /**
     * Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.
     * @param {string} params.session - (Required) Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.sessions.fulfillIntent = (params) => this._makeRequest('v3/{+session}:fulfillIntent', 'POST', params);

    this.projects.locations.agents.environments.sessions.entityTypes = {};

    /**
     * Returns the list of all session entity types in the specified session.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The session to list all session entity types from. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.sessions.entityTypes.list = (params) => this._makeRequest('v3/{+parent}/entityTypes', 'GET', params);

    /**
     * Retrieves the specified session entity type.
     * @param {string} params.name - (Required) Required. The name of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.sessions.entityTypes.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates a session entity type.
     * @param {string} params.parent - (Required) Required. The session to create a session entity type for. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.sessions.entityTypes.create = (params) => this._makeRequest('v3/{+parent}/entityTypes', 'POST', params);

    /**
     * Updates the specified session entity type.
     * @param {string} params.name - (Required) Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @param {string} params.updateMask - The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.sessions.entityTypes.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified session entity type.
     * @param {string} params.name - (Required) Required. The name of the session entity type to delete. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.sessions.entityTypes.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.environments.continuousTestResults = {};

    /**
     * Fetches a list of continuous test results for a given environment.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The environment to list results for. Format: `projects//locations//agents//environments/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.continuousTestResults.list = (params) => this._makeRequest('v3/{+parent}/continuousTestResults', 'GET', params);

    this.projects.locations.agents.environments.experiments = {};

    /**
     * Returns the list of all experiments in the specified Environment.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 20 and at most 100.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The Environment to list all environments for. Format: `projects//locations//agents//environments/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.experiments.list = (params) => this._makeRequest('v3/{+parent}/experiments', 'GET', params);

    /**
     * Retrieves the specified Experiment.
     * @param {string} params.name - (Required) Required. The name of the Environment. Format: `projects//locations//agents//environments//experiments/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.experiments.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates an Experiment in the specified Environment.
     * @param {string} params.parent - (Required) Required. The Agent to create an Environment for. Format: `projects//locations//agents//environments/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.experiments.create = (params) => this._makeRequest('v3/{+parent}/experiments', 'POST', params);

    /**
     * Updates the specified Experiment.
     * @param {string} params.name - (Required) The name of the experiment. Format: projects//locations//agents//environments//experiments/.
     * @param {string} params.updateMask - Required. The mask to control which fields get updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.experiments.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified Experiment.
     * @param {string} params.name - (Required) Required. The name of the Environment to delete. Format: `projects//locations//agents//environments//experiments/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.experiments.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.
     * @param {string} params.name - (Required) Required. Resource name of the experiment to start. Format: `projects//locations//agents//environments//experiments/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.experiments.start = (params) => this._makeRequest('v3/{+name}:start', 'POST', params);

    /**
     * Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.
     * @param {string} params.name - (Required) Required. Resource name of the experiment to stop. Format: `projects//locations//agents//environments//experiments/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.environments.experiments.stop = (params) => this._makeRequest('v3/{+name}:stop', 'POST', params);

    this.projects.locations.agents.generators = {};

    /**
     * Returns the list of all generators in the specified agent.
     * @param {string} params.languageCode - The language to list generators for.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list all generators for. Format: `projects//locations//agents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.generators.list = (params) => this._makeRequest('v3/{+parent}/generators', 'GET', params);

    /**
     * Retrieves the specified generator.
     * @param {string} params.languageCode - The language to list generators for.
     * @param {string} params.name - (Required) Required. The name of the generator. Format: `projects//locations//agents//generators/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.generators.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Creates a generator in the specified agent.
     * @param {string} params.languageCode - The language to create generators for the following fields: * `Generator.prompt_text.text` If not specified, the agent's default language is used.
     * @param {string} params.parent - (Required) Required. The agent to create a generator for. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.generators.create = (params) => this._makeRequest('v3/{+parent}/generators', 'POST', params);

    /**
     * Update the specified generator.
     * @param {string} params.languageCode - The language to list generators for.
     * @param {string} params.name - (Required) The unique identifier of the generator. Must be set for the Generators.UpdateGenerator method. Generators.CreateGenerate populates the name automatically. Format: `projects//locations//agents//generators/`.
     * @param {string} params.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.generators.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes the specified generators.
     * @param {boolean} params.force - This field has no effect for generators not being used. For generators that are used by pages/flows/transition route groups: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the generator, as well as any references to the generator (i.e. Generator) in fulfillments.
     * @param {string} params.name - (Required) Required. The name of the generator to delete. Format: `projects//locations//agents//generators/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.generators.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.playbooks = {};

    /**
     * Creates a playbook in a specified agent.
     * @param {string} params.parent - (Required) Required. The agent to create a playbook for. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.create = (params) => this._makeRequest('v3/{+parent}/playbooks', 'POST', params);

    /**
     * Deletes a specified playbook.
     * @param {string} params.name - (Required) Required. The name of the playbook to delete. Format: `projects//locations//agents//playbooks/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Returns a list of playbooks in the specified agent.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list playbooks from. Format: `projects//locations//agents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.list = (params) => this._makeRequest('v3/{+parent}/playbooks', 'GET', params);

    /**
     * Retrieves the specified Playbook.
     * @param {string} params.name - (Required) Required. The name of the playbook. Format: `projects//locations//agents//playbooks/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Exports the specified playbook to a binary file. Note that resources (e.g. examples, tools) that the playbook references will also be exported.
     * @param {string} params.name - (Required) Required. The name of the playbook to export. Format: `projects//locations//agents//playbooks/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.export = (params) => this._makeRequest('v3/{+name}:export', 'POST', params);

    /**
     * Imports the specified playbook to the specified agent from a binary file.
     * @param {string} params.parent - (Required) Required. The agent to import the playbook into. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.import = (params) => this._makeRequest('v3/{+parent}/playbooks:import', 'POST', params);

    /**
     * Updates the specified Playbook.
     * @param {string} params.name - (Required) The unique identifier of the playbook. Format: `projects//locations//agents//playbooks/`.
     * @param {string} params.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    this.projects.locations.agents.playbooks.examples = {};

    /**
     * Creates an example in the specified playbook.
     * @param {string} params.parent - (Required) Required. The playbook to create an example for. Format: `projects//locations//agents//playbooks/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.examples.create = (params) => this._makeRequest('v3/{+parent}/examples', 'POST', params);

    /**
     * Deletes the specified example.
     * @param {string} params.name - (Required) Required. The name of the example to delete. Format: `projects//locations//agents//playbooks//examples/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.examples.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Returns a list of examples in the specified playbook.
     * @param {string} params.languageCode - Optional. The language to list examples for. If not specified, list all examples under the playbook. Note: languages must be enabled in the agent before they can be used.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The playbook to list the examples from. Format: `projects//locations//agents//playbooks/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.examples.list = (params) => this._makeRequest('v3/{+parent}/examples', 'GET', params);

    /**
     * Retrieves the specified example.
     * @param {string} params.name - (Required) Required. The name of the example. Format: `projects//locations//agents//playbooks//examples/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.examples.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Update the specified example.
     * @param {string} params.name - (Required) The unique identifier of the playbook example. Format: `projects//locations//agents//playbooks//examples/`.
     * @param {string} params.updateMask - Optional. The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.examples.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    this.projects.locations.agents.playbooks.versions = {};

    /**
     * Creates a version for the specified Playbook.
     * @param {string} params.parent - (Required) Required. The playbook to create a version for. Format: `projects//locations//agents//playbooks/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.versions.create = (params) => this._makeRequest('v3/{+parent}/versions', 'POST', params);

    /**
     * Retrieves the specified version of the Playbook.
     * @param {string} params.name - (Required) Required. The name of the playbook version. Format: `projects//locations//agents//playbooks//versions/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.versions.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Retrieves the specified version of the Playbook and stores it as the current playbook draft, returning the playbook with resources updated.
     * @param {string} params.name - (Required) Required. The name of the playbook version. Format: `projects//locations//agents//playbooks//versions/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.versions.restore = (params) => this._makeRequest('v3/{+name}:restore', 'POST', params);

    /**
     * Lists versions for the specified Playbook.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The playbook to list versions for. Format: `projects//locations//agents//playbooks/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.versions.list = (params) => this._makeRequest('v3/{+parent}/versions', 'GET', params);

    /**
     * Deletes the specified version of the Playbook.
     * @param {string} params.name - (Required) Required. The name of the playbook version to delete. Format: `projects//locations//agents//playbooks//versions/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.playbooks.versions.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.tools = {};

    /**
     * Creates a Tool in the specified agent.
     * @param {string} params.parent - (Required) Required. The agent to create a Tool for. Format: `projects//locations//agents/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.tools.create = (params) => this._makeRequest('v3/{+parent}/tools', 'POST', params);

    /**
     * Returns a list of Tools in the specified agent.
     * @param {integer} params.pageSize - The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The agent to list the Tools from. Format: `projects//locations//agents/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.tools.list = (params) => this._makeRequest('v3/{+parent}/tools', 'GET', params);

    /**
     * Retrieves the specified Tool.
     * @param {string} params.name - (Required) Required. The name of the Tool. Format: `projects//locations//agents//tools/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.tools.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Update the specified Tool.
     * @param {string} params.name - (Required) The unique identifier of the Tool. Format: `projects//locations//agents//tools/`.
     * @param {string} params.updateMask - The mask to control which fields get updated. If the mask is not present, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.tools.patch = (params) => this._makeRequest('v3/{+name}', 'PATCH', params);

    /**
     * Deletes a specified Tool.
     * @param {boolean} params.force - This field has no effect for Tools not being used. For Tools that are used: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the tool, as well as any references to the tool.
     * @param {string} params.name - (Required) Required. The name of the Tool to be deleted. Format: `projects//locations//agents//tools/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.tools.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    this.projects.locations.agents.tools.versions = {};

    /**
     * List versions of the specified Tool.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return in a single page. By default 100 and at most 1000.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous list request.
     * @param {string} params.parent - (Required) Required. The parent of the tool versions. Format: `projects//locations//agents//tools/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.tools.versions.list = (params) => this._makeRequest('v3/{+parent}/versions', 'GET', params);

    /**
     * Creates a version for the specified Tool.
     * @param {string} params.parent - (Required) Required. The tool to create a version for. Format: `projects//locations//agents//tools/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.tools.versions.create = (params) => this._makeRequest('v3/{+parent}/versions', 'POST', params);

    /**
     * Retrieves the specified version of the Tool.
     * @param {string} params.name - (Required) Required. The name of the tool version. Format: `projects//locations//agents//tools//versions/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.tools.versions.get = (params) => this._makeRequest('v3/{+name}', 'GET', params);

    /**
     * Deletes the specified version of the Tool.
     * @param {boolean} params.force - Optional. This field has no effect for Tools not being used. For Tools that are used: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the tool, as well as any references to the tool.
     * @param {string} params.name - (Required) Required. The name of the tool version to delete. Format: `projects//locations//agents//tools//versions/`.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.tools.versions.delete = (params) => this._makeRequest('v3/{+name}', 'DELETE', params);

    /**
     * Retrieves the specified version of the Tool and stores it as the current tool draft, returning the tool with resources updated.
     * @param {string} params.name - (Required) Required. The name of the tool version. Format: `projects//locations//agents//tools//versions/`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.agents.tools.versions.restore = (params) => this._makeRequest('v3/{+name}:restore', 'POST', params);
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
