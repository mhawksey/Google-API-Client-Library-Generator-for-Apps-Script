
/**
 * Google Apps Script client library for the Cloud TPU API
 * Documentation URL: https://cloud.google.com/tpu/
 * @class
 */
class Tpu {
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
    this._rootUrl = 'https://tpu.googleapis.com/';
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
    this.projects.locations.list = (params) => this._makeRequest('v2/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Generates the Cloud TPU service identity for the project.
     * @param {string} params.parent - (Required) Required. The parent resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.generateServiceIdentity = (params) => this._makeRequest('v2/{+parent}:generateServiceIdentity', 'POST', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v2/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v2/{+name}:cancel', 'POST', params);

    this.projects.locations.nodes = {};

    /**
     * Lists nodes.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The parent resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.nodes.list = (params) => this._makeRequest('v2/{+parent}/nodes', 'GET', params);

    /**
     * Gets the details of a node.
     * @param {string} params.name - (Required) Required. The resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.nodes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a node.
     * @param {string} params.nodeId - The unqualified resource name.
     * @param {string} params.parent - (Required) Required. The parent resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.nodes.create = (params) => this._makeRequest('v2/{+parent}/nodes', 'POST', params);

    /**
     * Deletes a node.
     * @param {string} params.name - (Required) Required. The resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.nodes.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Stops a node. This operation is only available with single TPU nodes.
     * @param {string} params.name - (Required) Required. The resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.nodes.stop = (params) => this._makeRequest('v2/{+name}:stop', 'POST', params);

    /**
     * Starts a node.
     * @param {string} params.name - (Required) Required. The resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.nodes.start = (params) => this._makeRequest('v2/{+name}:start', 'POST', params);

    /**
     * Updates the configurations of a node.
     * @param {string} params.name - (Required) Output only. Immutable. The name of the TPU.
     * @param {string} params.updateMask - Required. Mask of fields from Node to update. Supported fields: [description, tags, labels, metadata, network_config.enable_external_ips].
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.nodes.patch = (params) => this._makeRequest('v2/{+name}', 'PATCH', params);

    /**
     * Retrieves the guest attributes for the node.
     * @param {string} params.name - (Required) Required. The resource name.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.nodes.getGuestAttributes = (params) => this._makeRequest('v2/{+name}:getGuestAttributes', 'POST', params);

    this.projects.locations.queuedResources = {};

    /**
     * Lists queued resources.
     * @param {integer} params.pageSize - Optional. The maximum number of items to return.
     * @param {string} params.pageToken - Optional. The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The parent resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.queuedResources.list = (params) => this._makeRequest('v2/{+parent}/queuedResources', 'GET', params);

    /**
     * Gets details of a queued resource.
     * @param {string} params.name - (Required) Required. The resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.queuedResources.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    /**
     * Creates a QueuedResource TPU instance.
     * @param {string} params.parent - (Required) Required. The parent resource name.
     * @param {string} params.queuedResourceId - Optional. The unqualified resource name. Should follow the `^[A-Za-z0-9_.~+%-]+$` regex format.
     * @param {string} params.requestId - Optional. Idempotent request UUID.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.queuedResources.create = (params) => this._makeRequest('v2/{+parent}/queuedResources', 'POST', params);

    /**
     * Deletes a QueuedResource TPU instance.
     * @param {boolean} params.force - Optional. If set to true, all running nodes belonging to this queued resource will be deleted first and then the queued resource will be deleted. Otherwise (i.e. force=false), the queued resource will only be deleted if its nodes have already been deleted or the queued resource is in the ACCEPTED, FAILED, or SUSPENDED state.
     * @param {string} params.name - (Required) Required. The resource name.
     * @param {string} params.requestId - Optional. Idempotent request UUID.
     * @return {object} The API response object.
     */
    this.projects.locations.queuedResources.delete = (params) => this._makeRequest('v2/{+name}', 'DELETE', params);

    /**
     * Resets a QueuedResource TPU instance
     * @param {string} params.name - (Required) Required. The name of the queued resource.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.queuedResources.reset = (params) => this._makeRequest('v2/{+name}:reset', 'POST', params);

    this.projects.locations.acceleratorTypes = {};

    /**
     * Lists accelerator types supported by this API.
     * @param {string} params.filter - List filter.
     * @param {string} params.orderBy - Sort results.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The parent resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.acceleratorTypes.list = (params) => this._makeRequest('v2/{+parent}/acceleratorTypes', 'GET', params);

    /**
     * Gets AcceleratorType.
     * @param {string} params.name - (Required) Required. The resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.acceleratorTypes.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);

    this.projects.locations.runtimeVersions = {};

    /**
     * Lists runtime versions supported by this API.
     * @param {string} params.filter - List filter.
     * @param {string} params.orderBy - Sort results.
     * @param {integer} params.pageSize - The maximum number of items to return.
     * @param {string} params.pageToken - The next_page_token value returned from a previous List request, if any.
     * @param {string} params.parent - (Required) Required. The parent resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimeVersions.list = (params) => this._makeRequest('v2/{+parent}/runtimeVersions', 'GET', params);

    /**
     * Gets a runtime version.
     * @param {string} params.name - (Required) Required. The resource name.
     * @return {object} The API response object.
     */
    this.projects.locations.runtimeVersions.get = (params) => this._makeRequest('v2/{+name}', 'GET', params);
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
