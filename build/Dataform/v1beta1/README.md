# Dataform API - Apps Script Client Library

Auto-generated client library for using the **Dataform API (version: v1beta1)** in Google Apps Script.

## Metadata

- **Last Checked:** Mon, 28 Jul 2025 21:45:41 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:30:28 GMT
- **Created:** Sun, 20 Jul 2025 16:24:47 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.getConfig()`

Get default config for a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The config name. |

#### `projects.locations.updateConfig()`

Update default config for a given project and location. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The config name. |
| `params.updateMask` | `string` | No | Optional. Specifies the fields to be updated in the config. |
| `params.resource` | `object` | Yes | The request body. |

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

### `projects.locations.repositories`

#### `projects.locations.repositories.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.repositories.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.list()`

Lists Repositories in a given project and location. **Note:** *This method can return repositories not shown in the [Dataform UI](https://console.cloud.google.com/bigquery/dataform)*.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location in which to list repositories. Must be in the format `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of repositories to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `ListRepositories` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepositories`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. |
| `params.filter` | `string` | No | Optional. Filter for the returned list. |

#### `projects.locations.repositories.get()`

Fetches a single Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The repository's name. |

#### `projects.locations.repositories.create()`

Creates a new Repository in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location in which to create the repository. Must be in the format `projects/*/locations/*`. |
| `params.repositoryId` | `string` | No | Required. The ID to use for the repository, which will become the final component of the repository's resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.patch()`

Updates a single Repository. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The repository's name. |
| `params.updateMask` | `string` | No | Optional. Specifies the fields to be updated in the repository. If left unset, all fields will be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.delete()`

Deletes a single Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The repository's name. |
| `params.force` | `boolean` | No | Optional. If set to true, child resources of this repository (compilation results and workflow invocations) will also be deleted. Otherwise, the request will only succeed if the repository has no child resources. **Note:** *This flag doesn't support deletion of workspaces, release configs or workflow configs. If any of such resources exists in the repository, the request will fail.*. |

#### `projects.locations.repositories.commit()`

Applies a Git commit to a Repository. The Repository must not have a value for `git_remote_settings.url`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The repository's name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.readFile()`

Returns the contents of a file (inside a Repository). The Repository must not have a value for `git_remote_settings.url`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The repository's name. |
| `params.commitSha` | `string` | No | Optional. The commit SHA for the commit to read from. If unset, the file will be read from HEAD. |
| `params.path` | `string` | No | Required. Full file path to read including filename, from repository root. |

#### `projects.locations.repositories.queryDirectoryContents()`

Returns the contents of a given Repository directory. The Repository must not have a value for `git_remote_settings.url`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The repository's name. |
| `params.commitSha` | `string` | No | Optional. The Commit SHA for the commit to query from. If unset, the directory will be queried from HEAD. |
| `params.path` | `string` | No | Optional. The directory's full path including directory name, relative to root. If left unset, the root is used. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `QueryRepositoryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryRepositoryDirectoryContents`, with the exception of `page_size`, must match the call that provided the page token. |

#### `projects.locations.repositories.fetchHistory()`

Fetches a Repository's history of commits. The Repository must not have a value for `git_remote_settings.url`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The repository's name. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of commits to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `FetchRepositoryHistory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchRepositoryHistory`, with the exception of `page_size`, must match the call that provided the page token. |

#### `projects.locations.repositories.computeAccessTokenStatus()`

Computes a Repository's Git access token status.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The repository's name. |

#### `projects.locations.repositories.fetchRemoteBranches()`

Fetches a Repository's remote branches.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The repository's name. |

### `projects.locations.repositories.workspaces`

#### `projects.locations.repositories.workspaces.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.repositories.workspaces.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.list()`

Lists Workspaces in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to list workspaces. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of workspaces to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. |
| `params.filter` | `string` | No | Optional. Filter for the returned list. |

#### `projects.locations.repositories.workspaces.get()`

Fetches a single Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |

#### `projects.locations.repositories.workspaces.create()`

Creates a new Workspace in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to create the workspace. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.workspaceId` | `string` | No | Required. The ID to use for the workspace, which will become the final component of the workspace's resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.delete()`

Deletes a single Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace resource's name. |

#### `projects.locations.repositories.workspaces.installNpmPackages()`

Installs dependency NPM packages (inside a Workspace).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.pull()`

Pulls Git commits from the Repository's remote into a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.push()`

Pushes Git commits from a Workspace to the Repository's remote.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.fetchFileGitStatuses()`

Fetches Git statuses for the files in a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |

#### `projects.locations.repositories.workspaces.fetchGitAheadBehind()`

Fetches Git ahead/behind against a remote branch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |
| `params.remoteBranch` | `string` | No | Optional. The name of the branch in the Git remote against which this workspace should be compared. If left unset, the repository's default branch name will be used. |

#### `projects.locations.repositories.workspaces.commit()`

Applies a Git commit for uncommitted files in a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.reset()`

Performs a Git reset for uncommitted files in a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.fetchFileDiff()`

Fetches Git diff for an uncommitted file in a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.path` | `string` | No | Required. The file's full path including filename, relative to the workspace root. |

#### `projects.locations.repositories.workspaces.queryDirectoryContents()`

Returns the contents of a given Workspace directory.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.path` | `string` | No | Optional. The directory's full path including directory name, relative to the workspace root. If left unset, the workspace root is used. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `QueryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryDirectoryContents`, with the exception of `page_size`, must match the call that provided the page token. |

#### `projects.locations.repositories.workspaces.searchFiles()`

Finds the contents of a given Workspace directory by filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of search results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `SearchFilesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchFilesRequest`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Optional filter for the returned list in filtering format. Filtering is only currently supported on the `path` field. See https://google.aip.dev/160 for details. |

#### `projects.locations.repositories.workspaces.makeDirectory()`

Creates a directory inside a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.removeDirectory()`

Deletes a directory (inside a Workspace) and all of its contents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.moveDirectory()`

Moves a directory (inside a Workspace), and all of its contents, to a new location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.readFile()`

Returns the contents of a file (inside a Workspace).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.path` | `string` | No | Required. The file's full path including filename, relative to the workspace root. |
| `params.revision` | `string` | No | Optional. The Git revision of the file to return. If left empty, the current contents of `path` will be returned. |

#### `projects.locations.repositories.workspaces.removeFile()`

Deletes a file (inside a Workspace).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.moveFile()`

Moves a file (inside a Workspace) to a new location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.writeFile()`

Writes to a file (inside a Workspace).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.repositories.releaseConfigs`

#### `projects.locations.repositories.releaseConfigs.list()`

Lists ReleaseConfigs in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to list release configs. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of release configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `ListReleaseConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleaseConfigs`, with the exception of `page_size`, must match the call that provided the page token. |

#### `projects.locations.repositories.releaseConfigs.get()`

Fetches a single ReleaseConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The release config's name. |

#### `projects.locations.repositories.releaseConfigs.create()`

Creates a new ReleaseConfig in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to create the release config. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.releaseConfigId` | `string` | No | Required. The ID to use for the release config, which will become the final component of the release config's resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.releaseConfigs.patch()`

Updates a single ReleaseConfig. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The release config's name. |
| `params.updateMask` | `string` | No | Optional. Specifies the fields to be updated in the release config. If left unset, all fields will be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.releaseConfigs.delete()`

Deletes a single ReleaseConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The release config's name. |

### `projects.locations.repositories.compilationResults`

#### `projects.locations.repositories.compilationResults.list()`

Lists CompilationResults in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to list compilation results. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `ListCompilationResults` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompilationResults`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. This field only supports ordering by `name` and `create_time`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. |
| `params.filter` | `string` | No | Optional. Filter for the returned list. |

#### `projects.locations.repositories.compilationResults.get()`

Fetches a single CompilationResult.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The compilation result's name. |

#### `projects.locations.repositories.compilationResults.create()`

Creates a new CompilationResult in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to create the compilation result. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.compilationResults.query()`

Returns CompilationResultActions in a given CompilationResult.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The compilation result's name. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `QueryCompilationResultActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryCompilationResultActions`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.filter` | `string` | No | Optional. Optional filter for the returned list. Filtering is only currently supported on the `file_path` field. |

### `projects.locations.repositories.workflowConfigs`

#### `projects.locations.repositories.workflowConfigs.list()`

Lists WorkflowConfigs in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to list workflow configs. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of workflow configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `ListWorkflowConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowConfigs`, with the exception of `page_size`, must match the call that provided the page token. |

#### `projects.locations.repositories.workflowConfigs.get()`

Fetches a single WorkflowConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workflow config's name. |

#### `projects.locations.repositories.workflowConfigs.create()`

Creates a new WorkflowConfig in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to create the workflow config. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.workflowConfigId` | `string` | No | Required. The ID to use for the workflow config, which will become the final component of the workflow config's resource name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workflowConfigs.patch()`

Updates a single WorkflowConfig. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The workflow config's name. |
| `params.updateMask` | `string` | No | Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workflowConfigs.delete()`

Deletes a single WorkflowConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workflow config's name. |

### `projects.locations.repositories.workflowInvocations`

#### `projects.locations.repositories.workflowInvocations.list()`

Lists WorkflowInvocations in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource of the WorkflowInvocation type. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `ListWorkflowInvocations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowInvocations`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. |
| `params.filter` | `string` | No | Optional. Filter for the returned list. |

#### `projects.locations.repositories.workflowInvocations.get()`

Fetches a single WorkflowInvocation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workflow invocation resource's name. |

#### `projects.locations.repositories.workflowInvocations.create()`

Creates a new WorkflowInvocation in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to create the workflow invocation. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workflowInvocations.delete()`

Deletes a single WorkflowInvocation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workflow invocation resource's name. |

#### `projects.locations.repositories.workflowInvocations.cancel()`

Requests cancellation of a running WorkflowInvocation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workflow invocation resource's name. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workflowInvocations.query()`

Returns WorkflowInvocationActions in a given WorkflowInvocation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workflow invocation's name. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `QueryWorkflowInvocationActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryWorkflowInvocationActions`, with the exception of `page_size`, must match the call that provided the page token. |