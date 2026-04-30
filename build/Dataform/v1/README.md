# Dataform API - Apps Script Client Library

Auto-generated client library for using the **Dataform API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 30 Apr 2026 23:43:44 GMT
- **Last Modified:** Thu, 30 Apr 2026 23:43:44 GMT
- **Created:** Sat, 01 Nov 2025 00:34:56 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.updateConfig()`

Update default config for a given project and location. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. Specifies the fields to be updated in the config. |
| `params.name` | `string` | Yes | Identifier. The config name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.queryUserRootContents()`

Returns the contents of a caller's root folder in a given location. The root folder contains all resources that are created by the user and not contained in any other folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Optional filtering for the returned list. Filtering is currently only supported on the `display_name` field. Example: * `filter="display_name="MyFolder""` |
| `params.location` | `string` | Yes | Required. Location of the user root folder to list contents for. Format: projects/*/locations/* |
| `params.pageSize` | `integer` | No | Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `QueryUserRootContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryUserRootFolderContents`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. Field to additionally sort results by. Will order Folders before Repositories, and then by `order_by` in ascending order. Supported keywords: display_name (default), created_at, last_modified_at. Examples: * `orderBy="display_name"` * `orderBy="display_name desc"` |

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the [ListLocationsRequest.name] field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

#### `projects.locations.getConfig()`

Get default config for a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The config name. |

### `projects.locations.operations`

#### `projects.locations.operations.delete()`

Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be deleted. |

#### `projects.locations.operations.list()`

Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | The standard list page size. |
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.returnPartialSuccess` | `boolean` | No | When set to `true`, operations that are reachable are returned as normal, and those that are unreachable are returned in the ListOperationsResponse.unreachable field. This can only be `true` when reading across collections. For example, when `parent` is set to `"projects/example/locations/-"`. This field is not supported by default and will result in an `UNIMPLEMENTED` error if set unless explicitly documented otherwise in service or product specific documentation. |
| `params.filter` | `string` | No | The standard list filter. |

#### `projects.locations.operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `projects.locations.operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.teamFolders`

#### `projects.locations.teamFolders.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.teamFolders.deleteTree()`

Deletes a TeamFolder with its contents (Folders, Repositories, Workspaces, ReleaseConfigs, and WorkflowConfigs).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The TeamFolder's name. Format: projects/{project}/locations/{location}/teamFolders/{team_folder} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.teamFolders.patch()`

Updates a single TeamFolder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. Specifies the fields to be updated in the Folder. If left unset, all fields will be updated. |
| `params.name` | `string` | Yes | Identifier. The TeamFolder's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.teamFolders.queryContents()`

Returns the contents of a given TeamFolder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.teamFolder` | `string` | Yes | Required. Resource name of the TeamFolder to list contents for. Format: `projects/*/locations/*/teamFolders/*`. |
| `params.filter` | `string` | No | Optional. Optional filtering for the returned list. Filtering is currently only supported on the `display_name` field. Example: * `filter="display_name="MyFolder""` |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `QueryTeamFolderContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryTeamFolderContents`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.orderBy` | `string` | No | Optional. Field to additionally sort results by. Will order Folders before Repositories, and then by `order_by` in ascending order. Supported keywords: `display_name` (default), `create_time`, last_modified_time. Examples: * `orderBy="display_name"` * `orderBy="display_name desc"` |

#### `projects.locations.teamFolders.search()`

Returns all TeamFolders in a given location that the caller has access to and match the provided filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. Field to additionally sort results by. Supported keywords: `display_name` (default), `create_time`, `last_modified_time`. Examples: * `orderBy="display_name"` * `orderBy="display_name desc"` |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `SearchTeamFolders` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchTeamFolders`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of TeamFolders to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.location` | `string` | Yes | Required. Location in which to query TeamFolders. Format: `projects/*/locations/*`. |
| `params.filter` | `string` | No | Optional. Optional filtering for the returned list. Filtering is currently only supported on the `display_name` field. Example: * `filter="display_name="MyFolder""` |

#### `projects.locations.teamFolders.create()`

Creates a new TeamFolder in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location in which to create the TeamFolder. Must be in the format `projects/*/locations/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.teamFolders.get()`

Fetches a single TeamFolder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The TeamFolder's name. |

#### `projects.locations.teamFolders.delete()`

Deletes a single TeamFolder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The TeamFolder's name. |

#### `projects.locations.teamFolders.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |

#### `projects.locations.teamFolders.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.folders`

#### `projects.locations.folders.get()`

Fetches a single Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Folder's name. |

#### `projects.locations.folders.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.folders.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.folders.delete()`

Deletes a single Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Folder's name. |

#### `projects.locations.folders.create()`

Creates a new Folder in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location in which to create the Folder. Must be in the format `projects/*/locations/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.folders.patch()`

Updates a single Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The Folder's name. |
| `params.updateMask` | `string` | No | Optional. Specifies the fields to be updated in the Folder. If left unset, all fields that can be updated, will be updated. A few fields cannot be updated and will be ignored if specified in the update_mask (e.g. parent_name, team_folder_name). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.folders.deleteTree()`

Deletes a Folder with its contents (Folders, Repositories, Workspaces, ReleaseConfigs, and WorkflowConfigs).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The Folder's name. Format: projects/{project}/locations/{location}/folders/{folder} |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.folders.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.folders.move()`

Moves a Folder to a new Folder, TeamFolder, or the root location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the Folder to move. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.folders.queryFolderContents()`

Returns the contents of a given Folder.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `QueryFolderContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryFolderContents`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.orderBy` | `string` | No | Optional. Field to additionally sort results by. Will order Folders before Repositories, and then by `order_by` in ascending order. Supported keywords: display_name (default), create_time, last_modified_time. Examples: * `orderBy="display_name"` * `orderBy="display_name desc"` |
| `params.folder` | `string` | Yes | Required. Resource name of the Folder to list contents for. Format: projects/*/locations/*/folders/* |
| `params.filter` | `string` | No | Optional. Optional filtering for the returned list. Filtering is currently only supported on the `display_name` field. Example: * `filter="display_name="MyFolder""` |

### `projects.locations.repositories`

#### `projects.locations.repositories.queryDirectoryContents()`

Returns the contents of a given Repository directory. The Repository must not have a value for `git_remote_settings.url`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.commitSha` | `string` | No | Optional. The Commit SHA for the commit to query from. If unset, the directory will be queried from HEAD. |
| `params.name` | `string` | Yes | Required. The repository's name. |
| `params.path` | `string` | No | Optional. The directory's full path including directory name, relative to root. If left unset, the root is used. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `QueryRepositoryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryRepositoryDirectoryContents`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |

#### `projects.locations.repositories.fetchHistory()`

Fetches a Repository's history of commits. The Repository must not have a value for `git_remote_settings.url`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `FetchRepositoryHistory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchRepositoryHistory`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of commits to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.name` | `string` | Yes | Required. The repository's name. |

#### `projects.locations.repositories.move()`

Moves a Repository to a new location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The full resource name of the repository to move. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.delete()`

Deletes a single Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The repository's name. |
| `params.force` | `boolean` | No | Optional. If set to true, child resources of this repository (compilation results and workflow invocations) will also be deleted. Otherwise, the request will only succeed if the repository has no child resources. **Note:** *This flag doesn't support deletion of workspaces, release configs or workflow configs. If any of such resources exists in the repository, the request will fail.*. |

#### `projects.locations.repositories.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.get()`

Fetches a single Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The repository's name. |

#### `projects.locations.repositories.commit()`

Applies a Git commit to a Repository. The Repository must not have a value for `git_remote_settings.url`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The repository's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.create()`

Creates a new Repository in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The location in which to create the repository. Must be in the format `projects/*/locations/*`. |
| `params.repositoryId` | `string` | No | Required. The ID to use for the repository, which will become the final component of the repository's resource name. |
| `params.requestBody` | `object` | Yes | The request body. |

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

#### `projects.locations.repositories.list()`

Lists Repositories in a given project and location. **Note:** *This method can return repositories not shown in the [Dataform UI](https://console.cloud.google.com/bigquery/dataform)*.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Filter for the returned list. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of repositories to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.parent` | `string` | Yes | Required. The location in which to list repositories. Must be in the format `projects/*/locations/*`. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `ListRepositories` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepositories`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. |

#### `projects.locations.repositories.patch()`

Updates a single Repository. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The repository's name. |
| `params.updateMask` | `string` | No | Optional. Specifies the fields to be updated in the repository. If left unset, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.readFile()`

Returns the contents of a file (inside a Repository). The Repository must not have a value for `git_remote_settings.url`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The repository's name. |
| `params.commitSha` | `string` | No | Optional. The commit SHA for the commit to read from. If unset, the file will be read from HEAD. |
| `params.path` | `string` | No | Required. Full file path to read including filename, from repository root. |

#### `projects.locations.repositories.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

### `projects.locations.repositories.releaseConfigs`

#### `projects.locations.repositories.releaseConfigs.create()`

Creates a new ReleaseConfig in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.releaseConfigId` | `string` | No | Required. The ID to use for the release config, which will become the final component of the release config's resource name. |
| `params.parent` | `string` | Yes | Required. The repository in which to create the release config. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.releaseConfigs.list()`

Lists ReleaseConfigs in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to list release configs. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `ListReleaseConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleaseConfigs`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of release configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |

#### `projects.locations.repositories.releaseConfigs.get()`

Fetches a single ReleaseConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The release config's name. |

#### `projects.locations.repositories.releaseConfigs.patch()`

Updates a single ReleaseConfig. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Optional. Specifies the fields to be updated in the release config. If left unset, all fields will be updated. |
| `params.name` | `string` | Yes | Identifier. The release config's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.releaseConfigs.delete()`

Deletes a single ReleaseConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The release config's name. |

### `projects.locations.repositories.workspaces`

#### `projects.locations.repositories.workspaces.fetchFileDiff()`

Fetches Git diff for an uncommitted file in a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.path` | `string` | No | Required. The file's full path including filename, relative to the workspace root. |

#### `projects.locations.repositories.workspaces.pull()`

Pulls Git commits from the Repository's remote into a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.searchFiles()`

Finds the contents of a given Workspace directory by filter.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Optional filter for the returned list in filtering format. Filtering is only currently supported on the `path` field. See https://google.aip.dev/160 for details. |
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of search results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `SearchFilesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchFilesRequest`, with the exception of `page_size`, must match the call that provided the page token. |

#### `projects.locations.repositories.workspaces.makeDirectory()`

Creates a directory inside a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.removeDirectory()`

Deletes a directory (inside a Workspace) and all of its contents.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.queryDirectoryContents()`

Returns the contents of a given Workspace directory.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.view` | `string` | No | Optional. Specifies the metadata to return for each directory entry. If unspecified, the default is `DIRECTORY_CONTENTS_VIEW_BASIC`. Currently the `DIRECTORY_CONTENTS_VIEW_METADATA` view is not supported by CMEK-protected workspaces. |
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.path` | `string` | No | Optional. The directory's full path including directory name, relative to the workspace root. If left unset, the workspace root is used. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `QueryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryDirectoryContents`, with the exception of `page_size`, must match the call that provided the page token. |

#### `projects.locations.repositories.workspaces.moveFile()`

Moves a file (inside a Workspace) to a new location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.push()`

Pushes Git commits from a Workspace to the Repository's remote.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.commit()`

Applies a Git commit for uncommitted files in a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.create()`

Creates a new Workspace in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to create the workspace. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.workspaceId` | `string` | No | Required. The ID to use for the workspace, which will become the final component of the workspace's resource name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.installNpmPackages()`

Installs dependency NPM packages (inside a Workspace).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.moveDirectory()`

Moves a directory (inside a Workspace), and all of its contents, to a new location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.get()`

Fetches a single Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |

#### `projects.locations.repositories.workspaces.fetchFileGitStatuses()`

Fetches Git statuses for the files in a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |

#### `projects.locations.repositories.workspaces.delete()`

Deletes a single Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace resource's name. |

#### `projects.locations.repositories.workspaces.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.reset()`

Performs a Git reset for uncommitted files in a Workspace.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.list()`

Lists Workspaces in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to list workspaces. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of workspaces to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.orderBy` | `string` | No | Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. |
| `params.filter` | `string` | No | Optional. Filter for the returned list. |

#### `projects.locations.repositories.workspaces.fetchGitAheadBehind()`

Fetches Git ahead/behind against a remote branch.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workspace's name. |
| `params.remoteBranch` | `string` | No | Optional. The name of the branch in the Git remote against which this workspace should be compared. If left unset, the repository's default branch name will be used. |

#### `projects.locations.repositories.workspaces.writeFile()`

Writes to a file (inside a Workspace).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.removeFile()`

Deletes a file (inside a Workspace).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workspace` | `string` | Yes | Required. The workspace's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workspaces.readFile()`

Returns the contents of a file (inside a Workspace).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.revision` | `string` | No | Optional. The Git revision of the file to return. If left empty, the current contents of `path` will be returned. |
| `params.path` | `string` | No | Required. The file's full path including filename, relative to the workspace root. |
| `params.workspace` | `string` | Yes | Required. The workspace's name. |

#### `projects.locations.repositories.workspaces.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |

### `projects.locations.repositories.workflowInvocations`

#### `projects.locations.repositories.workflowInvocations.list()`

Lists WorkflowInvocations in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Filter for the returned list. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.parent` | `string` | Yes | Required. The parent resource of the WorkflowInvocation type. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `ListWorkflowInvocations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowInvocations`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. |

#### `projects.locations.repositories.workflowInvocations.get()`

Fetches a single WorkflowInvocation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workflow invocation resource's name. |

#### `projects.locations.repositories.workflowInvocations.cancel()`

Requests cancellation of a running WorkflowInvocation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workflow invocation resource's name. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workflowInvocations.delete()`

Deletes a single WorkflowInvocation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workflow invocation resource's name. |

#### `projects.locations.repositories.workflowInvocations.create()`

Creates a new WorkflowInvocation in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The repository in which to create the workflow invocation. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workflowInvocations.query()`

Returns WorkflowInvocationActions in a given WorkflowInvocation.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `QueryWorkflowInvocationActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryWorkflowInvocationActions`, with the exception of `page_size`, must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.name` | `string` | Yes | Required. The workflow invocation's name. |

### `projects.locations.repositories.compilationResults`

#### `projects.locations.repositories.compilationResults.list()`

Lists CompilationResults in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. This field only supports ordering by `name` and `create_time`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.parent` | `string` | Yes | Required. The repository in which to list compilation results. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `ListCompilationResults` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompilationResults`, with the exception of `page_size`, must match the call that provided the page token. |
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
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.compilationResults.query()`

Returns CompilationResultActions in a given CompilationResult.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The compilation result's name. |
| `params.filter` | `string` | No | Optional. Optional filter for the returned list. Filtering is only currently supported on the `file_path` field. |
| `params.pageSize` | `integer` | No | Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `QueryCompilationResultActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryCompilationResultActions`, with the exception of `page_size`, must match the call that provided the page token. |

### `projects.locations.repositories.workflowConfigs`

#### `projects.locations.repositories.workflowConfigs.patch()`

Updates a single WorkflowConfig. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The workflow config's name. |
| `params.updateMask` | `string` | No | Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.repositories.workflowConfigs.list()`

Lists WorkflowConfigs in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Maximum number of workflow configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default. |
| `params.parent` | `string` | Yes | Required. The repository in which to list workflow configs. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.pageToken` | `string` | No | Optional. Page token received from a previous `ListWorkflowConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowConfigs`, with the exception of `page_size`, must match the call that provided the page token. |

#### `projects.locations.repositories.workflowConfigs.get()`

Fetches a single WorkflowConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workflow config's name. |

#### `projects.locations.repositories.workflowConfigs.delete()`

Deletes a single WorkflowConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The workflow config's name. |

#### `projects.locations.repositories.workflowConfigs.create()`

Creates a new WorkflowConfig in a given Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.workflowConfigId` | `string` | No | Required. The ID to use for the workflow config, which will become the final component of the workflow config's resource name. |
| `params.parent` | `string` | Yes | Required. The repository in which to create the workflow config. Must be in the format `projects/*/locations/*/repositories/*`. |
| `params.requestBody` | `object` | Yes | The request body. |