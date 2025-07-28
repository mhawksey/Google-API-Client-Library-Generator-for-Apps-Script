
/**
 * Google Apps Script client library for the Dataflow API
 * Documentation URL: https://cloud.google.com/dataflow
 * @class
 */
class Dataflow {
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
    this._rootUrl = 'https://dataflow.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Deletes a snapshot.
     * @param {string} params.location - The location that contains this snapshot.
     * @param {string} params.projectId - (Required) The ID of the Cloud Platform project that the snapshot belongs to.
     * @param {string} params.snapshotId - The ID of the snapshot.
     * @return {object} The API response object.
     */
    this.projects.deleteSnapshots = (params) => this._makeRequest('v1b3/projects/{projectId}/snapshots', 'DELETE', params);

    /**
     * Send a worker_message to the service.
     * @param {string} params.projectId - (Required) The project to send the WorkerMessages to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.workerMessages = (params) => this._makeRequest('v1b3/projects/{projectId}/WorkerMessages', 'POST', params);

    this.projects.snapshots = {};

    /**
     * Gets information about a snapshot.
     * @param {string} params.location - The location that contains this snapshot.
     * @param {string} params.projectId - (Required) The ID of the Cloud Platform project that the snapshot belongs to.
     * @param {string} params.snapshotId - (Required) The ID of the snapshot.
     * @return {object} The API response object.
     */
    this.projects.snapshots.get = (params) => this._makeRequest('v1b3/projects/{projectId}/snapshots/{snapshotId}', 'GET', params);

    /**
     * Lists snapshots.
     * @param {string} params.jobId - If specified, list snapshots created from this job.
     * @param {string} params.location - The location to list snapshots in.
     * @param {string} params.projectId - (Required) The project ID to list snapshots for.
     * @return {object} The API response object.
     */
    this.projects.snapshots.list = (params) => this._makeRequest('v1b3/projects/{projectId}/snapshots', 'GET', params);

    this.projects.jobs = {};

    /**
     * A Job is a multi-stage computation graph run by the Cloud Dataflow service. Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
     * @param {string} params.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} params.projectId - (Required) The ID of the Cloud Platform project that the job belongs to.
     * @param {string} params.replaceJobId - Deprecated. This field is now in the Job message.
     * @param {string} params.view - The level of information requested in response.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobs.create = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs', 'POST', params);

    /**
     * Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
     * @param {string} params.jobId - (Required) The job ID.
     * @param {string} params.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} params.projectId - (Required) The ID of the Cloud Platform project that the job belongs to.
     * @param {string} params.view - The level of information requested in response.
     * @return {object} The API response object.
     */
    this.projects.jobs.get = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}', 'GET', params);

    /**
     * Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
     * @param {string} params.jobId - (Required) The job ID.
     * @param {string} params.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} params.projectId - (Required) The ID of the Cloud Platform project that the job belongs to.
     * @param {string} params.updateMask - The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, an error will be returned as we cannot update both state and mask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobs.update = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}', 'PUT', params);

    /**
     * List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`.
     * @param {string} params.filter - The kind of filter to use.
     * @param {string} params.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} params.name - Optional. The job name.
     * @param {integer} params.pageSize - If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
     * @param {string} params.pageToken - Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
     * @param {string} params.projectId - (Required) The project which owns the jobs.
     * @param {string} params.view - Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.
     * @return {object} The API response object.
     */
    this.projects.jobs.list = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs', 'GET', params);

    /**
     * List the jobs of a project across all regions. **Note:** This method doesn't support filtering the list of jobs by name.
     * @param {string} params.filter - The kind of filter to use.
     * @param {string} params.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} params.name - Optional. The job name.
     * @param {integer} params.pageSize - If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
     * @param {string} params.pageToken - Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
     * @param {string} params.projectId - (Required) The project which owns the jobs.
     * @param {string} params.view - Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.
     * @return {object} The API response object.
     */
    this.projects.jobs.aggregated = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs:aggregated', 'GET', params);

    /**
     * Snapshot the state of a streaming job.
     * @param {string} params.jobId - (Required) The job to be snapshotted.
     * @param {string} params.projectId - (Required) The project which owns the job to be snapshotted.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobs.snapshot = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}:snapshot', 'POST', params);

    /**
     * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
     * @param {string} params.jobId - (Required) The job to get metrics for.
     * @param {string} params.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} params.projectId - (Required) A project id.
     * @param {string} params.startTime - Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
     * @return {object} The API response object.
     */
    this.projects.jobs.getMetrics = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/metrics', 'GET', params);

    this.projects.jobs.debug = {};

    /**
     * Get encoded debug configuration for component. Not cacheable.
     * @param {string} params.jobId - (Required) The job id.
     * @param {string} params.projectId - (Required) The project id.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobs.debug.getConfig = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig', 'POST', params);

    /**
     * Send encoded debug capture data for component.
     * @param {string} params.jobId - (Required) The job id.
     * @param {string} params.projectId - (Required) The project id.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobs.debug.sendCapture = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture', 'POST', params);

    this.projects.jobs.messages = {};

    /**
     * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
     * @param {string} params.endTime - Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
     * @param {string} params.jobId - (Required) The job to get messages about.
     * @param {string} params.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} params.minimumImportance - Filter to only get messages with importance >= level
     * @param {integer} params.pageSize - If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
     * @param {string} params.pageToken - If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
     * @param {string} params.projectId - (Required) A project id.
     * @param {string} params.startTime - If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
     * @return {object} The API response object.
     */
    this.projects.jobs.messages.list = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/messages', 'GET', params);

    this.projects.jobs.workItems = {};

    /**
     * Reports the status of dataflow WorkItems leased by a worker.
     * @param {string} params.jobId - (Required) The job which the WorkItem is part of.
     * @param {string} params.projectId - (Required) The project which owns the WorkItem's job.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobs.workItems.reportStatus = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus', 'POST', params);

    /**
     * Leases a dataflow WorkItem to run.
     * @param {string} params.jobId - (Required) Identifies the workflow job this worker belongs to.
     * @param {string} params.projectId - (Required) Identifies the project this worker belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.jobs.workItems.lease = (params) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease', 'POST', params);

    this.projects.templates = {};

    /**
     * Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`.
     * @param {string} params.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.templates.create = (params) => this._makeRequest('v1b3/projects/{projectId}/templates', 'POST', params);

    /**
     * Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`.
     * @param {string} params.dynamicTemplate.gcsPath - Path to the dynamic template specification file on Cloud Storage. The file must be a JSON serialized `DynamicTemplateFileSpec` object.
     * @param {string} params.dynamicTemplate.stagingLocation - Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.
     * @param {string} params.gcsPath - A Cloud Storage path to the template to use to create the job. Must be valid Cloud Storage URL, beginning with `gs://`.
     * @param {string} params.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     * @param {string} params.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {boolean} params.validateOnly - If true, the request is validated but not actually executed. Defaults to false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.templates.launch = (params) => this._makeRequest('v1b3/projects/{projectId}/templates:launch', 'POST', params);

    /**
     * Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved.
     * @param {string} params.gcsPath - Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
     * @param {string} params.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     * @param {string} params.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {string} params.view - The view to retrieve. Defaults to METADATA_ONLY.
     * @return {object} The API response object.
     */
    this.projects.templates.get = (params) => this._makeRequest('v1b3/projects/{projectId}/templates:get', 'GET', params);

    this.projects.locations = {};

    /**
     * Send a worker_message to the service.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job.
     * @param {string} params.projectId - (Required) The project to send the WorkerMessages to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.workerMessages = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/WorkerMessages', 'POST', params);

    this.projects.locations.snapshots = {};

    /**
     * Gets information about a snapshot.
     * @param {string} params.location - (Required) The location that contains this snapshot.
     * @param {string} params.projectId - (Required) The ID of the Cloud Platform project that the snapshot belongs to.
     * @param {string} params.snapshotId - (Required) The ID of the snapshot.
     * @return {object} The API response object.
     */
    this.projects.locations.snapshots.get = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}', 'GET', params);

    /**
     * Deletes a snapshot.
     * @param {string} params.location - (Required) The location that contains this snapshot.
     * @param {string} params.projectId - (Required) The ID of the Cloud Platform project that the snapshot belongs to.
     * @param {string} params.snapshotId - (Required) The ID of the snapshot.
     * @return {object} The API response object.
     */
    this.projects.locations.snapshots.delete = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}', 'DELETE', params);

    /**
     * Lists snapshots.
     * @param {string} params.jobId - If specified, list snapshots created from this job.
     * @param {string} params.location - (Required) The location to list snapshots in.
     * @param {string} params.projectId - (Required) The project ID to list snapshots for.
     * @return {object} The API response object.
     */
    this.projects.locations.snapshots.list = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/snapshots', 'GET', params);

    this.projects.locations.jobs = {};

    /**
     * A Job is a multi-stage computation graph run by the Cloud Dataflow service. Creates a Cloud Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} params.projectId - (Required) The ID of the Cloud Platform project that the job belongs to.
     * @param {string} params.replaceJobId - Deprecated. This field is now in the Job message.
     * @param {string} params.view - The level of information requested in response.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.create = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs', 'POST', params);

    /**
     * Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
     * @param {string} params.jobId - (Required) The job ID.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} params.projectId - (Required) The ID of the Cloud Platform project that the job belongs to.
     * @param {string} params.view - The level of information requested in response.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.get = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}', 'GET', params);

    /**
     * Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
     * @param {string} params.jobId - (Required) The job ID.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} params.projectId - (Required) The ID of the Cloud Platform project that the job belongs to.
     * @param {string} params.updateMask - The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, an error will be returned as we cannot update both state and mask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.update = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}', 'PUT', params);

    /**
     * List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`.
     * @param {string} params.filter - The kind of filter to use.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} params.name - Optional. The job name.
     * @param {integer} params.pageSize - If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
     * @param {string} params.pageToken - Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
     * @param {string} params.projectId - (Required) The project which owns the jobs.
     * @param {string} params.view - Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.list = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs', 'GET', params);

    /**
     * Snapshot the state of a streaming job.
     * @param {string} params.jobId - (Required) The job to be snapshotted.
     * @param {string} params.location - (Required) The location that contains this job.
     * @param {string} params.projectId - (Required) The project which owns the job to be snapshotted.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.snapshot = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}:snapshot', 'POST', params);

    /**
     * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
     * @param {string} params.jobId - (Required) The job to get metrics for.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} params.projectId - (Required) A project id.
     * @param {string} params.startTime - Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.getMetrics = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics', 'GET', params);

    /**
     * Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
     * @param {string} params.jobId - (Required) The job to get execution details for.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {integer} params.pageSize - If specified, determines the maximum number of stages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
     * @param {string} params.pageToken - If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
     * @param {string} params.projectId - (Required) A project id.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.getExecutionDetails = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/executionDetails', 'GET', params);

    this.projects.locations.jobs.debug = {};

    /**
     * Get encoded debug configuration for component. Not cacheable.
     * @param {string} params.jobId - (Required) The job id.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} params.projectId - (Required) The project id.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.debug.getConfig = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig', 'POST', params);

    /**
     * Send encoded debug capture data for component.
     * @param {string} params.jobId - (Required) The job id.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} params.projectId - (Required) The project id.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.debug.sendCapture = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture', 'POST', params);

    /**
     * Get worker stacktraces from debug capture.
     * @param {string} params.jobId - (Required) The job for which to get stacktraces.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} params.projectId - (Required) The project id.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.debug.getWorkerStacktraces = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getWorkerStacktraces', 'POST', params);

    this.projects.locations.jobs.snapshots = {};

    /**
     * Lists snapshots.
     * @param {string} params.jobId - (Required) If specified, list snapshots created from this job.
     * @param {string} params.location - (Required) The location to list snapshots in.
     * @param {string} params.projectId - (Required) The project ID to list snapshots for.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.snapshots.list = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/snapshots', 'GET', params);

    this.projects.locations.jobs.messages = {};

    /**
     * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
     * @param {string} params.endTime - Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
     * @param {string} params.jobId - (Required) The job to get messages about.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} params.minimumImportance - Filter to only get messages with importance >= level
     * @param {integer} params.pageSize - If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
     * @param {string} params.pageToken - If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
     * @param {string} params.projectId - (Required) A project id.
     * @param {string} params.startTime - If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.messages.list = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages', 'GET', params);

    this.projects.locations.jobs.stages = {};

    /**
     * Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
     * @param {string} params.endTime - Upper time bound of work items to include, by start time.
     * @param {string} params.jobId - (Required) The job to get execution details for.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {integer} params.pageSize - If specified, determines the maximum number of work items to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
     * @param {string} params.pageToken - If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
     * @param {string} params.projectId - (Required) A project id.
     * @param {string} params.stageId - (Required) The stage for which to fetch information.
     * @param {string} params.startTime - Lower time bound of work items to include, by start time.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.stages.getExecutionDetails = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/stages/{stageId}/executionDetails', 'GET', params);

    this.projects.locations.jobs.workItems = {};

    /**
     * Reports the status of dataflow WorkItems leased by a worker.
     * @param {string} params.jobId - (Required) The job which the WorkItem is part of.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
     * @param {string} params.projectId - (Required) The project which owns the WorkItem's job.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.workItems.reportStatus = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus', 'POST', params);

    /**
     * Leases a dataflow WorkItem to run.
     * @param {string} params.jobId - (Required) Identifies the workflow job this worker belongs to.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
     * @param {string} params.projectId - (Required) Identifies the project this worker belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.workItems.lease = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease', 'POST', params);

    this.projects.locations.templates = {};

    /**
     * Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     * @param {string} params.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.create = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/templates', 'POST', params);

    /**
     * Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`.
     * @param {string} params.dynamicTemplate.gcsPath - Path to the dynamic template specification file on Cloud Storage. The file must be a JSON serialized `DynamicTemplateFileSpec` object.
     * @param {string} params.dynamicTemplate.stagingLocation - Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.
     * @param {string} params.gcsPath - A Cloud Storage path to the template to use to create the job. Must be valid Cloud Storage URL, beginning with `gs://`.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     * @param {string} params.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {boolean} params.validateOnly - If true, the request is validated but not actually executed. Defaults to false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.launch = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/templates:launch', 'POST', params);

    /**
     * Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved.
     * @param {string} params.gcsPath - Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
     * @param {string} params.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     * @param {string} params.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {string} params.view - The view to retrieve. Defaults to METADATA_ONLY.
     * @return {object} The API response object.
     */
    this.projects.locations.templates.get = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/templates:get', 'GET', params);

    this.projects.locations.flexTemplates = {};

    /**
     * Launch a job with a FlexTemplate.
     * @param {string} params.location - (Required) Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. E.g., us-central1, us-west1.
     * @param {string} params.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.flexTemplates.launch = (params) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/flexTemplates:launch', 'POST', params);
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
