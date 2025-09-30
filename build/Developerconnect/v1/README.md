# Developer Connect API - Apps Script Client Library

Auto-generated client library for using the **Developer Connect API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:33:32 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:16:53 GMT
- **Created:** Sun, 20 Jul 2025 16:31:15 GMT



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
| `params.extraLocationTypes` | `string` | No | Optional. Unless explicitly documented otherwise, don't use this unsupported field which is primarily intended for internal usage. |

#### `projects.locations.get()`

Gets information about a location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Resource name for the location. |

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
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.connections`

#### `projects.locations.connections.list()`

Lists Connections in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListConnectionsRequest |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.connections.get()`

Gets details of a single Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.connections.create()`

Creates a new Connection in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.connectionId` | `string` | No | Required. Id of the requesting object If auto-generating Id server-side, remove this field and connection_id from the method_signature of Create RPC |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.patch()`

Updates the parameters of a single Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`. |
| `params.updateMask` | `string` | No | Required. Field mask is used to specify the fields to be overwritten in the Connection resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.delete()`

Deletes a single Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.etag` | `string` | No | Optional. The current etag of the Connection. If an etag is provided and does not match the current etag of the Connection, deletion will be blocked and an ABORTED error will be returned. |

#### `projects.locations.connections.fetchLinkableGitRepositories()`

FetchLinkableGitRepositories returns a list of git repositories from an SCM that are available to be added to a Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.connection` | `string` | Yes | Required. The name of the Connection. Format: `projects/*/locations/*/connections/*`. |
| `params.pageSize` | `integer` | No | Optional. Number of results to return in the list. Defaults to 20. |
| `params.pageToken` | `string` | No | Optional. Page start. |

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

### `projects.locations.connections.gitRepositoryLinks`

#### `projects.locations.connections.gitRepositoryLinks.create()`

Creates a GitRepositoryLink. Upon linking a Git Repository, Developer Connect will configure the Git Repository to send webhook events to Developer Connect. Connections that use Firebase GitHub Application will have events forwarded to the Firebase service. All other Connections will have events forwarded to Cloud Build.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.gitRepositoryLinkId` | `string` | No | Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.delete()`

Deletes a single GitRepositoryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.etag` | `string` | No | Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. |

#### `projects.locations.connections.gitRepositoryLinks.list()`

Lists GitRepositoryLinks in a given project, location, and connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListGitRepositoryLinksRequest |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.connections.gitRepositoryLinks.get()`

Gets details of a single GitRepositoryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.connections.gitRepositoryLinks.fetchReadWriteToken()`

Fetches read/write token of a given gitRepositoryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.gitRepositoryLink` | `string` | Yes | Required. The resource name of the gitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.fetchReadToken()`

Fetches read token of a given gitRepositoryLink.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.gitRepositoryLink` | `string` | Yes | Required. The resource name of the gitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.fetchGitRefs()`

Fetch the list of branches or tags for a given repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.gitRepositoryLink` | `string` | Yes | Required. The resource name of GitRepositoryLink in the format `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.refType` | `string` | No | Required. Type of refs to fetch. |
| `params.pageSize` | `integer` | No | Optional. Number of results to return in the list. Default to 20. |
| `params.pageToken` | `string` | No | Optional. Page start. |

#### `projects.locations.connections.gitRepositoryLinks.processGitLabEnterpriseWebhook()`

ProcessGitLabEnterpriseWebhook is called by the external GitLab Enterprise instances for notifying events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The GitRepositoryLink resource where the webhook will be received. Format: `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.processGitLabWebhook()`

ProcessGitLabWebhook is called by the GitLab.com for notifying events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The GitRepositoryLink resource where the webhook will be received. Format: `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.processBitbucketDataCenterWebhook()`

ProcessBitbucketDataCenterWebhook is called by the external Bitbucket Data Center instances for notifying events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The GitRepositoryLink where the webhook will be received. Format: `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.gitRepositoryLinks.processBitbucketCloudWebhook()`

ProcessBitbucketCloudWebhook is called by the external Bitbucket Cloud instances for notifying events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The GitRepositoryLink where the webhook will be received. Format: `projects/*/locations/*/connections/*/gitRepositoryLinks/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.accountConnectors`

#### `projects.locations.accountConnectors.list()`

Lists AccountConnectors in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListAccountConnectorsRequest |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.accountConnectors.get()`

Gets details of a single AccountConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |

#### `projects.locations.accountConnectors.create()`

Creates a new AccountConnector in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Location resource name as the account_connector’s parent. |
| `params.accountConnectorId` | `string` | No | Required. The ID to use for the AccountConnector, which will become the final component of the AccountConnector's resource name. Its format should adhere to https://google.aip.dev/122#resource-id-segments Names must be unique per-project per-location. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.accountConnectors.patch()`

Updates the parameters of a single AccountConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The resource name of the accountConnector, in the format `projects/{project}/locations/{location}/accountConnectors/{account_connector_id}`. |
| `params.updateMask` | `string` | No | Optional. The list of fields to be updated. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the accountConnector is not found a new accountConnector will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input accountConnector has all the necessary |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.accountConnectors.delete()`

Deletes a single AccountConnector.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.etag` | `string` | No | Optional. The current etag of the AccountConnectorn. If an etag is provided and does not match the current etag of the AccountConnector, deletion will be blocked and an ABORTED error will be returned. |
| `params.force` | `boolean` | No | Optional. If set to true, any Users from this AccountConnector will also be deleted. (Otherwise, the request will only work if the AccountConnector has no Users.) |

### `projects.locations.accountConnectors.users`

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
| `params.parent` | `string` | Yes | Required. Parent value for ListUsersRequest |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results |

#### `projects.locations.accountConnectors.users.delete()`

Deletes a single User.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.etag` | `string` | No | Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. |

#### `projects.locations.accountConnectors.users.fetchSelf()`

Fetch the User based on the user credentials.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AccountConnector resource |

#### `projects.locations.accountConnectors.users.deleteSelf()`

Delete the User based on the user credentials.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the AccountConnector resource |

### `projects.locations.insightsConfigs`

#### `projects.locations.insightsConfigs.list()`

Lists InsightsConfigs in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Parent value for ListInsightsConfigsRequest. |
| `params.pageSize` | `integer` | No | Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default. |
| `params.pageToken` | `string` | No | Optional. A token identifying a page of results the server should return. |
| `params.filter` | `string` | No | Optional. Filtering results. See https://google.aip.dev/160 for more details. Filter string, adhering to the rules in https://google.aip.dev/160. List only InsightsConfigs matching the filter. If filter is empty, all InsightsConfigs are listed. |
| `params.orderBy` | `string` | No | Optional. Hint for how to order the results. |

#### `projects.locations.insightsConfigs.create()`

Creates a new InsightsConfig in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Value for parent. |
| `params.insightsConfigId` | `string` | No | Required. ID of the requesting InsightsConfig. |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.insightsConfigs.get()`

Gets details of a single Insight.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the resource. |

#### `projects.locations.insightsConfigs.patch()`

Updates the parameters of a single InsightsConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Identifier. The name of the InsightsConfig. Format: projects/{project}/locations/{location}/insightsConfigs/{insightsConfig} |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.allowMissing` | `boolean` | No | Optional. If set to true, and the insightsConfig is not found a new insightsConfig will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input insightsConfig has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.insightsConfigs.delete()`

Delete a single Insight.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Value for parent. |
| `params.requestId` | `string` | No | Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). |
| `params.validateOnly` | `boolean` | No | Optional. If set, validate the request, but do not actually post it. |
| `params.etag` | `string` | No | Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding. |