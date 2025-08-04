
/**
 * Google Apps Script client library for the Transcoder API
 * Documentation URL: https://cloud.google.com/transcoder/docs/
 * @class
 */
class Transcoder {
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
    this._rootUrl = 'https://transcoder.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    this.projects.locations.jobs = {};

    /**
     * Creates a job in the specified region.
     * @param {string} params.parent - (Required) Required. The parent location to create and process this job. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.create = (params) => this._makeRequest('v1/{+parent}/jobs', 'POST', params);

    /**
     * Lists jobs in the specified region.
     * @param {string} params.filter - The filter expression, following the syntax outlined in https://google.aip.dev/160.
     * @param {string} params.orderBy - One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The `next_page_token` value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.list = (params) => this._makeRequest('v1/{+parent}/jobs', 'GET', params);

    /**
     * Returns the job data.
     * @param {string} params.name - (Required) Required. The name of the job to retrieve. Format: `projects/{project}/locations/{location}/jobs/{job}`
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a job.
     * @param {boolean} params.allowMissing - If set to true, and the job is not found, the request will succeed but no action will be taken on the server.
     * @param {string} params.name - (Required) Required. The name of the job to delete. Format: `projects/{project}/locations/{location}/jobs/{job}`
     * @return {object} The API response object.
     */
    this.projects.locations.jobs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.jobTemplates = {};

    /**
     * Creates a job template in the specified region.
     * @param {string} params.jobTemplateId - Required. The ID to use for the job template, which will become the final component of the job template's resource name. This value should be 4-63 characters, and valid characters must match the regular expression `a-zA-Z*`.
     * @param {string} params.parent - (Required) Required. The parent location to create this job template. Format: `projects/{project}/locations/{location}`
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.jobTemplates.create = (params) => this._makeRequest('v1/{+parent}/jobTemplates', 'POST', params);

    /**
     * Lists job templates in the specified region.
     * @param {string} params.filter - The filter expression, following the syntax outlined in https://google.aip.dev/160.
     * @param {string} params.orderBy - One or more fields to compare and use to sort the output. See https://google.aip.dev/132#ordering.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The `next_page_token` value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The parent location from which to retrieve the collection of job templates. Format: `projects/{project}/locations/{location}`
     * @return {object} The API response object.
     */
    this.projects.locations.jobTemplates.list = (params) => this._makeRequest('v1/{+parent}/jobTemplates', 'GET', params);

    /**
     * Returns the job template data.
     * @param {string} params.name - (Required) Required. The name of the job template to retrieve. Format: `projects/{project}/locations/{location}/jobTemplates/{job_template}`
     * @return {object} The API response object.
     */
    this.projects.locations.jobTemplates.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a job template.
     * @param {boolean} params.allowMissing - If set to true, and the job template is not found, the request will succeed but no action will be taken on the server.
     * @param {string} params.name - (Required) Required. The name of the job template to delete. `projects/{project}/locations/{location}/jobTemplates/{job_template}`
     * @return {object} The API response object.
     */
    this.projects.locations.jobTemplates.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
