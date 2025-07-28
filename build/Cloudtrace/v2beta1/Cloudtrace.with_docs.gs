
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

    this.projects.traceSinks = {};

    /**
     * List all sinks for the parent resource (GCP project).
     * @param {integer} params.pageSize - Optional. The maximum number of results to return from this request. Non-positive values are ignored. The presence of `next_page_token` in the response indicates that more results might be available.
     * @param {string} params.pageToken - Optional. If present, then retrieve the next batch of results from the preceding call to this method. `page_token` must be the value of `next_page_token` from the previous response. The values of other method parameters should be identical to those in the previous call.
     * @param {string} params.parent - (Required) Required. The parent resource whose sinks are to be listed (currently only project parent resources are supported): "projects/[PROJECT_ID]"
     * @return {object} The API response object.
     */
    this.projects.traceSinks.list = (params) => this._makeRequest('v2beta1/{+parent}/traceSinks', 'GET', params);

    /**
     * Get a trace sink by name under the parent resource (GCP project).
     * @param {string} params.name - (Required) Required. The resource name of the sink: "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]" Example: `"projects/12345/traceSinks/my-sink-id"`.
     * @return {object} The API response object.
     */
    this.projects.traceSinks.get = (params) => this._makeRequest('v2beta1/{+name}', 'GET', params);

    /**
     * Creates a sink that exports trace spans to a destination. The export of newly-ingested traces begins immediately, unless the sink's `writer_identity` is not permitted to write to the destination. A sink can export traces only from the resource owning the sink (the 'parent').
     * @param {string} params.parent - (Required) Required. The resource in which to create the sink (currently only project sinks are supported): "projects/[PROJECT_ID]" Examples: `"projects/my-trace-project"`, `"projects/123456789"`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.traceSinks.create = (params) => this._makeRequest('v2beta1/{+parent}/traceSinks', 'POST', params);

    /**
     * Updates a sink. This method updates fields in the existing sink according to the provided update mask. The sink's name cannot be changed nor any output-only fields (e.g. the writer_identity).
     * @param {string} params.name - (Required) Required. The full resource name of the sink to update, including the parent resource and the sink identifier: "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]" Example: `"projects/12345/traceSinks/my-sink-id"`.
     * @param {string} params.updateMask - Required. Field mask that specifies the fields in `trace_sink` that are to be updated. A sink field is overwritten if, and only if, it is in the update mask. `name` and `writer_identity` fields cannot be updated. An empty `update_mask` is considered an error. For a detailed `FieldMask` definition, see https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#fieldmask Example: `updateMask=output_config`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.traceSinks.patch = (params) => this._makeRequest('v2beta1/{+name}', 'PATCH', params);

    /**
     * Deletes a sink.
     * @param {string} params.name - (Required) Required. The full resource name of the sink to delete, including the parent resource and the sink identifier: "projects/[PROJECT_NUMBER]/traceSinks/[SINK_ID]" Example: `"projects/12345/traceSinks/my-sink-id"`.
     * @return {object} The API response object.
     */
    this.projects.traceSinks.delete = (params) => this._makeRequest('v2beta1/{+name}', 'DELETE', params);
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
