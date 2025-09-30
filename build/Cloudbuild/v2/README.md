# Cloud Build API - Apps Script Client Library

Auto-generated client library for using the **Cloud Build API (version: v2)** in Google Apps Script.

## Metadata

- **Last Checked:** Tue, 30 Sep 2025 23:24:41 GMT
- **Last Modified:** Sun, 21 Sep 2025 17:12:24 GMT
- **Created:** Sun, 20 Jul 2025 16:21:22 GMT



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

### `projects.locations.connections`

#### `projects.locations.connections.create()`

Creates a Connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project and location where the connection will be created. Format: `projects/*/locations/*`. |
| `params.connectionId` | `string` | No | Required. The ID to use for the Connection, which will become the final component of the Connection's resource name. Names must be unique per-project per-location. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.get()`

Gets details of a single connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Connection to retrieve. Format: `projects/*/locations/*/connections/*`. |

#### `projects.locations.connections.list()`

Lists Connections in a given project and location.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of Connections. Format: `projects/*/locations/*`. |
| `params.pageSize` | `integer` | No | Number of results to return in the list. |
| `params.pageToken` | `string` | No | Page start. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable. |

#### `projects.locations.connections.patch()`

Updates a single connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Immutable. The resource name of the connection, in the format `projects/{project}/locations/{location}/connections/{connection_id}`. |
| `params.updateMask` | `string` | No | The list of fields to be updated. |
| `params.allowMissing` | `boolean` | No | If set to true, and the connection is not found a new connection will be created. In this situation `update_mask` is ignored. The creation will succeed only if the input connection has all the necessary information (e.g a github_config with both user_oauth_token and installation_id properties). |
| `params.etag` | `string` | No | The current etag of the connection. If an etag is provided and does not match the current etag of the connection, update will be blocked and an ABORTED error will be returned. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.delete()`

Deletes a single connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Connection to delete. Format: `projects/*/locations/*/connections/*`. |
| `params.etag` | `string` | No | The current etag of the connection. If an etag is provided and does not match the current etag of the connection, deletion will be blocked and an ABORTED error will be returned. |
| `params.validateOnly` | `boolean` | No | If set, validate the request, but do not actually post it. |

#### `projects.locations.connections.processWebhook()`

ProcessWebhook is called by the external SCM for notifying of events.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Project and location where the webhook will be received. Format: `projects/*/locations/*`. |
| `params.webhookKey` | `string` | No | Arbitrary additional key to find the matching repository for a webhook event if needed. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.fetchLinkableRepositories()`

FetchLinkableRepositories get repositories from SCM that are accessible and could be added to the connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.connection` | `string` | Yes | Required. The name of the Connection. Format: `projects/*/locations/*/connections/*`. |
| `params.pageSize` | `integer` | No | Number of results to return in the list. Default to 20. |
| `params.pageToken` | `string` | No | Page start. |

#### `projects.locations.connections.setIamPolicy()`

Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.getIamPolicy()`

Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.options.requestedPolicyVersion` | `integer` | No | Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). |

#### `projects.locations.connections.testIamPermissions()`

Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resource` | `string` | Yes | REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field. |
| `params.requestBody` | `object` | Yes | The request body. |

### `projects.locations.connections.repositories`

#### `projects.locations.connections.repositories.create()`

Creates a Repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The connection to contain the repository. If the request is part of a BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there. |
| `params.repositoryId` | `string` | No | Required. The ID to use for the repository, which will become the final component of the repository's resource name. This ID should be unique in the connection. Allows alphanumeric characters and any of -._~%!$&'()*+,;=@. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.repositories.batchCreate()`

Creates multiple repositories inside a connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The connection to contain all the repositories being created. Format: projects/*/locations/*/connections/* The parent field in the CreateRepositoryRequest messages must either be empty or match this field. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.repositories.get()`

Gets details of a single repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Repository to retrieve. Format: `projects/*/locations/*/connections/*/repositories/*`. |

#### `projects.locations.connections.repositories.list()`

Lists Repositories in a given connection.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent, which owns this collection of Repositories. Format: `projects/*/locations/*/connections/*`. |
| `params.pageSize` | `integer` | No | Number of results to return in the list. |
| `params.pageToken` | `string` | No | Page start. |
| `params.filter` | `string` | No | A filter expression that filters resources listed in the response. Expressions must follow API improvement proposal [AIP-160](https://google.aip.dev/160). e.g. `remote_uri:"https://github.com*"`. |
| `params.returnPartialSuccess` | `boolean` | No | Optional. If set to true, the response will return partial results when some regions are unreachable. If set to false, the response will fail if any region is unreachable. |

#### `projects.locations.connections.repositories.delete()`

Deletes a single repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the Repository to delete. Format: `projects/*/locations/*/connections/*/repositories/*`. |
| `params.etag` | `string` | No | The current etag of the repository. If an etag is provided and does not match the current etag of the repository, deletion will be blocked and an ABORTED error will be returned. |
| `params.validateOnly` | `boolean` | No | If set, validate the request, but do not actually post it. |

#### `projects.locations.connections.repositories.accessReadWriteToken()`

Fetches read/write token of a given repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.repository` | `string` | Yes | Required. The resource name of the repository in the format `projects/*/locations/*/connections/*/repositories/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.repositories.accessReadToken()`

Fetches read token of a given repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.repository` | `string` | Yes | Required. The resource name of the repository in the format `projects/*/locations/*/connections/*/repositories/*`. |
| `params.requestBody` | `object` | Yes | The request body. |

#### `projects.locations.connections.repositories.fetchGitRefs()`

Fetch the list of branches or tags for a given repository.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.repository` | `string` | Yes | Required. The resource name of the repository in the format `projects/*/locations/*/connections/*/repositories/*`. |
| `params.refType` | `string` | No | Type of refs to fetch |
| `params.pageSize` | `integer` | No | Optional. Number of results to return in the list. Default to 20. |
| `params.pageToken` | `string` | No | Optional. Page start. |