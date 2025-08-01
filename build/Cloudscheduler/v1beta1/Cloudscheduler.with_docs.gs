
/**
 * Google Apps Script client library for the Cloud Scheduler API
 * Documentation URL: https://cloud.google.com/scheduler/
 * @class
 */
class Cloudscheduler {
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
    this._rootUrl = 'https://cloudscheduler.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1beta1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    this.projects.locations.jobs = {};

    /**
     * Lists jobs.
     * @param {string} params.filter - `filter` can be used to specify a subset of jobs. If `filter` equals `target_config="HttpConfig"`, then the http target jobs are retrieved. If `filter` equals `target_config="PubSubConfig"`, then the Pub/Sub target jobs are retrieved. If `filter` equals `labels.foo=value1 labels.foo=value2` then only jobs which are labeled with foo=value1 AND foo=value2 will be returned.
     * @param {boolean} params.legacyAppEngineCron - This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the jobs in the __cron queue will be listed instead.
     * @param {integer} params.pageSize - Requested page size. The maximum page size is 500. If unspecified, the page size will be the maximum. Fewer jobs than requested might be returned, even if more jobs exist; use next_page_token to determine if more jobs exist.
     * @param {string} params.pageToken - A token identifying a page of results the server will return. To request the first page results, page_token must be empty. To request the next page of results, page_token must be the value of next_page_token returned from the previous call to ListJobs. It is an error to switch the value of filter or order_by while iterating through pages.
     * @param {string} params.parent - (Required) Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.list = (params) => this._makeRequest('v1beta1/{+parent}/jobs', 'GET', params);

    /**
     * Gets a job.
     * @param {string} params.name - (Required) Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.get = (params) => this._makeRequest('v1beta1/{+name}', 'GET', params);

    /**
     * Creates a job.
     * @param {string} params.parent - (Required) Required. The location name. For example: `projects/PROJECT_ID/locations/LOCATION_ID`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.create = (params) => this._makeRequest('v1beta1/{+parent}/jobs', 'POST', params);

    /**
     * Updates a job. If successful, the updated Job is returned. If the job does not exist, `NOT_FOUND` is returned. If UpdateJob does not successfully return, it is possible for the job to be in an Job.State.UPDATE_FAILED state. A job in this state may not be executed. If this happens, retry the UpdateJob request until a successful response is received.
     * @param {string} params.name - (Required) Optionally caller-specified in CreateJob, after which it becomes output only. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`. * `PROJECT_ID` can contain letters ([A-Za-z]), numbers ([0-9]), hyphens (-), colons (:), or periods (.). For more information, see [Identifying projects](https://cloud.google.com/resource-manager/docs/creating-managing-projects#identifying_projects) * `LOCATION_ID` is the canonical ID for the job's location. The list of available locations can be obtained by calling ListLocations. For more information, see https://cloud.google.com/about/locations/. * `JOB_ID` can contain only letters ([A-Za-z]), numbers ([0-9]), hyphens (-), or underscores (_). The maximum length is 500 characters.
     * @param {string} params.updateMask - A mask used to specify which fields of the job are being updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.patch = (params) => this._makeRequest('v1beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a job.
     * @param {boolean} params.legacyAppEngineCron - This field is used to manage the legacy App Engine Cron jobs using the Cloud Scheduler API. If the field is set to true, the job in the __cron queue with the corresponding name will be deleted instead.
     * @param {string} params.name - (Required) Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.delete = (params) => this._makeRequest('v1beta1/{+name}', 'DELETE', params);

    /**
     * Pauses a job. If a job is paused then the system will stop executing the job until it is re-enabled via ResumeJob. The state of the job is stored in state; if paused it will be set to Job.State.PAUSED. A job must be in Job.State.ENABLED to be paused.
     * @param {string} params.name - (Required) Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.pause = (params) => this._makeRequest('v1beta1/{+name}:pause', 'POST', params);

    /**
     * Resume a job. This method reenables a job after it has been Job.State.PAUSED. The state of a job is stored in Job.state; after calling this method it will be set to Job.State.ENABLED. A job must be in Job.State.PAUSED to be resumed.
     * @param {string} params.name - (Required) Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.resume = (params) => this._makeRequest('v1beta1/{+name}:resume', 'POST', params);

    /**
     * Forces a job to run now. When this method is called, Cloud Scheduler will dispatch the job, even if the job is already running.
     * @param {string} params.name - (Required) Required. The job name. For example: `projects/PROJECT_ID/locations/LOCATION_ID/jobs/JOB_ID`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.run = (params) => this._makeRequest('v1beta1/{+name}:run', 'POST', params);
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
