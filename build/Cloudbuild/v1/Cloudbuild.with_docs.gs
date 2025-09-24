
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://cloudbuild.googleapis.com/';
    this._servicePath = '';


    this.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects = {};

    this.projects.builds = {};

    /**
     * Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - The parent resource where this build will be created. Format: `projects/{project}/locations/{location}`
     * @param {string} apiParams.projectId - (Required) Required. ID of the project.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.builds.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/builds', 'POST', apiParams, clientConfig);

    /**
     * Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. ID of the build.
     * @param {string} apiParams.name - The name of the `Build` to retrieve. Format: `projects/{project}/locations/{location}/builds/{build}`
     * @param {string} apiParams.projectId - (Required) Required. ID of the project.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.builds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/builds/{id}', 'GET', apiParams, clientConfig);

    /**
     * Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The raw filter text to constrain the results.
     * @param {integer} apiParams.pageSize - Number of results to return in the list.
     * @param {string} apiParams.pageToken - The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
     * @param {string} apiParams.parent - The parent of the collection of `Builds`. Format: `projects/{project}/locations/{location}`
     * @param {string} apiParams.projectId - (Required) Required. ID of the project.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.builds.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/builds', 'GET', apiParams, clientConfig);

    /**
     * Cancels a build in progress.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. ID of the build.
     * @param {string} apiParams.projectId - (Required) Required. ID of the project.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.builds.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/builds/{id}:cancel', 'POST', apiParams, clientConfig);

    /**
     * Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - (Required) Required. Build ID of the original build.
     * @param {string} apiParams.projectId - (Required) Required. ID of the project.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.builds.retry = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/builds/{id}:retry', 'POST', apiParams, clientConfig);

    /**
     * Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the target build. For example: "projects/{$project_id}/builds/{$build_id}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.builds.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:approve', 'POST', apiParams, clientConfig);

    this.projects.triggers = {};

    /**
     * Creates a new `BuildTrigger`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - The parent resource where this trigger will be created. Format: `projects/{project}/locations/{location}`
     * @param {string} apiParams.projectId - (Required) Required. ID of the project for which to configure automatic builds.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.triggers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers', 'POST', apiParams, clientConfig);

    /**
     * Returns information about a `BuildTrigger`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - The name of the `Trigger` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} apiParams.projectId - (Required) Required. ID of the project that owns the trigger.
     * @param {string} apiParams.triggerId - (Required) Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.triggers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}', 'GET', apiParams, clientConfig);

    /**
     * Lists existing `BuildTrigger`s.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Number of results to return in the list.
     * @param {string} apiParams.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} apiParams.parent - The parent of the collection of `Triggers`. Format: `projects/{project}/locations/{location}`
     * @param {string} apiParams.projectId - (Required) Required. ID of the project for which to list BuildTriggers.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.triggers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers', 'GET', apiParams, clientConfig);

    /**
     * Deletes a `BuildTrigger` by its project ID and trigger ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - The name of the `Trigger` to delete. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} apiParams.projectId - (Required) Required. ID of the project that owns the trigger.
     * @param {string} apiParams.triggerId - (Required) Required. ID of the `BuildTrigger` to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.triggers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a `BuildTrigger` by its project ID and trigger ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - (Required) Required. ID of the project that owns the trigger.
     * @param {string} apiParams.triggerId - (Required) Required. ID of the `BuildTrigger` to update.
     * @param {string} apiParams.updateMask - Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.triggers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}', 'PATCH', apiParams, clientConfig);

    /**
     * Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path (ex. v1/projects/{projectId}/locations/{region}/triggers/{triggerId}:run). The POST request that does not include the location endpoint in the path can only be used when running global triggers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - The name of the `Trigger` to run. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} apiParams.projectId - (Required) Required. ID of the project.
     * @param {string} apiParams.triggerId - (Required) Required. ID of the trigger.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.triggers.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers/{triggerId}:run', 'POST', apiParams, clientConfig);

    /**
     * ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} apiParams.projectId - (Required) Project in which the specified trigger lives
     * @param {string} apiParams.secret - Secret token used for authorization if an OAuth token isn't provided.
     * @param {string} apiParams.trigger - (Required) Name of the trigger to run the payload against
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.triggers.webhook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/projects/{projectId}/triggers/{trigger}:webhook', 'POST', apiParams, clientConfig);

    this.projects.githubEnterpriseConfigs = {};

    /**
     * Create an association between a GCP project and a GitHub Enterprise server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.gheConfigId - Optional. The ID to use for the GithubEnterpriseConfig, which will become the final component of the GithubEnterpriseConfig's resource name. ghe_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
     * @param {string} apiParams.parent - (Required) Name of the parent project. For example: projects/{$project_number} or projects/{$project_id}
     * @param {string} apiParams.projectId - ID of the project.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.githubEnterpriseConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'POST', apiParams, clientConfig);

    /**
     * Update an association between a GCP project and a GitHub Enterprise server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}"
     * @param {string} apiParams.updateMask - Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.githubEnterpriseConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Retrieve a GitHubEnterpriseConfig.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.configId - Unique identifier of the `GitHubEnterpriseConfig`
     * @param {string} apiParams.name - (Required) This field should contain the name of the enterprise config resource. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}"
     * @param {string} apiParams.projectId - ID of the project
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.githubEnterpriseConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List all GitHubEnterpriseConfigs for a given project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Name of the parent project. For example: projects/{$project_number} or projects/{$project_id}
     * @param {string} apiParams.projectId - ID of the project
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.githubEnterpriseConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'GET', apiParams, clientConfig);

    /**
     * Delete an association between a GCP project and a GitHub Enterprise server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.configId - Unique identifier of the `GitHubEnterpriseConfig`
     * @param {string} apiParams.name - (Required) This field should contain the name of the enterprise config resource. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}"
     * @param {string} apiParams.projectId - ID of the project
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.githubEnterpriseConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations = {};

    /**
     * Returns the `DefaultServiceAccount` used by the project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the `DefaultServiceAccount` to retrieve. Format: `projects/{project}/locations/{location}/defaultServiceAccount`
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.getDefaultServiceAccount = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    this.projects.locations.operations = {};

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.operations.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    this.projects.locations.builds = {};

    /**
     * Starts a build with the specified configuration. This method returns a long-running `Operation`, which includes the build ID. Pass the build ID to `GetBuild` to determine the build status (such as `SUCCESS` or `FAILURE`).
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The parent resource where this build will be created. Format: `projects/{project}/locations/{location}`
     * @param {string} apiParams.projectId - Required. ID of the project.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.builds.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/builds', 'POST', apiParams, clientConfig);

    /**
     * Returns information about a previously requested build. The `Build` that is returned includes its status (such as `SUCCESS`, `FAILURE`, or `WORKING`), and timing information.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.id - Required. ID of the build.
     * @param {string} apiParams.name - (Required) The name of the `Build` to retrieve. Format: `projects/{project}/locations/{location}/builds/{build}`
     * @param {string} apiParams.projectId - Required. ID of the project.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.builds.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists previously requested builds. Previously requested builds may still be in-progress, or may have finished successfully or unsuccessfully.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The raw filter text to constrain the results.
     * @param {integer} apiParams.pageSize - Number of results to return in the list.
     * @param {string} apiParams.pageToken - The page token for the next page of Builds. If unspecified, the first page of results is returned. If the token is rejected for any reason, INVALID_ARGUMENT will be thrown. In this case, the token should be discarded, and pagination should be restarted from the first page of results. See https://google.aip.dev/158 for more.
     * @param {string} apiParams.parent - (Required) The parent of the collection of `Builds`. Format: `projects/{project}/locations/{location}`
     * @param {string} apiParams.projectId - Required. ID of the project.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.builds.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/builds', 'GET', apiParams, clientConfig);

    /**
     * Cancels a build in progress.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the `Build` to cancel. Format: `projects/{project}/locations/{location}/builds/{build}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.builds.cancel = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:cancel', 'POST', apiParams, clientConfig);

    /**
     * Creates a new build based on the specified build. This method creates a new build using the original build request, which may or may not result in an identical build. For triggered builds: * Triggered builds resolve to a precise revision; therefore a retry of a triggered build will result in a build that uses the same revision. For non-triggered builds that specify `RepoSource`: * If the original build built from the tip of a branch, the retried build will build from the tip of that branch, which may not be the same revision as the original build. * If the original build specified a commit sha or revision ID, the retried build will use the identical source. For builds that specify `StorageSource`: * If the original build pulled source from Cloud Storage without specifying the generation of the object, the new build will use the current object, which may be different from the original build source. * If the original build pulled source from Cloud Storage and specified the generation of the object, the new build will attempt to use the same object, which may or may not be available depending on the bucket's lifecycle management settings.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the `Build` to retry. Format: `projects/{project}/locations/{location}/builds/{build}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.builds.retry = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:retry', 'POST', apiParams, clientConfig);

    /**
     * Approves or rejects a pending build. If approved, the returned LRO will be analogous to the LRO returned from a CreateBuild call. If rejected, the returned LRO will be immediately done.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. Name of the target build. For example: "projects/{$project_id}/builds/{$build_id}"
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.builds.approve = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:approve', 'POST', apiParams, clientConfig);

    this.projects.locations.triggers = {};

    /**
     * Creates a new `BuildTrigger`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The parent resource where this trigger will be created. Format: `projects/{project}/locations/{location}`
     * @param {string} apiParams.projectId - Required. ID of the project for which to configure automatic builds.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.triggers.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/triggers', 'POST', apiParams, clientConfig);

    /**
     * Returns information about a `BuildTrigger`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the `Trigger` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} apiParams.projectId - Required. ID of the project that owns the trigger.
     * @param {string} apiParams.triggerId - Required. Identifier (`id` or `name`) of the `BuildTrigger` to get.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.triggers.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Lists existing `BuildTrigger`s.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - Number of results to return in the list.
     * @param {string} apiParams.pageToken - Token to provide to skip to a particular spot in the list.
     * @param {string} apiParams.parent - (Required) The parent of the collection of `Triggers`. Format: `projects/{project}/locations/{location}`
     * @param {string} apiParams.projectId - Required. ID of the project for which to list BuildTriggers.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.triggers.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/triggers', 'GET', apiParams, clientConfig);

    /**
     * Deletes a `BuildTrigger` by its project ID and trigger ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the `Trigger` to delete. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} apiParams.projectId - Required. ID of the project that owns the trigger.
     * @param {string} apiParams.triggerId - Required. ID of the `BuildTrigger` to delete.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.triggers.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a `BuildTrigger` by its project ID and trigger ID.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - Required. ID of the project that owns the trigger.
     * @param {string} apiParams.resourceName - (Required) The `Trigger` name with format: `projects/{project}/locations/{location}/triggers/{trigger}`, where {trigger} is a unique identifier generated by the service.
     * @param {string} apiParams.triggerId - Required. ID of the `BuildTrigger` to update.
     * @param {string} apiParams.updateMask - Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.triggers.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+resourceName}', 'PATCH', apiParams, clientConfig);

    /**
     * Runs a `BuildTrigger` at a particular source revision. To run a regional or global trigger, use the POST request that includes the location endpoint in the path (ex. v1/projects/{projectId}/locations/{region}/triggers/{triggerId}:run). The POST request that does not include the location endpoint in the path can only be used when running global triggers.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the `Trigger` to run. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.triggers.run = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:run', 'POST', apiParams, clientConfig);

    /**
     * ReceiveTriggerWebhook [Experimental] is called when the API receives a webhook request targeted at a specific trigger.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The name of the `ReceiveTriggerWebhook` to retrieve. Format: `projects/{project}/locations/{location}/triggers/{trigger}`
     * @param {string} apiParams.projectId - Project in which the specified trigger lives
     * @param {string} apiParams.secret - Secret token used for authorization if an OAuth token isn't provided.
     * @param {string} apiParams.trigger - Name of the trigger to run the payload against
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.triggers.webhook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}:webhook', 'POST', apiParams, clientConfig);

    this.projects.locations.bitbucketServerConfigs = {};

    /**
     * Creates a new `BitbucketServerConfig`. This API is experimental.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.bitbucketServerConfigId - Optional. The ID to use for the BitbucketServerConfig, which will become the final component of the BitbucketServerConfig's resource name. bitbucket_server_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bitbucketServerConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bitbucketServerConfigs', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing `BitbucketServerConfig`. This API is experimental.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name for the config.
     * @param {string} apiParams.updateMask - Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bitbucketServerConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Retrieve a `BitbucketServerConfig`. This API is experimental.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The config resource name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bitbucketServerConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List all `BitbucketServerConfigs` for a given project. This API is experimental.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 50 configs will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListBitbucketServerConfigsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBitbucketServerConfigsRequest` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bitbucketServerConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/bitbucketServerConfigs', 'GET', apiParams, clientConfig);

    /**
     * Delete a `BitbucketServerConfig`. This API is experimental.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The config resource name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bitbucketServerConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Remove a Bitbucket Server repository from a given BitbucketServerConfig's connected repositories. This API is experimental.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.config - (Required) Required. The name of the `BitbucketServerConfig` to remove a connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bitbucketServerConfigs.removeBitbucketServerConnectedRepository = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+config}:removeBitbucketServerConnectedRepository', 'POST', apiParams, clientConfig);

    this.projects.locations.bitbucketServerConfigs.repos = {};

    /**
     * List all repositories for a given `BitbucketServerConfig`. This API is experimental.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of configs to return. The service may return fewer than this value. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListBitbucketServerRepositoriesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListBitbucketServerConfigsRequest` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bitbucketServerConfigs.repos.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/repos', 'GET', apiParams, clientConfig);

    this.projects.locations.bitbucketServerConfigs.connectedRepositories = {};

    /**
     * Batch connecting Bitbucket Server repositories to Cloud Build.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The name of the `BitbucketServerConfig` that added connected repository. Format: `projects/{project}/locations/{location}/bitbucketServerConfigs/{config}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.bitbucketServerConfigs.connectedRepositories.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectedRepositories:batchCreate', 'POST', apiParams, clientConfig);

    this.projects.locations.gitLabConfigs = {};

    /**
     * Creates a new `GitLabConfig`. This API is experimental
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.gitlabConfigId - Optional. The ID to use for the GitLabConfig, which will become the final component of the GitLabConfig’s resource name. gitlab_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
     * @param {string} apiParams.parent - (Required) Required. Name of the parent resource.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.gitLabConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/gitLabConfigs', 'POST', apiParams, clientConfig);

    /**
     * Updates an existing `GitLabConfig`. This API is experimental
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The resource name for the config.
     * @param {string} apiParams.updateMask - Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.gitLabConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Retrieves a `GitLabConfig`. This API is experimental
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The config resource name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.gitLabConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List all `GitLabConfigs` for a given project. This API is experimental
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of configs to return. The service may return fewer than this value. If unspecified, at most 50 configs will be returned. The maximum value is 1000;, values above 1000 will be coerced to 1000.
     * @param {string} apiParams.pageToken - A page token, received from a previous ‘ListGitlabConfigsRequest’ call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to ‘ListGitlabConfigsRequest’ must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent resource
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.gitLabConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/gitLabConfigs', 'GET', apiParams, clientConfig);

    /**
     * Delete a `GitLabConfig`. This API is experimental
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The config resource name.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.gitLabConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Remove a GitLab repository from a given GitLabConfig's connected repositories. This API is experimental.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.config - (Required) Required. The name of the `GitLabConfig` to remove a connected repository. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.gitLabConfigs.removeGitLabConnectedRepository = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+config}:removeGitLabConnectedRepository', 'POST', apiParams, clientConfig);

    this.projects.locations.gitLabConfigs.repos = {};

    /**
     * List all repositories for a given `GitLabConfig`. This API is experimental
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of repositories to return. The service may return fewer than this value.
     * @param {string} apiParams.pageToken - A page token, received from a previous ListGitLabRepositoriesRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListGitLabRepositoriesRequest` must match the call that provided the page token.
     * @param {string} apiParams.parent - (Required) Required. Name of the parent resource.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.gitLabConfigs.repos.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/repos', 'GET', apiParams, clientConfig);

    this.projects.locations.gitLabConfigs.connectedRepositories = {};

    /**
     * Batch connecting GitLab repositories to Cloud Build. This API is experimental.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) The name of the `GitLabConfig` that adds connected repositories. Format: `projects/{project}/locations/{location}/gitLabConfigs/{config}`
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.gitLabConfigs.connectedRepositories.batchCreate = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/connectedRepositories:batchCreate', 'POST', apiParams, clientConfig);

    this.projects.locations.githubEnterpriseConfigs = {};

    /**
     * Create an association between a GCP project and a GitHub Enterprise server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.gheConfigId - Optional. The ID to use for the GithubEnterpriseConfig, which will become the final component of the GithubEnterpriseConfig's resource name. ghe_config_id must meet the following requirements: + They must contain only alphanumeric characters and dashes. + They can be 1-64 characters long. + They must begin and end with an alphanumeric character
     * @param {string} apiParams.parent - (Required) Name of the parent project. For example: projects/{$project_number} or projects/{$project_id}
     * @param {string} apiParams.projectId - ID of the project.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.githubEnterpriseConfigs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'POST', apiParams, clientConfig);

    /**
     * Update an association between a GCP project and a GitHub Enterprise server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) The full resource name for the GitHubEnterpriseConfig For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}"
     * @param {string} apiParams.updateMask - Update mask for the resource. If this is set, the server will only update the fields specified in the field mask. Otherwise, a full update of the mutable resource fields will be performed.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.githubEnterpriseConfigs.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Retrieve a GitHubEnterpriseConfig.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.configId - Unique identifier of the `GitHubEnterpriseConfig`
     * @param {string} apiParams.name - (Required) This field should contain the name of the enterprise config resource. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}"
     * @param {string} apiParams.projectId - ID of the project
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.githubEnterpriseConfigs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * List all GitHubEnterpriseConfigs for a given project.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Name of the parent project. For example: projects/{$project_number} or projects/{$project_id}
     * @param {string} apiParams.projectId - ID of the project
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.githubEnterpriseConfigs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/githubEnterpriseConfigs', 'GET', apiParams, clientConfig);

    /**
     * Delete an association between a GCP project and a GitHub Enterprise server.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.configId - Unique identifier of the `GitHubEnterpriseConfig`
     * @param {string} apiParams.name - (Required) This field should contain the name of the enterprise config resource. For example: "projects/{$project_id}/locations/{$location_id}/githubEnterpriseConfigs/{$config_id}"
     * @param {string} apiParams.projectId - ID of the project
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.githubEnterpriseConfigs.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    this.projects.locations.workerPools = {};

    /**
     * Creates a `WorkerPool`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.parent - (Required) Required. The parent resource where this worker pool will be created. Format: `projects/{project}/locations/{location}`.
     * @param {boolean} apiParams.validateOnly - If set, validate the request and preview the response, but do not actually post it.
     * @param {string} apiParams.workerPoolId - Required. Immutable. The ID to use for the `WorkerPool`, which will become the final component of the resource name. This value should be 1-63 characters, and valid characters are /a-z-/.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workerPools.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workerPools', 'POST', apiParams, clientConfig);

    /**
     * Returns details of a `WorkerPool`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Required. The name of the `WorkerPool` to retrieve. Format: `projects/{project}/locations/{location}/workerPools/{workerPool}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workerPools.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a `WorkerPool`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {boolean} apiParams.allowMissing - If set to true, and the `WorkerPool` is not found, the request will succeed but no action will be taken on the server.
     * @param {string} apiParams.etag - Optional. If provided, it must match the server's etag on the workerpool for the request to be processed.
     * @param {string} apiParams.name - (Required) Required. The name of the `WorkerPool` to delete. Format: `projects/{project}/locations/{location}/workerPools/{workerPool}`.
     * @param {boolean} apiParams.validateOnly - If set, validate the request and preview the response, but do not actually post it.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workerPools.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'DELETE', apiParams, clientConfig);

    /**
     * Updates a `WorkerPool`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.name - (Required) Output only. The resource name of the `WorkerPool`, with format `projects/{project}/locations/{location}/workerPools/{worker_pool}`. The value of `{worker_pool}` is provided by `worker_pool_id` in `CreateWorkerPool` request and the value of `{location}` is determined by the endpoint accessed.
     * @param {string} apiParams.updateMask - Optional. A mask specifying which fields in `worker_pool` to update.
     * @param {boolean} apiParams.validateOnly - If set, validate the request and preview the response, but do not actually post it.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workerPools.patch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+name}', 'PATCH', apiParams, clientConfig);

    /**
     * Lists `WorkerPool`s.
     * @param {object} apiParams - The parameters for the API request.
     * @param {integer} apiParams.pageSize - The maximum number of `WorkerPool`s to return. The service may return fewer than this value. If omitted, the server will use a sensible default.
     * @param {string} apiParams.pageToken - A page token, received from a previous `ListWorkerPools` call. Provide this to retrieve the subsequent page.
     * @param {string} apiParams.parent - (Required) Required. The parent of the collection of `WorkerPools`. Format: `projects/{project}/locations/{location}`.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workerPools.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+parent}/workerPools', 'GET', apiParams, clientConfig);

    this.githubDotComWebhook = {};

    /**
     * ReceiveGitHubDotComWebhook is called when the API receives a github.com webhook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.webhookKey - For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.githubDotComWebhook.receive = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/githubDotComWebhook:receive', 'POST', apiParams, clientConfig);

    this.locations = {};

    /**
     * ReceiveRegionalWebhook is called when the API receives a regional GitHub webhook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) Required. The location where the webhook should be sent.
     * @param {string} apiParams.webhookKey - For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.locations.regionalWebhook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/{+location}/regionalWebhook', 'POST', apiParams, clientConfig);

    this.v1 = {};

    /**
     * ReceiveWebhook is called when the API receives a GitHub webhook.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.webhookKey - For GitHub Enterprise webhooks, this key is used to associate the webhook request with the GitHubEnterpriseConfig to use for validation.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.v1.webhook = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1/webhook', 'POST', apiParams, clientConfig);
  }

/**
 * @private Builds the full request URL and options object for a request.
 */
_buildRequestDetails(path, httpMethod, apiParams, clientConfig = {}) {
    let url;
    if (path.startsWith('/upload/')) {
        url = 'https://www.googleapis.com' + path;
    } else {
        url = this._rootUrl + this._servicePath + path;
    }

    const remainingParams = { ...apiParams };
    const pathParams = url.match(/{[^{}]+}/g) || [];

    pathParams.forEach(placeholder => {
        const isPlus = placeholder.startsWith('{+');
        const paramName = placeholder.slice(isPlus ? 2 : 1, -1);
        if (Object.prototype.hasOwnProperty.call(remainingParams, paramName)) {
            url = url.replace(placeholder, remainingParams[paramName]);
            delete remainingParams[paramName];
        }
    });

    const options = {
        method: httpMethod,
        headers: {
            'Authorization': 'Bearer ' + this._token,
            ...(clientConfig.headers || {}),
        },
        muteHttpExceptions: true,
    };

    if (apiParams && apiParams.media && apiParams.media.body) {
        let mediaBlob;
        // Check if the body is already a blob by "duck typing" for the getBytes method.
        if (apiParams.media.body.getBytes && typeof apiParams.media.body.getBytes === 'function') {
            mediaBlob = apiParams.media.body;
        } else {
            // If it's not a blob (e.g., a string or byte array), create one.
            mediaBlob = Utilities.newBlob(apiParams.media.body);
        }

        const hasMetadata = apiParams.requestBody && Object.keys(apiParams.requestBody).length > 0;

        if (hasMetadata) {
            // ** Multipart Upload (Media + Metadata) **
            remainingParams.uploadType = 'multipart';
            
            const boundary = '----' + Utilities.getUuid();
            const metadata = apiParams.requestBody;

            let requestData = '--' + boundary + '\r\n';
            requestData += 'Content-Type: application/json; charset=UTF-8\r\n\r\n';
            requestData += JSON.stringify(metadata) + '\r\n';
            requestData += '--' + boundary + '\r\n';
            requestData += 'Content-Type: ' + apiParams.media.mimeType + '\r\n\r\n';
            
            const payloadBytes = Utilities.newBlob(requestData).getBytes()
                .concat(mediaBlob.getBytes())
                .concat(Utilities.newBlob('\r\n--' + boundary + '--').getBytes());

            options.contentType = 'multipart/related; boundary=' + boundary;
            options.payload = payloadBytes;

        } else {
            // ** Simple Media Upload (Media only) **
            remainingParams.uploadType = 'media';

            options.contentType = mediaBlob.getContentType();
            options.payload = mediaBlob.getBytes();
        }

    } else if (apiParams && apiParams.requestBody) {
        options.contentType = 'application/json';
        options.payload = JSON.stringify(apiParams.requestBody);
    }
    const queryParts = [];
    for (const key in remainingParams) {
        if (key !== 'requestBody' && key !== 'media') {
            queryParts.push(`${encodeURIComponent(key)}=${encodeURIComponent(remainingParams[key])}`);
        }
    }
    if (queryParts.length > 0) {
        url += '?' + queryParts.join('&');
    }

    return { url, options };
}

  /**
   * @private Makes the HTTP request with exponential backoff for retries.
   * @return {Promise<object>} A promise that resolves with the response object.
   */
  async _makeRequest(path, httpMethod, apiParams, clientConfig = {}) {
    const isMediaDownload = apiParams.alt === 'media';

    const { url, options } = this._buildRequestDetails(path, httpMethod, apiParams, clientConfig);

    for (let i = 0; i <= this._backoffConfig.retries; i++) {
      const response = UrlFetchApp.fetch(url, options);
      const responseCode = response.getResponseCode();
      const responseHeaders = response.getAllHeaders();

      if (responseCode >= 200 && responseCode < 300) {
        // Prioritize responseType:'blob' and media downloads to return raw data.
        if ((clientConfig && (clientConfig.responseType === 'blob' || clientConfig.responseType === 'stream')) || isMediaDownload) {
          return {
            data: response.getBlob(),
            status: responseCode,
            headers: responseHeaders,
          };
        }

        const responseText = response.getContentText();
        // Handle empty responses, which are valid (e.g., a 204 No Content).
        const responseBody = responseText ? JSON.parse(responseText) : {};
        return {
          data: responseBody,
          status: responseCode,
          headers: responseHeaders,
        };
      }

      const retryableErrors = [429, 500, 503];
      if (retryableErrors.includes(responseCode) && i < this._backoffConfig.retries) {
        const delay = this._backoffConfig.baseDelay * Math.pow(2, i) + Math.random() * 1000;
        Utilities.sleep(delay);
        continue;
      }

      const responseText = response.getContentText(); // Get response text for error
      let errorMessage = `Request failed with status ${responseCode}`;
      try {
        const errorObj = JSON.parse(responseText);
        if (errorObj.error && errorObj.error.message) {
          errorMessage += `: ${errorObj.error.message}`;
        }
      } catch (e) {
        // If the error response isn't JSON, include the raw text.
        if (responseText) {
          errorMessage += `. Response: ${responseText}`;
        }
      }
      throw new Error(errorMessage);
    }

    throw new Error('Request failed after multiple retries.');
  }
}
