
/**
 * Google Apps Script client library for the Rapid Migration Assessment API
 * Documentation URL: https://cloud.google.com/migration-center
 * @class
 */
class Rapidmigrationassessment {
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
    this._rootUrl = 'https://rapidmigrationassessment.googleapis.com/';
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

    this.projects.locations.collectors = {};

    /**
     * Create a Collector to manage the on-prem appliance which collects information about Customer assets.
     * @param {string} params.collectorId - Required. Id of the requesting object.
     * @param {string} params.parent - (Required) Required. Name of the parent (project+location).
     * @param {string} params.requestId - Optional. An optional request ID to identify requests.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collectors.create = (params) => this._makeRequest('v1/{+parent}/collectors', 'POST', params);

    /**
     * Lists Collectors in a given project and location.
     * @param {string} params.filter - Filtering results.
     * @param {string} params.orderBy - Hint for how to order the results.
     * @param {integer} params.pageSize - Requested page size. Server may return fewer items than requested. If unspecified, server will pick an appropriate default.
     * @param {string} params.pageToken - A token identifying a page of results the server should return.
     * @param {string} params.parent - (Required) Required. Parent value for ListCollectorsRequest.
     * @return {object} The API response object.
     */
    this.projects.locations.collectors.list = (params) => this._makeRequest('v1/{+parent}/collectors', 'GET', params);

    /**
     * Gets details of a single Collector.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.collectors.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates the parameters of a single Collector.
     * @param {string} params.name - (Required) name of resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Required. Field mask is used to specify the fields to be overwritten in the Collector resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collectors.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single Collector - changes state of collector to "Deleting". Background jobs does final deletion through producer API.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.collectors.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Resumes the given collector.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collectors.resume = (params) => this._makeRequest('v1/{+name}:resume', 'POST', params);

    /**
     * Registers the given collector.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collectors.register = (params) => this._makeRequest('v1/{+name}:register', 'POST', params);

    /**
     * Pauses the given collector.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.collectors.pause = (params) => this._makeRequest('v1/{+name}:pause', 'POST', params);

    this.projects.locations.annotations = {};

    /**
     * Creates an Annotation
     * @param {string} params.parent - (Required) Required. Name of the parent (project+location).
     * @param {string} params.requestId - Optional. An optional request ID to identify requests.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.annotations.create = (params) => this._makeRequest('v1/{+parent}/annotations', 'POST', params);

    /**
     * Gets details of a single Annotation.
     * @param {string} params.name - (Required) Required. Name of the resource.
     * @return {object} The API response object.
     */
    this.projects.locations.annotations.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);
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
