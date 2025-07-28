
/**
 * Google Apps Script client library for the Firebase App Hosting API
 * Documentation URL: https://firebase.google.com/docs/app-hosting
 * @class
 */
class Firebaseapphosting {
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
    this._rootUrl = 'https://firebaseapphosting.googleapis.com/';
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

    this.projects.locations.backends = {};

    /**
     * Lists backends in a given project and location.
     * @param {string} params.filter - Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     * @param {string} params.orderBy - Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
     * @param {string} params.parent - (Required) Required. A parent name of the form `projects/{project}/locations/{locationId}`.
     * @param {boolean} params.showDeleted - Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.list = (params) => this._makeRequest('v1/{+parent}/backends', 'GET', params);

    /**
     * Gets information about a backend.
     * @param {string} params.name - (Required) Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new backend in a given project and location.
     * @param {string} params.backendId - Required. Id of the backend. Also used as the service ID for Cloud Run, and as part of the default domain name.
     * @param {string} params.parent - (Required) Required. A parent name of the form `projects/{project}/locations/{locationId}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.create = (params) => this._makeRequest('v1/{+parent}/backends', 'POST', params);

    /**
     * Updates the information for a single backend.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the backend is not found, a new backend will be created.
     * @param {string} params.name - (Required) Identifier. The resource name of the backend. Format: `projects/{project}/locations/{locationId}/backends/{backendId}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the backend resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated, without persisting the request or updating any resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single backend.
     * @param {string} params.etag - Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error.
     * @param {boolean} params.force - Optional. If set to true, any resources for this backend will also be deleted. Otherwise, any children resources will block deletion.
     * @param {string} params.name - (Required) Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated, without persisting the request or updating any resources.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.backends.traffic = {};

    /**
     * Gets information about a backend's traffic.
     * @param {string} params.name - (Required) Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/traffic`.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.traffic.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Updates a backend's traffic.
     * @param {string} params.name - (Required) Identifier. The resource name of the backend's traffic. Format: `projects/{project}/locations/{locationId}/backends/{backendId}/traffic`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and t he request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the traffic resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated, without persisting the request or updating any resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.traffic.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    this.projects.locations.backends.builds = {};

    /**
     * Lists builds in a given project, location, and backend.
     * @param {string} params.filter - Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     * @param {string} params.orderBy - Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent backend in the form `projects/{project}/locations/{locationId}/backends/{backendId}`.
     * @param {boolean} params.showDeleted - Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.builds.list = (params) => this._makeRequest('v1/{+parent}/builds', 'GET', params);

    /**
     * Gets information about a build.
     * @param {string} params.name - (Required) Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/builds/{buildId}`.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.builds.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new build for a backend.
     * @param {string} params.buildId - Required. Desired ID of the build being created.
     * @param {string} params.parent - (Required) Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.builds.create = (params) => this._makeRequest('v1/{+parent}/builds', 'POST', params);

    /**
     * Deletes a single build.
     * @param {string} params.etag - Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error.
     * @param {string} params.name - (Required) Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/builds/{buildId}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated and default values populated, without persisting the request or deleting any resources.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.builds.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);

    this.projects.locations.backends.rollouts = {};

    /**
     * Lists rollouts for a backend.
     * @param {string} params.filter - Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     * @param {string} params.orderBy - Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`.
     * @param {boolean} params.showDeleted - Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.rollouts.list = (params) => this._makeRequest('v1/{+parent}/rollouts', 'GET', params);

    /**
     * Gets information about a rollout.
     * @param {string} params.name - (Required) Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/rollouts/{rolloutId}`.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.rollouts.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Creates a new rollout for a backend.
     * @param {string} params.parent - (Required) Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.rolloutId - Optional. Desired ID of the rollout being created.
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.rollouts.create = (params) => this._makeRequest('v1/{+parent}/rollouts', 'POST', params);

    this.projects.locations.backends.domains = {};

    /**
     * Lists domains of a backend.
     * @param {string} params.filter - Optional. A filter to narrow down results to a preferred subset. Learn more about filtering in Google's [AIP 160 standard](https://google.aip.dev/160).
     * @param {string} params.orderBy - Optional. Hint for how to order the results. Supported fields are `name` and `createTime`. To specify descending order, append a `desc` suffix.
     * @param {integer} params.pageSize - Optional. The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - Optional. A page token received from the nextPageToken field in the response. Send that page token to receive the subsequent page.
     * @param {string} params.parent - (Required) Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`.
     * @param {boolean} params.showDeleted - Optional. If true, the request returns soft-deleted resources that haven't been fully-deleted yet.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.domains.list = (params) => this._makeRequest('v1/{+parent}/domains', 'GET', params);

    /**
     * Gets information about a domain.
     * @param {string} params.name - (Required) Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/domains/{domainId}`.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.domains.get = (params) => this._makeRequest('v1/{+name}', 'GET', params);

    /**
     * Links a new domain to a backend.
     * @param {string} params.domainId - Required. Id of the domain to create. Must be a valid domain name.
     * @param {string} params.parent - (Required) Required. The parent backend in the format: `projects/{project}/locations/{locationId}/backends/{backendId}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated and default values populated, without persisting the request or creating any resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.domains.create = (params) => this._makeRequest('v1/{+parent}/domains', 'POST', params);

    /**
     * Updates the information for a single domain.
     * @param {boolean} params.allowMissing - Optional. If set to true, and the domain is not found, a new domain will be created.
     * @param {string} params.name - (Required) Identifier. The resource name of the domain, e.g. `/projects/p/locations/l/backends/b/domains/foo.com`
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the Domain resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated and default values populated, without persisting the request or modifying any resources.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.domains.patch = (params) => this._makeRequest('v1/{+name}', 'PATCH', params);

    /**
     * Deletes a single domain.
     * @param {string} params.etag - Optional. If the client provided etag is out of date, delete will be returned FAILED_PRECONDITION error.
     * @param {string} params.name - (Required) Required. Name of the resource in the format: `projects/{project}/locations/{locationId}/backends/{backendId}/domains/{domainId}`.
     * @param {string} params.requestId - Optional. An optional request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {boolean} params.validateOnly - Optional. Indicates that the request should be validated and default values populated, without persisting the request or deleting any resources.
     * @return {object} The API response object.
     */
    this.projects.locations.backends.domains.delete = (params) => this._makeRequest('v1/{+name}', 'DELETE', params);
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
