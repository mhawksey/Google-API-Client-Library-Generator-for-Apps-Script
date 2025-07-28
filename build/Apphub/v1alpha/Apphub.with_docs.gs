
/**
 * Google Apps Script client library for the App Hub API
 * Documentation URL: https://cloud.google.com/app-hub/docs/
 * @class
 */
class Apphub {
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
    this._rootUrl = 'https://apphub.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists a service project attachment for a given service project. You can call this API from any project to find if it is attached to a host project.
     * @param {string} params.name - (Required) Required. Service project ID and location to lookup service project attachment for. Only global location is supported. Expected format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.lookupServiceProjectAttachment = (params) => this._makeRequest('v1alpha/{+name}:lookupServiceProjectAttachment', 'GET', params);

    /**
     * Detaches a service project from a host project. You can call this API from any service project without needing access to the host project that it is attached to.
     * @param {string} params.name - (Required) Required. Service project id and location to detach from a host project. Only global location is supported. Expected format: `projects/{project}/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.detachServiceProjectAttachment = (params) => this._makeRequest('v1alpha/{+name}:detachServiceProjectAttachment', 'POST', params);

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

    this.projects.locations.serviceProjectAttachments = {};

    /**
     * Lists service projects attached to the host project.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Host project ID and location to list service project attachments. Only global location is supported. Expected format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceProjectAttachments.list = (params) => this._makeRequest('v1alpha/{+parent}/serviceProjectAttachments', 'GET', params);

    /**
     * Attaches a service project to the host project.
     * @param {string} params.parent - (Required) Required. Host project ID and location to which service project is being attached. Only global location is supported. Expected format: `projects/{project}/locations/{location}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.serviceProjectAttachmentId - Required. The service project attachment identifier must contain the project id of the service project specified in the service_project_attachment.service_project field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceProjectAttachments.create = (params) => this._makeRequest('v1alpha/{+parent}/serviceProjectAttachments', 'POST', params);

    /**
     * Gets a service project attachment.
     * @param {string} params.name - (Required) Required. Fully qualified name of the service project attachment to retrieve. Expected format: `projects/{project}/locations/{location}/serviceProjectAttachments/{serviceProjectAttachment}`.
     * @return {object} The API response object.
     */
    this.projects.locations.serviceProjectAttachments.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Deletes a service project attachment.
     * @param {string} params.name - (Required) Required. Fully qualified name of the service project attachment to delete. Expected format: `projects/{project}/locations/{location}/serviceProjectAttachments/{serviceProjectAttachment}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.serviceProjectAttachments.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.discoveredServices = {};

    /**
     * Lists Discovered Services that can be added to an Application in a host project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Project and location to list Discovered Services on. Expected format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveredServices.list = (params) => this._makeRequest('v1alpha/{+parent}/discoveredServices', 'GET', params);

    /**
     * Gets a Discovered Service in a host project and location.
     * @param {string} params.name - (Required) Required. Fully qualified name of the Discovered Service to fetch. Expected format: `projects/{project}/locations/{location}/discoveredServices/{discoveredService}`.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveredServices.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists a Discovered Service in a host project and location, with a given resource URI.
     * @param {string} params.parent - (Required) Required. Host project ID and location to lookup Discovered Service in. Expected format: `projects/{project}/locations/{location}`.
     * @param {string} params.uri - Required. Resource URI to find DiscoveredService for. Accepts both project number and project ID and does translation when needed.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveredServices.lookup = (params) => this._makeRequest('v1alpha/{+parent}/discoveredServices:lookup', 'GET', params);

    /**
     * Finds unregistered services in a host project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Project and location to find unregistered Discovered Services on. Expected format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveredServices.findUnregistered = (params) => this._makeRequest('v1alpha/{+parent}/discoveredServices:findUnregistered', 'GET', params);

    this.projects.locations.discoveredWorkloads = {};

    /**
     * Lists Discovered Workloads that can be added to an Application in a host project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Project and location to list Discovered Workloads on. Expected format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveredWorkloads.list = (params) => this._makeRequest('v1alpha/{+parent}/discoveredWorkloads', 'GET', params);

    /**
     * Gets a Discovered Workload in a host project and location.
     * @param {string} params.name - (Required) Required. Fully qualified name of the Discovered Workload to fetch. Expected format: `projects/{project}/locations/{location}/discoveredWorkloads/{discoveredWorkload}`.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveredWorkloads.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Lists a Discovered Workload in a host project and location, with a given resource URI.
     * @param {string} params.parent - (Required) Required. Host project ID and location to lookup Discovered Workload in. Expected format: `projects/{project}/locations/{location}`.
     * @param {string} params.uri - Required. Resource URI to find Discovered Workload for. Accepts both project number and project ID and does translation when needed.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveredWorkloads.lookup = (params) => this._makeRequest('v1alpha/{+parent}/discoveredWorkloads:lookup', 'GET', params);

    /**
     * Finds unregistered workloads in a host project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Project and location to find unregistered Discovered Workloads on. Expected format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.discoveredWorkloads.findUnregistered = (params) => this._makeRequest('v1alpha/{+parent}/discoveredWorkloads:findUnregistered', 'GET', params);

    this.projects.locations.applications = {};

    /**
     * Lists Applications in a host project and location.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Project and location to list Applications on. Expected format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.list = (params) => this._makeRequest('v1alpha/{+parent}/applications', 'GET', params);

    /**
     * Creates an Application in a host project and location.
     * @param {string} params.applicationId - Required. The Application identifier. Must contain only lowercase letters, numbers or hyphens, with the first character a letter, the last a letter or a number, and a 63 character maximum.
     * @param {string} params.parent - (Required) Required. Project and location to create Application in. Expected format: `projects/{project}/locations/{location}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.create = (params) => this._makeRequest('v1alpha/{+parent}/applications', 'POST', params);

    /**
     * Gets an Application in a host project and location.
     * @param {string} params.name - (Required) Required. Fully qualified name of the Application to fetch. Expected format: `projects/{project}/locations/{location}/applications/{application}`.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates an Application in a host project and location.
     * @param {string} params.name - (Required) Identifier. The resource name of an Application. Format: `"projects/{host-project-id}/locations/{location}/applications/{application-id}"`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Application resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. The API changes the values of the fields as specified in the update_mask. The API ignores the values of all fields not covered by the update_mask. You can also unset a field by not specifying it in the updated message, but adding the field to the mask. This clears whatever value the field previously had.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes an Application in a host project and location.
     * @param {string} params.name - (Required) Required. Fully qualified name of the Application to delete. Expected format: `projects/{project}/locations/{location}/applications/{application}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.applications.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

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

    this.projects.locations.applications.services = {};

    /**
     * Lists Services in an Application.
     * @param {string} params.filter - Optional. Filtering results
     * @param {string} params.orderBy - Optional. Hint for how to order the results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Fully qualified name of the parent Application to list Services for. Expected format: `projects/{project}/locations/{location}/applications/{application}`.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.services.list = (params) => this._makeRequest('v1alpha/{+parent}/services', 'GET', params);

    /**
     * Creates a Service in an Application.
     * @param {string} params.parent - (Required) Required. Fully qualified name of the parent Application to create the Service in. Expected format: `projects/{project}/locations/{location}/applications/{application}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.serviceId - Required. The Service identifier. Must contain only lowercase letters, numbers or hyphens, with the first character a letter, the last a letter or a number, and a 63 character maximum.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.services.create = (params) => this._makeRequest('v1alpha/{+parent}/services', 'POST', params);

    /**
     * Gets a Service in an Application.
     * @param {string} params.name - (Required) Required. Fully qualified name of the Service to fetch. Expected format: `projects/{project}/locations/{location}/applications/{application}/services/{service}`.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.services.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates a Service in an Application.
     * @param {string} params.name - (Required) Identifier. The resource name of a Service. Format: `"projects/{host-project-id}/locations/{location}/applications/{application-id}/services/{service-id}"`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Service resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. The API changes the values of the fields as specified in the update_mask. The API ignores the values of all fields not covered by the update_mask. You can also unset a field by not specifying it in the updated message, but adding the field to the mask. This clears whatever value the field previously had.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.services.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a Service from an Application.
     * @param {string} params.name - (Required) Required. Fully qualified name of the Service to delete from an Application. Expected format: `projects/{project}/locations/{location}/applications/{application}/services/{service}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.applications.services.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);

    this.projects.locations.applications.workloads = {};

    /**
     * Lists Workloads in an Application.
     * @param {string} params.filter - Optional. Filtering results.
     * @param {string} params.orderBy - Optional. Hint for how to order the results.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Fully qualified name of the parent Application to list Workloads for. Expected format: `projects/{project}/locations/{location}/applications/{application}`.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.workloads.list = (params) => this._makeRequest('v1alpha/{+parent}/workloads', 'GET', params);

    /**
     * Creates a Workload in an Application.
     * @param {string} params.parent - (Required) Required. Fully qualified name of the Application to create Workload in. Expected format: `projects/{project}/locations/{location}/applications/{application}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.workloadId - Required. The Workload identifier. Must contain only lowercase letters, numbers or hyphens, with the first character a letter, the last a letter or a number, and a 63 character maximum.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.workloads.create = (params) => this._makeRequest('v1alpha/{+parent}/workloads', 'POST', params);

    /**
     * Gets a Workload in an Application.
     * @param {string} params.name - (Required) Required. Fully qualified name of the Workload to fetch. Expected format: `projects/{project}/locations/{location}/applications/{application}/workloads/{workload}`.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.workloads.get = (params) => this._makeRequest('v1alpha/{+name}', 'GET', params);

    /**
     * Updates a Workload in an Application.
     * @param {string} params.name - (Required) Identifier. The resource name of the Workload. Format: `"projects/{host-project-id}/locations/{location}/applications/{application-id}/workloads/{workload-id}"`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Workload resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. The API changes the values of the fields as specified in the update_mask. The API ignores the values of all fields not covered by the update_mask. You can also unset a field by not specifying it in the updated message, but adding the field to the mask. This clears whatever value the field previously had.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.applications.workloads.patch = (params) => this._makeRequest('v1alpha/{+name}', 'PATCH', params);

    /**
     * Deletes a Workload from an Application.
     * @param {string} params.name - (Required) Required. Fully qualified name of the Workload to delete from an Application. Expected format: `projects/{project}/locations/{location}/applications/{application}/workloads/{workload}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.applications.workloads.delete = (params) => this._makeRequest('v1alpha/{+name}', 'DELETE', params);
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
