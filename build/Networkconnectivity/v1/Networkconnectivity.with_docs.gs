
/**
 * Google Apps Script client library for the Network Connectivity API
 * Documentation URL: https://cloud.google.com/network-connectivity/docs/reference/networkconnectivity/rest
 * @class
 */
class Networkconnectivity {
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
    this._rootUrl = 'https://networkconnectivity.googleapis.com/';
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

    this.projects.locations.serviceConnectionMaps = {};

    /**
     * Lists ServiceConnectionMaps in a given project and location.
     * @param {string} params.filter - A filter expression that filters the results listed in the response.
     * @param {string} params.orderBy - Sort the results by a certain order.
     * @param {integer} params.pageSize - The maximum number of results per page that should be returned.
     * @param {string} params.pageToken - The page token.
     * @param {string} params.parent - (Required) Required. The parent resource's name. ex. projects/123/locations/us-east1
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionMaps.list = (params) => this._makeRequest('v1/{+parent}/serviceConnectionMaps', 'GET', params);

    /**
     * Gets details of a single ServiceConnectionMap.
     * @param {string} params.name - (Required) Required. Name of the ServiceConnectionMap to get.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionMaps.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new ServiceConnectionMap in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource's name of the ServiceConnectionMap. ex. projects/123/locations/us-east1
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.serviceConnectionMapId - Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/serviceConnectionMaps/foo') See https://google.aip.dev/122#resource-id-segments Unique per location. If one is not provided, one will be generated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionMaps.create = (params) => this._makeRequest('v1/{+parent}/serviceConnectionMaps', 'POST', params);

    /**
     * Updates the parameters of a single ServiceConnectionMap.
     * @param {string} params.name - (Required) Immutable. The name of a ServiceConnectionMap. Format: projects/{project}/locations/{location}/serviceConnectionMaps/{service_connection_map} See: https://google.aip.dev/122#fields-representing-resource-names
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the ServiceConnectionMap resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionMaps.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single ServiceConnectionMap.
     * @param {string} params.etag - Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * @param {string} params.name - (Required) Required. The name of the ServiceConnectionMap to delete.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionMaps.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionMaps.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionMaps.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionMaps.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.serviceConnectionPolicies = {};

    /**
     * Lists ServiceConnectionPolicies in a given project and location.
     * @param {string} params.filter - A filter expression that filters the results listed in the response.
     * @param {string} params.orderBy - Sort the results by a certain order.
     * @param {integer} params.pageSize - The maximum number of results per page that should be returned.
     * @param {string} params.pageToken - The page token.
     * @param {string} params.parent - (Required) Required. The parent resource's name. ex. projects/123/locations/us-east1
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionPolicies.list = (params) => this._makeRequest('v1/{+parent}/serviceConnectionPolicies', 'GET', params);

    /**
     * Gets details of a single ServiceConnectionPolicy.
     * @param {string} params.name - (Required) Required. Name of the ServiceConnectionPolicy to get.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new ServiceConnectionPolicy in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource's name of the ServiceConnectionPolicy. ex. projects/123/locations/us-east1
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.serviceConnectionPolicyId - Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/serviceConnectionPolicies/foo') See https://google.aip.dev/122#resource-id-segments Unique per location.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionPolicies.create = (params) => this._makeRequest('v1/{+parent}/serviceConnectionPolicies', 'POST', params);

    /**
     * Updates the parameters of a single ServiceConnectionPolicy.
     * @param {string} params.name - (Required) Immutable. The name of a ServiceConnectionPolicy. Format: projects/{project}/locations/{location}/serviceConnectionPolicies/{service_connection_policy} See: https://google.aip.dev/122#fields-representing-resource-names
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the ServiceConnectionPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single ServiceConnectionPolicy.
     * @param {string} params.etag - Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * @param {string} params.name - (Required) Required. The name of the ServiceConnectionPolicy to delete.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.serviceClasses = {};

    /**
     * Lists ServiceClasses in a given project and location.
     * @param {string} params.filter - A filter expression that filters the results listed in the response.
     * @param {string} params.orderBy - Sort the results by a certain order.
     * @param {integer} params.pageSize - The maximum number of results per page that should be returned.
     * @param {string} params.pageToken - The page token.
     * @param {string} params.parent - (Required) Required. The parent resource's name. ex. projects/123/locations/us-east1
     * @return {object} The API response object.
     */
    this.projects.locations.serviceClasses.list = (params) => this._makeRequest('v1/{+parent}/serviceClasses', 'GET', params);

    /**
     * Gets details of a single ServiceClass.
     * @param {string} params.name - (Required) Required. Name of the ServiceClass to get.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceClasses.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the parameters of a single ServiceClass.
     * @param {string} params.name - (Required) Immutable. The name of a ServiceClass resource. Format: projects/{project}/locations/{location}/serviceClasses/{service_class} See: https://google.aip.dev/122#fields-representing-resource-names
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the ServiceClass resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceClasses.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single ServiceClass.
     * @param {string} params.etag - Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * @param {string} params.name - (Required) Required. The name of the ServiceClass to delete.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.serviceClasses.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceClasses.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceClasses.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceClasses.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.serviceConnectionTokens = {};

    /**
     * Gets details of a single ServiceConnectionToken.
     * @param {string} params.name - (Required) Required. Name of the ServiceConnectionToken to get.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionTokens.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists ServiceConnectionTokens in a given project and location.
     * @param {string} params.filter - A filter expression that filters the results listed in the response.
     * @param {string} params.orderBy - Sort the results by a certain order.
     * @param {integer} params.pageSize - The maximum number of results per page that should be returned.
     * @param {string} params.pageToken - The page token.
     * @param {string} params.parent - (Required) Required. The parent resource's name. ex. projects/123/locations/us-east1
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionTokens.list = (params) => this._makeRequest('v1/{+parent}/serviceConnectionTokens', 'GET', params);

    /**
     * Creates a new ServiceConnectionToken in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource's name of the ServiceConnectionToken. ex. projects/123/locations/us-east1
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.serviceConnectionTokenId - Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/ServiceConnectionTokens/foo') See https://google.aip.dev/122#resource-id-segments Unique per location. If one is not provided, one will be generated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionTokens.create = (params) => this._makeRequest('v1/{+parent}/serviceConnectionTokens', 'POST', params);

    /**
     * Deletes a single ServiceConnectionToken.
     * @param {string} params.etag - Optional. The etag is computed by the server, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * @param {string} params.name - (Required) Required. The name of the ServiceConnectionToken to delete.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.serviceConnectionTokens.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.global = {};

    this.projects.locations.global.hubs = {};

    /**
     * Lists the Network Connectivity Center hubs associated with a given project.
     * @param {string} params.filter - An expression that filters the list of results.
     * @param {string} params.orderBy - Sort the results by a certain order.
     * @param {integer} params.pageSize - The maximum number of results per page to return.
     * @param {string} params.pageToken - The page token.
     * @param {string} params.parent - (Required) Required. The parent resource's name.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.list = (params) => this._makeRequest('v1/{+parent}/hubs', 'GET', params);

    /**
     * Gets details about a Network Connectivity Center hub.
     * @param {string} params.name - (Required) Required. The name of the hub resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Network Connectivity Center hub in the specified project.
     * @param {string} params.hubId - Required. A unique identifier for the hub.
     * @param {string} params.parent - (Required) Required. The parent resource.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.create = (params) => this._makeRequest('v1/{+parent}/hubs', 'POST', params);

    /**
     * Updates the description and/or labels of a Network Connectivity Center hub.
     * @param {string} params.name - (Required) Immutable. The name of the hub. Hub names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub_id}`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. In the case of an update to an existing hub, field mask is used to specify the fields to be overwritten. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not provide a mask, then all fields are overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a Network Connectivity Center hub.
     * @param {string} params.name - (Required) Required. The name of the hub to delete.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists the Network Connectivity Center spokes associated with a specified hub and location. The list includes both spokes that are attached to the hub and spokes that have been proposed but not yet accepted.
     * @param {string} params.filter - An expression that filters the list of results.
     * @param {string} params.name - (Required) Required. The name of the hub.
     * @param {string} params.orderBy - Sort the results by name or create_time.
     * @param {integer} params.pageSize - The maximum number of results to return per page.
     * @param {string} params.pageToken - The page token.
     * @param {string} params.spokeLocations - A list of locations. Specify one of the following: `[global]`, a single region (for example, `[us-central1]`), or a combination of values (for example, `[global, us-central1, us-west1]`). If the spoke_locations field is populated, the list of results includes only spokes in the specified location. If the spoke_locations field is not populated, the list of results includes spokes in all locations.
     * @param {string} params.view - The view of the spoke to return. The view that you use determines which spoke fields are included in the response.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.listSpokes = (params) => this._makeRequest('v1/{+name}:listSpokes', 'GET', params);

    /**
     * Query the Private Service Connect propagation status of a Network Connectivity Center hub.
     * @param {string} params.filter - Optional. An expression that filters the list of results. The filter can be used to filter the results by the following fields: * `psc_propagation_status.source_spoke` * `psc_propagation_status.source_group` * `psc_propagation_status.source_forwarding_rule` * `psc_propagation_status.target_spoke` * `psc_propagation_status.target_group` * `psc_propagation_status.code` * `psc_propagation_status.message`
     * @param {string} params.groupBy - Optional. Aggregate the results by the specified fields. A comma-separated list of any of these fields: * `psc_propagation_status.source_spoke` * `psc_propagation_status.source_group` * `psc_propagation_status.source_forwarding_rule` * `psc_propagation_status.target_spoke` * `psc_propagation_status.target_group` * `psc_propagation_status.code`
     * @param {string} params.name - (Required) Required. The name of the hub.
     * @param {string} params.orderBy - Optional. Sort the results in ascending order by the specified fields. A comma-separated list of any of these fields: * `psc_propagation_status.source_spoke` * `psc_propagation_status.source_group` * `psc_propagation_status.source_forwarding_rule` * `psc_propagation_status.target_spoke` * `psc_propagation_status.target_group` * `psc_propagation_status.code` If `group_by` is set, the value of the `order_by` field must be the same as or a subset of the `group_by` field.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return per page.
     * @param {string} params.pageToken - Optional. The page token.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.queryStatus = (params) => this._makeRequest('v1/{+name}:queryStatus', 'GET', params);

    /**
     * Rejects a Network Connectivity Center spoke from being attached to a hub. If the spoke was previously in the `ACTIVE` state, it transitions to the `INACTIVE` state and is no longer able to connect to other spokes that are attached to the hub.
     * @param {string} params.name - (Required) Required. The name of the hub from which to reject the spoke.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.rejectSpoke = (params) => this._makeRequest('v1/{+name}:rejectSpoke', 'POST', params);

    /**
     * Accepts a proposal to attach a Network Connectivity Center spoke to a hub.
     * @param {string} params.name - (Required) Required. The name of the hub into which to accept the spoke.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.acceptSpoke = (params) => this._makeRequest('v1/{+name}:acceptSpoke', 'POST', params);

    /**
     * Accepts a proposal to update a Network Connectivity Center spoke in a hub.
     * @param {string} params.name - (Required) Required. The name of the hub to accept spoke update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.acceptSpokeUpdate = (params) => this._makeRequest('v1/{+name}:acceptSpokeUpdate', 'POST', params);

    /**
     * Rejects a proposal to update a Network Connectivity Center spoke in a hub.
     * @param {string} params.name - (Required) Required. The name of the hub to reject spoke update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.rejectSpokeUpdate = (params) => this._makeRequest('v1/{+name}:rejectSpokeUpdate', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.global.hubs.routeTables = {};

    /**
     * Gets details about a Network Connectivity Center route table.
     * @param {string} params.name - (Required) Required. The name of the route table resource.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.routeTables.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists route tables in a given hub.
     * @param {string} params.filter - An expression that filters the list of results.
     * @param {string} params.orderBy - Sort the results by a certain order.
     * @param {integer} params.pageSize - The maximum number of results to return per page.
     * @param {string} params.pageToken - The page token.
     * @param {string} params.parent - (Required) Required. The parent resource's name.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.routeTables.list = (params) => this._makeRequest('v1/{+parent}/routeTables', 'GET', params);

    this.projects.locations.global.hubs.routeTables.routes = {};

    /**
     * Gets details about the specified route.
     * @param {string} params.name - (Required) Required. The name of the route resource.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.routeTables.routes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists routes in a given route table.
     * @param {string} params.filter - An expression that filters the list of results.
     * @param {string} params.orderBy - Sort the results by a certain order.
     * @param {integer} params.pageSize - The maximum number of results to return per page.
     * @param {string} params.pageToken - The page token.
     * @param {string} params.parent - (Required) Required. The parent resource's name.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.routeTables.routes.list = (params) => this._makeRequest('v1/{+parent}/routes', 'GET', params);

    this.projects.locations.global.hubs.groups = {};

    /**
     * Gets details about a Network Connectivity Center group.
     * @param {string} params.name - (Required) Required. The name of the route table resource.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.groups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists groups in a given hub.
     * @param {string} params.filter - An expression that filters the list of results.
     * @param {string} params.orderBy - Sort the results by a certain order.
     * @param {integer} params.pageSize - The maximum number of results to return per page.
     * @param {string} params.pageToken - The page token.
     * @param {string} params.parent - (Required) Required. The parent resource's name.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.groups.list = (params) => this._makeRequest('v1/{+parent}/groups', 'GET', params);

    /**
     * Updates the parameters of a Network Connectivity Center group.
     * @param {string} params.name - (Required) Immutable. The name of the group. Group names must be unique. They use the following form: `projects/{project_number}/locations/global/hubs/{hub}/groups/{group_id}`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. In the case of an update to an existing group, field mask is used to specify the fields to be overwritten. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not provide a mask, then all fields are overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.groups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.groups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.groups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.hubs.groups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.global.policyBasedRoutes = {};

    /**
     * Lists policy-based routes in a given project and location.
     * @param {string} params.filter - A filter expression that filters the results listed in the response.
     * @param {string} params.orderBy - Sort the results by a certain order.
     * @param {integer} params.pageSize - The maximum number of results per page that should be returned.
     * @param {string} params.pageToken - The page token.
     * @param {string} params.parent - (Required) Required. The parent resource's name.
     * @return {object} The API response object.
     */
    this.projects.locations.global.policyBasedRoutes.list = (params) => this._makeRequest('v1/{+parent}/policyBasedRoutes', 'GET', params);

    /**
     * Gets details of a single policy-based route.
     * @param {string} params.name - (Required) Required. Name of the PolicyBasedRoute resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.global.policyBasedRoutes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new policy-based route in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource's name of the PolicyBasedRoute.
     * @param {string} params.policyBasedRouteId - Required. Unique id for the policy-based route to create. Provided by the client when the resource is created. The name must comply with https://google.aip.dev/122#resource-id-segments. Specifically, the name must be 1-63 characters long and match the regular expression [a-z]([a-z0-9-]*[a-z0-9])?. The first character must be a lowercase letter, and all following characters (except for the last character) must be a dash, lowercase letter, or digit. The last character must be a lowercase letter or digit.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.policyBasedRoutes.create = (params) => this._makeRequest('v1/{+parent}/policyBasedRoutes', 'POST', params);

    /**
     * Deletes a single policy-based route.
     * @param {string} params.name - (Required) Required. Name of the policy-based route resource to delete.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.global.policyBasedRoutes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.policyBasedRoutes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.global.policyBasedRoutes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.global.policyBasedRoutes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.spokes = {};

    /**
     * Lists the Network Connectivity Center spokes in a specified project and location.
     * @param {string} params.filter - An expression that filters the list of results.
     * @param {string} params.orderBy - Sort the results by a certain order.
     * @param {integer} params.pageSize - The maximum number of results to return per page.
     * @param {string} params.pageToken - The page token.
     * @param {string} params.parent - (Required) Required. The parent resource.
     * @return {object} The API response object.
     */
    this.projects.locations.spokes.list = (params) => this._makeRequest('v1/{+parent}/spokes', 'GET', params);

    /**
     * Gets details about a Network Connectivity Center spoke.
     * @param {string} params.name - (Required) Required. The name of the spoke resource.
     * @return {object} The API response object.
     */
    this.projects.locations.spokes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a Network Connectivity Center spoke.
     * @param {string} params.parent - (Required) Required. The parent resource.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.spokeId - Required. Unique id for the spoke to create.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.spokes.create = (params) => this._makeRequest('v1/{+parent}/spokes', 'POST', params);

    /**
     * Updates the parameters of a Network Connectivity Center spoke.
     * @param {string} params.name - (Required) Immutable. The name of the spoke. Spoke names must be unique. They use the following form: `projects/{project_number}/locations/{region}/spokes/{spoke_id}`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. In the case of an update to an existing spoke, field mask is used to specify the fields to be overwritten. The fields specified in the update_mask are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not provide a mask, then all fields are overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.spokes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a Network Connectivity Center spoke.
     * @param {string} params.name - (Required) Required. The name of the spoke to delete.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that a request doesn't result in creation of duplicate commitments for at least 60 minutes. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check to see whether the original operation was received. If it was, the server ignores the second request. This behavior prevents clients from mistakenly creating duplicate commitments. The request ID must be a valid UUID, with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.spokes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.spokes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.spokes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.spokes.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.internalRanges = {};

    /**
     * Lists internal ranges in a given project and location.
     * @param {string} params.filter - A filter expression that filters the results listed in the response.
     * @param {string} params.orderBy - Sort the results by a certain order.
     * @param {integer} params.pageSize - The maximum number of results per page that should be returned.
     * @param {string} params.pageToken - The page token.
     * @param {string} params.parent - (Required) Required. The parent resource's name.
     * @return {object} The API response object.
     */
    this.projects.locations.internalRanges.list = (params) => this._makeRequest('v1/{+parent}/internalRanges', 'GET', params);

    /**
     * Gets details of a single internal range.
     * @param {string} params.name - (Required) Required. Name of the InternalRange to get.
     * @return {object} The API response object.
     */
    this.projects.locations.internalRanges.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new internal range in a given project and location.
     * @param {string} params.internalRangeId - Optional. Resource ID (i.e. 'foo' in '[...]/projects/p/locations/l/internalRanges/foo') See https://google.aip.dev/122#resource-id-segments Unique per location.
     * @param {string} params.parent - (Required) Required. The parent resource's name of the internal range.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.internalRanges.create = (params) => this._makeRequest('v1/{+parent}/internalRanges', 'POST', params);

    /**
     * Updates the parameters of a single internal range.
     * @param {string} params.name - (Required) Identifier. The name of an internal range. Format: projects/{project}/locations/{location}/internalRanges/{internal_range} See: https://google.aip.dev/122#fields-representing-resource-names
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the InternalRange resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.internalRanges.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single internal range.
     * @param {string} params.name - (Required) Required. The name of the internal range to delete.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.internalRanges.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.internalRanges.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.internalRanges.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.internalRanges.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.regionalEndpoints = {};

    /**
     * Lists RegionalEndpoints in a given project and location.
     * @param {string} params.filter - A filter expression that filters the results listed in the response.
     * @param {string} params.orderBy - Sort the results by a certain order.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A page token.
     * @param {string} params.parent - (Required) Required. The parent resource's name of the RegionalEndpoint.
     * @return {object} The API response object.
     */
    this.projects.locations.regionalEndpoints.list = (params) => this._makeRequest('v1/{+parent}/regionalEndpoints', 'GET', params);

    /**
     * Gets details of a single RegionalEndpoint.
     * @param {string} params.name - (Required) Required. Name of the RegionalEndpoint resource to get. Format: `projects/{project}/locations/{location}/regionalEndpoints/{regional_endpoint}`
     * @return {object} The API response object.
     */
    this.projects.locations.regionalEndpoints.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new RegionalEndpoint in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource's name of the RegionalEndpoint.
     * @param {string} params.regionalEndpointId - Required. Unique id of the Regional Endpoint to be created. @pattern: ^[-a-z0-9](?:[-a-z0-9]{0,44})[a-z0-9]$
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.regionalEndpoints.create = (params) => this._makeRequest('v1/{+parent}/regionalEndpoints', 'POST', params);

    /**
     * Deletes a single RegionalEndpoint.
     * @param {string} params.name - (Required) Required. The name of the RegionalEndpoint to delete.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if the original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.regionalEndpoints.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
        url = url.replace(placeholder, remainingParams[paramName]);
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
