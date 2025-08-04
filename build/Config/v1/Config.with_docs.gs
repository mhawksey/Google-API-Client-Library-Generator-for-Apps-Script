
/**
 * Google Apps Script client library for the Infrastructure Manager API
 * Documentation URL: https://cloud.google.com/infrastructure-manager/docs
 * @class
 */
class Config {
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
    this._rootUrl = 'https://config.googleapis.com/';
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

    this.projects.locations.deployments = {};

    /**
     * Lists Deployments in a given project and location.
     * @param {string} params.filter - Lists the Deployments that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/foo/locations/us-central1/deployments/bar - Filter by labels: - Resources that have a key called 'foo' labels.foo:* - Resources that have a key called 'foo' whose value is 'bar' labels.foo = bar - Filter by state: - Deployments in CREATING state. state=CREATING
     * @param {string} params.orderBy - Field to use to sort the list.
     * @param {integer} params.pageSize - When requesting a page of resources, 'page_size' specifies number of resources to return. If unspecified, at most 500 will be returned. The maximum value is 1000.
     * @param {string} params.pageToken - Token returned by previous call to 'ListDeployments' which specifies the position in the list from where to continue listing the resources.
     * @param {string} params.parent - (Required) Required. The parent in whose context the Deployments are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}'.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.list = (params) => this._makeRequest('v1/{+parent}/deployments', 'GET', params);

    /**
     * Gets details about a Deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment. Format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a Deployment.
     * @param {string} params.deploymentId - Required. The Deployment ID.
     * @param {string} params.parent - (Required) Required. The parent in whose context the Deployment is created. The parent value is in the format: 'projects/{project_id}/locations/{location}'.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.create = (params) => this._makeRequest('v1/{+parent}/deployments', 'POST', params);

    /**
     * Updates a Deployment.
     * @param {string} params.name - (Required) Identifier. Resource name of the deployment. Format: `projects/{project}/locations/{location}/deployments/{deployment}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask used to specify the fields to be overwritten in the Deployment resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a Deployment.
     * @param {string} params.deletePolicy - Optional. Policy on how resources actuated by the deployment should be deleted. If unspecified, the default behavior is to delete the underlying resources.
     * @param {boolean} params.force - Optional. If set to true, any revisions for this deployment will also be deleted. (Otherwise, the request will only work if the deployment has no revisions.)
     * @param {string} params.name - (Required) Required. The name of the Deployment in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Exports Terraform state file from a given deployment.
     * @param {string} params.parent - (Required) Required. The parent in whose context the statefile is listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.exportState = (params) => this._makeRequest('v1/{+parent}:exportState', 'POST', params);

    /**
     * Imports Terraform state file in a given deployment. The state file does not take effect until the Deployment has been unlocked.
     * @param {string} params.parent - (Required) Required. The parent in whose context the statefile is listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.importState = (params) => this._makeRequest('v1/{+parent}:importState', 'POST', params);

    /**
     * Deletes Terraform state file in a given deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.deleteState = (params) => this._makeRequest('v1/{+name}:deleteState', 'POST', params);

    /**
     * Locks a deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.lock = (params) => this._makeRequest('v1/{+name}:lock', 'POST', params);

    /**
     * Unlocks a locked deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.unlock = (params) => this._makeRequest('v1/{+name}:unlock', 'POST', params);

    /**
     * Exports the lock info on a locked deployment.
     * @param {string} params.name - (Required) Required. The name of the deployment in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.exportLock = (params) => this._makeRequest('v1/{+name}:exportLock', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.deployments.revisions = {};

    /**
     * Lists Revisions of a deployment.
     * @param {string} params.filter - Lists the Revisions that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/foo/locations/us-central1/deployments/dep/revisions/bar - Filter by labels: - Resources that have a key called 'foo' labels.foo:* - Resources that have a key called 'foo' whose value is 'bar' labels.foo = bar - Filter by state: - Revisions in CREATING state. state=CREATING
     * @param {string} params.orderBy - Field to use to sort the list.
     * @param {integer} params.pageSize - When requesting a page of resources, `page_size` specifies number of resources to return. If unspecified, at most 500 will be returned. The maximum value is 1000.
     * @param {string} params.pageToken - Token returned by previous call to 'ListRevisions' which specifies the position in the list from where to continue listing the resources.
     * @param {string} params.parent - (Required) Required. The parent in whose context the Revisions are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}'.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.revisions.list = (params) => this._makeRequest('v1/{+parent}/revisions', 'GET', params);

    /**
     * Gets details about a Revision.
     * @param {string} params.name - (Required) Required. The name of the Revision in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}/revisions/{revision}'.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.revisions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Exports Terraform state file from a given revision.
     * @param {string} params.parent - (Required) Required. The parent in whose context the statefile is listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}/revisions/{revision}'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.revisions.exportState = (params) => this._makeRequest('v1/{+parent}:exportState', 'POST', params);

    this.projects.locations.deployments.revisions.resources = {};

    /**
     * Gets details about a Resource deployed by Infra Manager.
     * @param {string} params.name - (Required) Required. The name of the Resource in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}/revisions/{revision}/resource/{resource}'.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.revisions.resources.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists Resources in a given revision.
     * @param {string} params.filter - Lists the Resources that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/foo/locations/us-central1/deployments/dep/revisions/bar/resources/baz
     * @param {string} params.orderBy - Field to use to sort the list.
     * @param {integer} params.pageSize - When requesting a page of resources, 'page_size' specifies number of resources to return. If unspecified, at most 500 will be returned. The maximum value is 1000.
     * @param {string} params.pageToken - Token returned by previous call to 'ListResources' which specifies the position in the list from where to continue listing the resources.
     * @param {string} params.parent - (Required) Required. The parent in whose context the Resources are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/deployments/{deployment}/revisions/{revision}'.
     * @return {object} The API response object.
     */
    this.projects.locations.deployments.revisions.resources.list = (params) => this._makeRequest('v1/{+parent}/resources', 'GET', params);

    this.projects.locations.previews = {};

    /**
     * Creates a Preview.
     * @param {string} params.parent - (Required) Required. The parent in whose context the Preview is created. The parent value is in the format: 'projects/{project_id}/locations/{location}'.
     * @param {string} params.previewId - Optional. The preview ID.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.previews.create = (params) => this._makeRequest('v1/{+parent}/previews', 'POST', params);

    /**
     * Gets details about a Preview.
     * @param {string} params.name - (Required) Required. The name of the preview. Format: 'projects/{project_id}/locations/{location}/previews/{preview}'.
     * @return {object} The API response object.
     */
    this.projects.locations.previews.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists Previews in a given project and location.
     * @param {string} params.filter - Optional. Lists the Deployments that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/foo/locations/us-central1/deployments/bar - Filter by labels: - Resources that have a key called 'foo' labels.foo:* - Resources that have a key called 'foo' whose value is 'bar' labels.foo = bar - Filter by state: - Deployments in CREATING state. state=CREATING
     * @param {string} params.orderBy - Optional. Field to use to sort the list.
     * @param {integer} params.pageSize - Optional. When requesting a page of resources, 'page_size' specifies number of resources to return. If unspecified, at most 500 will be returned. The maximum value is 1000.
     * @param {string} params.pageToken - Optional. Token returned by previous call to 'ListDeployments' which specifies the position in the list from where to continue listing the resources.
     * @param {string} params.parent - (Required) Required. The parent in whose context the Previews are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}'.
     * @return {object} The API response object.
     */
    this.projects.locations.previews.list = (params) => this._makeRequest('v1/{+parent}/previews', 'GET', params);

    /**
     * Deletes a Preview.
     * @param {string} params.name - (Required) Required. The name of the Preview in the format: 'projects/{project_id}/locations/{location}/previews/{preview}'.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.previews.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Export Preview results.
     * @param {string} params.parent - (Required) Required. The preview whose results should be exported. The preview value is in the format: 'projects/{project_id}/locations/{location}/previews/{preview}'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.previews.export = (params) => this._makeRequest('v1/{+parent}:export', 'POST', params);

    this.projects.locations.previews.resourceChanges = {};

    /**
     * Lists ResourceChanges for a given preview.
     * @param {string} params.filter - Optional. Lists the resource changes that match the filter expression. A filter expression filters the resource changes listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/foo/locations/us-central1/previews/dep/resourceChanges/baz
     * @param {string} params.orderBy - Optional. Field to use to sort the list.
     * @param {integer} params.pageSize - Optional. When requesting a page of resource changes, 'page_size' specifies number of resource changes to return. If unspecified, at most 500 will be returned. The maximum value is 1000.
     * @param {string} params.pageToken - Optional. Token returned by previous call to 'ListResourceChanges' which specifies the position in the list from where to continue listing the resource changes.
     * @param {string} params.parent - (Required) Required. The parent in whose context the ResourceChanges are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/previews/{preview}'.
     * @return {object} The API response object.
     */
    this.projects.locations.previews.resourceChanges.list = (params) => this._makeRequest('v1/{+parent}/resourceChanges', 'GET', params);

    /**
     * Get a ResourceChange for a given preview.
     * @param {string} params.name - (Required) Required. The name of the resource change to retrieve. Format: 'projects/{project_id}/locations/{location}/previews/{preview}/resourceChanges/{resource_change}'.
     * @return {object} The API response object.
     */
    this.projects.locations.previews.resourceChanges.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.previews.resourceDrifts = {};

    /**
     * List ResourceDrifts for a given preview.
     * @param {string} params.filter - Optional. Lists the resource drifts that match the filter expression. A filter expression filters the resource drifts listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case. Examples: - Filter by name: name = "projects/foo/locations/us-central1/previews/dep/resourceDrifts/baz
     * @param {string} params.orderBy - Optional. Field to use to sort the list.
     * @param {integer} params.pageSize - Optional. When requesting a page of resource drifts, 'page_size' specifies number of resource drifts to return. If unspecified, at most 500 will be returned. The maximum value is 1000.
     * @param {string} params.pageToken - Optional. Token returned by previous call to 'ListResourceDrifts' which specifies the position in the list from where to continue listing the resource drifts.
     * @param {string} params.parent - (Required) Required. The parent in whose context the ResourceDrifts are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}/previews/{preview}'.
     * @return {object} The API response object.
     */
    this.projects.locations.previews.resourceDrifts.list = (params) => this._makeRequest('v1/{+parent}/resourceDrifts', 'GET', params);

    /**
     * Get a ResourceDrift for a given preview.
     * @param {string} params.name - (Required) Required. The name of the resource drift to retrieve. Format: 'projects/{project_id}/locations/{location}/previews/{preview}/resourceDrifts/{resource_drift}'.
     * @return {object} The API response object.
     */
    this.projects.locations.previews.resourceDrifts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.terraformVersions = {};

    /**
     * Lists TerraformVersions in a given project and location.
     * @param {string} params.filter - Optional. Lists the TerraformVersions that match the filter expression. A filter expression filters the resources listed in the response. The expression must be of the form '{field} {operator} {value}' where operators: '<', '>', '<=', '>=', '!=', '=', ':' are supported (colon ':' represents a HAS operator which is roughly synonymous with equality). {field} can refer to a proto or JSON field, or a synthetic field. Field names can be camelCase or snake_case.
     * @param {string} params.orderBy - Optional. Field to use to sort the list.
     * @param {integer} params.pageSize - Optional. When requesting a page of terraform versions, 'page_size' specifies number of terraform versions to return. If unspecified, at most 500 will be returned. The maximum value is 1000.
     * @param {string} params.pageToken - Optional. Token returned by previous call to 'ListTerraformVersions' which specifies the position in the list from where to continue listing the terraform versions.
     * @param {string} params.parent - (Required) Required. The parent in whose context the TerraformVersions are listed. The parent value is in the format: 'projects/{project_id}/locations/{location}'.
     * @return {object} The API response object.
     */
    this.projects.locations.terraformVersions.list = (params) => this._makeRequest('v1/{+parent}/terraformVersions', 'GET', params);

    /**
     * Gets details about a TerraformVersion.
     * @param {string} params.name - (Required) Required. The name of the TerraformVersion. Format: 'projects/{project_id}/locations/{location}/terraformVersions/{terraform_version}'
     * @return {object} The API response object.
     */
    this.projects.locations.terraformVersions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
