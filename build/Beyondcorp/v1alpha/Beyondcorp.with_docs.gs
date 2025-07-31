
/**
 * Google Apps Script client library for the BeyondCorp API
 * Documentation URL: https://cloud.google.com/
 * @class
 */
class Beyondcorp {
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
    this._rootUrl = 'https://beyondcorp.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

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
    this.projects.locations.list = (params) => this._makeRequest('v1alpha/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.projects.locations.appConnections = {};

    /**
     * Lists AppConnections in a given project and location.
     * @param {string} params.filter - Optional. A filter specifying constraints of a list operation.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous ListAppConnectionsRequest, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the AppConnection location using the form: `projects/{project_id}/locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.appConnections.list = (params) => this._makeRequest('v1alpha/{+parent}/appConnections', 'GET', params);

    /**
     * Gets details of a single AppConnection.
     * @param {string} params.name - (Required) Required. BeyondCorp AppConnection name using the form: `projects/{project_id}/locations/{location_id}/appConnections/{app_connection_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.appConnections.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a new AppConnection in a given project and location.
     * @param {string} params.appConnectionId - Optional. User-settable AppConnection resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter.
     * @param {string} params.parent - (Required) Required. The resource project name of the AppConnection location using the form: `projects/{project_id}/locations/{location_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnections.create = (params) => this._makeRequest('v1alpha/{+parent}/appConnections', 'POST', params);

    /**
     * Updates the parameters of a single AppConnection.
     * @param {boolean} params.allowMissing - Optional. If set as true, will create the resource if it is not found.
     * @param {string} params.name - (Required) Required. Unique resource name of the AppConnection. The name is ignored when creating a AppConnection.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from [BeyondCorp.AppConnection]: * `labels` * `display_name` * `application_endpoint` * `connectors`
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnections.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a single AppConnection.
     * @param {string} params.name - (Required) Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/appConnections/{app_connection_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnections.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Resolves AppConnections details for a given AppConnector. An internal method called by a connector to find AppConnections to connect to.
     * @param {string} params.appConnectorId - Required. BeyondCorp Connector name of the connector associated with those AppConnections using the form: `projects/{project_id}/locations/{location_id}/appConnectors/{app_connector_id}`
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous ResolveAppConnectionsResponse, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the AppConnection location using the form: `projects/{project_id}/locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.appConnections.resolve = (params) => this._makeRequest('v1alpha/{+parent}/appConnections:resolve', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnections.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnections.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnections.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.appConnectors = {};

    /**
     * Lists AppConnectors in a given project and location.
     * @param {string} params.filter - Optional. A filter specifying constraints of a list operation.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous ListAppConnectorsRequest, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the AppConnector location using the form: `projects/{project_id}/locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.appConnectors.list = (params) => this._makeRequest('v1alpha/{+parent}/appConnectors', 'GET', params);

    /**
     * Gets details of a single AppConnector.
     * @param {string} params.name - (Required) Required. BeyondCorp AppConnector name using the form: `projects/{project_id}/locations/{location_id}/appConnectors/{app_connector_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.appConnectors.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a new AppConnector in a given project and location.
     * @param {string} params.appConnectorId - Optional. User-settable AppConnector resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter.
     * @param {string} params.parent - (Required) Required. The resource project name of the AppConnector location using the form: `projects/{project_id}/locations/{location_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnectors.create = (params) => this._makeRequest('v1alpha/{+parent}/appConnectors', 'POST', params);

    /**
     * Updates the parameters of a single AppConnector.
     * @param {string} params.name - (Required) Required. Unique resource name of the AppConnector. The name is ignored when creating a AppConnector.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from [BeyondCorp.AppConnector]: * `labels` * `display_name`
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnectors.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a single AppConnector.
     * @param {string} params.name - (Required) Required. BeyondCorp AppConnector name using the form: `projects/{project_id}/locations/{location_id}/appConnectors/{app_connector_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnectors.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Gets instance configuration for a given AppConnector. An internal method called by a AppConnector to get its container config.
     * @param {string} params.appConnector - (Required) Required. BeyondCorp AppConnector name using the form: `projects/{project_id}/locations/{location_id}/appConnectors/{app_connector}`
     * @return {object} The API response object.
     */
    this.projects.locations.appConnectors.resolveInstanceConfig = (params) => this._makeRequest('v1alpha/{+appConnector}:resolveInstanceConfig', 'GET', params);

    /**
     * Report status for a given connector.
     * @param {string} params.appConnector - (Required) Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnectors.reportStatus = (params) => this._makeRequest('v1alpha/{+appConnector}:reportStatus', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnectors.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnectors.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appConnectors.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.appGateways = {};

    /**
     * Lists AppGateways in a given project and location.
     * @param {string} params.filter - Optional. A filter specifying constraints of a list operation.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous ListAppGatewaysRequest, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the AppGateway location using the form: `projects/{project_id}/locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.appGateways.list = (params) => this._makeRequest('v1alpha/{+parent}/appGateways', 'GET', params);

    /**
     * Gets details of a single AppGateway.
     * @param {string} params.name - (Required) Required. BeyondCorp AppGateway name using the form: `projects/{project_id}/locations/{location_id}/appGateways/{app_gateway_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.appGateways.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a new AppGateway in a given project and location.
     * @param {string} params.appGatewayId - Optional. User-settable AppGateway resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter.
     * @param {string} params.parent - (Required) Required. The resource project name of the AppGateway location using the form: `projects/{project_id}/locations/{location_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appGateways.create = (params) => this._makeRequest('v1alpha/{+parent}/appGateways', 'POST', params);

    /**
     * Deletes a single AppGateway.
     * @param {string} params.name - (Required) Required. BeyondCorp AppGateway name using the form: `projects/{project_id}/locations/{location_id}/appGateways/{app_gateway_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @return {object} The API response object.
     */
    this.projects.locations.appGateways.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appGateways.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.appGateways.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.appGateways.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.connections = {};

    /**
     * Lists Connections in a given project and location.
     * @param {string} params.filter - Optional. A filter specifying constraints of a list operation.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous ListConnectionsRequest, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the connection location using the form: `projects/{project_id}/locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.list = (params) => this._makeRequest('v1alpha/{+parent}/connections', 'GET', params);

    /**
     * Gets details of a single Connection.
     * @param {string} params.name - (Required) Required. BeyondCorp Connection name using the form: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a new Connection in a given project and location.
     * @param {string} params.connectionId - Optional. User-settable connection resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter.
     * @param {string} params.parent - (Required) Required. The resource project name of the connection location using the form: `projects/{project_id}/locations/{location_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.create = (params) => this._makeRequest('v1alpha/{+parent}/connections', 'POST', params);

    /**
     * Updates the parameters of a single Connection.
     * @param {boolean} params.allowMissing - Optional. If set as true, will create the resource if it is not found.
     * @param {string} params.name - (Required) Required. Unique resource name of the connection. The name is ignored when creating a connection.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from [BeyondCorp.Connection]: * `labels` * `display_name` * `application_endpoint` * `connectors`
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a single Connection.
     * @param {string} params.name - (Required) Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connections/{connection_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Resolves connections details for a given connector. An internal method called by a connector to find connections to connect to.
     * @param {string} params.connectorId - Required. BeyondCorp Connector name of the connector associated with those connections using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector_id}`
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous ResolveConnectionsResponse, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the connection location using the form: `projects/{project_id}/locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.connections.resolve = (params) => this._makeRequest('v1alpha/{+parent}/connections:resolve', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.connections.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);

    this.projects.locations.connectors = {};

    /**
     * Lists Connectors in a given project and location.
     * @param {string} params.filter - Optional. A filter specifying constraints of a list operation.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous ListConnectorsRequest, if any.
     * @param {string} params.parent - (Required) Required. The resource name of the connector location using the form: `projects/{project_id}/locations/{location_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.connectors.list = (params) => this._makeRequest('v1alpha/{+parent}/connectors', 'GET', params);

    /**
     * Gets details of a single Connector.
     * @param {string} params.name - (Required) Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.connectors.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a new Connector in a given project and location.
     * @param {string} params.connectorId - Optional. User-settable connector resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or a letter.
     * @param {string} params.parent - (Required) Required. The resource project name of the connector location using the form: `projects/{project_id}/locations/{location_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectors.create = (params) => this._makeRequest('v1alpha/{+parent}/connectors', 'POST', params);

    /**
     * Updates the parameters of a single Connector.
     * @param {string} params.name - (Required) Required. Unique resource name of the connector. The name is ignored when creating a connector.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Mask of fields to update. At least one path must be supplied in this field. The elements of the repeated paths field may only include these fields from [BeyondCorp.Connector]: * `labels` * `display_name`
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectors.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a single Connector.
     * @param {string} params.name - (Required) Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @return {object} The API response object.
     */
    this.projects.locations.connectors.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Gets instance configuration for a given connector. An internal method called by a connector to get its container config.
     * @param {string} params.connector - (Required) Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector}`
     * @return {object} The API response object.
     */
    this.projects.locations.connectors.resolveInstanceConfig = (params) => this._makeRequest('v1alpha/{+connector}:resolveInstanceConfig', 'GET', params);

    /**
     * Report status for a given connector.
     * @param {string} params.connector - (Required) Required. BeyondCorp Connector name using the form: `projects/{project_id}/locations/{location_id}/connectors/{connector}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectors.reportStatus = (params) => this._makeRequest('v1alpha/{+connector}:reportStatus', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectors.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.connectors.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);

    this.projects.locations.insights = {};

    /**
     * Gets the value for a selected particular insight with default configuration. The default aggregation level is 'DAILY' and no grouping will be applied or default grouping if applicable. The data will be returned for recent 7 days starting the day before. The insight data size will be limited to 50 rows. Use the organization level path for fetching at org level and project level path for fetching the insight value specific to a particular project. Setting the `view` to `BASIC` will only return the metadata for the insight.
     * @param {string} params.name - (Required) Required. The resource name of the insight using the form: `organizations/{organization_id}/locations/{location_id}/insights/{insight_id}` `projects/{project_id}/locations/{location_id}/insights/{insight_id}`
     * @param {string} params.view - Required. Metadata only or full data view.
     * @return {object} The API response object.
     */
    this.projects.locations.insights.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Gets the value for a selected particular insight based on the provided filters. Use the organization level path for fetching at org level and project level path for fetching the insight value specific to a particular project.
     * @param {string} params.aggregation - Required. Aggregation type. Available aggregation could be fetched by calling insight list and get APIs in `BASIC` view.
     * @param {string} params.customGrouping.fieldFilter - Optional. Filterable parameters to be added to the grouping clause. Available fields could be fetched by calling insight list and get APIs in `BASIC` view. `=` is the only comparison operator supported. `AND` is the only logical operator supported. Usage: field_filter="fieldName1=fieldVal1 AND fieldName2=fieldVal2". NOTE: Only `AND` conditions are allowed. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for the filtering the corresponding fields in this filter field. (These expressions are based on the filter language described at https://google.aip.dev/160).
     * @param {string} params.customGrouping.groupFields - Required. Fields to be used for grouping. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for declaring the fields to be grouped-by here.
     * @param {string} params.endTime - Required. Ending time for the duration for which insight is to be pulled.
     * @param {string} params.fieldFilter - Optional. Other filterable/configurable parameters as applicable to the selected insight. Available fields could be fetched by calling insight list and get APIs in `BASIC` view. `=` is the only comparison operator supported. `AND` is the only logical operator supported. Usage: field_filter="fieldName1=fieldVal1 AND fieldName2=fieldVal2". NOTE: Only `AND` conditions are allowed. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for the filtering the corresponding fields in this filter field. (These expressions are based on the filter language described at https://google.aip.dev/160).
     * @param {string} params.group - Optional. Group id of the available groupings for the insight. Available groupings could be fetched by calling insight list and get APIs in `BASIC` view.
     * @param {string} params.insight - (Required) Required. The resource name of the insight using the form: `organizations/{organization_id}/locations/{location_id}/insights/{insight_id}` `projects/{project_id}/locations/{location_id}/insights/{insight_id}`.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Used to fetch the page represented by the token. Fetches the first page when not set.
     * @param {string} params.startTime - Required. Starting time for the duration for which insight is to be pulled.
     * @return {object} The API response object.
     */
    this.projects.locations.insights.configuredInsight = (params) => this._makeRequest('v1alpha/{+insight}:configuredInsight', 'GET', params);

    /**
     * Lists for all the available insights that could be fetched from the system. Allows to filter using category. Setting the `view` to `BASIC` will let you iterate over the list of insight metadatas.
     * @param {string} params.aggregation - Optional. Aggregation type. The default is 'DAILY'.
     * @param {string} params.endTime - Optional. Ending time for the duration for which insights are to be pulled. The default is the current time.
     * @param {string} params.filter - Optional. Filter expression to restrict the insights returned. Supported filter fields: * `type` * `category` * `subCategory` Examples: * "category = application AND type = count" * "category = application AND subCategory = iap" * "type = status" Allowed values: * type: [count, latency, status, list] * category: [application, device, request, security] * subCategory: [iap, caa, webprotect] NOTE: Only equality based comparison is allowed. Only `AND` conjunction is allowed. NOTE: The 'AND' in the filter field needs to be in capital letters only. NOTE: Just filtering on `subCategory` is not allowed. It should be passed in with the parent `category` too. (These expressions are based on the filter language described at https://google.aip.dev/160).
     * @param {string} params.orderBy - Optional. Hint for how to order the results. This is currently ignored.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. NOTE: Default page size is 50.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The resource name of InsightMetadata using the form: `organizations/{organization_id}/locations/{location}` `projects/{project_id}/locations/{location_id}`
     * @param {string} params.startTime - Optional. Starting time for the duration for which insights are to be pulled. The default is 7 days before the current time.
     * @param {string} params.view - Required. List only metadata or full data.
     * @return {object} The API response object.
     */
    this.projects.locations.insights.list = (params) => this._makeRequest('v1alpha/{+parent}/insights', 'GET', params);

    this.projects.locations.securityGateways = {};

    /**
     * Lists SecurityGateways in a given project and location.
     * @param {string} params.filter - Optional. A filter specifying constraints of a list operation. All fields in the SecurityGateway message are supported. For example, the following query will return the SecurityGateway with displayName "test-security-gateway" For more information, please refer to https://google.aip.dev/160.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous ListSecurityGatewayRequest, if any.
     * @param {string} params.parent - (Required) Required. The parent location to which the resources belong. `projects/{project_id}/locations/{location_id}/`
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.list = (params) => this._makeRequest('v1alpha/{+parent}/securityGateways', 'GET', params);

    /**
     * Gets details of a single SecurityGateway.
     * @param {string} params.name - (Required) Required. The resource name of the PartnerTenant using the form: `projects/{project_id}/locations/{location_id}/securityGateway/{security_gateway_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a new Security Gateway in a given project and location.
     * @param {string} params.parent - (Required) Required. The resource project name of the SecurityGateway location using the form: `projects/{project_id}/locations/{location_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
     * @param {string} params.securityGatewayId - Optional. User-settable SecurityGateway resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or letter.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.create = (params) => this._makeRequest('v1alpha/{+parent}/securityGateways', 'POST', params);

    /**
     * Updates the parameters of a single SecurityGateway.
     * @param {string} params.name - (Required) Identifier. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request timed out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Mutable fields include: display_name, hubs.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a single SecurityGateway.
     * @param {string} params.name - (Required) Required. BeyondCorp SecurityGateway name using the form: `projects/{project_id}/locations/{location_id}/securityGateways/{security_gateway_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.securityGateways.applications = {};

    /**
     * Lists Applications in a given project and location.
     * @param {string} params.filter - Optional. A filter specifying constraints of a list operation. All fields in the Application message are supported. For example, the following query will return the Application with displayName "test-application" For more information, please refer to https://google.aip.dev/160.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous ListApplicationsRequest, if any.
     * @param {string} params.parent - (Required) Required. The parent location to which the resources belong. `projects/{project_id}/locations/global/securityGateways/{security_gateway_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.applications.list = (params) => this._makeRequest('v1alpha/{+parent}/applications', 'GET', params);

    /**
     * Gets details of a single Application.
     * @param {string} params.name - (Required) Required. The resource name of the Application using the form: `projects/{project_id}/locations/global/securityGateway/{security_gateway_id}/applications/{application_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.applications.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Creates a new Application in a given project and location.
     * @param {string} params.applicationId - Optional. User-settable Application resource ID. * Must start with a letter. * Must contain between 4-63 characters from `/a-z-/`. * Must end with a number or letter.
     * @param {string} params.parent - (Required) Required. The resource name of the parent SecurityGateway using the form: `projects/{project_id}/locations/global/securityGateways/{security_gateway_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.applications.create = (params) => this._makeRequest('v1alpha/{+parent}/applications', 'POST', params);

    /**
     * Updates the parameters of a single Application.
     * @param {string} params.name - (Required) Identifier. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request timed out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Mutable fields include: display_name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.applications.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a single application.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validates request by executing a dry-run which would not alter the resource in any way.
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.applications.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.applications.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.applications.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.securityGateways.applications.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.applications = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.applicationDomains = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applicationDomains.setIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.applicationDomains.getIamPolicy = (params) => this._makeRequest('v1alpha/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applicationDomains.testIamPermissions = (params) => this._makeRequest('v1alpha/{+resource}:testIamPermissions', 'POST', params);

    this.organizations = {};

    this.organizations.locations = {};

    this.organizations.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.list = (params) => this._makeRequest('v1alpha/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'POST', params);

    this.organizations.locations.insights = {};

    /**
     * Gets the value for a selected particular insight with default configuration. The default aggregation level is 'DAILY' and no grouping will be applied or default grouping if applicable. The data will be returned for recent 7 days starting the day before. The insight data size will be limited to 50 rows. Use the organization level path for fetching at org level and project level path for fetching the insight value specific to a particular project. Setting the `view` to `BASIC` will only return the metadata for the insight.
     * @param {string} params.name - (Required) Required. The resource name of the insight using the form: `organizations/{organization_id}/locations/{location_id}/insights/{insight_id}` `projects/{project_id}/locations/{location_id}/insights/{insight_id}`
     * @param {string} params.view - Required. Metadata only or full data view.
     * @return {object} The API response object.
     */
    this.organizations.locations.insights.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Gets the value for a selected particular insight based on the provided filters. Use the organization level path for fetching at org level and project level path for fetching the insight value specific to a particular project.
     * @param {string} params.aggregation - Required. Aggregation type. Available aggregation could be fetched by calling insight list and get APIs in `BASIC` view.
     * @param {string} params.customGrouping.fieldFilter - Optional. Filterable parameters to be added to the grouping clause. Available fields could be fetched by calling insight list and get APIs in `BASIC` view. `=` is the only comparison operator supported. `AND` is the only logical operator supported. Usage: field_filter="fieldName1=fieldVal1 AND fieldName2=fieldVal2". NOTE: Only `AND` conditions are allowed. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for the filtering the corresponding fields in this filter field. (These expressions are based on the filter language described at https://google.aip.dev/160).
     * @param {string} params.customGrouping.groupFields - Required. Fields to be used for grouping. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for declaring the fields to be grouped-by here.
     * @param {string} params.endTime - Required. Ending time for the duration for which insight is to be pulled.
     * @param {string} params.fieldFilter - Optional. Other filterable/configurable parameters as applicable to the selected insight. Available fields could be fetched by calling insight list and get APIs in `BASIC` view. `=` is the only comparison operator supported. `AND` is the only logical operator supported. Usage: field_filter="fieldName1=fieldVal1 AND fieldName2=fieldVal2". NOTE: Only `AND` conditions are allowed. NOTE: Use the `filter_alias` from `Insight.Metadata.Field` message for the filtering the corresponding fields in this filter field. (These expressions are based on the filter language described at https://google.aip.dev/160).
     * @param {string} params.group - Optional. Group id of the available groupings for the insight. Available groupings could be fetched by calling insight list and get APIs in `BASIC` view.
     * @param {string} params.insight - (Required) Required. The resource name of the insight using the form: `organizations/{organization_id}/locations/{location_id}/insights/{insight_id}` `projects/{project_id}/locations/{location_id}/insights/{insight_id}`.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Used to fetch the page represented by the token. Fetches the first page when not set.
     * @param {string} params.startTime - Required. Starting time for the duration for which insight is to be pulled.
     * @return {object} The API response object.
     */
    this.organizations.locations.insights.configuredInsight = (params) => this._makeRequest('v1alpha/{+insight}:configuredInsight', 'GET', params);

    /**
     * Lists for all the available insights that could be fetched from the system. Allows to filter using category. Setting the `view` to `BASIC` will let you iterate over the list of insight metadatas.
     * @param {string} params.aggregation - Optional. Aggregation type. The default is 'DAILY'.
     * @param {string} params.endTime - Optional. Ending time for the duration for which insights are to be pulled. The default is the current time.
     * @param {string} params.filter - Optional. Filter expression to restrict the insights returned. Supported filter fields: * `type` * `category` * `subCategory` Examples: * "category = application AND type = count" * "category = application AND subCategory = iap" * "type = status" Allowed values: * type: [count, latency, status, list] * category: [application, device, request, security] * subCategory: [iap, caa, webprotect] NOTE: Only equality based comparison is allowed. Only `AND` conjunction is allowed. NOTE: The 'AND' in the filter field needs to be in capital letters only. NOTE: Just filtering on `subCategory` is not allowed. It should be passed in with the parent `category` too. (These expressions are based on the filter language described at https://google.aip.dev/160).
     * @param {string} params.orderBy - Optional. Hint for how to order the results. This is currently ignored.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. NOTE: Default page size is 50.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The resource name of InsightMetadata using the form: `organizations/{organization_id}/locations/{location}` `projects/{project_id}/locations/{location_id}`
     * @param {string} params.startTime - Optional. Starting time for the duration for which insights are to be pulled. The default is 7 days before the current time.
     * @param {string} params.view - Required. List only metadata or full data.
     * @return {object} The API response object.
     */
    this.organizations.locations.insights.list = (params) => this._makeRequest('v1alpha/{+parent}/insights', 'GET', params);

    this.organizations.locations.global = {};

    this.organizations.locations.global.partnerTenants = {};

    /**
     * Gets details of a single PartnerTenant.
     * @param {string} params.name - (Required) Required. The resource name of the PartnerTenant using the form: `organizations/{organization_id}/locations/global/partnerTenants/{partner_tenant_id}`
     * @return {object} The API response object.
     */
    this.organizations.locations.global.partnerTenants.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists PartnerTenants in a given organization.
     * @param {string} params.filter - Optional. A filter specifying constraints of a list operation. All fields in the PartnerTenant message are supported. For example, the following query will return the PartnerTenants with displayName "test-tenant" organizations/${ORG_ID}/locations/${LOCATION}/partnerTenants?filter=displayName="test-tenant" Nested fields are also supported. The follow query will return PartnerTenants with internal_tenant_id "1234" organizations/${ORG_ID}/locations/${LOCATION}/partnerTenants?filter=partnerMetadata.internalTenantId="1234" For more information, please refer to https://google.aip.dev/160.
     * @param {string} params.orderBy - Optional. Specifies the ordering of results. See [Sorting order](https://cloud.google.com/apis/design/design_patterns#sorting_order) for more information.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous ListPartnerTenantsResponse, if any.
     * @param {string} params.parent - (Required) Required. The parent organization to which the PartnerTenants belong. Format: `organizations/{organization_id}/locations/global`
     * @return {object} The API response object.
     */
    this.organizations.locations.global.partnerTenants.list = (params) => this._makeRequest('v1alpha/{+parent}/partnerTenants', 'GET', params);

    /**
     * Deletes a single PartnerTenant.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.organizations.locations.global.partnerTenants.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.organizations.locations.subscriptions = {};

    /**
     * Creates a new BeyondCorp Enterprise Subscription in a given organization. Location will always be global as BeyondCorp subscriptions are per organization.
     * @param {string} params.parent - (Required) Required. The resource name of the subscription location using the form: `organizations/{organization_id}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.subscriptions.create = (params) => this._makeRequest('v1alpha/{+parent}/subscriptions', 'POST', params);

    /**
     * Updates an existing BeyondCorp Enterprise Subscription in a given organization. Location will always be global as BeyondCorp subscriptions are per organization.
     * @param {string} params.name - (Required) Identifier. Unique resource name of the Subscription. The name is ignored when creating a subscription.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Subscription resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. Mutable fields: seat_count.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.subscriptions.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Cancels an existing BeyondCorp Enterprise Subscription in a given organization. Location will always be global as BeyondCorp subscriptions are per organization. Returns the timestamp for when the cancellation will become effective
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.organizations.locations.subscriptions.cancel = (params) => this._makeRequest('v1alpha/{+name}:cancel', 'GET', params);

    /**
     * Restarts an existing BeyondCorp Enterprise Subscription in a given organization, that is scheduled for cancellation. Location will always be global as BeyondCorp subscriptions are per organization. Returns the timestamp for when the cancellation will become effective
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.organizations.locations.subscriptions.restart = (params) => this._makeRequest('v1alpha/{+name}:restart', 'GET', params);

    /**
     * Gets details of a single Subscription.
     * @param {string} params.name - (Required) Required. The resource name of Subscription using the form: `organizations/{organization_id}/locations/{location}/subscriptions/{subscription_id}`
     * @return {object} The API response object.
     */
    this.organizations.locations.subscriptions.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists Subscriptions in a given organization and location.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return. If not specified, a default value of 50 will be used by the service. Regardless of the page_size value, the response may include a partial list and a caller should only rely on response's next_page_token to determine if there are more instances left to be queried.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous ListSubscriptionsRequest, if any.
     * @param {string} params.parent - (Required) Required. The resource name of Subscription using the form: `organizations/{organization_id}/locations/{location}`
     * @return {object} The API response object.
     */
    this.organizations.locations.subscriptions.list = (params) => this._makeRequest('v1alpha/{+parent}/subscriptions', 'GET', params);
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
