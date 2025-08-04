# Secure Source Manager API - Apps Script Client Library

Auto-generated client library for using the **Secure Source Manager API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 04 Aug 2025 20:45:42 GMT
- **Last Modified:** Mon, 04 Aug 2025 20:45:42 GMT
- **Created:** Mon, 04 Aug 2025 20:45:42 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.instances`

#### `projects.locations.instances.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.instances.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.list()`

Lists Instances in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListInstancesRequest. |
| `params.pageSize` | `integer` | No | Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Filter for filtering results. |
| `params.orderBy` | `string` | No | Hint for how to order the results. |

#### `projects.locations.instances.get()`

Gets details of a single instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |

#### `projects.locations.instances.create()`

Creates a new instance in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.instanceId` | `string` | No | Required. ID of the instance to be created. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.instances.delete()`

Deletes a single instance.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |

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

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.repositories`

#### `projects.locations.repositories.list()`

Lists Repositories in a given project and location. The instance field is required in the query parameter for requests using the securesourcemanager.googleapis.com endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListRepositoriesRequest. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filter results. |
| `params.instance` | `string` | No | Optional. The name of the instance in which the repository is hosted, formatted as `projects/{project_number}/locations/{location_id}/instances/{instance_id}`. When listing repositories via securesourcemanager.googleapis.com, this field is required. When listing repositories via *.sourcemanager.dev, this field is ignored. |

#### `projects.locations.repositories.get()`

Gets metadata of a repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the repository to retrieve. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`. |

#### `projects.locations.repositories.create()`

Creates a new repository in a given project and location. The Repository.Instance field is required in the request body for requests using the securesourcemanager.googleapis.com endpoint.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The project in which to create the repository. Values are of the form `projects/{project_number}/locations/{location_id}` |
| `params.repositoryId` | `string` | No | Required. The ID to use for the repository, which will become the final component of the repository's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.patch()`

Updates the metadata of a repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. A unique identifier for a repository. The name should be of the format: `projects/{project}/locations/{location_id}/repositories/{repository_id}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the repository resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.validateOnly` | `boolean` | No | Optional. False by default. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.delete()`

Deletes a Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the repository to delete. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the repository is not found, the request will succeed but no action will be taken on the server. |

#### `projects.locations.repositories.getIamPolicy()`

Get IAM policy for a repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.repositories.setIamPolicy()`

Set IAM policy on a repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.testIamPermissions()`

Test IAM permissions on a repository. IAM permission checks are not required on this method.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.fetchTree()`

Fetches a tree from a repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.repository` | `string` | Yes | Required. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`. Specifies the repository to fetch the tree from. |
| `params.ref` | `string` | No | Optional. `ref` can be a SHA-1 hash, a branch name, or a tag. Specifies which tree to fetch. If not specified, the default branch will be used. |
| `params.recursive` | `boolean` | No | Optional. If true, include all subfolders and their files in the response. If false, only the immediate children are returned. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, at most 10,000 items will be returned. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

#### `projects.locations.repositories.fetchBlob()`

Fetches a blob from a repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.repository` | `string` | Yes | Required. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}`. Specifies the repository containing the blob. |
| `params.sha` | `string` | No | Required. The SHA-1 hash of the blob to retrieve. |

### `projects.locations.repositories.hooks`

#### `projects.locations.repositories.hooks.list()`

Lists hooks in a given repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListHooksRequest. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

#### `projects.locations.repositories.hooks.get()`

Gets metadata of a hook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the hook to retrieve. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/hooks/{hook_id}`. |

#### `projects.locations.repositories.hooks.create()`

Creates a new hook in a given repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to create the hook. Values are of the form `projects/{project_number}/locations/{location_id}/repositories/{repository_id}` |
| `params.hookId` | `string` | No | Required. The ID to use for the hook, which will become the final component of the hook's resource name. This value restricts to lower-case letters, numbers, and hyphen, with the first character a letter, the last a letter or a number, and a 63 character maximum. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.hooks.patch()`

Updates the metadata of a hook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. A unique identifier for a Hook. The name should be of the format: `projects/{project}/locations/{location_id}/repositories/{repository_id}/hooks/{hook_id}` |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the hook resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The special value "*" means full replacement. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.hooks.delete()`

Deletes a Hook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the hook to delete. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/hooks/{hook_id}`. |

### `projects.locations.repositories.branchRules`

#### `projects.locations.repositories.branchRules.create()`

CreateBranchRule creates a branch rule in a given repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.branchRuleId` | `string` | No |  |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.branchRules.list()`

ListBranchRules lists branch rules in a given repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes |  |
| `params.pageSize` | `integer` | No |  |
| `params.pageToken` | `string` | No |  |

#### `projects.locations.repositories.branchRules.get()`

GetBranchRule gets a branch rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the repository to retrieve. The format is `projects/{project}/locations/{location}/repositories/{repository}/branchRules/{branch_rule}`. |

#### `projects.locations.repositories.branchRules.patch()`

UpdateBranchRule updates a branch rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Optional. A unique identifier for a BranchRule. The name should be of the format: `projects/{project}/locations/{location}/repositories/{repository}/branchRules/{branch_rule}` |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request and preview the review, but do not actually post it. (https://google.aip.dev/163, for declarative friendly) |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the branchRule resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The special value "*" means full replacement. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.branchRules.delete()`

DeleteBranchRule deletes a branch rule.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes |  |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the branch rule is not found, the request will succeed but no action will be taken on the server. |

### `projects.locations.repositories.pullRequests`

#### `projects.locations.repositories.pullRequests.create()`

Creates a pull request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository that the pull request is created from. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.pullRequests.get()`

Gets a pull request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the pull request to retrieve. The format is `projects/{project}/locations/{location}/repositories/{repository}/pullRequests/{pull_request}`. |

#### `projects.locations.repositories.pullRequests.list()`

Lists pull requests in a repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to list pull requests. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

#### `projects.locations.repositories.pullRequests.patch()`

Updates a pull request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. A unique identifier for a PullRequest. The number appended at the end is generated by the server. Format: `projects/{project}/locations/{location}/repositories/{repository}/pullRequests/{pull_request_id}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the pull request resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The special value "*" means full replacement. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.pullRequests.merge()`

Merges a pull request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The pull request to merge. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.pullRequests.open()`

Opens a pull request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The pull request to open. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.pullRequests.close()`

Closes a pull request without merging.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The pull request to close. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.pullRequests.listFileDiffs()`

Lists a pull request's file diffs.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The pull request to list file diffs for. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

### `projects.locations.repositories.pullRequests.pullRequestComments`

#### `projects.locations.repositories.pullRequests.pullRequestComments.get()`

Gets a pull request comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the pull request comment to retrieve. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}/pullRequestComments/{comment_id}`. |

#### `projects.locations.repositories.pullRequests.pullRequestComments.list()`

Lists pull request comments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The pull request in which to list pull request comments. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. If unspecified, at most 100 pull request comments will be returned. The maximum value is 100; values above 100 will be coerced to 100. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

#### `projects.locations.repositories.pullRequests.pullRequestComments.create()`

Creates a pull request comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The pull request in which to create the pull request comment. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.pullRequests.pullRequestComments.patch()`

Updates a pull request comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Unique identifier for the pull request comment. The comment id is generated by the server. Format: `projects/{project}/locations/{location}/repositories/{repository}/pullRequests/{pull_request}/pullRequestComments/{comment_id}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the pull request comment resource by the update. Updatable fields are `body`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.pullRequests.pullRequestComments.delete()`

Deletes a pull request comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the pull request comment to delete. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}/pullRequestComments/{comment_id}`. |

#### `projects.locations.repositories.pullRequests.pullRequestComments.batchCreate()`

Batch creates pull request comments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The pull request in which to create the pull request comments. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.pullRequests.pullRequestComments.resolve()`

Resolves pull request comments.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The pull request in which to resolve the pull request comments. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.pullRequests.pullRequestComments.unresolve()`

Unresolves pull request comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The pull request in which to resolve the pull request comments. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/pullRequests/{pull_request_id}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.repositories.issues`

#### `projects.locations.repositories.issues.create()`

Creates an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to create the issue. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.issues.get()`

Gets an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the issue to retrieve. The format is `projects/{project}/locations/{location}/repositories/{repository}/issues/{issue_id}`. |

#### `projects.locations.repositories.issues.list()`

Lists issues in a repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to list issues. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Used to filter the resulting issues list. |

#### `projects.locations.repositories.issues.patch()`

Updates a issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Unique identifier for an issue. The issue id is generated by the server. Format: `projects/{project}/locations/{location}/repositories/{repository}/issues/{issue_id}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the issue resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The special value "*" means full replacement. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.issues.delete()`

Deletes an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the issue to delete. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/issues/{issue_id}`. |
| `params.etag` | `string` | No | Optional. The current etag of the issue. If the etag is provided and does not match the current etag of the issue, deletion will be blocked and an ABORTED error will be returned. |

#### `projects.locations.repositories.issues.open()`

Opens an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the issue to open. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/issues/{issue_id}`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.issues.close()`

Closes an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the issue to close. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/issues/{issue_id}`. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.repositories.issues.issueComments`

#### `projects.locations.repositories.issues.issueComments.create()`

Creates an issue comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The issue in which to create the issue comment. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/issues/{issue_id}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.issues.issueComments.get()`

Gets an issue comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the issue comment to retrieve. The format is `projects/{project}/locations/{location}/repositories/{repository}/issues/{issue_id}/issueComments/{comment_id}`. |

#### `projects.locations.repositories.issues.issueComments.list()`

Lists comments in an issue.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The issue in which to list the comments. Format: `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/issues/{issue_id}` |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

#### `projects.locations.repositories.issues.issueComments.patch()`

Updates an issue comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. Unique identifier for an issue comment. The comment id is generated by the server. Format: `projects/{project}/locations/{location}/repositories/{repository}/issues/{issue}/issueComments/{comment_id}` |
| `params.updateMask` | `string` | No | Optional. Field mask is used to specify the fields to be overwritten in the issue comment resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. The special value "*" means full replacement. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.issues.issueComments.delete()`

Deletes an issue comment.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the issue comment to delete. The format is `projects/{project_number}/locations/{location_id}/repositories/{repository_id}/issues/{issue_id}/issueComments/{comment_id}`. |