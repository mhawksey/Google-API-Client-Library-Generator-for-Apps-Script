
/**
 * Google Apps Script client library for the Cloud Deploy API
 * Documentation URL: https://cloud.google.com/deploy/
 * @class
 */
class Clouddeploy {
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
    this._rootUrl = 'https://clouddeploy.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Gets the configuration for a location.
     * @param {string} params.name - (Required) Required. Name of requested configuration.
     * @return {object} The API response object.
     */
    this.projects.locations.getConfig = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. Do not use this field. It is unsupported and is ignored unless explicitly documented otherwise. This is primarily for internal usage.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.deliveryPipelines = {};

    /**
     * Lists DeliveryPipelines in a given project and location.
     * @param {string} params.filter - Filter pipelines to be returned. See https://google.aip.dev/160 for more details.
     * @param {string} params.orderBy - Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - The maximum number of pipelines to return. The service may return fewer than this value. If unspecified, at most 50 pipelines will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListDeliveryPipelines` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of pipelines. Format must be `projects/{project_id}/locations/{location_name}`.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.list = (params) => this._makeRequest('v1/{+parent}/deliveryPipelines', 'GET', params);

    /**
     * Gets details of a single DeliveryPipeline.
     * @param {string} params.name - (Required) Required. Name of the `DeliveryPipeline`. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new DeliveryPipeline in a given project and location.
     * @param {string} params.deliveryPipelineId - Required. ID of the `DeliveryPipeline`.
     * @param {string} params.parent - (Required) Required. The parent collection in which the `DeliveryPipeline` must be created. The format is `projects/{project_id}/locations/{location_name}`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.create = (params) => this._makeRequest('v1/{+parent}/deliveryPipelines', 'POST', params);

    /**
     * Updates the parameters of a single DeliveryPipeline.
     * @param {boolean} params.allowMissing - Optional. If set to true, updating a `DeliveryPipeline` that does not exist will result in the creation of a new `DeliveryPipeline`.
     * @param {string} params.name - (Required) Identifier. Name of the `DeliveryPipeline`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}`. The `deliveryPipeline` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten by the update in the `DeliveryPipeline` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single DeliveryPipeline.
     * @param {boolean} params.allowMissing - Optional. If set to true, then deleting an already deleted or non-existing `DeliveryPipeline` will succeed.
     * @param {string} params.etag - Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * @param {boolean} params.force - Optional. If set to true, all child resources under this pipeline will also be deleted. Otherwise, the request will only work if the pipeline has no child resources.
     * @param {string} params.name - (Required) Required. The name of the `DeliveryPipeline` to delete. The format is `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not actually post it.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Creates a `Rollout` to roll back the specified target.
     * @param {string} params.name - (Required) Required. The `DeliveryPipeline` for which the rollback `Rollout` must be created. The format is `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.rollbackTarget = (params) => this._makeRequest('v1/{+name}:rollbackTarget', 'POST', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.deliveryPipelines.releases = {};

    /**
     * Lists Releases in a given project and location.
     * @param {string} params.filter - Optional. Filter releases to be returned. See https://google.aip.dev/160 for more details.
     * @param {string} params.orderBy - Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. The maximum number of `Release` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Release` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListReleases` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The `DeliveryPipeline` which owns this collection of `Release` objects.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.list = (params) => this._makeRequest('v1/{+parent}/releases', 'GET', params);

    /**
     * Gets details of a single Release.
     * @param {string} params.name - (Required) Required. Name of the `Release`. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}`.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Release in a given project and location.
     * @param {string} params.overrideDeployPolicy - Optional. Deploy policies to override. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`.
     * @param {string} params.parent - (Required) Required. The parent collection in which the `Release` is created. The format is `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`.
     * @param {string} params.releaseId - Required. ID of the `Release`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.create = (params) => this._makeRequest('v1/{+parent}/releases', 'POST', params);

    /**
     * Abandons a Release in the Delivery Pipeline.
     * @param {string} params.name - (Required) Required. Name of the Release. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.abandon = (params) => this._makeRequest('v1/{+name}:abandon', 'POST', params);

    this.projects.locations.deliveryPipelines.releases.rollouts = {};

    /**
     * Approves a Rollout.
     * @param {string} params.name - (Required) Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.rollouts.approve = (params) => this._makeRequest('v1/{+name}:approve', 'POST', params);

    /**
     * Advances a Rollout in a given project and location.
     * @param {string} params.name - (Required) Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.rollouts.advance = (params) => this._makeRequest('v1/{+name}:advance', 'POST', params);

    /**
     * Cancels a Rollout in a given project and location.
     * @param {string} params.name - (Required) Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.rollouts.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * Lists Rollouts in a given project and location.
     * @param {string} params.filter - Optional. Filter rollouts to be returned. See https://google.aip.dev/160 for more details.
     * @param {string} params.orderBy - Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. The maximum number of `Rollout` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Rollout` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListRollouts` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The `Release` which owns this collection of `Rollout` objects.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.rollouts.list = (params) => this._makeRequest('v1/{+parent}/rollouts', 'GET', params);

    /**
     * Gets details of a single Rollout.
     * @param {string} params.name - (Required) Required. Name of the `Rollout`. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}/rollouts/{rollout_name}`.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.rollouts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Rollout in a given project and location.
     * @param {string} params.overrideDeployPolicy - Optional. Deploy policies to override. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`.
     * @param {string} params.parent - (Required) Required. The parent collection in which the `Rollout` must be created. The format is `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.rolloutId - Required. ID of the `Rollout`.
     * @param {string} params.startingPhaseId - Optional. The starting phase ID for the `Rollout`. If empty the `Rollout` will start at the first phase.
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.rollouts.create = (params) => this._makeRequest('v1/{+parent}/rollouts', 'POST', params);

    /**
     * Ignores the specified Job in a Rollout.
     * @param {string} params.rollout - (Required) Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.rollouts.ignoreJob = (params) => this._makeRequest('v1/{+rollout}:ignoreJob', 'POST', params);

    /**
     * Retries the specified Job in a Rollout.
     * @param {string} params.rollout - (Required) Required. Name of the Rollout. Format is `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.rollouts.retryJob = (params) => this._makeRequest('v1/{+rollout}:retryJob', 'POST', params);

    this.projects.locations.deliveryPipelines.releases.rollouts.jobRuns = {};

    /**
     * Lists JobRuns in a given project and location.
     * @param {string} params.filter - Optional. Filter results to be returned. See https://google.aip.dev/160 for more details.
     * @param {string} params.orderBy - Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. The maximum number of `JobRun` objects to return. The service may return fewer than this value. If unspecified, at most 50 `JobRun` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListJobRuns` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The `Rollout` which owns this collection of `JobRun` objects.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.list = (params) => this._makeRequest('v1/{+parent}/jobRuns', 'GET', params);

    /**
     * Gets details of a single JobRun.
     * @param {string} params.name - (Required) Required. Name of the `JobRun`. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/releases/{release_name}/rollouts/{rollout_name}/jobRuns/{job_run_name}`.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Terminates a Job Run in a given project and location.
     * @param {string} params.name - (Required) Required. Name of the `JobRun`. Format must be `projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/{rollout}/jobRuns/{jobRun}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.releases.rollouts.jobRuns.terminate = (params) => this._makeRequest('v1/{+name}:terminate', 'POST', params);

    this.projects.locations.deliveryPipelines.automations = {};

    /**
     * Creates a new Automation in a given project and location.
     * @param {string} params.automationId - Required. ID of the `Automation`.
     * @param {string} params.parent - (Required) Required. The parent collection in which the `Automation` must be created. The format is `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.automations.create = (params) => this._makeRequest('v1/{+parent}/automations', 'POST', params);

    /**
     * Updates the parameters of a single Automation resource.
     * @param {boolean} params.allowMissing - Optional. If set to true, updating a `Automation` that does not exist will result in the creation of a new `Automation`.
     * @param {string} params.name - (Required) Output only. Name of the `Automation`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automations/{automation}`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten by the update in the `Automation` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.automations.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Automation resource.
     * @param {boolean} params.allowMissing - Optional. If set to true, then deleting an already deleted or non-existing `Automation` will succeed.
     * @param {string} params.etag - Optional. The weak etag of the request. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * @param {string} params.name - (Required) Required. The name of the `Automation` to delete. The format is `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/automations/{automation_name}`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and verify whether the resource exists, but do not actually post it.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.automations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets details of a single Automation.
     * @param {string} params.name - (Required) Required. Name of the `Automation`. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}/automations/{automation_name}`.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.automations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists Automations in a given project and location.
     * @param {string} params.filter - Filter automations to be returned. All fields can be used in the filter.
     * @param {string} params.orderBy - Field to sort by.
     * @param {integer} params.pageSize - The maximum number of automations to return. The service may return fewer than this value. If unspecified, at most 50 automations will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListAutomations` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent `Delivery Pipeline`, which owns this collection of automations. Format must be `projects/{project_id}/locations/{location_name}/deliveryPipelines/{pipeline_name}`.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.automations.list = (params) => this._makeRequest('v1/{+parent}/automations', 'GET', params);

    this.projects.locations.deliveryPipelines.automationRuns = {};

    /**
     * Gets details of a single AutomationRun.
     * @param {string} params.name - (Required) Required. Name of the `AutomationRun`. Format must be `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automationRuns/{automation_run}`.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.automationRuns.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists AutomationRuns in a given project and location.
     * @param {string} params.filter - Filter automationRuns to be returned. All fields can be used in the filter.
     * @param {string} params.orderBy - Field to sort by.
     * @param {integer} params.pageSize - The maximum number of automationRuns to return. The service may return fewer than this value. If unspecified, at most 50 automationRuns will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListAutomationRuns` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent `Delivery Pipeline`, which owns this collection of automationRuns. Format must be `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}`.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.automationRuns.list = (params) => this._makeRequest('v1/{+parent}/automationRuns', 'GET', params);

    /**
     * Cancels an AutomationRun. The `state` of the `AutomationRun` after cancelling is `CANCELLED`. `CancelAutomationRun` can be called on AutomationRun in the state `IN_PROGRESS` and `PENDING`; AutomationRun in a different state returns an `FAILED_PRECONDITION` error.
     * @param {string} params.name - (Required) Required. Name of the `AutomationRun`. Format is `projects/{project}/locations/{location}/deliveryPipelines/{delivery_pipeline}/automationRuns/{automation_run}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deliveryPipelines.automationRuns.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.targets = {};

    /**
     * Lists Targets in a given project and location.
     * @param {string} params.filter - Optional. Filter targets to be returned. See https://google.aip.dev/160 for more details.
     * @param {string} params.orderBy - Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. The maximum number of `Target` objects to return. The service may return fewer than this value. If unspecified, at most 50 `Target` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListTargets` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of targets. Format must be `projects/{project_id}/locations/{location_name}`.
     * @return {object} The API response object.
     */
    this.projects.locations.targets.list = (params) => this._makeRequest('v1/{+parent}/targets', 'GET', params);

    /**
     * Gets details of a single Target.
     * @param {string} params.name - (Required) Required. Name of the `Target`. Format must be `projects/{project_id}/locations/{location_name}/targets/{target_name}`.
     * @return {object} The API response object.
     */
    this.projects.locations.targets.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Target in a given project and location.
     * @param {string} params.parent - (Required) Required. The parent collection in which the `Target` must be created. The format is `projects/{project_id}/locations/{location_name}`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.targetId - Required. ID of the `Target`.
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.targets.create = (params) => this._makeRequest('v1/{+parent}/targets', 'POST', params);

    /**
     * Updates the parameters of a single Target.
     * @param {boolean} params.allowMissing - Optional. If set to true, updating a `Target` that does not exist will result in the creation of a new `Target`.
     * @param {string} params.name - (Required) Identifier. Name of the `Target`. Format is `projects/{project}/locations/{location}/targets/{target}`. The `target` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten by the update in the `Target` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.targets.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Target.
     * @param {boolean} params.allowMissing - Optional. If set to true, then deleting an already deleted or non-existing `Target` will succeed.
     * @param {string} params.etag - Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * @param {string} params.name - (Required) Required. The name of the `Target` to delete. The format is `projects/{project_id}/locations/{location_name}/targets/{target_name}`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not actually post it.
     * @return {object} The API response object.
     */
    this.projects.locations.targets.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.targets.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.targets.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.targets.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.customTargetTypes = {};

    /**
     * Lists CustomTargetTypes in a given project and location.
     * @param {string} params.filter - Optional. Filter custom target types to be returned. See https://google.aip.dev/160 for more details.
     * @param {string} params.orderBy - Optional. Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Optional. The maximum number of `CustomTargetType` objects to return. The service may return fewer than this value. If unspecified, at most 50 `CustomTargetType` objects will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     * @param {string} params.pageToken - Optional. A page token, received from a previous `ListCustomTargetTypes` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent that owns this collection of custom target types. Format must be `projects/{project_id}/locations/{location_name}`.
     * @return {object} The API response object.
     */
    this.projects.locations.customTargetTypes.list = (params) => this._makeRequest('v1/{+parent}/customTargetTypes', 'GET', params);

    /**
     * Gets details of a single CustomTargetType.
     * @param {string} params.name - (Required) Required. Name of the `CustomTargetType`. Format must be `projects/{project_id}/locations/{location_name}/customTargetTypes/{custom_target_type}`.
     * @return {object} The API response object.
     */
    this.projects.locations.customTargetTypes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new CustomTargetType in a given project and location.
     * @param {string} params.customTargetTypeId - Required. ID of the `CustomTargetType`.
     * @param {string} params.parent - (Required) Required. The parent collection in which the `CustomTargetType` must be created. The format is `projects/{project_id}/locations/{location_name}`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.customTargetTypes.create = (params) => this._makeRequest('v1/{+parent}/customTargetTypes', 'POST', params);

    /**
     * Updates a single CustomTargetType.
     * @param {boolean} params.allowMissing - Optional. If set to true, updating a `CustomTargetType` that does not exist will result in the creation of a new `CustomTargetType`.
     * @param {string} params.name - (Required) Identifier. Name of the `CustomTargetType`. Format is `projects/{project}/locations/{location}/customTargetTypes/{customTargetType}`. The `customTargetType` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten by the update in the `CustomTargetType` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.customTargetTypes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single CustomTargetType.
     * @param {boolean} params.allowMissing - Optional. If set to true, then deleting an already deleted or non-existing `CustomTargetType` will succeed.
     * @param {string} params.etag - Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * @param {string} params.name - (Required) Required. The name of the `CustomTargetType` to delete. Format must be `projects/{project_id}/locations/{location_name}/customTargetTypes/{custom_target_type}`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated but no actual change is made.
     * @return {object} The API response object.
     */
    this.projects.locations.customTargetTypes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.customTargetTypes.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.customTargetTypes.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    this.projects.locations.deployPolicies = {};

    /**
     * Creates a new DeployPolicy in a given project and location.
     * @param {string} params.deployPolicyId - Required. ID of the `DeployPolicy`.
     * @param {string} params.parent - (Required) Required. The parent collection in which the `DeployPolicy` must be created. The format is `projects/{project_id}/locations/{location_name}`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployPolicies.create = (params) => this._makeRequest('v1/{+parent}/deployPolicies', 'POST', params);

    /**
     * Updates the parameters of a single DeployPolicy.
     * @param {boolean} params.allowMissing - Optional. If set to true, updating a `DeployPolicy` that does not exist will result in the creation of a new `DeployPolicy`.
     * @param {string} params.name - (Required) Output only. Name of the `DeployPolicy`. Format is `projects/{project}/locations/{location}/deployPolicies/{deployPolicy}`. The `deployPolicy` component must match `[a-z]([a-z0-9-]{0,61}[a-z0-9])?`
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten by the update in the `DeployPolicy` resource. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it's in the mask. If the user doesn't provide a mask then all fields are overwritten.
     * @param {boolean} params.validateOnly - Optional. If set to true, the request is validated and the user is provided with an expected result, but no actual change is made.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployPolicies.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single DeployPolicy.
     * @param {boolean} params.allowMissing - Optional. If set to true, then deleting an already deleted or non-existing `DeployPolicy` will succeed.
     * @param {string} params.etag - Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.
     * @param {string} params.name - (Required) Required. The name of the `DeployPolicy` to delete. The format is `projects/{project_id}/locations/{location_name}/deployPolicies/{deploy_policy_name}`.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server knows to ignore the request if it has already been completed. The server guarantees that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. If set, validate the request and preview the review, but do not actually post it.
     * @return {object} The API response object.
     */
    this.projects.locations.deployPolicies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Lists DeployPolicies in a given project and location.
     * @param {string} params.filter - Filter deploy policies to be returned. See https://google.aip.dev/160 for more details. All fields can be used in the filter.
     * @param {string} params.orderBy - Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - The maximum number of deploy policies to return. The service may return fewer than this value. If unspecified, at most 50 deploy policies will be returned. The maximum value is 1000; values above 1000 will be set to 1000.
     * @param {string} params.pageToken - A page token, received from a previous `ListDeployPolicies` call. Provide this to retrieve the subsequent page. When paginating, all other provided parameters match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent, which owns this collection of deploy policies. Format must be `projects/{project_id}/locations/{location_name}`.
     * @return {object} The API response object.
     */
    this.projects.locations.deployPolicies.list = (params) => this._makeRequest('v1/{+parent}/deployPolicies', 'GET', params);

    /**
     * Gets details of a single DeployPolicy.
     * @param {string} params.name - (Required) Required. Name of the `DeployPolicy`. Format must be `projects/{project_id}/locations/{location_name}/deployPolicies/{deploy_policy_name}`.
     * @return {object} The API response object.
     */
    this.projects.locations.deployPolicies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.deployPolicies.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.deployPolicies.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);
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
