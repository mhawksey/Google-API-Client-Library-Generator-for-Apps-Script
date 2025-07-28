
/**
 * Google Apps Script client library for the Eventarc API
 * Documentation URL: https://cloud.google.com/eventarc
 * @class
 */
class Eventarc {
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
    this._rootUrl = 'https://eventarc.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Get a GoogleChannelConfig. The name of the GoogleChannelConfig in the response is ALWAYS coded with projectID.
     * @param {string} params.name - (Required) Required. The name of the config to get.
     * @return {object} The API response object.
     */
    this.projects.locations.getGoogleChannelConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Update a single GoogleChannelConfig
     * @param {string} params.name - (Required) Required. The resource name of the config. Must be in the format of, `projects/{project}/locations/{location}/googleChannelConfig`. In API responses, the config name always includes the projectID, regardless of whether the projectID or projectNumber was provided.
     * @param {string} params.updateMask - The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.updateGoogleChannelConfig = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

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

    this.projects.locations.triggers = {};

    /**
     * Get a single trigger.
     * @param {string} params.name - (Required) Required. The name of the trigger to get.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List triggers.
     * @param {string} params.filter - Filter field. Used to filter the Triggers to be listed. Possible filters are described in https://google.aip.dev/160. For example, using "?filter=destination:gke" would list only Triggers with a gke destination.
     * @param {string} params.orderBy - The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, trigger_id`.
     * @param {integer} params.pageSize - The maximum number of triggers to return on each page. Note: The service may send fewer.
     * @param {string} params.pageToken - The page token; provide the value from the `next_page_token` field in a previous `ListTriggers` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListTriggers` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent collection to list triggers on.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.list = (params) => this._makeRequest('v1/{+parent}/triggers', 'GET', params);

    /**
     * Create a new trigger in a particular project and location.
     * @param {string} params.parent - (Required) Required. The parent collection in which to add this trigger.
     * @param {string} params.triggerId - Required. The user-provided ID to be assigned to the trigger.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.create = (params) => this._makeRequest('v1/{+parent}/triggers', 'POST', params);

    /**
     * Update a single trigger.
     * @param {boolean} params.allowMissing - If set to true, and the trigger is not found, a new trigger will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Required. The resource name of the trigger. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/triggers/{trigger}` format.
     * @param {string} params.updateMask - The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a single trigger.
     * @param {boolean} params.allowMissing - If set to true, and the trigger is not found, the request will succeed but no action will be taken on the server.
     * @param {string} params.etag - If provided, the trigger will only be deleted if the etag matches the current etag on the resource.
     * @param {string} params.name - (Required) Required. The name of the trigger to be deleted.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.channels = {};

    /**
     * Get a single Channel.
     * @param {string} params.name - (Required) Required. The name of the channel to get.
     * @return {object} The API response object.
     */
    this.projects.locations.channels.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List channels.
     * @param {string} params.orderBy - The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, channel_id`.
     * @param {integer} params.pageSize - The maximum number of channels to return on each page. Note: The service may send fewer.
     * @param {string} params.pageToken - The page token; provide the value from the `next_page_token` field in a previous `ListChannels` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannels` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent collection to list channels on.
     * @return {object} The API response object.
     */
    this.projects.locations.channels.list = (params) => this._makeRequest('v1/{+parent}/channels', 'GET', params);

    /**
     * Create a new channel in a particular project and location.
     * @param {string} params.channelId - Required. The user-provided ID to be assigned to the channel.
     * @param {string} params.parent - (Required) Required. The parent collection in which to add this channel.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.channels.create = (params) => this._makeRequest('v1/{+parent}/channels', 'POST', params);

    /**
     * Update a single channel.
     * @param {string} params.name - (Required) Required. The resource name of the channel. Must be unique within the location on the project and must be in `projects/{project}/locations/{location}/channels/{channel_id}` format.
     * @param {string} params.updateMask - The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.channels.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a single channel.
     * @param {string} params.name - (Required) Required. The name of the channel to be deleted.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @return {object} The API response object.
     */
    this.projects.locations.channels.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.channels.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.channels.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.channels.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.providers = {};

    /**
     * Get a single Provider.
     * @param {string} params.name - (Required) Required. The name of the provider to get.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List providers.
     * @param {string} params.filter - The filter field that the list request will filter on.
     * @param {string} params.orderBy - The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting oder is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, _id`.
     * @param {integer} params.pageSize - The maximum number of providers to return on each page.
     * @param {string} params.pageToken - The page token; provide the value from the `next_page_token` field in a previous `ListProviders` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListProviders` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent of the provider to get.
     * @return {object} The API response object.
     */
    this.projects.locations.providers.list = (params) => this._makeRequest('v1/{+parent}/providers', 'GET', params);

    this.projects.locations.channelConnections = {};

    /**
     * Get a single ChannelConnection.
     * @param {string} params.name - (Required) Required. The name of the channel connection to get.
     * @return {object} The API response object.
     */
    this.projects.locations.channelConnections.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List channel connections.
     * @param {integer} params.pageSize - The maximum number of channel connections to return on each page. Note: The service may send fewer responses.
     * @param {string} params.pageToken - The page token; provide the value from the `next_page_token` field in a previous `ListChannelConnections` call to retrieve the subsequent page. When paginating, all other parameters provided to `ListChannelConnetions` match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent collection from which to list channel connections.
     * @return {object} The API response object.
     */
    this.projects.locations.channelConnections.list = (params) => this._makeRequest('v1/{+parent}/channelConnections', 'GET', params);

    /**
     * Create a new ChannelConnection in a particular project and location.
     * @param {string} params.channelConnectionId - Required. The user-provided ID to be assigned to the channel connection.
     * @param {string} params.parent - (Required) Required. The parent collection in which to add this channel connection.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.channelConnections.create = (params) => this._makeRequest('v1/{+parent}/channelConnections', 'POST', params);

    /**
     * Delete a single ChannelConnection.
     * @param {string} params.name - (Required) Required. The name of the channel connection to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.channelConnections.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.channelConnections.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.channelConnections.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.channelConnections.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.messageBuses = {};

    /**
     * Get a single MessageBus.
     * @param {string} params.name - (Required) Required. The name of the message bus to get.
     * @return {object} The API response object.
     */
    this.projects.locations.messageBuses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List message buses.
     * @param {string} params.filter - Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160.
     * @param {string} params.orderBy - Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return on each page. Note: The service may send fewer.
     * @param {string} params.pageToken - Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent collection to list message buses on.
     * @return {object} The API response object.
     */
    this.projects.locations.messageBuses.list = (params) => this._makeRequest('v1/{+parent}/messageBuses', 'GET', params);

    /**
     * List message bus enrollments.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return on each page. Note: The service may send fewer.
     * @param {string} params.pageToken - Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent message bus to list enrollments on.
     * @return {object} The API response object.
     */
    this.projects.locations.messageBuses.listEnrollments = (params) => this._makeRequest('v1/{+parent}:listEnrollments', 'GET', params);

    /**
     * Create a new MessageBus in a particular project and location.
     * @param {string} params.messageBusId - Required. The user-provided ID to be assigned to the MessageBus. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     * @param {string} params.parent - (Required) Required. The parent collection in which to add this message bus.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.messageBuses.create = (params) => this._makeRequest('v1/{+parent}/messageBuses', 'POST', params);

    /**
     * Update a single message bus.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the MessageBus is not found, a new MessageBus will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Identifier. Resource name of the form projects/{project}/locations/{location}/messageBuses/{message_bus}
     * @param {string} params.updateMask - Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.messageBuses.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a single message bus.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the MessageBus is not found, the request will succeed but no action will be taken on the server.
     * @param {string} params.etag - Optional. If provided, the MessageBus will only be deleted if the etag matches the current etag on the resource.
     * @param {string} params.name - (Required) Required. The name of the MessageBus to be deleted.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @return {object} The API response object.
     */
    this.projects.locations.messageBuses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.messageBuses.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.messageBuses.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.messageBuses.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.enrollments = {};

    /**
     * Get a single Enrollment.
     * @param {string} params.name - (Required) Required. The name of the Enrollment to get.
     * @return {object} The API response object.
     */
    this.projects.locations.enrollments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List Enrollments.
     * @param {string} params.filter - Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160.
     * @param {string} params.orderBy - Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return on each page. Note: The service may send fewer.
     * @param {string} params.pageToken - Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent collection to list triggers on.
     * @return {object} The API response object.
     */
    this.projects.locations.enrollments.list = (params) => this._makeRequest('v1/{+parent}/enrollments', 'GET', params);

    /**
     * Create a new Enrollment in a particular project and location.
     * @param {string} params.enrollmentId - Required. The user-provided ID to be assigned to the Enrollment. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     * @param {string} params.parent - (Required) Required. The parent collection in which to add this enrollment.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.enrollments.create = (params) => this._makeRequest('v1/{+parent}/enrollments', 'POST', params);

    /**
     * Update a single Enrollment.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the Enrollment is not found, a new Enrollment will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Identifier. Resource name of the form projects/{project}/locations/{location}/enrollments/{enrollment}
     * @param {string} params.updateMask - Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.enrollments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a single Enrollment.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the Enrollment is not found, the request will succeed but no action will be taken on the server.
     * @param {string} params.etag - Optional. If provided, the Enrollment will only be deleted if the etag matches the current etag on the resource.
     * @param {string} params.name - (Required) Required. The name of the Enrollment to be deleted.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @return {object} The API response object.
     */
    this.projects.locations.enrollments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.enrollments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.enrollments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.enrollments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.pipelines = {};

    /**
     * Get a single Pipeline.
     * @param {string} params.name - (Required) Required. The name of the pipeline to get.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelines.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List pipelines.
     * @param {string} params.filter - Optional. The filter field that the list request will filter on. Possible filters are described in https://google.aip.dev/160.
     * @param {string} params.orderBy - Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return on each page. Note: The service may send fewer.
     * @param {string} params.pageToken - Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent collection to list pipelines on.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelines.list = (params) => this._makeRequest('v1/{+parent}/pipelines', 'GET', params);

    /**
     * Create a new Pipeline in a particular project and location.
     * @param {string} params.parent - (Required) Required. The parent collection in which to add this pipeline.
     * @param {string} params.pipelineId - Required. The user-provided ID to be assigned to the Pipeline. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelines.create = (params) => this._makeRequest('v1/{+parent}/pipelines', 'POST', params);

    /**
     * Update a single pipeline.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the Pipeline is not found, a new Pipeline will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Identifier. The resource name of the Pipeline. Must be unique within the location of the project and must be in `projects/{project}/locations/{location}/pipelines/{pipeline}` format.
     * @param {string} params.updateMask - Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelines.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a single pipeline.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the Pipeline is not found, the request will succeed but no action will be taken on the server.
     * @param {string} params.etag - Optional. If provided, the Pipeline will only be deleted if the etag matches the current etag on the resource.
     * @param {string} params.name - (Required) Required. The name of the Pipeline to be deleted.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelines.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelines.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelines.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.pipelines.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.googleApiSources = {};

    /**
     * Get a single GoogleApiSource.
     * @param {string} params.name - (Required) Required. The name of the google api source to get.
     * @return {object} The API response object.
     */
    this.projects.locations.googleApiSources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List GoogleApiSources.
     * @param {string} params.filter - Optional. The filter field that the list request will filter on. Possible filtersare described in https://google.aip.dev/160.
     * @param {string} params.orderBy - Optional. The sorting order of the resources returned. Value should be a comma-separated list of fields. The default sorting order is ascending. To specify descending order for a field, append a `desc` suffix; for example: `name desc, update_time`.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return on each page. Note: The service may send fewer.
     * @param {string} params.pageToken - Optional. The page token; provide the value from the `next_page_token` field in a previous call to retrieve the subsequent page. When paginating, all other parameters provided must match the previous call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent collection to list GoogleApiSources on.
     * @return {object} The API response object.
     */
    this.projects.locations.googleApiSources.list = (params) => this._makeRequest('v1/{+parent}/googleApiSources', 'GET', params);

    /**
     * Create a new GoogleApiSource in a particular project and location.
     * @param {string} params.googleApiSourceId - Required. The user-provided ID to be assigned to the GoogleApiSource. It should match the format `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
     * @param {string} params.parent - (Required) Required. The parent collection in which to add this google api source.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.googleApiSources.create = (params) => this._makeRequest('v1/{+parent}/googleApiSources', 'POST', params);

    /**
     * Update a single GoogleApiSource.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the GoogleApiSource is not found, a new GoogleApiSource will be created. In this situation, `update_mask` is ignored.
     * @param {string} params.name - (Required) Identifier. Resource name of the form projects/{project}/locations/{location}/googleApiSources/{google_api_source}
     * @param {string} params.updateMask - Optional. The fields to be updated; only fields explicitly provided are updated. If no field mask is provided, all provided fields in the request are updated. To update all fields, provide a field mask of "*".
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.googleApiSources.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Delete a single GoogleApiSource.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the MessageBus is not found, the request will succeed but no action will be taken on the server.
     * @param {string} params.etag - Optional. If provided, the MessageBus will only be deleted if the etag matches the current etag on the resource.
     * @param {string} params.name - (Required) Required. The name of the GoogleApiSource to be deleted.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not post it.
     * @return {object} The API response object.
     */
    this.projects.locations.googleApiSources.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.googleApiSources.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.googleApiSources.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.googleApiSources.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.kafkaSources = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.kafkaSources.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.kafkaSources.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.kafkaSources.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);
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
