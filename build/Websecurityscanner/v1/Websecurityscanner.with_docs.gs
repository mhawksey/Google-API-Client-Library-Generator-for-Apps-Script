
/**
 * Google Apps Script client library for the Web Security Scanner API
 * Documentation URL: https://cloud.google.com/security-command-center/docs/concepts-web-security-scanner-overview/
 * @class
 */
class Websecurityscanner {
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
    this._rootUrl = 'https://websecurityscanner.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.scanConfigs = {};

    /**
     * Creates a new ScanConfig.
     * @param {string} params.parent - (Required) Required. The parent resource name where the scan is created, which should be a project resource name in the format 'projects/{projectId}'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.create = (params) => this._makeRequest('v1/{+parent}/scanConfigs', 'POST', params);

    /**
     * Deletes an existing ScanConfig and its child resources.
     * @param {string} params.name - (Required) Required. The resource name of the ScanConfig to be deleted. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Gets a ScanConfig.
     * @param {string} params.name - (Required) Required. The resource name of the ScanConfig to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists ScanConfigs under a given project.
     * @param {integer} params.pageSize - The maximum number of ScanConfigs to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
     * @param {string} params.pageToken - A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
     * @param {string} params.parent - (Required) Required. The parent resource name, which should be a project resource name in the format 'projects/{projectId}'.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.list = (params) => this._makeRequest('v1/{+parent}/scanConfigs', 'GET', params);

    /**
     * Updates a ScanConfig. This method support partial update of a ScanConfig.
     * @param {string} params.name - (Required) Identifier. The resource name of the ScanConfig. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'. The ScanConfig IDs are generated by the system.
     * @param {string} params.updateMask - Required. The update mask applies to the resource. For the `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Start a ScanRun according to the given ScanConfig.
     * @param {string} params.name - (Required) Required. The resource name of the ScanConfig to be used. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.start = (params) => this._makeRequest('v1/{+name}:start', 'POST', params);

    this.projects.scanConfigs.scanRuns = {};

    /**
     * Gets a ScanRun.
     * @param {string} params.name - (Required) Required. The resource name of the ScanRun to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.scanRuns.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists ScanRuns under a given ScanConfig, in descending order of ScanRun stop time.
     * @param {integer} params.pageSize - The maximum number of ScanRuns to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
     * @param {string} params.pageToken - A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
     * @param {string} params.parent - (Required) Required. The parent resource name, which should be a scan resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}'.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.scanRuns.list = (params) => this._makeRequest('v1/{+parent}/scanRuns', 'GET', params);

    /**
     * Stops a ScanRun. The stopped ScanRun is returned.
     * @param {string} params.name - (Required) Required. The resource name of the ScanRun to be stopped. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.scanRuns.stop = (params) => this._makeRequest('v1/{+name}:stop', 'POST', params);

    this.projects.scanConfigs.scanRuns.crawledUrls = {};

    /**
     * List CrawledUrls under a given ScanRun.
     * @param {integer} params.pageSize - The maximum number of CrawledUrls to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
     * @param {string} params.pageToken - A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
     * @param {string} params.parent - (Required) Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.scanRuns.crawledUrls.list = (params) => this._makeRequest('v1/{+parent}/crawledUrls', 'GET', params);

    this.projects.scanConfigs.scanRuns.findings = {};

    /**
     * Gets a Finding.
     * @param {string} params.name - (Required) Required. The resource name of the Finding to be returned. The name follows the format of 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}/findings/{findingId}'.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.scanRuns.findings.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List Findings under a given ScanRun.
     * @param {string} params.filter - The filter expression. The expression must be in the format: . Supported field: 'finding_type'. Supported operator: '='.
     * @param {integer} params.pageSize - The maximum number of Findings to return, can be limited by server. If not specified or not positive, the implementation will select a reasonable value.
     * @param {string} params.pageToken - A token identifying a page of results to be returned. This should be a `next_page_token` value returned from a previous List request. If unspecified, the first page of results is returned.
     * @param {string} params.parent - (Required) Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.scanRuns.findings.list = (params) => this._makeRequest('v1/{+parent}/findings', 'GET', params);

    this.projects.scanConfigs.scanRuns.findingTypeStats = {};

    /**
     * List all FindingTypeStats under a given ScanRun.
     * @param {string} params.parent - (Required) Required. The parent resource name, which should be a scan run resource name in the format 'projects/{projectId}/scanConfigs/{scanConfigId}/scanRuns/{scanRunId}'.
     * @return {object} The API response object.
     */
    this.projects.scanConfigs.scanRuns.findingTypeStats.list = (params) => this._makeRequest('v1/{+parent}/findingTypeStats', 'GET', params);
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
