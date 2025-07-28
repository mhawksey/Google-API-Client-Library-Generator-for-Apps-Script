
/**
 * Google Apps Script client library for the Storage Transfer API
 * Documentation URL: https://cloud.google.com/storage-transfer/docs
 * @class
 */
class Storagetransfer {
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
    this._rootUrl = 'https://storagetransfer.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.transferOperations = {};

    /**
     * Lists transfer operations. Operations are ordered by their creation time in reverse chronological order.
     * @param {string} params.filter - (Required) Required. A list of query parameters specified as JSON text in the form of: `{"projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobNamePattern": "job_name_pattern", "operationNames":["opid1","opid2",...], "operationNamePattern": "operation_name_pattern", "minCreationTime": "min_creation_time", "maxCreationTime": "max_creation_time", "transferStatuses":["status1","status2",...]}` Since `jobNames`, `operationNames`, and `transferStatuses` support multiple values, they must be specified with array notation. `projectId` is the only argument that is required. If specified, `jobNamePattern` and `operationNamePattern` must match the full job or operation name respectively. '*' is a wildcard matching 0 or more characters. `minCreationTime` and `maxCreationTime` should be timestamps encoded as a string in the [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format. The valid values for `transferStatuses` are case-insensitive: IN_PROGRESS, PAUSED, SUCCESS, FAILED, and ABORTED.
     * @param {string} params.name - (Required) Required. The name of the type being listed; must be `transferOperations`.
     * @param {integer} params.pageSize - The list page size. The max allowed value is 256.
     * @param {string} params.pageToken - The list page token.
     * @return {object} The API response object.
     */
    this.transferOperations.list = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.transferOperations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Cancels a transfer. Use the transferOperations.get method to check if the cancellation succeeded or if the operation completed despite the `cancel` request. When you cancel an operation, the currently running transfer is interrupted. For recurring transfer jobs, the next instance of the transfer job will still run. For example, if your job is configured to run every day at 1pm and you cancel Monday's operation at 1:05pm, Monday's transfer will stop. However, a transfer job will still be attempted on Tuesday. This applies only to currently running operations. If an operation is not currently running, `cancel` does nothing. *Caution:* Canceling a transfer job can leave your data in an unknown state. We recommend that you restore the state at both the destination and the source after the `cancel` request completes so that your data is in a consistent state. When you cancel a job, the next job computes a delta of files and may repair any inconsistent state. For instance, if you run a job every day, and today's job found 10 new files and transferred five files before you canceled the job, tomorrow's transfer operation will compute a new delta with the five files that were not copied today plus any new files discovered tomorrow.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transferOperations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    /**
     * Pauses a transfer operation.
     * @param {string} params.name - (Required) Required. The name of the transfer operation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transferOperations.pause = (params) => this._makeRequest('v1/{+name}:pause', 'POST', params);

    /**
     * Resumes a transfer operation that is paused.
     * @param {string} params.name - (Required) Required. The name of the transfer operation.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transferOperations.resume = (params) => this._makeRequest('v1/{+name}:resume', 'POST', params);

    this.googleServiceAccounts = {};

    /**
     * Returns the Google service account that is used by Storage Transfer Service to access buckets in the project where transfers run or in other projects. Each Google service account is associated with one Google Cloud project. Users should add this service account to the Google Cloud Storage bucket ACLs to grant access to Storage Transfer Service. This service account is created and owned by Storage Transfer Service and can only be used by Storage Transfer Service.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud project that the Google service account is associated with.
     * @return {object} The API response object.
     */
    this.googleServiceAccounts.get = (params) => this._makeRequest('v1/googleServiceAccounts/{projectId}', 'GET', params);

    this.transferJobs = {};

    /**
     * Creates a transfer job that runs periodically.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transferJobs.create = (params) => this._makeRequest('v1/transferJobs', 'POST', params);

    /**
     * Updates a transfer job. Updating a job's transfer spec does not affect transfer operations that are running already. **Note:** The job's status field can be modified using this RPC (for example, to set a job's status to DELETED, DISABLED, or ENABLED).
     * @param {string} params.jobName - (Required) Required. The name of job to update.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transferJobs.patch = (params) => this._makeRequest('v1/{+jobName}', 'PATCH', params);

    /**
     * Gets a transfer job.
     * @param {string} params.jobName - (Required) Required. The job to get.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud project that owns the job.
     * @return {object} The API response object.
     */
    this.transferJobs.get = (params) => this._makeRequest('v1/{+jobName}', 'GET', params);

    /**
     * Lists transfer jobs.
     * @param {string} params.filter - (Required) Required. A list of query parameters specified as JSON text in the form of: ``` { "projectId":"my_project_id", "jobNames":["jobid1","jobid2",...], "jobStatuses":["status1","status2",...], "dataBackend":"QUERY_REPLICATION_CONFIGS", "sourceBucket":"source-bucket-name", "sinkBucket":"sink-bucket-name", } ``` The JSON formatting in the example is for display only; provide the query parameters without spaces or line breaks. * `projectId` is required. * Since `jobNames` and `jobStatuses` support multiple values, their values must be specified with array notation. `jobNames` and `jobStatuses` are optional. Valid values are case-insensitive: * ENABLED * DISABLED * DELETED * Specify `"dataBackend":"QUERY_REPLICATION_CONFIGS"` to return a list of cross-bucket replication jobs. * Limit the results to jobs from a particular bucket with `sourceBucket` and/or to a particular bucket with `sinkBucket`.
     * @param {integer} params.pageSize - The list page size. The max allowed value is 256.
     * @param {string} params.pageToken - The list page token.
     * @return {object} The API response object.
     */
    this.transferJobs.list = (params) => this._makeRequest('v1/transferJobs', 'GET', params);

    /**
     * Starts a new operation for the specified transfer job. A `TransferJob` has a maximum of one active `TransferOperation`. If this method is called while a `TransferOperation` is active, an error is returned.
     * @param {string} params.jobName - (Required) Required. The name of the transfer job.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.transferJobs.run = (params) => this._makeRequest('v1/{+jobName}:run', 'POST', params);

    /**
     * Deletes a transfer job. Deleting a transfer job sets its status to DELETED.
     * @param {string} params.jobName - (Required) Required. The job to delete.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud project that owns the job.
     * @return {object} The API response object.
     */
    this.transferJobs.delete = (params) => this._makeRequest('v1/{+jobName}', 'DELETE', params);

    this.projects = {};

    this.projects.agentPools = {};

    /**
     * Creates an agent pool resource.
     * @param {string} params.agentPoolId - Required. The ID of the agent pool to create. The `agent_pool_id` must meet the following requirements: * Length of 128 characters or less. * Not start with the string `goog`. * Start with a lowercase ASCII character, followed by: * Zero or more: lowercase Latin alphabet characters, numerals, hyphens (`-`), periods (`.`), underscores (`_`), or tildes (`~`). * One or more numerals or lowercase ASCII characters. As expressed by the regular expression: `^(?!goog)[a-z]([a-z0-9-._~]*[a-z0-9])?$`.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud project that owns the agent pool.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agentPools.create = (params) => this._makeRequest('v1/projects/{+projectId}/agentPools', 'POST', params);

    /**
     * Updates an existing agent pool resource.
     * @param {string} params.name - (Required) Required. Specifies a unique string that identifies the agent pool. Format: `projects/{project_id}/agentPools/{agent_pool_id}`
     * @param {string} params.updateMask - The [field mask] (https://developers.google.com/protocol-buffers/docs/reference/google.protobuf) of the fields in `agentPool` to update in this request. The following `agentPool` fields can be updated: * display_name * bandwidth_limit
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.agentPools.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets an agent pool.
     * @param {string} params.name - (Required) Required. The name of the agent pool to get.
     * @return {object} The API response object.
     */
    this.projects.agentPools.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists agent pools.
     * @param {string} params.filter - An optional list of query parameters specified as JSON text in the form of: `{"agentPoolNames":["agentpool1","agentpool2",...]}` Since `agentPoolNames` support multiple values, its values must be specified with array notation. When the filter is either empty or not provided, the list returns all agent pools for the project.
     * @param {integer} params.pageSize - The list page size. The max allowed value is `256`.
     * @param {string} params.pageToken - The list page token.
     * @param {string} params.projectId - (Required) Required. The ID of the Google Cloud project that owns the job.
     * @return {object} The API response object.
     */
    this.projects.agentPools.list = (params) => this._makeRequest('v1/projects/{+projectId}/agentPools', 'GET', params);

    /**
     * Deletes an agent pool.
     * @param {string} params.name - (Required) Required. The name of the agent pool to delete.
     * @return {object} The API response object.
     */
    this.projects.agentPools.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
