# Dialogflow API - Apps Script Client Library

Auto-generated client library for using the **Dialogflow API (version: v3)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 21 Sep 2025 17:22:57 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:22:57 GMT
- **Created:** Sun, 20 Jul 2025 16:31:34 GMT



---

## API Reference

### `projects`

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

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |

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

### `projects.locations.securitySettings`

#### `projects.locations.securitySettings.create()`

Create security settings in the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location to create an SecuritySettings for. Format: `projects//locations/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.securitySettings.get()`

Retrieves the specified SecuritySettings. The returned settings may be stale by up to 1 minute.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the settings. Format: `projects//locations//securitySettings/`. |

#### `projects.locations.securitySettings.patch()`

Updates the specified SecuritySettings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name of the settings. Required for the SecuritySettingsService.UpdateSecuritySettings method. SecuritySettingsService.CreateSecuritySettings populates the name automatically. Format: `projects//locations//securitySettings/`. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.securitySettings.list()`

Returns the list of all security settings in the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location to list all security settings for. Format: `projects//locations/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 20 and at most 100. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.securitySettings.delete()`

Deletes the specified SecuritySettings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the SecuritySettings to delete. Format: `projects//locations//securitySettings/`. |

### `projects.locations.agents`

#### `projects.locations.agents.list()`

Returns the list of all agents in the specified location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location to list all agents for. Format: `projects//locations/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.get()`

Retrieves the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the agent. Format: `projects//locations//agents/`. |

#### `projects.locations.agents.create()`

Creates an agent in the specified location. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location to create a agent for. Format: `projects//locations/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.patch()`

Updates the specified agent. Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the agent. Required for the Agents.UpdateAgent method. Agents.CreateAgent populates the name automatically. Format: `projects//locations//agents/`. |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.delete()`

Deletes the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the agent to delete. Format: `projects//locations//agents/`. |

#### `projects.locations.agents.export()`

Exports the specified agent to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportAgentResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the agent to export. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.restore()`

Restores the specified agent from a binary file. Replaces the current agent with a new one. Note that all existing resources in agent (e.g. intents, entity types, flows) will be removed. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train flows prior to sending them queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the agent to restore into. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.validate()`

Validates the specified agent and creates or updates validation results. The agent in draft version is validated. Please call this API after the training is completed to get the complete validation results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The agent to validate. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.getValidationResult()`

Gets the latest agent validation result. Agent validation is performed when ValidateAgent is called.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The agent name. Format: `projects//locations//agents//validationResult`. |
| `params.languageCode` | `string` | No | If not specified, the agent's default language is used. |

#### `projects.locations.agents.getGenerativeSettings()`

Gets the generative settings for the agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format: `projects//locations//agents//generativeSettings`. |
| `params.languageCode` | `string` | No | Required. Language code of the generative settings. |

#### `projects.locations.agents.updateGenerativeSettings()`

Updates the generative settings for the agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Format: `projects//locations//agents//generativeSettings`. |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.flows`

#### `projects.locations.agents.flows.create()`

Creates a flow in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create a flow for. Format: `projects//locations//agents/`. |
| `params.languageCode` | `string` | No | The language of the following fields in `flow`: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.delete()`

Deletes a specified flow.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the flow to delete. Format: `projects//locations//agents//flows/`. |
| `params.force` | `boolean` | No | This field has no effect for flows with no incoming transitions. For flows with incoming transitions: * If `force` is set to false, an error will be returned with message indicating the incoming transitions. * If `force` is set to true, Dialogflow will remove the flow, as well as any transitions to the flow (i.e. Target flow in event handlers or Target flow in transition routes that point to this flow will be cleared). |

#### `projects.locations.agents.flows.list()`

Returns the list of all flows in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent containing the flows. Format: `projects//locations//agents/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |
| `params.languageCode` | `string` | No | The language to list flows for. The following fields are language dependent: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |

#### `projects.locations.agents.flows.get()`

Retrieves the specified flow.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the flow to get. Format: `projects//locations//agents//flows/`. |
| `params.languageCode` | `string` | No | The language to retrieve the flow for. The following fields are language dependent: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |

#### `projects.locations.agents.flows.patch()`

Updates the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the flow. Format: `projects//locations//agents//flows/`. |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.languageCode` | `string` | No | The language of the following fields in `flow`: * `Flow.event_handlers.trigger_fulfillment.messages` * `Flow.event_handlers.trigger_fulfillment.conditional_cases` * `Flow.transition_routes.trigger_fulfillment.messages` * `Flow.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.train()`

Trains the specified flow. Note that only the flow in 'draft' environment is trained. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty) Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The flow to train. Format: `projects//locations//agents//flows/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.validate()`

Validates the specified flow and creates or updates validation results. Please call this API after the training is completed to get the complete validation results.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The flow to validate. Format: `projects//locations//agents//flows/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.getValidationResult()`

Gets the latest flow validation result. Flow validation is performed when ValidateFlow is called.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The flow name. Format: `projects//locations//agents//flows//validationResult`. |
| `params.languageCode` | `string` | No | If not specified, the agent's default language is used. |

#### `projects.locations.agents.flows.import()`

Imports the specified flow to the specified agent from a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ImportFlowResponse Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to import the flow into. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.export()`

Exports the specified flow to a binary file. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: ExportFlowResponse Note that resources (e.g. intents, entities, webhooks) that the flow references will also be exported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the flow to export. Format: `projects//locations//agents//flows/`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.flows.pages`

#### `projects.locations.agents.flows.pages.list()`

Returns the list of all pages in the specified flow.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The flow to list all pages for. Format: `projects//locations//agents//flows/`. |
| `params.languageCode` | `string` | No | The language to list pages for. The following fields are language dependent: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.flows.pages.get()`

Retrieves the specified page.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the page. Format: `projects//locations//agents//flows//pages/`. |
| `params.languageCode` | `string` | No | The language to retrieve the page for. The following fields are language dependent: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |

#### `projects.locations.agents.flows.pages.create()`

Creates a page in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The flow to create a page for. Format: `projects//locations//agents//flows/`. |
| `params.languageCode` | `string` | No | The language of the following fields in `page`: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.pages.patch()`

Updates the specified page. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the page. Required for the Pages.UpdatePage method. Pages.CreatePage populates the name automatically. Format: `projects//locations//agents//flows//pages/`. |
| `params.languageCode` | `string` | No | The language of the following fields in `page`: * `Page.entry_fulfillment.messages` * `Page.entry_fulfillment.conditional_cases` * `Page.event_handlers.trigger_fulfillment.messages` * `Page.event_handlers.trigger_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages` * `Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.messages` * `Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases` * `Page.transition_routes.trigger_fulfillment.messages` * `Page.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.pages.delete()`

Deletes the specified page. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the page to delete. Format: `projects//locations//agents//Flows//pages/`. |
| `params.force` | `boolean` | No | This field has no effect for pages with no incoming transitions. For pages with incoming transitions: * If `force` is set to false, an error will be returned with message indicating the incoming transitions. * If `force` is set to true, Dialogflow will remove the page, as well as any transitions to the page (i.e. Target page in event handlers or Target page in transition routes that point to this page will be cleared). |

### `projects.locations.agents.flows.transitionRouteGroups`

#### `projects.locations.agents.flows.transitionRouteGroups.list()`

Returns the list of all transition route groups in the specified flow.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The flow to list all transition route groups for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |
| `params.languageCode` | `string` | No | The language to list transition route groups for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |

#### `projects.locations.agents.flows.transitionRouteGroups.get()`

Retrieves the specified TransitionRouteGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TransitionRouteGroup. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/`. |
| `params.languageCode` | `string` | No | The language to retrieve the transition route group for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |

#### `projects.locations.agents.flows.transitionRouteGroups.create()`

Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The flow to create an TransitionRouteGroup for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/` for agent-level groups. |
| `params.languageCode` | `string` | No | The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.transitionRouteGroups.patch()`

Updates the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/` . |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. |
| `params.languageCode` | `string` | No | The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.transitionRouteGroups.delete()`

Deletes the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TransitionRouteGroup to delete. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/`. |
| `params.force` | `boolean` | No | This field has no effect for transition route group that no page is using. If the transition route group is referenced by any page: * If `force` is set to false, an error will be returned with message indicating pages that reference the transition route group. * If `force` is set to true, Dialogflow will remove the transition route group, as well as any reference to it. |

### `projects.locations.agents.flows.versions`

#### `projects.locations.agents.flows.versions.list()`

Returns the list of all versions in the specified Flow.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Flow to list all versions for. Format: `projects//locations//agents//flows/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 20 and at most 100. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.flows.versions.get()`

Retrieves the specified Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Version. Format: `projects//locations//agents//flows//versions/`. |

#### `projects.locations.agents.flows.versions.create()`

Creates a Version in the specified Flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: CreateVersionOperationMetadata - `response`: Version

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Flow to create an Version for. Format: `projects//locations//agents//flows/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.versions.patch()`

Updates the specified Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Format: projects//locations//agents//flows//versions/. Version ID is a self-increasing number generated by Dialogflow upon version creation. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields get updated. Currently only `description` and `display_name` can be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.versions.delete()`

Deletes the specified Version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Version to delete. Format: `projects//locations//agents//flows//versions/`. |

#### `projects.locations.agents.flows.versions.load()`

Loads resources in the specified version to the draft flow. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: An [Empty message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#empty)

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Version to be loaded to draft flow. Format: `projects//locations//agents//flows//versions/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.flows.versions.compareVersions()`

Compares the specified base version with target version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.baseVersion` | `string` | Yes | Required. Name of the base flow version to compare with the target version. Use version ID `0` to indicate the draft version of the specified flow. Format: `projects//locations//agents//flows//versions/`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.changelogs`

#### `projects.locations.agents.changelogs.list()`

Returns the list of Changelogs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent containing the changelogs. Format: `projects//locations//agents/`. |
| `params.filter` | `string` | No | The filter string. Supports filter by user_email, resource, type and create_time. Some examples: 1. By user email: user_email = "someone@google.com" 2. By resource name: resource = "projects/123/locations/global/agents/456/flows/789" 3. By resource display name: display_name = "my agent" 4. By action: action = "Create" 5. By type: type = "flows" 6. By create time. Currently predicates on `create_time` and `create_time_epoch_seconds` are supported: create_time_epoch_seconds > 1551790877 AND create_time <= 2017-01-15T01:30:15.01Z 7. Combination of above filters: resource = "projects/123/locations/global/agents/456/flows/789" AND user_email = "someone@google.com" AND create_time <= 2017-01-15T01:30:15.01Z |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.changelogs.get()`

Retrieves the specified Changelog.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the changelog to get. Format: `projects//locations//agents//changelogs/`. |

### `projects.locations.agents.entityTypes`

#### `projects.locations.agents.entityTypes.get()`

Retrieves the specified entity type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entity type. Format: `projects//locations//agents//entityTypes/`. |
| `params.languageCode` | `string` | No | The language to retrieve the entity type for. The following fields are language dependent: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |

#### `projects.locations.agents.entityTypes.create()`

Creates an entity type in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create a entity type for. Format: `projects//locations//agents/`. |
| `params.languageCode` | `string` | No | The language of the following fields in `entity_type`: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.entityTypes.patch()`

Updates the specified entity type. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the entity type. Required for EntityTypes.UpdateEntityType. Format: `projects//locations//agents//entityTypes/`. |
| `params.languageCode` | `string` | No | The language of the following fields in `entity_type`: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.entityTypes.delete()`

Deletes the specified entity type. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the entity type to delete. Format: `projects//locations//agents//entityTypes/`. |
| `params.force` | `boolean` | No | This field has no effect for entity type not being used. For entity types that are used by intents or pages: * If `force` is set to false, an error will be returned with message indicating the referencing resources. * If `force` is set to true, Dialogflow will remove the entity type, as well as any references to the entity type (i.e. Page parameter of the entity type will be changed to '@sys.any' and intent parameter of the entity type will be removed). |

#### `projects.locations.agents.entityTypes.list()`

Returns the list of all entity types in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all entity types for. Format: `projects//locations//agents/`. |
| `params.languageCode` | `string` | No | The language to list entity types for. The following fields are language dependent: * `EntityType.entities.value` * `EntityType.entities.synonyms` * `EntityType.excluded_phrases.value` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.entityTypes.export()`

Exports the selected entity types.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent agent to export entity types. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.entityTypes.import()`

Imports the specified entitytypes into the agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to import the entity types into. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.intents`

#### `projects.locations.agents.intents.list()`

Returns the list of all intents in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all intents for. Format: `projects//locations//agents/`. |
| `params.languageCode` | `string` | No | The language to list intents for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.intentView` | `string` | No | The resource view to apply to the returned intent. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.intents.get()`

Retrieves the specified intent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the intent. Format: `projects//locations//agents//intents/`. |
| `params.languageCode` | `string` | No | The language to retrieve the intent for. The following fields are language dependent: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |

#### `projects.locations.agents.intents.create()`

Creates an intent in the specified agent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create an intent for. Format: `projects//locations//agents/`. |
| `params.languageCode` | `string` | No | The language of the following fields in `intent`: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.intents.patch()`

Updates the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the intent. Required for the Intents.UpdateIntent method. Intents.CreateIntent populates the name automatically. Format: `projects//locations//agents//intents/`. |
| `params.languageCode` | `string` | No | The language of the following fields in `intent`: * `Intent.training_phrases.parts.text` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.intents.delete()`

Deletes the specified intent. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the intent to delete. Format: `projects//locations//agents//intents/`. |

#### `projects.locations.agents.intents.import()`

Imports the specified intents into the agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportIntentsMetadata - `response`: ImportIntentsResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to import the intents into. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.intents.export()`

Exports the selected intents. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportIntentsMetadata - `response`: ExportIntentsResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The name of the parent agent to export intents. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.sessions`

#### `projects.locations.agents.sessions.detectIntent()`

Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.sessions.serverStreamingDetectIntent()`

Processes a natural language query and returns structured, actionable data as a result through server-side streaming. Server-side streaming allows Dialogflow to send [partial responses](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment#partial-response) earlier in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.sessions.matchIntent()`

Returns preliminary intent match results, doesn't change the session status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.sessions.fulfillIntent()`

Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.sessions.submitAnswerFeedback()`

Updates the feedback received from the user for a single turn of the bot response.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session the feedback was sent to. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.sessions.entityTypes`

#### `projects.locations.agents.sessions.entityTypes.list()`

Returns the list of all session entity types in the specified session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to list all session entity types from. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.sessions.entityTypes.get()`

Retrieves the specified session entity type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. |

#### `projects.locations.agents.sessions.entityTypes.create()`

Creates a session entity type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to create a session entity type for. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.sessions.entityTypes.patch()`

Updates the specified session entity type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.sessions.entityTypes.delete()`

Deletes the specified session entity type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session entity type to delete. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. |

### `projects.locations.agents.transitionRouteGroups`

#### `projects.locations.agents.transitionRouteGroups.list()`

Returns the list of all transition route groups in the specified flow.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The flow to list all transition route groups for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |
| `params.languageCode` | `string` | No | The language to list transition route groups for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |

#### `projects.locations.agents.transitionRouteGroups.get()`

Retrieves the specified TransitionRouteGroup.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TransitionRouteGroup. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/`. |
| `params.languageCode` | `string` | No | The language to retrieve the transition route group for. The following fields are language dependent: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |

#### `projects.locations.agents.transitionRouteGroups.create()`

Creates an TransitionRouteGroup in the specified flow. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The flow to create an TransitionRouteGroup for. Format: `projects//locations//agents//flows/` or `projects//locations//agents/` for agent-level groups. |
| `params.languageCode` | `string` | No | The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.transitionRouteGroups.patch()`

Updates the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the transition route group. TransitionRouteGroups.CreateTransitionRouteGroup populates the name automatically. Format: `projects//locations//agents//flows//transitionRouteGroups/` . |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. |
| `params.languageCode` | `string` | No | The language of the following fields in `TransitionRouteGroup`: * `TransitionRouteGroup.transition_routes.trigger_fulfillment.messages` * `TransitionRouteGroup.transition_routes.trigger_fulfillment.conditional_cases` If not specified, the agent's default language is used. [Many languages](https://cloud.google.com/dialogflow/cx/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.transitionRouteGroups.delete()`

Deletes the specified TransitionRouteGroup. Note: You should always train a flow prior to sending it queries. See the [training documentation](https://cloud.google.com/dialogflow/cx/docs/concept/training).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the TransitionRouteGroup to delete. Format: `projects//locations//agents//flows//transitionRouteGroups/` or `projects//locations//agents//transitionRouteGroups/`. |
| `params.force` | `boolean` | No | This field has no effect for transition route group that no page is using. If the transition route group is referenced by any page: * If `force` is set to false, an error will be returned with message indicating pages that reference the transition route group. * If `force` is set to true, Dialogflow will remove the transition route group, as well as any reference to it. |

### `projects.locations.agents.testCases`

#### `projects.locations.agents.testCases.list()`

Fetches a list of test cases for a given agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all pages for. Format: `projects//locations//agents/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 20. Note that when TestCaseView = FULL, the maximum page size allowed is 20. When TestCaseView = BASIC, the maximum page size allowed is 500. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |
| `params.view` | `string` | No | Specifies whether response should include all fields or just the metadata. |

#### `projects.locations.agents.testCases.batchDelete()`

Batch deletes test cases.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to delete test cases from. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.testCases.get()`

Gets a test case.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the testcase. Format: `projects//locations//agents//testCases/`. |

#### `projects.locations.agents.testCases.create()`

Creates a test case for the given agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create the test case for. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.testCases.patch()`

Updates the specified test case.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the test case. TestCases.CreateTestCase will populate the name automatically. Otherwise use format: `projects//locations//agents//testCases/`. |
| `params.updateMask` | `string` | No | Required. The mask to specify which fields should be updated. The `creationTime` and `lastTestResult` cannot be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.testCases.run()`

Kicks off a test case run. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunTestCaseMetadata - `response`: RunTestCaseResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Format of test case name to run: `projects//locations//agents//testCases/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.testCases.batchRun()`

Kicks off a batch run of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: BatchRunTestCasesMetadata - `response`: BatchRunTestCasesResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Agent name. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.testCases.calculateCoverage()`

Calculates the test coverage for an agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.agent` | `string` | Yes | Required. The agent to calculate coverage for. Format: `projects//locations//agents/`. |
| `params.type` | `string` | No | Required. The type of coverage requested. |

#### `projects.locations.agents.testCases.import()`

Imports the test cases from a Cloud Storage bucket or a local file. It always creates new test cases and won't overwrite any existing ones. The provided ID in the imported test case is neglected. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ImportTestCasesMetadata - `response`: ImportTestCasesResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to import test cases to. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.testCases.export()`

Exports the test cases under the agent to a Cloud Storage bucket or a local file. Filter can be applied to export a subset of test cases. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: ExportTestCasesMetadata - `response`: ExportTestCasesResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent where to export test cases from. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.testCases.results`

#### `projects.locations.agents.testCases.results.list()`

Fetches the list of run results for the given test case. A maximum of 100 results are kept for each test case.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The test case to list results for. Format: `projects//locations//agents//testCases/`. Specify a `-` as a wildcard for TestCase ID to list results across multiple test cases. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |
| `params.filter` | `string` | No | The filter expression used to filter test case results. See [API Filtering](https://aip.dev/160). The expression is case insensitive. Only 'AND' is supported for logical operators. The supported syntax is listed below in detail: [AND ] ... [AND latest] The supported fields and operators are: field operator `environment` `=`, `IN` (Use value `draft` for draft environment) `test_time` `>`, `<` `latest` only returns the latest test result in all results for each test case. Examples: * "environment=draft AND latest" matches the latest test result for each test case in the draft environment. * "environment IN (e1,e2)" matches any test case results with an environment resource name of either "e1" or "e2". * "test_time > 1602540713" matches any test case results with test time later than a unix timestamp in seconds 1602540713. |

#### `projects.locations.agents.testCases.results.get()`

Gets a test case result.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the testcase. Format: `projects//locations//agents//testCases//results/`. |

### `projects.locations.agents.webhooks`

#### `projects.locations.agents.webhooks.list()`

Returns the list of all webhooks in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all webhooks for. Format: `projects//locations//agents/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.webhooks.get()`

Retrieves the specified webhook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the webhook. Format: `projects//locations//agents//webhooks/`. |

#### `projects.locations.agents.webhooks.create()`

Creates a webhook in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create a webhook for. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.webhooks.patch()`

Updates the specified webhook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the webhook. Required for the Webhooks.UpdateWebhook method. Webhooks.CreateWebhook populates the name automatically. Format: `projects//locations//agents//webhooks/`. |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.webhooks.delete()`

Deletes the specified webhook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the webhook to delete. Format: `projects//locations//agents//webhooks/`. |
| `params.force` | `boolean` | No | This field has no effect for webhook not being used. For webhooks that are used by pages/flows/transition route groups: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the webhook, as well as any references to the webhook (i.e. Webhook and tagin fulfillments that point to this webhook will be removed). |

### `projects.locations.agents.environments`

#### `projects.locations.agents.environments.list()`

Returns the list of all environments in the specified Agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Agent to list all environments for. Format: `projects//locations//agents/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 20 and at most 100. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.environments.get()`

Retrieves the specified Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Environment. Format: `projects//locations//agents//environments/`. |

#### `projects.locations.agents.environments.create()`

Creates an Environment in the specified Agent. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Agent to create an Environment for. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.patch()`

Updates the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: An empty [Struct message](https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#struct) - `response`: Environment

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the environment. Format: `projects//locations//agents//environments/`. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields get updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.delete()`

Deletes the specified Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Environment to delete. Format: `projects//locations//agents//environments/`. |

#### `projects.locations.agents.environments.lookupEnvironmentHistory()`

Looks up the history of the specified Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the environment to look up the history for. Format: `projects//locations//agents//environments/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.environments.runContinuousTest()`

Kicks off a continuous test under the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: RunContinuousTestMetadata - `response`: RunContinuousTestResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes | Required. Format: `projects//locations//agents//environments/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.deployFlow()`

Deploys a flow to the specified Environment. This method is a [long-running operation](https://cloud.google.com/dialogflow/cx/docs/how/long-running-operation). The returned `Operation` type has the following method-specific fields: - `metadata`: DeployFlowMetadata - `response`: DeployFlowResponse

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.environment` | `string` | Yes | Required. The environment to deploy the flow to. Format: `projects//locations//agents//environments/`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.environments.deployments`

#### `projects.locations.agents.environments.deployments.list()`

Returns the list of all deployments in the specified Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Environment to list all environments for. Format: `projects//locations//agents//environments/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 20 and at most 100. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.environments.deployments.get()`

Retrieves the specified Deployment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Deployment. Format: `projects//locations//agents//environments//deployments/`. |

### `projects.locations.agents.environments.sessions`

#### `projects.locations.agents.environments.sessions.detectIntent()`

Processes a natural language query and returns structured, actionable data as a result. This method is not idempotent, because it may cause session entity types to be updated, which in turn might affect results of future queries. Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.sessions.serverStreamingDetectIntent()`

Processes a natural language query and returns structured, actionable data as a result through server-side streaming. Server-side streaming allows Dialogflow to send [partial responses](https://cloud.google.com/dialogflow/cx/docs/concept/fulfillment#partial-response) earlier in a single request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). Note: Always use agent versions for production traffic. See [Versions and environments](https://cloud.google.com/dialogflow/cx/docs/concept/version). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.sessions.matchIntent()`

Returns preliminary intent match results, doesn't change the session status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.sessions.fulfillIntent()`

Fulfills a matched intent returned by MatchIntent. Must be called after MatchIntent, with input from MatchIntentResponse. Otherwise, the behavior is undefined.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.session` | `string` | Yes | Required. The name of the session this query is sent to. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. It's up to the API caller to choose an appropriate `Session ID`. It can be a random number or some type of session identifiers (preferably hashed). The length of the `Session ID` must not exceed 36 characters. For more information, see the [sessions guide](https://cloud.google.com/dialogflow/cx/docs/concept/session). |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.environments.sessions.entityTypes`

#### `projects.locations.agents.environments.sessions.entityTypes.list()`

Returns the list of all session entity types in the specified session.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to list all session entity types from. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.environments.sessions.entityTypes.get()`

Retrieves the specified session entity type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. |

#### `projects.locations.agents.environments.sessions.entityTypes.create()`

Creates a session entity type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The session to create a session entity type for. Format: `projects//locations//agents//sessions/` or `projects//locations//agents//environments//sessions/`. If `Environment ID` is not specified, we assume default 'draft' environment. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.sessions.entityTypes.patch()`

Updates the specified session entity type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The unique identifier of the session entity type. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.sessions.entityTypes.delete()`

Deletes the specified session entity type.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the session entity type to delete. Format: `projects//locations//agents//sessions//entityTypes/` or `projects//locations//agents//environments//sessions//entityTypes/`. If `Environment ID` is not specified, we assume default 'draft' environment. |

### `projects.locations.agents.environments.continuousTestResults`

#### `projects.locations.agents.environments.continuousTestResults.list()`

Fetches a list of continuous test results for a given environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The environment to list results for. Format: `projects//locations//agents//environments/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

### `projects.locations.agents.environments.experiments`

#### `projects.locations.agents.environments.experiments.list()`

Returns the list of all experiments in the specified Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Environment to list all environments for. Format: `projects//locations//agents//environments/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 20 and at most 100. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.environments.experiments.get()`

Retrieves the specified Experiment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Environment. Format: `projects//locations//agents//environments//experiments/`. |

#### `projects.locations.agents.environments.experiments.create()`

Creates an Experiment in the specified Environment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The Agent to create an Environment for. Format: `projects//locations//agents//environments/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.experiments.patch()`

Updates the specified Experiment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the experiment. Format: projects//locations//agents//environments//experiments/. |
| `params.updateMask` | `string` | No | Required. The mask to control which fields get updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.experiments.delete()`

Deletes the specified Experiment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Environment to delete. Format: `projects//locations//agents//environments//experiments/`. |

#### `projects.locations.agents.environments.experiments.start()`

Starts the specified Experiment. This rpc only changes the state of experiment from PENDING to RUNNING.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the experiment to start. Format: `projects//locations//agents//environments//experiments/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.environments.experiments.stop()`

Stops the specified Experiment. This rpc only changes the state of experiment from RUNNING to DONE.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Resource name of the experiment to stop. Format: `projects//locations//agents//environments//experiments/`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.generators`

#### `projects.locations.agents.generators.list()`

Returns the list of all generators in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list all generators for. Format: `projects//locations//agents/`. |
| `params.languageCode` | `string` | No | The language to list generators for. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.generators.get()`

Retrieves the specified generator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the generator. Format: `projects//locations//agents//generators/`. |
| `params.languageCode` | `string` | No | The language to list generators for. |

#### `projects.locations.agents.generators.create()`

Creates a generator in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create a generator for. Format: `projects//locations//agents/`. |
| `params.languageCode` | `string` | No | The language to create generators for the following fields: * `Generator.prompt_text.text` If not specified, the agent's default language is used. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.generators.patch()`

Update the specified generator.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the generator. Must be set for the Generators.UpdateGenerator method. Generators.CreateGenerate populates the name automatically. Format: `projects//locations//agents//generators/`. |
| `params.languageCode` | `string` | No | The language to list generators for. |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.generators.delete()`

Deletes the specified generators.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the generator to delete. Format: `projects//locations//agents//generators/`. |
| `params.force` | `boolean` | No | This field has no effect for generators not being used. For generators that are used by pages/flows/transition route groups: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the generator, as well as any references to the generator (i.e. Generator) in fulfillments. |

### `projects.locations.agents.playbooks`

#### `projects.locations.agents.playbooks.create()`

Creates a playbook in a specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create a playbook for. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.playbooks.delete()`

Deletes a specified playbook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the playbook to delete. Format: `projects//locations//agents//playbooks/`. |

#### `projects.locations.agents.playbooks.list()`

Returns a list of playbooks in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list playbooks from. Format: `projects//locations//agents/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.playbooks.get()`

Retrieves the specified Playbook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the playbook. Format: `projects//locations//agents//playbooks/`. |

#### `projects.locations.agents.playbooks.export()`

Exports the specified playbook to a binary file. Note that resources (e.g. examples, tools) that the playbook references will also be exported.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the playbook to export. Format: `projects//locations//agents//playbooks/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.playbooks.import()`

Imports the specified playbook to the specified agent from a binary file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to import the playbook into. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.playbooks.patch()`

Updates the specified Playbook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the playbook. Format: `projects//locations//agents//playbooks/`. |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.playbooks.examples`

#### `projects.locations.agents.playbooks.examples.create()`

Creates an example in the specified playbook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The playbook to create an example for. Format: `projects//locations//agents//playbooks/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.playbooks.examples.delete()`

Deletes the specified example.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the example to delete. Format: `projects//locations//agents//playbooks//examples/`. |

#### `projects.locations.agents.playbooks.examples.list()`

Returns a list of examples in the specified playbook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The playbook to list the examples from. Format: `projects//locations//agents//playbooks/`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |
| `params.languageCode` | `string` | No | Optional. The language to list examples for. If not specified, list all examples under the playbook. Note: languages must be enabled in the agent before they can be used. |

#### `projects.locations.agents.playbooks.examples.get()`

Retrieves the specified example.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the example. Format: `projects//locations//agents//playbooks//examples/`. |

#### `projects.locations.agents.playbooks.examples.patch()`

Update the specified example.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the playbook example. Format: `projects//locations//agents//playbooks//examples/`. |
| `params.updateMask` | `string` | No | Optional. The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.agents.playbooks.versions`

#### `projects.locations.agents.playbooks.versions.create()`

Creates a version for the specified Playbook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The playbook to create a version for. Format: `projects//locations//agents//playbooks/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.playbooks.versions.get()`

Retrieves the specified version of the Playbook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the playbook version. Format: `projects//locations//agents//playbooks//versions/`. |

#### `projects.locations.agents.playbooks.versions.restore()`

Retrieves the specified version of the Playbook and stores it as the current playbook draft, returning the playbook with resources updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the playbook version. Format: `projects//locations//agents//playbooks//versions/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.playbooks.versions.list()`

Lists versions for the specified Playbook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The playbook to list versions for. Format: `projects//locations//agents//playbooks/`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.playbooks.versions.delete()`

Deletes the specified version of the Playbook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the playbook version to delete. Format: `projects//locations//agents//playbooks//versions/`. |

### `projects.locations.agents.tools`

#### `projects.locations.agents.tools.create()`

Creates a Tool in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to create a Tool for. Format: `projects//locations//agents/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.tools.list()`

Returns a list of Tools in the specified agent.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The agent to list the Tools from. Format: `projects//locations//agents/`. |
| `params.pageSize` | `integer` | No | The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.tools.get()`

Retrieves the specified Tool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Tool. Format: `projects//locations//agents//tools/`. |

#### `projects.locations.agents.tools.patch()`

Update the specified Tool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The unique identifier of the Tool. Format: `projects//locations//agents//tools/`. |
| `params.updateMask` | `string` | No | The mask to control which fields get updated. If the mask is not present, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.tools.delete()`

Deletes a specified Tool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Tool to be deleted. Format: `projects//locations//agents//tools/`. |
| `params.force` | `boolean` | No | This field has no effect for Tools not being used. For Tools that are used: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the tool, as well as any references to the tool. |

### `projects.locations.agents.tools.versions`

#### `projects.locations.agents.tools.versions.list()`

List versions of the specified Tool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the tool versions. Format: `projects//locations//agents//tools/`. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of items to return in a single page. By default 100 and at most 1000. |
| `params.pageToken` | `string` | No | Optional. The next_page_token value returned from a previous list request. |

#### `projects.locations.agents.tools.versions.create()`

Creates a version for the specified Tool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The tool to create a version for. Format: `projects//locations//agents//tools/`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.agents.tools.versions.get()`

Retrieves the specified version of the Tool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tool version. Format: `projects//locations//agents//tools//versions/`. |

#### `projects.locations.agents.tools.versions.delete()`

Deletes the specified version of the Tool.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tool version to delete. Format: `projects//locations//agents//tools//versions/`. |
| `params.force` | `boolean` | No | Optional. This field has no effect for Tools not being used. For Tools that are used: * If `force` is set to false, an error will be returned with message indicating the referenced resources. * If `force` is set to true, Dialogflow will remove the tool, as well as any references to the tool. |

#### `projects.locations.agents.tools.versions.restore()`

Retrieves the specified version of the Tool and stores it as the current tool draft, returning the tool with resources updated.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the tool version. Format: `projects//locations//agents//tools//versions/`. |
| `params.requestBody` | `object` | Yes | The request body. |