
/**
 * Google Apps Script client library for the Network Security API
 * Documentation URL: https://cloud.google.com/networking
 * @class
 */
class Networksecurity {
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
    this._rootUrl = 'https://networksecurity.googleapis.com/';
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

    this.projects.locations.addressGroups = {};

    /**
     * Lists address groups in a given project and location.
     * @param {integer} params.pageSize - Maximum number of AddressGroups to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListAddressGroupsResponse` Indicates that this is a continuation of a prior `ListAddressGroups` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the AddressGroups should be listed, specified in the format `projects/*\/locations/{location}`.
     * @param {boolean} params.returnPartialSuccess - Optional. If true, allow partial responses for multi-regional Aggregated List requests.
     * @return {object} The API response object.
     */
    this.projects.locations.addressGroups.list = (params) => this._makeRequest('v1/{+parent}/addressGroups', 'GET', params);

    /**
     * Gets details of a single address group.
     * @param {string} params.name - (Required) Required. A name of the AddressGroup to get. Must be in the format `projects/*\/locations/{location}/addressGroups/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.addressGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new address group in a given project and location.
     * @param {string} params.addressGroupId - Required. Short name of the AddressGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy".
     * @param {string} params.parent - (Required) Required. The parent resource of the AddressGroup. Must be in the format `projects/*\/locations/{location}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.addressGroups.create = (params) => this._makeRequest('v1/{+parent}/addressGroups', 'POST', params);

    /**
     * Updates the parameters of a single address group.
     * @param {string} params.name - (Required) Required. Name of the AddressGroup resource. It matches pattern `projects/*\/locations/{location}/addressGroups/`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the AddressGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.addressGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Adds items to an address group.
     * @param {string} params.addressGroup - (Required) Required. A name of the AddressGroup to add items to. Must be in the format `projects|organization/*\/locations/{location}/addressGroups/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.addressGroups.addItems = (params) => this._makeRequest('v1/{+addressGroup}:addItems', 'POST', params);

    /**
     * Removes items from an address group.
     * @param {string} params.addressGroup - (Required) Required. A name of the AddressGroup to remove items from. Must be in the format `projects|organization/*\/locations/{location}/addressGroups/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.addressGroups.removeItems = (params) => this._makeRequest('v1/{+addressGroup}:removeItems', 'POST', params);

    /**
     * Clones items from one address group to another.
     * @param {string} params.addressGroup - (Required) Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/*\/locations/{location}/addressGroups/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.addressGroups.cloneItems = (params) => this._makeRequest('v1/{+addressGroup}:cloneItems', 'POST', params);

    /**
     * Deletes a single address group.
     * @param {string} params.name - (Required) Required. A name of the AddressGroup to delete. Must be in the format `projects/*\/locations/{location}/addressGroups/*`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.addressGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists references of an address group.
     * @param {string} params.addressGroup - (Required) Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/*\/locations/{location}/addressGroups/*`.
     * @param {integer} params.pageSize - The maximum number of references to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more AddressGroupUsers left to be queried.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @return {object} The API response object.
     */
    this.projects.locations.addressGroups.listReferences = (params) => this._makeRequest('v1/{+addressGroup}:listReferences', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.addressGroups.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.addressGroups.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.addressGroups.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.firewallEndpointAssociations = {};

    /**
     * Lists Associations in a given project and location.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListAssociationsRequest
     * @return {object} The API response object.
     */
    this.projects.locations.firewallEndpointAssociations.list = (params) => this._makeRequest('v1/{+parent}/firewallEndpointAssociations', 'GET', params);

    /**
     * Gets details of a single FirewallEndpointAssociation.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @return {object} The API response object.
     */
    this.projects.locations.firewallEndpointAssociations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new FirewallEndpointAssociation in a given project and location.
     * @param {string} params.firewallEndpointAssociationId - Optional. Id of the requesting object. If auto-generating Id server-side, remove this field and firewall_endpoint_association_id from the method_signature of Create RPC.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.firewallEndpointAssociations.create = (params) => this._makeRequest('v1/{+parent}/firewallEndpointAssociations', 'POST', params);

    /**
     * Deletes a single FirewallEndpointAssociation.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.firewallEndpointAssociations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Update a single FirewallEndpointAssociation.
     * @param {string} params.name - (Required) Immutable. Identifier. name of resource
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Association resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.firewallEndpointAssociations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.interceptEndpointGroups = {};

    /**
     * Lists endpoint groups in a given project and location. See https://google.aip.dev/132.
     * @param {string} params.filter - Optional. Filter expression. See https://google.aip.dev/160#filtering for more details.
     * @param {string} params.orderBy - Optional. Sort expression. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListInterceptEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of endpoint groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptEndpointGroups.list = (params) => this._makeRequest('v1/{+parent}/interceptEndpointGroups', 'GET', params);

    /**
     * Gets a specific endpoint group. See https://google.aip.dev/131.
     * @param {string} params.name - (Required) Required. The name of the endpoint group to retrieve. Format: projects/{project}/locations/{location}/interceptEndpointGroups/{intercept_endpoint_group}
     * @return {object} The API response object.
     */
    this.projects.locations.interceptEndpointGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates an endpoint group in a given project and location. See https://google.aip.dev/133.
     * @param {string} params.interceptEndpointGroupId - Required. The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name.
     * @param {string} params.parent - (Required) Required. The parent resource where this endpoint group will be created. Format: projects/{project}/locations/{location}
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptEndpointGroups.create = (params) => this._makeRequest('v1/{+parent}/interceptEndpointGroups', 'POST', params);

    /**
     * Updates an endpoint group. See https://google.aip.dev/134.
     * @param {string} params.name - (Required) Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/interceptEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {string} params.updateMask - Optional. The list of fields to update. Fields are specified relative to the endpoint group (e.g. `description`; *not* `intercept_endpoint_group.description`). See https://google.aip.dev/161 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptEndpointGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an endpoint group. See https://google.aip.dev/135.
     * @param {string} params.name - (Required) Required. The endpoint group to delete.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptEndpointGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.interceptEndpointGroupAssociations = {};

    /**
     * Lists associations in a given project and location. See https://google.aip.dev/132.
     * @param {string} params.filter - Optional. Filter expression. See https://google.aip.dev/160#filtering for more details.
     * @param {string} params.orderBy - Optional. Sort expression. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListInterceptEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of associations. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptEndpointGroupAssociations.list = (params) => this._makeRequest('v1/{+parent}/interceptEndpointGroupAssociations', 'GET', params);

    /**
     * Gets a specific association. See https://google.aip.dev/131.
     * @param {string} params.name - (Required) Required. The name of the association to retrieve. Format: projects/{project}/locations/{location}/interceptEndpointGroupAssociations/{intercept_endpoint_group_association}
     * @return {object} The API response object.
     */
    this.projects.locations.interceptEndpointGroupAssociations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates an association in a given project and location. See https://google.aip.dev/133.
     * @param {string} params.interceptEndpointGroupAssociationId - Optional. The ID to use for the new association, which will become the final component of the endpoint group's resource name. If not provided, the server will generate a unique ID.
     * @param {string} params.parent - (Required) Required. The parent resource where this association will be created. Format: projects/{project}/locations/{location}
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptEndpointGroupAssociations.create = (params) => this._makeRequest('v1/{+parent}/interceptEndpointGroupAssociations', 'POST', params);

    /**
     * Updates an association. See https://google.aip.dev/134.
     * @param {string} params.name - (Required) Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/interceptEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {string} params.updateMask - Optional. The list of fields to update. Fields are specified relative to the association (e.g. `description`; *not* `intercept_endpoint_group_association.description`). See https://google.aip.dev/161 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptEndpointGroupAssociations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an association. See https://google.aip.dev/135.
     * @param {string} params.name - (Required) Required. The association to delete.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptEndpointGroupAssociations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.interceptDeploymentGroups = {};

    /**
     * Lists deployment groups in a given project and location. See https://google.aip.dev/132.
     * @param {string} params.filter - Optional. Filter expression. See https://google.aip.dev/160#filtering for more details.
     * @param {string} params.orderBy - Optional. Sort expression. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListInterceptDeploymentGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptDeploymentGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of deployment groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptDeploymentGroups.list = (params) => this._makeRequest('v1/{+parent}/interceptDeploymentGroups', 'GET', params);

    /**
     * Gets a specific deployment group. See https://google.aip.dev/131.
     * @param {string} params.name - (Required) Required. The name of the deployment group to retrieve. Format: projects/{project}/locations/{location}/interceptDeploymentGroups/{intercept_deployment_group}
     * @return {object} The API response object.
     */
    this.projects.locations.interceptDeploymentGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a deployment group in a given project and location. See https://google.aip.dev/133.
     * @param {string} params.interceptDeploymentGroupId - Required. The ID to use for the new deployment group, which will become the final component of the deployment group's resource name.
     * @param {string} params.parent - (Required) Required. The parent resource where this deployment group will be created. Format: projects/{project}/locations/{location}
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptDeploymentGroups.create = (params) => this._makeRequest('v1/{+parent}/interceptDeploymentGroups', 'POST', params);

    /**
     * Updates a deployment group. See https://google.aip.dev/134.
     * @param {string} params.name - (Required) Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/interceptDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {string} params.updateMask - Optional. The list of fields to update. Fields are specified relative to the deployment group (e.g. `description`; *not* `intercept_deployment_group.description`). See https://google.aip.dev/161 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptDeploymentGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a deployment group. See https://google.aip.dev/135.
     * @param {string} params.name - (Required) Required. The deployment group to delete.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptDeploymentGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.interceptDeployments = {};

    /**
     * Lists deployments in a given project and location. See https://google.aip.dev/132.
     * @param {string} params.filter - Optional. Filter expression. See https://google.aip.dev/160#filtering for more details.
     * @param {string} params.orderBy - Optional. Sort expression. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListInterceptDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListInterceptDeployments` must match the call that provided the page token. See https://google.aip.dev/158 for more details.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of deployments. Example: `projects/123456789/locations/us-central1-a`. See https://google.aip.dev/132 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptDeployments.list = (params) => this._makeRequest('v1/{+parent}/interceptDeployments', 'GET', params);

    /**
     * Gets a specific deployment. See https://google.aip.dev/131.
     * @param {string} params.name - (Required) Required. The name of the deployment to retrieve. Format: projects/{project}/locations/{location}/interceptDeployments/{intercept_deployment}
     * @return {object} The API response object.
     */
    this.projects.locations.interceptDeployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a deployment in a given project and location. See https://google.aip.dev/133.
     * @param {string} params.interceptDeploymentId - Required. The ID to use for the new deployment, which will become the final component of the deployment's resource name.
     * @param {string} params.parent - (Required) Required. The parent resource where this deployment will be created. Format: projects/{project}/locations/{location}
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptDeployments.create = (params) => this._makeRequest('v1/{+parent}/interceptDeployments', 'POST', params);

    /**
     * Updates a deployment. See https://google.aip.dev/134.
     * @param {string} params.name - (Required) Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/interceptDeployments/my-dep`. See https://google.aip.dev/122 for more details.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {string} params.updateMask - Optional. The list of fields to update. Fields are specified relative to the deployment (e.g. `description`; *not* `intercept_deployment.description`). See https://google.aip.dev/161 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptDeployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a deployment. See https://google.aip.dev/135.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.interceptDeployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.mirroringEndpointGroups = {};

    /**
     * Lists endpoint groups in a given project and location. See https://google.aip.dev/132.
     * @param {string} params.filter - Optional. Filter expression. See https://google.aip.dev/160#filtering for more details.
     * @param {string} params.orderBy - Optional. Sort expression. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListMirroringEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of endpoint groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringEndpointGroups.list = (params) => this._makeRequest('v1/{+parent}/mirroringEndpointGroups', 'GET', params);

    /**
     * Gets a specific endpoint group. See https://google.aip.dev/131.
     * @param {string} params.name - (Required) Required. The name of the endpoint group to retrieve. Format: projects/{project}/locations/{location}/mirroringEndpointGroups/{mirroring_endpoint_group}
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringEndpointGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates an endpoint group in a given project and location. See https://google.aip.dev/133.
     * @param {string} params.mirroringEndpointGroupId - Required. The ID to use for the endpoint group, which will become the final component of the endpoint group's resource name.
     * @param {string} params.parent - (Required) Required. The parent resource where this endpoint group will be created. Format: projects/{project}/locations/{location}
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringEndpointGroups.create = (params) => this._makeRequest('v1/{+parent}/mirroringEndpointGroups', 'POST', params);

    /**
     * Updates an endpoint group. See https://google.aip.dev/134.
     * @param {string} params.name - (Required) Immutable. Identifier. The resource name of this endpoint group, for example: `projects/123456789/locations/global/mirroringEndpointGroups/my-eg`. See https://google.aip.dev/122 for more details.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {string} params.updateMask - Optional. The list of fields to update. Fields are specified relative to the endpoint group (e.g. `description`; *not* `mirroring_endpoint_group.description`). See https://google.aip.dev/161 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringEndpointGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an endpoint group. See https://google.aip.dev/135.
     * @param {string} params.name - (Required) Required. The endpoint group to delete.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringEndpointGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.mirroringEndpointGroupAssociations = {};

    /**
     * Lists associations in a given project and location. See https://google.aip.dev/132.
     * @param {string} params.filter - Optional. Filter expression. See https://google.aip.dev/160#filtering for more details.
     * @param {string} params.orderBy - Optional. Sort expression. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListMirroringEndpointGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringEndpointGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of associations. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringEndpointGroupAssociations.list = (params) => this._makeRequest('v1/{+parent}/mirroringEndpointGroupAssociations', 'GET', params);

    /**
     * Gets a specific association. See https://google.aip.dev/131.
     * @param {string} params.name - (Required) Required. The name of the association to retrieve. Format: projects/{project}/locations/{location}/mirroringEndpointGroupAssociations/{mirroring_endpoint_group_association}
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringEndpointGroupAssociations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates an association in a given project and location. See https://google.aip.dev/133.
     * @param {string} params.mirroringEndpointGroupAssociationId - Optional. The ID to use for the new association, which will become the final component of the endpoint group's resource name. If not provided, the server will generate a unique ID.
     * @param {string} params.parent - (Required) Required. The parent resource where this association will be created. Format: projects/{project}/locations/{location}
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringEndpointGroupAssociations.create = (params) => this._makeRequest('v1/{+parent}/mirroringEndpointGroupAssociations', 'POST', params);

    /**
     * Updates an association. See https://google.aip.dev/134.
     * @param {string} params.name - (Required) Immutable. Identifier. The resource name of this endpoint group association, for example: `projects/123456789/locations/global/mirroringEndpointGroupAssociations/my-eg-association`. See https://google.aip.dev/122 for more details.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {string} params.updateMask - Optional. The list of fields to update. Fields are specified relative to the association (e.g. `description`; *not* `mirroring_endpoint_group_association.description`). See https://google.aip.dev/161 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringEndpointGroupAssociations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an association. See https://google.aip.dev/135.
     * @param {string} params.name - (Required) Required. The association to delete.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringEndpointGroupAssociations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.mirroringDeploymentGroups = {};

    /**
     * Lists deployment groups in a given project and location. See https://google.aip.dev/132.
     * @param {string} params.filter - Optional. Filter expression. See https://google.aip.dev/160#filtering for more details.
     * @param {string} params.orderBy - Optional. Sort expression. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListMirroringDeploymentGroups` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringDeploymentGroups` must match the call that provided the page token. See https://google.aip.dev/158 for more details.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of deployment groups. Example: `projects/123456789/locations/global`. See https://google.aip.dev/132 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringDeploymentGroups.list = (params) => this._makeRequest('v1/{+parent}/mirroringDeploymentGroups', 'GET', params);

    /**
     * Gets a specific deployment group. See https://google.aip.dev/131.
     * @param {string} params.name - (Required) Required. The name of the deployment group to retrieve. Format: projects/{project}/locations/{location}/mirroringDeploymentGroups/{mirroring_deployment_group}
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringDeploymentGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a deployment group in a given project and location. See https://google.aip.dev/133.
     * @param {string} params.mirroringDeploymentGroupId - Required. The ID to use for the new deployment group, which will become the final component of the deployment group's resource name.
     * @param {string} params.parent - (Required) Required. The parent resource where this deployment group will be created. Format: projects/{project}/locations/{location}
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringDeploymentGroups.create = (params) => this._makeRequest('v1/{+parent}/mirroringDeploymentGroups', 'POST', params);

    /**
     * Updates a deployment group. See https://google.aip.dev/134.
     * @param {string} params.name - (Required) Immutable. Identifier. The resource name of this deployment group, for example: `projects/123456789/locations/global/mirroringDeploymentGroups/my-dg`. See https://google.aip.dev/122 for more details.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {string} params.updateMask - Optional. The list of fields to update. Fields are specified relative to the deployment group (e.g. `description`; *not* `mirroring_deployment_group.description`). See https://google.aip.dev/161 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringDeploymentGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a deployment group. See https://google.aip.dev/135.
     * @param {string} params.name - (Required) Required. The deployment group to delete.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringDeploymentGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.mirroringDeployments = {};

    /**
     * Lists deployments in a given project and location. See https://google.aip.dev/132.
     * @param {string} params.filter - Optional. Filter expression. See https://google.aip.dev/160#filtering for more details.
     * @param {string} params.orderBy - Optional. Sort expression. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. See https://google.aip.dev/158 for more details.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListMirroringDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListMirroringDeployments` must match the call that provided the page token. See https://google.aip.dev/158 for more details.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of deployments. Example: `projects/123456789/locations/us-central1-a`. See https://google.aip.dev/132 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringDeployments.list = (params) => this._makeRequest('v1/{+parent}/mirroringDeployments', 'GET', params);

    /**
     * Gets a specific deployment. See https://google.aip.dev/131.
     * @param {string} params.name - (Required) Required. The name of the deployment to retrieve. Format: projects/{project}/locations/{location}/mirroringDeployments/{mirroring_deployment}
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringDeployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a deployment in a given project and location. See https://google.aip.dev/133.
     * @param {string} params.mirroringDeploymentId - Required. The ID to use for the new deployment, which will become the final component of the deployment's resource name.
     * @param {string} params.parent - (Required) Required. The parent resource where this deployment will be created. Format: projects/{project}/locations/{location}
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringDeployments.create = (params) => this._makeRequest('v1/{+parent}/mirroringDeployments', 'POST', params);

    /**
     * Updates a deployment. See https://google.aip.dev/134.
     * @param {string} params.name - (Required) Immutable. Identifier. The resource name of this deployment, for example: `projects/123456789/locations/us-central1-a/mirroringDeployments/my-dep`. See https://google.aip.dev/122 for more details.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @param {string} params.updateMask - Optional. The list of fields to update. Fields are specified relative to the deployment (e.g. `description`; *not* `mirroring_deployment.description`). See https://google.aip.dev/161 for more details.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringDeployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a deployment. See https://google.aip.dev/135.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @param {string} params.requestId - Optional. A unique identifier for this request. Must be a UUID4. This request is only idempotent if a `request_id` is provided. See https://google.aip.dev/155 for more details.
     * @return {object} The API response object.
     */
    this.projects.locations.mirroringDeployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authorizationPolicies = {};

    /**
     * Lists AuthorizationPolicies in a given project and location.
     * @param {integer} params.pageSize - Maximum number of AuthorizationPolicies to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListAuthorizationPoliciesResponse` Indicates that this is a continuation of a prior `ListAuthorizationPolicies` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the AuthorizationPolicies should be listed, specified in the format `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizationPolicies.list = (params) => this._makeRequest('v1/{+parent}/authorizationPolicies', 'GET', params);

    /**
     * Gets details of a single AuthorizationPolicy.
     * @param {string} params.name - (Required) Required. A name of the AuthorizationPolicy to get. Must be in the format `projects/{project}/locations/{location}/authorizationPolicies/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizationPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new AuthorizationPolicy in a given project and location.
     * @param {string} params.authorizationPolicyId - Required. Short name of the AuthorizationPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy".
     * @param {string} params.parent - (Required) Required. The parent resource of the AuthorizationPolicy. Must be in the format `projects/{project}/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizationPolicies.create = (params) => this._makeRequest('v1/{+parent}/authorizationPolicies', 'POST', params);

    /**
     * Updates the parameters of a single AuthorizationPolicy.
     * @param {string} params.name - (Required) Required. Name of the AuthorizationPolicy resource. It matches pattern `projects/{project}/locations/{location}/authorizationPolicies/`.
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the AuthorizationPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizationPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single AuthorizationPolicy.
     * @param {string} params.name - (Required) Required. A name of the AuthorizationPolicy to delete. Must be in the format `projects/{project}/locations/{location}/authorizationPolicies/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizationPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizationPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizationPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authorizationPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.backendAuthenticationConfigs = {};

    /**
     * Lists BackendAuthenticationConfigs in a given project and location.
     * @param {integer} params.pageSize - Maximum number of BackendAuthenticationConfigs to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListBackendAuthenticationConfigsResponse` Indicates that this is a continuation of a prior `ListBackendAuthenticationConfigs` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the BackendAuthenticationConfigs should be listed, specified in the format `projects/*\/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.backendAuthenticationConfigs.list = (params) => this._makeRequest('v1/{+parent}/backendAuthenticationConfigs', 'GET', params);

    /**
     * Gets details of a single BackendAuthenticationConfig to BackendAuthenticationConfig.
     * @param {string} params.name - (Required) Required. A name of the BackendAuthenticationConfig to get. Must be in the format `projects/*\/locations/{location}/backendAuthenticationConfigs/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.backendAuthenticationConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new BackendAuthenticationConfig in a given project and location.
     * @param {string} params.backendAuthenticationConfigId - Required. Short name of the BackendAuthenticationConfig resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "backend-auth-config".
     * @param {string} params.parent - (Required) Required. The parent resource of the BackendAuthenticationConfig. Must be in the format `projects/*\/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backendAuthenticationConfigs.create = (params) => this._makeRequest('v1/{+parent}/backendAuthenticationConfigs', 'POST', params);

    /**
     * Updates the parameters of a single BackendAuthenticationConfig to BackendAuthenticationConfig.
     * @param {string} params.name - (Required) Required. Name of the BackendAuthenticationConfig resource. It matches the pattern `projects/*\/locations/{location}/backendAuthenticationConfigs/{backend_authentication_config}`
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the BackendAuthenticationConfig resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backendAuthenticationConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single BackendAuthenticationConfig to BackendAuthenticationConfig.
     * @param {string} params.etag - Optional. Etag of the resource. If this is provided, it must match the server's etag.
     * @param {string} params.name - (Required) Required. A name of the BackendAuthenticationConfig to delete. Must be in the format `projects/*\/locations/{location}/backendAuthenticationConfigs/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.backendAuthenticationConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.serverTlsPolicies = {};

    /**
     * Lists ServerTlsPolicies in a given project and location.
     * @param {integer} params.pageSize - Maximum number of ServerTlsPolicies to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListServerTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListServerTlsPolicies` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the ServerTlsPolicies should be listed, specified in the format `projects/*\/locations/{location}`.
     * @param {boolean} params.returnPartialSuccess - Optional. Setting this field to `true` will opt the request into returning the resources that are reachable, and into including the names of those that were unreachable in the [ListServerTlsPoliciesResponse.unreachable] field. This can only be `true` when reading across collections e.g. when `parent` is set to `"projects/example/locations/-"`.
     * @return {object} The API response object.
     */
    this.projects.locations.serverTlsPolicies.list = (params) => this._makeRequest('v1/{+parent}/serverTlsPolicies', 'GET', params);

    /**
     * Gets details of a single ServerTlsPolicy.
     * @param {string} params.name - (Required) Required. A name of the ServerTlsPolicy to get. Must be in the format `projects/*\/locations/{location}/serverTlsPolicies/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.serverTlsPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new ServerTlsPolicy in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource of the ServerTlsPolicy. Must be in the format `projects/*\/locations/{location}`.
     * @param {string} params.serverTlsPolicyId - Required. Short name of the ServerTlsPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "server_mtls_policy".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serverTlsPolicies.create = (params) => this._makeRequest('v1/{+parent}/serverTlsPolicies', 'POST', params);

    /**
     * Updates the parameters of a single ServerTlsPolicy.
     * @param {string} params.name - (Required) Required. Name of the ServerTlsPolicy resource. It matches the pattern `projects/*\/locations/{location}/serverTlsPolicies/{server_tls_policy}`
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the ServerTlsPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serverTlsPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single ServerTlsPolicy.
     * @param {string} params.name - (Required) Required. A name of the ServerTlsPolicy to delete. Must be in the format `projects/*\/locations/{location}/serverTlsPolicies/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.serverTlsPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serverTlsPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.serverTlsPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serverTlsPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.clientTlsPolicies = {};

    /**
     * Lists ClientTlsPolicies in a given project and location.
     * @param {integer} params.pageSize - Maximum number of ClientTlsPolicies to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListClientTlsPoliciesResponse` Indicates that this is a continuation of a prior `ListClientTlsPolicies` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the ClientTlsPolicies should be listed, specified in the format `projects/*\/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.clientTlsPolicies.list = (params) => this._makeRequest('v1/{+parent}/clientTlsPolicies', 'GET', params);

    /**
     * Gets details of a single ClientTlsPolicy.
     * @param {string} params.name - (Required) Required. A name of the ClientTlsPolicy to get. Must be in the format `projects/*\/locations/{location}/clientTlsPolicies/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.clientTlsPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new ClientTlsPolicy in a given project and location.
     * @param {string} params.clientTlsPolicyId - Required. Short name of the ClientTlsPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "client_mtls_policy".
     * @param {string} params.parent - (Required) Required. The parent resource of the ClientTlsPolicy. Must be in the format `projects/*\/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clientTlsPolicies.create = (params) => this._makeRequest('v1/{+parent}/clientTlsPolicies', 'POST', params);

    /**
     * Updates the parameters of a single ClientTlsPolicy.
     * @param {string} params.name - (Required) Required. Name of the ClientTlsPolicy resource. It matches the pattern `projects/{project}/locations/{location}/clientTlsPolicies/{client_tls_policy}`
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the ClientTlsPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clientTlsPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single ClientTlsPolicy.
     * @param {string} params.name - (Required) Required. A name of the ClientTlsPolicy to delete. Must be in the format `projects/*\/locations/{location}/clientTlsPolicies/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.clientTlsPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clientTlsPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.clientTlsPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.clientTlsPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.gatewaySecurityPolicies = {};

    /**
     * Lists GatewaySecurityPolicies in a given project and location.
     * @param {integer} params.pageSize - Maximum number of GatewaySecurityPolicies to return per call.
     * @param {string} params.pageToken - The value returned by the last 'ListGatewaySecurityPoliciesResponse' Indicates that this is a continuation of a prior 'ListGatewaySecurityPolicies' call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the GatewaySecurityPolicies should be listed, specified in the format `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.gatewaySecurityPolicies.list = (params) => this._makeRequest('v1/{+parent}/gatewaySecurityPolicies', 'GET', params);

    /**
     * Gets details of a single GatewaySecurityPolicy.
     * @param {string} params.name - (Required) Required. A name of the GatewaySecurityPolicy to get. Must be in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.gatewaySecurityPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new GatewaySecurityPolicy in a given project and location.
     * @param {string} params.gatewaySecurityPolicyId - Required. Short name of the GatewaySecurityPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "gateway_security_policy1".
     * @param {string} params.parent - (Required) Required. The parent resource of the GatewaySecurityPolicy. Must be in the format `projects/{project}/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gatewaySecurityPolicies.create = (params) => this._makeRequest('v1/{+parent}/gatewaySecurityPolicies', 'POST', params);

    /**
     * Updates the parameters of a single GatewaySecurityPolicy.
     * @param {string} params.name - (Required) Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy} gateway_security_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the GatewaySecurityPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gatewaySecurityPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single GatewaySecurityPolicy.
     * @param {string} params.name - (Required) Required. A name of the GatewaySecurityPolicy to delete. Must be in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.gatewaySecurityPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.gatewaySecurityPolicies.rules = {};

    /**
     * Lists GatewaySecurityPolicyRules in a given project and location.
     * @param {integer} params.pageSize - Maximum number of GatewaySecurityPolicyRules to return per call.
     * @param {string} params.pageToken - The value returned by the last 'ListGatewaySecurityPolicyRulesResponse' Indicates that this is a continuation of a prior 'ListGatewaySecurityPolicyRules' call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project, location and GatewaySecurityPolicy from which the GatewaySecurityPolicyRules should be listed, specified in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}`.
     * @return {object} The API response object.
     */
    this.projects.locations.gatewaySecurityPolicies.rules.list = (params) => this._makeRequest('v1/{+parent}/rules', 'GET', params);

    /**
     * Gets details of a single GatewaySecurityPolicyRule.
     * @param {string} params.name - (Required) Required. The name of the GatewaySecurityPolicyRule to retrieve. Format: projects/{project}/location/{location}/gatewaySecurityPolicies/*\/rules/*
     * @return {object} The API response object.
     */
    this.projects.locations.gatewaySecurityPolicies.rules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new GatewaySecurityPolicy in a given project and location.
     * @param {string} params.gatewaySecurityPolicyRuleId - The ID to use for the rule, which will become the final component of the rule's resource name. This value should be 4-63 characters, and valid characters are /a-z-/.
     * @param {string} params.parent - (Required) Required. The parent where this rule will be created. Format : projects/{project}/location/{location}/gatewaySecurityPolicies/*
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gatewaySecurityPolicies.rules.create = (params) => this._makeRequest('v1/{+parent}/rules', 'POST', params);

    /**
     * Updates the parameters of a single GatewaySecurityPolicyRule.
     * @param {string} params.name - (Required) Required. Immutable. Name of the resource. ame is the full resource name so projects/{project}/locations/{location}/gatewaySecurityPolicies/{gateway_security_policy}/rules/{rule} rule should match the pattern: (^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the GatewaySecurityPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gatewaySecurityPolicies.rules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single GatewaySecurityPolicyRule.
     * @param {string} params.name - (Required) Required. A name of the GatewaySecurityPolicyRule to delete. Must be in the format `projects/{project}/locations/{location}/gatewaySecurityPolicies/{gatewaySecurityPolicy}/rules/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.gatewaySecurityPolicies.rules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.urlLists = {};

    /**
     * Lists UrlLists in a given project and location.
     * @param {integer} params.pageSize - Maximum number of UrlLists to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListUrlListsResponse` Indicates that this is a continuation of a prior `ListUrlLists` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the UrlLists should be listed, specified in the format `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.urlLists.list = (params) => this._makeRequest('v1/{+parent}/urlLists', 'GET', params);

    /**
     * Gets details of a single UrlList.
     * @param {string} params.name - (Required) Required. A name of the UrlList to get. Must be in the format `projects/*\/locations/{location}/urlLists/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.urlLists.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new UrlList in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource of the UrlList. Must be in the format `projects/*\/locations/{location}`.
     * @param {string} params.urlListId - Required. Short name of the UrlList resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "url_list".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.urlLists.create = (params) => this._makeRequest('v1/{+parent}/urlLists', 'POST', params);

    /**
     * Updates the parameters of a single UrlList.
     * @param {string} params.name - (Required) Required. Name of the resource provided by the user. Name is of the form projects/{project}/locations/{location}/urlLists/{url_list} url_list should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the UrlList resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.urlLists.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single UrlList.
     * @param {string} params.name - (Required) Required. A name of the UrlList to delete. Must be in the format `projects/*\/locations/{location}/urlLists/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.urlLists.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.tlsInspectionPolicies = {};

    /**
     * Lists TlsInspectionPolicies in a given project and location.
     * @param {integer} params.pageSize - Maximum number of TlsInspectionPolicies to return per call.
     * @param {string} params.pageToken - The value returned by the last 'ListTlsInspectionPoliciesResponse' Indicates that this is a continuation of a prior 'ListTlsInspectionPolicies' call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the TlsInspectionPolicies should be listed, specified in the format `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.tlsInspectionPolicies.list = (params) => this._makeRequest('v1/{+parent}/tlsInspectionPolicies', 'GET', params);

    /**
     * Gets details of a single TlsInspectionPolicy.
     * @param {string} params.name - (Required) Required. A name of the TlsInspectionPolicy to get. Must be in the format `projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy}`.
     * @return {object} The API response object.
     */
    this.projects.locations.tlsInspectionPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new TlsInspectionPolicy in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent resource of the TlsInspectionPolicy. Must be in the format `projects/{project}/locations/{location}`.
     * @param {string} params.tlsInspectionPolicyId - Required. Short name of the TlsInspectionPolicy resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "tls_inspection_policy1".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tlsInspectionPolicies.create = (params) => this._makeRequest('v1/{+parent}/tlsInspectionPolicies', 'POST', params);

    /**
     * Updates the parameters of a single TlsInspectionPolicy.
     * @param {string} params.name - (Required) Required. Name of the resource. Name is of the form projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy} tls_inspection_policy should match the pattern:(^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the TlsInspectionPolicy resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.tlsInspectionPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single TlsInspectionPolicy.
     * @param {boolean} params.force - If set to true, any rules for this TlsInspectionPolicy will also be deleted. (Otherwise, the request will only work if the TlsInspectionPolicy has no rules.)
     * @param {string} params.name - (Required) Required. A name of the TlsInspectionPolicy to delete. Must be in the format `projects/{project}/locations/{location}/tlsInspectionPolicies/{tls_inspection_policy}`.
     * @return {object} The API response object.
     */
    this.projects.locations.tlsInspectionPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.authzPolicies = {};

    /**
     * Lists AuthzPolicies in a given project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. The server might return fewer items than requested. If unspecified, the server picks an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results that the server returns.
     * @param {string} params.parent - (Required) Required. The project and location from which the `AuthzPolicy` resources are listed, specified in the following format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.authzPolicies.list = (params) => this._makeRequest('v1/{+parent}/authzPolicies', 'GET', params);

    /**
     * Gets details of a single AuthzPolicy.
     * @param {string} params.name - (Required) Required. A name of the `AuthzPolicy` resource to get. Must be in the format `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`.
     * @return {object} The API response object.
     */
    this.projects.locations.authzPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new AuthzPolicy in a given project and location.
     * @param {string} params.authzPolicyId - Required. User-provided ID of the `AuthzPolicy` resource to be created.
     * @param {string} params.parent - (Required) Required. The parent resource of the `AuthzPolicy` resource. Must be in the format `projects/{project}/locations/{location}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authzPolicies.create = (params) => this._makeRequest('v1/{+parent}/authzPolicies', 'POST', params);

    /**
     * Updates the parameters of a single AuthzPolicy.
     * @param {string} params.name - (Required) Required. Identifier. Name of the `AuthzPolicy` resource in the following format: `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Used to specify the fields to be overwritten in the `AuthzPolicy` resource by the update. The fields specified in the `update_mask` are relative to the resource, not the full request. A field is overwritten if it is in the mask. If the user does not specify a mask, then all fields are overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authzPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single AuthzPolicy.
     * @param {string} params.name - (Required) Required. The name of the `AuthzPolicy` resource to delete. Must be in the format `projects/{project}/locations/{location}/authzPolicies/{authz_policy}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server can ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, ignores the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.authzPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authzPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.authzPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.authzPolicies.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

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
    this.organizations.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.organizations.locations.addressGroups = {};

    /**
     * Lists address groups in a given project and location.
     * @param {integer} params.pageSize - Maximum number of AddressGroups to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListAddressGroupsResponse` Indicates that this is a continuation of a prior `ListAddressGroups` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project and location from which the AddressGroups should be listed, specified in the format `projects/*\/locations/{location}`.
     * @param {boolean} params.returnPartialSuccess - Optional. If true, allow partial responses for multi-regional Aggregated List requests.
     * @return {object} The API response object.
     */
    this.organizations.locations.addressGroups.list = (params) => this._makeRequest('v1/{+parent}/addressGroups', 'GET', params);

    /**
     * Gets details of a single address group.
     * @param {string} params.name - (Required) Required. A name of the AddressGroup to get. Must be in the format `projects/*\/locations/{location}/addressGroups/*`.
     * @return {object} The API response object.
     */
    this.organizations.locations.addressGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new address group in a given project and location.
     * @param {string} params.addressGroupId - Required. Short name of the AddressGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "authz_policy".
     * @param {string} params.parent - (Required) Required. The parent resource of the AddressGroup. Must be in the format `projects/*\/locations/{location}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.addressGroups.create = (params) => this._makeRequest('v1/{+parent}/addressGroups', 'POST', params);

    /**
     * Updates parameters of an address group.
     * @param {string} params.name - (Required) Required. Name of the AddressGroup resource. It matches pattern `projects/*\/locations/{location}/addressGroups/`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the AddressGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.addressGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Adds items to an address group.
     * @param {string} params.addressGroup - (Required) Required. A name of the AddressGroup to add items to. Must be in the format `projects|organization/*\/locations/{location}/addressGroups/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.addressGroups.addItems = (params) => this._makeRequest('v1/{+addressGroup}:addItems', 'POST', params);

    /**
     * Removes items from an address group.
     * @param {string} params.addressGroup - (Required) Required. A name of the AddressGroup to remove items from. Must be in the format `projects|organization/*\/locations/{location}/addressGroups/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.addressGroups.removeItems = (params) => this._makeRequest('v1/{+addressGroup}:removeItems', 'POST', params);

    /**
     * Clones items from one address group to another.
     * @param {string} params.addressGroup - (Required) Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/*\/locations/{location}/addressGroups/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.addressGroups.cloneItems = (params) => this._makeRequest('v1/{+addressGroup}:cloneItems', 'POST', params);

    /**
     * Deletes an address group.
     * @param {string} params.name - (Required) Required. A name of the AddressGroup to delete. Must be in the format `projects/*\/locations/{location}/addressGroups/*`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.organizations.locations.addressGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists references of an address group.
     * @param {string} params.addressGroup - (Required) Required. A name of the AddressGroup to clone items to. Must be in the format `projects|organization/*\/locations/{location}/addressGroups/*`.
     * @param {integer} params.pageSize - The maximum number of references to return. If unspecified, server will pick an appropriate default. Server may return fewer items than requested. A caller should only rely on response's next_page_token to determine if there are more AddressGroupUsers left to be queried.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @return {object} The API response object.
     */
    this.organizations.locations.addressGroups.listReferences = (params) => this._makeRequest('v1/{+addressGroup}:listReferences', 'GET', params);

    this.organizations.locations.firewallEndpoints = {};

    /**
     * Lists FirewallEndpoints in a given project and location.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListEndpointsRequest
     * @return {object} The API response object.
     */
    this.organizations.locations.firewallEndpoints.list = (params) => this._makeRequest('v1/{+parent}/firewallEndpoints', 'GET', params);

    /**
     * Gets details of a single Endpoint.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @return {object} The API response object.
     */
    this.organizations.locations.firewallEndpoints.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new FirewallEndpoint in a given project and location.
     * @param {string} params.firewallEndpointId - Required. Id of the requesting object. If auto-generating Id server-side, remove this field and firewall_endpoint_id from the method_signature of Create RPC.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.firewallEndpoints.create = (params) => this._makeRequest('v1/{+parent}/firewallEndpoints', 'POST', params);

    /**
     * Deletes a single Endpoint.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.organizations.locations.firewallEndpoints.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Update a single Endpoint.
     * @param {string} params.name - (Required) Immutable. Identifier. name of resource
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Endpoint resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.firewallEndpoints.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.organizations.locations.securityProfileGroups = {};

    /**
     * Lists SecurityProfileGroups in a given organization and location.
     * @param {integer} params.pageSize - Maximum number of SecurityProfileGroups to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListSecurityProfileGroupsResponse` Indicates that this is a continuation of a prior `ListSecurityProfileGroups` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project or organization and location from which the SecurityProfileGroups should be listed, specified in the format `projects|organizations/*\/locations/{location}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.securityProfileGroups.list = (params) => this._makeRequest('v1/{+parent}/securityProfileGroups', 'GET', params);

    /**
     * Gets details of a single SecurityProfileGroup.
     * @param {string} params.name - (Required) Required. A name of the SecurityProfileGroup to get. Must be in the format `projects|organizations/*\/locations/{location}/securityProfileGroups/{security_profile_group}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.securityProfileGroups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new SecurityProfileGroup in a given organization and location.
     * @param {string} params.parent - (Required) Required. The parent resource of the SecurityProfileGroup. Must be in the format `projects|organizations/*\/locations/{location}`.
     * @param {string} params.securityProfileGroupId - Required. Short name of the SecurityProfileGroup resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "security_profile_group1".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.securityProfileGroups.create = (params) => this._makeRequest('v1/{+parent}/securityProfileGroups', 'POST', params);

    /**
     * Updates the parameters of a single SecurityProfileGroup.
     * @param {string} params.name - (Required) Immutable. Identifier. Name of the SecurityProfileGroup resource. It matches pattern `projects|organizations/*\/locations/{location}/securityProfileGroups/{security_profile_group}`.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the SecurityProfileGroup resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.securityProfileGroups.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single SecurityProfileGroup.
     * @param {string} params.etag - Optional. If client provided etag is out of date, delete will return FAILED_PRECONDITION error.
     * @param {string} params.name - (Required) Required. A name of the SecurityProfileGroup to delete. Must be in the format `projects|organizations/*\/locations/{location}/securityProfileGroups/{security_profile_group}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.securityProfileGroups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.organizations.locations.securityProfiles = {};

    /**
     * Lists SecurityProfiles in a given organization and location.
     * @param {integer} params.pageSize - Maximum number of SecurityProfiles to return per call.
     * @param {string} params.pageToken - The value returned by the last `ListSecurityProfilesResponse` Indicates that this is a continuation of a prior `ListSecurityProfiles` call, and that the system should return the next page of data.
     * @param {string} params.parent - (Required) Required. The project or organization and location from which the SecurityProfiles should be listed, specified in the format `projects|organizations/*\/locations/{location}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.securityProfiles.list = (params) => this._makeRequest('v1/{+parent}/securityProfiles', 'GET', params);

    /**
     * Gets details of a single SecurityProfile.
     * @param {string} params.name - (Required) Required. A name of the SecurityProfile to get. Must be in the format `projects|organizations/*\/locations/{location}/securityProfiles/{security_profile_id}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.securityProfiles.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new SecurityProfile in a given organization and location.
     * @param {string} params.parent - (Required) Required. The parent resource of the SecurityProfile. Must be in the format `projects|organizations/*\/locations/{location}`.
     * @param {string} params.securityProfileId - Required. Short name of the SecurityProfile resource to be created. This value should be 1-63 characters long, containing only letters, numbers, hyphens, and underscores, and should not start with a number. E.g. "security_profile1".
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.securityProfiles.create = (params) => this._makeRequest('v1/{+parent}/securityProfiles', 'POST', params);

    /**
     * Updates the parameters of a single SecurityProfile.
     * @param {string} params.name - (Required) Immutable. Identifier. Name of the SecurityProfile resource. It matches pattern `projects|organizations/*\/locations/{location}/securityProfiles/{security_profile}`.
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the SecurityProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.organizations.locations.securityProfiles.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single SecurityProfile.
     * @param {string} params.etag - Optional. If client provided etag is out of date, delete will return FAILED_PRECONDITION error.
     * @param {string} params.name - (Required) Required. A name of the SecurityProfile to delete. Must be in the format `projects|organizations/*\/locations/{location}/securityProfiles/{security_profile_id}`.
     * @return {object} The API response object.
     */
    this.organizations.locations.securityProfiles.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
