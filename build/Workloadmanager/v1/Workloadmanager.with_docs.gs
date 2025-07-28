
/**
 * Google Apps Script client library for the Workload Manager API
 * Documentation URL: https://cloud.google.com/workload-manager/docs
 * @class
 */
class Workloadmanager {
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
    this._rootUrl = 'https://workloadmanager.googleapis.com/';
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
    this.projects.locations.list = (params) => this._makeRequest('v1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1/{+name}:cancel', 'POST', params);

    this.projects.locations.evaluations = {};

    /**
     * Lists Evaluations in a given project and location.
     * @param {string} params.filter - Filter to be applied when listing the evaluation results.
     * @param {string} params.orderBy - Hint for how to order the results
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListEvaluationsRequest
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.list = (params) => this._makeRequest('v1/{+parent}/evaluations', 'GET', params);

    /**
     * Gets details of a single Evaluation.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Evaluation in a given project and location.
     * @param {string} params.evaluationId - Required. Id of the requesting object
     * @param {string} params.parent - (Required) Required. The resource prefix of the evaluation location using the form: `projects/{project_id}/locations/{location_id}`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.create = (params) => this._makeRequest('v1/{+parent}/evaluations', 'POST', params);

    /**
     * Deletes a single Evaluation.
     * @param {boolean} params.force - Optional. Followed the best practice from https://aip.dev/135#cascading-delete
     * @param {string} params.name - (Required) Required. Name of the resource
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.evaluations.executions = {};

    /**
     * Lists Executions in a given project and location.
     * @param {string} params.filter - Filtering results
     * @param {string} params.orderBy - Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The resource prefix of the Execution using the form: 'projects/{project}/locations/{location}/evaluations/{evaluation}'
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.executions.list = (params) => this._makeRequest('v1/{+parent}/executions', 'GET', params);

    /**
     * Gets details of a single Execution.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.executions.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Execution in a given project and location.
     * @param {string} params.name - (Required) Required. The resource name of the Execution using the form: 'projects/{project}/locations/{location}/evaluations/{evaluation}/executions/{execution}'
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.executions.run = (params) => this._makeRequest('v1/{+name}/executions:run', 'POST', params);

    /**
     * Deletes a single Execution.
     * @param {string} params.name - (Required) Required. Name of the resource
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.executions.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.evaluations.executions.results = {};

    /**
     * Lists the result of a single evaluation.
     * @param {string} params.filter - Filtering results
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The execution results. Format: {parent}/evaluations/*\/executions/*\/results
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.executions.results.list = (params) => this._makeRequest('v1/{+parent}/results', 'GET', params);

    this.projects.locations.evaluations.executions.scannedResources = {};

    /**
     * List all scanned resources for a single Execution.
     * @param {string} params.filter - Filtering results
     * @param {string} params.orderBy - Field to sort by. See https://google.aip.dev/132#ordering for more details.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. parent for ListScannedResourcesRequest
     * @param {string} params.rule - rule name
     * @return {object} The API response object.
     */
    this.projects.locations.evaluations.executions.scannedResources.list = (params) => this._makeRequest('v1/{+parent}/scannedResources', 'GET', params);

    this.projects.locations.rules = {};

    /**
     * Lists rules in a given project.
     * @param {string} params.customRulesBucket - The Cloud Storage bucket name for custom rules.
     * @param {string} params.evaluationType - Optional. The evaluation type of the rules will be applied to. The Cloud Storage bucket name for custom rules.
     * @param {string} params.filter - Filter based on primary_category, secondary_category
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. The [project] on which to execute the request. The format is: projects/{project_id}/locations/{location} Currently, the pre-defined rules are global available to all projects and all regions
     * @return {object} The API response object.
     */
    this.projects.locations.rules.list = (params) => this._makeRequest('v1/{+parent}/rules', 'GET', params);

    this.projects.locations.insights = {};

    /**
     * Write the data insights to workload manager data warehouse.
     * @param {string} params.location - (Required) Required. The GCP location. The format is: projects/{project}/locations/{location}.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.insights.writeInsight = (params) => this._makeRequest('v1/{+location}/insights:writeInsight', 'POST', params);

    /**
     * Delete the data insights from workload manager data warehouse.
     * @param {string} params.name - (Required) Required. The system id of the SAP system resource to delete. Formatted as projects/{project}/locations/{location}/sapSystems/{sap_system_id}
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.insights.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.discoveredprofiles = {};

    /**
     * List discovered workload profiles
     * @param {string} params.filter - Optional. Filtering results
     * @param {integer} params.pageSize - Optional. Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - Optional. A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListDiscoveredProfilesRequest
     * @return {object} The API response object.
     */
    this.projects.locations.discoveredprofiles.list = (params) => this._makeRequest('v1/{+parent}/discoveredprofiles', 'GET', params);
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
