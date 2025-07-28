
/**
 * Google Apps Script client library for the Error Reporting API
 * Documentation URL: https://cloud.google.com/error-reporting/
 * @class
 */
class Clouderrorreporting {
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
    this._rootUrl = 'https://clouderrorreporting.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Deletes all error events of a given project.
     * @param {string} params.projectName - (Required) Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectID}/locations/{location}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840) and `{location}` is a Cloud region. Examples: `projects/my-project-123`, `projects/my-project-123/locations/global`. For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified.
     * @return {object} The API response object.
     */
    this.projects.deleteEvents = (params) => this._makeRequest('v1beta1/{+projectName}/events', 'DELETE', params);

    this.projects.groups = {};

    /**
     * Get the specified group.
     * @param {string} params.groupName - (Required) Required. The group resource name. Written as either `projects/{projectID}/groups/{group_id}` or `projects/{projectID}/locations/{location}/groups/{group_id}`. Call groupStats.list to return a list of groups belonging to this project. Examples: `projects/my-project-123/groups/my-group`, `projects/my-project-123/locations/global/groups/my-group` In the group resource name, the `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified.
     * @return {object} The API response object.
     */
    this.projects.groups.get = (params) => this._makeRequest('v1beta1/{+groupName}', 'GET', params);

    /**
     * Replace the data for the specified group. Fails if the group does not exist.
     * @param {string} params.name - (Required) The group resource name. Written as `projects/{projectID}/groups/{group_id}` or `projects/{projectID}/locations/{location}/groups/{group_id}` Examples: `projects/my-project-123/groups/my-group`, `projects/my-project-123/locations/us-central1/groups/my-group` In the group resource name, the `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.groups.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);

    this.projects.groupStats = {};

    /**
     * Lists the specified groups.
     * @param {string} params.alignment - Optional. The alignment of the timed counts to be returned. Default is `ALIGNMENT_EQUAL_AT_END`.
     * @param {string} params.alignmentTime - Optional. Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC.
     * @param {string} params.groupId - Optional. List all ErrorGroupStats with these IDs. The `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice] (https://cloud.google.com/terms/cloud-privacy-notice).
     * @param {string} params.order - Optional. The sort order in which the results are returned. Default is `COUNT_DESC`.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return per response. Default is 20.
     * @param {string} params.pageToken - Optional. A next_page_token provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request.
     * @param {string} params.projectName - (Required) Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectNumber}`, where `{projectID}` and `{projectNumber}` can be found in the [Google Cloud console](https://support.google.com/cloud/answer/6158840). It may also include a location, such as `projects/{projectID}/locations/{location}` where `{location}` is a cloud region. Examples: `projects/my-project-123`, `projects/5551234`, `projects/my-project-123/locations/us-central1`, `projects/5551234/locations/us-central1`. For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified. Use `-` as a wildcard to request group stats from all regions.
     * @param {string} params.serviceFilter.resourceType - Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).
     * @param {string} params.serviceFilter.service - Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
     * @param {string} params.serviceFilter.version - Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
     * @param {string} params.timeRange.period - Restricts the query to the specified time range.
     * @param {string} params.timedCountDuration - Optional. The preferred duration for a single returned TimedCount. If not set, no timed counts are returned.
     * @return {object} The API response object.
     */
    this.projects.groupStats.list = (params) => this._makeRequest('v1beta1/{+projectName}/groupStats', 'GET', params);

    this.projects.events = {};

    /**
     * Lists the specified events.
     * @param {string} params.groupId - Required. The group for which events shall be returned. The `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice).
     * @param {integer} params.pageSize - Optional. The maximum number of results to return per response.
     * @param {string} params.pageToken - Optional. A `next_page_token` provided by a previous response.
     * @param {string} params.projectName - (Required) Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectID}/locations/{location}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840) and `{location}` is a Cloud region. Examples: `projects/my-project-123`, `projects/my-project-123/locations/global`. For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified.
     * @param {string} params.serviceFilter.resourceType - Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).
     * @param {string} params.serviceFilter.service - Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
     * @param {string} params.serviceFilter.version - Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
     * @param {string} params.timeRange.period - Restricts the query to the specified time range.
     * @return {object} The API response object.
     */
    this.projects.events.list = (params) => this._makeRequest('v1beta1/{+projectName}/events', 'GET', params);

    /**
     * Report an individual error event and record the event to a log. This endpoint accepts **either** an OAuth token, **or** an [API key](https://support.google.com/cloud/answer/6158862) for authentication. To use an API key, append it to the URL as the value of a `key` parameter. For example: `POST https://clouderrorreporting.googleapis.com/v1beta1/{projectName}/events:report?key=123ABC456` **Note:** [Error Reporting] (https://cloud.google.com/error-reporting) is a service built on Cloud Logging and can analyze log entries when all of the following are true: * Customer-managed encryption keys (CMEK) are disabled on the log bucket. * The log bucket satisfies one of the following: * The log bucket is stored in the same project where the logs originated. * The logs were routed to a project, and then that project stored those logs in a log bucket that it owns.
     * @param {string} params.projectName - (Required) Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectId}`, where `{projectId}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840). Example: // `projects/my-project-123`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.events.report = (params) => this._makeRequest('v1beta1/{+projectName}/events:report', 'POST', params);

    this.projects.locations = {};

    /**
     * Deletes all error events of a given project.
     * @param {string} params.projectName - (Required) Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectID}/locations/{location}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840) and `{location}` is a Cloud region. Examples: `projects/my-project-123`, `projects/my-project-123/locations/global`. For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified.
     * @return {object} The API response object.
     */
    this.projects.locations.deleteEvents = (params) => this._makeRequest('v1beta1/{+projectName}/events', 'DELETE', params);

    this.projects.locations.groups = {};

    /**
     * Get the specified group.
     * @param {string} params.groupName - (Required) Required. The group resource name. Written as either `projects/{projectID}/groups/{group_id}` or `projects/{projectID}/locations/{location}/groups/{group_id}`. Call groupStats.list to return a list of groups belonging to this project. Examples: `projects/my-project-123/groups/my-group`, `projects/my-project-123/locations/global/groups/my-group` In the group resource name, the `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.get = (params) => this._makeRequest('v1beta1/{+groupName}', 'GET', params);

    /**
     * Replace the data for the specified group. Fails if the group does not exist.
     * @param {string} params.name - (Required) The group resource name. Written as `projects/{projectID}/groups/{group_id}` or `projects/{projectID}/locations/{location}/groups/{group_id}` Examples: `projects/my-project-123/groups/my-group`, `projects/my-project-123/locations/us-central1/groups/my-group` In the group resource name, the `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice). For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.groups.update = (params) => this._makeRequest('v1beta1/{+name}', 'PUT', params);

    this.projects.locations.groupStats = {};

    /**
     * Lists the specified groups.
     * @param {string} params.alignment - Optional. The alignment of the timed counts to be returned. Default is `ALIGNMENT_EQUAL_AT_END`.
     * @param {string} params.alignmentTime - Optional. Time where the timed counts shall be aligned if rounded alignment is chosen. Default is 00:00 UTC.
     * @param {string} params.groupId - Optional. List all ErrorGroupStats with these IDs. The `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice] (https://cloud.google.com/terms/cloud-privacy-notice).
     * @param {string} params.order - Optional. The sort order in which the results are returned. Default is `COUNT_DESC`.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return per response. Default is 20.
     * @param {string} params.pageToken - Optional. A next_page_token provided by a previous response. To view additional results, pass this token along with the identical query parameters as the first request.
     * @param {string} params.projectName - (Required) Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectNumber}`, where `{projectID}` and `{projectNumber}` can be found in the [Google Cloud console](https://support.google.com/cloud/answer/6158840). It may also include a location, such as `projects/{projectID}/locations/{location}` where `{location}` is a cloud region. Examples: `projects/my-project-123`, `projects/5551234`, `projects/my-project-123/locations/us-central1`, `projects/5551234/locations/us-central1`. For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified. Use `-` as a wildcard to request group stats from all regions.
     * @param {string} params.serviceFilter.resourceType - Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).
     * @param {string} params.serviceFilter.service - Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
     * @param {string} params.serviceFilter.version - Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
     * @param {string} params.timeRange.period - Restricts the query to the specified time range.
     * @param {string} params.timedCountDuration - Optional. The preferred duration for a single returned TimedCount. If not set, no timed counts are returned.
     * @return {object} The API response object.
     */
    this.projects.locations.groupStats.list = (params) => this._makeRequest('v1beta1/{+projectName}/groupStats', 'GET', params);

    this.projects.locations.events = {};

    /**
     * Lists the specified events.
     * @param {string} params.groupId - Required. The group for which events shall be returned. The `group_id` is a unique identifier for a particular error group. The identifier is derived from key parts of the error-log content and is treated as Service Data. For information about how Service Data is handled, see [Google Cloud Privacy Notice](https://cloud.google.com/terms/cloud-privacy-notice).
     * @param {integer} params.pageSize - Optional. The maximum number of results to return per response.
     * @param {string} params.pageToken - Optional. A `next_page_token` provided by a previous response.
     * @param {string} params.projectName - (Required) Required. The resource name of the Google Cloud Platform project. Written as `projects/{projectID}` or `projects/{projectID}/locations/{location}`, where `{projectID}` is the [Google Cloud Platform project ID](https://support.google.com/cloud/answer/6158840) and `{location}` is a Cloud region. Examples: `projects/my-project-123`, `projects/my-project-123/locations/global`. For a list of supported locations, see [Supported Regions](https://cloud.google.com/logging/docs/region-support). `global` is the default when unspecified.
     * @param {string} params.serviceFilter.resourceType - Optional. The exact value to match against [`ServiceContext.resource_type`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.resource_type).
     * @param {string} params.serviceFilter.service - Optional. The exact value to match against [`ServiceContext.service`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.service).
     * @param {string} params.serviceFilter.version - Optional. The exact value to match against [`ServiceContext.version`](/error-reporting/reference/rest/v1beta1/ServiceContext#FIELDS.version).
     * @param {string} params.timeRange.period - Restricts the query to the specified time range.
     * @return {object} The API response object.
     */
    this.projects.locations.events.list = (params) => this._makeRequest('v1beta1/{+projectName}/events', 'GET', params);
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
