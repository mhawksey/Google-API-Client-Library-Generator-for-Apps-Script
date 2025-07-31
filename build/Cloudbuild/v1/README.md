# Cloud Build API - Apps Script Client Library

Auto-generated client library for using the **Cloud Build API (version: v1)** in Google Apps Script.

## Metadata

- **Last Checked:** Thu, 31 Jul 2025 23:24:13 GMT
- **Last Modified:** Sun, 27 Jul 2025 12:23:14 GMT
- **Created:** Sun, 20 Jul 2025 16:21:19 GMT



---

## API Reference

### `operations`

#### `operations.get()`

Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource. |

#### `operations.cancel()`

Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the operation resource to be cancelled. |
| `params.resource` | `object` | Yes | The request body. |

### `projects`

### `projects.builds`

#### `projects.builds.create()`

Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the project. |
| `params.parent` | `string` | No | The parent resource where this build will be created. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.builds.get()`

Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the project. |
| `params.id` | `string` | Yes | Required. ID of the build. |
| `params.name` | `string` | No | The name of the `Build` to retrieve. Format: `projects/{project}/locations/{location}/builds/{build}` |

#### `projects.builds.list()`

Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the project. |
| `params.parent` | `string` | No | The parent of the collection of `Builds`. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | Number of results to return in the list. |
| `params.pageToken` | `string` | No | The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more. |
| `params.filter` | `string` | No | The raw filter text to constrain the results. |

#### `projects.builds.cancel()`

Cancels a build in progress.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the project. |
| `params.id` | `string` | Yes | Required. ID of the build. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.builds.retry()`

Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds:

* Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`:

* If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build.

* If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`:

* If the original build pulled source from Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source.

* If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the project. |
| `params.id` | `string` | Yes | Required. Build ID of the original build. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.builds.approve()`

Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the target build. For example: "projects/{$project_id}/builds/{$build_id}" |
| `params.resource` | `object` | Yes | The request body. |

### `projects.triggers`

#### `projects.triggers.create()`

Creates a new `BuildTrigger`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the project for which to configure automatic builds. |
| `params.parent` | `string` | No | The parent resource where this trigger will be created. Format: `projects/{project}/locations/{location}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.triggers.get()`

Returns information about a `BuildTrigger`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the project that owns the trigger. |
| `params.triggerId` | `string` | Yes | Required. Identifier (`id` or `name`) of the `BuildTrigger` to get. |
| `params.name` | `string` | No | The name of the `Trigger` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}` |

#### `projects.triggers.list()`

Lists existing `BuildTrigger`s.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the project for which to list BuildTriggers. |
| `params.parent` | `string` | No | The parent of the collection of `Triggers`. Format: `projects/{project}/locations/{location}` |
| `params.pageSize` | `integer` | No | Number of results to return in the list. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |

#### `projects.triggers.delete()`

Deletes a `BuildTrigger` by its project ID and trigger ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the project that owns the trigger. |
| `params.triggerId` | `string` | Yes | Required. ID of the `BuildTrigger` to delete. |
| `params.name` | `string` | No | The name of the `Trigger` to delete. Format: `projects/{project}/locations/{location}/triggers/{trigger}` |

#### `projects.triggers.patch()`

Updates a `BuildTrigger` by its project ID and trigger ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the project that owns the trigger. |
| `params.triggerId` | `string` | Yes | Required. ID of the `BuildTrigger` to update. |
| `params.updateMask` | `string` | No | Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.triggers.run()`

Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path (ex. v1/projects/{projectId}/locations/{region}/triggers/{triggerId}:run). The POST request that does not include the location endpoint in the path can only be used when running global triggers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Required. ID of the project. |
| `params.triggerId` | `string` | Yes | Required. ID of the trigger. |
| `params.name` | `string` | No | The name of the `Trigger` to run. Format: `projects/{project}/locations/{location}/triggers/{trigger}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.triggers.webhook()`

ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.projectId` | `string` | Yes | Project in which the specified trigger lives |
| `params.trigger` | `string` | Yes | Name of the trigger to run the payload against |
| `params.name` | `string` | No | The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}` |
| `params.secret` | `string` | No | Secret token used for authorization if an OAuth token isn't provided. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.githubEnterpriseConfigs`

#### `projects.githubEnterpriseConfigs.create()`

Create an association between a GCP project and a GitHub Enterprise server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Name of the parent project. For example: projects/{$project_number} or projects/{$project_id} |
| `params.projectId` | `string` | No | ID of the project. |
| `params.gheConfigId` | `string` | No | Optional. The ID to use for the GithubEnterpriseConfig, which will become the final component of the GithubEnterpriseConfig's resource name. ghe_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.githubEnterpriseConfigs.patch()`

Update an association between a GCP project and a GitHub Enterprise server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}" |
| `params.updateMask` | `string` | No | Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.githubEnterpriseConfigs.get()`

Retrieve a GitHubEnterpriseConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | This field should contain the name of the enterprise config resource. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}" |
| `params.projectId` | `string` | No | ID of the project |
| `params.configId` | `string` | No | Unique identifier of the `GitHubEnterpriseConfig` |

#### `projects.githubEnterpriseConfigs.list()`

List all GitHubEnterpriseConfigs for a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Name of the parent project. For example: projects/{$project_number} or projects/{$project_id} |
| `params.projectId` | `string` | No | ID of the project |

#### `projects.githubEnterpriseConfigs.delete()`

Delete an association between a GCP project and a GitHub Enterprise server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | This field should contain the name of the enterprise config resource. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}" |
| `params.projectId` | `string` | No | ID of the project |
| `params.configId` | `string` | No | Unique identifier of the `GitHubEnterpriseConfig` |

### `projects.locations`

#### `projects.locations.getDefaultServiceAccount()`

Returns the `DefaultServiceAccount` used by the project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `DefaultServiceAccount` to retrieve. Format: `projects/{project}/locations/{location}/defaultServiceAccount` |

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
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.builds`

#### `projects.locations.builds.create()`

Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource where this build will be created. Format: `projects/{project}/locations/{location}` |
| `params.projectId` | `string` | No | Required. ID of the project. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.builds.get()`

Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the `Build` to retrieve. Format: `projects/{project}/locations/{location}/builds/{build}` |
| `params.projectId` | `string` | No | Required. ID of the project. |
| `params.id` | `string` | No | Required. ID of the build. |

#### `projects.locations.builds.list()`

Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent of the collection of `Builds`. Format: `projects/{project}/locations/{location}` |
| `params.projectId` | `string` | No | Required. ID of the project. |
| `params.pageSize` | `integer` | No | Number of results to return in the list. |
| `params.pageToken` | `string` | No | The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more. |
| `params.filter` | `string` | No | The raw filter text to constrain the results. |

#### `projects.locations.builds.cancel()`

Cancels a build in progress.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the `Build` to cancel. Format: `projects/{project}/locations/{location}/builds/{build}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.builds.retry()`

Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds:

* Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`:

* If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build.

* If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`:

* If the original build pulled source from Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source.

* If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the `Build` to retry. Format: `projects/{project}/locations/{location}/builds/{build}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.builds.approve()`

Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. Name of the target build. For example: "projects/{$project_id}/builds/{$build_id}" |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.triggers`

#### `projects.locations.triggers.create()`

Creates a new `BuildTrigger`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent resource where this trigger will be created. Format: `projects/{project}/locations/{location}` |
| `params.projectId` | `string` | No | Required. ID of the project for which to configure automatic builds. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.triggers.get()`

Returns information about a `BuildTrigger`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the `Trigger` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}` |
| `params.projectId` | `string` | No | Required. ID of the project that owns the trigger. |
| `params.triggerId` | `string` | No | Required. Identifier (`id` or `name`) of the `BuildTrigger` to get. |

#### `projects.locations.triggers.list()`

Lists existing `BuildTrigger`s.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The parent of the collection of `Triggers`. Format: `projects/{project}/locations/{location}` |
| `params.projectId` | `string` | No | Required. ID of the project for which to list BuildTriggers. |
| `params.pageSize` | `integer` | No | Number of results to return in the list. |
| `params.pageToken` | `string` | No | Token to provide to skip to a particular spot in the list. |

#### `projects.locations.triggers.delete()`

Deletes a `BuildTrigger` by its project ID and trigger ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the `Trigger` to delete. Format: `projects/{project}/locations/{location}/triggers/{trigger}` |
| `params.projectId` | `string` | No | Required. ID of the project that owns the trigger. |
| `params.triggerId` | `string` | No | Required. ID of the `BuildTrigger` to delete. |

#### `projects.locations.triggers.patch()`

Updates a `BuildTrigger` by its project ID and trigger ID.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.resourceName` | `string` | Yes | The `Trigger` name with format: `projects/{project}/locations/{location}/triggers/{trigger}`, where {trigger} is a unique identifier generated by the service. |
| `params.projectId` | `string` | No | Required. ID of the project that owns the trigger. |
| `params.triggerId` | `string` | No | Required. ID of the `BuildTrigger` to update. |
| `params.updateMask` | `string` | No | Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.triggers.run()`

Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path (ex. v1/projects/{projectId}/locations/{region}/triggers/{triggerId}:run). The POST request that does not include the location endpoint in the path can only be used when running global triggers.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the `Trigger` to run. Format: `projects/{project}/locations/{location}/triggers/{trigger}` |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.triggers.webhook()`

ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}` |
| `params.projectId` | `string` | No | Project in which the specified trigger lives |
| `params.trigger` | `string` | No | Name of the trigger to run the payload against |
| `params.secret` | `string` | No | Secret token used for authorization if an OAuth token isn't provided. |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.bitbucketServerConfigs`

#### `projects.locations.bitbucketServerConfigs.create()`

Creates a new `BitbucketServerConfig`. This API is experimental.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent resource. |
| `params.bitbucketServerConfigId` | `string` | No | Optional. The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. bitbucket_server_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.bitbucketServerConfigs.patch()`

Updates an existing `BitbucketServerConfig`. This API is experimental.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name for the config. |
| `params.updateMask` | `string` | No | Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.bitbucketServerConfigs.get()`

Retrieve a `BitbucketServerConfig`. This API is experimental.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The config resource name. |

#### `projects.locations.bitbucketServerConfigs.list()`

List all `BitbucketServerConfigs` for a given project. This API is experimental.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent resource. |
| `params.pageSize` | `integer` | No | The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 50 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListBitbucketServerConfigsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBitbucketServerConfigsRequest` must match the call that provided the page token. |

#### `projects.locations.bitbucketServerConfigs.delete()`

Delete a `BitbucketServerConfig`. This API is experimental.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The config resource name. |

#### `projects.locations.bitbucketServerConfigs.removeBitbucketServerConnectedRepository()`

Remove a Bitbucket Server repository from a given BitbucketServerConfig's connected repositories. This API is experimental.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.config` | `string` | Yes | Required. The name of the `BitbucketServerConfig` to remove a connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.bitbucketServerConfigs.repos`

#### `projects.locations.bitbucketServerConfigs.repos.list()`

List all repositories for a given `BitbucketServerConfig`. This API is experimental.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent resource. |
| `params.pageSize` | `integer` | No | The maximum number of configs to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListBitbucketServerRepositoriesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBitbucketServerConfigsRequest` must match the call that provided the page token. |

### `projects.locations.bitbucketServerConfigs.connectedRepositories`

#### `projects.locations.bitbucketServerConfigs.connectedRepositories.batchCreate()`

Batch connecting Bitbucket Server repositories to Cloud Build.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.gitLabConfigs`

#### `projects.locations.gitLabConfigs.create()`

Creates a new `GitLabConfig`. This API is experimental

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent resource. |
| `params.gitlabConfigId` | `string` | No | Optional. The ID to use for the GitLabConfig, which will become the final component of the GitLabConfig’s resource name. gitlab_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.gitLabConfigs.patch()`

Updates an existing `GitLabConfig`. This API is experimental

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The resource name for the config. |
| `params.updateMask` | `string` | No | Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.gitLabConfigs.get()`

Retrieves a `GitLabConfig`. This API is experimental

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The config resource name. |

#### `projects.locations.gitLabConfigs.list()`

List all `GitLabConfigs` for a given project. This API is experimental

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent resource |
| `params.pageSize` | `integer` | No | The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 50 configs will be returned. The maximum value is 1000;, values above 1000 will be coerced to 1000. |
| `params.pageToken` | `string` | No | A page token, received from a previous ‘ListGitlabConfigsRequest’ call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ‘ListGitlabConfigsRequest’ must match the call that provided the page token. |

#### `projects.locations.gitLabConfigs.delete()`

Delete a `GitLabConfig`. This API is experimental

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The config resource name. |

#### `projects.locations.gitLabConfigs.removeGitLabConnectedRepository()`

Remove a GitLab repository from a given GitLabConfig's connected repositories. This API is experimental.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.config` | `string` | Yes | Required. The name of the `GitLabConfig` to remove a connected repository. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.gitLabConfigs.repos`

#### `projects.locations.gitLabConfigs.repos.list()`

List all repositories for a given `GitLabConfig`. This API is experimental

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. Name of the parent resource. |
| `params.pageSize` | `integer` | No | The maximum number of repositories to return. The service may return fewer than this value. |
| `params.pageToken` | `string` | No | A page token, received from a previous ListGitLabRepositoriesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGitLabRepositoriesRequest` must match the call that provided the page token. |

### `projects.locations.gitLabConfigs.connectedRepositories`

#### `projects.locations.gitLabConfigs.connectedRepositories.batchCreate()`

Batch connecting GitLab repositories to Cloud Build. This API is experimental.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | The name of the `GitLabConfig` that adds connected repositories. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}` |
| `params.resource` | `object` | Yes | The request body. |

### `projects.locations.githubEnterpriseConfigs`

#### `projects.locations.githubEnterpriseConfigs.create()`

Create an association between a GCP project and a GitHub Enterprise server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Name of the parent project. For example: projects/{$project_number} or projects/{$project_id} |
| `params.projectId` | `string` | No | ID of the project. |
| `params.gheConfigId` | `string` | No | Optional. The ID to use for the GithubEnterpriseConfig, which will become the final component of the GithubEnterpriseConfig's resource name. ghe_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.githubEnterpriseConfigs.patch()`

Update an association between a GCP project and a GitHub Enterprise server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}" |
| `params.updateMask` | `string` | No | Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.githubEnterpriseConfigs.get()`

Retrieve a GitHubEnterpriseConfig.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | This field should contain the name of the enterprise config resource. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}" |
| `params.projectId` | `string` | No | ID of the project |
| `params.configId` | `string` | No | Unique identifier of the `GitHubEnterpriseConfig` |

#### `projects.locations.githubEnterpriseConfigs.list()`

List all GitHubEnterpriseConfigs for a given project.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Name of the parent project. For example: projects/{$project_number} or projects/{$project_id} |
| `params.projectId` | `string` | No | ID of the project |

#### `projects.locations.githubEnterpriseConfigs.delete()`

Delete an association between a GCP project and a GitHub Enterprise server.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | This field should contain the name of the enterprise config resource. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}" |
| `params.projectId` | `string` | No | ID of the project |
| `params.configId` | `string` | No | Unique identifier of the `GitHubEnterpriseConfig` |

### `projects.locations.workerPools`

#### `projects.locations.workerPools.create()`

Creates a `WorkerPool`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent resource where this worker pool will be created. Format: `projects/{project}/locations/{location}`. |
| `params.workerPoolId` | `string` | No | Required. Immutable. The ID to use for the `WorkerPool`, which will become the final component of the resource name. This value should be 1-63 characters, and valid characters are /a-z-/. |
| `params.validateOnly` | `boolean` | No | If set, validate the request and preview the response, but do not actually post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workerPools.get()`

Returns details of a `WorkerPool`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `WorkerPool` to retrieve. Format: `projects/{project}/locations/{location}/workerPools/{workerPool}`. |

#### `projects.locations.workerPools.delete()`

Deletes a `WorkerPool`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Required. The name of the `WorkerPool` to delete. Format: `projects/{project}/locations/{location}/workerPools/{workerPool}`. |
| `params.etag` | `string` | No | Optional. If provided, it must match the server's etag on the workerpool for the request to be processed. |
| `params.allowMissing` | `boolean` | No | If set to true, and the `WorkerPool` is not found, the request will succeed but no action will be taken on the server. |
| `params.validateOnly` | `boolean` | No | If set, validate the request and preview the response, but do not actually post it. |

#### `projects.locations.workerPools.patch()`

Updates a `WorkerPool`.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.name` | `string` | Yes | Output only. The resource name of the `WorkerPool`, with format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. The value of `{worker_pool}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location}` is determined by the endpoint accessed. |
| `params.updateMask` | `string` | No | Optional. A mask specifying which fields in `worker_pool` to update. |
| `params.validateOnly` | `boolean` | No | If set, validate the request and preview the response, but do not actually post it. |
| `params.resource` | `object` | Yes | The request body. |

#### `projects.locations.workerPools.list()`

Lists `WorkerPool`s.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.parent` | `string` | Yes | Required. The parent of the collection of `WorkerPools`. Format: `projects/{project}/locations/{location}`. |
| `params.pageSize` | `integer` | No | The maximum number of `WorkerPool`s to return. The service may return fewer than this value. If omitted, the server will use a sensible default. |
| `params.pageToken` | `string` | No | A page token, received from a previous `ListWorkerPools` call. Provide this to retrieve the subsequent page. |

### `githubDotComWebhook`

#### `githubDotComWebhook.receive()`

ReceiveGitHubDotComWebhook is called when the API receives a github.com webhook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.webhookKey` | `string` | No | For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation. |
| `params.resource` | `object` | Yes | The request body. |

### `locations`

#### `locations.regionalWebhook()`

ReceiveRegionalWebhook is called when the API receives a regional GitHub webhook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.location` | `string` | Yes | Required. The location where the webhook should be sent. |
| `params.webhookKey` | `string` | No | For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation. |
| `params.resource` | `object` | Yes | The request body. |

### `v1`

#### `v1.webhook()`

ReceiveWebhook is called when the API receives a GitHub webhook.

| Parameter | Type | Required | Description |
|---|---|---|---|
| `params.webhookKey` | `string` | No | For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation. |
| `params.resource` | `object` | Yes | The request body. |