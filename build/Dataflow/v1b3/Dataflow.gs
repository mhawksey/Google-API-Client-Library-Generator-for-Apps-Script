
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
    this._token = config.token || ScriptApp.getOAuthToken();
    this._backoffConfig = Object.assign({ retries: 3, baseDelay: 1000 }, config.backoff);
    this._rootUrl = 'https://dataflow.googleapis.com/';
    this._servicePath = '';


    this.projects = {};

    /**
     * Deletes a snapshot.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - The location that contains this snapshot.
     * @param {string} apiParams.projectId - (Required) The ID of the Cloud Platform project that the snapshot belongs to.
     * @param {string} apiParams.snapshotId - The ID of the snapshot.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.deleteSnapshots = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/snapshots', 'DELETE', apiParams, clientConfig);

    /**
     * Send a worker_message to the service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - (Required) The project to send the WorkerMessages to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.workerMessages = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/WorkerMessages', 'POST', apiParams, clientConfig);

    this.projects.snapshots = {};

    /**
     * Gets information about a snapshot.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - The location that contains this snapshot.
     * @param {string} apiParams.projectId - (Required) The ID of the Cloud Platform project that the snapshot belongs to.
     * @param {string} apiParams.snapshotId - (Required) The ID of the snapshot.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.snapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/snapshots/{snapshotId}', 'GET', apiParams, clientConfig);

    /**
     * Lists snapshots.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - If specified, list snapshots created from this job.
     * @param {string} apiParams.location - The location to list snapshots in.
     * @param {string} apiParams.projectId - (Required) The project ID to list snapshots for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/snapshots', 'GET', apiParams, clientConfig);

    this.projects.jobs = {};

    /**
     * Creates a Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} apiParams.projectId - (Required) The ID of the Cloud Platform project that the job belongs to.
     * @param {string} apiParams.replaceJobId - Deprecated. This field is now in the Job message.
     * @param {string} apiParams.view - The level of information requested in response.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.jobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs', 'POST', apiParams, clientConfig);

    /**
     * Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job ID.
     * @param {string} apiParams.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} apiParams.projectId - (Required) The ID of the Cloud Platform project that the job belongs to.
     * @param {string} apiParams.view - The level of information requested in response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.jobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}', 'GET', apiParams, clientConfig);

    /**
     * Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job ID.
     * @param {string} apiParams.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} apiParams.projectId - (Required) The ID of the Cloud Platform project that the job belongs to.
     * @param {string} apiParams.updateMask - The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, an error will be returned as we cannot update both state and mask.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.jobs.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}', 'PUT', apiParams, clientConfig);

    /**
     * List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The kind of filter to use.
     * @param {string} apiParams.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} apiParams.name - Optional. The job name.
     * @param {integer} apiParams.pageSize - If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
     * @param {string} apiParams.pageToken - Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
     * @param {string} apiParams.projectId - (Required) The project which owns the jobs.
     * @param {string} apiParams.view - Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.jobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs', 'GET', apiParams, clientConfig);

    /**
     * List the jobs of a project across all regions. **Note:** This method doesn't support filtering the list of jobs by name.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The kind of filter to use.
     * @param {string} apiParams.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} apiParams.name - Optional. The job name.
     * @param {integer} apiParams.pageSize - If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
     * @param {string} apiParams.pageToken - Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
     * @param {string} apiParams.projectId - (Required) The project which owns the jobs.
     * @param {string} apiParams.view - Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.jobs.aggregated = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs:aggregated', 'GET', apiParams, clientConfig);

    /**
     * Snapshot the state of a streaming job.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job to be snapshotted.
     * @param {string} apiParams.projectId - (Required) The project which owns the job to be snapshotted.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.jobs.snapshot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}:snapshot', 'POST', apiParams, clientConfig);

    /**
     * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job to get metrics for.
     * @param {string} apiParams.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} apiParams.projectId - (Required) A project id.
     * @param {string} apiParams.startTime - Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.jobs.getMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/metrics', 'GET', apiParams, clientConfig);

    this.projects.jobs.debug = {};

    /**
     * Get encoded debug configuration for component. Not cacheable.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job id.
     * @param {string} apiParams.projectId - (Required) The project id.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.jobs.debug.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/debug/getConfig', 'POST', apiParams, clientConfig);

    /**
     * Send encoded debug capture data for component.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job id.
     * @param {string} apiParams.projectId - (Required) The project id.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.jobs.debug.sendCapture = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/debug/sendCapture', 'POST', apiParams, clientConfig);

    this.projects.jobs.messages = {};

    /**
     * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.endTime - Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
     * @param {string} apiParams.jobId - (Required) The job to get messages about.
     * @param {string} apiParams.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} apiParams.minimumImportance - Filter to only get messages with importance >= level
     * @param {integer} apiParams.pageSize - If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
     * @param {string} apiParams.pageToken - If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
     * @param {string} apiParams.projectId - (Required) A project id.
     * @param {string} apiParams.startTime - If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.jobs.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/messages', 'GET', apiParams, clientConfig);

    this.projects.jobs.workItems = {};

    /**
     * Reports the status of dataflow WorkItems leased by a worker.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job which the WorkItem is part of.
     * @param {string} apiParams.projectId - (Required) The project which owns the WorkItem's job.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.jobs.workItems.reportStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/workItems:reportStatus', 'POST', apiParams, clientConfig);

    /**
     * Leases a dataflow WorkItem to run.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) Identifies the workflow job this worker belongs to.
     * @param {string} apiParams.projectId - (Required) Identifies the project this worker belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.jobs.workItems.lease = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/jobs/{jobId}/workItems:lease', 'POST', apiParams, clientConfig);

    this.projects.templates = {};

    /**
     * Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.templates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/templates', 'POST', apiParams, clientConfig);

    /**
     * Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dynamicTemplate.gcsPath - Path to the dynamic template specification file on Cloud Storage. The file must be a JSON serialized `DynamicTemplateFileSpec` object.
     * @param {string} apiParams.dynamicTemplate.stagingLocation - Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.
     * @param {string} apiParams.gcsPath - A Cloud Storage path to the template to use to create the job. Must be valid Cloud Storage URL, beginning with `gs://`.
     * @param {string} apiParams.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     * @param {string} apiParams.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {boolean} apiParams.validateOnly - If true, the request is validated but not actually executed. Defaults to false.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.templates.launch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/templates:launch', 'POST', apiParams, clientConfig);

    /**
     * Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.gcsPath - Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
     * @param {string} apiParams.location - The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     * @param {string} apiParams.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {string} apiParams.view - The view to retrieve. Defaults to METADATA_ONLY.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.templates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/templates:get', 'GET', apiParams, clientConfig);

    this.projects.locations = {};

    /**
     * Send a worker_message to the service.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job.
     * @param {string} apiParams.projectId - (Required) The project to send the WorkerMessages to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.workerMessages = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/WorkerMessages', 'POST', apiParams, clientConfig);

    this.projects.locations.snapshots = {};

    /**
     * Gets information about a snapshot.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) The location that contains this snapshot.
     * @param {string} apiParams.projectId - (Required) The ID of the Cloud Platform project that the snapshot belongs to.
     * @param {string} apiParams.snapshotId - (Required) The ID of the snapshot.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.snapshots.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}', 'GET', apiParams, clientConfig);

    /**
     * Deletes a snapshot.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) The location that contains this snapshot.
     * @param {string} apiParams.projectId - (Required) The ID of the Cloud Platform project that the snapshot belongs to.
     * @param {string} apiParams.snapshotId - (Required) The ID of the snapshot.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.snapshots.delete = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/snapshots/{snapshotId}', 'DELETE', apiParams, clientConfig);

    /**
     * Lists snapshots.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - If specified, list snapshots created from this job.
     * @param {string} apiParams.location - (Required) The location to list snapshots in.
     * @param {string} apiParams.projectId - (Required) The project ID to list snapshots for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/snapshots', 'GET', apiParams, clientConfig);

    this.projects.locations.jobs = {};

    /**
     * Creates a Dataflow job. To create a job, we recommend using `projects.locations.jobs.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.create` is not recommended, as your job will always start in `us-central1`. Do not enter confidential information when you supply string values using the API.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} apiParams.projectId - (Required) The ID of the Cloud Platform project that the job belongs to.
     * @param {string} apiParams.replaceJobId - Deprecated. This field is now in the Job message.
     * @param {string} apiParams.view - The level of information requested in response.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs', 'POST', apiParams, clientConfig);

    /**
     * Gets the state of the specified Cloud Dataflow job. To get the state of a job, we recommend using `projects.locations.jobs.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.get` is not recommended, as you can only get the state of jobs that are running in `us-central1`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job ID.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} apiParams.projectId - (Required) The ID of the Cloud Platform project that the job belongs to.
     * @param {string} apiParams.view - The level of information requested in response.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}', 'GET', apiParams, clientConfig);

    /**
     * Updates the state of an existing Cloud Dataflow job. To update the state of an existing job, we recommend using `projects.locations.jobs.update` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.update` is not recommended, as you can only update the state of jobs that are running in `us-central1`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job ID.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} apiParams.projectId - (Required) The ID of the Cloud Platform project that the job belongs to.
     * @param {string} apiParams.updateMask - The list of fields to update relative to Job. If empty, only RequestedJobState will be considered for update. If the FieldMask is not empty and RequestedJobState is none/empty, The fields specified in the update mask will be the only ones considered for update. If both RequestedJobState and update_mask are specified, an error will be returned as we cannot update both state and mask.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.update = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}', 'PUT', apiParams, clientConfig);

    /**
     * List the jobs of a project. To list the jobs of a project in a region, we recommend using `projects.locations.jobs.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). To list the all jobs across all regions, use `projects.jobs.aggregated`. Using `projects.jobs.list` is not recommended, because you can only get the list of jobs that are running in `us-central1`. `projects.locations.jobs.list` and `projects.jobs.list` support filtering the list of jobs by name. Filtering by name isn't supported by `projects.jobs.aggregated`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.filter - The kind of filter to use.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains this job.
     * @param {string} apiParams.name - Optional. The job name.
     * @param {integer} apiParams.pageSize - If there are many jobs, limit response to at most this many. The actual number of jobs returned will be the lesser of max_responses and an unspecified server-defined limit.
     * @param {string} apiParams.pageToken - Set this to the 'next_page_token' field of a previous response to request additional results in a long list.
     * @param {string} apiParams.projectId - (Required) The project which owns the jobs.
     * @param {string} apiParams.view - Deprecated. ListJobs always returns summaries now. Use GetJob for other JobViews.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs', 'GET', apiParams, clientConfig);

    /**
     * Snapshot the state of a streaming job.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job to be snapshotted.
     * @param {string} apiParams.location - (Required) The location that contains this job.
     * @param {string} apiParams.projectId - (Required) The project which owns the job to be snapshotted.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.snapshot = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}:snapshot', 'POST', apiParams, clientConfig);

    /**
     * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.getMetrics` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.getMetrics` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job to get metrics for.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} apiParams.projectId - (Required) A project id.
     * @param {string} apiParams.startTime - Return only metric data that has changed since this time. Default is to return all information about all metrics for the job.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.getMetrics = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/metrics', 'GET', apiParams, clientConfig);

    /**
     * Request detailed information about the execution status of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job to get execution details for.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {integer} apiParams.pageSize - If specified, determines the maximum number of stages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
     * @param {string} apiParams.pageToken - If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
     * @param {string} apiParams.projectId - (Required) A project id.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.getExecutionDetails = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/executionDetails', 'GET', apiParams, clientConfig);

    this.projects.locations.jobs.debug = {};

    /**
     * Get encoded debug configuration for component. Not cacheable.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job id.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} apiParams.projectId - (Required) The project id.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.debug.getConfig = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getConfig', 'POST', apiParams, clientConfig);

    /**
     * Send encoded debug capture data for component.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job id.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} apiParams.projectId - (Required) The project id.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.debug.sendCapture = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/sendCapture', 'POST', apiParams, clientConfig);

    /**
     * Get worker stacktraces from debug capture.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job for which to get stacktraces.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} apiParams.projectId - (Required) The project id.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.debug.getWorkerStacktraces = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/debug/getWorkerStacktraces', 'POST', apiParams, clientConfig);

    this.projects.locations.jobs.snapshots = {};

    /**
     * Lists snapshots.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) If specified, list snapshots created from this job.
     * @param {string} apiParams.location - (Required) The location to list snapshots in.
     * @param {string} apiParams.projectId - (Required) The project ID to list snapshots for.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.snapshots.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/snapshots', 'GET', apiParams, clientConfig);

    this.projects.locations.jobs.messages = {};

    /**
     * Request the job status. To request the status of a job, we recommend using `projects.locations.jobs.messages.list` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.jobs.messages.list` is not recommended, as you can only request the status of jobs that are running in `us-central1`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.endTime - Return only messages with timestamps < end_time. The default is now (i.e. return up to the latest messages available).
     * @param {string} apiParams.jobId - (Required) The job to get messages about.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {string} apiParams.minimumImportance - Filter to only get messages with importance >= level
     * @param {integer} apiParams.pageSize - If specified, determines the maximum number of messages to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
     * @param {string} apiParams.pageToken - If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
     * @param {string} apiParams.projectId - (Required) A project id.
     * @param {string} apiParams.startTime - If specified, return only messages with timestamps >= start_time. The default is the job creation time (i.e. beginning of messages).
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.messages.list = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/messages', 'GET', apiParams, clientConfig);

    this.projects.locations.jobs.stages = {};

    /**
     * Request detailed information about the execution status of a stage of the job. EXPERIMENTAL. This API is subject to change or removal without notice.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.endTime - Upper time bound of work items to include, by start time.
     * @param {string} apiParams.jobId - (Required) The job to get execution details for.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the job specified by job_id.
     * @param {integer} apiParams.pageSize - If specified, determines the maximum number of work items to return. If unspecified, the service may choose an appropriate default, or may return an arbitrarily large number of results.
     * @param {string} apiParams.pageToken - If supplied, this should be the value of next_page_token returned by an earlier call. This will cause the next page of results to be returned.
     * @param {string} apiParams.projectId - (Required) A project id.
     * @param {string} apiParams.stageId - (Required) The stage for which to fetch information.
     * @param {string} apiParams.startTime - Lower time bound of work items to include, by start time.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.stages.getExecutionDetails = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/stages/{stageId}/executionDetails', 'GET', apiParams, clientConfig);

    this.projects.locations.jobs.workItems = {};

    /**
     * Reports the status of dataflow WorkItems leased by a worker.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) The job which the WorkItem is part of.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
     * @param {string} apiParams.projectId - (Required) The project which owns the WorkItem's job.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.workItems.reportStatus = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:reportStatus', 'POST', apiParams, clientConfig);

    /**
     * Leases a dataflow WorkItem to run.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.jobId - (Required) Identifies the workflow job this worker belongs to.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) that contains the WorkItem's job.
     * @param {string} apiParams.projectId - (Required) Identifies the project this worker belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.jobs.workItems.lease = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/jobs/{jobId}/workItems:lease', 'POST', apiParams, clientConfig);

    this.projects.locations.templates = {};

    /**
     * Creates a Cloud Dataflow job from a template. Do not enter confidential information when you supply string values using the API. To create a job, we recommend using `projects.locations.templates.create` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.create` is not recommended, because your job will always start in `us-central1`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     * @param {string} apiParams.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.create = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/templates', 'POST', apiParams, clientConfig);

    /**
     * Launches a template. To launch a template, we recommend using `projects.locations.templates.launch` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.launch` is not recommended, because jobs launched from the template will always start in `us-central1`.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.dynamicTemplate.gcsPath - Path to the dynamic template specification file on Cloud Storage. The file must be a JSON serialized `DynamicTemplateFileSpec` object.
     * @param {string} apiParams.dynamicTemplate.stagingLocation - Cloud Storage path for staging dependencies. Must be a valid Cloud Storage URL, beginning with `gs://`.
     * @param {string} apiParams.gcsPath - A Cloud Storage path to the template to use to create the job. Must be valid Cloud Storage URL, beginning with `gs://`.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     * @param {string} apiParams.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {boolean} apiParams.validateOnly - If true, the request is validated but not actually executed. Defaults to false.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.launch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/templates:launch', 'POST', apiParams, clientConfig);

    /**
     * Get the template associated with a template. To get the template, we recommend using `projects.locations.templates.get` with a [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints). Using `projects.templates.get` is not recommended, because only templates that are running in `us-central1` are retrieved.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.gcsPath - Required. A Cloud Storage path to the template from which to create the job. Must be valid Cloud Storage URL, beginning with 'gs://'.
     * @param {string} apiParams.location - (Required) The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request.
     * @param {string} apiParams.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {string} apiParams.view - The view to retrieve. Defaults to METADATA_ONLY.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.templates.get = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/templates:get', 'GET', apiParams, clientConfig);

    this.projects.locations.flexTemplates = {};

    /**
     * Launch a job with a FlexTemplate.
     * @param {object} apiParams - The parameters for the API request.
     * @param {string} apiParams.location - (Required) Required. The [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) to which to direct the request. E.g., us-central1, us-west1.
     * @param {string} apiParams.projectId - (Required) Required. The ID of the Cloud Platform project that the job belongs to.
     * @param {object} apiParams.requestBody - The request body.
     * @param {object} [clientConfig] - Optional client-side configuration.
     * @param {string} [clientConfig.responseType] - The expected response type. Setting to 'blob' returns the raw file content. Omit for JSON.
     * @return {Promise<object>} A Promise that resolves with the response object. The response payload is in the `data` property, which will be a JSON object or a Blob.
     */
    this.projects.locations.flexTemplates.launch = async (apiParams = {}, clientConfig = {}) => this._makeRequest('v1b3/projects/{projectId}/locations/{location}/flexTemplates:launch', 'POST', apiParams, clientConfig);
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
