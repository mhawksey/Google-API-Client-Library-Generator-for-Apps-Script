
/**
 * Google Apps Script client library for the Datastream API
 * Documentation URL: https://cloud.google.com/datastream/
 * @class
 */
class Datastream {
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
    this._rootUrl = 'https://datastream.googleapis.com/';
    this._servicePath = '';

    // --- Public Interface Initialization ---

    this.projects = {};

    this.projects.locations = {};

    /**
     * The FetchStaticIps API call exposes the static IP addresses used by Datastream.
     * @param {string} params.name - (Required) Required. The name resource of the Response type. Must be in the format `projects/*\/locations/*`.
     * @param {integer} params.pageSize - Maximum number of Ips to return, will likely not be specified.
     * @param {string} params.pageToken - A page token, received from a previous `ListStaticIps` call. will likely not be specified.
     * @return {object} The API response object.
     */
    this.projects.locations.fetchStaticIps = (params) => this._makeRequest('v1alpha1/{+name}:fetchStaticIps', 'GET', params);

    /**
     * Lists information about the supported locations for this service.
     * @param {string} params.extraLocationTypes - Optional. A list of extra location types that should be used as conditions for controlling the visibility of the locations.
     * @param {string} params.filter - A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
     * @param {string} params.name - (Required) The resource that owns the locations collection, if applicable.
     * @param {integer} params.pageSize - The maximum number of results to return. If not set, the service selects a default.
     * @param {string} params.pageToken - A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
     * @return {object} The API response object.
     */
    this.projects.locations.list = (params) => this._makeRequest('v1alpha1/{+name}/locations', 'GET', params);

    /**
     * Gets information about a location.
     * @param {string} params.name - (Required) Resource name for the location.
     * @return {object} The API response object.
     */
    this.projects.locations.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    this.projects.locations.operations = {};

    /**
     * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
     * @param {string} params.filter - The standard list filter.
     * @param {string} params.name - (Required) The name of the operation's parent resource.
     * @param {integer} params.pageSize - The standard list page size.
     * @param {string} params.pageToken - The standard list page token.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.list = (params) => this._makeRequest('v1alpha1/{+name}/operations', 'GET', params);

    /**
     * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
     * @param {string} params.name - (Required) The name of the operation resource.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
     * @param {string} params.name - (Required) The name of the operation resource to be deleted.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of `1`, corresponding to `Code.CANCELLED`.
     * @param {string} params.name - (Required) The name of the operation resource to be cancelled.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.operations.cancel = (params) => this._makeRequest('v1alpha1/{+name}:cancel', 'POST', params);

    this.projects.locations.connectionProfiles = {};

    /**
     * Use this method to list connection profiles created in a project and location.
     * @param {string} params.filter - Filter request.
     * @param {string} params.orderBy - Order by fields for the result.
     * @param {integer} params.pageSize - Maximum number of connection profiles to return. If unspecified, at most 50 connection profiles will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Page token received from a previous `ListConnectionProfiles` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListConnectionProfiles` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent that owns the collection of connection profiles.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.list = (params) => this._makeRequest('v1alpha1/{+parent}/connectionProfiles', 'GET', params);

    /**
     * Use this method to get details about a connection profile.
     * @param {string} params.name - (Required) Required. The name of the connection profile resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Use this method to create a connection profile in a project and location.
     * @param {string} params.connectionProfileId - Required. The connection profile identifier.
     * @param {string} params.parent - (Required) Required. The parent that owns the collection of ConnectionProfiles.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.create = (params) => this._makeRequest('v1alpha1/{+parent}/connectionProfiles', 'POST', params);

    /**
     * Use this method to update the parameters of a connection profile.
     * @param {string} params.name - (Required) Output only. The resource's name.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the ConnectionProfile resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {boolean} params.validateOnly - Optional. Only validate the connection profile, but do not update any resources. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Use this method to delete a connection profile..
     * @param {string} params.name - (Required) Required. The name of the connection profile resource to delete.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Use this method to discover a connection profile. The discover API call exposes the data objects and metadata belonging to the profile. Typically, a request returns children data objects under a parent data object that's optionally supplied in the request.
     * @param {string} params.parent - (Required) Required. The parent resource of the ConnectionProfile type. Must be in the format `projects/*\/locations/*`.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.connectionProfiles.discover = (params) => this._makeRequest('v1alpha1/{+parent}/connectionProfiles:discover', 'POST', params);

    this.projects.locations.streams = {};

    /**
     * Use this method to list streams in a project and location.
     * @param {string} params.filter - Filter request.
     * @param {string} params.orderBy - Order by fields for the result.
     * @param {integer} params.pageSize - Maximum number of streams to return. If unspecified, at most 50 streams will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Page token received from a previous `ListStreams` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreams` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent that owns the collection of streams.
     * @return {object} The API response object.
     */
    this.projects.locations.streams.list = (params) => this._makeRequest('v1alpha1/{+parent}/streams', 'GET', params);

    /**
     * Use this method to get details about a stream.
     * @param {string} params.name - (Required) Required. The name of the stream resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.streams.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Use this method to create a stream.
     * @param {boolean} params.force - Optional. Create the stream without validating it.
     * @param {string} params.parent - (Required) Required. The parent that owns the collection of streams.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.streamId - Required. The stream identifier.
     * @param {boolean} params.validateOnly - Optional. Only validate the stream, but do not create any resources. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.streams.create = (params) => this._makeRequest('v1alpha1/{+parent}/streams', 'POST', params);

    /**
     * Use this method to update the configuration of a stream.
     * @param {boolean} params.force - Optional. Execute the update without validating it.
     * @param {string} params.name - (Required) Output only. The stream's name.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.updateMask - Optional. Field mask is used to specify the fields to be overwritten in the stream resource by the update. The fields specified in the update_mask are relative to the resource, not the full request. A field will be overwritten if it is in the mask. If the user does not provide a mask then all fields will be overwritten.
     * @param {boolean} params.validateOnly - Optional. Only validate the stream with the changes, without actually updating it. The default is false.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.streams.patch = (params) => this._makeRequest('v1alpha1/{+name}', 'PATCH', params);

    /**
     * Use this method to delete a stream.
     * @param {string} params.name - (Required) Required. The name of the stream resource to delete.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.streams.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    /**
     * Use this method to fetch any errors associated with a stream.
     * @param {string} params.stream - (Required) Name of the Stream resource for which to fetch any errors.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.streams.fetchErrors = (params) => this._makeRequest('v1alpha1/{+stream}:fetchErrors', 'POST', params);

    this.projects.locations.streams.objects = {};

    /**
     * Use this method to get details about a stream object.
     * @param {string} params.name - (Required) Required. The name of the stream object resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.streams.objects.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Use this method to list the objects of a specific stream.
     * @param {integer} params.pageSize - Maximum number of objects to return. Default is 50. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Page token received from a previous `ListStreamObjectsRequest` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListStreamObjectsRequest` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent stream that owns the collection of objects.
     * @return {object} The API response object.
     */
    this.projects.locations.streams.objects.list = (params) => this._makeRequest('v1alpha1/{+parent}/objects', 'GET', params);

    /**
     * Starts backfill job for the specified stream object.
     * @param {string} params.object - (Required) Required. The name of the stream object resource to start a backfill job for.
     * @return {object} The API response object.
     */
    this.projects.locations.streams.objects.startBackfillJob = (params) => this._makeRequest('v1alpha1/{+object}:startBackfillJob', 'POST', params);

    /**
     * Stops the backfill job for the specified stream object.
     * @param {string} params.object - (Required) Required. The name of the stream object resource to stop the backfill job for.
     * @return {object} The API response object.
     */
    this.projects.locations.streams.objects.stopBackfillJob = (params) => this._makeRequest('v1alpha1/{+object}:stopBackfillJob', 'POST', params);

    this.projects.locations.privateConnections = {};

    /**
     * Use this method to create a private connectivity configuration.
     * @param {string} params.parent - (Required) Required. The parent that owns the collection of PrivateConnections.
     * @param {string} params.privateConnectionId - Required. The private connectivity identifier.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.create = (params) => this._makeRequest('v1alpha1/{+parent}/privateConnections', 'POST', params);

    /**
     * Use this method to get details about a private connectivity configuration.
     * @param {string} params.name - (Required) Required. The name of the private connectivity configuration to get.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Use this method to list private connectivity configurations in a project and location.
     * @param {string} params.filter - Filter request.
     * @param {string} params.orderBy - Order by fields for the result.
     * @param {integer} params.pageSize - Maximum number of private connectivity configurations to return. If unspecified, at most 50 private connectivity configurations that will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Page token received from a previous `ListPrivateConnections` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPrivateConnections` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent that owns the collection of private connectivity configurations.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.list = (params) => this._makeRequest('v1alpha1/{+parent}/privateConnections', 'GET', params);

    /**
     * Use this method to delete a private connectivity configuration.
     * @param {boolean} params.force - Optional. If set to true, any child routes that belong to this PrivateConnection will also be deleted.
     * @param {string} params.name - (Required) Required. The name of the private connectivity configuration to delete.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);

    this.projects.locations.privateConnections.routes = {};

    /**
     * Use this method to create a route for a private connectivity in a project and location.
     * @param {string} params.parent - (Required) Required. The parent that owns the collection of Routes.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes since the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @param {string} params.routeId - Required. The Route identifier.
     * @param {object} params.resource - The request body.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.routes.create = (params) => this._makeRequest('v1alpha1/{+parent}/routes', 'POST', params);

    /**
     * Use this method to get details about a route.
     * @param {string} params.name - (Required) Required. The name of the Route resource to get.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.routes.get = (params) => this._makeRequest('v1alpha1/{+name}', 'GET', params);

    /**
     * Use this method to list routes created for a private connectivity in a project and location.
     * @param {string} params.filter - Filter request.
     * @param {string} params.orderBy - Order by fields for the result.
     * @param {integer} params.pageSize - Maximum number of Routes to return. The service may return fewer than this value. If unspecified, at most 50 Routes will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.
     * @param {string} params.pageToken - Page token received from a previous `ListRoutes` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListRoutes` must match the call that provided the page token.
     * @param {string} params.parent - (Required) Required. The parent that owns the collection of Routess.
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.routes.list = (params) => this._makeRequest('v1alpha1/{+parent}/routes', 'GET', params);

    /**
     * Use this method to delete a route.
     * @param {string} params.name - (Required) Required. The name of the Route resource to delete.
     * @param {string} params.requestId - Optional. A request ID to identify requests. Specify a unique request ID so that if you must retry your request, the server will know to ignore the request if it has already been completed. The server will guarantee that for at least 60 minutes after the first request. For example, consider a situation where you make an initial request and the request times out. If you make the request again with the same request ID, the server can check if original operation with the same request ID was received, and if so, will ignore the second request. This prevents clients from accidentally creating duplicate commitments. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000).
     * @return {object} The API response object.
     */
    this.projects.locations.privateConnections.routes.delete = (params) => this._makeRequest('v1alpha1/{+name}', 'DELETE', params);
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
