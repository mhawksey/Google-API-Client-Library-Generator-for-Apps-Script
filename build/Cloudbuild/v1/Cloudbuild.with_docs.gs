
/**
 * Google Apps Script client library for the Cloud Build API
 * Documentation URL: https://cloud.google.com/cloud-build/docs/
 * @class
 */
class Cloudbuild {
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
    this._rootUrl = 'https://cloudbuild.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects = {};

    this.projects.builds = {};

    /**
     * Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
     * @param {string} params.parent - The parent resource where this build will be created. Format: `projects/{project}/locations/{location}`
     * @param {string} params.projectId - (Required) Required. ID of the project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.builds.create = (params) => this._makeRequest('v1/projects/{projectId}/builds', 'POST', params);

    /**
     * Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
     * @param {string} params.id - (Required) Required. ID of the build.
     * @param {string} params.name - The name of the `Build` to retrieve. Format: `projects/{project}/locations/{location}/builds/{build}`
     * @param {string} params.projectId - (Required) Required. ID of the project.
     * @return {object} The API response object.
     */
    this.projects.builds.get = (params) => this._makeRequest('v1/projects/{projectId}/builds/{id}', 'GET', params);

    /**
     * Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
     * @param {string} params.filter - The raw filter text to constrain the results.
     * @param {integer} params.pageSize - Number of results to return in the list.
     * @param {string} params.pageToken - The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
     * @param {string} params.parent - The parent of the collection of `Builds`. Format: `projects/{project}/locations/{location}`
     * @param {string} params.projectId - (Required) Required. ID of the project.
     * @return {object} The API response object.
     */
    this.projects.builds.list = (params) => this._makeRequest('v1/projects/{projectId}/builds', 'GET', params);

    /**
     * Cancels a build in progress.
     * @param {string} params.id - (Required) Required. ID of the build.
     * @param {string} params.projectId - (Required) Required. ID of the project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.builds.cancel = (params) => this._makeRequest('v1/projects/{projectId}/builds/{id}:cancel', 'POST', params);

    /**
     * Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
     * @param {string} params.id - (Required) Required. Build ID of the original build.
     * @param {string} params.projectId - (Required) Required. ID of the project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.builds.retry = (params) => this._makeRequest('v1/projects/{projectId}/builds/{id}:retry', 'POST', params);

    /**
     * Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
     * @param {string} params.name - (Required) Required. Name of the target build. For example: "projects/{$project_id}/builds/{$build_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.builds.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);

    this.projects.triggers = {};

    /**
     * Creates a new `BuildTrigger`.
     * @param {string} params.parent - The parent resource where this trigger will be created. Format: `projects/{project}/locations/{location}`
     * @param {string} params.projectId - (Required) Required. ID of the project for which to configure automatic builds.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.triggers.create = (params) => this._makeRequest('v1/projects/{projectId}/triggers', 'POST', params);

    /**
     * Returns information about a `BuildTrigger`.
     * @param {string} params.name - The name of the `Trigger` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} params.projectId - (Required) Required. ID of the project that owns the trigger.
     * @param {string} params.triggerId - (Required) Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
     * @return {object} The API response object.
     */
    this.projects.triggers.get = (params) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}', 'GET', params);

    /**
     * Lists existing `BuildTrigger`s.
     * @param {integer} params.pageSize - Number of results to return in the list.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} params.parent - The parent of the collection of `Triggers`. Format: `projects/{project}/locations/{location}`
     * @param {string} params.projectId - (Required) Required. ID of the project for which to list BuildTriggers.
     * @return {object} The API response object.
     */
    this.projects.triggers.list = (params) => this._makeRequest('v1/projects/{projectId}/triggers', 'GET', params);

    /**
     * Deletes a `BuildTrigger` by its project ID and trigger ID.
     * @param {string} params.name - The name of the `Trigger` to delete. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} params.projectId - (Required) Required. ID of the project that owns the trigger.
     * @param {string} params.triggerId - (Required) Required. ID of the `BuildTrigger` to delete.
     * @return {object} The API response object.
     */
    this.projects.triggers.delete = (params) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}', 'DELETE', params);

    /**
     * Updates a `BuildTrigger` by its project ID and trigger ID.
     * @param {string} params.projectId - (Required) Required. ID of the project that owns the trigger.
     * @param {string} params.triggerId - (Required) Required. ID of the `BuildTrigger` to update.
     * @param {string} params.updateMask - Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.triggers.patch = (params) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}', 'PATCH', params);

    /**
     * Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path (ex. v1/projects/{projectId}/locations/{region}/triggers/{triggerId}:run). The POST request that does not include the location endpoint in the path can only be used when running global triggers.
     * @param {string} params.name - The name of the `Trigger` to run. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} params.projectId - (Required) Required. ID of the project.
     * @param {string} params.triggerId - (Required) Required. ID of the trigger.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.triggers.run = (params) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}:run', 'POST', params);

    /**
     * ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
     * @param {string} params.name - The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} params.projectId - (Required) Project in which the specified trigger lives
     * @param {string} params.secret - Secret token used for authorization if an OAuth token isn't provided.
     * @param {string} params.trigger - (Required) Name of the trigger to run the payload against
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.triggers.webhook = (params) => this._makeRequest('v1/projects/{projectId}/triggers/{trigger}:webhook', 'POST', params);

    this.projects.githubEnterpriseConfigs = {};

    /**
     * Create an association between a GCP project and a GitHub Enterprise server.
     * @param {string} params.gheConfigId - Optional. The ID to use for the GithubEnterpriseConfig, which will become the final component of the GithubEnterpriseConfig's resource name. ghe_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
     * @param {string} params.parent - (Required) Name of the parent project. For example: projects/{$project_number} or projects/{$project_id}
     * @param {string} params.projectId - ID of the project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.githubEnterpriseConfigs.create = (params) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'POST', params);

    /**
     * Update an association between a GCP project and a GitHub Enterprise server.
     * @param {string} params.name - (Required) The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}"
     * @param {string} params.updateMask - Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.githubEnterpriseConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Retrieve a GitHubEnterpriseConfig.
     * @param {string} params.configId - Unique identifier of the `GitHubEnterpriseConfig`
     * @param {string} params.name - (Required) This field should contain the name of the enterprise config resource. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}"
     * @param {string} params.projectId - ID of the project
     * @return {object} The API response object.
     */
    this.projects.githubEnterpriseConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List all GitHubEnterpriseConfigs for a given project.
     * @param {string} params.parent - (Required) Name of the parent project. For example: projects/{$project_number} or projects/{$project_id}
     * @param {string} params.projectId - ID of the project
     * @return {object} The API response object.
     */
    this.projects.githubEnterpriseConfigs.list = (params) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'GET', params);

    /**
     * Delete an association between a GCP project and a GitHub Enterprise server.
     * @param {string} params.configId - Unique identifier of the `GitHubEnterpriseConfig`
     * @param {string} params.name - (Required) This field should contain the name of the enterprise config resource. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}"
     * @param {string} params.projectId - ID of the project
     * @return {object} The API response object.
     */
    this.projects.githubEnterpriseConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations = {};

    /**
     * Returns the `DefaultServiceAccount` used by the project.
     * @param {string} params.name - (Required) Required. The name of the `DefaultServiceAccount` to retrieve. Format: `projects/{project}/locations/{location}/defaultServiceAccount`
     * @return {object} The API response object.
     */
    this.projects.locations.getDefaultServiceAccount = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.builds = {};

    /**
     * Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
     * @param {string} params.parent - (Required) The parent resource where this build will be created. Format: `projects/{project}/locations/{location}`
     * @param {string} params.projectId - Required. ID of the project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.builds.create = (params) => this._makeRequest('v1/{+parent}/builds', 'POST', params);

    /**
     * Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
     * @param {string} params.id - Required. ID of the build.
     * @param {string} params.name - (Required) The name of the `Build` to retrieve. Format: `projects/{project}/locations/{location}/builds/{build}`
     * @param {string} params.projectId - Required. ID of the project.
     * @return {object} The API response object.
     */
    this.projects.locations.builds.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
     * @param {string} params.filter - The raw filter text to constrain the results.
     * @param {integer} params.pageSize - Number of results to return in the list.
     * @param {string} params.pageToken - The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
     * @param {string} params.parent - (Required) The parent of the collection of `Builds`. Format: `projects/{project}/locations/{location}`
     * @param {string} params.projectId - Required. ID of the project.
     * @return {object} The API response object.
     */
    this.projects.locations.builds.list = (params) => this._makeRequest('v1/{+parent}/builds', 'GET', params);

    /**
     * Cancels a build in progress.
     * @param {string} params.name - (Required) The name of the `Build` to cancel. Format: `projects/{project}/locations/{location}/builds/{build}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.builds.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
     * @param {string} params.name - (Required) The name of the `Build` to retry. Format: `projects/{project}/locations/{location}/builds/{build}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.builds.retry = (params) => this._makeRequest('v1/{+name}:retry', 'POST', params);

    /**
     * Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
     * @param {string} params.name - (Required) Required. Name of the target build. For example: "projects/{$project_id}/builds/{$build_id}"
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.builds.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);

    this.projects.locations.triggers = {};

    /**
     * Creates a new `BuildTrigger`.
     * @param {string} params.parent - (Required) The parent resource where this trigger will be created. Format: `projects/{project}/locations/{location}`
     * @param {string} params.projectId - Required. ID of the project for which to configure automatic builds.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.create = (params) => this._makeRequest('v1/{+parent}/triggers', 'POST', params);

    /**
     * Returns information about a `BuildTrigger`.
     * @param {string} params.name - (Required) The name of the `Trigger` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} params.projectId - Required. ID of the project that owns the trigger.
     * @param {string} params.triggerId - Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists existing `BuildTrigger`s.
     * @param {integer} params.pageSize - Number of results to return in the list.
     * @param {string} params.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} params.parent - (Required) The parent of the collection of `Triggers`. Format: `projects/{project}/locations/{location}`
     * @param {string} params.projectId - Required. ID of the project for which to list BuildTriggers.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.list = (params) => this._makeRequest('v1/{+parent}/triggers', 'GET', params);

    /**
     * Deletes a `BuildTrigger` by its project ID and trigger ID.
     * @param {string} params.name - (Required) The name of the `Trigger` to delete. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} params.projectId - Required. ID of the project that owns the trigger.
     * @param {string} params.triggerId - Required. ID of the `BuildTrigger` to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a `BuildTrigger` by its project ID and trigger ID.
     * @param {string} params.projectId - Required. ID of the project that owns the trigger.
     * @param {string} params.resourceName - (Required) The `Trigger` name with format: `projects/{project}/locations/{location}/triggers/{trigger}`, where {trigger} is a unique identifier generated by the service.
     * @param {string} params.triggerId - Required. ID of the `BuildTrigger` to update.
     * @param {string} params.updateMask - Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.patch = (params) => this._makeRequest('v1/{+resourceName}', 'PATCH', params);

    /**
     * Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path (ex. v1/projects/{projectId}/locations/{region}/triggers/{triggerId}:run). The POST request that does not include the location endpoint in the path can only be used when running global triggers.
     * @param {string} params.name - (Required) The name of the `Trigger` to run. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.run = (params) => this._makeRequest('v1/{+name}:run', 'POST', params);

    /**
     * ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
     * @param {string} params.name - (Required) The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} params.projectId - Project in which the specified trigger lives
     * @param {string} params.secret - Secret token used for authorization if an OAuth token isn't provided.
     * @param {string} params.trigger - Name of the trigger to run the payload against
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.triggers.webhook = (params) => this._makeRequest('v1/{+name}:webhook', 'POST', params);

    this.projects.locations.bitbucketServerConfigs = {};

    /**
     * Creates a new `BitbucketServerConfig`. This API is experimental.
     * @param {string} params.bitbucketServerConfigId - Optional. The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. bitbucket_server_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character.
     * @param {string} params.parent - (Required) Required. Name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bitbucketServerConfigs.create = (params) => this._makeRequest('v1/{+parent}/bitbucketServerConfigs', 'POST', params);

    /**
     * Updates an existing `BitbucketServerConfig`. This API is experimental.
     * @param {string} params.name - (Required) The resource name for the config.
     * @param {string} params.updateMask - Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bitbucketServerConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Retrieve a `BitbucketServerConfig`. This API is experimental.
     * @param {string} params.name - (Required) Required. The config resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.bitbucketServerConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List all `BitbucketServerConfigs` for a given project. This API is experimental.
     * @param {integer} params.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 50 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListBitbucketServerConfigsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBitbucketServerConfigsRequest` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent resource.
     * @return {object} The API response object.
     */
    this.projects.locations.bitbucketServerConfigs.list = (params) => this._makeRequest('v1/{+parent}/bitbucketServerConfigs', 'GET', params);

    /**
     * Delete a `BitbucketServerConfig`. This API is experimental.
     * @param {string} params.name - (Required) Required. The config resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.bitbucketServerConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Remove a Bitbucket Server repository from a given BitbucketServerConfig's connected repositories. This API is experimental.
     * @param {string} params.config - (Required) Required. The name of the `BitbucketServerConfig` to remove a connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bitbucketServerConfigs.removeBitbucketServerConnectedRepository = (params) => this._makeRequest('v1/{+config}:removeBitbucketServerConnectedRepository', 'POST', params);

    this.projects.locations.bitbucketServerConfigs.repos = {};

    /**
     * List all repositories for a given `BitbucketServerConfig`. This API is experimental.
     * @param {integer} params.pageSize - The maximum number of configs to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListBitbucketServerRepositoriesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBitbucketServerConfigsRequest` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent resource.
     * @return {object} The API response object.
     */
    this.projects.locations.bitbucketServerConfigs.repos.list = (params) => this._makeRequest('v1/{+parent}/repos', 'GET', params);

    this.projects.locations.bitbucketServerConfigs.connectedRepositories = {};

    /**
     * Batch connecting Bitbucket Server repositories to Cloud Build.
     * @param {string} params.parent - (Required) The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.bitbucketServerConfigs.connectedRepositories.batchCreate = (params) => this._makeRequest('v1/{+parent}/connectedRepositories:batchCreate', 'POST', params);

    this.projects.locations.gitLabConfigs = {};

    /**
     * Creates a new `GitLabConfig`. This API is experimental
     * @param {string} params.gitlabConfigId - Optional. The ID to use for the GitLabConfig, which will become the final component of the GitLabConfig’s resource name. gitlab_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
     * @param {string} params.parent - (Required) Required. Name of the parent resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gitLabConfigs.create = (params) => this._makeRequest('v1/{+parent}/gitLabConfigs', 'POST', params);

    /**
     * Updates an existing `GitLabConfig`. This API is experimental
     * @param {string} params.name - (Required) The resource name for the config.
     * @param {string} params.updateMask - Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gitLabConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Retrieves a `GitLabConfig`. This API is experimental
     * @param {string} params.name - (Required) Required. The config resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.gitLabConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List all `GitLabConfigs` for a given project. This API is experimental
     * @param {integer} params.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 50 configs will be returned. The maximum value is 1000;, values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - A page token, received from a previous ‘ListGitlabConfigsRequest’ call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ‘ListGitlabConfigsRequest’ must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent resource
     * @return {object} The API response object.
     */
    this.projects.locations.gitLabConfigs.list = (params) => this._makeRequest('v1/{+parent}/gitLabConfigs', 'GET', params);

    /**
     * Delete a `GitLabConfig`. This API is experimental
     * @param {string} params.name - (Required) Required. The config resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.gitLabConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Remove a GitLab repository from a given GitLabConfig's connected repositories. This API is experimental.
     * @param {string} params.config - (Required) Required. The name of the `GitLabConfig` to remove a connected repository. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gitLabConfigs.removeGitLabConnectedRepository = (params) => this._makeRequest('v1/{+config}:removeGitLabConnectedRepository', 'POST', params);

    this.projects.locations.gitLabConfigs.repos = {};

    /**
     * List all repositories for a given `GitLabConfig`. This API is experimental
     * @param {integer} params.pageSize - The maximum number of repositories to return. The service may return fewer than this value.
     * @param {string} params.pageToken - A page token, received from a previous ListGitLabRepositoriesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGitLabRepositoriesRequest` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. Name of the parent resource.
     * @return {object} The API response object.
     */
    this.projects.locations.gitLabConfigs.repos.list = (params) => this._makeRequest('v1/{+parent}/repos', 'GET', params);

    this.projects.locations.gitLabConfigs.connectedRepositories = {};

    /**
     * Batch connecting GitLab repositories to Cloud Build. This API is experimental.
     * @param {string} params.parent - (Required) The name of the `GitLabConfig` that adds connected repositories. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.gitLabConfigs.connectedRepositories.batchCreate = (params) => this._makeRequest('v1/{+parent}/connectedRepositories:batchCreate', 'POST', params);

    this.projects.locations.githubEnterpriseConfigs = {};

    /**
     * Create an association between a GCP project and a GitHub Enterprise server.
     * @param {string} params.gheConfigId - Optional. The ID to use for the GithubEnterpriseConfig, which will become the final component of the GithubEnterpriseConfig's resource name. ghe_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
     * @param {string} params.parent - (Required) Name of the parent project. For example: projects/{$project_number} or projects/{$project_id}
     * @param {string} params.projectId - ID of the project.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.githubEnterpriseConfigs.create = (params) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'POST', params);

    /**
     * Update an association between a GCP project and a GitHub Enterprise server.
     * @param {string} params.name - (Required) The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}"
     * @param {string} params.updateMask - Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.githubEnterpriseConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Retrieve a GitHubEnterpriseConfig.
     * @param {string} params.configId - Unique identifier of the `GitHubEnterpriseConfig`
     * @param {string} params.name - (Required) This field should contain the name of the enterprise config resource. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}"
     * @param {string} params.projectId - ID of the project
     * @return {object} The API response object.
     */
    this.projects.locations.githubEnterpriseConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List all GitHubEnterpriseConfigs for a given project.
     * @param {string} params.parent - (Required) Name of the parent project. For example: projects/{$project_number} or projects/{$project_id}
     * @param {string} params.projectId - ID of the project
     * @return {object} The API response object.
     */
    this.projects.locations.githubEnterpriseConfigs.list = (params) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'GET', params);

    /**
     * Delete an association between a GCP project and a GitHub Enterprise server.
     * @param {string} params.configId - Unique identifier of the `GitHubEnterpriseConfig`
     * @param {string} params.name - (Required) This field should contain the name of the enterprise config resource. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}"
     * @param {string} params.projectId - ID of the project
     * @return {object} The API response object.
     */
    this.projects.locations.githubEnterpriseConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.workerPools = {};

    /**
     * Creates a `WorkerPool`.
     * @param {string} params.parent - (Required) Required. The parent resource where this worker pool will be created. Format: `projects/{project}/locations/{location}`.
     * @param {boolean} params.validateOnly - If set, validate the request and preview the response, but do not actually post it.
     * @param {string} params.workerPoolId - Required. Immutable. The ID to use for the `WorkerPool`, which will become the final component of the resource name. This value should be 1-63 characters, and valid characters are /a-z-/.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.create = (params) => this._makeRequest('v1/{+parent}/workerPools', 'POST', params);

    /**
     * Returns details of a `WorkerPool`.
     * @param {string} params.name - (Required) Required. The name of the `WorkerPool` to retrieve. Format: `projects/{project}/locations/{location}/workerPools/{workerPool}`.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a `WorkerPool`.
     * @param {boolean} params.allowMissing - If set to true, and the `WorkerPool` is not found, the request will succeed but no action will be taken on the server.
     * @param {string} params.etag - Optional. If provided, it must match the server's etag on the workerpool for the request to be processed.
     * @param {string} params.name - (Required) Required. The name of the `WorkerPool` to delete. Format: `projects/{project}/locations/{location}/workerPools/{workerPool}`.
     * @param {boolean} params.validateOnly - If set, validate the request and preview the response, but do not actually post it.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a `WorkerPool`.
     * @param {string} params.name - (Required) Output only. The resource name of the `WorkerPool`, with format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. The value of `{worker_pool}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location}` is determined by the endpoint accessed.
     * @param {string} params.updateMask - Optional. A mask specifying which fields in `worker_pool` to update.
     * @param {boolean} params.validateOnly - If set, validate the request and preview the response, but do not actually post it.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Lists `WorkerPool`s.
     * @param {integer} params.pageSize - The maximum number of `WorkerPool`s to return. The service may return fewer than this value. If omitted, the server will use a sensible default.
     * @param {string} params.pageToken - A page token, received from a previous `ListWorkerPools` call. Provide this to retrieve the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent of the collection of `WorkerPools`. Format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.list = (params) => this._makeRequest('v1/{+parent}/workerPools', 'GET', params);

    this.githubDotComWebhook = {};

    /**
     * ReceiveGitHubDotComWebhook is called when the API receives a github.com webhook.
     * @param {string} params.webhookKey - For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.githubDotComWebhook.receive = (params) => this._makeRequest('v1/githubDotComWebhook:receive', 'POST', params);

    this.locations = {};

    /**
     * ReceiveRegionalWebhook is called when the API receives a regional GitHub webhook.
     * @param {string} params.location - (Required) Required. The location where the webhook should be sent.
     * @param {string} params.webhookKey - For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.locations.regionalWebhook = (params) => this._makeRequest('v1/{+location}/regionalWebhook', 'POST', params);

    this.v1 = {};

    /**
     * ReceiveWebhook is called when the API receives a GitHub webhook.
     * @param {string} params.webhookKey - For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.v1.webhook = (params) => this._makeRequest('v1/webhook', 'POST', params);
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
