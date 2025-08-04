
/**
 * Google Apps Script client library for the Data Lineage API
 * Documentation URL: https://cloud.google.com/data-catalog
 * @class
 */
class Datalineage {
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
    this._rootUrl = 'https://datalineage.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * Creates new lineage events together with their parents: process and run. Updates the process and run if they already exist. Mapped from Open Lineage specification: https://github.com/OpenLineage/OpenLineage/blob/main/spec/OpenLineage.json.
     * @param {string} params.parent - (Required) Required. The name of the project and its location that should own the process, run, and lineage event.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processOpenLineageRunEvent = (params) => this._makeRequest('v1/{+parent}:processOpenLineageRunEvent', 'POST', params);

    /**
     * Retrieve a list of links connected to a specific asset. Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are stored in the same project as the Lineage Events that create them. You can retrieve links in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
     * @param {string} params.parent - (Required) Required. The project and location you want search in.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.searchLinks = (params) => this._makeRequest('v1/{+parent}:searchLinks', 'POST', params);

    /**
     * Retrieve information about LineageProcesses associated with specific links. LineageProcesses are transformation pipelines that result in data flowing from **source** to **target** assets. Links between assets represent this operation. If you have specific link names, you can use this method to verify which LineageProcesses contribute to creating those links. See the SearchLinks method for more information on how to retrieve link name. You can retrieve the LineageProcess information in every project where you have the `datalineage.events.get` permission. The project provided in the URL is used for Billing and Quota.
     * @param {string} params.parent - (Required) Required. The project and location where you want to search.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.batchSearchLinkProcesses = (params) => this._makeRequest('v1/{+parent}:batchSearchLinkProcesses', 'POST', params);

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

    this.projects.locations.processes = {};

    /**
     * Creates a new process.
     * @param {string} params.parent - (Required) Required. The name of the project and its location that should own the process.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.create = (params) => this._makeRequest('v1/{+parent}/processes', 'POST', params);

    /**
     * Updates a process.
     * @param {boolean} params.allowMissing - If set to true and the process is not found, the request inserts it.
     * @param {string} params.name - (Required) Immutable. The resource name of the lineage process. Format: `projects/{project}/locations/{location}/processes/{process}`. Can be specified or auto-assigned. {process} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     * @param {string} params.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     * @param {string} params.updateMask - The list of fields to update. Currently not used. The whole message is updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets the details of the specified process.
     * @param {string} params.name - (Required) Required. The name of the process to get.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * List processes in the given project and location. List order is descending by insertion time.
     * @param {integer} params.pageSize - The maximum number of processes to return. The service may return fewer than this value. If unspecified, at most 50 processes are returned. The maximum value is 100; values greater than 100 are cut to 100.
     * @param {string} params.pageToken - The page token received from a previous `ListProcesses` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the project and its location that owns this collection of processes.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.list = (params) => this._makeRequest('v1/{+parent}/processes', 'GET', params);

    /**
     * Deletes the process with the specified name.
     * @param {boolean} params.allowMissing - If set to true and the process is not found, the request succeeds but the server doesn't perform any actions.
     * @param {string} params.name - (Required) Required. The name of the process to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.processes.runs = {};

    /**
     * Creates a new run.
     * @param {string} params.parent - (Required) Required. The name of the process that should own the run.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.runs.create = (params) => this._makeRequest('v1/{+parent}/runs', 'POST', params);

    /**
     * Updates a run.
     * @param {boolean} params.allowMissing - If set to true and the run is not found, the request creates it.
     * @param {string} params.name - (Required) Immutable. The resource name of the run. Format: `projects/{project}/locations/{location}/processes/{process}/runs/{run}`. Can be specified or auto-assigned. {run} must be not longer than 200 characters and only contain characters in a set: `a-zA-Z0-9_-:.`
     * @param {string} params.updateMask - The list of fields to update. Currently not used. The whole message is updated.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.runs.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Gets the details of the specified run.
     * @param {string} params.name - (Required) Required. The name of the run to get.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.runs.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists runs in the given project and location. List order is descending by `start_time`.
     * @param {integer} params.pageSize - The maximum number of runs to return. The service may return fewer than this value. If unspecified, at most 50 runs are returned. The maximum value is 100; values greater than 100 are cut to 100.
     * @param {string} params.pageToken - The page token received from a previous `ListRuns` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of process that owns this collection of runs.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.runs.list = (params) => this._makeRequest('v1/{+parent}/runs', 'GET', params);

    /**
     * Deletes the run with the specified name.
     * @param {boolean} params.allowMissing - If set to true and the run is not found, the request succeeds but the server doesn't perform any actions.
     * @param {string} params.name - (Required) Required. The name of the run to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.runs.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.processes.runs.lineageEvents = {};

    /**
     * Creates a new lineage event.
     * @param {string} params.parent - (Required) Required. The name of the run that should own the lineage event.
     * @param {string} params.requestId - Optional. A unique identifier for this request. Restricted to 36 ASCII characters. A random UUID is recommended. This request is idempotent only if a `request_id` is provided.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.runs.lineageEvents.create = (params) => this._makeRequest('v1/{+parent}/lineageEvents', 'POST', params);

    /**
     * Gets details of a specified lineage event.
     * @param {string} params.name - (Required) Required. The name of the lineage event to get.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.runs.lineageEvents.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Lists lineage events in the given project and location. The list order is not defined.
     * @param {integer} params.pageSize - The maximum number of lineage events to return. The service may return fewer events than this value. If unspecified, at most 50 events are returned. The maximum value is 100; values greater than 100 are cut to 100.
     * @param {string} params.pageToken - The page token received from a previous `ListLineageEvents` call. Specify it to get the next page. When paginating, all other parameters specified in this call must match the parameters of the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The name of the run that owns the collection of lineage events to get.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.runs.lineageEvents.list = (params) => this._makeRequest('v1/{+parent}/lineageEvents', 'GET', params);

    /**
     * Deletes the lineage event with the specified name.
     * @param {boolean} params.allowMissing - If set to true and the lineage event is not found, the request succeeds but the server doesn't perform any actions.
     * @param {string} params.name - (Required) Required. The name of the lineage event to delete.
     * @return {object} The API response object.
     */
    this.projects.locations.processes.runs.lineageEvents.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
