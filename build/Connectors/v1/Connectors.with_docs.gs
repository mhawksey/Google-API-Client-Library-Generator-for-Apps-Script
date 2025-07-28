
/**
 * Google Apps Script client library for the Connectors API
 * Documentation URL: https://cloud.google.com/apigee/docs/api-platform/connectors/about-connectors
 * @class
 */
class Connectors {
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
    this._rootUrl = 'https://connectors.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Gets the runtimeConfig of a location. RuntimeConfig is a singleton resource for each location.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/runtimeConfig`
     * @return {object} The API response object.
     */
    this.projects.locations.getRuntimeConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * GetRegionalSettings gets settings of a region. RegionalSettings is a singleton resource.
     * @param {string} params.name - (Required) Required. The resource name of the Regional Settings.
     * @return {object} The API response object.
     */
    this.projects.locations.getRegionalSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update the settings of a region.
     * @param {string} params.name - (Required) Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/regionalSettings
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.updateRegionalSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.connections = {};

    /**
     * ListenEvent listens to the event.
     * @param {string} params.resourcePath - (Required) Required. Resource path for request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.listenEvent = (params) => this._makeRequest('v1/{+resourcePath}:listenEvent', 'POST', params);

    /**
     * Lists Connections in a given project and location.
     * @param {string} params.filter - Filter.
     * @param {string} params.orderBy - Order by parameters.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the Connection, of the form: `projects/*\/locations/*`
     * @param {string} params.view - Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.list = (params) => this._makeRequest('v1/{+parent}/connections', 'GET', params);

    /**
     * Returns Top matching Connections for a given query.
     * @param {string} params.name - (Required) Required. Parent resource of the Connection, of the form: `projects/*\/locations/*\/connections`
     * @param {integer} params.pageSize - Optional. The number of top matching connectors to return
     * @param {string} params.pageToken - Optional. page_token
     * @param {string} params.query - Required. The query against which the search needs to be done.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.search = (params) => this._makeRequest('v1/{+name}:search', 'GET', params);

    /**
     * Gets details of a single Connection.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/connections/*`
     * @param {string} params.view - Specifies which fields of the Connection are returned in the response. Defaults to `BASIC` view.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Connection in a given project and location.
     * @param {string} params.connectionId - Required. Identifier to assign to the Connection. Must be unique within scope of the parent resource.
     * @param {string} params.parent - (Required) Required. Parent resource of the Connection, of the form: `projects/*\/locations/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.create = (params) => this._makeRequest('v1/{+parent}/connections', 'POST', params);

    /**
     * Updates the parameters of a single Connection.
     * @param {string} params.name - (Required) Output only. Resource name of the Connection. Format: projects/{project}/locations/{location}/connections/{connection}
     * @param {string} params.updateMask - Required. The list of fields to update. Fields are specified relative to the connection. A field will be overwritten if it is in the mask. The field mask must not be empty, and it must not contain fields that are immutable or only set by the server. You can modify only the fields listed below. To lock/unlock a connection: * `lock_config` To suspend/resume a connection: * `suspended` To update the connection details: * `description` * `labels` * `connector_version` * `config_variables` * `auth_config` * `destination_configs` * `node_config` * `log_config` * `ssl_config` * `eventing_enablement_type` * `eventing_config` * `auth_override_enabled` * `async_operations_enabled`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Connection.
     * @param {boolean} params.force - Optional. If set to true, any child EndUserAuthentication/EventSubscription resources will also be deleted. Otherwise, the request will fail if the connection has any children. Followed the best practice from https://aip.dev/135#cascading-delete
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/connections/*`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets schema metadata of a connection. SchemaMetadata is a singleton resource for each connection.
     * @param {string} params.name - (Required) Required. Connection name Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
     * @return {object} The API response object.
     */
    this.projects.locations.connections.getConnectionSchemaMetadata = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * RepaiEventing tries to repair eventing related event subscriptions.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/connections/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.repairEventing = (params) => this._makeRequest('v1/{+name}:repairEventing', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.connections.connectionSchemaMetadata = {};

    /**
     * Refresh runtime schema of a connection.
     * @param {string} params.name - (Required) Required. Resource name. Format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.connectionSchemaMetadata.refresh = (params) => this._makeRequest('v1/{+name}:refresh', 'POST', params);

    /**
     * List entity types.
     * @param {string} params.filter - Required. Filter Wildcards are not supported in the filter currently.
     * @param {string} params.name - (Required) Required. Resource name format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
     * @param {integer} params.pageSize - Page size. If unspecified, at most 50 entity types will be returned.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.view - Specifies which fields are returned in response. Defaults to BASIC view.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.connectionSchemaMetadata.listEntityTypes = (params) => this._makeRequest('v1/{+name}:listEntityTypes', 'GET', params);

    /**
     * List actions.
     * @param {string} params.filter - Required. Filter Wildcards are not supported in the filter currently.
     * @param {string} params.name - (Required) Required. Resource name format. projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
     * @param {integer} params.pageSize - Page size. If unspecified, at most 50 actions will be returned.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.view - Specifies which fields are returned in response. Defaults to BASIC view.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.connectionSchemaMetadata.listActions = (params) => this._makeRequest('v1/{+name}:listActions', 'GET', params);

    /**
     * Get entity type.
     * @param {string} params.entityId - Required. Id of the entity type.
     * @param {string} params.name - (Required) Required. Resource name format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
     * @return {object} The API response object.
     */
    this.projects.locations.connections.connectionSchemaMetadata.getEntityType = (params) => this._makeRequest('v1/{+name}:getEntityType', 'GET', params);

    /**
     * Get action.
     * @param {string} params.actionId - Required. Id of the action.
     * @param {string} params.name - (Required) Required. Resource name format: projects/{project}/locations/{location}/connections/{connection}/connectionSchemaMetadata
     * @return {object} The API response object.
     */
    this.projects.locations.connections.connectionSchemaMetadata.getAction = (params) => this._makeRequest('v1/{+name}:getAction', 'GET', params);

    this.projects.locations.connections.runtimeEntitySchemas = {};

    /**
     * List schema of a runtime entities filtered by entity name.
     * @param {string} params.filter - Required. Filter Format: entity="{entityId}" Only entity field is supported with literal equality operator. Accepted filter example: entity="Order" Wildcards are not supported in the filter currently.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of RuntimeEntitySchema Format: projects/{project}/locations/{location}/connections/{connection}
     * @return {object} The API response object.
     */
    this.projects.locations.connections.runtimeEntitySchemas.list = (params) => this._makeRequest('v1/{+parent}/runtimeEntitySchemas', 'GET', params);

    this.projects.locations.connections.runtimeActionSchemas = {};

    /**
     * List schema of a runtime actions filtered by action name.
     * @param {string} params.filter - Required. Filter Format: action="{actionId}" Only action field is supported with literal equality operator. Accepted filter example: action="CancelOrder" Wildcards are not supported in the filter currently.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of RuntimeActionSchema Format: projects/{project}/locations/{location}/connections/{connection}
     * @param {boolean} params.schemaAsString - Optional. Flag to indicate if schema should be returned as string or not
     * @return {object} The API response object.
     */
    this.projects.locations.connections.runtimeActionSchemas.list = (params) => this._makeRequest('v1/{+parent}/runtimeActionSchemas', 'GET', params);

    this.projects.locations.connections.eventSubscriptions = {};

    /**
     * List EventSubscriptions in a given project,location and connection.
     * @param {string} params.filter - Filter.
     * @param {string} params.orderBy - Order by parameters.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the EventSubscription, of the form: `projects/*\/locations/*\/connections/*`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.eventSubscriptions.list = (params) => this._makeRequest('v1/{+parent}/eventSubscriptions', 'GET', params);

    /**
     * Gets details of a single EventSubscription.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/connections/*\/eventSubscriptions/*`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.eventSubscriptions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new EventSubscription in a given project,location and connection.
     * @param {string} params.eventSubscriptionId - Required. Identifier to assign to the Event Subscription. Must be unique within scope of the parent resource.
     * @param {string} params.parent - (Required) Required. Parent resource of the EventSubscription, of the form: `projects/*\/locations/*\/connections/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.eventSubscriptions.create = (params) => this._makeRequest('v1/{+parent}/eventSubscriptions', 'POST', params);

    /**
     * Updates the parameters of a single EventSubscription.
     * @param {string} params.name - (Required) Required. Identifier. Resource name of the EventSubscription. Format: projects/{project}/locations/{location}/connections/{connection}/eventSubscriptions/{event_subscription}
     * @param {string} params.updateMask - Required. The list of fields to update. Fields are specified relative to the Subscription. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the EventSubscription details: * `serviceAccount`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.eventSubscriptions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single EventSubscription.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/connections/*\/eventsubscriptions/*`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.eventSubscriptions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * RetryEventSubscription retries the registration of Subscription.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/connections/*\/eventSubscriptions/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.eventSubscriptions.retry = (params) => this._makeRequest('v1/{+name}:retry', 'POST', params);

    this.projects.locations.connections.endUserAuthentications = {};

    /**
     * List EndUserAuthentications in a given project,location and connection.
     * @param {string} params.filter - Filter.
     * @param {string} params.orderBy - Order by parameters.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the EndUserAuthentication, of the form: `projects/*\/locations/*\/connections/*`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.endUserAuthentications.list = (params) => this._makeRequest('v1/{+parent}/endUserAuthentications', 'GET', params);

    /**
     * Gets details of a single EndUserAuthentication.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/connections/*\/EndUserAuthentications/*`
     * @param {string} params.view - Optional. View of the EndUserAuthentication to return.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.endUserAuthentications.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new EndUserAuthentication in a given project,location and connection.
     * @param {string} params.endUserAuthenticationId - Required. Identifier to assign to the EndUserAuthentication. Must be unique within scope of the parent resource.
     * @param {string} params.parent - (Required) Required. Parent resource of the EndUserAuthentication, of the form: `projects/*\/locations/*\/connections/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.endUserAuthentications.create = (params) => this._makeRequest('v1/{+parent}/endUserAuthentications', 'POST', params);

    /**
     * Updates the parameters of a single EndUserAuthentication.
     * @param {string} params.name - (Required) Required. Identifier. Resource name of the EndUserAuthentication. Format: projects/{project}/locations/{location}/connections/{connection}/endUserAuthentications/{end_user_authentication}
     * @param {string} params.updateMask - Required. The list of fields to update. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the EndUserAuthentication details: * `notify_endpoint_destination`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.endUserAuthentications.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single EndUserAuthentication.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/connections/*\/endUserAuthentication/*`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.endUserAuthentications.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.providers = {};

    /**
     * Lists Providers in a given project and location.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the API, of the form: `projects/*\/locations/*` Only global location is supported for Provider resource.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.list = (params) => this._makeRequest('v1/{+parent}/providers', 'GET', params);

    /**
     * Gets details of a provider.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/providers/*` Only global location is supported for Provider resource.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.providers.connectors = {};

    /**
     * Lists Connectors in a given project and location.
     * @param {string} params.filter - Filter string.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the connectors, of the form: `projects/*\/locations/*\/providers/*` Only global location is supported for Connector resource.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.connectors.list = (params) => this._makeRequest('v1/{+parent}/connectors', 'GET', params);

    /**
     * Gets details of a single Connector.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/providers/*\/connectors/*` Only global location is supported for Connector resource.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.connectors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.providers.connectors.versions = {};

    /**
     * Lists Connector Versions in a given project and location.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required)
     * @param {string} params.view - Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `BASIC` view.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.connectors.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    /**
     * Gets details of a single connector version.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/providers/*\/connectors/*\/versions/*` Only global location is supported for ConnectorVersion resource.
     * @param {string} params.view - Specifies which fields of the ConnectorVersion are returned in the response. Defaults to `CUSTOMER` view.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.connectors.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * fetch and return the list of auth config variables required to override the connection backend auth.
     * @param {string} params.name - (Required) Required. Parent resource of the Connector Version, of the form: `projects/*\/locations/*\/providers/*\/connectors/*\/versions/*`
     * @param {string} params.view - Optional. View of the AuthSchema. The default value is BASIC.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.connectors.versions.fetchAuthSchema = (params) => this._makeRequest('v1/{+name}:fetchAuthSchema', 'GET', params);

    this.projects.locations.providers.connectors.versions.eventtypes = {};

    /**
     * Lists Event Types in a given Connector Version.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the connectors, of the form: `projects/*\/locations/*\/providers/*\/connectors/*\/versions/*` Only global location is supported for EventType resource.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.connectors.versions.eventtypes.list = (params) => this._makeRequest('v1/{+parent}/eventtypes', 'GET', params);

    /**
     * Gets details of a single event type.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/providers/*\/connectors/*\/versions/*\/eventtypes/*` Only global location is supported for EventType resource.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.connectors.versions.eventtypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.global = {};

    /**
     * GetGlobalSettings gets settings of a project. GlobalSettings is a singleton resource.
     * @param {string} params.name - (Required) Required. The resource name of the Settings.
     * @return {object} The API response object.
     */
    this.projects.locations.global.getSettings = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update the global settings of a project.
     * @param {string} params.name - (Required) Output only. Resource name of the Connection. Format: projects/{project}/locations/global/settings}
     * @param {string} params.updateMask - Required. The list of fields to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.updateSettings = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.global.managedZones = {};

    /**
     * List ManagedZones in a given project
     * @param {string} params.filter - Filter.
     * @param {string} params.orderBy - Order by parameters.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the Managed Zone, of the form: `projects/*\/locations/global`
     * @param {boolean} params.returnPartialSuccess - Optional. If true, allow partial responses for multi-regional Aggregated List requests.
     * @return {object} The API response object.
     */
    this.projects.locations.global.managedZones.list = (params) => this._makeRequest('v1/{+parent}/managedZones', 'GET', params);

    /**
     * Gets details of a single ManagedZone.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/global/managedZones/*`
     * @return {object} The API response object.
     */
    this.projects.locations.global.managedZones.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new ManagedZone in a given project and location.
     * @param {string} params.managedZoneId - Required. Identifier to assign to the ManagedZone. Must be unique within scope of the parent resource.
     * @param {string} params.parent - (Required) Required. Parent resource of the ManagedZone, of the form: `projects/*\/locations/global`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.managedZones.create = (params) => this._makeRequest('v1/{+parent}/managedZones', 'POST', params);

    /**
     * Updates the parameters of a single ManagedZone.
     * @param {string} params.name - (Required) Output only. Resource name of the Managed Zone. Format: projects/{project}/locations/global/managedZones/{managed_zone}
     * @param {string} params.updateMask - Required. The list of fields to update. Fields are specified relative to the managedZone. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the managedZone details: * `description` * `labels` * `target_project` * `target_network`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.managedZones.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single ManagedZone.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/global/managedZones/*`
     * @return {object} The API response object.
     */
    this.projects.locations.global.managedZones.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.global.customConnectors = {};

    /**
     * Deletes a single CustomConnector.
     * @param {boolean} params.force - Optional. If set to true, any customConnectorVersion which is a child resource will also be deleted. https://aip.dev/135#cascading-delete
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{connector}`
     * @return {object} The API response object.
     */
    this.projects.locations.global.customConnectors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * List CustomConnectorVersions in a given project
     * @param {string} params.filter - Filter string.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the custom connectors, of the form: `projects/*\/locations/*` Only global location is supported for CustomConnector resource.
     * @return {object} The API response object.
     */
    this.projects.locations.global.customConnectors.list = (params) => this._makeRequest('v1/{+parent}/customConnectors', 'GET', params);

    /**
     * Gets details of a single CustomConnector.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/customConnectors/*`
     * @return {object} The API response object.
     */
    this.projects.locations.global.customConnectors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new CustomConnector in a given project and location.
     * @param {string} params.customConnectorId - Required. Identifier to assign to the CreateCustomConnector. Must be unique within scope of the parent resource.
     * @param {string} params.parent - (Required) Required. Parent resource of the CreateCustomConnector, of the form: `projects/{project}/locations/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.customConnectors.create = (params) => this._makeRequest('v1/{+parent}/customConnectors', 'POST', params);

    /**
     * Updates the parameters of a CustomConnector.
     * @param {string} params.name - (Required) Identifier. Resource name of the CustomConnector. Format: projects/{project}/locations/{location}/customConnectors/{connector}
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Connector resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. Set the mask as "*" for full replacement, which means all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.customConnectors.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.global.customConnectors.customConnectorVersions = {};

    /**
     * List CustomConnectorVersions in a given project
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource of the connectors, of the form: `projects/*\/locations/{location}/customConnectors/*\/customConnectorVersions/*`
     * @return {object} The API response object.
     */
    this.projects.locations.global.customConnectors.customConnectorVersions.list = (params) => this._makeRequest('v1/{+parent}/customConnectorVersions', 'GET', params);

    /**
     * Gets details of a single CustomConnectorVersion.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/{location}/customConnectors/*\/customConnectorVersions/*`
     * @return {object} The API response object.
     */
    this.projects.locations.global.customConnectors.customConnectorVersions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new CustomConnectorVersion in a given project and location.
     * @param {string} params.customConnectorVersionId - Required. Identifier to assign to the CreateCustomConnectorVersion. Must be unique within scope of the parent resource.
     * @param {string} params.parent - (Required) Required. Parent resource of the CreateCustomConnector, of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.customConnectors.customConnectorVersions.create = (params) => this._makeRequest('v1/{+parent}/customConnectorVersions', 'POST', params);

    this.projects.locations.endpointAttachments = {};

    /**
     * List EndpointAttachments in a given project
     * @param {string} params.filter - Filter.
     * @param {string} params.orderBy - Order by parameters.
     * @param {integer} params.pageSize - Page size.
     * @param {string} params.pageToken - Page token.
     * @param {string} params.parent - (Required) Required. Parent resource od the EndpointAttachment, of the form: `projects/*\/locations/*`
     * @param {string} params.view - Optional. Specifies which fields of the EndpointAttachment are returned in the response. Defaults to `ENDPOINT_ATTACHMENT_VIEW_BASIC` view.
     * @return {object} The API response object.
     */
    this.projects.locations.endpointAttachments.list = (params) => this._makeRequest('v1/{+parent}/endpointAttachments', 'GET', params);

    /**
     * Gets details of a single EndpointAttachment.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/endpointAttachments/*`
     * @param {string} params.view - Optional. Specifies which fields of the EndpointAttachment are returned in the response. Defaults to `ENDPOINT_ATTACHMENT_VIEW_BASIC` view.
     * @return {object} The API response object.
     */
    this.projects.locations.endpointAttachments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new EndpointAttachment in a given project and location.
     * @param {string} params.endpointAttachmentId - Required. Identifier to assign to the EndpointAttachment. Must be unique within scope of the parent resource. The regex is: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     * @param {string} params.parent - (Required) Required. Parent resource of the EndpointAttachment, of the form: `projects/*\/locations/*`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpointAttachments.create = (params) => this._makeRequest('v1/{+parent}/endpointAttachments', 'POST', params);

    /**
     * Updates the parameters of a single EndpointAttachment.
     * @param {string} params.name - (Required) Output only. Resource name of the Endpoint Attachment. Format: projects/{project}/locations/{location}/endpointAttachments/{endpoint_attachment}
     * @param {string} params.updateMask - Required. The list of fields to update. Fields are specified relative to the endpointAttachment. A field will be overwritten if it is in the mask. You can modify only the fields listed below. To update the endpointAttachment details: * `description` * `labels`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.endpointAttachments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single EndpointAttachment.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/*\/locations/*\/endpointAttachments/*`
     * @return {object} The API response object.
     */
    this.projects.locations.endpointAttachments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.customConnectors = {};

    /**
     * Validates a Custom Connector Spec.
     * @param {string} params.parent - (Required) Required. Location at which the custom connector is being created.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.customConnectors.validateCustomConnectorSpec = (params) => this._makeRequest('v1/{+parent}/customConnectors:validateCustomConnectorSpec', 'POST', params);

    this.projects.locations.customConnectors.customConnectorVersions = {};

    /**
     * Deletes a single CustomConnectorVersion.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version}`
     * @return {object} The API response object.
     */
    this.projects.locations.customConnectors.customConnectorVersions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Deprecates a single CustomConnectorVersion.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.customConnectors.customConnectorVersions.deprecate = (params) => this._makeRequest('v1/{+name}:deprecate', 'POST', params);

    /**
     * Publish request for the CustomConnectorVersion. Once approved, the CustomConnectorVersion will be published as PartnerConnector.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.customConnectors.customConnectorVersions.publish = (params) => this._makeRequest('v1/{+name}:publish', 'POST', params);

    /**
     * Withdraw the publish request for the CustomConnectorVersion. This can only be used before the CustomConnectorVersion is published.
     * @param {string} params.name - (Required) Required. Resource name of the form: `projects/{project}/locations/{location}/customConnectors/{custom_connector}/customConnectorVersions/{custom_connector_version}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.customConnectors.customConnectorVersions.withdraw = (params) => this._makeRequest('v1/{+name}:withdraw', 'POST', params);
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
