
/**
 * Google Apps Script client library for the Looker (Google Cloud core) API
 * Documentation URL: https://cloud.google.com/looker/docs/reference/rest/
 * @class
 */
class Looker {
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
    this._rootUrl = 'https://looker.googleapis.com/';
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

    this.projects.locations.instances = {};

    /**
     * Lists Instances in a given project and location.
     * @param {integer} params.pageSize - The maximum number of instances to return. If unspecified at most 256 will be returned. The maximum possible value is 2048.
     * @param {string} params.pageToken - A page token received from a previous ListInstancesRequest.
     * @param {string} params.parent - (Required) Required. Format: `projects/{project}/locations/{location}`.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.list = (params) => this._makeRequest('v1/{+parent}/instances', 'GET', params);

    /**
     * Gets details of a single Instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project}/locations/{location}/instances/{instance}`.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new Instance in a given project and location.
     * @param {string} params.instanceId - Required. The unique instance identifier. Must contain only lowercase letters, numbers, or hyphens, with the first character a letter and the last a letter or a number. 63 characters maximum.
     * @param {string} params.parent - (Required) Required. Format: `projects/{project}/locations/{location}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.create = (params) => this._makeRequest('v1/{+parent}/instances', 'POST', params);

    /**
     * Delete instance.
     * @param {boolean} params.force - Whether to force cascading delete.
     * @param {string} params.name - (Required) Required. Format: `projects/{project}/locations/{location}/instances/{instance}`.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    /**
     * Update Instance.
     * @param {string} params.name - (Required) Output only. Format: `projects/{project}/locations/{location}/instances/{instance}`.
     * @param {string} params.updateMask - Required. Field mask used to specify the fields to be overwritten in the Instance resource by the update. The fields specified in the mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Restart instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project}/locations/{location}/instances/{instance}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.restart = (params) => this._makeRequest('v1/{+name}:restart', 'POST', params);

    /**
     * Restore Looker instance.
     * @param {string} params.name - (Required) Required. Instance being restored Format: projects/{project}/locations/{location}/instances/{instance}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.restore = (params) => this._makeRequest('v1/{+name}:restore', 'POST', params);

    /**
     * Import instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project}/locations/{location}/instances/{instance}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.import = (params) => this._makeRequest('v1/{+name}:import', 'POST', params);

    /**
     * Export instance.
     * @param {string} params.name - (Required) Required. Format: `projects/{project}/locations/{location}/instances/{instance}`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.export = (params) => this._makeRequest('v1/{+name}:export', 'POST', params);

    this.projects.locations.instances.backups = {};

    /**
     * List backups of Looker instance.
     * @param {string} params.orderBy - Sort results. Default order is "create_time desc". Other supported fields are "state" and "expire_time". https://google.aip.dev/132#ordering
     * @param {integer} params.pageSize - The maximum number of instances to return.
     * @param {string} params.pageToken - A page token received from a previous ListInstances request.
     * @param {string} params.parent - (Required) Required. Format: projects/{project}/locations/{location}/instances/{instance}.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.backups.list = (params) => this._makeRequest('v1/{+parent}/backups', 'GET', params);

    /**
     * @param {string} params.name - (Required) Required. Format: `projects/{project}/locations/{location}/instances/{instance}/backups/{backup}`.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.backups.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Backup Looker instance.
     * @param {string} params.parent - (Required) Required. Format: projects/{project}/locations/{location}/instances/{instance}
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.instances.backups.create = (params) => this._makeRequest('v1/{+parent}/backups', 'POST', params);

    /**
     * Delete backup.
     * @param {string} params.name - (Required) Required. Format: projects/{project}/locations/{location}/instances/{instance}/backups/{backup}
     * @return {object} The API response object.
     */
    this.projects.locations.instances.backups.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
