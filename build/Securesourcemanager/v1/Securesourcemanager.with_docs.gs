
/**
 * Google Apps Script client library for the Secure Source Manager API
 * Documentation URL: https://cloud.google.com/secure-source-manager
 * @class
 */
class Securesourcemanager {
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
    this._rootUrl = 'https://securesourcemanager.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
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

    this.projects.locations.instances = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Lists Instances in a given project and location.
     * @param {string} params.filter - Filter for filtering results.
     * @param {string} params.orderBy - Hint for how to order the results.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListInstancesRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.list = (params) => this._makeRequest('v1/{+parent}/instances', 'GET', params);

    /**
     * Gets details of a single instance.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new instance in a given project and location.
     * @param {string} params.instanceId - Required. ID of the instance to be created.
     * @param {string} params.parent - (Required) Required. Value for parent.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.create = (params) => this._makeRequest('v1/{+parent}/instances', 'POST', params);

    /**
     * Deletes a single instance.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.instances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

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

    this.projects.locations.repositories = {};

    /**
     * Lists Repositories in a given project and location. The instance field is required in the query parameter for requests using the securesourcemanager.googleapis.com endpoint.
     * @param {string} params.filter - Optional. Filter results.
     * @param {string} params.instance - Optional. The name of the instance in which the repository is hosted, formatted as `projects/{project_number}/locations/{location_id}/instances/{instance_id}`. When listing repositories via securesourcemanager.googleapis.com, this field is required. When listing repositories via *.sourcemanager.dev, this field is ignored.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListRepositoriesRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.list = (params) => this._makeRequest('v1/{+parent}/repositories', 'GET', params);

    /**
     * Gets metadata of a repository.
     * @param {string} params.name - (Required) Required. Name of the repository to retrieve. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new repository in a given project and location. The Repository.Instance field is required in the request body for requests using the securesourcemanager.googleapis.com endpoint.
     * @param {string} params.parent - (Required) Required. The project in which to create the repository. Values are of the form `projects/{project_number}/locations/{location_id}`
     * @param {string} params.repositoryId - Required. The ID to use for the repository, which will become the final component of the repository's resource name. This value should be 4-63 characters, and valid characters are /a-z-/.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.create = (params) => this._makeRequest('v1/{+parent}/repositories', 'POST', params);

    /**
     * Updates the metadata of a repository.
     * @param {string} params.name - (Required) Optional. A unique identifier for a repository. The name should be of the format: `projects/{project}/locations/{location_id}/repositories/{repository_id}`
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the repository resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {boolean} params.validateOnly - Optional. False by default. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a Repository.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the repository is not found, the request will succeed but no action will be taken on the server.
     * @param {string} params.name - (Required) Required. Name of the repository to delete. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Get IAM policy for a repository.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Set IAM policy on a repository.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Test IAM permissions on a repository. IAM permission checks are not required on this method.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Fetches a tree from a repository.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, at most 10,000 items will be returned.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {boolean} params.recursive - Optional. If true, include all subfolders and their files in the response. If false, only the immediate children are returned.
     * @param {string} params.ref - Optional. `ref` can be a SHA-1 hash, a branch name, or a tag. Specifies which tree to fetch. If not specified, the default branch will be used.
     * @param {string} params.repository - (Required) Required. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`. Specifies the repository to fetch the tree from.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.fetchTree = (params) => this._makeRequest('v1/{+repository}:fetchTree', 'GET', params);

    /**
     * Fetches a blob from a repository.
     * @param {string} params.repository - (Required) Required. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`. Specifies the repository containing the blob.
     * @param {string} params.sha - Required. The SHA-1 hash of the blob to retrieve.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.fetchBlob = (params) => this._makeRequest('v1/{+repository}:fetchBlob', 'GET', params);

    this.projects.locations.repositories.hooks = {};

    /**
     * Lists hooks in a given repository.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListHooksRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.hooks.list = (params) => this._makeRequest('v1/{+parent}/hooks', 'GET', params);

    /**
     * Gets metadata of a hook.
     * @param {string} params.name - (Required) Required. Name of the hook to retrieve. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/hooks/{hook_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.hooks.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new hook in a given repository.
     * @param {string} params.hookId - Required. The ID to use for the hook, which will become the final component of the hook's resource name. This value restricts to lower-case letters, numbers, and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum.
     * @param {string} params.parent - (Required) Required. The repository in which to create the hook. Values are of the form `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.hooks.create = (params) => this._makeRequest('v1/{+parent}/hooks', 'POST', params);

    /**
     * Updates the metadata of a hook.
     * @param {string} params.name - (Required) Identifier. A unique identifier for a Hook. The name should be of the format: `projects/{project}/locations/{location_id}/repositories/{repository_id}/hooks/{hook_id}`
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the hook resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The special value "*" means full replacement.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.hooks.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a Hook.
     * @param {string} params.name - (Required) Required. Name of the hook to delete. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/hooks/{hook_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.hooks.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.repositories.branchRules = {};

    /**
     * CreateBranchRule creates a branch rule in a given repository.
     * @param {string} params.branchRuleId - 
     * @param {string} params.parent - (Required)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.branchRules.create = (params) => this._makeRequest('v1/{+parent}/branchRules', 'POST', params);

    /**
     * ListBranchRules lists branch rules in a given repository.
     * @param {integer} params.pageSize - 
     * @param {string} params.pageToken - 
     * @param {string} params.parent - (Required)
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.branchRules.list = (params) => this._makeRequest('v1/{+parent}/branchRules', 'GET', params);

    /**
     * GetBranchRule gets a branch rule.
     * @param {string} params.name - (Required) Required. Name of the repository to retrieve. The format is `projects/{project}/locations/{location}/repositories/{repository}/branchRules/{branch_rule}`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.branchRules.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * UpdateBranchRule updates a branch rule.
     * @param {string} params.name - (Required) Optional. A unique identifier for a BranchRule. The name should be of the format: `projects/{project}/locations/{location}/repositories/{repository}/branchRules/{branch_rule}`
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the branchRule resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The special value "*" means full replacement.
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not actually post it. (https://google.aip.dev/163, for declarative friendly)
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.branchRules.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * DeleteBranchRule deletes a branch rule.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the branch rule is not found, the request will succeed but no action will be taken on the server.
     * @param {string} params.name - (Required)
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.branchRules.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.repositories.pullRequests = {};

    /**
     * Creates a pull request.
     * @param {string} params.parent - (Required) Required. The repository that the pull request is created from. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.create = (params) => this._makeRequest('v1/{+parent}/pullRequests', 'POST', params);

    /**
     * Gets a pull request.
     * @param {string} params.name - (Required) Required. Name of the pull request to retrieve. The format is `projects/{project}/locations/{location}/repositories/{repository}/pullRequests/{pull_request}`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists pull requests in a repository.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The repository in which to list pull requests. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.list = (params) => this._makeRequest('v1/{+parent}/pullRequests', 'GET', params);

    /**
     * Updates a pull request.
     * @param {string} params.name - (Required) Output only. A unique identifier for a PullRequest. The number appended at the end is generated by the server. Format: `projects/{project}/locations/{location}/repositories/{repository}/pullRequests/{pull_request_id}`
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the pull request resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The special value "*" means full replacement.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Merges a pull request.
     * @param {string} params.name - (Required) Required. The pull request to merge. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.merge = (params) => this._makeRequest('v1/{+name}:merge', 'POST', params);

    /**
     * Opens a pull request.
     * @param {string} params.name - (Required) Required. The pull request to open. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.open = (params) => this._makeRequest('v1/{+name}:open', 'POST', params);

    /**
     * Closes a pull request without merging.
     * @param {string} params.name - (Required) Required. The pull request to close. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.close = (params) => this._makeRequest('v1/{+name}:close', 'POST', params);

    /**
     * Lists a pull request's file diffs.
     * @param {string} params.name - (Required) Required. The pull request to list file diffs for. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}`
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.listFileDiffs = (params) => this._makeRequest('v1/{+name}:listFileDiffs', 'GET', params);

    this.projects.locations.repositories.pullRequests.pullRequestComments = {};

    /**
     * Gets a pull request comment.
     * @param {string} params.name - (Required) Required. Name of the pull request comment to retrieve. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}/pullRequestComments/{comment_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.pullRequestComments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists pull request comments.
     * @param {integer} params.pageSize - Optional. Requested page size. If unspecified, at most 100 pull request comments will be returned. The maximum value is 100; values above 100 will be coerced to 100.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The pull request in which to list pull request comments. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.pullRequestComments.list = (params) => this._makeRequest('v1/{+parent}/pullRequestComments', 'GET', params);

    /**
     * Creates a pull request comment. This function is used to create a single PullRequestComment of type Comment, or a single PullRequestComment of type Code that's replying to another PullRequestComment of type Code. Use BatchCreatePullRequestComments to create multiple PullRequestComments for code reviews.
     * @param {string} params.parent - (Required) Required. The pull request in which to create the pull request comment. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.pullRequestComments.create = (params) => this._makeRequest('v1/{+parent}/pullRequestComments', 'POST', params);

    /**
     * Updates a pull request comment.
     * @param {string} params.name - (Required) Identifier. Unique identifier for the pull request comment. The comment id is generated by the server. Format: `projects/{project}/locations/{location}/repositories/{repository}/pullRequests/{pull_request}/pullRequestComments/{comment_id}`
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the pull request comment resource by the update. Updatable fields are `body`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.pullRequestComments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a pull request comment.
     * @param {string} params.name - (Required) Required. Name of the pull request comment to delete. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}/pullRequestComments/{comment_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.pullRequestComments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Batch creates pull request comments. This function is used to create multiple PullRequestComments for code review. There needs to be exactly one PullRequestComment of type Review, and at most 100 PullRequestComments of type Code per request. The Position of the code comments must be unique within the request.
     * @param {string} params.parent - (Required) Required. The pull request in which to create the pull request comments. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.pullRequestComments.batchCreate = (params) => this._makeRequest('v1/{+parent}/pullRequestComments:batchCreate', 'POST', params);

    /**
     * Resolves pull request comments. A list of PullRequestComment names must be provided. The PullRequestComment names must be in the same conversation thread. If auto_fill is set, all comments in the conversation thread will be resolved.
     * @param {string} params.parent - (Required) Required. The pull request in which to resolve the pull request comments. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.pullRequestComments.resolve = (params) => this._makeRequest('v1/{+parent}/pullRequestComments:resolve', 'POST', params);

    /**
     * Unresolves pull request comments. A list of PullRequestComment names must be provided. The PullRequestComment names must be in the same conversation thread. If auto_fill is set, all comments in the conversation thread will be unresolved.
     * @param {string} params.parent - (Required) Required. The pull request in which to resolve the pull request comments. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.pullRequests.pullRequestComments.unresolve = (params) => this._makeRequest('v1/{+parent}/pullRequestComments:unresolve', 'POST', params);

    this.projects.locations.repositories.issues = {};

    /**
     * Creates an issue.
     * @param {string} params.parent - (Required) Required. The repository in which to create the issue. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.issues.create = (params) => this._makeRequest('v1/{+parent}/issues', 'POST', params);

    /**
     * Gets an issue.
     * @param {string} params.name - (Required) Required. Name of the issue to retrieve. The format is `projects/{project}/locations/{location}/repositories/{repository}/issues/{issue_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.issues.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists issues in a repository.
     * @param {string} params.filter - Optional. Used to filter the resulting issues list.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The repository in which to list issues. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.issues.list = (params) => this._makeRequest('v1/{+parent}/issues', 'GET', params);

    /**
     * Updates a issue.
     * @param {string} params.name - (Required) Identifier. Unique identifier for an issue. The issue id is generated by the server. Format: `projects/{project}/locations/{location}/repositories/{repository}/issues/{issue_id}`
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the issue resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The special value "*" means full replacement.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.issues.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an issue.
     * @param {string} params.etag - Optional. The current etag of the issue. If the etag is provided and does not match the current etag of the issue, deletion will be blocked and an ABORTED error will be returned.
     * @param {string} params.name - (Required) Required. Name of the issue to delete. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/issues/{issue_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.issues.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Opens an issue.
     * @param {string} params.name - (Required) Required. Name of the issue to open. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/issues/{issue_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.issues.open = (params) => this._makeRequest('v1/{+name}:open', 'POST', params);

    /**
     * Closes an issue.
     * @param {string} params.name - (Required) Required. Name of the issue to close. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/issues/{issue_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.issues.close = (params) => this._makeRequest('v1/{+name}:close', 'POST', params);

    this.projects.locations.repositories.issues.issueComments = {};

    /**
     * Creates an issue comment.
     * @param {string} params.parent - (Required) Required. The issue in which to create the issue comment. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/issues/{issue_id}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.issues.issueComments.create = (params) => this._makeRequest('v1/{+parent}/issueComments', 'POST', params);

    /**
     * Gets an issue comment.
     * @param {string} params.name - (Required) Required. Name of the issue comment to retrieve. The format is `projects/{project}/locations/{location}/repositories/{repository}/issues/{issue_id}/issueComments/{comment_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.issues.issueComments.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists comments in an issue.
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The issue in which to list the comments. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/issues/{issue_id}`
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.issues.issueComments.list = (params) => this._makeRequest('v1/{+parent}/issueComments', 'GET', params);

    /**
     * Updates an issue comment.
     * @param {string} params.name - (Required) Identifier. Unique identifier for an issue comment. The comment id is generated by the server. Format: `projects/{project}/locations/{location}/repositories/{repository}/issues/{issue}/issueComments/{comment_id}`
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the issue comment resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The special value "*" means full replacement.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.issues.issueComments.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes an issue comment.
     * @param {string} params.name - (Required) Required. Name of the issue comment to delete. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/issues/{issue_id}/issueComments/{comment_id}`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.issues.issueComments.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
