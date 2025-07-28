
/**
 * Google Apps Script client library for the Cloud Trace API
 * Documentation URL: https://cloud.google.com/trace
 * @class
 */
class Cloudtrace {
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
    this._rootUrl = 'https://cloudtrace.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    /**
     * Sends trace spans to Cloud Trace. Spans cannot be updated. If the trace ID and span ID already exist, an additional copy of the span will be stored.
     * @param {string} params.projectId - (Required) Required. ID of the Cloud project where the trace data is stored.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.patchTraces = (params) => this._makeRequest('v1/projects/{projectId}/traces', 'PATCH', params);

    this.projects.traces = {};

    /**
     * Returns a list of traces that match the specified filter conditions.
     * @param {string} params.endTime - End of the time interval (inclusive) during which the trace data was collected from the application.
     * @param {string} params.filter - Optional. A filter against properties of the trace. See [filter syntax documentation](https://cloud.google.com/trace/docs/trace-filters) for details.
     * @param {string} params.orderBy - Optional. Field used to sort the returned traces. Can be one of the following: * `trace_id` * `name` (`name` field of root span in the trace) * `duration` (difference between `end_time` and `start_time` fields of the root span) * `start` (`start_time` field of the root span) Descending order can be specified by appending `desc` to the sort field (for example, `name desc`). Only one sort field is permitted.
     * @param {integer} params.pageSize - Optional. Maximum number of traces to return. If not specified or <= 0, the implementation selects a reasonable value. The implementation may return fewer traces than the requested page size.
     * @param {string} params.pageToken - Token identifying the page of results to return. If provided, use the value of the `next_page_token` field from a previous request.
     * @param {string} params.projectId - (Required) Required. ID of the Cloud project where the trace data is stored.
     * @param {string} params.startTime - Start of the time interval (inclusive) during which the trace data was collected from the application.
     * @param {string} params.view - Optional. Type of data returned for traces in the list. Default is `MINIMAL`.
     * @return {object} The API response object.
     */
    this.projects.traces.list = (params) => this._makeRequest('v1/projects/{projectId}/traces', 'GET', params);

    /**
     * Gets a single trace by its ID.
     * @param {string} params.projectId - (Required) Required. ID of the Cloud project where the trace data is stored.
     * @param {string} params.traceId - (Required) Required. ID of the trace to return.
     * @return {object} The API response object.
     */
    this.projects.traces.get = (params) => this._makeRequest('v1/projects/{projectId}/traces/{traceId}', 'GET', params);
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
