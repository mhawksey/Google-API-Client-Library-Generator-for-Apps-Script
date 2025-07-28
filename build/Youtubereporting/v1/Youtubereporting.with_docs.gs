
/**
 * Google Apps Script client library for the YouTube Reporting API
 * Documentation URL: https://developers.google.com/youtube/reporting/v1/reports/
 * @class
 */
class Youtubereporting {
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
    this._rootUrl = 'https://youtubereporting.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.reportTypes = {};

    /**
     * Lists report types.
     * @param {boolean} params.includeSystemManaged - If set to true, also system-managed report types will be returned; otherwise only the report types that can be used to create new reporting jobs will be returned.
     * @param {string} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {integer} params.pageSize - Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListReportTypes` method.
     * @return {object} The API response object.
     */
    this.reportTypes.list = (params) => this._makeRequest('v1/reportTypes', 'GET', params);

    this.jobs = {};

    /**
     * Creates a job and returns it.
     * @param {string} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.jobs.create = (params) => this._makeRequest('v1/jobs', 'POST', params);

    /**
     * Lists jobs.
     * @param {boolean} params.includeSystemManaged - If set to true, also system-managed jobs will be returned; otherwise only user-created jobs will be returned. System-managed jobs can neither be modified nor deleted.
     * @param {string} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {integer} params.pageSize - Requested page size. Server may return fewer jobs than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListReportTypesResponse.next_page_token returned in response to the previous call to the `ListJobs` method.
     * @return {object} The API response object.
     */
    this.jobs.list = (params) => this._makeRequest('v1/jobs', 'GET', params);

    /**
     * Gets a job.
     * @param {string} params.jobId - (Required) The ID of the job to retrieve.
     * @param {string} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @return {object} The API response object.
     */
    this.jobs.get = (params) => this._makeRequest('v1/jobs/{jobId}', 'GET', params);

    /**
     * Deletes a job.
     * @param {string} params.jobId - (Required) The ID of the job to delete.
     * @param {string} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @return {object} The API response object.
     */
    this.jobs.delete = (params) => this._makeRequest('v1/jobs/{jobId}', 'DELETE', params);

    this.jobs.reports = {};

    /**
     * Lists reports created by a specific job. Returns NOT_FOUND if the job does not exist.
     * @param {string} params.createdAfter - If set, only reports created after the specified date/time are returned.
     * @param {string} params.jobId - (Required) The ID of the job.
     * @param {string} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {integer} params.pageSize - Requested page size. Server may return fewer report types than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return. Typically, this is the value of ListReportsResponse.next_page_token returned in response to the previous call to the `ListReports` method.
     * @param {string} params.startTimeAtOrAfter - If set, only reports whose start time is greater than or equal the specified date/time are returned.
     * @param {string} params.startTimeBefore - If set, only reports whose start time is smaller than the specified date/time are returned.
     * @return {object} The API response object.
     */
    this.jobs.reports.list = (params) => this._makeRequest('v1/jobs/{jobId}/reports', 'GET', params);

    /**
     * Gets the metadata of a specific report.
     * @param {string} params.jobId - (Required) The ID of the job.
     * @param {string} params.onBehalfOfContentOwner - The content owner's external ID on which behalf the user is acting on. If not set, the user is acting for himself (his own channel).
     * @param {string} params.reportId - (Required) The ID of the report to retrieve.
     * @return {object} The API response object.
     */
    this.jobs.reports.get = (params) => this._makeRequest('v1/jobs/{jobId}/reports/{reportId}', 'GET', params);

    this.media = {};

    /**
     * Method for media download. Download is supported on the URI `/v1/media/{+name}?alt=media`.
     * @param {string} params.resourceName - (Required) Name of the media that is being downloaded.
     * @return {object} The API response object.
     */
    this.media.download = (params) => this._makeRequest('v1/media/{+resourceName}', 'GET', params);
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
