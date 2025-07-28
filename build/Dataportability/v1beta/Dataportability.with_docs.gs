
/**
 * Google Apps Script client library for the Data Portability API
 * Documentation URL: https://developers.google.com/data-portability
 * @class
 */
class Dataportability {
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
    this._rootUrl = 'https://dataportability.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.portabilityArchive = {};

    /**
     * Initiates a new Archive job for the Portability API.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.portabilityArchive.initiate = (params) => this._makeRequest('v1beta/portabilityArchive:initiate', 'POST', params);

    this.archiveJobs = {};

    /**
     * Retrieves the state of an Archive job for the Portability API.
     * @param {string} params.name - (Required) Required. The archive job ID that is returned when you request the state of the job. The format is: archiveJobs/{archive_job}/portabilityArchiveState. archive_job is the job ID returned by the InitiatePortabilityArchiveResponse.
     * @return {object} The API response object.
     */
    this.archiveJobs.getPortabilityArchiveState = (params) => this._makeRequest('v1beta/{+name}', 'GET', params);

    /**
     * Retries a failed Portability Archive job.
     * @param {string} params.name - (Required) Required. The Archive job ID you're retrying. This is returned by the InitiatePortabilityArchiveResponse. Retrying is only executed if the initial job failed.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.archiveJobs.retry = (params) => this._makeRequest('v1beta/{+name}:retry', 'POST', params);

    /**
     * Cancels a Portability Archive job.
     * @param {string} params.name - (Required) Required. The Archive job ID you're canceling. This is returned by the InitiatePortabilityArchive response. The format is: archiveJobs/{archive_job}. Canceling is only executed if the job is in progress.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.archiveJobs.cancel = (params) => this._makeRequest('v1beta/{+name}:cancel', 'POST', params);

    this.authorization = {};

    /**
     * Revokes OAuth tokens and resets exhausted scopes for a user/project pair. This method allows you to initiate a request after a new consent is granted. This method also indicates that previous archives can be garbage collected. You should call this method when all jobs are complete and all archives are downloaded. Do not call it only when you start a new job.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.authorization.reset = (params) => this._makeRequest('v1beta/authorization:reset', 'POST', params);

    this.accessType = {};

    /**
     * Gets the access type of the token.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.accessType.check = (params) => this._makeRequest('v1beta/accessType:check', 'POST', params);
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
