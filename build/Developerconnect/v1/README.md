# Developer Connect API - Apps Script Client Library

Auto-generated client library for using the **Developer Connect API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Sun, 15 Nov 2026 16:07:14 GMT
- **Last Modified:** Sun, 15 Nov 2026 16:07:14 GMT
- **Created:** Sun, 20 Jul 2025 16:31:15 GMT



---

## API Reference

### `projects`

### `projects.locations`

#### `projects.locations.list()`

Lists information about the supported locations for this service. This method lists locations based on the resource scope provided in the ListLocationsRequest.name field:

* **Global locations**: If `name` is empty, the method lists the public locations available to all projects.

* **Project-specific locations**: If `name` follows the format `projects/{project}`, the method lists locations visible to that specific project. This includes public, private, or other project-specific locations enabled for the project. For gRPC and client library implementations, the resource name is passed as the `name` field. For direct service calls, the resource name is incorporated into the request path based on the specific service implementation and version.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource that owns the locations collection, if applicable. |
| `params.pageToken` | `string` | No | A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page. |
| `params.extraLocationTypes` | `string` | No | Optional. Do not use this field unless explicitly documented otherwise. This is primarily for internal usage. |
| `params.pageSize` | `integer` | No | The maximum number of results to return. If not set, the service selects a default. |
| `params.filter` | `string` | No | A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160). |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

### `projects.locations.accountConnectors`

#### `projects.locations.accountConnectors.patch()`

Updates the parameters of a single AccountConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the accountConnector, in the format `projects/{project}/locations/{location}/accountConnectors/{account_connector_id}`. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the accountConnector is not found a new accountConnector will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input accountConnector has all the necessary |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.accountConnectors.create()`

Creates a new AccountConnector in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountConnectorId` | `string` | No | Required. The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. Its format should adhere to https://google.aip.dev/122#resource-id-segments Names must be unique per-project per-location. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.parent` | `string` | Yes | Required. Location resource name as the account_connector’s parent. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.accountConnectors.get()`

Gets details of a single AccountConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.accountConnectors.list()`

Lists AccountConnectors in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.parent` | `string` | Yes | Required. Parent value for ListAccountConnectorsRequest |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |

#### `projects.locations.accountConnectors.delete()`

Deletes a single AccountConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | Optional. The current etag of the AccountConnectorn. If an etag is provided and does not match the current etag of the AccountConnector, deletion will be blocked and an ABORTED error will be returned. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.force` | `boolean` | No | Optional. If set to true, any Users from this AccountConnector will also be deleted. (Otherwise, the request will only work if the AccountConnector has no Users.) |
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.accountConnectors.fetchUserRepositories()`

FetchUserRepositories returns a list of UserRepos that are available for an account connector resource.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.repository` | `string` | No | Optional. The name of the repository. When specified, only the UserRepository with this name will be returned if the repository is accessible under this Account Connector for the calling user. |
| `params.pageToken` | `string` | No | Optional. Page start. |
| `params.accountConnector` | `string` | Yes | Required. The name of the Account Connector resource in the format: `projects/*/locations/*/accountConnectors/*`. |
| `params.pageSize` | `integer` | No | Optional. Number of results to return in the list. Defaults to 20. |

### `projects.locations.accountConnectors.users`

#### `projects.locations.accountConnectors.users.finishOAuthFlow()`

Finishes OAuth flow for an account connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.googleOauthParams.versionInfo` | `string` | No | Optional. The version info returned by Google OAuth flow. |
| `params.oauthParams.code` | `string` | No | Required. The code to be used for getting the token from SCM provider. |
| `params.googleOauthParams.scopes` | `string` | No | Required. The scopes returned by Google OAuth flow. |
| `params.accountConnector` | `string` | Yes | Required. The resource name of the AccountConnector in the format `projects/*/locations/*/accountConnectors/*`. |
| `params.googleOauthParams.ticket` | `string` | No | Required. The ticket to be used for post processing the callback from Google OAuth flow. |
| `params.oauthParams.ticket` | `string` | No | Required. The ticket to be used for post processing the callback from SCM provider. |

#### `projects.locations.accountConnectors.users.fetchSelf()`

Fetch the User based on the user credentials.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AccountConnector resource |

#### `projects.locations.accountConnectors.users.fetchAccessToken()`

Fetches OAuth access token based on end user credentials.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountConnector` | `string` | Yes | Required. The resource name of the AccountConnector in the format `projects/*/locations/*/accountConnectors/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.accountConnectors.users.list()`

Lists Users in a given project, location, and account_connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.parent` | `string` | Yes | Required. Parent value for ListUsersRequest |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

#### `projects.locations.accountConnectors.users.delete()`

Deletes a single User.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Required. Name of the resource |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |

#### `projects.locations.accountConnectors.users.deleteSelf()`

Delete the User based on the user credentials.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AccountConnector resource |

#### `projects.locations.accountConnectors.users.startOAuthFlow()`

Starts OAuth flow for an account connector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.accountConnector` | `string` | Yes | Required. The resource name of the AccountConnector in the format `projects/*/locations/*/accountConnectors/*`. |

### `projects.locations.connections`

#### `projects.locations.connections.list()`

Lists Connections in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListConnectionsRequest |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

#### `projects.locations.connections.delete()`

Deletes a single Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.etag` | `string` | No | Optional. The current etag of the Connection. If an etag is provided and does not match the current etag of the Connection, deletion will be blocked and an ABORTED error will be returned. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Required. Name of the resource |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |

#### `projects.locations.connections.fetchGitHubInstallations()`

FetchGitHubInstallations returns the list of GitHub Installations that are available to be added to a Connection. For github.com, only installations accessible to the authorizer token are returned. For GitHub Enterprise, all installations are returned.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.connection` | `string` | Yes | Required. The resource name of the connection in the format `projects/*/locations/*/connections/*`. |

#### `projects.locations.connections.processGitHubEnterpriseWebhook()`

ProcessGitHubEnterpriseWebhook is called by the external GitHub Enterprise instances for notifying events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project and location where the webhook will be received. Format: `projects/*/locations/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.patch()`

Updates the parameters of a single Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the Connection resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.name` | `string` | Yes | Identifier. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`. |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.get()`

Gets details of a single Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.connections.create()`

Creates a new Connection in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.connectionId` | `string` | No | Required. The ID to use for the connection, which becomes the final component of the connection's resource name. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.fetchLinkableGitRepositories()`

FetchLinkableGitRepositories returns a list of git repositories from an SCM that are available to be added to a Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Number of results to return in the list. Defaults to 20. |
| `params.pageToken` | `string` | No | Optional. Page start. |
| `params.connection` | `string` | Yes | Required. The name of the Connection. Format: `projects/*/locations/*/connections/*`. |

### `projects.locations.connections.gitRepositoryLinks`

#### `projects.locations.connections.gitRepositoryLinks.fetchReadWriteToken()`

Fetches read/write token of a given gitRepositoryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.gitRepositoryLink` | `string` | Yes | Required. The resource name of the gitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.fetchFileBlame()`

Fetches blame information for a file or line range in a file.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.ref` | `string` | No | Required. The SCM commit SHA, or symbolic revision (for example, branch name, tag) from which to fetch the blame. |
| `params.name` | `string` | Yes | Required. The resource name of the GitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.lastLine` | `integer` | No | Optional. The 1-indexed ending line number of the range to blame (inclusive). If not specified, blame extends to the end of the file. |
| `params.path` | `string` | No | Required. The file path within the repository. |
| `params.firstLine` | `integer` | No | Optional. The 1-indexed starting line number of the range to blame (inclusive). If not specified, blame begins at line 1. |

#### `projects.locations.connections.gitRepositoryLinks.fetchPullRequest()`

Fetch Pull Request details from a Git repository link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the GitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.pullRequestId` | `string` | No | Required. The ID of the Pull Request. |

#### `projects.locations.connections.gitRepositoryLinks.modifyPullRequest()`

Modifies a Pull Request in the remote SCM repository associated with a GitRepositoryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The GitRepositoryLink resource name in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.fetchCommit()`

Fetch Commit details from a Git repository link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pathFilters` | `string` | No | Optional. Path patterns or exact paths to filter returned files (only applicable in `FULL` view). When `path_filters` is specified, `FileDiff.patch` is populated for all matching files (use `["**"]` to include patches for all changed files). When `path_filters` is omitted or empty, the full list of `FileDiff` is returned without patch diffs (`FileDiff.patch` is empty). |
| `params.name` | `string` | Yes | Required. The resource name of the GitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.view` | `string` | No | Optional. The level of commit details to return in the response. Defaults to `FULL` if unspecified. In `FULL` view, `files` metadata (paths and statuses) are returned; `path_filters` must also be specified to populate line patch hunks. |
| `params.commitSha` | `string` | No | Required. The commit SHA, or symbolic revision (for example, branch name, tag, or Git reference). |

#### `projects.locations.connections.gitRepositoryLinks.processGitLabWebhook()`

ProcessGitLabWebhook is called by the GitLab.com for notifying events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The GitRepositoryLink resource where the webhook will be received. Format: `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.diffCommit()`

Diff commits for a GitRepositoryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pathFilters` | `string` | No | Optional. Path patterns or exact paths to filter returned files. When `path_filters` is specified, `FileDiff.patch` is populated for all matching files (use `["**"]` to include patches for all changed files). When `path_filters` is omitted or empty, the full list of `FileDiff` is returned without patch diffs (`FileDiff.patch` is empty). |
| `params.baseSha` | `string` | No | Required. The base commit SHA or ref. |
| `params.name` | `string` | Yes | Required. The resource name of the GitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.headSha` | `string` | No | Required. The head commit SHA or ref. |

#### `projects.locations.connections.gitRepositoryLinks.fetchGitRefs()`

Fetch the list of branches or tags for a given repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageSize` | `integer` | No | Optional. Number of results to return in the list. Default to 20. |
| `params.gitRepositoryLink` | `string` | Yes | Required. The resource name of GitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.refType` | `string` | No | Required. Type of refs to fetch. |
| `params.pageToken` | `string` | No | Optional. Page start. |

#### `projects.locations.connections.gitRepositoryLinks.addPullRequestComment()`

Add a comment to a Pull Request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the GitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.processGitLabEnterpriseWebhook()`

ProcessGitLabEnterpriseWebhook is called by the external GitLab Enterprise instances for notifying events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The GitRepositoryLink resource where the webhook will be received. Format: `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.fetchCommitList()`

Fetch a list of Commits from a Git repository link.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `FetchGitRepositoryLinkCommitList` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `FetchGitRepositoryLinkCommitList` must match the call that provided the page token. |
| `params.pageSize` | `integer` | No | Optional. Number of results to return in the list. Default is 50. Max is 100. |
| `params.name` | `string` | Yes | Required. The resource name of the GitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.view` | `string` | No | Optional. The level of commit details to return in the response. Only `BASIC` is supported; `FULL` returns `INVALID_ARGUMENT`. Defaults to `BASIC` if unspecified. Use `FetchGitRepositoryLinkCommit` to get file diffs for a single commit. |
| `params.ref` | `string` | No | Optional. The commit SHA, or symbolic revision (for example, branch name, tag, or Git reference) from which to start listing commits. |

#### `projects.locations.connections.gitRepositoryLinks.get()`

Gets details of a single GitRepositoryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.connections.gitRepositoryLinks.create()`

Creates a GitRepositoryLink. Upon linking a Git Repository, Developer Connect will configure the Git Repository to send webhook events to Developer Connect. Connections that use Firebase GitHub Application will have events forwarded to the Firebase service. Connections that use Gemini Code Assist will have events forwarded to Gemini Code Assist service. All other Connections will have events forwarded to Cloud Build.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.gitRepositoryLinkId` | `string` | No | Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. |
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.addPullRequestReviewComment()`

Add a review comment (inline on diff) to a Pull Request.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The resource name of the GitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.processBitbucketCloudWebhook()`

ProcessBitbucketCloudWebhook is called by the external Bitbucket Cloud instances for notifying events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The GitRepositoryLink where the webhook will be received. Format: `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.openPullRequest()`

Opens a Pull Request in the remote SCM repository associated with a GitRepositoryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The GitRepositoryLink resource name in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.list()`

Lists GitRepositoryLinks in a given project, location, and connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |
| `params.filter` | `string` | No | Optional. Filtering results. |
| `params.parent` | `string` | Yes | Required. Parent value for ListGitRepositoryLinksRequest. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |

#### `projects.locations.connections.gitRepositoryLinks.fetchReadToken()`

Fetches read token of a given gitRepositoryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.gitRepositoryLink` | `string` | Yes | Required. The resource name of the gitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.delete()`

Deletes a single GitRepositoryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.etag` | `string` | No | Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. |

#### `projects.locations.connections.gitRepositoryLinks.processBitbucketDataCenterWebhook()`

ProcessBitbucketDataCenterWebhook is called by the external Bitbucket Data Center instances for notifying events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The GitRepositoryLink where the webhook will be received. Format: `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.fetchPullRequestList()`

Fetches a list of Pull Requests from the remote repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `FetchGitRepositoryLinkPullRequestList` call. Provide this to retrieve the subsequent page. |
| `params.name` | `string` | Yes | Required. The GitRepositoryLink resource name in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.pageSize` | `integer` | No | Optional. Number of results to return in the list. Default is 20. Max is 100. A page may contain fewer than `page_size` results even when more results are available; use `next_page_token` to check for more pages. |
| `params.filter` | `string` | No | Optional. A filter expression that filters the pull requests returned in the response. Only a single equality comparison on `state` is supported, for example `state = "OPEN"`. Supported values are `OPEN`, `CLOSED`, and `MERGED`. `DECLINED` is only supported for SCM providers that support declining pull requests, and returns `INVALID_ARGUMENT` for GitHub, GitHub Enterprise, GitLab, and GitLab Enterprise. Other values or expressions return `INVALID_ARGUMENT`. Defaults to `state = "OPEN"` if unspecified. |

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
| `params.pageToken` | `string` | No | The standard list page token. |
| `params.name` | `string` | Yes | The name of the operation's parent resource. |
| `params.pageSize` | `integer` | No | The standard list page size. |
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

### `projects.locations.insightsConfigs`

#### `projects.locations.insightsConfigs.patch()`

Updates the parameters of a single InsightsConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the InsightsConfig. Format: projects/{project}/locations/{location}/insightsConfigs/{insightsConfig} |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the insightsConfig is not found a new insightsConfig will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input insightsConfig has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties). |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.insightsConfigs.get()`

Gets details of a single Insight.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |

#### `projects.locations.insightsConfigs.create()`

Creates a new InsightsConfig in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.insightsConfigId` | `string` | No | Required. ID of the requesting InsightsConfig. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.insightsConfigs.delete()`

Deletes a single Insight.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.etag` | `string` | No | Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. |
| `params.name` | `string` | Yes | Required. Value for parent. |

#### `projects.locations.insightsConfigs.list()`

Lists InsightsConfigs in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.filter` | `string` | No | Optional. Filtering results. See https://google.aip.dev/160 for more details. Filter string, adhering to the rules in https://google.aip.dev/160. List only InsightsConfigs matching the filter. If filter is empty, all InsightsConfigs are listed. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.parent` | `string` | Yes | Required. Parent value for ListInsightsConfigsRequest. |

### `projects.locations.insightsConfigs.deploymentEvents`

#### `projects.locations.insightsConfigs.deploymentEvents.get()`

Gets a single Deployment Event.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the deployment event to retrieve. Format: projects/{project}/locations/{location}/insightsConfigs/{insights_config}/deploymentEvents/{uuid} |

#### `projects.locations.insightsConfigs.deploymentEvents.list()`

Lists Deployment Events in a given insights config.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent insights config that owns this collection of deployment events. Format: projects/{project}/locations/{location}/insightsConfigs/{insights_config} |
| `params.pageToken` | `string` | No | Optional. A page token, received from a previous `ListDeploymentEvents` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListDeploymentEvents` must match the call that provided the page token. |
| `params.orderBy` | `string` | No | Optional. Field to use to order the list of DeploymentEvents. Expects AIP-132 format "field_name asc" or "field_name desc", e.g. "deploy_time desc" Supported fields for ordering are: deploy_time, update_time. Currently, only sorting by a single field is supported. If this field is not provided, the list will be sorted by "deploy_time desc". For more details on the ordering syntax, see https://google.aip.dev/132#ordering. |
| `params.pageSize` | `integer` | No | Optional. The maximum number of deployment events to return. The service may return fewer than this value. If unspecified, at most 50 deployment events will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.filter` | `string` | No | Optional. Filter expression that matches a subset of the DeploymentEvents. https://google.aip.dev/160. |