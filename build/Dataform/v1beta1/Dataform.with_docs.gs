
/**
 * Google Apps Script client library for the Dataform API
 * Documentation URL: https://cloud.google.com/dataform/docs
 * @class
 */
class Dataform {
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
    this._rootUrl = 'https://dataform.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Get default config for a given project and location.
     * @param {string} params.name - (Required) Required. The config name.
     * @return {object} The API response object.
     */
    this.projects.locations.getConfig = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Update default config for a given project and location. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*
     * @param {string} params.name - (Required) Identifier. The config name.
     * @param {string} params.updateMask - Optional. Specifies the fields to be updated in the config.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.updateConfig = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.repositories = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Lists Repositories in a given project and location. **Note:** *This method can return repositories not shown in the [Dataform UI](https://console.cloud.google.com/bigquery/dataform)*.
     * @param {string} params.filter - Optional. Filter for the returned list.
     * @param {string} params.orderBy - Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
     * @param {integer} params.pageSize - Optional. Maximum number of repositories to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Page token received from a previous `ListRepositories` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRepositories`, with the exception of `page_size`, must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The location in which to list repositories. Must be in the format `projects/*\/locations/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.list = (params) => this._makeRequest('v1beta1/{+parent}/repositories', 'GET', params);

    /**
     * Fetches a single Repository.
     * @param {string} params.name - (Required) Required. The repository's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new Repository in a given project and location.
     * @param {string} params.parent - (Required) Required. The location in which to create the repository. Must be in the format `projects/*\/locations/*`.
     * @param {string} params.repositoryId - Required. The ID to use for the repository, which will become the final component of the repository's resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.create = (params) => this._makeRequest('v1beta1/{+parent}/repositories', 'POST', params);

    /**
     * Updates a single Repository. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*
     * @param {string} params.name - (Required) Identifier. The repository's name.
     * @param {string} params.updateMask - Optional. Specifies the fields to be updated in the repository. If left unset, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Repository.
     * @param {boolean} params.force - Optional. If set to true, child resources of this repository (compilation results and workflow invocations) will also be deleted. Otherwise, the request will only succeed if the repository has no child resources. **Note:** *This flag doesn't support deletion of workspaces, release configs or workflow configs. If any of such resources exists in the repository, the request will fail.*.
     * @param {string} params.name - (Required) Required. The repository's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Applies a Git commit to a Repository. The Repository must not have a value for `git_remote_settings.url`.
     * @param {string} params.name - (Required) Required. The repository's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.commit = (params) => this._makeRequest('v1beta1/{+name}:commit', 'POST', params);

    /**
     * Returns the contents of a file (inside a Repository). The Repository must not have a value for `git_remote_settings.url`.
     * @param {string} params.commitSha - Optional. The commit SHA for the commit to read from. If unset, the file will be read from HEAD.
     * @param {string} params.name - (Required) Required. The repository's name.
     * @param {string} params.path - Required. Full file path to read including filename, from repository root.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.readFile = (params) => this._makeRequest('v1beta1/{+name}:readFile', 'GET', params);

    /**
     * Returns the contents of a given Repository directory. The Repository must not have a value for `git_remote_settings.url`.
     * @param {string} params.commitSha - Optional. The Commit SHA for the commit to query from. If unset, the directory will be queried from HEAD.
     * @param {string} params.name - (Required) Required. The repository's name.
     * @param {integer} params.pageSize - Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Page token received from a previous `QueryRepositoryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryRepositoryDirectoryContents`, with the exception of `page_size`, must match the call that provided the page token.
     * @param {string} params.path - Optional. The directory's full path including directory name, relative to root. If left unset, the root is used.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.queryDirectoryContents = (params) => this._makeRequest('v1beta1/{+name}:queryDirectoryContents', 'GET', params);

    /**
     * Fetches a Repository's history of commits. The Repository must not have a value for `git_remote_settings.url`.
     * @param {string} params.name - (Required) Required. The repository's name.
     * @param {integer} params.pageSize - Optional. Maximum number of commits to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Page token received from a previous `FetchRepositoryHistory` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchRepositoryHistory`, with the exception of `page_size`, must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.fetchHistory = (params) => this._makeRequest('v1beta1/{+name}:fetchHistory', 'GET', params);

    /**
     * Computes a Repository's Git access token status.
     * @param {string} params.name - (Required) Required. The repository's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.computeAccessTokenStatus = (params) => this._makeRequest('v1beta1/{+name}:computeAccessTokenStatus', 'GET', params);

    /**
     * Fetches a Repository's remote branches.
     * @param {string} params.name - (Required) Required. The repository's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.fetchRemoteBranches = (params) => this._makeRequest('v1beta1/{+name}:fetchRemoteBranches', 'GET', params);

    this.projects.locations.repositories.workspaces = {};

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.setIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.getIamPolicy = (params) => this._makeRequest('v1beta1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.testIamPermissions = (params) => this._makeRequest('v1beta1/{+resource}:testIamPermissions', 'POST', params);

    /**
     * Lists Workspaces in a given Repository.
     * @param {string} params.filter - Optional. Filter for the returned list.
     * @param {string} params.orderBy - Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
     * @param {integer} params.pageSize - Optional. Maximum number of workspaces to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Page token received from a previous `ListWorkspaces` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkspaces`, with the exception of `page_size`, must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The repository in which to list workspaces. Must be in the format `projects/*\/locations/*\/repositories/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.list = (params) => this._makeRequest('v1beta1/{+parent}/workspaces', 'GET', params);

    /**
     * Fetches a single Workspace.
     * @param {string} params.name - (Required) Required. The workspace's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new Workspace in a given Repository.
     * @param {string} params.parent - (Required) Required. The repository in which to create the workspace. Must be in the format `projects/*\/locations/*\/repositories/*`.
     * @param {string} params.workspaceId - Required. The ID to use for the workspace, which will become the final component of the workspace's resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.create = (params) => this._makeRequest('v1beta1/{+parent}/workspaces', 'POST', params);

    /**
     * Deletes a single Workspace.
     * @param {string} params.name - (Required) Required. The workspace resource's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Installs dependency NPM packages (inside a Workspace).
     * @param {string} params.workspace - (Required) Required. The workspace's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.installNpmPackages = (params) => this._makeRequest('v1beta1/{+workspace}:installNpmPackages', 'POST', params);

    /**
     * Pulls Git commits from the Repository's remote into a Workspace.
     * @param {string} params.name - (Required) Required. The workspace's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.pull = (params) => this._makeRequest('v1beta1/{+name}:pull', 'POST', params);

    /**
     * Pushes Git commits from a Workspace to the Repository's remote.
     * @param {string} params.name - (Required) Required. The workspace's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.push = (params) => this._makeRequest('v1beta1/{+name}:push', 'POST', params);

    /**
     * Fetches Git statuses for the files in a Workspace.
     * @param {string} params.name - (Required) Required. The workspace's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.fetchFileGitStatuses = (params) => this._makeRequest('v1beta1/{+name}:fetchFileGitStatuses', 'GET', params);

    /**
     * Fetches Git ahead/behind against a remote branch.
     * @param {string} params.name - (Required) Required. The workspace's name.
     * @param {string} params.remoteBranch - Optional. The name of the branch in the Git remote against which this workspace should be compared. If left unset, the repository's default branch name will be used.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.fetchGitAheadBehind = (params) => this._makeRequest('v1beta1/{+name}:fetchGitAheadBehind', 'GET', params);

    /**
     * Applies a Git commit for uncommitted files in a Workspace.
     * @param {string} params.name - (Required) Required. The workspace's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.commit = (params) => this._makeRequest('v1beta1/{+name}:commit', 'POST', params);

    /**
     * Performs a Git reset for uncommitted files in a Workspace.
     * @param {string} params.name - (Required) Required. The workspace's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.reset = (params) => this._makeRequest('v1beta1/{+name}:reset', 'POST', params);

    /**
     * Fetches Git diff for an uncommitted file in a Workspace.
     * @param {string} params.path - Required. The file's full path including filename, relative to the workspace root.
     * @param {string} params.workspace - (Required) Required. The workspace's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.fetchFileDiff = (params) => this._makeRequest('v1beta1/{+workspace}:fetchFileDiff', 'GET', params);

    /**
     * Returns the contents of a given Workspace directory.
     * @param {integer} params.pageSize - Optional. Maximum number of paths to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Page token received from a previous `QueryDirectoryContents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryDirectoryContents`, with the exception of `page_size`, must match the call that provided the page token.
     * @param {string} params.path - Optional. The directory's full path including directory name, relative to the workspace root. If left unset, the workspace root is used.
     * @param {string} params.workspace - (Required) Required. The workspace's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.queryDirectoryContents = (params) => this._makeRequest('v1beta1/{+workspace}:queryDirectoryContents', 'GET', params);

    /**
     * Finds the contents of a given Workspace directory by filter.
     * @param {string} params.filter - Optional. Optional filter for the returned list in filtering format. Filtering is only currently supported on the `path` field. See https://google.aip.dev/160 for details.
     * @param {integer} params.pageSize - Optional. Maximum number of search results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Page token received from a previous `SearchFilesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `SearchFilesRequest`, with the exception of `page_size`, must match the call that provided the page token.
     * @param {string} params.workspace - (Required) Required. The workspace's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.searchFiles = (params) => this._makeRequest('v1beta1/{+workspace}:searchFiles', 'GET', params);

    /**
     * Creates a directory inside a Workspace.
     * @param {string} params.workspace - (Required) Required. The workspace's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.makeDirectory = (params) => this._makeRequest('v1beta1/{+workspace}:makeDirectory', 'POST', params);

    /**
     * Deletes a directory (inside a Workspace) and all of its contents.
     * @param {string} params.workspace - (Required) Required. The workspace's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.removeDirectory = (params) => this._makeRequest('v1beta1/{+workspace}:removeDirectory', 'POST', params);

    /**
     * Moves a directory (inside a Workspace), and all of its contents, to a new location.
     * @param {string} params.workspace - (Required) Required. The workspace's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.moveDirectory = (params) => this._makeRequest('v1beta1/{+workspace}:moveDirectory', 'POST', params);

    /**
     * Returns the contents of a file (inside a Workspace).
     * @param {string} params.path - Required. The file's full path including filename, relative to the workspace root.
     * @param {string} params.revision - Optional. The Git revision of the file to return. If left empty, the current contents of `path` will be returned.
     * @param {string} params.workspace - (Required) Required. The workspace's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.readFile = (params) => this._makeRequest('v1beta1/{+workspace}:readFile', 'GET', params);

    /**
     * Deletes a file (inside a Workspace).
     * @param {string} params.workspace - (Required) Required. The workspace's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.removeFile = (params) => this._makeRequest('v1beta1/{+workspace}:removeFile', 'POST', params);

    /**
     * Moves a file (inside a Workspace) to a new location.
     * @param {string} params.workspace - (Required) Required. The workspace's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.moveFile = (params) => this._makeRequest('v1beta1/{+workspace}:moveFile', 'POST', params);

    /**
     * Writes to a file (inside a Workspace).
     * @param {string} params.workspace - (Required) Required. The workspace's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workspaces.writeFile = (params) => this._makeRequest('v1beta1/{+workspace}:writeFile', 'POST', params);

    this.projects.locations.repositories.releaseConfigs = {};

    /**
     * Lists ReleaseConfigs in a given Repository.
     * @param {integer} params.pageSize - Optional. Maximum number of release configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Page token received from a previous `ListReleaseConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReleaseConfigs`, with the exception of `page_size`, must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The repository in which to list release configs. Must be in the format `projects/*\/locations/*\/repositories/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.releaseConfigs.list = (params) => this._makeRequest('v1beta1/{+parent}/releaseConfigs', 'GET', params);

    /**
     * Fetches a single ReleaseConfig.
     * @param {string} params.name - (Required) Required. The release config's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.releaseConfigs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new ReleaseConfig in a given Repository.
     * @param {string} params.parent - (Required) Required. The repository in which to create the release config. Must be in the format `projects/*\/locations/*\/repositories/*`.
     * @param {string} params.releaseConfigId - Required. The ID to use for the release config, which will become the final component of the release config's resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.releaseConfigs.create = (params) => this._makeRequest('v1beta1/{+parent}/releaseConfigs', 'POST', params);

    /**
     * Updates a single ReleaseConfig. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*
     * @param {string} params.name - (Required) Identifier. The release config's name.
     * @param {string} params.updateMask - Optional. Specifies the fields to be updated in the release config. If left unset, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.releaseConfigs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single ReleaseConfig.
     * @param {string} params.name - (Required) Required. The release config's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.releaseConfigs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.repositories.compilationResults = {};

    /**
     * Lists CompilationResults in a given Repository.
     * @param {string} params.filter - Optional. Filter for the returned list.
     * @param {string} params.orderBy - Optional. This field only supports ordering by `name` and `create_time`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
     * @param {integer} params.pageSize - Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Page token received from a previous `ListCompilationResults` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListCompilationResults`, with the exception of `page_size`, must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The repository in which to list compilation results. Must be in the format `projects/*\/locations/*\/repositories/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.compilationResults.list = (params) => this._makeRequest('v1beta1/{+parent}/compilationResults', 'GET', params);

    /**
     * Fetches a single CompilationResult.
     * @param {string} params.name - (Required) Required. The compilation result's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.compilationResults.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new CompilationResult in a given project and location.
     * @param {string} params.parent - (Required) Required. The repository in which to create the compilation result. Must be in the format `projects/*\/locations/*\/repositories/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.compilationResults.create = (params) => this._makeRequest('v1beta1/{+parent}/compilationResults', 'POST', params);

    /**
     * Returns CompilationResultActions in a given CompilationResult.
     * @param {string} params.filter - Optional. Optional filter for the returned list. Filtering is only currently supported on the `file_path` field.
     * @param {string} params.name - (Required) Required. The compilation result's name.
     * @param {integer} params.pageSize - Optional. Maximum number of compilation results to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Page token received from a previous `QueryCompilationResultActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryCompilationResultActions`, with the exception of `page_size`, must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.compilationResults.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'GET', params);

    this.projects.locations.repositories.workflowConfigs = {};

    /**
     * Lists WorkflowConfigs in a given Repository.
     * @param {integer} params.pageSize - Optional. Maximum number of workflow configs to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Page token received from a previous `ListWorkflowConfigs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowConfigs`, with the exception of `page_size`, must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The repository in which to list workflow configs. Must be in the format `projects/*\/locations/*\/repositories/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workflowConfigs.list = (params) => this._makeRequest('v1beta1/{+parent}/workflowConfigs', 'GET', params);

    /**
     * Fetches a single WorkflowConfig.
     * @param {string} params.name - (Required) Required. The workflow config's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workflowConfigs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new WorkflowConfig in a given Repository.
     * @param {string} params.parent - (Required) Required. The repository in which to create the workflow config. Must be in the format `projects/*\/locations/*\/repositories/*`.
     * @param {string} params.workflowConfigId - Required. The ID to use for the workflow config, which will become the final component of the workflow config's resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workflowConfigs.create = (params) => this._makeRequest('v1beta1/{+parent}/workflowConfigs', 'POST', params);

    /**
     * Updates a single WorkflowConfig. **Note:** *This method does not fully implement [AIP/134](https://google.aip.dev/134). The wildcard entry (\*) is treated as a bad request, and when the `field_mask` is omitted, the request is treated as a full update on all modifiable fields.*
     * @param {string} params.name - (Required) Identifier. The workflow config's name.
     * @param {string} params.updateMask - Optional. Specifies the fields to be updated in the workflow config. If left unset, all fields will be updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workflowConfigs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a single WorkflowConfig.
     * @param {string} params.name - (Required) Required. The workflow config's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workflowConfigs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    this.projects.locations.repositories.workflowInvocations = {};

    /**
     * Lists WorkflowInvocations in a given Repository.
     * @param {string} params.filter - Optional. Filter for the returned list.
     * @param {string} params.orderBy - Optional. This field only supports ordering by `name`. If unspecified, the server will choose the ordering. If specified, the default order is ascending for the `name` field.
     * @param {integer} params.pageSize - Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Page token received from a previous `ListWorkflowInvocations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListWorkflowInvocations`, with the exception of `page_size`, must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent resource of the WorkflowInvocation type. Must be in the format `projects/*\/locations/*\/repositories/*`.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workflowInvocations.list = (params) => this._makeRequest('v1beta1/{+parent}/workflowInvocations', 'GET', params);

    /**
     * Fetches a single WorkflowInvocation.
     * @param {string} params.name - (Required) Required. The workflow invocation resource's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workflowInvocations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a new WorkflowInvocation in a given Repository.
     * @param {string} params.parent - (Required) Required. The repository in which to create the workflow invocation. Must be in the format `projects/*\/locations/*\/repositories/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workflowInvocations.create = (params) => this._makeRequest('v1beta1/{+parent}/workflowInvocations', 'POST', params);

    /**
     * Deletes a single WorkflowInvocation.
     * @param {string} params.name - (Required) Required. The workflow invocation resource's name.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workflowInvocations.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Requests cancellation of a running WorkflowInvocation.
     * @param {string} params.name - (Required) Required. The workflow invocation resource's name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workflowInvocations.cancel = (params) => this._makeRequest('v1beta1/{+name}:cancel', 'POST', params);

    /**
     * Returns WorkflowInvocationActions in a given WorkflowInvocation.
     * @param {string} params.name - (Required) Required. The workflow invocation's name.
     * @param {integer} params.pageSize - Optional. Maximum number of workflow invocations to return. The server may return fewer items than requested. If unspecified, the server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. Page token received from a previous `QueryWorkflowInvocationActions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `QueryWorkflowInvocationActions`, with the exception of `page_size`, must match the call that provided the page token.
     * @return {object} The API response object.
     */
    this.projects.locations.repositories.workflowInvocations.query = (params) => this._makeRequest('v1beta1/{+name}:query', 'GET', params);
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
