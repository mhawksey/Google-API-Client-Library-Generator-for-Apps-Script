
/**
 * Google Apps Script client library for the Cloud Run Admin API
 * Documentation URL: https://cloud.google.com/run/
 * @class
 */
class Run {
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
    this._rootUrl = 'https://run.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Export generated customer metadata for a given project.
     * @param {string} params.name - (Required) Required. The name of the project of which metadata should be exported. Format: `projects/{project_id_or_number}/locations/{location}` for Project in a given location.
     * @return {object} The API response object.
     */
    this.projects.locations.exportProjectMetadata = (params) => this._makeRequest('v2/{+name}:exportProjectMetadata', 'GET', params);

    /**
     * Export generated customer metadata for a given resource.
     * @param {string} params.name - (Required) Required. The name of the resource of which metadata should be exported. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}` for Service `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution {project_id_or_number} may contains domain-scoped project IDs
     * @return {object} The API response object.
     */
    this.projects.locations.exportMetadata = (params) => this._makeRequest('v2/{+name}:exportMetadata', 'GET', params);

    /**
     * Export image metadata for a given resource.
     * @param {string} params.name - (Required) Required. The name of the resource of which image metadata should be exported. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution
     * @return {object} The API response object.
     */
    this.projects.locations.exportImageMetadata = (params) => this._makeRequest('v2/{+name}:exportImageMetadata', 'GET', params);

    /**
     * Export image for a given resource.
     * @param {string} params.name - (Required) Required. The name of the resource of which image metadata should be exported. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.exportImage = (params) => this._makeRequest('v2/{+name}:exportImage', 'POST', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - Optional. A filter for matching the completed or in-progress operations. The supported formats of *filter* are: To query for only completed operations: done:true To query for only ongoing operations: done:false Must be empty to query for all of the latest operations for the given parent project.
     * @param {string} params.name - (Required) Required. To query for all of the operations for a project.
     * @param {integer} params.pageSize - The maximum number of records that should be returned. Requested page size cannot exceed 100. If not set or set to less than or equal to 0, the default page size is 100. .
     * @param {string} params.pageToken - Token identifying which result to start with, which is returned by a previous list call.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Waits until the specified long-running operation is done or reaches at most a specified timeout, returning the latest state. If the operation is already done, the latest state is immediately returned. If the timeout specified is greater than the default HTTP/RPC timeout, the HTTP/RPC timeout is used. If the server does not support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Note that this method is on a best-effort basis. It may return the latest state before the specified timeout (including immediately), meaning even an immediate response is no guarantee that the operation is done.
     * @param {string} params.name - (Required) The name of the operation resource to wait on.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.wait = (params) => this._makeRequest('v2/{+name}:wait', 'POST', params);

    this.projects.locations.builds = {};

    /**
     * Submits a build in a given project.
     * @param {string} params.parent - (Required) Required. The project and location to build in. Location must be a region, e.g., 'us-central1' or 'global' if the global builder is to be used. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.builds.submit = (params) => this._makeRequest('v2/{+parent}/builds:submit', 'POST', params);

    this.projects.locations.jobs = {};

    /**
     * Creates a Job.
     * @param {string} params.jobId - Required. The unique identifier for the Job. The name of the job becomes {parent}/jobs/{job_id}.
     * @param {string} params.parent - (Required) Required. The location and project in which this Job should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number.
     * @param {boolean} params.validateOnly - Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.create = (params) => this._makeRequest('v2/{+parent}/jobs', 'POST', params);

    /**
     * Gets information about a Job.
     * @param {string} params.name - (Required) Required. The full name of the Job. Format: projects/{project}/locations/{location}/jobs/{job}, where {project} can be project id or number.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists Jobs. Results are sorted by creation time, descending.
     * @param {integer} params.pageSize - Maximum number of Jobs to return in this call.
     * @param {string} params.pageToken - A page token received from a previous call to ListJobs. All other parameters must match.
     * @param {string} params.parent - (Required) Required. The location and project to list resources on. Format: projects/{project}/locations/{location}, where {project} can be project id or number.
     * @param {boolean} params.showDeleted - If true, returns deleted (but unexpired) resources along with active ones.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.list = (params) => this._makeRequest('v2/{+parent}/jobs', 'GET', params);

    /**
     * Updates a Job.
     * @param {boolean} params.allowMissing - Optional. If set to true, and if the Job does not exist, it will create a new one. Caller must have both create and update permissions for this call if this is set to true.
     * @param {string} params.name - (Required) The fully qualified name of this Job. Format: projects/{project}/locations/{location}/jobs/{job}
     * @param {boolean} params.validateOnly - Indicates that the request should be validated and default values populated, without persisting the request or updating any resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a Job.
     * @param {string} params.etag - A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     * @param {string} params.name - (Required) Required. The full name of the Job. Format: projects/{project}/locations/{location}/jobs/{job}, where {project} can be project id or number.
     * @param {boolean} params.validateOnly - Indicates that the request should be validated without actually deleting any resources.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Triggers creation of a new Execution of this Job.
     * @param {string} params.name - (Required) Required. The full name of the Job. Format: projects/{project}/locations/{location}/jobs/{job}, where {project} can be project id or number.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.run = (params) => this._makeRequest('v2/{+name}:run', 'POST', params);

    /**
     * Gets the IAM Access Control policy currently in effect for the given Job. This result does not include any inherited policies.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Sets the IAM Access control policy for the specified Job. Overwrites any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.jobs.executions = {};

    /**
     * Read the status of an image export operation.
     * @param {string} params.name - (Required) Required. The name of the resource of which image export operation status has to be fetched. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution
     * @param {string} params.operationId - (Required) Required. The operation id returned from ExportImage.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.executions.exportStatus = (params) => this._makeRequest('v2/{+name}/{+operationId}:exportStatus', 'GET', params);

    /**
     * Gets information about an Execution.
     * @param {string} params.name - (Required) Required. The full name of the Execution. Format: `projects/{project}/locations/{location}/jobs/{job}/executions/{execution}`, where `{project}` can be project id or number.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.executions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists Executions from a Job. Results are sorted by creation time, descending.
     * @param {integer} params.pageSize - Maximum number of Executions to return in this call.
     * @param {string} params.pageToken - A page token received from a previous call to ListExecutions. All other parameters must match.
     * @param {string} params.parent - (Required) Required. The Execution from which the Executions should be listed. To list all Executions across Jobs, use "-" instead of Job name. Format: `projects/{project}/locations/{location}/jobs/{job}`, where `{project}` can be project id or number.
     * @param {boolean} params.showDeleted - If true, returns deleted (but unexpired) resources along with active ones.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.executions.list = (params) => this._makeRequest('v2/{+parent}/executions', 'GET', params);

    /**
     * Deletes an Execution.
     * @param {string} params.etag - A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.
     * @param {string} params.name - (Required) Required. The name of the Execution to delete. Format: `projects/{project}/locations/{location}/jobs/{job}/executions/{execution}`, where `{project}` can be project id or number.
     * @param {boolean} params.validateOnly - Indicates that the request should be validated without actually deleting any resources.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.executions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Cancels an Execution.
     * @param {string} params.name - (Required) Required. The name of the Execution to cancel. Format: `projects/{project}/locations/{location}/jobs/{job}/executions/{execution}`, where `{project}` can be project id or number.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.executions.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.projects.locations.jobs.executions.tasks = {};

    /**
     * Gets information about a Task.
     * @param {string} params.name - (Required) Required. The full name of the Task. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}/tasks/{task}
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.executions.tasks.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists Tasks from an Execution of a Job.
     * @param {integer} params.pageSize - Maximum number of Tasks to return in this call.
     * @param {string} params.pageToken - A page token received from a previous call to ListTasks. All other parameters must match.
     * @param {string} params.parent - (Required) Required. The Execution from which the Tasks should be listed. To list all Tasks across Executions of a Job, use "-" instead of Execution name. To list all Tasks across Jobs, use "-" instead of Job name. Format: projects/{project}/locations/{location}/jobs/{job}/executions/{execution}
     * @param {boolean} params.showDeleted - If true, returns deleted (but unexpired) resources along with active ones.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.executions.tasks.list = (params) => this._makeRequest('v2/{+parent}/tasks', 'GET', params);

    this.projects.locations.services = {};

    /**
     * Creates a new Service in a given project and location.
     * @param {string} params.parent - (Required) Required. The location and project in which this service should be created. Format: projects/{project}/locations/{location}, where {project} can be project id or number. Only lowercase characters, digits, and hyphens.
     * @param {string} params.serviceId - Required. The unique identifier for the Service. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the service becomes {parent}/services/{service_id}.
     * @param {boolean} params.validateOnly - Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.services.create = (params) => this._makeRequest('v2/{+parent}/services', 'POST', params);

    /**
     * Gets information about a Service.
     * @param {string} params.name - (Required) Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.
     * @return {object} The API response object.
     */
    this.projects.locations.services.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists Services. Results are sorted by creation time, descending.
     * @param {integer} params.pageSize - Maximum number of Services to return in this call.
     * @param {string} params.pageToken - A page token received from a previous call to ListServices. All other parameters must match.
     * @param {string} params.parent - (Required) Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: projects/{project}/locations/{location}, where {project} can be project id or number.
     * @param {boolean} params.showDeleted - If true, returns deleted (but unexpired) resources along with active ones.
     * @return {object} The API response object.
     */
    this.projects.locations.services.list = (params) => this._makeRequest('v2/{+parent}/services', 'GET', params);

    /**
     * Updates a Service.
     * @param {boolean} params.allowMissing - Optional. If set to true, and if the Service does not exist, it will create a new one. The caller must have 'run.services.create' permissions if this is set to true and the Service does not exist.
     * @param {string} params.name - (Required) The fully qualified name of this Service. In CreateServiceRequest, this field is ignored, and instead composed from CreateServiceRequest.parent and CreateServiceRequest.service_id. Format: projects/{project}/locations/{location}/services/{service_id}
     * @param {string} params.updateMask - Optional. The list of fields to be updated.
     * @param {boolean} params.validateOnly - Indicates that the request should be validated and default values populated, without persisting the request or updating any resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.services.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a Service. This will cause the Service to stop serving traffic and will delete all revisions.
     * @param {string} params.etag - A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     * @param {string} params.name - (Required) Required. The full name of the Service. Format: projects/{project}/locations/{location}/services/{service}, where {project} can be project id or number.
     * @param {boolean} params.validateOnly - Indicates that the request should be validated without actually deleting any resources.
     * @return {object} The API response object.
     */
    this.projects.locations.services.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Gets the IAM Access Control policy currently in effect for the given Cloud Run Service. This result does not include any inherited policies.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.services.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Sets the IAM Access control policy for the specified Service. Overwrites any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.services.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.services.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.services.revisions = {};

    /**
     * Read the status of an image export operation.
     * @param {string} params.name - (Required) Required. The name of the resource of which image export operation status has to be fetched. Format: `projects/{project_id_or_number}/locations/{location}/services/{service}/revisions/{revision}` for Revision `projects/{project_id_or_number}/locations/{location}/jobs/{job}/executions/{execution}` for Execution
     * @param {string} params.operationId - (Required) Required. The operation id returned from ExportImage.
     * @return {object} The API response object.
     */
    this.projects.locations.services.revisions.exportStatus = (params) => this._makeRequest('v2/{+name}/{+operationId}:exportStatus', 'GET', params);

    /**
     * Gets information about a Revision.
     * @param {string} params.name - (Required) Required. The full name of the Revision. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision}
     * @return {object} The API response object.
     */
    this.projects.locations.services.revisions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists Revisions from a given Service, or from a given location. Results are sorted by creation time, descending.
     * @param {integer} params.pageSize - Maximum number of revisions to return in this call.
     * @param {string} params.pageToken - A page token received from a previous call to ListRevisions. All other parameters must match.
     * @param {string} params.parent - (Required) Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project}/locations/{location}/services/{service}
     * @param {boolean} params.showDeleted - If true, returns deleted (but unexpired) resources along with active ones.
     * @return {object} The API response object.
     */
    this.projects.locations.services.revisions.list = (params) => this._makeRequest('v2/{+parent}/revisions', 'GET', params);

    /**
     * Deletes a Revision.
     * @param {string} params.etag - A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.
     * @param {string} params.name - (Required) Required. The name of the Revision to delete. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision}
     * @param {boolean} params.validateOnly - Indicates that the request should be validated without actually deleting any resources.
     * @return {object} The API response object.
     */
    this.projects.locations.services.revisions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    this.projects.locations.workerPools = {};

    /**
     * Creates a new WorkerPool in a given project and location.
     * @param {string} params.parent - (Required) Required. The location and project in which this worker pool should be created. Format: `projects/{project}/locations/{location}`, where `{project}` can be project id or number. Only lowercase characters, digits, and hyphens.
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     * @param {string} params.workerPoolId - Required. The unique identifier for the WorkerPool. It must begin with letter, and cannot end with hyphen; must contain fewer than 50 characters. The name of the worker pool becomes `{parent}/workerPools/{worker_pool_id}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.create = (params) => this._makeRequest('v2/{+parent}/workerPools', 'POST', params);

    /**
     * Gets information about a WorkerPool.
     * @param {string} params.name - (Required) Required. The full name of the WorkerPool. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`, where `{project}` can be project id or number.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists WorkerPools. Results are sorted by creation time, descending.
     * @param {integer} params.pageSize - Maximum number of WorkerPools to return in this call.
     * @param {string} params.pageToken - A page token received from a previous call to ListWorkerPools. All other parameters must match.
     * @param {string} params.parent - (Required) Required. The location and project to list resources on. Location must be a valid Google Cloud region, and cannot be the "-" wildcard. Format: `projects/{project}/locations/{location}`, where `{project}` can be project id or number.
     * @param {boolean} params.showDeleted - If true, returns deleted (but unexpired) resources along with active ones.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.list = (params) => this._makeRequest('v2/{+parent}/workerPools', 'GET', params);

    /**
     * Updates a WorkerPool.
     * @param {boolean} params.allowMissing - Optional. If set to true, and if the WorkerPool does not exist, it will create a new one. The caller must have 'run.workerpools.create' permissions if this is set to true and the WorkerPool does not exist.
     * @param {boolean} params.forceNewRevision - Optional. If set to true, a new revision will be created from the template even if the system doesn't detect any changes from the previously deployed revision. This may be useful for cases where the underlying resources need to be recreated or reinitialized. For example if the image is specified by label, but the underlying image digest has changed) or if the container performs deployment initialization work that needs to be performed again.
     * @param {string} params.name - (Required) The fully qualified name of this WorkerPool. In CreateWorkerPoolRequest, this field is ignored, and instead composed from CreateWorkerPoolRequest.parent and CreateWorkerPoolRequest.worker_id. Format: `projects/{project}/locations/{location}/workerPools/{worker_id}`
     * @param {string} params.updateMask - Optional. The list of fields to be updated.
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated and default values populated, without persisting the request or updating any resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Deletes a WorkerPool.
     * @param {string} params.etag - A system-generated fingerprint for this version of the resource. May be used to detect modification conflict during updates.
     * @param {string} params.name - (Required) Required. The full name of the WorkerPool. Format: `projects/{project}/locations/{location}/workerPools/{worker_pool}`, where `{project}` can be project id or number.
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated without actually deleting any resources.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Gets the IAM Access Control policy currently in effect for the given Cloud Run WorkerPool. This result does not include any inherited policies.
     * @param {integer} params.options.requestedPolicyVersion - Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.getIamPolicy = (params) => this._makeRequest('v2/{+resource}:getIamPolicy', 'GET', params);

    /**
     * Sets the IAM Access control policy for the specified WorkerPool. Overwrites any existing policy.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.setIamPolicy = (params) => this._makeRequest('v2/{+resource}:setIamPolicy', 'POST', params);

    /**
     * Returns permissions that a caller has on the specified Project. There are no permissions required for making this API call.
     * @param {string} params.resource - (Required) REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.testIamPermissions = (params) => this._makeRequest('v2/{+resource}:testIamPermissions', 'POST', params);

    this.projects.locations.workerPools.revisions = {};

    /**
     * Gets information about a Revision.
     * @param {string} params.name - (Required) Required. The full name of the Revision. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision}
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.revisions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Lists Revisions from a given Service, or from a given location. Results are sorted by creation time, descending.
     * @param {integer} params.pageSize - Maximum number of revisions to return in this call.
     * @param {string} params.pageToken - A page token received from a previous call to ListRevisions. All other parameters must match.
     * @param {string} params.parent - (Required) Required. The Service from which the Revisions should be listed. To list all Revisions across Services, use "-" instead of Service name. Format: projects/{project}/locations/{location}/services/{service}
     * @param {boolean} params.showDeleted - If true, returns deleted (but unexpired) resources along with active ones.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.revisions.list = (params) => this._makeRequest('v2/{+parent}/revisions', 'GET', params);

    /**
     * Deletes a Revision.
     * @param {string} params.etag - A system-generated fingerprint for this version of the resource. This may be used to detect modification conflict during updates.
     * @param {string} params.name - (Required) Required. The name of the Revision to delete. Format: projects/{project}/locations/{location}/services/{service}/revisions/{revision}
     * @param {boolean} params.validateOnly - Indicates that the request should be validated without actually deleting any resources.
     * @return {object} The API response object.
     */
    this.projects.locations.workerPools.revisions.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);
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
