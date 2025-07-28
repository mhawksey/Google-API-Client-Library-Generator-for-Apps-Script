
/**
 * Google Apps Script client library for the AI Platform Training & Prediction API
 * Documentation URL: https://cloud.google.com/ml/
 * @class
 */
class Ml {
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
    this._rootUrl = 'https://ml.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Performs online prediction on the data in the request. {% dynamic include "/ai-platform/includes/___predict-request" %}
     * @param {string} params.name - (Required) Required. The resource name of a model or a version. Authorization: requires the `predict` permission on the specified resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.predict = (params) => this._makeRequest('v1/{+name}:predict', 'POST', params);

    /**
     * Performs explanation on the data in the request. {% dynamic include "/ai-platform/includes/___explain-request" %}
     * @param {string} params.name - (Required) Required. The resource name of a model or a version. Authorization: requires the `predict` permission on the specified resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.explain = (params) => this._makeRequest('v1/{+name}:explain', 'POST', params);

    /**
     * Get the service account information associated with your project. You need this information in order to grant the service account permissions for the Google Cloud Storage location where you put your model training code for training the model with Google Cloud Machine Learning.
     * @param {string} params.name - (Required) Required. The project name.
     * @return {object} The API response object.
     */
    this.projects.getConfig = (params) => this._makeRequest('v1/{+name}:getConfig', 'GET', params);

    this.projects.jobs = {};

    /**
     * Creates a training or a batch prediction job.
     * @param {string} params.parent - (Required) Required. The project name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobs.create = (params) => this._makeRequest('v1/{+parent}/jobs', 'POST', params);

    /**
     * Lists the jobs in the project. If there are no jobs that match the request parameters, the list request returns an empty response body: {}.
     * @param {string} params.filter - Optional. Specifies the subset of jobs to retrieve. You can filter on the value of one or more attributes of the job object. For example, retrieve jobs with a job identifier that starts with 'census': gcloud ai-platform jobs list --filter='jobId:census*' List all failed jobs with names that start with 'rnn': gcloud ai-platform jobs list --filter='jobId:rnn* AND state:FAILED' For more examples, see the guide to monitoring jobs.
     * @param {integer} params.pageSize - Optional. The number of jobs to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.
     * @param {string} params.parent - (Required) Required. The name of the project for which to list jobs.
     * @return {object} The API response object.
     */
    this.projects.jobs.list = (params) => this._makeRequest('v1/{+parent}/jobs', 'GET', params);

    /**
     * Describes a job.
     * @param {string} params.name - (Required) Required. The name of the job to get the description of.
     * @return {object} The API response object.
     */
    this.projects.jobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Cancels a running job.
     * @param {string} params.name - (Required) Required. The name of the job to cancel.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobs.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * Updates a specific job resource. Currently the only supported fields to update are `labels`.
     * @param {string} params.name - (Required) Required. The job name.
     * @param {string} params.updateMask - Required. Specifies the path, relative to `Job`, of the field to update. To adopt etag mechanism, include `etag` field in the mask, and include the `etag` value in your job resource. For example, to change the labels of a job, the `update_mask` parameter would be specified as `labels`, `etag`, and the `PATCH` request body would specify the new value, as follows: { "labels": { "owner": "Google", "color": "Blue" } "etag": "33a64df551425fcc55e4d42a148795d9f25f89d4" } If `etag` matches the one on the server, the labels of the job will be replaced with the given ones, and the server end `etag` will be recalculated. Currently the only supported update masks are `labels` and `etag`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobs.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.jobs.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobs.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations = {};

    /**
     * Get the complete list of CMLE capabilities in a location, along with their location-specific properties.
     * @param {string} params.name - (Required) Required. The name of the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List all locations that provides at least one type of CMLE capability.
     * @param {integer} params.pageSize - Optional. The number of locations to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.
     * @param {string} params.parent - (Required) Required. The name of the project for which available locations are to be listed (since some locations might be whitelisted for specific projects).
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1/{+parent}/locations', 'GET', params);

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
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.studies = {};

    /**
     * Creates a study.
     * @param {string} params.parent - (Required) Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location}
     * @param {string} params.studyId - Required. The ID to use for the study, which will become the final component of the study's resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.create = (params) => this._makeRequest('v1/{+parent}/studies', 'POST', params);

    /**
     * Gets a study.
     * @param {string} params.name - (Required) Required. The study name.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists all the studies in a region for an associated project.
     * @param {string} params.parent - (Required) Required. The project and location that the study belongs to. Format: projects/{project}/locations/{location}
     * @return {object} The API response object.
     */
    this.projects.locations.studies.list = (params) => this._makeRequest('v1/{+parent}/studies', 'GET', params);

    /**
     * Deletes a study.
     * @param {string} params.name - (Required) Required. The study name.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.studies.trials = {};

    /**
     * Adds one or more trials to a study, with parameter values suggested by AI Platform Vizier. Returns a long-running operation associated with the generation of trial suggestions. When this long-running operation succeeds, it will contain a SuggestTrialsResponse.
     * @param {string} params.parent - (Required) Required. The name of the study that the trial belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.suggest = (params) => this._makeRequest('v1/{+parent}/trials:suggest', 'POST', params);

    /**
     * Adds a user provided trial to a study.
     * @param {string} params.parent - (Required) Required. The name of the study that the trial belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.create = (params) => this._makeRequest('v1/{+parent}/trials', 'POST', params);

    /**
     * Gets a trial.
     * @param {string} params.name - (Required) Required. The trial name.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists the trials associated with a study.
     * @param {string} params.parent - (Required) Required. The name of the study that the trial belongs to.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.list = (params) => this._makeRequest('v1/{+parent}/trials', 'GET', params);

    /**
     * Adds a measurement of the objective metrics to a trial. This measurement is assumed to have been taken before the trial is complete.
     * @param {string} params.name - (Required) Required. The trial name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.addMeasurement = (params) => this._makeRequest('v1/{+name}:addMeasurement', 'POST', params);

    /**
     * Marks a trial as complete.
     * @param {string} params.name - (Required) Required. The trial name.metat
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.complete = (params) => this._makeRequest('v1/{+name}:complete', 'POST', params);

    /**
     * Deletes a trial.
     * @param {string} params.name - (Required) Required. The trial name.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Checks whether a trial should stop or not. Returns a long-running operation. When the operation is successful, it will contain a CheckTrialEarlyStoppingStateResponse.
     * @param {string} params.name - (Required) Required. The trial name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.checkEarlyStoppingState = (params) => this._makeRequest('v1/{+name}:checkEarlyStoppingState', 'POST', params);

    /**
     * Stops a trial.
     * @param {string} params.name - (Required) Required. The trial name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);

    /**
     * Lists the pareto-optimal trials for multi-objective study or the optimal trials for single-objective study. The definition of pareto-optimal can be checked in wiki page. https://en.wikipedia.org/wiki/Pareto_efficiency
     * @param {string} params.parent - (Required) Required. The name of the study that the pareto-optimal trial belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.studies.trials.listOptimalTrials = (params) => this._makeRequest('v1/{+parent}/trials:listOptimalTrials', 'POST', params);

    this.projects.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.models = {};

    /**
     * Creates a model which will later contain one or more versions. You must add at least one version before you can request predictions from the model. Add versions by calling projects.models.versions.create.
     * @param {string} params.parent - (Required) Required. The project name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.models.create = (params) => this._makeRequest('v1/{+parent}/models', 'POST', params);

    /**
     * Lists the models in a project. Each project can contain multiple models, and each model can have multiple versions. If there are no models that match the request parameters, the list request returns an empty response body: {}.
     * @param {string} params.filter - Optional. Specifies the subset of models to retrieve.
     * @param {integer} params.pageSize - Optional. The number of models to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.
     * @param {string} params.parent - (Required) Required. The name of the project whose models are to be listed.
     * @return {object} The API response object.
     */
    this.projects.models.list = (params) => this._makeRequest('v1/{+parent}/models', 'GET', params);

    /**
     * Gets information about a model, including its name, the description (if set), and the default version (if at least one version of the model has been deployed).
     * @param {string} params.name - (Required) Required. The name of the model.
     * @return {object} The API response object.
     */
    this.projects.models.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a model. You can only delete a model if there are no versions in it. You can delete versions by calling projects.models.versions.delete.
     * @param {string} params.name - (Required) Required. The name of the model.
     * @return {object} The API response object.
     */
    this.projects.models.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Updates a specific model resource. Currently the only supported fields to update are `description` and `default_version.name`.
     * @param {string} params.name - (Required) Required. The project name.
     * @param {string} params.updateMask - Required. Specifies the path, relative to `Model`, of the field to update. For example, to change the description of a model to "foo" and set its default version to "version_1", the `update_mask` parameter would be specified as `description`, `default_version.name`, and the `PATCH` request body would specify the new value, as follows: { "description": "foo", "defaultVersion": { "name":"version_1" } } Currently the supported update masks are `description` and `default_version.name`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.models.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.models.setIamPolicy = (params) => this._makeRequest('v1/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.models.getIamPolicy = (params) => this._makeRequest('v1/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.models.testIamPermissions = (params) => this._makeRequest('v1/{+resource}:testIamPermissions', 'POST', params);

    this.projects.models.versions = {};

    /**
     * Creates a new version of a model from a trained TensorFlow model. If the version created in the cloud by this call is the first deployed version of the specified model, it will be made the default version of the model. When you add a version to a model that already has one or more versions, the default version does not automatically change. If you want a new version to be the default, you must call projects.models.versions.setDefault.
     * @param {string} params.parent - (Required) Required. The name of the model.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.models.versions.create = (params) => this._makeRequest('v1/{+parent}/versions', 'POST', params);

    /**
     * Updates the specified Version resource. Currently the only update-able fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`.
     * @param {string} params.name - (Required) Required. The name of the model.
     * @param {string} params.updateMask - Required. Specifies the path, relative to `Version`, of the field to update. Must be present and non-empty. For example, to change the description of a version to "foo", the `update_mask` parameter would be specified as `description`, and the `PATCH` request body would specify the new value, as follows: ``` { "description": "foo" } ``` Currently the only supported update mask fields are `description`, `requestLoggingConfig`, `autoScaling.minNodes`, and `manualScaling.nodes`. However, you can only update `manualScaling.nodes` if the version uses a [Compute Engine (N1) machine type](/ml-engine/docs/machine-types-online-prediction).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.models.versions.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets basic information about all the versions of a model. If you expect that a model has many versions, or if you need to handle only a limited number of results at a time, you can request that the list be retrieved in batches (called pages). If there are no versions that match the request parameters, the list request returns an empty response body: {}.
     * @param {string} params.filter - Optional. Specifies the subset of versions to retrieve.
     * @param {integer} params.pageSize - Optional. The number of versions to retrieve per "page" of results. If there are more remaining results than this number, the response message will contain a valid value in the `next_page_token` field. The default value is 20, and the maximum page size is 100.
     * @param {string} params.pageToken - Optional. A page token to request the next page of results. You get the token from the `next_page_token` field of the response from the previous call.
     * @param {string} params.parent - (Required) Required. The name of the model for which to list the version.
     * @return {object} The API response object.
     */
    this.projects.models.versions.list = (params) => this._makeRequest('v1/{+parent}/versions', 'GET', params);

    /**
     * Gets information about a model version. Models can have multiple versions. You can call projects.models.versions.list to get the same information that this method returns for all of the versions of a model.
     * @param {string} params.name - (Required) Required. The name of the version.
     * @return {object} The API response object.
     */
    this.projects.models.versions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a model version. Each model can have multiple versions deployed and in use at any given time. Use this method to remove a single version. Note: You cannot delete the version that is set as the default version of the model unless it is the only remaining version.
     * @param {string} params.name - (Required) Required. The name of the version. You can get the names of all the versions of a model by calling projects.models.versions.list.
     * @return {object} The API response object.
     */
    this.projects.models.versions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Designates a version to be the default for the model. The default version is used for prediction requests made against the model that don't specify a version. The first version to be created for a model is automatically set as the default. You must make any subsequent changes to the default version setting manually using this method.
     * @param {string} params.name - (Required) Required. The name of the version to make the default for the model. You can get the names of all the versions of a model by calling projects.models.versions.list.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.models.versions.setDefault = (params) => this._makeRequest('v1/{+name}:setDefault', 'POST', params);
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
        // Fix: URI-encode path parameters for safety.
        url = url.replace(placeholder, encodeURIComponent(remainingParams[paramName]));
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
